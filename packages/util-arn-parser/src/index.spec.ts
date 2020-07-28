import { build, parse, validate } from "./index";

describe("validate", () => {
  it("should validate whether input is a qualified resource ARN", () => {
    expect(validate("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint")).toBe(true);
    expect(validate("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint")).toBe(true);
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
  });
});

describe("builder", () => {
  it("should build valid ARN object to string", () => {
    expect(
      build({
        service: "s3",
        region: "us-east-1",
        accountId: "123456789012",
        resource: "accesspoint:myendpoint",
      })
    ).toBe("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint");
  });

  it("should throw if required ARN component is missing", () => {
    expect.assertions(1);
    try {
      build({
        service: "s3",
        region: "us-east-1",
        resource: "accesspoint:myendpoint",
      } as any);
    } catch (e) {
      expect(e.message).toBe("Input ARN object is invalid");
    }
  });
});
