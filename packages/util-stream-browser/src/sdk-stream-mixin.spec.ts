// @jest-environment jsdom
import { streamCollector } from "@aws-sdk/fetch-http-handler";
import { SdkStreamMixin } from "@aws-sdk/types";
import { toBase64 } from "@aws-sdk/util-base64";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { toUtf8 } from "@aws-sdk/util-utf8";

import { sdkStreamMixin } from "./sdk-stream-mixin";

jest.mock("@aws-sdk/fetch-http-handler");
jest.mock("@aws-sdk/util-base64");
jest.mock("@aws-sdk/util-hex-encoding");
jest.mock("@aws-sdk/util-utf8");

const mockStreamCollectorReturn = Uint8Array.from([117, 112, 113]);
(streamCollector as jest.Mock).mockReturnValue(mockStreamCollectorReturn);

describe(sdkStreamMixin.name, () => {
  const expectAllTransformsToFail = async (sdkStream: SdkStreamMixin) => {
    const transformMethods: Array<keyof SdkStreamMixin> = [
      "transformToByteArray",
      "transformToString",
      "transformToWebStream",
    ];
    for (const method of transformMethods) {
      try {
        await sdkStream[method]();
        fail(new Error("expect subsequent tranform to fail"));
      } catch (error) {
        expect(error.message).toContain("The stream has already been transformed");
      }
    }
  };

  let originalReadableStreamCtr = global.ReadableStream;
  const mockReadableStream = jest.fn();
  class ReadableStream {
    constructor() {
      mockReadableStream();
    }
  }

  let payloadStream: ReadableStream;

  beforeAll(() => {
    global.ReadableStream = ReadableStream as any;
  });

  beforeEach(() => {
    originalReadableStreamCtr = global.ReadableStream;
    jest.clearAllMocks();
    payloadStream = new ReadableStream();
  });

  afterEach(() => {
    global.ReadableStream = originalReadableStreamCtr;
  });

  it("should throw if input stream is not a Blob or Web Stream instance", () => {
    const originalBlobCtr = global.Blob;
    global.Blob = undefined;
    global.ReadableStream = undefined;
    try {
      sdkStreamMixin({});
      fail("expect unexpected stream to fail");
    } catch (e) {
      expect(e.message).toContain("nexpected stream implementation");
      global.Blob = originalBlobCtr;
    }
  });

  describe("transformToByteArray", () => {
    it("should transform binary stream to byte array", async () => {
      const sdkStream = sdkStreamMixin(payloadStream);
      const byteArray = await sdkStream.transformToByteArray();
      expect(streamCollector as jest.Mock).toBeCalledWith(payloadStream);
      expect(byteArray).toEqual(mockStreamCollectorReturn);
    });

    it("should fail any subsequent tranform calls", async () => {
      const sdkStream = sdkStreamMixin(payloadStream);
      await sdkStream.transformToByteArray();
      await expectAllTransformsToFail(sdkStream);
    });
  });

  describe("transformToString", () => {
    let originalTextDecoder = global.TextDecoder;
    const mockDecode = jest.fn();
    global.TextDecoder = jest.fn().mockImplementation(function () {
      return { decode: mockDecode };
    });

    beforeEach(() => {
      originalTextDecoder = global.TextDecoder;
      jest.clearAllMocks();
    });

    afterEach(() => {
      global.TextDecoder = originalTextDecoder;
    });

    it.each([
      [undefined, toUtf8],
      ["utf8", toUtf8],
      ["utf-8", toUtf8],
      ["base64", toBase64],
      ["hex", toHex],
    ])("should transform to string with %s encoding", async (encoding, encodingFn) => {
      const mockEncodedStringValue = `a string with ${encoding} encoding`;
      (encodingFn as jest.Mock).mockReturnValueOnce(mockEncodedStringValue);
      const sdkStream = sdkStreamMixin(payloadStream);
      const str = await sdkStream.transformToString(encoding);
      expect(streamCollector).toBeCalled();
      expect(encodingFn).toBeCalledWith(mockStreamCollectorReturn);
      expect(str).toEqual(mockEncodedStringValue);
    });

    it("should use TexDecoder to handle other encodings", async () => {
      const utfLabel = "windows-1251";
      mockDecode.mockReturnValue(`a string with ${utfLabel} encoding`);
      const sdkStream = sdkStreamMixin(payloadStream);
      const str = await sdkStream.transformToString(utfLabel);
      expect(global.TextDecoder).toBeCalledWith(utfLabel);
      expect(str).toEqual(`a string with ${utfLabel} encoding`);
    });

    it("should throw if TextDecoder is not available", async () => {
      global.TextDecoder = null;
      const utfLabel = "windows-1251";
      const sdkStream = sdkStreamMixin(payloadStream);
      try {
        await sdkStream.transformToString(utfLabel);
        fail("expect transformToString to throw when TextDecoder is not available");
      } catch (error) {
        expect(error.message).toContain("TextDecoder is not available");
      }
    });

    it("should fail any subsequent tranform calls", async () => {
      const sdkStream = sdkStreamMixin(payloadStream);
      await sdkStream.transformToString();
      await expectAllTransformsToFail(sdkStream);
    });
  });

  describe("transformToWebStream with ReadableStream payload", () => {
    it("should return the payload if it is Web Stream instance", () => {
      const payloadStream = new ReadableStream();
      const sdkStream = sdkStreamMixin(payloadStream as any);
      const transformed = sdkStream.transformToWebStream();
      expect(transformed).toBe(payloadStream);
    });

    it("should fail any subsequent tranform calls", async () => {
      const payloadStream = new ReadableStream();
      const sdkStream = sdkStreamMixin(payloadStream as any);
      sdkStream.transformToWebStream();
      await expectAllTransformsToFail(sdkStream);
    });
  });

  describe("transformToWebStream with Blob payload", () => {
    let originalBlobCtr = global.Blob;
    const mockBlob = jest.fn();
    const mockBlobStream = jest.fn();
    class Blob {
      constructor() {
        mockBlob();
      }

      stream() {
        return mockBlobStream();
      }
    }
    global.Blob = Blob as any;

    beforeEach(() => {
      global.ReadableStream = undefined;
      originalBlobCtr = global.Blob;
      jest.clearAllMocks();
    });

    afterEach(() => {
      global.Blob = originalBlobCtr;
    });

    it("should transform blob to web stream with Blob.stream()", () => {
      mockBlobStream.mockReturnValue("transformed");
      const payloadStream = new Blob();
      const sdkStream = sdkStreamMixin(payloadStream as any);
      const transformed = sdkStream.transformToWebStream();
      expect(transformed).toBe("transformed");
      expect(mockBlobStream).toBeCalled();
    });

    it("should fail if Blob.stream() is not available", async () => {
      class Blob {
        constructor() {
          mockBlob();
        }
      }

      global.Blob = Blob as any;
      const payloadStream = new Blob();
      const sdkStream = sdkStreamMixin(payloadStream as any);
      try {
        sdkStream.transformToWebStream();
        fail("expect to fail");
      } catch (e) {
        expect(e.message).toContain("Please make sure the Blob.stream() is polyfilled");
      }
    });

    it("should fail any subsequent tranform calls", async () => {
      const payloadStream = new Blob();
      const sdkStream = sdkStreamMixin(payloadStream as any);
      sdkStream.transformToWebStream();
      await expectAllTransformsToFail(sdkStream);
    });
  });
});
