import { UserAgent } from "@smithy/types";
import { createDefaultUserAgentProvider, PreviouslyResolved } from "./defaultUserAgent";

jest.mock("os", () => ({
  platform: () => "darwin",
  release: () => "19.6.0",
}));

const getMockEnv = () => {
  const mockEnv: NodeJS.ProcessEnv = {};
  return mockEnv;
};

jest.mock("process", () => ({
  versions: {
    node: "14.13.1",
  },
  get env() {
    return getMockEnv();
  },
}));

jest.mock("./is-crt-available", () => ({
  isCrtAvailable: jest.fn().mockReturnValue(null),
}));

import { isCrtAvailable } from "./is-crt-available";

const validateUserAgent = (userAgent: UserAgent, expected: UserAgent) => {
  expect(userAgent.length).toBe(expected.length);
  for (const pair of expected) {
    expect(userAgent).toContainEqual(pair);
  }
};

describe("createDefaultUserAgentProvider", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    // Clear mockEnv before each test
    const mockEnv = getMockEnv();
    Object.keys(mockEnv).forEach((key) => delete mockEnv[key]);
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

  const mockConfig: PreviouslyResolved = {
    userAgentAppId: jest.fn().mockResolvedValue(undefined),
  };

  it("should return basic node default user agent", async () => {
    const userAgentProvider = createDefaultUserAgentProvider({ serviceId: "s3", clientVersion: "0.1.0" });
    const userAgent = await userAgentProvider(mockConfig);
    validateUserAgent(userAgent, basicUserAgent);
  });

  it("should set crt available key if aws-crt is available in runtime", async () => {
    (isCrtAvailable as jest.Mock).mockReturnValue(["md/crt-avail"]);
    const userAgentProvider = createDefaultUserAgentProvider({ serviceId: "s3", clientVersion: "0.1.0" });
    const userAgent = await userAgentProvider(mockConfig);
    expect(userAgent).toContainEqual(["md/crt-avail"]);
  });

  it("should skip api version if service id is not supplied", async () => {
    const userAgentProvider = createDefaultUserAgentProvider({ serviceId: undefined, clientVersion: "0.1.0" });
    const userAgent = await userAgentProvider(mockConfig);
    validateUserAgent(
      userAgent,
      basicUserAgent.filter((pair) => pair[0] !== "api/s3")
    );
  });

  it("should add AWS_EXECUTION_ENV", async () => {
    const mockEnv = getMockEnv();
    mockEnv.AWS_EXECUTION_ENV = "lambda";
    const userAgentProvider = createDefaultUserAgentProvider({ serviceId: "s3", clientVersion: "0.1.0" });
    const userAgent = await userAgentProvider(mockConfig);
    const expectedUserAgent: UserAgent = [...basicUserAgent, ["exec-env/lambda"]];
    validateUserAgent(userAgent, expectedUserAgent);
  });

  it("should add app id if available", async () => {
    const appId = "appId12345";
    const configWithAppId: PreviouslyResolved = {
      userAgentAppId: jest.fn().mockResolvedValue(appId),
    };
    const userAgentProvider = createDefaultUserAgentProvider({ serviceId: "s3", clientVersion: "0.1.0" });
    const userAgent = await userAgentProvider(configWithAppId);
    const expectedUserAgent: UserAgent = [...basicUserAgent, [`app/${appId}`]];
    validateUserAgent(userAgent, expectedUserAgent);
  });
});
