/**
 * @jest-environment jsdom
 */
import bowser from "bowser";

import { DEFAULTS_MODE_OPTIONS } from "./constants";
import { resolveDefaultsModeConfig } from "./resolveDefaultsModeConfig";
jest.mock("bowser");

describe("resolveDefaultsModeConfig", () => {
  const uaSpy = jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue("some UA");

  afterEach(() => {
    uaSpy.mockClear();
  });

  it("should default to legacy", async () => {
    expect(await resolveDefaultsModeConfig({})()).toBe("legacy");
    expect(await resolveDefaultsModeConfig()()).toBe("legacy");
  });

  it.each(DEFAULTS_MODE_OPTIONS)("should resolve %s mode", async (mode) => {
    expect(await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve(mode as any) })()).toBe(mode);
  });

  it("should resolve auto mode to mobile if platform is mobile", async () => {
    (bowser.parse as jest.Mock).mockReturnValue({ platform: { type: "mobile" } });
    expect(await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve("auto") })()).toBe("mobile");
  });

  it("should resolve auto mode to mobile if platform is tablet", async () => {
    (bowser.parse as jest.Mock).mockReturnValue({ platform: { type: "tablet" } });
    expect(await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve("auto") })()).toBe("mobile");
  });

  it("should resolve auto mode to standard if platform not mobile or tablet", async () => {
    (bowser.parse as jest.Mock).mockReturnValue({ platform: { type: "desktop" } });
    expect(await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve("auto") })()).toBe("standard");
  });

  it("should memoize the response", async () => {
    const defaultsMode = resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve("auto") });
    await defaultsMode();
    const spyInvokeCount = uaSpy.mock.calls.length;
    await defaultsMode();
    expect(uaSpy).toBeCalledTimes(spyInvokeCount);
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
