describe("Example", () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  afterEach(async () => {
    await element(by.id("s3DeleteObject")).tap();
  });

  it("should have put object button", async () => {
    await element(by.id("s3PutObject")).toBeVisible();
  });
});
