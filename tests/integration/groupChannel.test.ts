import { Configuration } from "../../configuration";
import { GroupChatListChannelsResponse } from "../../models/GroupChatListChannelsResponse";
import {
  CreateAGroupChannelRequest,
  CreateAGroupChannelResponse,
  CreateAGroupChannelResponseChannel,
  CreateAGroupChannelResponseDisappearingMessage,
  CreateAGroupChannelResponseSmsFallback,
  ObjectSerializer,
  SendbirdGroupChannelCountPreferenceEnum,
  SendbirdGroupChannelCreatedBy,
  SendbirdGroupChannelDisappearingMessage,
  SendbirdGroupChannelHiddenStateEnum,
  SendbirdGroupChannelMemberStateEnum,
  SendbirdGroupChannelMyRoleEnum,
  SendbirdGroupChannelPushTriggerOptionEnum,
  SendbirdGroupChannelSmsFallback,
  SendbirdMessageResponse,
  SendbirdUser,
} from "../../models/ObjectSerializer";
import { ObservableGroupChannelApi } from "../../types/ObservableAPI";
import { PromiseGroupChannelApi } from "../../types/PromiseAPI";

jest.mock("../../types/ObservableAPI", () => ({
  ObservableGroupChannelApi: jest.fn(),
}));

