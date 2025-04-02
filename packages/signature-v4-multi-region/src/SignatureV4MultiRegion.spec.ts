import { HttpRequest } from "@smithy/protocol-http";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@smithy/signature-v4");
vi.mock("@smithy/signature-v4a");
vi.mock("@aws-sdk/middleware-sdk-s3");
vi.mock("@aws-sdk/signature-v4-crt");

import { SignatureV4S3Express } from "@aws-sdk/middleware-sdk-s3";
import { CrtSignerV4 } from "@aws-sdk/signature-v4-crt";
import { SignatureV4a } from "@smithy/signature-v4a";
import { Checksum } from "@smithy/types";

import { signatureV4CrtContainer } from "./signature-v4-crt-container";
import { signatureV4aContainer } from "./signature-v4a-container";
import { SignatureV4MultiRegion, SignatureV4MultiRegionInit } from "./SignatureV4MultiRegion";

describe("SignatureV4MultiRegion", () => {
  const params: SignatureV4MultiRegionInit = {
    service: "s3",
    region: "us-foo-1",
    credentials: {
      accessKeyId: "akid",
      secretAccessKey: "secret",
    },
    sha256: class implements Checksum {
      public data = new Uint8Array();
      public async digest() {
        return this.data;
      }
      public update(bytes: Uint8Array) {
        const oldData = this.data;
        this.data = new Uint8Array(this.data.byteLength + bytes.byteLength);
        this.data.set(oldData);
        this.data.set(bytes, oldData.byteLength);
      }
      public reset() {
        this.data = new Uint8Array();
      }
    },
    runtime: "node",
  };
  const minimalRequest = new HttpRequest({
    hostname: "bucket.s3.us-foo-1.amazonaws.com",
    path: "/key",
  });

  beforeEach(() => {
    signatureV4CrtContainer.CrtSignerV4 = CrtSignerV4 as any;
    vi.clearAllMocks();
  });

  it("should sign with SigV4 signer", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.sign(minimalRequest);

    //@ts-ignore
    expect(SignatureV4S3Express.mock.instances[0].sign).toBeCalledTimes(1);
  });

  it("should presign with SigV4 signer", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.presign(minimalRequest);

    //@ts-ignore
    expect(SignatureV4S3Express.mock.instances[0].presign).toBeCalledTimes(1);
  });

  it("should sign with SigV4a signer if mult_region option is set", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.presign(minimalRequest, { signingRegion: "*" });
    //@ts-ignore
    expect(CrtSignerV4.mock.instances[0].presign).toBeCalledTimes(1);
  });

  it("should presign with SigV4 signer", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.presign(minimalRequest, { signingRegion: "*" });
    //@ts-ignore
    expect(CrtSignerV4.mock.instances[0].presign).toBeCalledTimes(1);
  });

  it("should sign with SigV4a signer if signingRegion is '*'", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.sign(minimalRequest, { signingRegion: "*" });
    expect(SignatureV4a.prototype.sign).toBeCalledTimes(1);
  });

  it("should throw if sign with SigV4a in unsupported runtime", async () => {
    expect.assertions(1);
    const signer = new SignatureV4MultiRegion({ ...params, runtime: "browser" });
    await expect(async () => await signer.sign(minimalRequest, { signingRegion: "*" })).rejects.toThrow(
      "This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js"
    );
  });

  it("should use SignatureV4a if CrtSignerV4 is not available", async () => {
    signatureV4CrtContainer.CrtSignerV4 = null;
    const signer = new SignatureV4MultiRegion(params);
    await signer.sign(minimalRequest, { signingRegion: "*" });
    expect(SignatureV4a).toHaveBeenCalledTimes(1);
  });

  it("should throw an error for presignWithCredentials with star region", async () => {
    const signer = new SignatureV4MultiRegion(params);
    const testCredentials = {
      accessKeyId: "test-access-key",
      secretAccessKey: "test-secret-key",
    };
    await expect(
      signer.presignWithCredentials(minimalRequest, testCredentials, { signingRegion: "*" })
    ).rejects.toThrow("Method presignWithCredentials is not supported for [signingRegion=*].");
  });

  it("should throw an error if neither CrtSignerV4 nor JsSigV4aSigner is available in node runtime", async () => {
    signatureV4CrtContainer.CrtSignerV4 = null;
    signatureV4aContainer.SignatureV4a = null;
    const signer = new SignatureV4MultiRegion(params);
    await expect(signer.sign(minimalRequest, { signingRegion: "*" })).rejects.toThrow(
      "Neither CRT nor JS SigV4a implementation is available. " +
        "Please load either @aws-sdk/signature-v4-crt or @smithy/signature-v4a. " +
        "For more information please go to " +
        "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt"
    );
  });

  it("should throw an error if JsSigV4aSigner is not available in non-node runtime", async () => {
    const nonNodeParams = { ...params, runtime: "browser" };
    signatureV4aContainer.SignatureV4a = null;
    const signer = new SignatureV4MultiRegion(nonNodeParams);
    await expect(signer.sign(minimalRequest, { signingRegion: "*" })).rejects.toThrow(
      "JS SigV4a implementation is not available or not a valid constructor. " +
        "Please check whether you have installed the @smithy/signature-v4a package explicitly. " +
        "You must also register the package by calling [require('@smithy/signature-v4a');] " +
        "or an ESM equivalent such as [import '@smithy/signature-v4a';]. " +
        "For more information please go to " +
        "https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a"
    );
  });

  it("should use JsSigV4aSigner in non-node runtime", async () => {
    const nonNodeParams = { ...params, runtime: "browser" };
    const signer = new SignatureV4MultiRegion(nonNodeParams);
    await signer.sign(minimalRequest, { signingRegion: "*" });
    expect(SignatureV4a).toHaveBeenCalledTimes(1);
  });

  it("should throw if sign with SigV4a and signature-v4-crt is not installed", async () => {
    signatureV4CrtContainer.CrtSignerV4 = null;
    expect.assertions(1);
    const signer = new SignatureV4MultiRegion({ ...params });
    await expect(async () => await signer.sign(minimalRequest, { signingRegion: "*" })).rejects.toThrow(
      "\n" +
        `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. \n` +
        `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` +
        `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. \n` +
        "For more information please go to " +
        "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt"
    );
  });
});
