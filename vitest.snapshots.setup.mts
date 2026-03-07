import { setup } from "@aws-sdk/snapshot-testing";
import { beforeAll } from "vitest";

beforeAll(async () => {
  setup();
});
