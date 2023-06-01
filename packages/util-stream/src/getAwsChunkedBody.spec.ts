import { Readable } from "stream";

import { asyncIterableToReadable } from "./asyncIterableToReadable";
import { getAwsChunkedBody } from "./getAwsChunkedBody";
import { readableToAsyncIterable } from "./readableToAsyncIterable";

describe(getAwsChunkedBody.name, () => {
  const mockBase64Encoder = jest.fn();
  const mockBodyLengthChecker = jest.fn();
  const mockChecksumAlgorithmFn = jest.fn();
  const mockChecksumLocationName = "mockChecksumLocationName";
  const mockStreamHasher = jest.fn();

  const mockOptions = {
    base64Encoder: mockBase64Encoder,
    bodyLengthChecker: mockBodyLengthChecker,
    checksumAlgorithmFn: mockChecksumAlgorithmFn,
    checksumLocationName: mockChecksumLocationName,
    streamHasher: mockStreamHasher,
  };

  const mockChecksum = "mockChecksum";
  const mockRawChecksum = Buffer.from(mockChecksum);
  const mockStreamChunks = ["Hello", "World"];
  const mockBodyLength = 5;

  const getMockReadable = () => {
    const readable = new Readable();
    mockStreamChunks.forEach((chunk) => {
      readable.push(chunk);
    });
    readable.push(null);
    return readable;
  };

  beforeEach(() => {
    mockStreamHasher.mockResolvedValue(mockRawChecksum);
    mockBase64Encoder.mockReturnValue(mockChecksum);
    mockBodyLengthChecker.mockReturnValue(mockBodyLength);
  });

  afterEach(() => {
    expect(mockBodyLengthChecker).toHaveBeenCalledTimes(mockStreamChunks.length);
    mockStreamChunks.forEach((chunk, index) => {
      expect(mockBodyLengthChecker).toHaveBeenNthCalledWith(index + 1, Buffer.from(chunk));
    });
    jest.clearAllMocks();
  });

  describe("skips checksum computation", () => {
    const validateStreamWithoutChecksum = (readable: Readable, done: Function) => {
      let buffer = "";
      readable.on("data", (data) => {
        buffer += data.toString();
      });
      readable.on("end", () => {
        expect(mockStreamHasher).not.toHaveBeenCalled();
        expect(mockBase64Encoder).not.toHaveBeenCalled();
        expect(buffer).toEqual(`5\r\nHello\r\n5\r\nWorld\r\n0\r\n`);
        done();
      });
    };

    it("if none of the required options are passed", (done) => {
      const readable = getMockReadable();
      const awsChunkedBody = asyncIterableToReadable(
        getAwsChunkedBody(readableToAsyncIterable(readable), {
          bodyLengthChecker: mockBodyLengthChecker,
        })
      );
      validateStreamWithoutChecksum(awsChunkedBody, done);
    });

    ["base64Encoder", "checksumAlgorithmFn", "checksumLocationName", "streamHasher"].forEach((optionToRemove) => {
      it(`if option '${optionToRemove}' is not passed`, (done) => {
        const readable = getMockReadable();
        const awsChunkedBody = asyncIterableToReadable(
          getAwsChunkedBody(readableToAsyncIterable(readable), {
            ...mockOptions,
            [optionToRemove]: undefined,
          })
        );
        validateStreamWithoutChecksum(awsChunkedBody, done);
      });
    });
  });

  it("computes checksum and adds it to the end event", (done) => {
    const readable = getMockReadable();
    const asyncIterable = readableToAsyncIterable(readable);
    const awsChunkedBody = asyncIterableToReadable(getAwsChunkedBody(asyncIterable, mockOptions));

    let buffer = "";
    awsChunkedBody.on("data", (data) => {
      buffer += data.toString();
    });
    awsChunkedBody.on("end", () => {
      expect(mockStreamHasher).toHaveBeenCalledWith(mockChecksumAlgorithmFn, asyncIterable);
      expect(mockBase64Encoder).toHaveBeenCalledWith(mockRawChecksum);
      expect(buffer).toStrictEqual(
        `5\r\nHello\r\n5\r\nWorld\r\n0\r\n${mockChecksumLocationName}:${mockChecksum}\r\n\r\n`
      );
      done();
    });
  });
});
