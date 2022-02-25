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
      let i = 0;
      awsChunkedEncodingStream.on("data", (data) => {
        if (i === mockStreamChunks.length) {
          expect(data.toString()).toStrictEqual(`0\r\n`);
          expect(mockStreamHasher).not.toHaveBeenCalled();
          expect(mockBase64Encoder).not.toHaveBeenCalled();
          done();
        } else {
          expect(data.toString()).toStrictEqual(`${mockBodyLength}\r\n${mockStreamChunks[i].toString()}\r\n`);
        }
        i++;
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
            expect(mockStreamHasher).toHaveBeenCalledWith(mockChecksumAlgorithmFn, readableStream);
            expect(mockBase64Encoder).toHaveBeenCalledWith(mockRawChecksum);
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
