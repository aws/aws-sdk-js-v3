import { DEFAULTS_MODE_OPTIONS } from "./constants";
import { resolveDefaultsModeConfig } from "./resolveDefaultsModeConfig.native";

describe("resolveDefaultsModeConfig", () => {
  it("should default to legacy", async () => {
    expect(await resolveDefaultsModeConfig({})()).toBe("legacy");
    expect(await resolveDefaultsModeConfig()()).toBe("legacy");
  });

  it("should resolve auto to mobile", async () => {
    expect(await resolveDefaultsModeConfig({ defaultsMode: "auto" })()).toBe("mobile");
  });

  it.each(DEFAULTS_MODE_OPTIONS)("should resolve %s mode", async (mode) => {
    expect(await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve(mode as any) })()).toBe(mode);
  });

  it.each(["invalid", "abc"])("should throw for invalid value %s", async (mode) => {
    try {
      await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve(mode as any) })();
      fail("should throw for invalid modes");
    } catch (e) {
      expect(e.message).toContain("Invalid parameter");
    }
  });
});
