import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { MetadataApi, OpenChannelApi } from "../../index";

describe("Metadata API", () => {
  const APP_ID = process.env.APP_ID || "";
  const API_TOKEN = process.env.API_TOKEN || "";
  let metadataApi: MetadataApi;

  beforeEach(() => {
    const serverConfig = new ServerConfiguration(
      `https://api-${APP_ID}.sendbird.com`,
      { app_id: APP_ID }
    );
    const configuration = createConfiguration({
      baseServer: serverConfig,
    });
    metadataApi = new MetadataApi(configuration);
  });

  it.todo("create test case");
});
