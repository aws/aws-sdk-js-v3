/**
 * @jest-environment jsdom
 */
import testCases from "./__mocks__/testCases.json";
import { toBase64 } from "./toBase64.browser";

describe(toBase64.name, () => {
  it.each(testCases as Array<[string, string, number[]]>)("%s", (desc, encoded, decoded) => {
    expect(toBase64(new Uint8Array(decoded))).toEqual(encoded);
  });
});
