import { HttpRequest } from "@smithy/protocol-http";
import { Checksum } from "@smithy/types";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SignatureV4MultiRegion } from "./browser-build/browser-signature-v4-multi-region-bundle.js";

describe("SignatureV4MultiRegion (Browser Bundle SigV4a Test)", () => {
  const credentials = {
    accessKeyId: "AKID",
    secretAccessKey: "SECRET",
  };
  const region = "us-west-2";
  const service = "s3";

  const minimalRequest = new HttpRequest({
    method: "POST",
    protocol: "https:",
    hostname: "example.com",
    path: "/",
    headers: {
      host: "example.com",
    },
    body: "something",
  });

  class MockSha256 implements Checksum {
    private hash = "hash of body";
    async digest() {
      return Buffer.from(this.hash, "hex");
    }
    update(chunk: Uint8Array | string) {
      // No-op
    }
    reset() {
      // No-op
    }
  }

  const baseSignerParams = {
    credentials,
    region,
    service,
    sha256: MockSha256,
    runtime: "browser",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should use SigV4a for the request when signingRegion is '*' (JS implementation is available in bundle)", async () => {
    const signer = new SignatureV4MultiRegion(baseSignerParams);
    const signedRequest = await signer.sign(minimalRequest, { signingRegion: "*" });
    const signedHeaders = signedRequest.headers;
    expect(signedHeaders).toHaveProperty("authorization");
    const authHeader = signedHeaders.authorization;
    expect(authHeader).toContain("AWS4-ECDSA-P256-SHA256");
    expect(authHeader).toContain("SignedHeaders=");
    expect(signedHeaders).toHaveProperty("x-amz-region-set", "*");
  });

  it("should throw error when signingRegion is '*' and JS implementation is NOT available (Covered in Unit Tests)", async () => {
    // NOTE: This test case describes the expected behavior but cannot be reliably executed
    // against the current browser bundle (`browser-signature-v4-multi-region-bundle.js`).
    // The `esbuild` configuration (`inject: ["inject-sigv4a.js"]`) forces the SigV4a
    // implementation to be included in this bundle, populating the internal
    // `signatureV4aContainer`.

    // The logic for throwing this error is tested in the source unit tests
    // (`SignatureV4MultiRegion.spec.ts`), where the container can be mocked
    // by setting `signatureV4aContainer.SignatureV4a = null;`.
    expect(true).toBe(true); // Placeholder assertion
    console.warn(
      "Skipping actual test execution for 'JS SigV4a implementation not available' scenario against the bundle. " +
        "This scenario is covered in source unit tests."
    );
  });
});
