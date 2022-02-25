import { GetAwsChunkedEncodingStream, GetAwsChunkedEncodingStreamOptions } from "@aws-sdk/types";
import { Readable } from "stream";

import { getAwsChunkedEncodingStream } from "./getAwsChunkedEncodingStream";

describe(getAwsChunkedEncodingStream.name, () => {
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

  const getMockReadableStream = (chunks: Array<string>) => {
    const readableStream = new Readable();
    chunks.forEach((chunk) => {
      readableStream.push(chunk);
    });
    readableStream.push(null);
    return readableStream;
  };

  beforeEach(() => {
    mockStreamHasher.mockResolvedValue(mockRawChecksum);
    mockBase64Encoder.mockReturnValue(mockChecksum);
    mockBodyLengthChecker.mockReturnValue(mockBodyLength);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("skips checksum computation", () => {
    const validateStreamWithoutChecksum = (
      awsChunkedEncodingStream: Readable,
      chunks: Array<string>,
      done: Function
    ) => {
      let i = 0;
      awsChunkedEncodingStream.on("data", (data) => {
        if (i === chunks.length) {
          expect(data.toString()).toStrictEqual(`0\r\n`);
          expect(mockBodyLengthChecker).toHaveBeenCalledTimes(chunks.length);
          done();
        } else {
          expect(data.toString()).toStrictEqual(`${mockBodyLength}\r\n${chunks[i].toString()}\r\n`);
        }
        i++;
      });
    };

    it("if none of the required options are passed", (done) => {
      const readableStream = getMockReadableStream(mockStreamChunks);
      const awsChunkedEncodingStream = getAwsChunkedEncodingStream(readableStream, {
        bodyLengthChecker: mockBodyLengthChecker,
      });
      validateStreamWithoutChecksum(awsChunkedEncodingStream, mockStreamChunks, done);
    });

    ["base64Encoder", "checksumAlgorithmFn", "checksumLocationName", "streamHasher"].forEach((optionToRemove) => {
      it(`if option '${optionToRemove}' is not passed`, (done) => {
        const readableStream = getMockReadableStream(mockStreamChunks);
        const awsChunkedEncodingStream = getAwsChunkedEncodingStream(readableStream, {
          ...mockOptions,
          [optionToRemove]: undefined,
        });
        validateStreamWithoutChecksum(awsChunkedEncodingStream, mockStreamChunks, done);
      });
    });
  });

  it("computes checksum and adds it to the end event", (done) => {
    const readableStream = getMockReadableStream(mockStreamChunks);
    const awsChunkedEncodingStream = getAwsChunkedEncodingStream(readableStream, mockOptions);

    let i = 0;
    awsChunkedEncodingStream.on("data", (data) => {
      if (i >= mockStreamChunks.length) {
        switch (i) {
          case mockStreamChunks.length:
            expect(data.toString()).toStrictEqual(`0\r\n`);
            break;
          case mockStreamChunks.length + 1:
            expect(data.toString()).toStrictEqual(`${mockChecksumLocationName}:${mockChecksum}\r\n`);
            break;
          case mockStreamChunks.length + 2:
            expect(data.toString()).toStrictEqual(`\r\n`);
            done();
            break;
          default:
            throw Error("Code shouldn't reach here");
        }
      } else {
        expect(data.toString()).toStrictEqual(`${mockBodyLength}\r\n${mockStreamChunks[i].toString()}\r\n`);
      }
      i++;
    });
  });
});
