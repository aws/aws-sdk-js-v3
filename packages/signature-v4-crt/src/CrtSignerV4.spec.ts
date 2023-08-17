import { Sha256 } from "@aws-crypto/sha256-js";
import { auth as crtAuth } from "aws-crt";

import {
  ALGORITHM_IDENTIFIER_V4A,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_QUERY_PARAM,
  CREDENTIAL_QUERY_PARAM,
  EXPIRES_QUERY_PARAM,
  REGION_SET_PARAM,
  SIGNATURE_QUERY_PARAM,
  SIGNED_HEADERS_QUERY_PARAM,
} from "./constants";
import { CrtSignerV4 } from "./CrtSignerV4";
export const region = "us-east-1";
export const service = "service";
export const suiteCredentials = {
  accessKeyId: "AKIDEXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY",
};

export const signingDate = new Date("2015-08-30T12:36:00Z");

const AUTH_HEADER = "Authorization";

describe("SignatureV4A", () => {
  /* SigV4A will have different signature every time. We cannot hard code the signature to test against. */
  const signerV4A = new CrtSignerV4({
    signingAlgorithm: crtAuth.AwsSigningAlgorithm.SigV4Asymmetric,
    credentials: suiteCredentials,
    region,
    service,
    sha256: Sha256,
    applyChecksum: false,
  });

  const ECC_KEY_PUB = {
    X: "b6618f6a65740a99e650b33b6b4b5bd0d43b176d721a3edfea7e7d2d56d936b1",
    Y: "865ed22a7eadc9c5cb9d2cbaca1b3699139fedc5043dc6661864218330c8e518",
  };

  const SIGV4ATEST_EXPECTED_CANONICAL_REQUEST: string =
    "GET" +
    "\n" +
    "/" +
    "\n" +
    "\n" +
    "host:example.amazonaws.com\n" +
    "my-header1:value2,value2,value1" +
    "\n" +
    "x-amz-date:20150830T123600Z" +
    "\n" +
    "x-amz-region-set:us-east-1" +
    "\n" +
    "\n" +
    "host;my-header1;x-amz-date;x-amz-region-set" +
    "\n" +
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const SIGV4ATEST_EXPECTED_CANONICAL_PRESIGNED_REQUEST: string =
    "GET" +
    "\n" +
    "/" +
    "\n" +
    "X-Amz-Algorithm=AWS4-ECDSA-P256-SHA256&X-Amz-Credential=AKIDEXAMPLE%2F20150830%2Fservice%2Faws4_request&X-Amz-Date=20150830T123600Z&X-Amz-Expires=3600&X-Amz-Region-Set=us-east-1&X-Amz-SignedHeaders=host%3Bmy-header1" +
    "\n" +
    "host:example.amazonaws.com\n" +
    "my-header1:value2,value2,value1" +
    "\n" +
    "\n" +
    "host;my-header1" +
    "\n" +
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  /* from a complete authorization string to get the signature for verification */
  function getSignature(authorizationString: string): string {
    const separator = "Signature=";
    const splits = authorizationString.split(separator);
    return splits[splits.length - 1];
  }

  const V4aRequest = {
    protocol: "https:",
    method: "GET",
    hostname: "example.amazonaws.com",
    query: {},
    headers: {
      host: "example.amazonaws.com",
      "my-header1": "value2,value2,value1",
      "x-amz-date": "20150830T123600Z",
    },
    path: "/",
  };

  describe("#presignRequest", () => {
    const presigningOptions = {
      expiresIn: 3600,
      signingDate,
    };

    it("should sign requests without bodies", async () => {
      const { query } = await signerV4A.presign(V4aRequest, presigningOptions);
      expect(query![ALGORITHM_QUERY_PARAM]).toEqual(ALGORITHM_IDENTIFIER_V4A);
      expect(query![CREDENTIAL_QUERY_PARAM]).toEqual("AKIDEXAMPLE/20150830/service/aws4_request");
      expect(query![AMZ_DATE_QUERY_PARAM]).toEqual("20150830T123600Z");
      expect(query![EXPIRES_QUERY_PARAM]).toEqual(presigningOptions.expiresIn.toString());
      expect(query![REGION_SET_PARAM]).toEqual(region);
      expect(query![SIGNED_HEADERS_QUERY_PARAM]).toEqual("host;my-header1");
      const result = await signerV4A.verifySigv4aPreSigning(
        V4aRequest,
        query![SIGNATURE_QUERY_PARAM],
        SIGV4ATEST_EXPECTED_CANONICAL_PRESIGNED_REQUEST,
        ECC_KEY_PUB.X,
        ECC_KEY_PUB.Y,
        presigningOptions
      );
      expect(result).toBe(true);
    });
  });

  describe("#sign (request)", () => {
    it("should sign requests without bodies", async () => {
      const option = {
        signingDate,
      };
      const { headers } = await signerV4A.sign(V4aRequest, option);
      expect(headers[AUTH_HEADER]).toMatch(
        /^AWS4-ECDSA-P256-SHA256 Credential=AKIDEXAMPLE\/20150830\/service\/aws4_request, SignedHeaders=host;my-header1;x-amz-date;x-amz-region-set, Signature=/
      );
      const signature = getSignature(headers[AUTH_HEADER]);
      const result = await signerV4A.verifySigv4aSigning(
        V4aRequest,
        signature,
        SIGV4ATEST_EXPECTED_CANONICAL_REQUEST,
        ECC_KEY_PUB.X,
        ECC_KEY_PUB.Y,
        option
      );
      expect(result).toBe(true);
    });
  });
});
