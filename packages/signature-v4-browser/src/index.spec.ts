import { SignatureV4 } from "./";
import {
  credentials,
  region,
  requests,
  service,
  signingDate
} from "@aws-sdk/signature-v4/dist/cjs/suite.fixture";

/**
 * Executes the official AWS Signature Version 4 test suite.
 *
 * TODO find a way to run these tests in real browsers
 * This works in a Node.JS environment due to the fallback Sha256 implementation
 * included in the browser version (used if the WebCrypto API is not available).
 *
 * @link http://docs.aws.amazon.com/general/latest/gr/signature-v4-test-suite.html
 */
describe("AWS Signature Version 4 Test Suite", () => {
  const signer = new SignatureV4({
    credentials,
    region,
    service,
    applyChecksum: false
  });

  for (const { name, request, authorization } of requests) {
    it(`should calculate the correct signature for ${name}`, async () => {
      const signed = await signer.sign(request, { signingDate });
      expect(signed.headers["authorization"]).toEqual(authorization);
    });
  }
});
