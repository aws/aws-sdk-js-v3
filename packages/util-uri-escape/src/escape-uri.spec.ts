import { escapeUri } from "./escape-uri";

describe("escapeUri", () => {
  it("should convert most special characters", () => {
    expect(escapeUri("!@#$%^&*();':\"{}[],/?`")).toBe(
      "%21%40%23%24%25%5E%26%2A%28%29%3B%27%3A%22%7B%7D%5B%5D%2C%2F%3F%60"
    );
  });

  it("should not convert tildas or periods", () => {
    expect(escapeUri("~.")).toBe("~.");
  });

  it("should encode spaces as %20", () => {
    expect(escapeUri(" ")).toBe("%20");
  });

  it("should convert reserved characters", () => {
    expect(escapeUri(`!'()*`)).toBe("%21%27%28%29%2A");
  });
});
