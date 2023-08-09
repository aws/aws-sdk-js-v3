import { EndpointARN } from "@aws-sdk/types";

import { parseArn } from "./parseArn";

describe(parseArn.name, () => {
  const VALID_TEST_CASES: Array<[string, EndpointARN]> = [
    [
      "arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint",
      {
        partition: "aws",
        service: "s3",
        region: "us-west-2",
        accountId: "123456789012",
        resourceId: ["accesspoint", "myendpoint"],
      },
    ],
    [
      "arn:aws:s3:us-west-2:123456789012:accesspoint/myendpoint",
      {
        partition: "aws",
        service: "s3",
        region: "us-west-2",
        accountId: "123456789012",
        resourceId: ["accesspoint", "myendpoint"],
      },
    ],
    [
      "arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint",
      {
        partition: "aws",
        service: "s3",
        region: "us-east-1",
        accountId: "123456789012",
        resourceId: ["accesspoint", "myendpoint"],
      },
    ],
    [
      "arn:aws-cn:s3:cn-north-1:123456789012:accesspoint:myendpoint",
      {
        partition: "aws-cn",
        service: "s3",
        region: "cn-north-1",
        accountId: "123456789012",
        resourceId: ["accesspoint", "myendpoint"],
      },
    ],
    [
      "arn:aws:sns:us-west-2:123456789012:myTopic",
      {
        partition: "aws",
        service: "sns",
        region: "us-west-2",
        accountId: "123456789012",
        resourceId: ["myTopic"],
      },
    ],
    [
      "arn:aws:sns:::myTopic",
      {
        partition: "aws",
        service: "sns",
        region: "",
        accountId: "",
        resourceId: ["myTopic"],
      },
    ],
  ];

  it.each(VALID_TEST_CASES)("returns for valid arn %s", (input: string, outout: EndpointARN) => {
    expect(parseArn(input)).toEqual(outout);
  });

  it.each([
    "arn::s3:us-west-2:123456789012:accesspoint:myendpoint", // partition not present
    "arn:aws::us-west-2:123456789012:accesspoint:myendpoint", // service not present
    "arn:aws:s3:us-west-2:123456789012:", // resource ID not present
    "some:random:string:separated:by:colons",
    "arn:aws:too:short",
  ])("returns null for invalid arn %s", (input: string) => {
    expect(parseArn(input)).toBeNull();
  });
});
