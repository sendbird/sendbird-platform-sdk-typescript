import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { OpenChannelApi } from "../../index";

describe("Open Channel API", () => {
  const APP_ID = process.env.APP_ID || "";
  const API_TOKEN = process.env.API_TOKEN || "";
  let openChannelApi: OpenChannelApi;

  beforeEach(() => {
    const serverConfig = new ServerConfiguration(
      `https://api-${APP_ID}.sendbird.com`,
      { app_id: APP_ID }
    );
    const configuration = createConfiguration({
      baseServer: serverConfig,
    });
    openChannelApi = new OpenChannelApi(configuration);
  });

  it.todo("create test case");
});
