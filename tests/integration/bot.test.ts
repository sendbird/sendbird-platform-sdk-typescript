import { CreateAnOpenChannelRequest } from "./../../models/CreateAnOpenChannelRequest";
import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import {
  BotApi,
  CreateABotRequest,
  CreateAGroupChannelRequest,
  GroupChannelApi,
  SendABotMessageRequest,
  HttpFile,
} from "../../index";
import { hasValidField } from "./helper";
import {
  GLOBAL_GROUP_CHANNEL_ACCESS_CODE,
  MASTER_USER_ID,
  USERS,
} from "./constants";
import FileLoader, { FileAsset } from "../utils/fileLoader";
import { readFileSync } from 'fs';

describe("Bot API", () => {
  const APP_ID = process.env.APP_ID || "";
  const API_TOKEN = process.env.API_TOKEN || "";
  let botApi: BotApi;
  let groupChannelApi: GroupChannelApi;

  beforeEach(() => {
    const serverConfig = new ServerConfiguration(
      `https://api-${APP_ID}.sendbird.com`,
      { app_id: APP_ID }
    );
    const configuration = createConfiguration({
      baseServer: serverConfig,
    });
    botApi = new BotApi(configuration);
    groupChannelApi = new GroupChannelApi(configuration);
  });

  it("call listBots, createABot, joinChannels, and leaveAGroupChannel", async () => {
    const CHANNEL_URL = "test-bot-channel-url";
    // Cleanup first
    try {
      await groupChannelApi.deleteAGroupChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      console.warn("Failed to delete channel:", e);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const request: CreateAGroupChannelRequest = {
      accessCode: GLOBAL_GROUP_CHANNEL_ACCESS_CODE,
      blockSdkUserChannelJoin: true,
      channelUrl: CHANNEL_URL,
      coverUrl: "empty",
      customType: "data",
      data: "data",
      /**
       * Specifies one or more key-value pair items which set the invitation status of each user invited to the channel. The key should be a user_id and the value should be their joining status. Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
       */
      invitationStatus: {
        MASTER_USER_ID: "joined",
      },
      inviterId: MASTER_USER_ID,
      isDistinct: false,
      isEphemeral: true,
      isPublic: true,
      isSuper: true,
      name: "test",
      operatorIds: [],
      strict: true,
      users: USERS.map((id) => ({ userId: id })),
    };

    const createGroupChannelresponse =
      await groupChannelApi.createAGroupChannel({
        apiToken: API_TOKEN,
        createAGroupChannelRequest: request,
      });

    expect(createGroupChannelresponse).toHaveProperty("channelUrl");
    expect(createGroupChannelresponse.channelUrl).toBe(CHANNEL_URL);

    await new Promise((resolve) => setTimeout(resolve, 100));

    const listBotsResponse = await botApi.listBots({
      apiToken: API_TOKEN,
    });

    let botUserId: string | undefined;

    expect(listBotsResponse).toHaveProperty("bots");
    if ((listBotsResponse.bots?.length || 0) > 0) {
      botUserId = listBotsResponse.bots?.[0].bot?.botUserid;
      listBotsResponse.bots?.forEach((bot) => {
        if (hasValidField(bot, "botCallbackUrl")) {
          expect(typeof bot.botCallbackUrl).toBe("string");
        }

        if (hasValidField(bot, "channelInvitationPreference")) {
          expect(typeof bot.channelInvitationPreference).toBe("number");
        }

        if (hasValidField(bot, "createdAt")) {
          expect(typeof bot.createdAt).toBe("number");
        }

        if (hasValidField(bot, "enableMarkAsRead")) {
          expect(typeof bot.enableMarkAsRead).toBe("boolean");
        }

        if (hasValidField(bot, "isPrivacyMode")) {
          expect(typeof bot.isPrivacyMode).toBe("boolean");
        }

        if (hasValidField(bot, "showMember")) {
          expect(typeof bot.showMember).toBe("boolean");
        }
      });
    } else {
      const BOT_NICKNAME = "test-integration-bot-nickname";
      const BOT_USER_ID = "test-integration-bot-user-id";
      const request: CreateABotRequest = {
        botCallbackUrl: "https://example.com/callback",
        botNickname: BOT_NICKNAME,
        botProfileUrl: "https://example.com/profile.jpg",
        botType: "CUSTOMIZED_BOT",
        /**
         * Specifies the unique ID of a bot. The length is limited to 80 characters.
         */
        botUserid: BOT_USER_ID,
        /**
         * Determines whether to forward all or specific messages to the bot in channels where the bot is a member. If set to true, only messages starting with a \"/\" or mentioning the bot_userid are forwarded to the bot. If set to false, all messages are forwarded. This property can help protect the privacy of users' chat logs by configuring the bot to only receive messages addressed to the bot.
         */
        isPrivacyMode: true,
        channelInvitationPreference: 0,
        enableMarkAsRead: true,
        showMember: true,
      };
      botUserId = BOT_USER_ID;
      const createABotResponse = await botApi.createABot({
        createABotRequest: request,
        apiToken: API_TOKEN,
      });

      expect(createABotResponse).toHaveProperty("bot");
      expect(createABotResponse.bot).toHaveProperty("botUserid");
      expect(createABotResponse.bot.botUserid).toBe(BOT_USER_ID);

      if (!botUserId) return;
      await botApi.joinChannels({
        botUserid: botUserId,
        joinChannelsRequest: {
          channelUrls: [CHANNEL_URL],
        },
        apiToken: API_TOKEN,
      });

      const groupChannelResponse = await groupChannelApi.getAGroupChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });

      expect(groupChannelResponse).toHaveProperty("channelUrl");
      expect(groupChannelResponse.channelUrl).toBe(CHANNEL_URL);

      expect(groupChannelResponse).toHaveProperty("hasBot");
      expect(groupChannelResponse.hasBot).toBe(true);

      const leaveAGroupChannelResponse = await botApi.leaveAGroupChannel({
        botUserid: botUserId,
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });

      expect(leaveAGroupChannelResponse).toBeDefined();
    }
    // Cleanup last
    try {
      await groupChannelApi.deleteAGroupChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      console.warn("ignore error in cleanup", e);
    }
  });

  it("should send MESG message using bot", async () => {
    const CHANNEL_URL = "test-bot-mesg-channel-url";
    const BOT_USER_ID = `test-bot-mesg-user-id-${Date.now()}`;
    const BOT_NICKNAME = "test-bot-mesg-nickname";
    
    // Cleanup first
    try {
      await groupChannelApi.deleteAGroupChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      console.warn("Failed to delete channel:", e);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    // Create group channel
    const request: CreateAGroupChannelRequest = {
      accessCode: GLOBAL_GROUP_CHANNEL_ACCESS_CODE,
      blockSdkUserChannelJoin: true,
      channelUrl: CHANNEL_URL,
      coverUrl: "empty",
      customType: "data",
      data: "data",
      invitationStatus: {
        MASTER_USER_ID: "joined",
      },
      inviterId: MASTER_USER_ID,
      isDistinct: false,
      isEphemeral: true,
      isPublic: true,
      isSuper: true,
      name: "test-mesg-channel",
      operatorIds: [],
      strict: true,
      users: USERS.map((id) => ({ userId: id })),
    };

    const createGroupChannelresponse = await groupChannelApi.createAGroupChannel({
      apiToken: API_TOKEN,
      createAGroupChannelRequest: request,
    });

    expect(createGroupChannelresponse).toHaveProperty("channelUrl");
    expect(createGroupChannelresponse.channelUrl).toBe(CHANNEL_URL);

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check if bot exists, if not create one
    let botUserId = BOT_USER_ID;
    try {
      const listBotsResponse = await botApi.listBots({
        apiToken: API_TOKEN,
      });
      
      if (listBotsResponse.bots && listBotsResponse.bots.length > 0) {
        // Use existing bot
        botUserId = listBotsResponse.bots[0].bot?.botUserid || BOT_USER_ID;
      } else {
        // Create new bot
        const botRequest: CreateABotRequest = {
          botCallbackUrl: "https://example.com/callback",
          botNickname: BOT_NICKNAME,
          botProfileUrl: "https://example.com/profile.jpg",
          botType: "CUSTOMIZED_BOT",
          botUserid: BOT_USER_ID,
          isPrivacyMode: true,
          channelInvitationPreference: 0,
          enableMarkAsRead: true,
          showMember: true,
        };

        const createABotResponse = await botApi.createABot({
          createABotRequest: botRequest,
          apiToken: API_TOKEN,
        });

        expect(createABotResponse).toHaveProperty("bot");
        expect(createABotResponse.bot).toHaveProperty("botUserid");
        expect(createABotResponse.bot.botUserid).toBe(BOT_USER_ID);
        botUserId = BOT_USER_ID;
      }
    } catch (error) {
      console.warn("Failed to list bots, creating new bot:", error);
      // Create new bot as fallback
      const botRequest: CreateABotRequest = {
        botCallbackUrl: "https://example.com/callback",
        botNickname: BOT_NICKNAME,
        botProfileUrl: "https://example.com/profile.jpg",
        botType: "CUSTOMIZED_BOT",
        botUserid: BOT_USER_ID,
        isPrivacyMode: true,
        channelInvitationPreference: 0,
        enableMarkAsRead: true,
        showMember: true,
      };

      const createABotResponse = await botApi.createABot({
        createABotRequest: botRequest,
        apiToken: API_TOKEN,
      });

      expect(createABotResponse).toHaveProperty("bot");
      expect(createABotResponse.bot).toHaveProperty("botUserid");
      expect(createABotResponse.bot.botUserid).toBe(BOT_USER_ID);
      botUserId = BOT_USER_ID;
    }

    // Join bot to channel
    await botApi.joinChannels({
      botUserid: botUserId,
      joinChannelsRequest: {
        channelUrls: [CHANNEL_URL],
      },
      apiToken: API_TOKEN,
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Send MESG message
    const messageRequest: SendABotMessageRequest = {
      messageType: "MESG",
      channelUrl: CHANNEL_URL,
      message: "Hello! This is a test message from the bot.",
      customType: "bot_message",
      data: "test data",
      sendPush: true,
      markAsRead: false,
    };

    const sendMessageResponse = await botApi.sendABotMessage({
      botUserid: botUserId,
      messageType: messageRequest.messageType,
      channelUrl: messageRequest.channelUrl,
      apiToken: API_TOKEN,
      message: messageRequest.message
    });



    expect(sendMessageResponse).toBeDefined();
    expect(sendMessageResponse).toHaveProperty("message");
    expect(sendMessageResponse.message).toHaveProperty("message");
    expect(sendMessageResponse.message?.message).toBe(messageRequest.message);
    expect(sendMessageResponse.message).toHaveProperty("type");
    expect(sendMessageResponse.message?.type).toBe("MESG");
    expect(sendMessageResponse.message).toHaveProperty("channelUrl");
    expect(sendMessageResponse.message?.channelUrl).toBe(CHANNEL_URL);


    // Leave bot from channel
    await botApi.leaveAGroupChannel({
      botUserid: botUserId,
      channelUrl: CHANNEL_URL,
      apiToken: API_TOKEN,
    });

    // Cleanup last
    try {
      await groupChannelApi.deleteAGroupChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      console.warn("ignore error in cleanup", e);
    }
  });

  it("should send FILE message using bot", async () => {
    const CHANNEL_URL = "test-bot-file-channel-url";
    const BOT_USER_ID = `test-bot-file-user-id-${Date.now()}`;
    const BOT_NICKNAME = "test-bot-file-nickname";
    
    // Cleanup first
    try {
      await groupChannelApi.deleteAGroupChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      console.warn("Failed to delete channel:", e);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    // Create group channel
    const request: CreateAGroupChannelRequest = {
      accessCode: GLOBAL_GROUP_CHANNEL_ACCESS_CODE,
      blockSdkUserChannelJoin: true,
      channelUrl: CHANNEL_URL,
      coverUrl: "empty",
      customType: "data",
      data: "data",
      invitationStatus: {
        MASTER_USER_ID: "joined",
      },
      inviterId: MASTER_USER_ID,
      isDistinct: false,
      isEphemeral: true,
      isPublic: true,
      isSuper: true,
      name: "test-mesg-channel",
      operatorIds: [],
      strict: true,
      users: USERS.map((id) => ({ userId: id })),
    };

    const createGroupChannelresponse = await groupChannelApi.createAGroupChannel({
      apiToken: API_TOKEN,
      createAGroupChannelRequest: request,
    });

    expect(createGroupChannelresponse).toHaveProperty("channelUrl");
    expect(createGroupChannelresponse.channelUrl).toBe(CHANNEL_URL);

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check if bot exists, if not create one
    let botUserId = BOT_USER_ID;
    try {
      const listBotsResponse = await botApi.listBots({
        apiToken: API_TOKEN,
      });
      
      if (listBotsResponse.bots && listBotsResponse.bots.length > 0) {
        // Use existing bot
        botUserId = listBotsResponse.bots[0].bot?.botUserid || BOT_USER_ID;
      } else {
        // Create new bot
        const botRequest: CreateABotRequest = {
          botCallbackUrl: "https://example.com/callback",
          botNickname: BOT_NICKNAME,
          botProfileUrl: "https://example.com/profile.jpg",
          botType: "CUSTOMIZED_BOT",
          botUserid: BOT_USER_ID,
          isPrivacyMode: true,
          channelInvitationPreference: 0,
          enableMarkAsRead: true,
          showMember: true,
        };

        const createABotResponse = await botApi.createABot({
          createABotRequest: botRequest,
          apiToken: API_TOKEN,
        });

        expect(createABotResponse).toHaveProperty("bot");
        expect(createABotResponse.bot).toHaveProperty("botUserid");
        expect(createABotResponse.bot.botUserid).toBe(BOT_USER_ID);
        botUserId = BOT_USER_ID;
      }
    } catch (error) {
      console.warn("Failed to list bots, creating new bot:", error);
      // Create new bot as fallback
      const botRequest: CreateABotRequest = {
        botCallbackUrl: "https://example.com/callback",
        botNickname: BOT_NICKNAME,
        botProfileUrl: "https://example.com/profile.jpg",
        botType: "CUSTOMIZED_BOT",
        botUserid: BOT_USER_ID,
        isPrivacyMode: true,
        channelInvitationPreference: 0,
        enableMarkAsRead: true,
        showMember: true,
      };

      const createABotResponse = await botApi.createABot({
        createABotRequest: botRequest,
        apiToken: API_TOKEN,
      });

      expect(createABotResponse).toHaveProperty("bot");
      expect(createABotResponse.bot).toHaveProperty("botUserid");
      expect(createABotResponse.bot.botUserid).toBe(BOT_USER_ID);
      botUserId = BOT_USER_ID;
    }

    // Join bot to channel
    await botApi.joinChannels({
      botUserid: botUserId,
      joinChannelsRequest: {
        channelUrls: [CHANNEL_URL],
      },
      apiToken: API_TOKEN,
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    const filePath = './tests/asset/image/test_75kb.jpg';
    const fileContent = readFileSync(filePath);
    const file: HttpFile = {
      name: "test_75kb.jpg",
      data: fileContent,
    };

    
    const testFileObject = await new FileLoader({ name: FileAsset.IMAGE_75kb }).load();
    
    // Send FILE message
    const messageRequest: SendABotMessageRequest = {
      messageType: "FILE",
      channelUrl: CHANNEL_URL,
      customType: "bot_message",
      data: "test data",
      sendPush: true,
      markAsRead: false,
      file: file, 
    };

    // Convert FileCompat to HttpFile
    const httpFile: HttpFile = {
      name: testFileObject.name,
      data: Buffer.from(await testFileObject.arrayBuffer())
    };

    const sendMessageResponse = await botApi.sendABotMessage({
      botUserid: botUserId,
      messageType: messageRequest.messageType,
      channelUrl: messageRequest.channelUrl,
      apiToken: API_TOKEN,
      file: httpFile,
      customType: messageRequest.customType,
      data: messageRequest.data,
      sendPush: messageRequest.sendPush,
      markAsRead: messageRequest.markAsRead
    });



    expect(sendMessageResponse).toBeDefined();
    expect(sendMessageResponse).toHaveProperty("message");
    expect(sendMessageResponse.message).toHaveProperty("type");
    expect(sendMessageResponse.message?.type).toBe("FILE");
    expect(sendMessageResponse.message).toHaveProperty("channelUrl");
    expect(sendMessageResponse.message?.channelUrl).toBe(CHANNEL_URL);
    expect(sendMessageResponse.message).toHaveProperty("file");
    expect(sendMessageResponse.message?.file).toBeDefined();


    // Leave bot from channel
    await botApi.leaveAGroupChannel({
      botUserid: botUserId,
      channelUrl: CHANNEL_URL,
      apiToken: API_TOKEN,
    });

    // Cleanup last
    try {
      await groupChannelApi.deleteAGroupChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      console.warn("ignore error in cleanup", e);
    }
  });
});
