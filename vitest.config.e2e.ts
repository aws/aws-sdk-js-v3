import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["lib/lib-dynamodb/**/*.e2e.spec.{ts,js}", "lib/lib-storage/**/*.e2e.spec.{ts,js}"],
    environment: "node",
  },
});
