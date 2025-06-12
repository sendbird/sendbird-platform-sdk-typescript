import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import {
  CreateAGroupChannelRequest,
  CreateAUserRequest,
  GroupChannelApi,
  UpdateChannelInvitationPreferenceRequest,
  UserApi,
  UserApiCreateAUserRequest,
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
      authMethods: {},
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
        tokenType: 'gcm',
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
        tokenType: 'gcm',
      });

    const deleteTokenResponse =
      await userApi.removeARegistrationOrDeviceToken(
        {
          apiToken: API_TOKEN,
          userId: MASTER_USER_ID,
          tokenType: 'gcm',
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
    } catch(e) {
      console.warn('ignoring error deleting channel:', e);
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
    } catch(e) {
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

    await new Promise((resolve) => setTimeout(resolve, 100));


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

  it("call createAUser, updateAUser, viewAUser and deleteAUser", async () => {
    const USER_ID = "test-create-user";
    const USER_NICKNAME = "test-create-user-nickname";
    try {
      await userApi.deleteAUser({ userId: USER_ID, apiToken: API_TOKEN });
    } catch {}
    const createAUserRequest: CreateAUserRequest = {
      userId: USER_ID,
      nickname: USER_NICKNAME,
      profileUrl: "",
    };
    const createAUserResponse = await userApi.createAUser({
      apiToken: API_TOKEN,
      createAUserRequest,
    });

    const viewAUserResponse = await userApi.viewAUser({
      userId: USER_ID,
      apiToken: API_TOKEN,
      includeUnreadCount: true,
      superMode: "all",
    });

    const NEW_USER_NICKNAME = "test-create-user-nickname";
    const DISCOVERY_KEYS = ["a", "b"];
    const PREFERRED_LANGUAGES = ["id", "en"];
    const updateAUserResponse = await userApi.updateAUser({
      userId: USER_ID,
      apiToken: API_TOKEN,
      updateAUserRequest: {
        nickname: NEW_USER_NICKNAME,
        discoveryKeys: DISCOVERY_KEYS,
        preferredLanguages: PREFERRED_LANGUAGES,
        isActive: true,
        issueAccessToken: true,
        lastSeenAt: 1740285396142,
        leaveAllWhenDeactivated: true,
      },
    });

    const deleteAUserResponse = await userApi.deleteAUser({
      userId: USER_ID,
      apiToken: API_TOKEN,
    });

    expect(createAUserResponse.userId).toBe(USER_ID);
    expect(typeof createAUserResponse.userId).toBe("string");

    expect(createAUserResponse).toHaveProperty("nickname");
    expect(createAUserResponse.nickname).toBe(USER_NICKNAME);
    expect(typeof createAUserResponse.nickname).toBe("string");

    expect(createAUserResponse).toHaveProperty("profileUrl");
    expect(createAUserResponse.profileUrl).toBe("");
    expect(typeof createAUserResponse.profileUrl).toBe("string");

    expect(createAUserResponse).toHaveProperty("requireAuthForProfileImage");
    expect(createAUserResponse.requireAuthForProfileImage).toBe(false);
    expect(typeof createAUserResponse.requireAuthForProfileImage).toBe(
      "boolean"
    );

    expect(createAUserResponse).toHaveProperty("metadata");
    expect(typeof createAUserResponse.metadata).toBe("object");

    expect(createAUserResponse).toHaveProperty("accessToken");
    expect(createAUserResponse.accessToken).toBe("");
    expect(typeof createAUserResponse.accessToken).toBe("string");

    expect(createAUserResponse).toHaveProperty("sessionTokens");
    expect(createAUserResponse.sessionTokens).toStrictEqual([]);
    expect(Array.isArray(createAUserResponse.sessionTokens)).toBeTruthy();

    expect(createAUserResponse).toHaveProperty("isOnline");
    expect(createAUserResponse.isOnline).toBe(false);
    expect(typeof createAUserResponse.isOnline).toBe("boolean");

    expect(createAUserResponse).toHaveProperty("lastSeenAt");
    expect(createAUserResponse.lastSeenAt).toBe(-1);
    expect(typeof createAUserResponse.lastSeenAt).toBe("number");

    expect(createAUserResponse).toHaveProperty("discoveryKeys");
    expect(createAUserResponse.discoveryKeys).toStrictEqual([]);
    expect(Array.isArray(createAUserResponse.discoveryKeys)).toBeTruthy();

    expect(createAUserResponse).toHaveProperty("hasEverLoggedIn");
    expect(createAUserResponse.hasEverLoggedIn).toBe(false);
    expect(typeof createAUserResponse.hasEverLoggedIn).toBe("boolean");

    expect(createAUserResponse).toHaveProperty("isActive");
    expect(createAUserResponse.isActive).toBe(true);
    expect(typeof createAUserResponse.isActive).toBe("boolean");

    expect(createAUserResponse).toHaveProperty("isCreated");
    expect(createAUserResponse.isCreated).toBe(true);
    expect(typeof createAUserResponse.isCreated).toBe("boolean");

    expect(createAUserResponse).toHaveProperty("phoneNumber");
    expect(createAUserResponse.phoneNumber).toBe("");
    expect(typeof createAUserResponse.phoneNumber).toBe("string");

    expect(viewAUserResponse.userId).toBe(USER_ID);
    expect(typeof viewAUserResponse.userId).toBe("string");

    expect(viewAUserResponse).toHaveProperty("nickname");
    expect(viewAUserResponse.nickname).toBe(NEW_USER_NICKNAME);
    expect(typeof viewAUserResponse.nickname).toBe("string");

    expect(viewAUserResponse).toHaveProperty("profileUrl");
    expect(viewAUserResponse.profileUrl).toBe("");
    expect(typeof viewAUserResponse.profileUrl).toBe("string");

    expect(viewAUserResponse).toHaveProperty("requireAuthForProfileImage");
    expect(viewAUserResponse.requireAuthForProfileImage).toBe(false);
    expect(typeof viewAUserResponse.requireAuthForProfileImage).toBe("boolean");

    expect(viewAUserResponse).toHaveProperty("metadata");
    expect(typeof viewAUserResponse.metadata).toBe("object");

    expect(viewAUserResponse).toHaveProperty("accessToken");
    expect(viewAUserResponse.accessToken).toBe("");
    expect(typeof viewAUserResponse.accessToken).toBe("string");
    
    expect(viewAUserResponse).toHaveProperty("createdAt");
    expect(typeof viewAUserResponse.createdAt).toBe("number");

    expect(viewAUserResponse).toHaveProperty("discoveryKeys");
    expect(viewAUserResponse.discoveryKeys).toStrictEqual([]);
    expect(Array.isArray(viewAUserResponse.discoveryKeys)).toBeTruthy();

    expect(viewAUserResponse).toHaveProperty("isHideMeFromFriends");
    expect(viewAUserResponse.isHideMeFromFriends).toBe(false);
    expect(typeof viewAUserResponse.isHideMeFromFriends).toBe("boolean");

    expect(viewAUserResponse).toHaveProperty("isShadowBlocked");
    expect(viewAUserResponse.isShadowBlocked).toBe(false);
    expect(typeof viewAUserResponse.isShadowBlocked).toBe("boolean");

    expect(viewAUserResponse).toHaveProperty("sessionTokens");
    expect(viewAUserResponse.sessionTokens).toStrictEqual([]);
    expect(Array.isArray(viewAUserResponse.sessionTokens)).toBeTruthy();

    expect(viewAUserResponse).toHaveProperty("isOnline");
    expect(viewAUserResponse.isOnline).toBe(false);
    expect(typeof viewAUserResponse.isOnline).toBe("boolean");

    expect(viewAUserResponse).toHaveProperty("lastSeenAt");
    expect(viewAUserResponse.lastSeenAt).toBe(-1);
    expect(typeof viewAUserResponse.lastSeenAt).toBe("number");

    expect(viewAUserResponse).toHaveProperty("hasEverLoggedIn");
    expect(viewAUserResponse.hasEverLoggedIn).toBe(false);
    expect(typeof viewAUserResponse.hasEverLoggedIn).toBe("boolean");

    expect(viewAUserResponse).toHaveProperty("isActive");
    expect(viewAUserResponse.isActive).toBe(true);
    expect(typeof viewAUserResponse.isActive).toBe("boolean");

    expect(viewAUserResponse).not.toHaveProperty("isCreated");

    expect(viewAUserResponse).toHaveProperty("preferredLanguages");
    expect(viewAUserResponse.preferredLanguages).toStrictEqual([]);
    expect(Array.isArray(viewAUserResponse.preferredLanguages)).toBeTruthy();

    expect(viewAUserResponse).toHaveProperty("locale");
    expect(viewAUserResponse.locale).toBe("");
    expect(typeof viewAUserResponse.locale).toBe("string");

    expect(viewAUserResponse).not.toHaveProperty("phoneNumber");

    expect(viewAUserResponse).toHaveProperty("unreadChannelCount");
    expect(viewAUserResponse.unreadChannelCount).toBe(0);
    expect(typeof viewAUserResponse.unreadChannelCount).toBe("number");

    expect(viewAUserResponse).toHaveProperty("unreadMessageCount");
    expect(viewAUserResponse.unreadMessageCount).toBe(0);
    expect(typeof viewAUserResponse.unreadMessageCount).toBe("number");

    expect(updateAUserResponse.userId).toBe(USER_ID);
    expect(typeof updateAUserResponse.userId).toBe("string");

    expect(updateAUserResponse).toHaveProperty("nickname");
    expect(updateAUserResponse.nickname).toBe(NEW_USER_NICKNAME);
    expect(typeof updateAUserResponse.nickname).toBe("string");

    expect(updateAUserResponse).toHaveProperty("profileUrl");
    expect(updateAUserResponse.profileUrl).toBe("");
    expect(typeof updateAUserResponse.profileUrl).toBe("string");

    expect(updateAUserResponse).toHaveProperty("requireAuthForProfileImage");
    expect(updateAUserResponse.requireAuthForProfileImage).toBe(false);
    expect(typeof updateAUserResponse.requireAuthForProfileImage).toBe(
      "boolean"
    );

    expect(updateAUserResponse).toHaveProperty("metadata");
    expect(typeof updateAUserResponse.metadata).toBe("object");

    expect(updateAUserResponse).toHaveProperty("accessToken");
    expect(updateAUserResponse.accessToken).not.toBe("");
    expect(typeof updateAUserResponse.accessToken).toBe("string");

    expect(updateAUserResponse).toHaveProperty("createdAt");
    expect(updateAUserResponse.createdAt).toBe(viewAUserResponse.createdAt);
    expect(typeof updateAUserResponse.createdAt).toBe("number");

    expect(updateAUserResponse).toHaveProperty("discoveryKeys");
    expect(updateAUserResponse.discoveryKeys?.sort()).toStrictEqual(DISCOVERY_KEYS.sort());
    expect(Array.isArray(updateAUserResponse.discoveryKeys)).toBeTruthy();

    expect(updateAUserResponse).toHaveProperty("isHideMeFromFriends");
    expect(updateAUserResponse.isHideMeFromFriends).toBe(false);
    expect(typeof updateAUserResponse.isHideMeFromFriends).toBe("boolean");

    expect(updateAUserResponse).toHaveProperty("isShadowBlocked");
    expect(updateAUserResponse.isShadowBlocked).toBe(false);
    expect(typeof updateAUserResponse.isShadowBlocked).toBe("boolean");

    expect(updateAUserResponse).toHaveProperty("sessionTokens");
    expect(updateAUserResponse.sessionTokens).toStrictEqual([]);
    expect(Array.isArray(updateAUserResponse.sessionTokens)).toBeTruthy();

    expect(updateAUserResponse).toHaveProperty("isOnline");
    expect(updateAUserResponse.isOnline).toBe(false);
    expect(typeof updateAUserResponse.isOnline).toBe("boolean");

    expect(updateAUserResponse).toHaveProperty("lastSeenAt");
    expect(updateAUserResponse.lastSeenAt).toBe(-1);
    expect(typeof updateAUserResponse.lastSeenAt).toBe("number");

    expect(updateAUserResponse).toHaveProperty("hasEverLoggedIn");
    expect(updateAUserResponse.hasEverLoggedIn).toBe(false);
    expect(typeof updateAUserResponse.hasEverLoggedIn).toBe("boolean");

    expect(updateAUserResponse).toHaveProperty("isActive");
    expect(updateAUserResponse.isActive).toBe(true);
    expect(typeof updateAUserResponse.isActive).toBe("boolean");

    expect(updateAUserResponse).not.toHaveProperty("isCreated");

    expect(updateAUserResponse).toHaveProperty("preferredLanguages");
    expect(updateAUserResponse.preferredLanguages?.sort()).toStrictEqual(PREFERRED_LANGUAGES.sort());
    expect(Array.isArray(updateAUserResponse.preferredLanguages)).toBeTruthy();

    expect(updateAUserResponse).toHaveProperty("locale");
    expect(updateAUserResponse.locale).toBe("");
    expect(typeof updateAUserResponse.locale).toBe("string");
    expect(updateAUserResponse).not.toHaveProperty("phoneNumber");

    expect(deleteAUserResponse).toBeDefined();
  });
});
