import { CreateAnOpenChannelRequest } from "./../../models/CreateAnOpenChannelRequest";
import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { OpenChannelApi } from "../../index";
import { hasValidField } from "./helper";

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

  it("call createAnOpenChannel", async () => {
    const CHANNEL_URL = "test-create-open-channel-url";
    // Cleanup first
    try {
      await openChannelApi.deleteAnOpenChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      //ignore
      console.warn("ignore error in cleanup", e);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const request: CreateAnOpenChannelRequest = {
      isDynamicPartitioned: false,
      channelUrl: CHANNEL_URL,
      coverUrl: "string",
      customType: "custom",
      data: "data",
      isEphemeral: false,
      name: CHANNEL_URL,
      operatorIds: [],
    };

    const createAnOpenChannelResponse =
      await openChannelApi.createAnOpenChannel({
        apiToken: API_TOKEN,
        createAnOpenChannelRequest: request,
      });

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(createAnOpenChannelResponse).toHaveProperty("channelUrl");
    expect(typeof createAnOpenChannelResponse.channelUrl).toBe("string");

    if (hasValidField(createAnOpenChannelResponse, "coverUrl")) {
      expect(typeof createAnOpenChannelResponse.coverUrl).toBe("string");
    }

    if (hasValidField(createAnOpenChannelResponse, "createdAt")) {
      expect(typeof createAnOpenChannelResponse.createdAt).toBe("number");
    }

    if (hasValidField(createAnOpenChannelResponse, "customType")) {
      expect(typeof createAnOpenChannelResponse.customType).toBe("string");
    }

    if (hasValidField(createAnOpenChannelResponse, "data")) {
      expect(typeof createAnOpenChannelResponse.data).toBe("string");
    }

    if (hasValidField(createAnOpenChannelResponse, "freeze")) {
      expect(typeof createAnOpenChannelResponse.freeze).toBe("boolean");
    }

    if (hasValidField(createAnOpenChannelResponse, "isDynamicPartitioned")) {
      expect(typeof createAnOpenChannelResponse.isDynamicPartitioned).toBe(
        "boolean"
      );
    }

    if (hasValidField(createAnOpenChannelResponse, "isEphemeral")) {
      expect(typeof createAnOpenChannelResponse.isEphemeral).toBe("boolean");
    }

    if (hasValidField(createAnOpenChannelResponse, "maxLengthMessage")) {
      expect(typeof createAnOpenChannelResponse.maxLengthMessage).toBe(
        "number"
      );
    }

    if (hasValidField(createAnOpenChannelResponse, "name")) {
      expect(typeof createAnOpenChannelResponse.name).toBe("string");
    }

    if (hasValidField(createAnOpenChannelResponse, "operators")) {
      expect(Array.isArray(createAnOpenChannelResponse.operators)).toBe(true);
      createAnOpenChannelResponse.operators?.forEach((op) => {
        expect(op).toHaveProperty("userId");
        expect(typeof op.userId).toBe("string");
      });
    }

    if (hasValidField(createAnOpenChannelResponse, "participantCount")) {
      expect(typeof createAnOpenChannelResponse.participantCount).toBe(
        "number"
      );
    }

    if (hasValidField(createAnOpenChannelResponse, "metadata")) {
      expect(typeof createAnOpenChannelResponse.metadata).toBe("object");
    }

    // Cleanup last
    try {
      await openChannelApi.deleteAnOpenChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      //ignore
      console.warn("ignore error in cleanup", e);
    }
  });

  it("call listOpenChannels", async () => {
    const CHANNEL_URL = "test-create-open-before-list-channels-channel-url";
    // Cleanup first
    try {
      await openChannelApi.deleteAnOpenChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      //ignore
      console.warn("ignore error in cleanup", e);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const request: CreateAnOpenChannelRequest = {
      isDynamicPartitioned: false,
      channelUrl: CHANNEL_URL,
      coverUrl: "string",
      customType: "custom",
      data: "data",
      isEphemeral: false,
      name: CHANNEL_URL,
      operatorIds: [],
    };

    const createAnOpenChannelResponse =
      await openChannelApi.createAnOpenChannel({
        apiToken: API_TOKEN,
        createAnOpenChannelRequest: request,
      });

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(createAnOpenChannelResponse).toBeDefined();

    const listOpenChannelsResponse = await openChannelApi.listOpenChannels({
      apiToken: API_TOKEN,
    });

    expect(listOpenChannelsResponse).toHaveProperty("channels");
    listOpenChannelsResponse.channels?.forEach((channel) => {
      expect(channel).toHaveProperty("channelUrl");
      expect(typeof channel.channelUrl).toBe("string");

      if (hasValidField(channel, "coverUrl")) {
        expect(typeof channel.coverUrl).toBe("string");
      }

      if (hasValidField(channel, "createdAt")) {
        expect(typeof channel.createdAt).toBe("number");
      }

      if (hasValidField(channel, "customType")) {
        expect(typeof channel.customType).toBe("string");
      }

      if (hasValidField(channel, "data")) {
        expect(typeof channel.data).toBe("string");
      }

      if (hasValidField(channel, "freeze")) {
        expect(typeof channel.freeze).toBe("boolean");
      }

      if (hasValidField(channel, "isDynamicPartitioned")) {
        expect(typeof channel.isDynamicPartitioned).toBe("boolean");
      }

      if (hasValidField(channel, "isEphemeral")) {
        expect(typeof channel.isEphemeral).toBe("boolean");
      }

      if (hasValidField(channel, "maxLengthMessage")) {
        expect(typeof channel.maxLengthMessage).toBe("number");
      }

      if (hasValidField(channel, "name")) {
        expect(typeof channel.name).toBe("string");
      }

      if (hasValidField(channel, "operators")) {
        expect(Array.isArray(channel.operators)).toBe(true);
        channel.operators?.forEach((op) => {
          expect(op).toHaveProperty("userId");
          expect(typeof op.userId).toBe("string");
        });
      }

      if (hasValidField(channel, "participantCount")) {
        expect(typeof channel.participantCount).toBe("number");
      }

      if (hasValidField(channel, "metadata")) {
        expect(typeof channel.metadata).toBe("object");
      }
    });

    // Cleanup last
    try {
      await openChannelApi.deleteAnOpenChannel({
        channelUrl: CHANNEL_URL,
        apiToken: API_TOKEN,
      });
    } catch (e) {
      //ignore
      console.warn("ignore error in cleanup", e);
    }
  });
});
