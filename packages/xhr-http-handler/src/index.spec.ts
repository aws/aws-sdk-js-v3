import { XhrHttpHandler } from "./index";

describe("index", () => {
  it("exports XhrHttpHandler", () => {
    expect(typeof XhrHttpHandler).toBe("function");
  });
});
