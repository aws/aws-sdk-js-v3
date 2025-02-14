# MD5 Checksum Fallback for AWS SDK for JavaScript v3

## Background

In AWS SDK for JavaScript [v3.729.0](https://github.com/aws/aws-sdk-js-v3/releases/tag/v3.729.0), we shipped a feature that [changed default object integrity in S3](https://github.com/aws/aws-sdk-js-v3/issues/6810). The SDKs now default to using more modern checksums (like CRC32) to ensure object integrity, whereas previously MD5 checksums were being used. Some third-party S3-compatible services currently do not support these checksums. To our knowledge, this affects only the S3 `DeleteObjects` operation.

If you wish to fallback to the old behavior of sending MD5 checksums, for operations like `DeleteObjectsCommand` this is how
you can do it in AWS SDK for JavaScript v3:

## MD5 fallback

The following code provides a custom S3 client that will use MD5 checksums for DeleteObjects operations while maintaining the
default behavior for all other operations.

```javascript
// md5ClientS3.mjs
import { S3Client } from "@aws-sdk/client-s3";
import { createHash } from "crypto";

/**
 * Creates an S3 client that uses MD5 checksums for DeleteObjects operations
 */
export function createS3ClientWithMD5() {
  const client = new S3Client({});
  const md5Hash = createHash("md5");

  client.middlewareStack.add(
    (next, context) => async (args) => {
      // Check if this is a DeleteObjects command
      const isDeleteObjects = context.commandName === "DeleteObjects";

      if (!isDeleteObjects) {
        return next(args);
      }

      const result = await next(args);
      const headers = args.request.headers;

      // Remove any checksum headers
      Object.keys(headers).forEach((header) => {
        if (
          header.toLowerCase().startsWith("x-amz-checksum-") ||
          header.toLowerCase().startsWith("x-amz-sdk-checksum-")
        ) {
          delete headers[header];
        }
      });

      // Add MD5
      if (args.request.body) {
        const bodyContent = Buffer.from(args.request.body);
        headers["Content-MD5"] = md5Hash.update(bodyContent).digest("base64");
      }

      return result;
    },
    {
      step: "finalizeRequest",
      name: "addMD5Checksum",
    }
  );

  return client;
}
```

## Usage

Instead of creating a regular S3 client, use the `createS3ClientWithMD5` function:

```javascript
import { DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { createS3ClientWithMD5 } from "./md5ClientS3.mjs";

// Create the client with MD5 support
const client = createS3ClientWithMD5();

// Use it like a normal S3 client
const deleteParams = {
  Bucket: "your-bucket",
  Delete: {
    Objects: [{ Key: "file1.txt" }, { Key: "file2.txt" }],
  },
};

try {
  const response = await client.send(new DeleteObjectsCommand(deleteParams));
  console.log("Successfully deleted objects:", response);
} catch (err) {
  console.error("Error:", err);
}
```

## How It Works

The solution adds middleware to the S3 client that:

1. Detects DeleteObjects operations using the command name
2. Lets the SDK add its default headers
3. Removes any checksum headers in the finalizeRequest step
4. Calculates an MD5 hash of the request body
5. Adds the MD5 hash as a Content-MD5 header

This sequence ensures that we properly replace the checksums with MD5 checksum.

## Usage Notes

- The client can be configured with additional options as needed (region, credentials, etc.)
- If your S3-compatible service supports the SDK's new checksum options or adds support in the future, you should use the standard S3 client instead.

## Debugging

To verify that the MD5 checksum is being correctly applied, you can add console logging to the middleware by modifying the
code to include logging statements:

```javascript
// Inside the middleware function, add:
console.log("Headers:", JSON.stringify(args.request.headers, null, 2));
```
