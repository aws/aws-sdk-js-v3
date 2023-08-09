import { HttpRequest } from "@smithy/types";

import { formatUrl } from "./";

describe("format url", () => {
  const requestTemplate: HttpRequest = {
    protocol: "https",
    hostname: "foo.mock-region.awsamazon.com",
    path: "/",
    method: "GET",
    headers: {},
  };

  it("should use correct protocol", () => {
    let request = {
      ...requestTemplate,
    };
    expect(formatUrl(request).indexOf("https")).toBe(0);
    request = {
      ...requestTemplate,
      protocol: "http",
    };
    expect(formatUrl(request).indexOf("http")).toBe(0);
  });

  it("should use currect hostname", () => {
    expect(formatUrl(requestTemplate)).toEqual("https://foo.mock-region.awsamazon.com/");
  });

  it("should append port number to hostname", () => {
    const request = {
      ...requestTemplate,
      port: 80,
    };
    expect(formatUrl(request)).toEqual("https://foo.mock-region.awsamazon.com:80/");
  });

  describe("path string", () => {
    it("should encodeURI simple path", () => {
      let request = {
        ...requestTemplate,
        path: "/foo",
      };
      expect(formatUrl(request)).toEqual("https://foo.mock-region.awsamazon.com/foo");
      request = {
        ...requestTemplate,
        path: "/b/c/d",
      };
      expect(formatUrl(request)).toEqual("https://foo.mock-region.awsamazon.com/b/c/d");
    });

    it("should not uri encode the path(input should be already encoded)", () => {
      const request = {
        ...requestTemplate,
        path: "%3Ba/b/c",
      };
      expect(formatUrl(request)).toEqual("https://foo.mock-region.awsamazon.com/%3Ba/b/c");
    });
  });

  describe("query string", () => {
    it("should parse key value pairs", () => {
      let request = {
        ...requestTemplate,
        query: {
          foo: "foo",
          bar: "bar",
        },
      };
      expect(formatUrl(request)).toBe("https://foo.mock-region.awsamazon.com/?bar=bar&foo=foo");
      request = {
        ...requestTemplate,
        query: {
          foo: "foo",
          bar: "",
        },
      };
      expect(formatUrl(request)).toBe("https://foo.mock-region.awsamazon.com/?bar=&foo=foo");
    });

    it("should encode query with value as array", () => {
      const request = {
        ...requestTemplate,
        query: {
          foo: ["query", "with", "array", "value"],
        },
      };
      expect(formatUrl(request)).toBe("https://foo.mock-region.awsamazon.com/?foo=query&foo=with&foo=array&foo=value");
    });

    it("should encode pure string (when value is null)", () => {
      const request = {
        ...requestTemplate,
        query: {
          query: null,
        },
      };
      expect(formatUrl(request)).toBe("https://foo.mock-region.awsamazon.com/?query");
      const queryLikePath = {
        ...requestTemplate,
        query: {
          "a/query/string": null,
        },
      };
      expect(formatUrl(queryLikePath)).toBe("https://foo.mock-region.awsamazon.com/?a%2Fquery%2Fstring");
      const complicateQuery = {
        ...requestTemplate,
        query: {
          "that's all": null,
        },
      };
      expect(formatUrl(complicateQuery)).toBe("https://foo.mock-region.awsamazon.com/?that%27s%20all");
    });
  });
});
