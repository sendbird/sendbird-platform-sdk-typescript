import {
  CreateAGroupChannelRequest,
} from "../../models/ObjectSerializer";
import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { ModerationApi, GroupChannelApi } from "../../index";
import { GLOBAL_GROUP_CHANNEL_ACCESS_CODE, MASTER_USER_ID, USERS } from "./constants";

describe("Moderation API", () => {
  const APP_ID = process.env.APP_ID || "";
  const API_TOKEN = process.env.API_TOKEN || "";
  let moderationApi: ModerationApi;
  let groupChannelApi: GroupChannelApi;
  

  beforeEach(() => {
    const serverConfig = new ServerConfiguration(
      `https://api-${APP_ID}.sendbird.com`,
      { app_id: APP_ID }
    );
    const configuration = createConfiguration({
      baseServer: serverConfig,
    });
    groupChannelApi = new GroupChannelApi(configuration);
    moderationApi = new ModerationApi(configuration);
  });

  it("call freezeAGroupChannel from new created channel", async () => {
    const CHANNEL_URL = 'freeze-integration-test-channel-url';
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
      users: USERS.map((id) => ({userId: id})),
    };

    const createGroupChannelresponse = await groupChannelApi.createAGroupChannel({
      apiToken: API_TOKEN,
      createAGroupChannelRequest: request,
    });

    expect(createGroupChannelresponse).toHaveProperty("channelUrl");
    expect(createGroupChannelresponse.channelUrl).toBe(CHANNEL_URL);
    expect(typeof createGroupChannelresponse.channelUrl).toBe("string");

    expect(createGroupChannelresponse).toHaveProperty("freeze");
    expect(createGroupChannelresponse.freeze).toBe(false);

    const freezeChannelResponse = await moderationApi.freezeAGroupChannel({
      channelUrl: createGroupChannelresponse.channelUrl,
      apiToken: API_TOKEN,
      freezeAGroupChannelRequest: { freeze: true },
    });
    
    expect(freezeChannelResponse).toHaveProperty("channelUrl");
    expect(freezeChannelResponse.channelUrl).toBe(CHANNEL_URL);
    expect(typeof freezeChannelResponse.channelUrl).toBe("string");

    expect(freezeChannelResponse).not.toEqual(createGroupChannelresponse);
    expect(freezeChannelResponse).toHaveProperty("freeze");
    expect(freezeChannelResponse.freeze).toBe(true);

    await groupChannelApi.deleteAGroupChannel({
      apiToken: API_TOKEN,
      channelUrl: createGroupChannelresponse.channelUrl,
    });
  });
});
