import { streamCollector } from "./index";

declare const global: any;

describe("streamCollector", () => {
  const ambientFileReader =
    typeof FileReader !== "undefined" ? FileReader : undefined;

  beforeEach(() => {
    const mockFileReader: FileReader = {
      readAsArrayBuffer: jest.fn()
    } as any;
    global.FileReader = function() {
      return mockFileReader;
    } as any;
  });

  afterEach(() => {
    global.FileReader = ambientFileReader as any;
  });

  it("returns a Uint8Array from a blob", async () => {
    const dataPromise = streamCollector(new global.Response().body);

    const reader = new FileReader();
    (reader as any).result = Uint8Array.from([0xde, 0xad]).buffer;
    reader.onload!({} as any);

    expect(await dataPromise).toEqual(Uint8Array.from([0xde, 0xad]));
  });

  it("propagates errors encountered by the file reader", async () => {
    const dataPromise = streamCollector(new Response().body);

    const reader = new FileReader();
    (reader as any).error = new Error("PANIC");
    reader.onerror!({} as any);

    await expect(dataPromise).rejects.toMatchObject(new Error("PANIC"));
  });

  it("rejects the promise when the read is aborted", async () => {
    const dataPromise = streamCollector(new Response().body);

    const reader = new FileReader();
    reader.onabort!({} as any);

    await expect(dataPromise).rejects.toMatchObject(new Error("Read aborted"));
  });
});
