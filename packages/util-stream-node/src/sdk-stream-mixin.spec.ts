import { SdkStreamMixin } from "@aws-sdk/types";
import { fromArrayBuffer } from "@aws-sdk/util-buffer-from";
import { PassThrough, Readable, Writable } from "stream";
import util from "util";

import { sdkStreamMixin } from "./sdk-stream-mixin";

jest.mock("@aws-sdk/util-buffer-from");

describe(sdkStreamMixin.name, () => {
  const writeDataToStream = (stream: Writable, data: Array<ArrayBufferLike>): Promise<void> =>
    new Promise((resolve, reject) => {
      data.forEach((chunk) => {
        stream.write(chunk, (err) => {
          if (err) reject(err);
        });
      });
      stream.end(resolve);
    });
  const byteArrayFromBuffer = (buf: Buffer) => new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  let passThrough: PassThrough;
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

  beforeEach(() => {
    passThrough = new PassThrough();
  });

  it("should throw if unexpected stream implementation is supplied", () => {
    try {
      const payload = {};
      sdkStreamMixin(payload);
      fail("should throw when unexpected stream is supplied");
    } catch (error) {
      expect(error.message).toContain("Unexpected stream implementation");
    }
  });

  describe("transformToByteArray", () => {
    it("should transform binary stream to byte array", async () => {
      const mockData = [Buffer.from("foo"), Buffer.from("bar"), Buffer.from("buzz")];
      const expected = byteArrayFromBuffer(Buffer.from("foobarbuzz"));
      const sdkStream = sdkStreamMixin(passThrough);
      await writeDataToStream(passThrough, mockData);
      expect(await sdkStream.transformToByteArray()).toEqual(expected);
    });

    it("should fail any subsequent tranform calls", async () => {
      const sdkStream = sdkStreamMixin(passThrough);
      await writeDataToStream(passThrough, [Buffer.from("abc")]);
      expect(await sdkStream.transformToByteArray()).toEqual(byteArrayFromBuffer(Buffer.from("abc")));
      await expectAllTransformsToFail(sdkStream);
    });
  });

  describe("transformToString", () => {
    const toStringMock = jest.fn();
    beforeAll(() => {
      jest.resetAllMocks();
    });

    it("should transform the stream to string with utf-8 encoding by default", async () => {
      (fromArrayBuffer as jest.Mock).mockImplementation(
        jest.requireActual("@aws-sdk/util-buffer-from").fromArrayBuffer
      );
      const sdkStream = sdkStreamMixin(passThrough);
      await writeDataToStream(passThrough, [Buffer.from("foo")]);
      const transformed = await sdkStream.transformToString();
      expect(transformed).toEqual("foo");
    });

    it.each([undefined, "utf-8", "ascii", "base64", "latin1", "binary"])(
      "should transform the stream to string with %s encoding",
      async (encoding) => {
        (fromArrayBuffer as jest.Mock).mockReturnValue({ toString: toStringMock });
        const sdkStream = sdkStreamMixin(passThrough);
        await writeDataToStream(passThrough, [Buffer.from("foo")]);
        await sdkStream.transformToString(encoding);
        expect(toStringMock).toBeCalledWith(encoding);
      }
    );

    it.each(["ibm866", "iso-8859-2", "koi8-r", "macintosh", "windows-874", "gbk", "gb18030", "euc-jp"])(
      "should transform the stream to string with TextDecoder config %s",
      async (encoding) => {
        jest.spyOn(util, "TextDecoder").mockImplementation(
          () =>
            ({
              decode: jest.fn(),
            } as any)
        );
        (fromArrayBuffer as jest.Mock).mockReturnValue({ toString: toStringMock });
        const sdkStream = sdkStreamMixin(passThrough);
        await writeDataToStream(passThrough, [Buffer.from("foo")]);
        await sdkStream.transformToString(encoding as BufferEncoding);
        expect(util.TextDecoder).toBeCalledWith(encoding);
      }
    );

    it("should fail any subsequent tranform calls", async () => {
      const sdkStream = sdkStreamMixin(passThrough);
      await writeDataToStream(passThrough, [Buffer.from("foo")]);
      await sdkStream.transformToString();
      await expectAllTransformsToFail(sdkStream);
    });
  });

  describe("transformToWebStream", () => {
    it("should throw if any event listener is attached on the underlying stream", async () => {
      passThrough.on("data", console.log);
      const sdkStream = sdkStreamMixin(passThrough);
      try {
        sdkStream.transformToWebStream();
        fail(new Error("expect web stream transformation to fail"));
      } catch (error) {
        expect(error.message).toContain("The stream has been consumed by other callbacks");
      }
    });

    describe("when Readable.toWeb() is not supported", () => {
      // @ts-expect-error
      const originalToWebImpl = Readable.toWeb;
      beforeAll(() => {
        // @ts-expect-error
        Readable.toWeb = undefined;
      });
      afterAll(() => {
        // @ts-expect-error
        Readable.toWeb = originalToWebImpl;
      });

      it("should throw", async () => {
        const sdkStream = sdkStreamMixin(passThrough);
        try {
          sdkStream.transformToWebStream();
          fail(new Error("expect web stream transformation to fail"));
        } catch (error) {
          expect(error.message).toContain("Readable.toWeb() is not supported");
        }
      });
    });

    describe("when Readable.toWeb() is supported", () => {
      // @ts-expect-error
      const originalToWebImpl = Readable.toWeb;
      beforeAll(() => {
        // @ts-expect-error
        Readable.toWeb = jest.fn().mockReturnValue("A web stream");
      });

      afterAll(() => {
        // @ts-expect-error
        Readable.toWeb = originalToWebImpl;
      });

      it("should tranform Node stream to web stream", async () => {
        const sdkStream = sdkStreamMixin(passThrough);
        sdkStream.transformToWebStream();
        // @ts-expect-error
        expect(Readable.toWeb).toBeCalled();
      });

      it("should fail any subsequent tranform calls", async () => {
        const sdkStream = sdkStreamMixin(passThrough);
        await writeDataToStream(passThrough, [Buffer.from("foo")]);
        await sdkStream.transformToWebStream();
        await expectAllTransformsToFail(sdkStream);
      });
    });
  });
});
