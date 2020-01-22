import { validHostname } from "./";

describe("implementation selection", () => {
  it("should return true for valid hostnames", () => {
    expect(validHostname("foo")).toBe(true);
  });

  it("should return false for invalid hostnames", () => {
    expect(validHostname("foo.com/?bar")).toBe(false);
  });
});
