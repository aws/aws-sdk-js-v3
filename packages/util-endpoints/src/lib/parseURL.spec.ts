import { parseURL } from "./parseURL";

describe(parseURL.name, () => {
  it.each([
    ["https://example.com", { scheme: "https", authority: "example.com", path: "/", isIp: false }],
    ["http://example.com:80/foo/bar", { scheme: "http", authority: "example.com:80", path: "/foo/bar", isIp: false }],
    ["https://127.0.0.1", { scheme: "https", authority: "127.0.0.1", path: "/", isIp: true }],
    ["https://127.0.0.1:8443", { scheme: "https", authority: "127.0.0.1:8443", path: "/", isIp: true }],
    ["https://[fe80::1]", { scheme: "https", authority: "[fe80::1]", path: "/", isIp: true }],
    ["https://[fe80::1]:8443", { scheme: "https", authority: "[fe80::1]:8443", path: "/", isIp: true }],
  ])("test '%s'", (input, output) => {
    expect(parseURL(input)).toEqual(output);
  });

  it("returns null for invalid scheme", () => {
    expect(parseURL("ws://example.com")).toBeNull();
  });

  it("returns null for URL with search params", () => {
    expect(parseURL("https://example.com:8443?foo=bar")).toBeNull();
  });

  it("returns null for invalid URL", () => {
    expect(parseURL("invalid")).toBeNull();
  });
});
