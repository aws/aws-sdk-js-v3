jest.mock("os", () => ({
  platform: () => "darwin",
  release: () => "19.6.0",
}));

const mockEnv = {};
jest.mock("process", () => ({
  env: mockEnv,
  versions: {
    node: "14.13.1",
  },
}));

const mockAppIdLoader = jest.fn().mockResolvedValue(undefined);
jest.mock("@aws-sdk/node-config-provider", () => ({
  loadConfig: () => mockAppIdLoader,
}));

import { defaultUserAgent } from ".";

describe("defaultUserAgent", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should response basic node default user agent", async () => {
    const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
    expect(userAgent).toContainEqual(["aws-sdk-js", "0.1.0"]);
    expect(userAgent).toContainEqual(["api/s3", "0.1.0"]);
    expect(userAgent).toContainEqual(["os/darwin", "19.6.0"]);
    expect(userAgent).toContainEqual(["lang/js"]);
  });

  it("should skip api version if service id is not supplied", async () => {
    const userAgent = await defaultUserAgent({ serviceId: undefined, clientVersion: "0.1.0" })();
    expect(userAgent).not.toContainEqual(["api/s3", "0.1.0"]);
  });

  it("should add AWS_EXECUTION_ENV", async () => {
    //@ts-ignore mock environmental variables
    mockEnv.AWS_EXECUTION_ENV = "lambda";
    const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
    expect(userAgent).toContainEqual(["exec-env/lambda"]);
  });

  it("should load app id if available", async () => {
    mockAppIdLoader.mockClear();
    const appId = "appId12345";
    mockAppIdLoader.mockResolvedValue(appId);
    const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
    expect(userAgent).toContainEqual([`app/${appId}`]);
  });
});
