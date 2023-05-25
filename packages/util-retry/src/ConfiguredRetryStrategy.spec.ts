import { ConfiguredRetryStrategy } from "./ConfiguredRetryStrategy";

describe(ConfiguredRetryStrategy.name, () => {
  it("allows setting a custom backoff function", async () => {
    const strategy = new ConfiguredRetryStrategy(5, (attempt) => attempt * 1000);

    const token = await strategy.acquireInitialRetryToken("");
    token.getRetryCount = () => 4;

    const retryToken = await strategy.refreshRetryTokenForRetry(token, {
      errorType: "TRANSIENT",
    });

    expect(retryToken.getRetryCount()).toBe(5);
    expect(retryToken.getRetryDelay()).toBe(5000);
  });
});
