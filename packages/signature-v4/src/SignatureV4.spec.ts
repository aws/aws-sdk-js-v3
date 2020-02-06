import { SignatureV4 } from "./SignatureV4";
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
  UNSIGNED_PAYLOAD
} from "./constants";
import { Sha256 } from "@aws-crypto/sha256-js";
import { Credentials } from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { iso8601 } from "./utilDate";

const signer = new SignatureV4({
  service: "foo",
  region: "us-bar-1",
  sha256: Sha256,
  credentials: {
    accessKeyId: "foo",
    secretAccessKey: "bar"
  }
});

const minimalRequest = new HttpRequest({
  method: "POST",
  protocol: "https:",
  path: "/",
  headers: {
    host: "foo.us-bar-1.amazonaws.com"
  },
  hostname: "foo.us-bar-1.amazonaws.com"
});

const credentials: Credentials = {
  accessKeyId: "foo",
  secretAccessKey: "bar"
};

describe("SignatureV4", () => {
  describe("#presignRequest", () => {
    const expiration = Math.floor(
      (new Date("2000-01-01T00:00:00.000Z").valueOf() + 60 * 60 * 1000) / 1000
    );
    const presigningOptions = {
      signingDate: new Date("2000-01-01T00:00:00.000Z")
    };

    it("should sign requests without bodies", async () => {
      const { query } = await signer.presignRequest(
        minimalRequest,
        expiration,
        presigningOptions
      );
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: "3600",
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]:
          "477e1bb76b04bd9973b28d67a6307e43934ec8327fc17950539eb47573db3c4a"
      });
    });

    it("should sign requests with string bodies", async () => {
      const { query } = await signer.presignRequest(
        new HttpRequest({
          ...minimalRequest,
          body: "It was the best of times, it was the worst of times"
        }),
        expiration,
        presigningOptions
      );
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: "3600",
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]:
          "2e27ee66efe81b085eea0aa53948bb49b76efc90d285ae6b4960f6072608f495"
      });
    });

    it("should sign requests with binary bodies", async () => {
      const { query } = await signer.presignRequest(
        new HttpRequest({
          ...minimalRequest,
          body: new Uint8Array([0xde, 0xad, 0xbe, 0xef])
        }),
        expiration,
        presigningOptions
      );
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: "3600",
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]:
          "0b13a0f33c2e949b565b61209478951f809bd6943310d44814c9526100047ea7"
      });
    });

    it("should sign requests with streaming (unsigned) bodies", async () => {
      /**
       * An environment specific stream that the signer knows nothing about.
       */
      class ExoticStream {}

      const { query } = await signer.presignRequest(
        new HttpRequest({
          ...minimalRequest,
          body: new ExoticStream() as any
        }),
        expiration,
        presigningOptions
      );
      expect(query).toEqual({
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: "3600",
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]:
          "60f0eb0b56c453974f0980ac8004c117e5f70f5720288c5fca0180cd6073fb95"
      });
    });

    it(`should set and sign the ${TOKEN_QUERY_PARAM} query parameter if the credentials have a session token`, async () => {
      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials: {
          ...credentials,
          sessionToken: "baz"
        }
      });
      const { query } = await signer.presignRequest(
        minimalRequest,
        expiration,
        presigningOptions
      );

      expect(query).toEqual({
        [TOKEN_QUERY_PARAM]: "baz",
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: "3600",
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]:
          "3663461416873c62951f3d97a93620d11f2b9bf584bb6790586cc8184aa2efd8"
      });
    });

    it("should use the precalculated payload checksum if provided", async () => {
      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials
      });

      const { query } = await signer.presignRequest(
        new HttpRequest({
          ...minimalRequest,
          body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
          headers: {
            ...minimalRequest.headers,
            "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD"
          }
        }),
        expiration,
        presigningOptions
      );

      expect(query).toEqual({
        "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD",
        [ALGORITHM_QUERY_PARAM]: ALGORITHM_IDENTIFIER,
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request",
        [AMZ_DATE_QUERY_PARAM]: "20000101T000000Z",
        [EXPIRES_QUERY_PARAM]: "3600",
        [SIGNED_HEADERS_QUERY_PARAM]: HOST_HEADER,
        [SIGNATURE_QUERY_PARAM]:
          "f098880292426cf244a8bf628c20eb6a1836f5e65acf7640193f0ff755592437"
      });
    });

    it("should allow specifying custom unsignable headers", async () => {
      const headers = {
        host: "foo.us-bar-1.amazonaws.com",
        foo: "bar",
        "user-agent": "baz"
      };
      const { headers: headersAsSigned, query } = await signer.presignRequest(
        new HttpRequest({
          ...minimalRequest,
          headers
        }),
        expiration,
        {
          ...presigningOptions,
          unsignableHeaders: new Set(["foo"])
        }
      );
      expect((query as any)[SIGNED_HEADERS_QUERY_PARAM]).toBe("host");
      expect(headersAsSigned).toEqual(headers);
    });

    it("should return a rejected promise if the expiration is more than one week in the future", async () => {
      await expect(
        signer.presignRequest(minimalRequest, new Date(), presigningOptions)
      ).rejects.toMatch(/less than one week in the future/);
    });

    it("should support presigning with asynchronously resolved credentials", async () => {
      const credsProvider = () =>
        Promise.resolve({
          accessKeyId: "foo",
          secretAccessKey: "bar"
        });

      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials: credsProvider
      });

      const { query } = await signer.presignRequest(
        minimalRequest,
        expiration,
        presigningOptions
      );

      expect(query).toMatchObject({
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request"
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
          secretAccessKey: "bar"
        }
      });

      const { query } = await signer.presignRequest(
        minimalRequest,
        expiration,
        presigningOptions
      );

      expect(query).toMatchObject({
        [CREDENTIAL_QUERY_PARAM]: "foo/20000101/us-bar-1/foo/aws4_request"
      });
    });

    describe("URI encoding paths", () => {
      const minimalRequest = new HttpRequest({
        method: "POST",
        protocol: "https:",
        path: "/foo%3Dbar",
        headers: {
          host: "foo.us-bar-1.amazonaws.com"
        },
        hostname: "foo.us-bar-1.amazonaws.com"
      });

      it("should URI-encode the path by default", async () => {
        const { query = {} } = await signer.presignRequest(
          minimalRequest,
          expiration,
          presigningOptions
        );
        expect(query[SIGNATURE_QUERY_PARAM]).toBe(
          "a70857a0dfb14773d814465001c5f0c0e708cc9a79609541fc22f57a70bdce12"
        );
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
            secretAccessKey: "bar"
          },
          uriEscapePath: false
        });

        const { query = {} } = await signer.presignRequest(
          new HttpRequest({
            ...minimalRequest,
            path: "/foo/bar/baz",
            headers: {
              ...minimalRequest.headers,
              "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD"
            }
          }),
          expiration,
          presigningOptions
        );
        expect(query[SIGNATURE_QUERY_PARAM]).toBe(
          "474f2588e722ea064242d050c2ce6bf45deed6a2e9ce887ffbc6fa4dac9da620"
        );
      });
    });
  });

  describe("#sign (request)", () => {
    it("should sign requests without bodies", async () => {
      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z")
      });
      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=1e3b24fcfd7655c0c245d99ba7b6b5ca6174eab903ebfbda09ce457af062ad30"
      );
    });

    it("should sign requests without host header", async () => {
      const request = minimalRequest.clone();
      delete request.headers[HOST_HEADER];
      const { headers } = await signer.sign(request, {
        signingDate: new Date("2000-01-01T00:00:00.000Z")
      });
      expect(headers[AUTH_HEADER]).toBe(
        "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=x-amz-content-sha256;x-amz-date, Signature=36cfca5cdb2c8d094f100663925d408a9608908ffc10b83133e5b25829ef7f5f"
      );
    });

    it("should sign requests with string bodies", async () => {
      const { headers } = await signer.sign(
        new HttpRequest({
          ...minimalRequest,
          body: "It was the best of times, it was the worst of times"
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
          body: new Uint8Array([0xde, 0xad, 0xbe, 0xef])
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
            "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD"
          }
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
            "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD"
          }
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
        signingDate: new Date("2000-01-01T00:00:00.000Z")
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
          sessionToken: "baz"
        }
      });
      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z")
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
            "user-agent": "baz"
          }
        }),
        {
          signingDate: new Date("2000-01-01T00:00:00.000Z"),
          unsignableHeaders: new Set(["foo"])
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
            "user-agent": "baz"
          }
        },
        {
          signingDate: new Date("2000-01-01T00:00:00.000Z"),
          unsignableHeaders: new Set(["foo"]),
          signableHeaders: new Set(["foo", "user-agent"])
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
          secretAccessKey: "bar"
        });

      const signer = new SignatureV4({
        service: "foo",
        region: "us-bar-1",
        sha256: Sha256,
        credentials: credsProvider
      });

      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z")
      });

      expect(headers[AUTH_HEADER]).toMatch(
        /^AWS4-HMAC-SHA256 Credential=foo\/20000101\/us-bar-1\/foo\/aws4_request/
      );
    });

    it("should support presigning with an asynchronously resolved region", async () => {
      const regionProvider = () => Promise.resolve("us-bar-1");

      const signer = new SignatureV4({
        service: "foo",
        region: regionProvider,
        sha256: Sha256,
        credentials: {
          accessKeyId: "foo",
          secretAccessKey: "bar"
        }
      });

      const { headers } = await signer.sign(minimalRequest, {
        signingDate: new Date("2000-01-01T00:00:00.000Z")
      });

      expect(headers[AUTH_HEADER]).toMatch(
        /^AWS4-HMAC-SHA256 Credential=foo\/20000101\/us-bar-1\/foo\/aws4_request/
      );
    });

    describe("URI encoding paths", () => {
      const minimalRequest = new HttpRequest({
        method: "POST",
        protocol: "https:",
        path: "/foo%3Dbar",
        headers: {
          host: "foo.us-bar-1.amazonaws.com"
        },
        hostname: "foo.us-bar-1.amazonaws.com"
      });

      it("should URI-encode the path by default", async () => {
        const { headers } = await signer.sign(minimalRequest, {
          signingDate: new Date("2000-01-01T00:00:00.000Z")
        });
        expect(headers[AUTH_HEADER]).toBe(
          "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=fb4948cab44a9c47ce3b1a2489d01ec939fea9e79eccdb4593c11a94f207e075"
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
            secretAccessKey: "bar"
          },
          uriEscapePath: false
        });

        const { headers } = await signer.sign(
          new HttpRequest({
            ...minimalRequest,
            headers: {
              ...minimalRequest.headers,
              "X-Amz-Content-Sha256":
                "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            }
          }),
          {
            signingDate: new Date("2000-01-01T00:00:00.000Z")
          }
        );
        expect(headers[AUTH_HEADER]).toBe(
          "AWS4-HMAC-SHA256 Credential=foo/20000101/us-bar-1/foo/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=0d859e5a74374efc2c9f14ba9352df14c68e411a1f44bd639fdd024e5f7b7ef1"
        );
      });
    });
  });

  describe("#sign (string)", () => {
    it("should produce signatures matching known outputs", async () => {
      // Example copied from https://github.com/aws/aws-sdk-php/blob/3.42.0/tests/S3/PostObjectV4Test.php#L37
      const signer = new SignatureV4({
        service: "s3",
        region: "us-east-1",
        credentials: {
          accessKeyId: "AKIAIOSFODNN7EXAMPLE",
          secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
        },
        sha256: Sha256
      });
      const signingDate = new Date("2015-12-29T00:00:00Z");
      const stringToSign =
        "eyJleHBpcmF0aW9uIjoiMjAxNS0xMi0yOVQwMTowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJzaWd2NGV4YW1wbGVidWNrZXQifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInVzZXJcL3VzZXIxXC8iXSx7ImFjbCI6InB1YmxpYy1yZWFkIn0seyJzdWNjZXNzX2FjdGlvbl9yZWRpcmVjdCI6Imh0dHA6XC9cL3NpZ3Y0ZXhhbXBsZWJ1Y2tldC5zMy5hbWF6b25hd3MuY29tXC9zdWNjZXNzZnVsX3VwbG9hZC5odG1sIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJpbWFnZVwvIl0seyJ4LWFtei1tZXRhLXV1aWQiOiIxNDM2NTEyMzY1MTI3NCJ9LHsieC1hbXotc2VydmVyLXNpZGUtZW5jcnlwdGlvbiI6IkFFUzI1NiJ9LFsic3RhcnRzLXdpdGgiLCIkeC1hbXotbWV0YS10YWciLCIiXSx7IlgtQW16LURhdGUiOiIyMDE1MTIyOVQwMDAwWiJ9LHsiWC1BbXotQ3JlZGVudGlhbCI6IkFLSUFJT1NGT0ROTjdFWEFNUExFXC8yMDE1MTIyOVwvdXMtZWFzdC0xXC9zM1wvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1BbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In1dfQ==";
      expect(await signer.sign(stringToSign, { signingDate })).toBe(
        "683963a1575bb197c642490ac60f3f08cda08233cd3a163ad31b554e9327a3ff"
      );
    });
  });

  describe("#signEvent", () => {
    //adopt to Ruby SDK: https://github.com/aws/aws-sdk-ruby/blob/3c47c05aa77bdbb7b803a3ff932b3a89c32276ac/gems/aws-sigv4/spec/signer_spec.rb#L274
    it("support event signing", async () => {
      const signer = new SignatureV4({
        service: "SERVICE",
        region: "REGION",
        credentials: {
          accessKeyId: "akid",
          secretAccessKey: "secret"
        },
        sha256: Sha256
      });
      const eventSignature = await signer.signEvent(
        {
          headers: Uint8Array.from([
            5,
            58,
            100,
            97,
            116,
            101,
            8,
            0,
            0,
            1,
            103,
            247,
            125,
            87,
            112
          ]),
          payload: "foo" as any
        },
        {
          signingDate: new Date(1369353600000),
          priorSignature: ""
        }
      );
      expect(eventSignature).toEqual(
        "204bb5e2713e95354680e9522986d3ac0304aeafd33397f39e6540ca51ffe226"
      );
    });
  });

  describe("ambient Date usage", () => {
    const knownDate = new Date("1999-12-31T23:59:59.999Z");

    beforeEach(() => {
      Date.now = jest.fn().mockReturnValue(knownDate) as any;
    });

    it("should use the current date for presigning if no signing date was supplied", async () => {
      const date = new Date();
      const { query } = await signer.presignRequest(
        minimalRequest,
        Math.floor((date.valueOf() + 60 * 60 * 1000) / 1000)
      );
      expect((query as any)[AMZ_DATE_QUERY_PARAM]).toBe(
        iso8601(date).replace(/[\-:]/g, "")
      );
    });

    it("should use the current date for signing if no signing date supplied", async () => {
      const { headers } = await signer.sign(minimalRequest);
      expect(headers[AMZ_DATE_HEADER]).toBe(
        iso8601(new Date()).replace(/[\-:]/g, "")
      );
    });
  });
});
