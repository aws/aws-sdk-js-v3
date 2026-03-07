import { defineConfig } from "vitest/config";

const excludeOperations = [
  // when empty, triggers 200-error middleware (expected)
  "CopyObject (response)",
  // when empty, triggers 200-error middleware (expected)
  "UploadPartCopy (response)",
  // when empty, triggers checksum error (expected)
  "SendMessage (response)",
  // requires file stream for checksum
  "UploadArchive (request)",
  // requires file stream for checksum
  "UploadArchive (response)",
  // requires file stream for checksum
  "UploadMultipartPart (request)",
  // requires file stream for checksum
  "UploadMultipartPart (response)",
];

export default defineConfig({
  test: {
    include: ["{clients,private}/**/snapshots.integ.spec.ts"],
    testNamePattern: `^(?!.*(${excludeOperations
      .map((op) => op.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})$).*$`,
    environment: "node",
    setupFiles: ["vitest.snapshots.setup.mts"],
  },
});