describe("Group Channel API", () => {
  let mockConfiguration: Configuration;
  let mockApi: ObservableGroupChannelApi;
  let promiseGroupChannelApi: PromiseGroupChannelApi;

  beforeEach(() => {
    mockConfiguration = {} as Configuration;

    // Create a manual mock for ObservableGroupChannelApi
    mockApi = {
      listChannels: jest.fn().mockReturnValue({
        toPromise: jest.fn(),
      }),
      createAGroupChannel: jest.fn().mockReturnValue({
        toPromise: jest.fn(),
      }),
    } as unknown as ObservableGroupChannelApi;

    // Ensure PromiseGroupChannelApi gets the mocked ObservableGroupChannelApi instance
    (ObservableGroupChannelApi as jest.Mock).mockImplementation(() => mockApi);

    promiseGroupChannelApi = new PromiseGroupChannelApi(mockConfiguration);
  });

  it("should call GroupChannelAPI.listChannels and return expected response", async () => {
    // Arrange: Mock listChannels to return a resolved value
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);

    const rawResponse = {
      channels: [
        {
          channel_url:
            "sendbird_group_channel_356843284_876d38c645c9cbea92ca8790360dcfc975198d23",
          count_preference: "all",
          cover_url: "https://static.sendbird.com/sample/cover/cover_11.jpg",
          created_at: 1743535432,
          created_by: {
            user_id: "sendbirdian-200720",
            nickname: "sendbirdian-200720",
            profile_url: "https://qa.custojusto.pt/profiles/56/5604380239.jpg",
            require_auth_for_profile_image: false,
          },
          custom_type: "",
          data: "",
          delivery_receipt: {
            "sendbirdian-200720": 1743535440571,
            "13bc": 1743535432406,
          },
          disappearing_message: {
            is_triggered_by_message_read: false,
            message_survival_seconds: -1,
          },
          freeze: false,
          has_ai_bot: false,
          has_bot: false,
          hidden_state: "unhidden",
          id: "",
          ignore_profanity_filter: false,
          invited_at: 1743535432406,
          inviter: {},
          is_access_code_required: false,
          is_broadcast: false,
          is_discoverable: false,
          is_distinct: false,
          is_ephemeral: false,
          is_exclusive: false,
          is_hidden: false,
          is_muted: false,
          is_public: false,
          is_push_enabled: true,
          is_super: false,
          joined_member_count: 2,
          joined_ts: 1743535432,
          last_message: {
            type: "MESG",
            message_id: 10328444842,
            message: "for",
            data: "",
            custom_type: "",
            file: {},
            created_at: 1743535440571,
            user: {
              user_id: "sendbirdian-200720",
              profile_url:
                "https://qa.custojusto.pt/profiles/56/5604380239.jpg",
              require_auth_for_profile_image: false,
              nickname: "Sendbirdian84",
              metadata: {},
              is_blocked_by_me: false,
              role: "operator",
              is_active: true,
            },
            channel_url:
              "sendbird_group_channel_356843284_876d38c645c9cbea92ca8790360dcfc975198d23",
            updated_at: 0,
            message_survival_seconds: -1,
            mentioned_users: [],
            mention_type: "users",
            silent: false,
            message_retention_hour: -1,
            channel_type: "group",
            translations: {},
            is_removed: false,
            req_id: "1743535403189",
            is_op_msg: true,
            message_events: {
              send_push_notification: "receivers",
              update_unread_count: true,
              update_mention_count: true,
              update_last_message: true,
            },
          },
          max_length_message: 5000,
          member_count: 2,
          member_state: "joined",
          members: [
            {
              user_id: "sendbirdian-200720",
              nickname: "sendbirdian-200720",
              profile_url:
                "https://qa.custojusto.pt/profiles/56/5604380239.jpg",
              require_auth_for_profile_image: false,
              metadata: {},
              is_online: true,
              last_seen_at: 0,
              state: "joined",
              is_active: true,
              is_blocked_by_me: false,
              friend_name: null,
              friend_discovery_key: null,
              role: "operator",
              is_muted: false,
              muted_end_at: -1,
              muted_description: "",
              is_blocking_me: false,
            },
            {
              user_id: "13bc",
              nickname: "13bc",
              profile_url:
                "https://static.sendbird.com/sample/user_sdk/user_sdk_24.png",
              require_auth_for_profile_image: false,
              metadata: {},
              is_online: false,
              last_seen_at: 1743370611361,
              state: "joined",
              is_active: true,
              is_blocked_by_me: false,
              friend_name: null,
              friend_discovery_key: null,
              role: "",
              is_muted: false,
              muted_end_at: -1,
              muted_description: "",
              is_blocking_me: false,
            },
          ],
          message_survival_seconds: -1,
          metadata: {},
          my_role: "operator",
          name: "Group Channel",
          push_trigger_option: "default",
          read_receipt: {
            "13bc": 1743535432406,
            "sendbirdian-200720": 1743535440571,
          },
          sms_fallback: {
            wait_seconds: -1,
            exclude_user_ids: [],
          },
          ts_message_offset: 0,
          unread_mention_count: 0,
          unread_message_count: 0,
          user_last_read: 1743535440571,
        },
      ],
      next: "",
    };
    const responseString = ObjectSerializer.stringify(rawResponse, contentType);
    const mockResponse: GroupChatListChannelsResponse =
      ObjectSerializer.deserialize(
        ObjectSerializer.parse(responseString, contentType),
        "GroupChatListChannelsResponse",
        ""
      ) as GroupChatListChannelsResponse;

    (mockApi.listChannels as jest.Mock).mockReturnValue({
      toPromise: jest.fn().mockResolvedValue(mockResponse),
    });

    // Act
    const response = await promiseGroupChannelApi.listChannels("mockApiToken");

    // Assert
    expect(response).toEqual(mockResponse);
    expect(response).toHaveProperty("channels");
    expect(Array.isArray(response.channels)).toBe(true);
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
    )[] = [
      "hidden_allow_auto_unhide",
      "hidden_prevent_auto_unhide",
      "unhidden",
    ];

    const validSendbirdGroupChannelMyRoleEnum: (
      | SendbirdGroupChannelMyRoleEnum
      | undefined
    )[] = ["none", "operator", ""];
    const validSendbirdGroupChannelPushTriggerOptionEnum: (
      | SendbirdGroupChannelPushTriggerOptionEnum
      | undefined
    )[] = ["all", "default", "false", "mention_only"];

    response.channels?.forEach((channel) => {
      expect(channel).toHaveProperty("channelUrl");
      expect(typeof channel.channelUrl).toBe("string");
      expect(channel).toHaveProperty("countPreference");
      expect(typeof channel.countPreference).toBe("string");
      expect(
        validSendbirdGroupChannelCountPreferenceEnum.includes(
          channel.countPreference
        )
      ).toBe(true);
      expect(channel).toHaveProperty("name");
      expect(typeof channel.name).toBe("string");
      expect(channel).toHaveProperty("coverUrl");
      expect(typeof channel.coverUrl).toBe("string");

      expect(channel).toHaveProperty("createdAt");
      expect(typeof channel.createdAt).toBe("number");

      expect(channel).toHaveProperty("createdBy");
      expect(channel.createdBy).toBeInstanceOf(SendbirdGroupChannelCreatedBy);

      expect(channel).toHaveProperty("customType");
      expect(typeof channel.customType).toBe("string");

      expect(channel).toHaveProperty("data");
      expect(typeof channel.data).toBe("string");

      expect(channel).toHaveProperty("deliveryReceipt");
      expect(typeof channel.deliveryReceipt).toBe("object");

      expect(channel).toHaveProperty("disappearingMessage");
      expect(channel.disappearingMessage).toBeInstanceOf(
        SendbirdGroupChannelDisappearingMessage
      );

      expect(channel).toHaveProperty("freeze");
      expect(typeof channel.freeze).toBe("boolean");

      expect(channel).toHaveProperty("hasAiBot");
      expect(typeof channel.hasAiBot).toBe("boolean");

      expect(channel).toHaveProperty("hasBot");
      expect(typeof channel.hasBot).toBe("boolean");

      expect(channel).toHaveProperty("hiddenState");
      expect(
        validSendbirdGroupChannelHiddenStateEnum.includes(channel.hiddenState)
      ).toBe(true);
      expect(typeof channel.hiddenState).toBe("string");

      expect(channel).toHaveProperty("ignoreProfanityFilter");
      expect(typeof channel.ignoreProfanityFilter).toBe("boolean");

      expect(channel).toHaveProperty("invitedAt");
      expect(typeof channel.invitedAt).toBe("number");

      expect(channel).toHaveProperty("inviter");
      expect(channel.inviter).toBeInstanceOf(SendbirdUser);

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

      expect(channel).toHaveProperty("isHidden");
      expect(typeof channel.isHidden).toBe("boolean");

      expect(channel).toHaveProperty("isMuted");
      expect(typeof channel.isMuted).toBe("boolean");

      expect(channel).toHaveProperty("isPublic");
      expect(typeof channel.isPublic).toBe("boolean");

      expect(channel).toHaveProperty("isPushEnabled");
      expect(typeof channel.isPushEnabled).toBe("boolean");

      expect(channel).toHaveProperty("isSuper");
      expect(typeof channel.isSuper).toBe("boolean");

      expect(channel).toHaveProperty("joinedMemberCount");
      expect(typeof channel.joinedMemberCount).toBe("number");

      expect(channel).toHaveProperty("joinedTs");
      expect(typeof channel.joinedTs).toBe("number");

      expect(channel).toHaveProperty("lastMessage");
      expect(channel.lastMessage).toBeInstanceOf(SendbirdMessageResponse);

      expect(channel).toHaveProperty("maxLengthMessage");
      expect(typeof channel.maxLengthMessage).toBe("number");

      expect(channel).toHaveProperty("memberCount");
      expect(typeof channel.memberCount).toBe("number");

      expect(channel).toHaveProperty("memberState");
      expect(
        validSendbirdGroupChannelMemberStateEnum.includes(channel.memberState)
      ).toBe(true);
      expect(typeof channel.memberState).toBe("string");

      expect(channel).toHaveProperty("members");
      expect(Array.isArray(channel.members)).toBe(true);

      expect(channel).toHaveProperty("messageSurvivalSeconds");
      expect(typeof channel.messageSurvivalSeconds).toBe("number");

      expect(channel).toHaveProperty("metadata");
      expect(typeof channel.metadata).toBe("object");

      expect(channel).toHaveProperty("myRole");
      expect(validSendbirdGroupChannelMyRoleEnum.includes(channel.myRole)).toBe(
        true
      );
      expect(typeof channel.myRole).toBe("string");

      expect(channel).toHaveProperty("name");
      expect(typeof channel.name).toBe("string");

      expect(channel).toHaveProperty("pushTriggerOption");
      expect(
        validSendbirdGroupChannelPushTriggerOptionEnum.includes(
          channel.pushTriggerOption
        )
      ).toBe(true);
      expect(typeof channel.pushTriggerOption).toBe("string");

      expect(channel).toHaveProperty("readReceipt");
      expect(typeof channel.readReceipt).toBe("object");

      expect(channel).toHaveProperty("smsFallback");
      expect(channel.smsFallback).toBeInstanceOf(
        SendbirdGroupChannelSmsFallback
      );

      expect(channel).toHaveProperty("tsMessageOffset");
      expect(typeof channel.tsMessageOffset).toBe("number");

      expect(channel).toHaveProperty("unreadMentionCount");
      expect(typeof channel.unreadMentionCount).toBe("number");

      expect(channel).toHaveProperty("unreadMessageCount");
      expect(typeof channel.unreadMessageCount).toBe("number");

      expect(channel).toHaveProperty("userLastRead");
      expect(typeof channel.userLastRead).toBe("number");
    });

    expect(response).toHaveProperty("next");
    expect(typeof response.next).toBe("string");
    expect(mockApi.listChannels).toHaveBeenCalledTimes(1);
  });

  it("should call GroupChannelAPI.createAGroupChannel and return expected response", async () => {
    // Arrange: Mock listChannels to return a resolved value
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    const rawResponse = {
      channel_url: "test-join",
      name: "test join 2",
      cover_url: "string",
      data: "data",
      member_count: 1,
      joined_member_count: 0,
      max_length_message: 5000,
      created_at: 1741140909,
      custom_type: "string",
      is_distinct: false,
      is_super: false,
      is_broadcast: false,
      is_public: true,
      is_discoverable: true,
      freeze: false,
      is_ephemeral: false,
      unread_message_count: 0,
      unread_mention_count: 0,
      ignore_profanity_filter: false,
      has_ai_bot: false,
      has_bot: false,
      id: 145038737,
      channel: {
        channel_url: "test-join",
        name: "test join 2",
        cover_url: "string",
        data: "data",
        created_at: 1741140909,
        custom_type: "string",
        max_length_message: 5000,
        member_count: 1,
      },
      created_by: null,
      disappearing_message: {
        is_triggered_by_message_read: false,
        message_survival_seconds: -1,
      },
      is_access_code_required: true,
      is_created: true,
      message_survival_seconds: -1,
      sms_fallback: {
        wait_seconds: -1,
        exclude_user_ids: [],
      },
      last_message: null,
      members: [
        {
          user_id: "880838",
          nickname: "ridwan",
          profile_url: "",
          require_auth_for_profile_image: false,
          metadata: {},
          is_online: true,
          last_seen_at: 0,
          state: "invited",
          is_active: true,
          role: "",
          is_muted: false,
          muted_end_at: -1,
          muted_description: "",
        },
      ],
      operators: [],
    };

    const responseString = ObjectSerializer.stringify(rawResponse, contentType);
    const mockResponse: CreateAGroupChannelResponse =
      ObjectSerializer.deserialize(
        ObjectSerializer.parse(responseString, contentType),
        "CreateAGroupChannelResponse",
        ""
      ) as CreateAGroupChannelResponse;

    (mockApi.createAGroupChannel as jest.Mock).mockReturnValue({
      toPromise: jest.fn().mockResolvedValue(mockResponse),
    });

    // Act
    const options: CreateAGroupChannelRequest = {
      users: [
        {
          userId: "880838",
        },
      ],
      name: "test join 2",
      channelUrl: "test-join",
      coverUrl: "string",
      customType: "string",
      data: "data",
      isDistinct: false,
      isPublic: true,
      isSuper: false,
      isEphemeral: false,
      accessCode: "yesjoin",
      inviterId: "userId",
      strict: false,
      invitationStatus: {},
      hiddenStatus: {
        userId1: "unhidden",
        userId2: "hidden_allow_auto_unhide",
      },
      operatorIds: ["string"],
      blockSdkUserChannelJoin: false,
    };
    const response = await promiseGroupChannelApi.createAGroupChannel(
      "mockApiToken",
      options
    );

    // Assert
    expect(response).toEqual(mockResponse);

    expect(response).toHaveProperty("channel");
    expect(response.channel).toBeInstanceOf(CreateAGroupChannelResponseChannel);

    expect(response).toHaveProperty("channelUrl");
    expect(typeof response.channelUrl).toBe("string");

    expect(response).toHaveProperty("coverUrl");
    expect(typeof response.coverUrl).toBe("string");

    expect(response).toHaveProperty("createdAt");
    expect(typeof response.createdAt).toBe("number");

    expect(response).toHaveProperty("createdBy");
    expect(response.createdBy).toBe(null);

    expect(response).toHaveProperty("customType");
    expect(typeof response.customType).toBe("string");

    expect(response).toHaveProperty("data");
    expect(typeof response.data).toBe("string");

    expect(response).toHaveProperty("disappearingMessage");
    expect(response.disappearingMessage).toBeInstanceOf(
      CreateAGroupChannelResponseDisappearingMessage
    );

    expect(response).toHaveProperty("freeze");
    expect(typeof response.freeze).toBe("boolean");

    expect(response).toHaveProperty("hasAiBot");
    expect(typeof response.hasAiBot).toBe("boolean");

    expect(response).toHaveProperty("hasBot");
    expect(typeof response.hasBot).toBe("boolean");

    expect(response).toHaveProperty("id");
    expect(typeof response.id).toBe("number");

    expect(response).toHaveProperty("ignoreProfanityFilter");
    expect(typeof response.ignoreProfanityFilter).toBe("boolean");

    expect(response).toHaveProperty("isAccessCodeRequired");
    expect(typeof response.isAccessCodeRequired).toBe("boolean");

    expect(response).toHaveProperty("isBroadcast");
    expect(typeof response.isBroadcast).toBe("boolean");

    expect(response).toHaveProperty("isCreated");
    expect(typeof response.isCreated).toBe("boolean");

    expect(response).toHaveProperty("isDiscoverable");
    expect(typeof response.isDiscoverable).toBe("boolean");

    expect(response).toHaveProperty("isDistinct");
    expect(typeof response.isDistinct).toBe("boolean");

    expect(response).toHaveProperty("isEphemeral");
    expect(typeof response.isEphemeral).toBe("boolean");

    expect(response).toHaveProperty("isPublic");
    expect(typeof response.isPublic).toBe("boolean");

    expect(response).toHaveProperty("isSuper");
    expect(typeof response.isSuper).toBe("boolean");

    expect(response).toHaveProperty("joinedMemberCount");
    expect(typeof response.joinedMemberCount).toBe("number");

    expect(response).toHaveProperty("lastMessage");
    // new created group channel does not have message
    expect(response.lastMessage).toBe(null);

    expect(response).toHaveProperty("maxLengthMessage");
    expect(typeof response.maxLengthMessage).toBe("number");

    expect(response).toHaveProperty("memberCount");
    expect(typeof response.memberCount).toBe("number");

    expect(response).toHaveProperty("members");
    expect(Array.isArray(response.members)).toBe(true);

    expect(response).toHaveProperty("messageSurvivalSeconds");
    expect(typeof response.messageSurvivalSeconds).toBe("number");

    expect(response).toHaveProperty("name");
    expect(typeof response.name).toBe("string");

    expect(response).toHaveProperty("operators");
    expect(Array.isArray(response.operators)).toBe(true);

    expect(response).toHaveProperty("smsFallback");
    expect(response.smsFallback).toBeInstanceOf(
      CreateAGroupChannelResponseSmsFallback
    );

    expect(response).toHaveProperty("unreadMentionCount");
    expect(typeof response.unreadMentionCount).toBe("number");

    expect(response).toHaveProperty("unreadMessageCount");
    expect(typeof response.unreadMessageCount).toBe("number");

    expect(mockApi.createAGroupChannel).toHaveBeenCalledTimes(1);
  });
});
