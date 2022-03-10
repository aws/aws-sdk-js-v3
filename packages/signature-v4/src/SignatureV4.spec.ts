import { Sha256 } from "@aws-crypto/sha256-js";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { Credentials } from "@aws-sdk/types";

import {
  ALGORITHM_IDENTIFIER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_HEADER,
  AMZ_DATE_QUERY_PARAM,
  AUTH_HEADER,
  CREDENTIAL_QUERY_PARAM,
  EXPIRES_QUERY_PARAM,
  HOST_HEADER,
  SIGNATURE_QUERY_PARAM,
  SIGNED_HEADERS_QUERY_PARAM,
  TOKEN_HEADER,
  TOKEN_QUERY_PARAM,
  UNSIGNED_PAYLOAD,
} from "./constants";
import { SignatureV4 } from "./SignatureV4";
import { iso8601 } from "./utilDate";

const signerInit = {
  service: "foo",
  region: "us-bar-1",
  sha256: Sha256,
  credentials: {
    accessKeyId: "foo",
    secretAccessKey: "bar",
  },
};

const signer = new SignatureV4(signerInit);

const minimalRequest = new HttpRequest({
  method: "POST",
  protocol: "https:",
  path: "/",
  headers: {
    host: "foo.us-bar-1.amazonaws.com",
  },
  hostname: "foo.us-bar-1.amazonaws.com",
});

const credentials: Credentials = {
  accessKeyId: "foo",
  secretAccessKey: "bar",
};

