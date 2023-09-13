import { HttpRequest } from "@smithy/protocol-http";

jest.mock("@smithy/signature-v4");

jest.mock("@aws-sdk/signature-v4-crt");

import { CrtSignerV4 } from "@aws-sdk/signature-v4-crt";
import { SignatureV4 } from "@smithy/signature-v4";

import { signatureV4CrtContainer } from "./signature-v4-crt-container";
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

  it("should throw if sign with SigV4a in unsupported runtime", async () => {
    expect.assertions(1);
    const signer = new SignatureV4MultiRegion({ ...params, runtime: "browser" });
    await expect(async () => await signer.sign(minimalRequest, { signingRegion: "*" })).rejects.toThrow(
      "This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js"
    );
  });

  it("should throw if preSign with SigV4a in unsupported runtime", async () => {
    expect.assertions(1);
    const signer = new SignatureV4MultiRegion({ ...params, runtime: "browser" });
    await expect(signer.presign(minimalRequest, { signingRegion: "*" })).rejects.toThrow(
      "This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js"
    );
  });

  it("should throw if sign with SigV4a and signature-v4-crt is not installed", async () => {
    signatureV4CrtContainer.CrtSignerV4 = null;
    expect.assertions(1);
    const signer = new SignatureV4MultiRegion({ ...params });
    await expect(async () => await signer.sign(minimalRequest, { signingRegion: "*" })).rejects.toThrow(
      `\nPlease check if you have installed "@aws-sdk/signature-v4-crt" package explicitly. \n` +
        "For more information please go to " +
        "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt"
    );
  });
});
