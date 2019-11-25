import { cloneRequest } from "./cloneRequest";
import { HttpRequest, QueryParameterBag } from "@aws-sdk/types";

describe("cloneRequest", () => {
  const request: HttpRequest = Object.freeze({
    method: "GET",
    protocol: "https:",
    hostname: "foo.us-west-2.amazonaws.com",
    path: "/",
    headers: Object.freeze({
      foo: "bar",
      compound: "value 1, value 2"
    }),
    query: Object.freeze({
      fizz: "buzz",
      snap: ["crackle", "pop"]
    })
  });

  it("should return an object matching the provided request", () => {
    expect(cloneRequest(request)).toEqual(request);
  });

  it("should return an object that with a different identity", () => {
    expect(cloneRequest(request)).not.toBe(request);
  });

  it("should should deep-copy the headers", () => {
    const clone = cloneRequest(request);

    delete clone.headers.compound;
    expect(Object.keys(request.headers)).toEqual(["foo", "compound"]);
    expect(Object.keys(clone.headers)).toEqual(["foo"]);
  });

  it("should should deep-copy the query", () => {
    const clone = cloneRequest(request);

    const { snap } = clone.query as QueryParameterBag;
    (snap as Array<string>).shift();

    expect((request.query as QueryParameterBag).snap).toEqual([
      "crackle",
      "pop"
    ]);
    expect((clone.query as QueryParameterBag).snap).toEqual(["pop"]);
  });

  it("should not copy the body", () => {
    const body = new Uint8Array(16);
    const req = { ...request, body };
    const clone = cloneRequest(req);

    expect(clone.body).toBe(req.body);
  });

  it("should handle requests without defined query objects", () => {
    expect(cloneRequest({ ...request, query: void 0 }).query).not.toBeDefined();
  });
});
