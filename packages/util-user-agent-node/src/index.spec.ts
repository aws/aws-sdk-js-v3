import process from "process";

import { defaultUserAgent } from ".";

describe("defaultUserAgent", () => {
  it("should response basic node default user agent", () => {
    const originEnv = process.env.AWS_EXECUTION_ENV;
    delete process.env.AWS_EXECUTION_ENV;
    const userAgent = defaultUserAgent("client-s3", "0.1.0");
    expect(userAgent).toEqual(expect.stringContaining("aws-sdk-nodejs/0.1.0"));
    expect(userAgent).toEqual(expect.stringContaining(process.platform));
    expect(userAgent).toEqual(expect.stringContaining(`nodejs/${process.versions.node}`));
    expect(userAgent).toEqual(expect.stringContaining("sdk-client/client-s3"));
    if (originEnv) process.env.AWS_EXECUTION_ENV = originEnv;
  });

  it("should add AWS_EXECUTION_ENV", () => {
    const originEnv = process.env.AWS_EXECUTION_ENV;
    process.env.AWS_EXECUTION_ENV = "ecs";
    const userAgent = defaultUserAgent("client-s3", "0.1.0");
    expect(userAgent).toEqual(expect.stringContaining("exec-env/ecs"));
    if (originEnv) process.env.AWS_EXECUTION_ENV = originEnv;
  });
});
