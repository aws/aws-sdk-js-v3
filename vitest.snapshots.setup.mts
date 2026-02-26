import { customFields } from "@smithy/snapshot-testing";
import { beforeAll } from "vitest";

beforeAll(() => {
  Object.assign(customFields, {
    PredictEndpoint: "https://localhost",
    ChecksumAlgorithm: "CRC64NVME",
    AccountId: "123456789012",
    OutpostId: "OutpostId",
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/012345678901/MyQueue",
  });
});
