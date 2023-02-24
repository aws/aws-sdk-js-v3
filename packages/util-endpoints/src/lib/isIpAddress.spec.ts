import { isIpAddress } from "./isIpAddress";

describe(isIpAddress.name, () => {
  it.each([
    [false, "example.com"],
    [true, "127.0.0.1"],
    [true, "[fe80::1]"],
  ])("returns %s for '%s'", (output, input) => {
    expect(isIpAddress(input)).toEqual(output);
  });
});
