import { HttpRequest } from "@smithy/protocol-http";

jest.mock("@smithy/signature-v4");
jest.mock("@aws-sdk/signature-v4-crt");
jest.mock("@smithy/signature-v4a");

import { CrtSignerV4 } from "@aws-sdk/signature-v4-crt";
import { SignatureV4 } from "@smithy/signature-v4";
import { SignatureV4a } from "@smithy/signature-v4a";

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
    sha256: (() => {}) as any,
    runtime: "node",
  };
  const minimalRequest = new HttpRequest({
    hostname: "bucket.s3.us-foo-1.amazonaws.com",
    path: "/key",
  });

  beforeEach(() => {
    signatureV4CrtContainer.CrtSignerV4 = CrtSignerV4 as any;
    signatureV4aContainer.SignatureV4a = SignatureV4a as any;
    jest.clearAllMocks();
  });

  it("should sign with SigV4 signer", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.sign(minimalRequest);
    //@ts-ignore
    expect(SignatureV4.mock.instances[0].sign).toBeCalledTimes(1);
  });

  it("should presign with SigV4 signer", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.presign(minimalRequest);
    //@ts-ignore
    expect(SignatureV4.mock.instances[0].presign).toBeCalledTimes(1);
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

  it("should presign with SigV4a signer if signingRegion is '*'", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.presign(minimalRequest, { signingRegion: "*" });
    //@ts-ignore
    expect(SignatureV4a.mock.instances[0].presign).toBeCalledTimes(1);
  });

  it("should sign with SigV4a signer if signingRegion is '*'", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.sign(minimalRequest, { signingRegion: "*" });
    //@ts-ignore
    expect(SignatureV4a.mock.instances[0].sign).toBeCalledTimes(1);
  });

  it("should use CrtSignerV4 if available", async () => {
    const signer = new SignatureV4MultiRegion(params);
    await signer.sign(minimalRequest, { signingRegion: "*" });
    expect(CrtSignerV4).toHaveBeenCalledTimes(1);
  });

  it("should use SignatureV4a if CrtSignerV4 is not available", async () => {
    signatureV4CrtContainer.CrtSignerV4 = null;
    const signer = new SignatureV4MultiRegion(params);
    await signer.sign(minimalRequest, { signingRegion: "*" });
    expect(SignatureV4a).toHaveBeenCalledTimes(1);
  });

  it("should throw if neither CrtSignerV4 nor SignatureV4a is available", async () => {
    signatureV4CrtContainer.CrtSignerV4 = null;
    signatureV4aContainer.SignatureV4a = null;
    expect.assertions(1);
    const signer = new SignatureV4MultiRegion({ ...params });
    await expect(async () => await signer.sign(minimalRequest, { signingRegion: "*" })).rejects.toThrow(
      "Neither CRT nor JS SigV4a implementation is available. " +
        "Please load either @aws-sdk/signature-v4-crt or @smithy/signature-v4a."
    );
  });
});
