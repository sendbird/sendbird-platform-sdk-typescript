import {
  CreateAGroupChannelRequest,
} from "../../models/ObjectSerializer";
import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { ModerationApi, GroupChannelApi } from "../../index";

describe("Group Channel API", () => {
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

  it("call listChannels with positive query params", async () => {
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
    const freezeResponse = await moderationApi.freezeAGroupChannel({
      channelUrl: response.channelUrl,
      apiToken: API_TOKEN,
      freezeAGroupChannelRequest: { freeze: true },
    });
    
    expect(response).toHaveProperty("channelUrl");
    expect(response.channelUrl).toBe("integration-test");
    expect(typeof response.channelUrl).toBe("string");
  });
});
