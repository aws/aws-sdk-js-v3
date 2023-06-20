// @jest-environment jsdom
import { getAwsChunkedEncodingStream } from "./getAwsChunkedEncodingStream.browser";

describe(getAwsChunkedEncodingStream.name, () => {
  const mockChecksum = "mockChecksum";
  const mockRawChecksum = Buffer.from(mockChecksum);
  const mockStreamChunks = ["Hello", "World"];
  const mockBodyLength = 5;

  const mockBase64Encoder = () => mockChecksum;
  const mockBodyLengthChecker = () => mockBodyLength;
  const mockChecksumAlgorithmFn = () => {};
  const mockChecksumLocationName = "mockChecksumLocationName";
  const mockStreamHasher = () => mockRawChecksum;

  const mockOptions: any = {
    base64Encoder: mockBase64Encoder,
    bodyLengthChecker: mockBodyLengthChecker,
    checksumAlgorithmFn: mockChecksumAlgorithmFn,
    checksumLocationName: mockChecksumLocationName,
    streamHasher: mockStreamHasher,
  };

  const getMockReadableStream = () => {
    return new ReadableStream({
      start(controller) {
        for (const chunk of mockStreamChunks) {
          controller.enqueue(chunk);
        }
        controller.close();
      },
    });
  };

  const validateStream = async (readableStream: ReadableStream, expectedBuffer: string) => {
    let buffer = "";
    const reader = readableStream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      buffer += value;
    }
    reader.releaseLock();
    expect(buffer).toEqual(expectedBuffer);
  };

  describe("skips checksum computation", () => {
    const expectedBuffer = `5\r
Hello\r
5\r
World\r
0\r
`;

    it("if none of the required options are passed", async () => {
      const readableStream = getMockReadableStream();
      const awsChunkedBody = getAwsChunkedEncodingStream(readableStream, {
        bodyLengthChecker: mockBodyLengthChecker,
      });
      await validateStream(awsChunkedBody, expectedBuffer);
    });

    ["base64Encoder", "checksumAlgorithmFn", "checksumLocationName", "streamHasher"].forEach((optionToRemove) => {
      it(`if option '${optionToRemove} is not passed`, async () => {
        const readableStream = getMockReadableStream();
        const awsChunkedBody = getAwsChunkedEncodingStream(readableStream, {
          ...mockOptions,
          [optionToRemove]: undefined,
        });
        await validateStream(awsChunkedBody, expectedBuffer);
      });
    });
  });

  it("computes checksum and adds it to the end event", async () => {
    const readableStream = getMockReadableStream();
    const awsChunkedBody = getAwsChunkedEncodingStream(readableStream, mockOptions);
    const expectedBuffer = `5\r
Hello\r
5\r
World\r
0\r
${mockChecksumLocationName}:${mockChecksum}\r
\r
`;
    await validateStream(awsChunkedBody, expectedBuffer);
  });
});
