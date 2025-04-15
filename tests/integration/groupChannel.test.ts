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
} from "../../models/ObjectSerializer";
import { hasValidField } from "./helper";
import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { GroupChannelApi } from "../../index";

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

      Object(channel).hasProe;
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
});
