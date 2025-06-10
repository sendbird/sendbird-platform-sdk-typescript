import { CreateAnOpenChannelRequest } from "./../../models/CreateAnOpenChannelRequest";
import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { BotApi, CreateABotRequest, CreateAGroupChannelRequest, GroupChannelApi } from "../../index";
import { hasValidField } from "./helper";
import { GLOBAL_GROUP_CHANNEL_ACCESS_CODE, MASTER_USER_ID, USERS } from "./constants";

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
    } catch {}
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
        botCallbackUrl: "callbacn-url",
        botNickname: BOT_NICKNAME,
        botProfileUrl: "string",
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
    }

    if (!botUserId) return;
    await botApi.joinChannels({
      botUserid: botUserId,
      joinChannelsRequest: {
        channelUrls: [CHANNEL_URL]
      },
      apiToken: API_TOKEN,
    });

    const groupChannelResponse = await groupChannelApi.getAGroupChannel({
      channelUrl: CHANNEL_URL,
      apiToken: API_TOKEN,
    })

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
  });
});
