import { ListOperatorsResponse } from "./../../models/ListOperatorsResponse";
import {
  CreateAGroupChannelRequest,
  SendbirdBasicUserInfo,
  SendbirdDisappearingMessage,
  SendbirdGroupChannelCountPreferenceEnum,
  SendbirdGroupChannelHiddenStateEnum,
  SendbirdGroupChannelMemberStateEnum,
  SendbirdGroupChannelMyRoleEnum,
  SendbirdGroupChannelPushTriggerOptionEnum,
  SendbirdMessageResponse,
  SendbirdSmsFallback,
  SendbirdUser,
  SendbirdMemberRoleEnum,
  SendbirdMemberStateEnum,
  SendbirdGroupChannelDetailChannel,
  LeaveAChannelRequestReasonEnum,
} from "../../models/ObjectSerializer";
import { hasValidField } from "./helper";
import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { GroupChannelApi } from "../../index";
import {
  GLOBAL_GROUP_CHANNEL_ACCESS_CODE,
  MASTER_USER_ID,
  SECOND_USER_ID,
  USERS,
} from "./constants";

describe("Group Channel API", () => {
  const APP_ID = process.env.APP_ID || "";
  const API_TOKEN = process.env.API_TOKEN || "";
  let groupChannelApi: GroupChannelApi;
  const validSendbirdGroupChannelCountPreferenceEnum: (
    | SendbirdGroupChannelCountPreferenceEnum
    | undefined
  )[] = [
    "false",
    "all",
    "unread_message_count_only",
    "unread_mentioned_count_only",
  ];

  const validSendbirdGroupChannelMemberStateEnum: (
    | SendbirdGroupChannelMemberStateEnum
    | undefined
  )[] = ["invited", "joined", "none"];

  const validSendbirdGroupChannelHiddenStateEnum: (
    | SendbirdGroupChannelHiddenStateEnum
    | undefined
  )[] = ["hidden_allow_auto_unhide", "hidden_prevent_auto_unhide", "unhidden"];

  const validSendbirdGroupChannelMyRoleEnum: (
    | SendbirdGroupChannelMyRoleEnum
    | undefined
  )[] = ["none", "operator", ""];
  const validSendbirdGroupChannelPushTriggerOptionEnum: (
    | SendbirdGroupChannelPushTriggerOptionEnum
    | undefined
  )[] = ["all", "default", "false", "mention_only"];

  const validSendbirdMemberRoleEnum: (SendbirdMemberRoleEnum | undefined)[] = [
    "",
    "none",
    "operator",
  ];

  const validSendbirdMemberStateEnum: (SendbirdMemberStateEnum | undefined)[] =
    ["", "invited", "joined"];

  beforeEach(() => {
    const serverConfig = new ServerConfiguration(
      `https://api-${APP_ID}.sendbird.com`,
      { app_id: APP_ID }
    );
    const configuration = createConfiguration({
      baseServer: serverConfig,
    });
    groupChannelApi = new GroupChannelApi(configuration);
  });

  it("call listChannels with positive query params", async () => {
    const response = await groupChannelApi.listChannels({
      apiToken: API_TOKEN,
      limit: 10,
      distinctMode: "all",
      publicMode: "all",
      superMode: "all",
      showEmpty: true,
      showMember: true,
      showDeliveryReceipt: true,
      showReadReceipt: true,
      showMetadata: true,
      showFrozen: true,
    });
    expect(response).toHaveProperty("channels");
    expect(Array.isArray(response.channels)).toBe(true);

    response.channels?.forEach((channel) => {
      expect(channel).toHaveProperty("channelUrl");
      expect(typeof channel.channelUrl).toBe("string");
      if ("countPreference" in channel) {
        expect(typeof channel.countPreference).toBe("string");
        expect(
          validSendbirdGroupChannelCountPreferenceEnum.includes(
            channel.countPreference
          )
        ).toBe(true);
      }
      expect(channel).toHaveProperty("name");
      expect(typeof channel.name).toBe("string");
      expect(channel).toHaveProperty("coverUrl");
      expect(typeof channel.coverUrl).toBe("string");

      expect(channel).toHaveProperty("createdAt");
      expect(typeof channel.createdAt).toBe("number");

      if (hasValidField(channel, "createdBy")) {
        expect(channel.createdBy).toBeInstanceOf(SendbirdBasicUserInfo);
      }

      expect(channel).toHaveProperty("customType");
      expect(typeof channel.customType).toBe("string");

      expect(channel).toHaveProperty("data");
      expect(typeof channel.data).toBe("string");

      expect(channel).toHaveProperty("deliveryReceipt");
      expect(typeof channel.deliveryReceipt).toBe("object");

      expect(channel).toHaveProperty("disappearingMessage");
      expect(channel.disappearingMessage).toBeInstanceOf(
        SendbirdDisappearingMessage
      );

      expect(channel).toHaveProperty("freeze");
      expect(typeof channel.freeze).toBe("boolean");

      expect(channel).toHaveProperty("hasAiBot");
      expect(typeof channel.hasAiBot).toBe("boolean");

      expect(channel).toHaveProperty("hasBot");
      expect(typeof channel.hasBot).toBe("boolean");

      if ("hiddenState" in channel) {
        expect(
          validSendbirdGroupChannelHiddenStateEnum.includes(channel.hiddenState)
        ).toBe(true);
        expect(typeof channel.hiddenState).toBe("string");
      }

      expect(channel).toHaveProperty("ignoreProfanityFilter");
      expect(typeof channel.ignoreProfanityFilter).toBe("boolean");

      expect(channel).toHaveProperty("invitedAt");
      expect(typeof channel.invitedAt).toBe("number");

      if (hasValidField(channel, "inviter")) {
        expect(channel.inviter).toBeInstanceOf(SendbirdUser);
      }

      expect(channel).toHaveProperty("isAccessCodeRequired");
      expect(typeof channel.isAccessCodeRequired).toBe("boolean");

      expect(channel).toHaveProperty("isBroadcast");
      expect(typeof channel.isBroadcast).toBe("boolean");

      expect(channel).toHaveProperty("isDiscoverable");
      expect(typeof channel.isDiscoverable).toBe("boolean");

      expect(channel).toHaveProperty("isDistinct");
      expect(typeof channel.isDistinct).toBe("boolean");

      expect(channel).toHaveProperty("isEphemeral");
      expect(typeof channel.isEphemeral).toBe("boolean");

      expect(channel).toHaveProperty("isExclusive");
      expect(typeof channel.isExclusive).toBe("boolean");

      if ("isHidden" in channel) {
        expect(typeof channel.isHidden).toBe("boolean");
      }

      // Object(channel).hasProe;
      if ("isMuted" in channel) {
        expect(typeof channel.isMuted).toBe("boolean");
      }

      if ("isPublic" in channel) {
        expect(typeof channel.isPublic).toBe("boolean");
      }

      if ("isPushEnabled" in channel) {
        expect(typeof channel.isPushEnabled).toBe("boolean");
      }

      expect(channel).toHaveProperty("isSuper");
      expect(typeof channel.isSuper).toBe("boolean");

      expect(channel).toHaveProperty("joinedMemberCount");
      expect(typeof channel.joinedMemberCount).toBe("number");

      if (hasValidField(channel, "joinedTs")) {
        expect(typeof channel.joinedTs).toBe("number");
      }

      if (hasValidField(channel, "lastMessage")) {
        expect(channel.lastMessage).toBeInstanceOf(SendbirdMessageResponse);
      }

      expect(channel).toHaveProperty("maxLengthMessage");
      expect(typeof channel.maxLengthMessage).toBe("number");

      expect(channel).toHaveProperty("memberCount");
      expect(typeof channel.memberCount).toBe("number");

      if (hasValidField(channel, "memberState")) {
        expect(
          validSendbirdGroupChannelMemberStateEnum.includes(channel.memberState)
        ).toBe(true);
        expect(typeof channel.memberState).toBe("string");
      }

      expect(channel).toHaveProperty("members");
      expect(Array.isArray(channel.members)).toBe(true);

      expect(channel).toHaveProperty("messageSurvivalSeconds");
      expect(typeof channel.messageSurvivalSeconds).toBe("number");

      expect(channel).toHaveProperty("metadata");
      expect(typeof channel.metadata).toBe("object");

      if (hasValidField(channel, "myRole")) {
        expect(
          validSendbirdGroupChannelMyRoleEnum.includes(channel.myRole)
        ).toBe(true);
        expect(typeof channel.myRole).toBe("string");
      }

      expect(channel).toHaveProperty("name");
      expect(typeof channel.name).toBe("string");

      if (hasValidField(channel, "pushTriggerOption")) {
        expect(
          validSendbirdGroupChannelPushTriggerOptionEnum.includes(
            channel.pushTriggerOption
          )
        ).toBe(true);
        expect(typeof channel.pushTriggerOption).toBe("string");
      }

      expect(channel).toHaveProperty("readReceipt");
      expect(typeof channel.readReceipt).toBe("object");

      expect(channel).toHaveProperty("smsFallback");
      expect(channel.smsFallback).toBeInstanceOf(SendbirdSmsFallback);

      if (hasValidField(channel, "tsMessageOffset")) {
        expect(typeof channel.tsMessageOffset).toBe("number");
      }

      expect(channel).toHaveProperty("unreadMentionCount");
      expect(typeof channel.unreadMentionCount).toBe("number");

      expect(channel).toHaveProperty("unreadMessageCount");
      expect(typeof channel.unreadMessageCount).toBe("number");

      if (hasValidField(channel, "userLastRead")) {
        expect(typeof channel.userLastRead).toBe("number");
      }
    });

    expect(response).toHaveProperty("next");
    expect(typeof response.next).toBe("string");
  });

  it("call listChannels with negative query params", async () => {
    const response = await groupChannelApi.listChannels({
      apiToken: API_TOKEN,
      limit: 10,
      distinctMode: "all",
      publicMode: "all",
      superMode: "all",
      showEmpty: false,
      showMember: false,
      showDeliveryReceipt: false,
      showReadReceipt: false,
      showMetadata: false,
      showFrozen: false,
    });
    expect(response).toHaveProperty("channels");
    expect(Array.isArray(response.channels)).toBe(true);

    response.channels?.forEach((channel) => {
      expect(channel).toHaveProperty("channelUrl");
      expect(typeof channel.channelUrl).toBe("string");

      expect(channel).not.toHaveProperty("deliveryReceipt");
      expect(channel).not.toHaveProperty("members");
      expect(channel).not.toHaveProperty("metadata");
      expect(channel).not.toHaveProperty("readReceipt");

      expect(channel).toHaveProperty("name");
      expect(typeof channel.name).toBe("string");

      expect(channel).toHaveProperty("coverUrl");
      expect(typeof channel.coverUrl).toBe("string");

      expect(channel).toHaveProperty("createdAt");
      expect(typeof channel.createdAt).toBe("number");
    });

    expect(response).toHaveProperty("next");
    expect(typeof response.next).toBe("string");
  });

  it("call createAGroupChannel with Error", async () => {
    const request: CreateAGroupChannelRequest = {
      accessCode: "integration",
      blockSdkUserChannelJoin: true,
      channelUrl: "integration-test",
      coverUrl: "empty",
      customType: "data",
      data: "data",
      /**
       * Specifies one or more key-value pair items which set the invitation status of each user invited to the channel. The key should be a user_id and the value should be their joining status. Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
       */
      invitationStatus: {
        ttsYcp4M5USFbhDxPqM2ETwM1vB2: "joined",
        lK7U9lvxcZWVNa5SgZnLv81DG2R2: "joined",
      },
      inviterId: "ttsYcp4M5USFbhDxPqM2ETwM1vB2",
      isDistinct: true,
      isEphemeral: true,
      isPublic: true,
      isSuper: true,
      name: "test",
      operatorIds: [],
      strict: true,
      users: [
        {
          userId: "ttsYcp4M5USFbhDxPqM2ETwM1vB2",
        },
        { userId: "lK7U9lvxcZWVNa5SgZnLv81DG2R2" },
      ],
    };

    try {
      await groupChannelApi.createAGroupChannel({
        apiToken: API_TOKEN,
        createAGroupChannelRequest: request,
      });
    } catch (error) {
      expect(JSON.parse((error as any).body).code).toBe(400111);
    }
  });

  it("call createAGroupChannel and deleteAGroupChannel", async () => {
    const request: CreateAGroupChannelRequest = {
      accessCode: "integration",
      blockSdkUserChannelJoin: true,
      channelUrl: "integration-test",
      coverUrl: "empty",
      customType: "data",
      data: "data",
      /**
       * Specifies one or more key-value pair items which set the invitation status of each user invited to the channel. The key should be a user_id and the value should be their joining status. Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
       */
      invitationStatus: {
        ttsYcp4M5USFbhDxPqM2ETwM1vB2: "joined",
        lK7U9lvxcZWVNa5SgZnLv81DG2R2: "joined",
      },
      inviterId: "ttsYcp4M5USFbhDxPqM2ETwM1vB2",
      isDistinct: false,
      isEphemeral: true,
      isPublic: true,
      isSuper: true,
      name: "test",
      operatorIds: [],
      strict: true,
      users: [
        {
          userId: "ttsYcp4M5USFbhDxPqM2ETwM1vB2",
        },
        { userId: "lK7U9lvxcZWVNa5SgZnLv81DG2R2" },
      ],
    };

    const response = await groupChannelApi.createAGroupChannel({
      apiToken: API_TOKEN,
      createAGroupChannelRequest: request,
    });

    expect(response).toHaveProperty("channelUrl");
    expect(response.channelUrl).toBe("integration-test");
    expect(typeof response.channelUrl).toBe("string");

    expect(response).toHaveProperty("coverUrl");
    expect(response.coverUrl).toBe("empty");
    expect(typeof response.coverUrl).toBe("string");

    expect(response).toHaveProperty("customType");
    expect(response.customType).toBe("data");
    expect(typeof response.customType).toBe("string");

    await groupChannelApi.deleteAGroupChannel({
      channelUrl: response.channelUrl,
      apiToken: API_TOKEN,
    });
  });

  it("call getAGroupChannel", async () => {
    const CHANNEL_URL = "get-group-channel-test-channel-url";
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

    expect(createGroupChannelresponse).toHaveProperty("channelUrl");
    expect(createGroupChannelresponse.channelUrl).toBe(CHANNEL_URL);
    expect(typeof createGroupChannelresponse.channelUrl).toBe("string");

    const groupChannelResponse = await groupChannelApi.getAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      showDeliveryReceipt: true,
      showReadReceipt: true,
      showMember: true,
      memberActiveMode: "all",
    });
    await groupChannelApi.deleteAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
    });

    const channel = groupChannelResponse;
    expect(channel).toHaveProperty("channelUrl");
    expect(channel.channelUrl).toBe(CHANNEL_URL);

    expect(channel).toHaveProperty("channel");
    expect(channel.channel).toBeInstanceOf(SendbirdGroupChannelDetailChannel);

    expect(channel.channel).toHaveProperty("channelUrl");
    expect(typeof channel.channel?.channelUrl).toBe("string");

    expect(channel.channel).toHaveProperty("coverUrl");
    expect(typeof channel.channel?.coverUrl).toBe("string");

    expect(channel.channel).toHaveProperty("createdAt");
    expect(typeof channel.channel?.createdAt).toBe("number");

    expect(channel.channel).toHaveProperty("customType");
    expect(typeof channel.channel?.customType).toBe("string");

    expect(channel.channel).toHaveProperty("data");
    expect(typeof channel.channel?.data).toBe("string");

    expect(channel.channel).toHaveProperty("maxLengthMessage");
    expect(typeof channel.channel?.maxLengthMessage).toBe("number");

    expect(channel.channel).toHaveProperty("memberCount");
    expect(typeof channel.channel?.memberCount).toBe("number");

    expect(channel.channel).toHaveProperty("name");
    expect(typeof channel.channel?.name).toBe("string");

    expect(channel).toHaveProperty("name");
    expect(typeof channel.name).toBe("string");

    expect(channel).toHaveProperty("coverUrl");
    expect(typeof channel.coverUrl).toBe("string");

    expect(channel).toHaveProperty("createdAt");
    expect(typeof channel.createdAt).toBe("number");

    if (hasValidField(channel, "createdBy")) {
      expect(channel.createdBy).toBeInstanceOf(SendbirdBasicUserInfo);
    }

    expect(channel).toHaveProperty("customType");
    expect(typeof channel.customType).toBe("string");

    expect(channel).toHaveProperty("data");
    expect(typeof channel.data).toBe("string");

    expect(channel).toHaveProperty("deliveryReceipt");
    expect(typeof channel.deliveryReceipt).toBe("object");

    expect(channel).toHaveProperty("disappearingMessage");
    expect(channel.disappearingMessage).toBeInstanceOf(
      SendbirdDisappearingMessage
    );

    expect(channel).toHaveProperty("freeze");
    expect(typeof channel.freeze).toBe("boolean");

    expect(channel).toHaveProperty("hasAiBot");
    expect(typeof channel.hasAiBot).toBe("boolean");

    expect(channel).toHaveProperty("hasBot");
    expect(typeof channel.hasBot).toBe("boolean");

    expect(channel).toHaveProperty("ignoreProfanityFilter");
    expect(typeof channel.ignoreProfanityFilter).toBe("boolean");

    expect(channel).toHaveProperty("isAccessCodeRequired");
    expect(typeof channel.isAccessCodeRequired).toBe("boolean");

    expect(channel).toHaveProperty("isBroadcast");
    expect(typeof channel.isBroadcast).toBe("boolean");

    expect(channel).toHaveProperty("isDiscoverable");
    expect(typeof channel.isDiscoverable).toBe("boolean");

    expect(channel).toHaveProperty("isDistinct");
    expect(typeof channel.isDistinct).toBe("boolean");

    expect(channel).toHaveProperty("isEphemeral");
    expect(typeof channel.isEphemeral).toBe("boolean");

    if ("isHidden" in channel) {
      expect(typeof channel.isHidden).toBe("boolean");
    }

    if ("isMuted" in channel) {
      expect(typeof channel.isMuted).toBe("boolean");
    }

    if ("isPublic" in channel) {
      expect(typeof channel.isPublic).toBe("boolean");
    }

    if ("isPushEnabled" in channel) {
      expect(typeof channel.isPushEnabled).toBe("boolean");
    }

    expect(channel).toHaveProperty("isSuper");
    expect(typeof channel.isSuper).toBe("boolean");

    expect(channel).toHaveProperty("joinedMemberCount");
    expect(typeof channel.joinedMemberCount).toBe("number");

    if (hasValidField(channel, "lastMessage")) {
      expect(channel.lastMessage).toBeInstanceOf(SendbirdMessageResponse);
    }

    expect(channel).toHaveProperty("maxLengthMessage");
    expect(typeof channel.maxLengthMessage).toBe("number");

    expect(channel).toHaveProperty("memberCount");
    expect(typeof channel.memberCount).toBe("number");

    expect(channel).toHaveProperty("members");
    expect(Array.isArray(channel.members)).toBe(true);

    expect(channel).toHaveProperty("messageSurvivalSeconds");
    expect(typeof channel.messageSurvivalSeconds).toBe("number");

    expect(channel).toHaveProperty("name");
    expect(typeof channel.name).toBe("string");

    expect(channel).toHaveProperty("readReceipt");
    expect(typeof channel.readReceipt).toBe("object");

    expect(channel).toHaveProperty("smsFallback");
    expect(channel.smsFallback).toBeInstanceOf(SendbirdSmsFallback);

    expect(channel).toHaveProperty("unreadMentionCount");
    expect(typeof channel.unreadMentionCount).toBe("number");

    expect(channel).toHaveProperty("unreadMessageCount");
    expect(typeof channel.unreadMessageCount).toBe("number");
  });

  it("call listMembers", async () => {
    const listResponse = await groupChannelApi.listChannels({
      apiToken: API_TOKEN,
      limit: 1,
      distinctMode: "all",
      publicMode: "all",
      superMode: "all",
      showEmpty: true,
      showMember: true,
      showDeliveryReceipt: true,
      showReadReceipt: true,
      showMetadata: true,
      showFrozen: true,
    });
    expect(listResponse).toHaveProperty("channels");
    expect(Array.isArray(listResponse.channels)).toBe(true);
    expect(listResponse.channels?.length).toBe(1);

    const channel = listResponse.channels?.[0];
    expect(channel).toBeDefined();

    if (channel) {
      const LIMIT = 10;
      const listMembersResponse = await groupChannelApi.listMembers({
        apiToken: API_TOKEN,
        limit: LIMIT,
        channelUrl: channel.channelUrl,
        includePushPreference: true,
      });

      expect(listMembersResponse).toHaveProperty("members");
      expect(Array.isArray(listMembersResponse.members)).toBe(true);
      expect((listMembersResponse.members.length)).toBeLessThanOrEqual(LIMIT);
      listMembersResponse.members.forEach((member) => {
        expect(member).toHaveProperty("userId");
        expect(typeof member.userId).toBe("string");

        if (hasValidField(member, "deliveredTs")) {
          expect(typeof member.deliveredTs).toBe("number");
        }

        if (hasValidField(member, "doNotDisturb")) {
          expect(typeof member.doNotDisturb).toBe("boolean");
        }

        if (hasValidField(member, "friendDiscoveryKey")) {
          expect(Array.isArray(member.friendDiscoveryKey)).toBe(true);
        }

        if (hasValidField(member, "friendName")) {
          expect(typeof member.friendName).toBe("string");
        }

        if (hasValidField(member, "isActive")) {
          expect(typeof member.isActive).toBe("boolean");
        }

        if (hasValidField(member, "isBlockedByMe")) {
          expect(typeof member.isBlockedByMe).toBe("boolean");
        }

        if (hasValidField(member, "isBlockingMe")) {
          expect(typeof member.isBlockingMe).toBe("boolean");
        }

        if (hasValidField(member, "isMuted")) {
          expect(typeof member.isMuted).toBe("boolean");
        }

        if (hasValidField(member, "isOnline")) {
          expect(typeof member.isOnline).toBe("boolean");
        }

        if (hasValidField(member, "lastSeenAt")) {
          expect(typeof member.lastSeenAt).toBe("number");
        }

        if (hasValidField(member, "metadata")) {
          expect(typeof member.metadata).toBe("object");
        }

        if (hasValidField(member, "mutedDescription")) {
          expect(typeof member.mutedDescription).toBe("string");
        }

        if (hasValidField(member, "mutedEndAt")) {
          expect(typeof member.mutedEndAt).toBe("number");
        }

        if (hasValidField(member, "nickname")) {
          expect(typeof member.nickname).toBe("string");
        }

        if (hasValidField(member, "pushEnabled")) {
          expect(typeof member.pushEnabled).toBe("boolean");
        }

        if (hasValidField(member, "pushTriggerOption")) {
          expect(typeof member.pushTriggerOption).toBe("string");
        }

        if (hasValidField(member, "profileUrl")) {
          expect(typeof member.profileUrl).toBe("string");
        }

        if (hasValidField(member, "requireAuthForProfileImage")) {
          expect(typeof member.requireAuthForProfileImage).toBe("boolean");
        }

        if (hasValidField(member, "readTs")) {
          expect(typeof member.readTs).toBe("number");
        }

        if (hasValidField(member, "role")) {
          expect(typeof member.role).toBe("string");
          expect(validSendbirdMemberRoleEnum.includes(member.role)).toBe(true);
        }

        if (hasValidField(member, "state")) {
          expect(typeof member.state).toBe("string");
          expect(validSendbirdMemberStateEnum.includes(member.state)).toBe(
            true
          );
        }
      });
    }
  });

  it("call registerOperatorsToAGroupChannel, listOperators then cancelTheRegistrationOfOperators", async () => {
    const CHANNEL_URL = "list-operator-test-channel-url";
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

    expect(createGroupChannelresponse).toHaveProperty("channelUrl");
    expect(createGroupChannelresponse.channelUrl).toBe(CHANNEL_URL);
    expect(typeof createGroupChannelresponse.channelUrl).toBe("string");

    expect(createGroupChannelresponse).toHaveProperty("operators");
    expect(createGroupChannelresponse.operators?.length || 0).toBe(0);

    const registerOperatorResponse =
      await groupChannelApi.registerOperatorsToAGroupChannel({
        channelUrl: createGroupChannelresponse.channelUrl,
        apiToken: API_TOKEN,
        registerOperatorsToAGroupChannelRequest: {
          operatorIds: [MASTER_USER_ID],
        },
      });

    expect(registerOperatorResponse).toBeDefined();

    const listOperatorsResponse = await groupChannelApi.listOperators({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
    });

    expect(listOperatorsResponse).toHaveProperty("operators");
    expect(Object.keys(listOperatorsResponse).length).toBe(2);

    expect(listOperatorsResponse.operators?.length || 0).toBe(1);

    listOperatorsResponse.operators?.map((operator) => {
      expect(operator.userId).toEqual(MASTER_USER_ID);
      expect(operator).toHaveProperty("nickname");
      expect(typeof operator.nickname).toBe("string");
      expect(operator).toHaveProperty("profileUrl");
      expect(typeof operator.profileUrl).toBe("string");
      expect(operator).toHaveProperty("metadata");
      expect(typeof operator.metadata).toBe("object");
      expect(operator).toHaveProperty("requireAuthForProfileImage");
      expect(typeof operator.requireAuthForProfileImage).toBe("boolean");
    });

    const cancelTheRegistrationOfOperatorsResponse =
      await groupChannelApi.cancelTheRegistrationOfOperators({
        channelUrl: createGroupChannelresponse.channelUrl,
        apiToken: API_TOKEN,
        operatorIds: MASTER_USER_ID,
      });

    expect(cancelTheRegistrationOfOperatorsResponse).toBeDefined();

    const listOperatorsAfterCancelRegistrationResponse =
      await groupChannelApi.listOperators({
        channelUrl: createGroupChannelresponse.channelUrl,
        apiToken: API_TOKEN,
      });

    expect(listOperatorsAfterCancelRegistrationResponse).toHaveProperty(
      "operators"
    );
    expect(
      Object.keys(listOperatorsAfterCancelRegistrationResponse).length
    ).toBe(2);

    expect(
      listOperatorsAfterCancelRegistrationResponse.operators?.length || 0
    ).toBe(0);

    await groupChannelApi.deleteAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
    });
  });

  it("call startTypingIndicators and stopTypingIndicators", async () => {
    const CHANNEL_URL = "group-channel-typing-indicators-test-channel-url";
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

    expect(createGroupChannelresponse).toHaveProperty("channelUrl");
    expect(createGroupChannelresponse.channelUrl).toBe(CHANNEL_URL);

    const startTypingResponse = await groupChannelApi.startTypingIndicators({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      startTypingIndicatorsRequest: {
        userIds: [MASTER_USER_ID],
      },
    });

    const stopTypingResponse = await groupChannelApi.startTypingIndicators({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      startTypingIndicatorsRequest: {
        userIds: [MASTER_USER_ID],
      },
    });

    expect(startTypingResponse).toBeDefined();
    expect(stopTypingResponse).toBeDefined();

    await groupChannelApi.deleteAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
    });
  });

  it("call hideAChannel then unhideAChannel", async () => {
    const CHANNEL_URL = "group-channel-hide-test-channel-url";
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

    const hideAChannelResponse = await groupChannelApi.hideAChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      hideAChannelRequest: {
        userId: SECOND_USER_ID,
        allowAutoUnhide: true,
        shouldHideAll: false,
      },
    });

    const groupChannelAfterHideResponse =
      await groupChannelApi.getAGroupChannel({
        channelUrl: createGroupChannelresponse.channelUrl,
        apiToken: API_TOKEN,
        showDeliveryReceipt: true,
        showReadReceipt: true,
        showMember: true,
        memberActiveMode: "all",
        userId: SECOND_USER_ID,
      });

    const unhideAChannelResponse = await groupChannelApi.unhideAChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      shouldUnhideAll: false,
      userId: SECOND_USER_ID,
    });

    const groupChannelAfterUnHideResponse =
      await groupChannelApi.getAGroupChannel({
        channelUrl: createGroupChannelresponse.channelUrl,
        apiToken: API_TOKEN,
        showDeliveryReceipt: true,
        showReadReceipt: true,
        showMember: true,
        memberActiveMode: "all",
        userId: SECOND_USER_ID,
      });
    await groupChannelApi.deleteAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
    });
    expect(groupChannelAfterHideResponse.channelUrl).toBe(CHANNEL_URL);
    expect(groupChannelAfterHideResponse).toHaveProperty("hiddenState");
    expect(groupChannelAfterHideResponse.isHidden).toBeTruthy();

    expect(groupChannelAfterHideResponse).toHaveProperty("hiddenState");
    expect(groupChannelAfterHideResponse.hiddenState).toBe(
      "hidden_allow_auto_unhide"
    );
    expect(
      validSendbirdGroupChannelHiddenStateEnum.includes(
        groupChannelAfterHideResponse.hiddenState
      )
    ).toBeTruthy();

    expect(groupChannelAfterUnHideResponse).toHaveProperty("hiddenState");
    expect(groupChannelAfterUnHideResponse.isHidden).toBeFalsy();
    expect(groupChannelAfterUnHideResponse).toHaveProperty("hiddenState");
    expect(groupChannelAfterUnHideResponse.hiddenState).toBe("unhidden");
    expect(
      validSendbirdGroupChannelHiddenStateEnum.includes(
        groupChannelAfterUnHideResponse.hiddenState
      )
    ).toBeTruthy();

    expect(hideAChannelResponse).toBeDefined();
    expect(unhideAChannelResponse).toBeDefined();
  });

  it("call inviteAsMembers then acceptAnInvitation and checkIfMember", async () => {
    const CHANNEL_URL = "group-channel-member-invitation-test-channel-url";
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

    const inviteAsMembersResponse = await groupChannelApi.inviteAsMembers({
      channelUrl: CHANNEL_URL,
      apiToken: API_TOKEN,
      inviteAsMembersRequest: {
        inviterId: MASTER_USER_ID,
        userIds: [SECOND_USER_ID],
      },
    });

    const groupChannelAfterInviteResponse =
      await groupChannelApi.getAGroupChannel({
        channelUrl: createGroupChannelresponse.channelUrl,
        apiToken: API_TOKEN,
        showDeliveryReceipt: true,
        showReadReceipt: true,
        showMember: true,
        memberActiveMode: "all",
        userId: SECOND_USER_ID,
      });

    const acceptAnInvitationResponse = await groupChannelApi.acceptAnInvitation(
      {
        channelUrl: createGroupChannelresponse.channelUrl,
        apiToken: API_TOKEN,
        acceptAnInvitationRequest: {
          userId: SECOND_USER_ID,
          accessCode: GLOBAL_GROUP_CHANNEL_ACCESS_CODE,
        },
      }
    );

    const checkIfMemberResponse = await groupChannelApi.checkIfMember({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      userId: SECOND_USER_ID,
    });

    const groupChannelAfterJoinedResponse =
      await groupChannelApi.getAGroupChannel({
        channelUrl: createGroupChannelresponse.channelUrl,
        apiToken: API_TOKEN,
        showDeliveryReceipt: true,
        showReadReceipt: true,
        showMember: true,
        memberActiveMode: "all",
        userId: SECOND_USER_ID,
      });

    await groupChannelApi.deleteAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
    });

    expect(inviteAsMembersResponse).toHaveProperty("invitedAt");
    expect(inviteAsMembersResponse).toHaveProperty("inviter");
    expect(inviteAsMembersResponse.inviter?.userId).toBe(MASTER_USER_ID);
    expect(inviteAsMembersResponse.inviter).toBeInstanceOf(
      SendbirdBasicUserInfo
    );

    expect(groupChannelAfterInviteResponse).toHaveProperty("memberState");
    expect(groupChannelAfterInviteResponse.memberState).toBe("invited");
    expect(groupChannelAfterInviteResponse.memberCount).toBe(2);
    expect(groupChannelAfterInviteResponse.joinedMemberCount).toBe(1);

    expect(acceptAnInvitationResponse.joinedMemberCount).toBe(2);
    expect(
      acceptAnInvitationResponse.members?.find(
        (member) => (member.state = "joined")
      )?.userId
    ).toBe(SECOND_USER_ID);

    expect(groupChannelAfterJoinedResponse).toHaveProperty("memberState");
    expect(groupChannelAfterJoinedResponse).toHaveProperty("joinedTs");
    expect(groupChannelAfterJoinedResponse.joinedTs?.toString().length).toBe(
      10
    );
    expect(groupChannelAfterJoinedResponse.memberState).toBe("joined");
    expect(groupChannelAfterJoinedResponse.memberCount).toBe(2);
    expect(groupChannelAfterJoinedResponse.joinedMemberCount).toBe(2);

    expect(checkIfMemberResponse).toHaveProperty("isMember");
    expect(checkIfMemberResponse.isMember).toBeTruthy();
    expect(typeof checkIfMemberResponse.isMember).toBe("boolean");

    expect(checkIfMemberResponse).toHaveProperty("state");
    expect(checkIfMemberResponse.state).toBeTruthy();
    expect(typeof checkIfMemberResponse.state).toBe("string");
    expect(
      validSendbirdGroupChannelMemberStateEnum.includes(
        checkIfMemberResponse.state
      )
    ).toBeTruthy();
  });

  it("call joinAChannel then leaveAChannel", async () => {
    const CHANNEL_URL = "group-channel-join-leave-channel-test-channel-url";
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

    const joinAChannelResponse = await groupChannelApi.joinAChannel({
      channelUrl: CHANNEL_URL,
      apiToken: API_TOKEN,
      joinAChannelRequest: {
        userId: SECOND_USER_ID,
        accessCode: GLOBAL_GROUP_CHANNEL_ACCESS_CODE,
      },
    });

    const leaveAChannelResponse = await groupChannelApi.leaveAChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      leaveAChannelRequest: {
        shouldLeaveAll: false,
        shouldRemoveOperatorStatus: true,
        reason: 'LEFT_BY_OWN_CHOICE',
        userIds: [SECOND_USER_ID],
      },
    });

    const getAGroupChannelResponse = await groupChannelApi.getAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      showDeliveryReceipt: true,
      showReadReceipt: true,
      showMember: true,
      memberActiveMode: "all",
      userId: MASTER_USER_ID,
    });

    await groupChannelApi.deleteAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
    });

    expect(joinAChannelResponse.memberCount).toBe(2);
    expect(joinAChannelResponse.joinedMemberCount).toBe(2);

    expect(leaveAChannelResponse).toBeDefined();

    expect(getAGroupChannelResponse.memberCount).toBe(1);
    expect(getAGroupChannelResponse.joinedMemberCount).toBe(1);
  });

  it("call updateAGroupChannel", async () => {
    const CHANNEL_URL = "group-channel-update-channel-test-channel-url";
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

    const createGroupChannelResponse =
      await groupChannelApi.createAGroupChannel({
        apiToken: API_TOKEN,
        createAGroupChannelRequest: request,
      });

    expect(createGroupChannelResponse).toHaveProperty("channelUrl");
    expect(createGroupChannelResponse.channelUrl).toBe(CHANNEL_URL);

    const updateAGroupChannelResponse =
      await groupChannelApi.updateAGroupChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
        updateAGroupChannelRequest: {
          name: "test2",
          data: "data2",
        },
      });

    expect(updateAGroupChannelResponse.name).toBe("test2");
    expect(updateAGroupChannelResponse.data).toBe("data2");
  });

  it("call resetChatHistory", async () => {
    const CHANNEL_URL = "group-channel-reset-chat-history-test-channel-url";
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

    expect(createGroupChannelresponse).toHaveProperty("channelUrl");
    expect(createGroupChannelresponse.channelUrl).toBe(CHANNEL_URL);

    const resetChatHistoryresponse = await groupChannelApi.resetChatHistory({
      apiToken: API_TOKEN,
      channelUrl: createGroupChannelresponse.channelUrl,
      resetChatHistoryRequest: {
        resetAll: true,
        userId: MASTER_USER_ID,
      },
    });

    expect(resetChatHistoryresponse).toHaveProperty("tsMessageOffset");
    expect(typeof resetChatHistoryresponse.tsMessageOffset).toBe("number");
    expect(resetChatHistoryresponse.tsMessageOffset?.toString().length).toBe(
      13
    );
  });
});
