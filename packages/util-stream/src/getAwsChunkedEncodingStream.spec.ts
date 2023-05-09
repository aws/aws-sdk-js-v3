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

  const getMockReadableStream = () => {
    const readableStream = new Readable();
    mockStreamChunks.forEach((chunk) => {
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
    expect(mockBodyLengthChecker).toHaveBeenCalledTimes(mockStreamChunks.length);
    mockStreamChunks.forEach((chunk, index) => {
      expect(mockBodyLengthChecker).toHaveBeenNthCalledWith(index + 1, Buffer.from(chunk));
    });
    jest.clearAllMocks();
  });

  describe("skips checksum computation", () => {
    const validateStreamWithoutChecksum = (awsChunkedEncodingStream: Readable, done: Function) => {
      let buffer = "";
      awsChunkedEncodingStream.on("data", (data) => {
        buffer += data.toString();
      });
      awsChunkedEncodingStream.on("end", () => {
        expect(mockStreamHasher).not.toHaveBeenCalled();
        expect(mockBase64Encoder).not.toHaveBeenCalled();
        expect(buffer).toEqual(`5\r
Hello\r
5\r
World\r
0\r
`);
        done();
      });
    };

    it("if none of the required options are passed", (done) => {
      const readableStream = getMockReadableStream();
      const awsChunkedEncodingStream = getAwsChunkedEncodingStream(readableStream, {
        bodyLengthChecker: mockBodyLengthChecker,
      });
      validateStreamWithoutChecksum(awsChunkedEncodingStream, done);
    });

    ["base64Encoder", "checksumAlgorithmFn", "checksumLocationName", "streamHasher"].forEach((optionToRemove) => {
      it(`if option '${optionToRemove}' is not passed`, (done) => {
        const readableStream = getMockReadableStream();
        const awsChunkedEncodingStream = getAwsChunkedEncodingStream(readableStream, {
          ...mockOptions,
          [optionToRemove]: undefined,
        });
        validateStreamWithoutChecksum(awsChunkedEncodingStream, done);
      });
    });
  });

  it("computes checksum and adds it to the end event", (done) => {
    const readableStream = getMockReadableStream();
    const awsChunkedEncodingStream = getAwsChunkedEncodingStream(readableStream, mockOptions);

    let buffer = "";
    awsChunkedEncodingStream.on("data", (data) => {
      buffer += data.toString();
    });
    awsChunkedEncodingStream.on("end", () => {
      expect(mockStreamHasher).toHaveBeenCalledWith(mockChecksumAlgorithmFn, readableStream);
      expect(mockBase64Encoder).toHaveBeenCalledWith(mockRawChecksum);
      expect(buffer).toStrictEqual(`5\r
Hello\r
5\r
World\r
0\r
mockChecksumLocationName:mockChecksum\r
\r
`);
      done();
    });
  });
});