describe("SignatureV4", () => {
  describe("#presignRequest", () => {
    const presigningOptions = {
      expiresIn: 1800,
      signingDate: new Date("2000-01-01T00:00:00.000Z"),
    };

    it("should sign requests without bodies", async () => {
      const { query } = await signer.presign(minimalRequest, presigningOptions);
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]: "46f0091f3e84cbd4552a184f43830a4f8b42fd18ceaefcdc2c225be1efd9e00e",
      });
    });

    it("should sign request without hoisting some headers", async () => {
      const { query, headers } = await signer.presign(
        {
          ...minimalRequest,
          headers: {
            ...minimalRequest.headers,
            "x-amz-not-hoisted": "test",
          },
        },
        { ...presigningOptions, unhoistableHeaders: new Set(["x-amz-not-hoisted"]) }
      );
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
        [SIGNED_HEADERS_QUERY_PARAM]: `${HOST_HEADER};x-amz-not-hoisted`,
        [SIGNATURE_QUERY_PARAM]: "3c3ef586754b111e9528009710b797a07457d6a671058ba89041a06bab45f585",
      });
      expect(headers).toMatchObject({
        "x-amz-not-hoisted": "test",
      });
    });

    it("should support overriding region and service in the signer instance", async () => {
      const signer = new SignatureV4({
        ...signerInit,
        service: "qux",
        region: "us-foo-1",
      });
      const { query } = await signer.presign(minimalRequest, {
        ...presigningOptions,
        signingService: signerInit.service,
        signingRegion: signerInit.region,
      });
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]: "46f0091f3e84cbd4552a184f43830a4f8b42fd18ceaefcdc2c225be1efd9e00e",
      });
    });

    it("should default expires to 3600 seconds if not explicitly passed", async () => {
      const { query } = await signer.presign(minimalRequest);
      expect(query).toMatchObject({
        [EXPIRES_QUERY_PARAM]: "3600",
      });
    });

    it("should sign requests with string bodies", async () => {
      const { query } = await signer.presign(
        new HttpRequest({
          ...minimalRequest,
          body: "It was the best of times, it was the worst of times",
        }),
        presigningOptions
      );
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]: "3a7fc2cef9cab09384d0ef7a69bab0d942996846422bd041da5e52cae82612c3",
      });
    });

    it("should sign requests with binary bodies", async () => {
      const { query } = await signer.presign(
        new HttpRequest({
          ...minimalRequest,
          body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
        }),
        presigningOptions
      );
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]: "bd1427cfdc9a3b0a55609b0114d1dab4dfebca81a9496d6c47dedf65a3ec3bcb",
      });
    });

    it("should sign requests with streaming (unsigned) bodies", async () => {
      /**
       * An environment specific stream that the signer knows nothing about.
       */
      class ExoticStream {}

      const { query } = await signer.presign(
        new HttpRequest({
          ...minimalRequest,
          body: new ExoticStream() as any,
        }),
        presigningOptions
      );
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]: "457d44313f7b225c3523ddfc0ca161dfd010269b98c837a7a6f1b26ceb87ae4c",
      });
    });

    it(`should set and sign the ${TOKEN_QUERY_PARAM} query parameter if the credentials have a session token`, async () => {
      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials: {
          ...credentials,
          sessionToken: "baz",
        },
      });
      const { query } = await signer.presign(minimalRequest, presigningOptions);

      expect(query).toEqual({
        [TOKEN_QUERY_PARAM]: "baz",
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]: "1b57912615b8e7ae78790ba713193d34baa793d6be2a1b18370dd27dce2d05a7",
      });
    });

    it("should use the precalculated payload checksum if provided", async () => {
      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials,
      });

      const { query } = await signer.presign(
        new HttpRequest({
          ...minimalRequest,
          body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
          headers: {
            ...minimalRequest.headers,
            "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD",
          },
        }),
        presigningOptions
      );

      expect(query).toEqual({
        "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD",
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: presigningOptions.expiresIn.toString(),
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]: "04ccc7891757c0ca3811d0e018e4655919ef11fa7b956fe9b782f273cec2374f",
      });
    });

    it("should allow specifying custom unsignable headers", async () => {
      const headers = {
        host: "foo.us-bar-1.amazonaws.com",
        foo: "bar",
        "user-agent": "baz",
      };
      const { headers: headersAsSigned, query } = await signer.presign(
        new HttpRequest({
          ...minimalRequest,
          headers,
        }),
        {
          ...presigningOptions,
          unsignableHeaders: new Set(["foo"]),
        }
      );
      expect((query as any)[SIGNED_HEADERS_QUERY_PARAM]).toBe("host");
      expect(headersAsSigned).toEqual(headers);
    });

    it("should return a rejected promise if the expiresIn is more than one week in the future", async () => {
      await expect(
        signer.presign(minimalRequest, {
          ...presigningOptions,
          expiresIn: 7 * 24 * 60 * 60 + 1,
        })
      ).rejects.toMatch(/less than one week in the future/);
    });

    it("should support presigning with asynchronously resolved credentials", async () => {
      const credsProvider = () =>
        Promise.resolve({
          accessKeyId: "foo",
          secretAccessKey: "bar",
        });

      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials: credsProvider,
      });

      const { query } = await signer.presign(minimalRequest, presigningOptions);

      expect(query).toMatchObject({
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
      });
    });

    it("should support presigning with an asynchronously resolved region", async () => {
      const regionProvider = () => Promise.resolve("us-bar-1");

      const signer = new SignatureV4({
        service: "foo",
        region: regionProvider,
        sha256: Sha256,
        credentials: {
          accessKeyId: "foo",
          secretAccessKey: "bar",
        },
      });

      const { query } = await signer.presign(minimalRequest, presigningOptions);

      expect(query).toMatchObject({
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
      });
    });

    describe("URI encoding paths", () => {
      const minimalRequest = new HttpRequest({
        method: "POST",
        protocol: "https:",
        path: "/foo%3Dbar",
        headers: {
          host: "foo.us-bar-1.amazonaws.com",
        },
        hostname: "foo.us-bar-1.amazonaws.com",
      });

      it("should URI-encode the path by default", async () => {
        const { query = {} } = await signer.presign(minimalRequest, presigningOptions);
        expect(query[SIGNATURE_QUERY_PARAM]).toBe("6267d8b6f44d165d2b9f4d2c2b45fd6971de0962820243669bf685818c9c7849");
      });

      it("should normalize relative path by default", async () => {
        const { query = {} } = await signer.presign(
          { ...minimalRequest, path: "/abc/../foo%3Dbar" },
          presigningOptions
        );
        expect(query[SIGNATURE_QUERY_PARAM]).toBe("6267d8b6f44d165d2b9f4d2c2b45fd6971de0962820243669bf685818c9c7849");
      });

      it("should normalize path with consecutive slashes by default", async () => {
        const { query = {} } = await signer.presign({ ...minimalRequest, path: "//foo%3Dbar" }, presigningOptions);
        expect(query[SIGNATURE_QUERY_PARAM]).toBe("6267d8b6f44d165d2b9f4d2c2b45fd6971de0962820243669bf685818c9c7849");
      });

      it("should not URI-encode the path if URI path escaping was disabled on the signer", async () => {
        // Setting `uriEscapePath` to `false` creates an
        // S3-compatible signer. The expected signature included
        // below was calculated using the
        // `Aws\Signature\S3SignatureV4` class from the AWS SDK for
        // PHP
        const signer = new SignatureV4({
          service: "foo",
          region: "us-bar-1",
          sha256: Sha256,
          credentials: {
            accessKeyId: "foo",
            secretAccessKey: "bar",
          },
          uriEscapePath: false,
        });

        const { query = {} } = await signer.presign(
          new HttpRequest({
            ...minimalRequest,
            path: "/foo/bar/baz",
            headers: {
              ...minimalRequest.headers,
              "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD",
            },
          }),
          presigningOptions
        );
        expect(query[SIGNATURE_QUERY_PARAM]).toBe("d1a68eff5d8d5be581f20c7793a67a6cd2e561a5b818055b21ad064139eb83b1");
      });
    });
  });

  describe("#sign (request)", () => {
    it("should sign requests without bodies", async () => {
      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z"),
      });
      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=1e3b24fcfd7655c0c245d99ba7b6b5ca6174eab903ebfbda09ce457af062ad30"
      );
    });

    it("should support overriding region and service in the signer instance", async () => {
      const signer = new SignatureV4({
        ...signerInit,
        service: "qux",
        region: "us-foo-1",
      });
      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z"),
        signingService: signerInit.service,
        signingRegion: signerInit.region,
      });
      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=1e3b24fcfd7655c0c245d99ba7b6b5ca6174eab903ebfbda09ce457af062ad30"
      );
    });

    it("should sign requests without host header", async () => {
      const request = minimalRequest.clone();
      delete request.headers[HOST_HEADER];
      const { headers } = await signer.sign(request, {
        signingDate: new Date("2000-01-01T00:00:00.000Z"),
      });
      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=x-amz-content-sha256;x-amz-date, Signature=36cfca5cdb2c8d094f100663925d408a9608908ffc10b83133e5b25829ef7f5f"
      );
    });

    it("should sign requests with string bodies", async () => {
      const { headers } = await signer.sign(
        new HttpRequest({
          ...minimalRequest,
          body: "It was the best of times, it was the worst of times",
        }),
        { signingDate: new Date("2000-01-01T00:00:00.000Z") }
      );
      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=cf22a0befff359388f136b158f0b1b43db7b18d2ca65ce4112bc88a16815c4b6"
      );
    });

    it("should sign requests with binary bodies", async () => {
      const { headers } = await signer.sign(
        new HttpRequest({
          ...minimalRequest,
          body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
        }),
        { signingDate: new Date("2000-01-01T00:00:00.000Z") }
      );
      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=89f092f52faedb8a6be1890b2a511b88e7998389d62bd7d72915e2f4ee271a64"
      );
    });

    it("should sign requests with streaming (unsigned) bodies", async () => {
      /**
       * An environment specific stream that the signer knows nothing about.
       */
      class ExoticStream {}
      const { headers } = await signer.sign(
        new HttpRequest({
          ...minimalRequest,
          body: new ExoticStream() as any,
          headers: {
            ...minimalRequest.headers,
            "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD",
          },
        }),
        { signingDate: new Date("2000-01-01T00:00:00.000Z") }
      );

      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=2d17bf1aa1624819549626389790503937599b27a998286e0e190b897b1467dd"
      );
      expect(headers["X-Amz-Content-Sha256"]).toBe(UNSIGNED_PAYLOAD);
    });

    it("should sign requests with unsigned bodies when so directed", async () => {
      const { headers } = await signer.sign(
        new HttpRequest({
          ...minimalRequest,
          body: "It was the best of times, it was the worst of times",
          headers: {
            ...minimalRequest.headers,
            "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD",
          },
        }),
        { signingDate: new Date("2000-01-01T00:00:00.000Z") }
      );

      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=2d17bf1aa1624819549626389790503937599b27a998286e0e190b897b1467dd"
      );
      expect(headers["X-Amz-Content-Sha256"]).toBe(UNSIGNED_PAYLOAD);
    });

    it(`should set the ${AMZ_DATE_HEADER}`, async () => {
      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z"),
      });
      expect(headers[AMZ_DATE_HEADER]).toBe("20000101T000000Z");
    });

    it(`should set and sign the ${TOKEN_HEADER} header if the credentials have a session token`, async () => {
      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials: {
          ...credentials,
          sessionToken: "baz",
        },
      });
      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z"),
      });
      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-security-token, Signature=4fd09a8cf3b28a62a9c6c424f03ababcd703528578bc6ec9184fc585f18c3fbb"
      );
    });

    it("should allow specifying custom unsignable headers", async () => {
      const { headers } = await signer.sign(
        new HttpRequest({
          ...minimalRequest,
          headers: {
            host: "foo.us-bar-1.amazonaws.com",
            foo: "bar",
            "user-agent": "baz",
          },
        }),
        {
          signingDate: new Date("2000-01-01T00:00:00.000Z"),
          unsignableHeaders: new Set(["foo"]),
        }
      );
      expect(headers[AUTH_HEADER]).toMatch(
        /^AWS4-HMAC-SHA256 Credential=foo\/20000101\/us-bar-1\/foo\/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=/
      );
    });

    it("should allow specifying custom signable headers to override custom and always unsignable ones", async () => {
      const { headers } = await signer.sign(
        {
          ...minimalRequest,
          headers: {
            host: "foo.us-bar-1.amazonaws.com",
            foo: "bar",
            "user-agent": "baz",
          },
        },
        {
          signingDate: new Date("2000-01-01T00:00:00.000Z"),
          unsignableHeaders: new Set(["foo"]),
          signableHeaders: new Set(["foo", "user-agent"]),
        }
      );
      expect(headers[AUTH_HEADER]).toMatch(
        /^AWS4-HMAC-SHA256 Credential=foo\/20000101\/us-bar-1\/foo\/aws4_request, SignedHeaders=foo;host;user-agent;x-amz-content-sha256;x-amz-date, Signature=/
      );
    });

    it("should support signing with asynchronously resolved credentials", async () => {
      const credsProvider = () =>
        Promise.resolve({
          accessKeyId: "foo",
          secretAccessKey: "bar",
        });

      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials: credsProvider,
      });

      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z"),
      });

      expect(headers[AUTH_HEADER]).toMatch(/^AWS4-HMAC-SHA256 Credential=foo\/20000101\/us-bar-1\/foo\/aws4_request/);
    });

    it("should support presigning with an asynchronously resolved region", async () => {
      const regionProvider = () => Promise.resolve("us-bar-1");

      const signer = new SignatureV4({
        service: "foo",
        region: regionProvider,
        sha256: Sha256,
        credentials: {
          accessKeyId: "foo",
          secretAccessKey: "bar",
        },
      });

      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z"),
      });

      expect(headers[AUTH_HEADER]).toMatch(/^AWS4-HMAC-SHA256 Credential=foo\/20000101\/us-bar-1\/foo\/aws4_request/);
    });

    describe("URI encoding paths", () => {
      const minimalRequest = new HttpRequest({
        method: "POST",
        protocol: "https:",
        path: "/foo%3Dbar",
        headers: {
          host: "foo.us-bar-1.amazonaws.com",
        },
        hostname: "foo.us-bar-1.amazonaws.com",
      });

      const signingOptions = {
        signingDate: new Date("2000-01-01T00:00:00.000Z"),
      };

      it("should URI-encode the path by default", async () => {
        const { headers } = await signer.sign(minimalRequest, signingOptions);
        expect(headers[AUTH_HEADER]).toBe(
          "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=fb4948cab44a9c47ce3b1a2489d01ec939fea9e79eccdb4593c11a94f207e075"
        );
      });

      it("should normalize relative path by default", async () => {
        const { headers } = await signer.sign({ ...minimalRequest, path: "/abc/../foo%3Dbar" }, signingOptions);
        expect(headers[AUTH_HEADER]).toEqual(
          expect.stringContaining("Signature=fb4948cab44a9c47ce3b1a2489d01ec939fea9e79eccdb4593c11a94f207e075")
        );
      });

      it("should normalize path with consecutive slashes by default", async () => {
        const { headers } = await signer.sign({ ...minimalRequest, path: "//foo%3Dbar" }, signingOptions);
        expect(headers[AUTH_HEADER]).toEqual(
          expect.stringContaining("Signature=fb4948cab44a9c47ce3b1a2489d01ec939fea9e79eccdb4593c11a94f207e075")
        );
      });

      it("should not URI-encode the path if URI path escaping was disabled on the signer", async () => {
        // Setting `uriEscapePath` to `false` creates an
        // S3-compatible signer. The expected authorization header
        // included below was calculated using the
        // `Aws\Signature\S3SignatureV4` class from the AWS SDK for
        // PHP
        const signer = new SignatureV4({
          service: "foo",
          region: "us-bar-1",
          sha256: Sha256,
          credentials: {
            accessKeyId: "foo",
            secretAccessKey: "bar",
          },
          uriEscapePath: false,
        });

        const { headers } = await signer.sign(
          new HttpRequest({
            ...minimalRequest,
            headers: {
              ...minimalRequest.headers,
              "X-Amz-Content-Sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            },
          }),
          {
            signingDate: new Date("2000-01-01T00:00:00.000Z"),
          }
        );
        expect(headers[AUTH_HEADER]).toBe(
          "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=0d859e5a74374efc2c9f14ba9352df14c68e411a1f44bd639fdd024e5f7b7ef1"
        );
      });
    });
  });

  describe("#sign (string)", () => {
    const signerInit = {
      service: "s3",
      region: "us-east-1",
      credentials: {
        accessKeyId: "AKIAIOSFODNN7EXAMPLE",
        secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
      },
      sha256: Sha256,
    };

    it("should produce signatures matching known outputs", async () => {
      // Example copied from https://github.com/aws/aws-sdk-php/blob/3.42.0/tests/S3/PostObjectV4Test.php#L37
      const signer = new SignatureV4(signerInit);
      const signingDate = new Date("2015-12-29T00:00:00Z");
      const stringToSign =
        "eyJleHBpcmF0aW9uIjoiMjAxNS0xMi0yOVQwMTowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJzaWd2NGV4YW1wbGVidWNrZXQifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInVzZXJcL3VzZXIxXC8iXSx7ImFjbCI6InB1YmxpYy1yZWFkIn0seyJzdWNjZXNzX2FjdGlvbl9yZWRpcmVjdCI6Imh0dHA6XC9cL3NpZ3Y0ZXhhbXBsZWJ1Y2tldC5zMy5hbWF6b25hd3MuY29tXC9zdWNjZXNzZnVsX3VwbG9hZC5odG1sIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJpbWFnZVwvIl0seyJ4LWFtei1tZXRhLXV1aWQiOiIxNDM2NTEyMzY1MTI3NCJ9LHsieC1hbXotc2VydmVyLXNpZGUtZW5jcnlwdGlvbiI6IkFFUzI1NiJ9LFsic3RhcnRzLXdpdGgiLCIkeC1hbXotbWV0YS10YWciLCIiXSx7IlgtQW16LURhdGUiOiIyMDE1MTIyOVQwMDAwWiJ9LHsiWC1BbXotQ3JlZGVudGlhbCI6IkFLSUFJT1NGT0ROTjdFWEFNUExFXC8yMDE1MTIyOVwvdXMtZWFzdC0xXC9zM1wvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1BbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In1dfQ==";
      expect(await signer.sign(stringToSign, { signingDate })).toBe(
        "683963a1575bb197c642490ac60f3f08cda08233cd3a163ad31b554e9327a3ff"
      );
    });

    it("should support overriding region and service in the signer instance", async () => {
      const signer = new SignatureV4({
        ...signerInit,
        service: "qux",
        region: "us-foo-1",
      });
      const signingDate = new Date("2015-12-29T00:00:00Z");
      const stringToSign =
        "eyJleHBpcmF0aW9uIjoiMjAxNS0xMi0yOVQwMTowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJzaWd2NGV4YW1wbGVidWNrZXQifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInVzZXJcL3VzZXIxXC8iXSx7ImFjbCI6InB1YmxpYy1yZWFkIn0seyJzdWNjZXNzX2FjdGlvbl9yZWRpcmVjdCI6Imh0dHA6XC9cL3NpZ3Y0ZXhhbXBsZWJ1Y2tldC5zMy5hbWF6b25hd3MuY29tXC9zdWNjZXNzZnVsX3VwbG9hZC5odG1sIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJpbWFnZVwvIl0seyJ4LWFtei1tZXRhLXV1aWQiOiIxNDM2NTEyMzY1MTI3NCJ9LHsieC1hbXotc2VydmVyLXNpZGUtZW5jcnlwdGlvbiI6IkFFUzI1NiJ9LFsic3RhcnRzLXdpdGgiLCIkeC1hbXotbWV0YS10YWciLCIiXSx7IlgtQW16LURhdGUiOiIyMDE1MTIyOVQwMDAwWiJ9LHsiWC1BbXotQ3JlZGVudGlhbCI6IkFLSUFJT1NGT0ROTjdFWEFNUExFXC8yMDE1MTIyOVwvdXMtZWFzdC0xXC9zM1wvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1BbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In1dfQ==";
      expect(
        await signer.sign(stringToSign, {
          signingDate,
          signingRegion: signerInit.region,
          signingService: signerInit.service,
        })
      ).toBe("683963a1575bb197c642490ac60f3f08cda08233cd3a163ad31b554e9327a3ff");
    });
  });

  describe("#sign (event)", () => {
    //adopt to Ruby SDK: https://github.com/aws/aws-sdk-ruby/blob/3c47c05aa77bdbb7b803a3ff932b3a89c32276ac/gems/aws-sigv4/spec/signer_spec.rb#L274
    const signerInit = {
      service: "SERVICE",
      region: "REGION",
      credentials: {
        accessKeyId: "akid",
        secretAccessKey: "secret",
      },
      sha256: Sha256,
    };

    it("support event signing", async () => {
      const signer = new SignatureV4(signerInit);
      const eventSignature = await signer.sign(
        {
          headers: Uint8Array.from([5, 58, 100, 97, 116, 101, 8, 0, 0, 1, 103, 247, 125, 87, 112]),
          payload: "foo" as any,
        },
        {
          signingDate: new Date(1369353600000),
          priorSignature: "",
        }
      );
      expect(eventSignature).toEqual("204bb5e2713e95354680e9522986d3ac0304aeafd33397f39e6540ca51ffe226");
    });

    it("should support overriding region and service in the signer instance", async () => {
      const signer = new SignatureV4({
        ...signerInit,
        service: "qux",
        // region: "us-foo-1",
      });
      const eventSignature = await signer.sign(
        {
          headers: Uint8Array.from([5, 58, 100, 97, 116, 101, 8, 0, 0, 1, 103, 247, 125, 87, 112]),
          payload: "foo" as any,
        },
        {
          signingDate: new Date(1369353600000),
          priorSignature: "",
          // signingRegion: signerInit.region,
          signingService: signerInit.service,
        }
      );
      expect(eventSignature).toEqual("204bb5e2713e95354680e9522986d3ac0304aeafd33397f39e6540ca51ffe226");
    });
  });

  describe("ambient Date usage", () => {
    let dateSpy;
    const mockDate = new Date();

    beforeEach(() => {
      dateSpy = jest.spyOn(global, "Date").mockImplementation(() => mockDate as unknown as string);
    });

    afterEach(() => {
      expect(dateSpy).toHaveBeenCalledTimes(1);
      jest.clearAllMocks();
    });

    it("should use the current date for presigning if no signing date was supplied", async () => {
      const { query } = await signer.presign(minimalRequest);
      expect((query as any)[AMZ_DATE_QUERY_PARAM]).toBe(iso8601(mockDate).replace(/[\-:]/g, ""));
    });

    it("should use the current date for signing if no signing date supplied", async () => {
      const { headers } = await signer.sign(minimalRequest);
      expect(headers[AMZ_DATE_HEADER]).toBe(iso8601(mockDate).replace(/[\-:]/g, ""));
    });
  });
});
