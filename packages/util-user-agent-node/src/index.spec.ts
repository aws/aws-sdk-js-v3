import { defaultUserAgent, appendToUserAgent } from ".";
import * as process from "process";

describe("defaultUserAgent", () => {
  it("should response basic node default user agent", () => {
    const originEnv = process.env.AWS_EXECUTION_ENV;
    delete process.env.AWS_EXECUTION_ENV;
    expect(defaultUserAgent("client-s3-node", "0.1.0")).toBe(
      `aws-sdk-nodejs-v3-client-s3-node/0.1.0 ${process.platform}/${process.version}`
    );
    if (originEnv) process.env.AWS_EXECUTION_ENV = originEnv;
  });

  it("should add AWS_EXECUTION_ENV", () => {
    const originEnv = process.env.AWS_EXECUTION_ENV;
    process.env.AWS_EXECUTION_ENV = "ecs";
    expect(defaultUserAgent("client-s3-node", "0.1.0")).toBe(
      `aws-sdk-nodejs-v3-client-s3-node/0.1.0 ${process.platform}/${process.version} exec-env/ecs`
    );
    if (originEnv) process.env.AWS_EXECUTION_ENV = originEnv;
  });

  it("append to user agent", () => {
    const defaultValue = defaultUserAgent("client-s3-node", "0.1.0");
    const request = {
      headers: { "User-Agent": defaultValue },
      method: "GET",
      protocol: "json",
      hostname: "foo.amazonaws.com",
      path: "/"
    };
    appendToUserAgent(request, "http/2.0");
    expect(request.headers["User-Agent"]).toBe(`${defaultValue} http/2.0`);
  });
});
