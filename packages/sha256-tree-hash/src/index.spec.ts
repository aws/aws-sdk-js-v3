import { Sha256 } from "@aws-crypto/sha256-js";
import { toHex } from "@smithy/util-hex-encoding";
import { fromUtf8 } from "@smithy/util-utf8";

import { TreeHash } from "./index";

describe("ChecksumGenerator", () => {
  it("computes tree hashes of string bodies", async () => {
    const treeHash = new TreeHash(Sha256, fromUtf8);
    treeHash.update("bar");
    const results = await treeHash.digest();
    expect(toHex(results)).toEqual("fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9");
  });

  it("computes tree hashes of Uint8Array bodies < 1 MB", async () => {
    const treeHash = new TreeHash(Sha256, fromUtf8);
    treeHash.update(fromUtf8("bar"));
    const results = await treeHash.digest();
    expect(toHex(results)).toEqual("fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9");
  });

  it("computes tree hashes of bodies > 1 MB", async () => {
    const treeHash = new TreeHash(Sha256, fromUtf8);
    const payload = new Uint8Array(1024 * 1024 * 5.5);
    payload.fill(0);

    treeHash.update(payload);
    const results = await treeHash.digest();

    expect(toHex(results)).toEqual("a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455");
  });

  it("computes tree hashes of bodies = 1 MB", async () => {
    const treeHash = new TreeHash(Sha256, fromUtf8);
    const payload = new Uint8Array(1024 * 1024);
    payload.fill(0);

    treeHash.update(payload);
    const results = await treeHash.digest();

    expect(toHex(results)).toEqual("30e14955ebf1352266dc2ff8067e68104607e750abb9d3b36582b8af909fcb58");
  });

  it("computes tree hashes of chunked bodies", async () => {
    const treeHash = new TreeHash(Sha256, fromUtf8);
    const payload = new Uint8Array(1024 * 1024 * 5.5);
    payload.fill(0);

    for (let i = 0; i < payload.byteLength; i += 1024 * 1024) {
      treeHash.update(payload.subarray(i, i + Math.min(1024 * 1024, payload.byteLength)));
    }
    const results = await treeHash.digest();

    expect(toHex(results)).toEqual("a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455");
  });
});
