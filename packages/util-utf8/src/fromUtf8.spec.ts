import { fromUtf8 } from "./fromUtf8";

const utf8StringsToByteArrays: Record<string, Uint8Array> = {
  ABC: new Uint8Array(["A".charCodeAt(0), "B".charCodeAt(0), "C".charCodeAt(0)]),
  "🐎👱❤": new Uint8Array([240, 159, 144, 142, 240, 159, 145, 177, 226, 157, 164]),
  "☃💩": new Uint8Array([226, 152, 131, 240, 159, 146, 169]),
  "The rain in Spain falls mainly on the plain.": new Uint8Array([
    84, 104, 101, 32, 114, 97, 105, 110, 32, 105, 110, 32, 83, 112, 97, 105, 110, 32, 102, 97, 108, 108, 115, 32, 109,
    97, 105, 110, 108, 121, 32, 111, 110, 32, 116, 104, 101, 32, 112, 108, 97, 105, 110, 46,
  ]),
  "دست‌نوشته‌ها نمی‌سوزند": new Uint8Array([
    216, 175, 216, 179, 216, 170, 226, 128, 140, 217, 134, 217, 136, 216, 180, 216, 170, 217, 135, 226, 128, 140, 217,
    135, 216, 167, 32, 217, 134, 217, 133, 219, 140, 226, 128, 140, 216, 179, 217, 136, 216, 178, 217, 134, 216, 175,
  ]),
  "Рукописи не горят": new Uint8Array([
    208, 160, 209, 131, 208, 186, 208, 190, 208, 191, 208, 184, 209, 129, 208, 184, 32, 208, 189, 208, 181, 32, 208,
    179, 208, 190, 209, 128, 209, 143, 209, 130,
  ]),
};

describe("fromUtf8", () => {
  for (const string of Object.keys(utf8StringsToByteArrays)) {
    it(`should UTF-8 decode "${string}" to the correct value`, () => {
      expect(fromUtf8(string)).toEqual(utf8StringsToByteArrays[string]);
    });
  }

  it("should throw when given a number", () => {
    expect(() => fromUtf8(255 as any)).toThrow();
  });
});
