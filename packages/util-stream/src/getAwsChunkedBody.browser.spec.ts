// @jest-environment jsdom
import { asyncIterableToReadable } from "./asyncIterableToReadable.browser";
import { getAwsChunkedBody } from "./getAwsChunkedBody";
import { readableToAsyncIterable } from "./readableToAsyncIterable.browser";

describe(getAwsChunkedBody.name, () => {
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
    const expectedBuffer = `5\r\nHello\r\n5\r\nWorld\r\n0\r\n`;

    it("if none of the required options are passed", async () => {
      const readableStream = getMockReadableStream();
      const awsChunkedBody = asyncIterableToReadable(
        getAwsChunkedBody(readableToAsyncIterable(readableStream), {
          bodyLengthChecker: mockBodyLengthChecker,
        })
      );
      await validateStream(awsChunkedBody, expectedBuffer);
    });

    ["base64Encoder", "checksumAlgorithmFn", "checksumLocationName", "streamHasher"].forEach((optionToRemove) => {
      it(`if option '${optionToRemove} is not passed`, async () => {
        const readableStream = getMockReadableStream();
        const awsChunkedBody = asyncIterableToReadable(
          getAwsChunkedBody(readableToAsyncIterable(readableStream), {
            ...mockOptions,
            [optionToRemove]: undefined,
          })
        );
        await validateStream(awsChunkedBody, expectedBuffer);
      });
    });
  });

  it("computes checksum and adds it to the end event", async () => {
    const readableStream = getMockReadableStream();
    const awsChunkedBody = asyncIterableToReadable(
      getAwsChunkedBody(readableToAsyncIterable(readableStream), mockOptions)
    );
    const expectedBuffer = `5\r\nHello\r\n5\r\nWorld\r\n0\r\n${mockChecksumLocationName}:${mockChecksum}\r\n\r\n`;
    await validateStream(awsChunkedBody, expectedBuffer);
  });
});
