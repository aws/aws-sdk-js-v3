import { escapeUriPath } from "./escape-uri-path";

describe("escapeUriPath", () => {
  it(`does not escape '/'`, () => {
    expect(escapeUriPath("/a/path/to/nowhere")).toBe("/a/path/to/nowhere");
  });

  it("does escape non-forward slash characters", () => {
    expect(escapeUriPath("/once/more !")).toBe("/once/more%20%21");
  });
});
