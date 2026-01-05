import { describe, expect, test as it } from "vitest";

import { build, parse, validate } from "./index";

describe("validate", () => {
  it("should validate whether input is a qualified resource ARN", () => {
    expect(validate("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint")).toBe(true);
    expect(validate("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint")).toBe(true);
    expect(validate("arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint")).toBe(true);
    expect(validate("arn:aws-cn:s3:cn-north-1:123456789012:accesspoint:myendpoint")).toBe(true);
    expect(validate("arn:aws:sns:us-west-2:123456789012:myTopic")).toBe(true);
    expect(validate("some:random:string:separated:by:colons")).toBe(false);
    expect(validate("arn:aws:too:short")).toBe(false);
  });
});

describe("parser", () => {
  it("should parse valid resource ARNs", () => {
    expect(parse("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint")).toEqual({
      partition: "aws",
      service: "s3",
      region: "us-west-2",
      accountId: "123456789012",
      resource: "accesspoint:myendpoint",
    });
    expect(parse("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint")).toEqual({
      partition: "aws",
      service: "s3",
      region: "us-east-1",
      accountId: "123456789012",
      resource: "accesspoint:myendpoint",
    });
    expect(parse("arn:aws-cn:s3:cn-north-1:123456789012:accesspoint:myendpoint")).toEqual({
      partition: "aws-cn",
      service: "s3",
      region: "cn-north-1",
      accountId: "123456789012",
      resource: "accesspoint:myendpoint",
    });
    expect(parse("arn:aws:sns:us-west-2:123456789012:myTopic")).toEqual({
      partition: "aws",
      service: "sns",
      region: "us-west-2",
      accountId: "123456789012",
      resource: "myTopic",
    });
    expect(parse("arn:aws:sns:::myTopic")).toEqual({
      partition: "aws",
      service: "sns",
      region: "",
      accountId: "",
      resource: "myTopic",
    });
  });

  it("should throw at invalid ARN strings", () => {
    const invalidArns = ["some:random:string:separated:by:colons", "arn:aws:too:short"];
    invalidArns.forEach((arn) => {
      expect(() => parse(arn)).toThrow("Malformed ARN");
    });
  });
});

describe("builder", () => {
  const builderArn = {
    service: "s3",
    region: "us-east-1",
    accountId: "123456789012",
    resource: "accesspoint:myendpoint",
  };

  const nonS3BuilderArn = {
    service: "sns",
    region: "us-east-1",
    accountId: "123456789012",
    resource: "myTopic",
  };

  it("should build valid S3 ARN object to string with omitted region and accountId", () => {
    expect(build(builderArn)).toBe("arn:aws:s3:::accesspoint:myendpoint");
  });

  it("should build valid S3 bucket ARN", () => {
    expect(
      build({
        service: "s3",
        region: "us-east-1",
        accountId: "123456789012",
        resource: "a-bucket",
      })
    ).toBe("arn:aws:s3:::a-bucket");
  });

  it("should build valid S3 object ARN", () => {
    expect(
      build({
        service: "s3",
        region: "us-east-1",
        accountId: "123456789012",
        resource: "a-bucket/key-name",
      })
    ).toBe("arn:aws:s3:::a-bucket/key-name");
  });

  it("should build valid non-S3 ARN object to string", () => {
    expect(build(nonS3BuilderArn)).toBe("arn:aws:sns:us-east-1:123456789012:myTopic");
  });

  it("should throw if service is missing", () => {
    expect(() => build({ ...builderArn, service: undefined as any })).toThrow(new Error("Input ARN object is invalid"));
  });

  it("should throw if resource is missing", () => {
    expect(() => build({ ...builderArn, resource: undefined as any })).toThrow(
      new Error("Input ARN object is invalid")
    );
  });

  ["region", "accountId"].forEach((option) => {
    it(`should throw if "${option}" is missing for non-S3 services`, () => {
      expect(() => build({ ...nonS3BuilderArn, [option]: undefined as any })).toThrow(
        new Error("Input ARN object is invalid")
      );
    });
  });

  it("should not throw if region is missing for S3 service", () => {
    expect(() => build({ ...builderArn, region: undefined as any })).not.toThrow();
  });

  it("should not throw if accountId is missing for S3 service", () => {
    expect(() => build({ ...builderArn, accountId: undefined as any })).not.toThrow();
  });
});
