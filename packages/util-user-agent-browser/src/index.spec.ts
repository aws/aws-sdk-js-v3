import { describe, expect, test as it, vi } from "vitest";

import { createDefaultUserAgentProvider, fallback } from "./index";

type NavigatorTestAugment = {
  userAgentData?: {
    brands?: {
      brand?: string;
      version?: string;
    }[];
    platform?: string;
  };
};

describe("browser and os brand detection", () => {
  it("should use navigator.userAgentData when available", async () => {
    const navigator = window.navigator as typeof window.navigator & NavigatorTestAugment;
    navigator.userAgentData = {
      platform: "linux",
      brands: [
        { brand: "test", version: "1" },
        { brand: "BROWSER_BRAND", version: "10000" },
      ],
    };

    const uaProvider = createDefaultUserAgentProvider({
      serviceId: "AWS",
      clientVersion: "3.0.0",
    });

    const sdkUa = await uaProvider();
    expect(sdkUa.flatMap((_) => _.filter(Boolean).join("#")).join(" ")).toEqual(
      "aws-sdk-js#3.0.0 ua#2.1 os/linux lang/js md/browser#BROWSER_BRAND_10000 api/AWS#3.0.0"
    );
  });

  it("falls back to basic user agent parsing", async () => {
    const navigator = window.navigator as typeof window.navigator & NavigatorTestAugment;
    delete navigator.userAgentData;

    vi.spyOn(navigator, "userAgent", "get").mockReturnValue("Linux Firefox/");

    const uaProvider = createDefaultUserAgentProvider({
      serviceId: "AWS",
      clientVersion: "3.0.0",
    });

    const sdkUa = await uaProvider();
    expect(sdkUa.flatMap((_) => _.filter(Boolean).join("#")).join(" ")).toEqual(
      "aws-sdk-js#3.0.0 ua#2.1 os/Linux lang/js md/browser#Firefox_unknown api/AWS#3.0.0"
    );
  });

  it("uses defaults when unable to detect any specific OS or browser brand", async () => {
    const navigator = window.navigator as typeof window.navigator & NavigatorTestAugment;
    delete navigator.userAgentData;

    vi.spyOn(navigator, "userAgent", "get").mockReturnValue("");

    const uaProvider = createDefaultUserAgentProvider({
      serviceId: "AWS",
      clientVersion: "3.0.0",
    });

    const sdkUa = await uaProvider();
    expect(sdkUa.flatMap((_) => _.filter(Boolean).join("#")).join(" ")).toEqual(
      "aws-sdk-js#3.0.0 ua#2.1 os/other lang/js md/browser#unknown_unknown api/AWS#3.0.0"
    );
  });
});

describe("ua fallback parsing", () => {
  const samples = [
    `Mozilla/5.0 (Macintosh; Intel Mac OS X 15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15`,
    `Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6.2 Mobile/15E148 Safari/604.1`,
    `Mozilla/5.0 (iPad; CPU OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6.2 Mobile/15E148 Safari/604.1`,
    `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36`,
    `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36`,
    `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36`,
    `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.7390.44 Mobile Safari/537.36`,
    `Mozilla/5.0 (Linux; Android 16; LM-Q710(FGN)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.7390.44 Mobile Safari/537.36`,
    `Mozilla/5.0 (Android 16; Mobile; LG-M255; rv:143.0) Gecko/143.0 Firefox/143.0`,
    `Mozilla/5.0 (Android 16; Mobile; rv:68.0) Gecko/68.0 Firefox/143.0`,
    `Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 EdgiOS/140.3485.94 Mobile/15E148 Safari/605.1.15`,
    `Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.7390.44 Mobile Safari/537.36 EdgA/140.0.3485.98`,
    `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.3537.57`,
    `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.3537.57`,
    `Mozilla/5.0 (X11; Linux i686; rv:143.0) Gecko/20100101 Firefox/143.0`,
  ];

  const expectedBrands = [
    ["macOS", "Safari"],
    ["iOS", "Safari"],
    ["iOS", "Safari"],
    ["macOS", "Chrome"],
    ["Windows", "Chrome"],
    ["Linux", "Chrome"],
    ["Android", "Chrome"],
    ["Android", "Chrome"],
    ["Android", "Firefox"],
    ["Android", "Firefox"],
    ["iOS", "Microsoft Edge"],
    ["Android", "Microsoft Edge"],
    ["macOS", "Microsoft Edge"],
    ["Windows", "Microsoft Edge"],
    ["Linux", "Firefox"],
  ];

  it("should detect os and browser", () => {
    for (let i = 0; i < expectedBrands.length; ++i) {
      expect([fallback.os(samples[i]), fallback.browser(samples[i])]).toEqual(expectedBrands[i]);
    }
  });
});
