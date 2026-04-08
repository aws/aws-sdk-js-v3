import { strictEqual } from "node:assert";

import { defaultEndpointResolver } from "./clients/client-s3/dist-cjs/endpoint/endpointResolver.js";

const endpointParams = {
  Accelerate: false,
  Bucket: "bucket-name",
  ForcePathStyle: false,
  Region: "us-west-2",
  UseDualStack: false,
  UseFIPS: false,
};

for (let i = 0; i < 5; i++) {
  const start = performance.now();
  const result = defaultEndpointResolver(endpointParams);
  const end = performance.now();
  console.log(`time taken to resolve endpoint: ${((end - start) * 1_000_000).toFixed(0)} ns `);
  strictEqual(result.url.toString(), "https://bucket-name.s3.us-west-2.amazonaws.com/");
}
