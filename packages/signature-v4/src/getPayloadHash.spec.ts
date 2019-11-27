import { getPayloadHash } from "./getPayloadHash";
import { SHA256_HEADER, UNSIGNED_PAYLOAD } from "./constants";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { Sha256 } from "@aws-crypto/sha256-js";

describe("getPayloadHash", () => {
  const minimalRequest = new HttpRequest({
    method: "POST",
    protocol: "https:",
    path: "/",
    headers: {},
    hostname: "foo.us-east-1.amazonaws.com"
  });

  it("should return the SHA-256 hash of an empty string if a request has no payload (body)", async () => {
    await expect(getPayloadHash(minimalRequest, Sha256)).resolves.toBe(
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    );
  });

  it(`should return the value in the '${SHA256_HEADER}' header (if present)`, async () => {
    await expect(
      getPayloadHash(
        new HttpRequest({
          ...minimalRequest,
          headers: {
            [SHA256_HEADER]: "foo"
          }
        }),
        jest.fn(() => {
          throw new Error("I should not have been invoked!");
        })
      )
    ).resolves.toBe("foo");
  });

  it("should return the hex-encoded hash of a string body", async () => {
    await expect(
      getPayloadHash(
        new HttpRequest({
          ...minimalRequest,
          body: "foo"
        }),
        Sha256
      )
    ).resolves.toBe(
      "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"
    );
  });

  it("should return the hex-encoded hash of a ArrayBufferView body", async () => {
    await expect(
      getPayloadHash(
        new HttpRequest({
          ...minimalRequest,
          body: new Uint8Array([0xde, 0xad, 0xbe, 0xef])
        }),
        Sha256
      )
    ).resolves.toBe(
      "5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953"
    );
  });

  it("should return the hex-encoded hash of a ArrayBuffer body", async () => {
    await expect(
      getPayloadHash(
        new HttpRequest({
          ...minimalRequest,
          body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]).buffer
        }),
        Sha256
      )
    ).resolves.toBe(
      "5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953"
    );
  });

  it(`should return ${UNSIGNED_PAYLOAD} if the request has a streaming body and no stream collector is provided`, async () => {
    /**
     * An environment specific stream that the signer knows nothing about.
     */
    class ExoticStream {}

    await expect(
      getPayloadHash(
        new HttpRequest({
          ...minimalRequest,
          body: new ExoticStream() as any
        }),
        Sha256
      )
    ).resolves.toBe(UNSIGNED_PAYLOAD);
  });
});
