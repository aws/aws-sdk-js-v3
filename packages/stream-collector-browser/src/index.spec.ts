import { streamCollector } from "./index";

declare const global: any;

describe("streamCollector", () => {
  it("returns a Uint8Array from a blob", done => {
    const dataPromise = streamCollector(
      new Response(new Uint8Array([102, 111, 111]).buffer).body
    );
    dataPromise.then((data: any) => {
      expect(data).toEqual(Uint8Array.from([102, 111, 111]));
      done();
    });
  });

  it("returns a Uint8Array when stream is empty", done => {
    const expected = new Uint8Array(0);
    const dataPromise = streamCollector(new Response(expected.buffer).body);
    dataPromise.then((data: any) => {
      expect(data).toEqual(expected);
      done();
    });
  });
});
