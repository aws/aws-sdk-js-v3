import { Endpoint, EndpointURL, EndpointURLScheme } from "@aws-sdk/types";

import { parseURL } from "./parseURL";

describe(parseURL.name, () => {
  const testCases: [string, EndpointURL][] = [
    [
      "https://example.com",
      { scheme: EndpointURLScheme.HTTPS, authority: "example.com", path: "/", normalizedPath: "/", isIp: false },
    ],
    [
      "http://example.com:80/foo/bar",
      {
        scheme: EndpointURLScheme.HTTP,
        authority: "example.com:80",
        path: "/foo/bar",
        normalizedPath: "/foo/bar/",
        isIp: false,
      },
    ],
    [
      "https://127.0.0.1",
      { scheme: EndpointURLScheme.HTTPS, authority: "127.0.0.1", path: "/", normalizedPath: "/", isIp: true },
    ],
    [
      "https://127.0.0.1:8443",
      { scheme: EndpointURLScheme.HTTPS, authority: "127.0.0.1:8443", path: "/", normalizedPath: "/", isIp: true },
    ],
    [
      "https://[fe80::1]",
      { scheme: EndpointURLScheme.HTTPS, authority: "[fe80::1]", path: "/", normalizedPath: "/", isIp: true },
    ],
    [
      "https://[fe80::1]:8443",
      { scheme: EndpointURLScheme.HTTPS, authority: "[fe80::1]:8443", path: "/", normalizedPath: "/", isIp: true },
    ],
  ];

  it.each(testCases)("test '%s'", (input: string, output: EndpointURL) => {
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

  it.each(testCases)("test as URL '%s'", (input: string, output: EndpointURL) => {
    const url = new URL(input);
    expect(parseURL(url)).toEqual({
      ...output,
      authority: url.hostname + (url.port ? `:${url.port}` : ""),
    });
  });

  it.each(testCases)("test as EndpointV1 '%s'", (input: string, output: EndpointURL) => {
    const url = new URL(input);
    const endpointV1: Endpoint = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port ? Number(url.port) : undefined,
      path: url.pathname,
    };

    expect(parseURL(endpointV1)).toEqual({
      ...output,
      authority: url.hostname + (url.port ? `:${url.port}` : ""),
    });
  });
});
