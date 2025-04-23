import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import {
  CreateAGroupChannelRequest,
  GroupChannelApi,
  UpdateChannelInvitationPreferenceRequest,
  UserApi,
} from "../../index";
import {
  GLOBAL_GROUP_CHANNEL_ACCESS_CODE,
  MASTER_USER_ID,
  USERS,
} from "./constants";

describe("User API", () => {
  const APP_ID = process.env.APP_ID || "";
  const API_TOKEN = process.env.API_TOKEN || "";
  const COUNT_PREFERENCES = [
    "off",
    "all",
    "unread_message_count_only",
    "unread_mentioned_count_only",
  ];
  let userApi: UserApi;
  let groupChannelApi: GroupChannelApi;

  beforeEach(() => {
    const serverConfig = new ServerConfiguration(
      `https://api-${APP_ID}.sendbird.com`,
      { app_id: APP_ID }
    );
    const configuration = createConfiguration({
      baseServer: serverConfig,
    });
    userApi = new UserApi(configuration);
    groupChannelApi = new GroupChannelApi(configuration);
  });

  it("call viewNumberOfUnreadMessages", async () => {
    const viewNumberOfUnreadResponse = await userApi.viewNumberOfUnreadMessages(
      {
        userId: MASTER_USER_ID,
        apiToken: API_TOKEN,
      }
    );

    expect(Object.keys(viewNumberOfUnreadResponse).length).toBe(1);

    expect(viewNumberOfUnreadResponse).toHaveProperty("unreadCount");
    expect(typeof viewNumberOfUnreadResponse.unreadCount).toBe("number");
  });

  it("call viewNumberOfUnreadMessages", async () => {
    const viewNumberOfUnreadResponse = await userApi.viewNumberOfUnreadMessages(
      {
        userId: MASTER_USER_ID,
        apiToken: API_TOKEN,
      }
    );

    expect(Object.keys(viewNumberOfUnreadResponse).length).toBe(1);

    expect(viewNumberOfUnreadResponse).toHaveProperty("unreadCount");
    expect(typeof viewNumberOfUnreadResponse.unreadCount).toBe("number");
  });

  it("call viewPushPreferences", async () => {
    const response = await userApi.viewPushPreferences({
      apiToken: API_TOKEN,
      userId: MASTER_USER_ID,
    });

    expect(response).toHaveProperty("blockPushFromBots");
    expect(typeof response.blockPushFromBots).toBe("boolean");

    expect(response).toHaveProperty("doNotDisturb");
    expect(typeof response.doNotDisturb).toBe("boolean");

    expect(response).toHaveProperty("enablePushForReplies");
    expect(typeof response.enablePushForReplies).toBe("boolean");

    expect(response).toHaveProperty("endHour");
    expect(typeof response.endHour).toBe("number");

    expect(response).toHaveProperty("endMin");
    expect(typeof response.endMin).toBe("number");

    expect(response).toHaveProperty("pushBlockedBotIds");
    expect(Array.isArray(response.pushBlockedBotIds)).toBe(true);

    expect(response).toHaveProperty("pushSound");
    expect(typeof response.pushSound).toBe("string");

    expect(response).toHaveProperty("pushTriggerOption");
    expect(typeof response.pushTriggerOption).toBe("string");

    expect(response).toHaveProperty("snoozeEnabled");
    expect(typeof response.snoozeEnabled).toBe("boolean");

    expect(response).toHaveProperty("startHour");
    expect(typeof response.startHour).toBe("number");

    expect(response).toHaveProperty("startMin");
    expect(typeof response.startMin).toBe("number");

    expect(response).toHaveProperty("timezone");
    expect(typeof response.timezone).toBe("string");
  });

  it("call removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken after addARegistrationOrDeviceToken", async () => {
    const TOKEN_TYPE = "GCM";
    const TEST_GCM_TOKEN = "dummy-token-123";

    const addARegistrationOrDeviceTokenResponse =
      await userApi.addARegistrationOrDeviceToken({
        apiToken: API_TOKEN,
        userId: MASTER_USER_ID,
        tokenType: TOKEN_TYPE.toLowerCase(),
        addARegistrationOrDeviceTokenRequest: {
          gcmRegToken: TEST_GCM_TOKEN,
        },
      });

    expect(addARegistrationOrDeviceTokenResponse).toBeDefined();
    expect(addARegistrationOrDeviceTokenResponse).toHaveProperty("token");
    expect(addARegistrationOrDeviceTokenResponse).toHaveProperty("type");
    expect(addARegistrationOrDeviceTokenResponse).toHaveProperty("user");
    expect(addARegistrationOrDeviceTokenResponse.token).toBe(TEST_GCM_TOKEN);
    expect(addARegistrationOrDeviceTokenResponse.type).toBe(TOKEN_TYPE);
    expect(addARegistrationOrDeviceTokenResponse.user).toBeDefined();

    const listRegistrationOrDeviceTokensResponse =
      await userApi.listRegistrationOrDeviceTokens({
        apiToken: API_TOKEN,
        userId: MASTER_USER_ID,
        tokenType: TOKEN_TYPE.toLowerCase(),
      });

    const deleteTokenResponse =
      await userApi.removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken(
        {
          apiToken: API_TOKEN,
          userId: MASTER_USER_ID,
          tokenType: TOKEN_TYPE.toLowerCase(),
          token: TEST_GCM_TOKEN,
        }
      );
    expect(listRegistrationOrDeviceTokensResponse).toBeDefined();
    expect(
      listRegistrationOrDeviceTokensResponse.tokens ||
        listRegistrationOrDeviceTokensResponse.token
    ).toBeInstanceOf(Array);
    expect(listRegistrationOrDeviceTokensResponse.type).toBe(TOKEN_TYPE);
    expect(listRegistrationOrDeviceTokensResponse.user).toBeDefined();

    expect(deleteTokenResponse).toBeDefined();
    expect(typeof deleteTokenResponse).toBe("object");
  });

  it("call viewCountPreferenceOfAChannel", async () => {
    const CHANNEL_URL = "count-preference-integration-test-channel-url";
    try {
      await groupChannelApi.deleteAGroupChannel({
        apiToken: API_TOKEN,
        channelUrl: CHANNEL_URL,
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
      invitationStatus: Object.fromEntries(USERS.map((id) => [id, "joined"])),
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

    const viewCountPreferenceOfAChannelResponse =
      await userApi.viewCountPreferenceOfAChannel({
        apiToken: API_TOKEN,
        userId: MASTER_USER_ID,
        channelUrl: createGroupChannelresponse.channelUrl,
      });

    await groupChannelApi.deleteAGroupChannel({
      apiToken: API_TOKEN,
      channelUrl: createGroupChannelresponse.channelUrl,
    });

    expect(viewCountPreferenceOfAChannelResponse).toBeDefined();
    expect(viewCountPreferenceOfAChannelResponse).toHaveProperty(
      "countPreference"
    );
    expect(COUNT_PREFERENCES).toContain(
      viewCountPreferenceOfAChannelResponse.countPreference
    );
  });

  it("call updateCountPreferenceOfAChannel", async () => {
    const CHANNEL_URL = "count-preference-integration-test-channel-url";
    try {
      await groupChannelApi.deleteAGroupChannel({
        apiToken: API_TOKEN,
        channelUrl: CHANNEL_URL,
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
      invitationStatus: Object.fromEntries(USERS.map((id) => [id, "joined"])),
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

    const COUNT_PREFERENCE = "unread_message_count_only";

    const updateCountPreferenceOfAChannelResponse =
      await userApi.updateCountPreferenceOfAChannel({
        apiToken: API_TOKEN,
        userId: MASTER_USER_ID,
        channelUrl: createGroupChannelresponse.channelUrl,
        updateCountPreferenceOfAChannelRequest: {
          countPreference: COUNT_PREFERENCE,
        },
      });

    expect(updateCountPreferenceOfAChannelResponse).toBeDefined();
    expect(updateCountPreferenceOfAChannelResponse).toHaveProperty(
      "countPreference"
    );
    expect(updateCountPreferenceOfAChannelResponse.countPreference).toBe(
      COUNT_PREFERENCE
    );
    await groupChannelApi.deleteAGroupChannel({
      apiToken: API_TOKEN,
      channelUrl: CHANNEL_URL,
    });
  });

  it("call getChannelInvitationPreference", async () => {
    const response = await userApi.getChannelInvitationPreference({
      apiToken: API_TOKEN,
      userId: MASTER_USER_ID,
    });

    expect(response).toBeDefined();
    expect(response).toHaveProperty("autoAccept");
    expect(typeof response.autoAccept).toBe("boolean");
  });

  it("call updateChannelInvitationPreference", async () => {
    const request: UpdateChannelInvitationPreferenceRequest = {
      autoAccept: true,
    };

    const response = await userApi.updateChannelInvitationPreference({
      apiToken: API_TOKEN,
      userId: MASTER_USER_ID,
      updateChannelInvitationPreferenceRequest: request,
    });

    expect(response).toBeDefined();
    expect(response).toHaveProperty("autoAccept");
    expect(response.autoAccept).toBe(true);
  });
});
