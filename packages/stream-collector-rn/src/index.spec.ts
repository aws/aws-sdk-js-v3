import { streamCollector } from "./index";

describe("streamCollector", () => {
  it("returns a Uint8Array from a blob", done => {
    const dataPromise = new Response(new Uint8Array([102, 111, 111]).buffer)
      .blob()
      .then(blob => streamCollector(blob));
    dataPromise.then((data: any) => {
      expect(data).toEqual(Uint8Array.from([102, 111, 111]));
      done();
    });
  });
});
