import { streamCollector } from "./index";

declare const global: any;

const MOVIES =
  "ewogICJ0aXRsZSI6ICJUaGUgQmFzaWNzIC0gTmV0d29ya2luZyIsCiAgImRlc2NyaXB0aW9uIjogIllvdXIgYXBwIGZldGNoZWQgdGhpcyBmcm9tIGEgcmVtb3RlIGVuZHBvaW50ISIsCiAgIm1vdmllcyI6IFsKICAgIHsgImlkIjogIjEiLCAidGl0bGUiOiAiU3RhciBXYXJzIiwgInJlbGVhc2VZZWFyIjogIjE5NzciIH0sCiAgICB7ICJpZCI6ICIyIiwgInRpdGxlIjogIkJhY2sgdG8gdGhlIEZ1dHVyZSIsICJyZWxlYXNlWWVhciI6ICIxOTg1IiB9LAogICAgeyAiaWQiOiAiMyIsICJ0aXRsZSI6ICJUaGUgTWF0cml4IiwgInJlbGVhc2VZZWFyIjogIjE5OTkiIH0sCiAgICB7ICJpZCI6ICI0IiwgInRpdGxlIjogIkluY2VwdGlvbiIsICJyZWxlYXNlWWVhciI6ICIyMDEwIiB9LAogICAgeyAiaWQiOiAiNSIsICJ0aXRsZSI6ICJJbnRlcnN0ZWxsYXIiLCAicmVsZWFzZVllYXIiOiAiMjAxNCIgfQogIF0KfQo=";

const str2ab = (str: string): Uint8Array => {
  var buf = new ArrayBuffer(str.length); // 2 bytes for each char
  var bufView = new Uint8Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return bufView;
};

describe("streamCollector", () => {
  it("returns a Uint8Array from a blob", done => {
    const dataPromise = streamCollector(new Response(str2ab(MOVIES)).body);
    dataPromise.then((data: any) => {
      expect(data).toEqual(str2ab(MOVIES));
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
