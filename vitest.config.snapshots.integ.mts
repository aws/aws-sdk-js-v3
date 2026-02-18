import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["{clients,private}/**/snapshots.integ.spec.ts"],
    environment: "node",
  },
});
