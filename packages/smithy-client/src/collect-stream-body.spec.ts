import { Uint8ArrayBlobAdapter } from "@aws-sdk/util-stream";

import { collectBody } from "./collect-stream-body";

describe(collectBody.name, () => {
  it("passes through Uint8Array", async () => {
    const body = new Uint8Array();
    const arr = await collectBody(body, {
      async streamCollector(stream: any) {
        return new Uint8Array(stream);
      },
    });

    expect(arr).toBe(body);
  });

  it("uses the contextual streamCollector", async () => {
    const body = "x";
    const arr = await collectBody(body, {
      async streamCollector(stream: any) {
        return Uint8ArrayBlobAdapter.fromString(stream);
      },
    });

    expect(arr.transformToString()).toEqual("x");
  });

  it("uses the contextual streamCollector for empty string", async () => {
    const body = "";
    const arr = await collectBody(body, {
      async streamCollector(stream: any) {
        return Uint8ArrayBlobAdapter.fromString(stream);
      },
    });

    expect(arr.transformToString()).toEqual("");
  });

  it("defaults to an empty Uint8Array", async () => {
    const body = null;
    const arr = await collectBody(body, {
      async streamCollector(stream: any) {
        return Uint8ArrayBlobAdapter.fromString(stream);
      },
    });

    expect(arr.transformToString()).toEqual("");
  });
});
