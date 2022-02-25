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

  beforeEach(() => {
    mockStreamHasher.mockResolvedValue(mockRawChecksum);
    mockBase64Encoder.mockReturnValue(mockChecksum);
    mockBodyLengthChecker.mockReturnValue(mockBodyLength);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("adds bodyLength at the end of each chunk, and 0 at the end", (done) => {
    const readableStream = new Readable();
    mockStreamChunks.forEach((chunk) => {
      readableStream.push(chunk);
    });
    readableStream.push(null);

    const awsChunkedEncodingStream = getAwsChunkedEncodingStream(readableStream, {
      bodyLengthChecker: mockBodyLengthChecker,
    });

    let i = 0;
    awsChunkedEncodingStream.on("data", (data) => {
      if (i === mockStreamChunks.length) {
        expect(data.toString()).toStrictEqual(`0\r\n`);
        expect(mockBodyLengthChecker).toHaveBeenCalledTimes(mockStreamChunks.length);
        done();
      } else {
        expect(data.toString()).toStrictEqual(`${mockBodyLength}\r\n${mockStreamChunks[i].toString()}\r\n`);
      }
      i++;
    });
  });

  it("skips checksum computation if %s if not available", () => {});

  it("computes checksum and adds it to the end event", () => {});
});
