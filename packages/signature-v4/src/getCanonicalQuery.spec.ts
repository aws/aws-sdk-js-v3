import { getCanonicalQuery } from "./getCanonicalQuery";
import { HttpRequest } from "@aws-sdk/protocol-http";

const httpRequestOptions = {
  method: "POST",
  protocol: "https:",
  path: "/",
  headers: {},
  hostname: "foo.us-east-1.amazonaws.com",
};

describe("getCanonicalQuery", () => {
  it("should return an empty string for requests with no querystring", () => {
    expect(getCanonicalQuery(new HttpRequest(httpRequestOptions))).toBe("");
  });

  it("should serialize simple key => value pairs", () => {
    expect(
      getCanonicalQuery(
        new HttpRequest({
          ...httpRequestOptions,
          query: { fizz: "buzz", foo: "bar" },
        })
      )
    ).toBe("fizz=buzz&foo=bar");
  });

  it("should sort query keys alphabetically", () => {
    expect(
      getCanonicalQuery(
        new HttpRequest({
          ...httpRequestOptions,
          query: { foo: "bar", baz: "quux", fizz: "buzz" },
        })
      )
    ).toBe("baz=quux&fizz=buzz&foo=bar");
  });

  it("should URI-encode keys and values", () => {
    expect(
      getCanonicalQuery(
        new HttpRequest({
          ...httpRequestOptions,
          query: { "🐎": "🦄", "💩": "☃️" },
        })
      )
    ).toBe("%F0%9F%90%8E=%F0%9F%A6%84&%F0%9F%92%A9=%E2%98%83%EF%B8%8F");
  });

  it("should omit the x-amz-signature parameter, regardless of case", () => {
    expect(
      getCanonicalQuery(
        new HttpRequest({
          ...httpRequestOptions,
          query: {
            "x-amz-signature": "foo",
            "X-Amz-Signature": "bar",
            fizz: "buzz",
          },
        })
      )
    ).toBe("fizz=buzz");
  });

  it("should serialize arrays of values", () => {
    expect(
      getCanonicalQuery(
        new HttpRequest({
          ...httpRequestOptions,
          query: { foo: ["bar", "baz"] },
        })
      )
    ).toBe("foo=bar&foo=baz");
  });

  it("should serialize arrays using an alphabetic sort", () => {
    expect(
      getCanonicalQuery(
        new HttpRequest({
          ...httpRequestOptions,
          query: { snap: ["pop", "crackle"] },
        })
      )
    ).toBe("snap=crackle&snap=pop");
  });

  it("should URI-encode members of query param arrays", () => {
    expect(
      getCanonicalQuery(
        new HttpRequest({
          ...httpRequestOptions,
          query: { "🐎": ["💩", "🦄"] },
        })
      )
    ).toBe("%F0%9F%90%8E=%F0%9F%92%A9&%F0%9F%90%8E=%F0%9F%A6%84");
  });

  it("should omit non-string, non-array values from the serialized query", () => {
    expect(
      getCanonicalQuery(
        new HttpRequest({
          ...httpRequestOptions,
          query: { foo: "bar", baz: new Uint8Array(0) as any },
        })
      )
    ).toBe("foo=bar");
  });
});
