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

  it("should build valid ARN object to string", () => {
    expect(build(builderArn)).toBe("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint");
  });

  ["service", "region", "accountId", "resource"].forEach((option) => {
    it(`should throw if "${option}" is missing`, () => {
      expect(() => build({ ...builderArn, [option]: undefined })).toThrow(new Error("Input ARN object is invalid"));
    });
  });
});
