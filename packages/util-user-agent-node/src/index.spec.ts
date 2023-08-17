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

jest.mock("./is-crt-available", () => ({
  isCrtAvailable: jest.fn().mockReturnValue(null),
}));
import { isCrtAvailable } from "./is-crt-available";

const mockAppIdLoader = jest.fn().mockResolvedValue(undefined);
jest.mock("@smithy/node-config-provider", () => ({
  loadConfig: () => mockAppIdLoader,
}));

import { UserAgent } from "@smithy/types";

import { defaultUserAgent } from ".";

const validateUserAgent = (userAgent: UserAgent, expected: UserAgent) => {
  expect(userAgent.length).toBe(expected.length);
  for (const pair of expected) {
    expect(userAgent).toContainEqual(pair);
  }
};

describe("defaultUserAgent", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  const basicUserAgent: UserAgent = [
    ["aws-sdk-js", "0.1.0"],
    ["ua", "2.0"],
    ["api/s3", "0.1.0"],
    ["os/darwin", "19.6.0"],
    ["lang/js"],
    ["md/nodejs", "14.13.1"],
  ];

  it("should response basic node default user agent", async () => {
    const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
    validateUserAgent(userAgent, basicUserAgent);
  });

  it("should set crt available key if aws-crt is available in runtime", async () => {
    (isCrtAvailable as jest.Mock).mockReturnValue(["md/crt-avail"]);
    const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
    expect(userAgent).toContainEqual(["md/crt-avail"]);
  });

  it("should skip api version if service id is not supplied", async () => {
    const userAgent = await defaultUserAgent({ serviceId: undefined, clientVersion: "0.1.0" })();
    validateUserAgent(
      userAgent,
      basicUserAgent.filter((pair) => pair[0] !== "api/s3")
    );
  });

  it("should add AWS_EXECUTION_ENV", async () => {
    //@ts-ignore mock environmental variables
    mockEnv.AWS_EXECUTION_ENV = "lambda";
    const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
    const expectedUserAgent: UserAgent = [...basicUserAgent, ["exec-env/lambda"]];
    validateUserAgent(userAgent, expectedUserAgent);
    //@ts-ignore mock environmental variables
    delete mockEnv.AWS_EXECUTION_ENV;
  });

  it("should load app id if available", async () => {
    mockAppIdLoader.mockClear();
    const appId = "appId12345";
    mockAppIdLoader.mockResolvedValue(appId);
    const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
    const expectedUserAgent: UserAgent = [...basicUserAgent, [`app/${appId}`]];
    validateUserAgent(userAgent, expectedUserAgent);
  });

  it("should memoize app id", async () => {
    mockAppIdLoader.mockClear();
    const appId = "appId12345";
    mockAppIdLoader.mockResolvedValue(appId);
    const userAgentProvider = defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" });
    const expectedUserAgent: UserAgent = [...basicUserAgent, [`app/${appId}`]];
    validateUserAgent(await userAgentProvider(), expectedUserAgent);
    validateUserAgent(await userAgentProvider(), expectedUserAgent);
    expect(mockAppIdLoader).toBeCalledTimes(1);
  });
});
