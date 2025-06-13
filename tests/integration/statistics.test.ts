import { ServerConfiguration } from "../../servers";
import { createConfiguration } from "../../configuration";
import { StatisticsApi } from "../../index";

describe("Statistics API", () => {
  const APP_ID = process.env.APP_ID || "";
  const API_TOKEN = process.env.API_TOKEN || "";
  let statisticApi: StatisticsApi;

  beforeEach(() => {
    const serverConfig = new ServerConfiguration(
      `https://api-${APP_ID}.sendbird.com`,
      { app_id: APP_ID }
    );
    const configuration = createConfiguration({
      baseServer: serverConfig,
    });
    statisticApi = new StatisticsApi(configuration);
  });

  it("call viewNumberOfDailyActiveUsers", async () => {
    const response = await statisticApi.viewNumberOfDailyActiveUsers({
      apiToken: API_TOKEN,
    });

    expect(Object.keys(response).length).toBe(1);

    expect(response).toHaveProperty("dau");
    expect(response.dau).toBeGreaterThanOrEqual(0);
    expect(typeof response.dau).toBe("number");
  });

  it("call viewNumberOfMonthlyActiveUsers", async () => {
    const response = await statisticApi.viewNumberOfMonthlyActiveUsers({
      apiToken: API_TOKEN,
    });

    expect(Object.keys(response).length).toBe(1);

    expect(response).toHaveProperty("mau");
    expect(response.mau).toBeGreaterThanOrEqual(0);
    expect(typeof response.mau).toBe("number");
  });
});
