import { HttpResponse, MetadataBearer, ResponseMetadata, RetryableTrait, SmithyException } from "@aws-sdk/types";

export interface SdkExceptionOptions extends SmithyException, MetadataBearer {
  message?: string;
}

export class SdkException extends Error implements SmithyException, MetadataBearer {
  readonly $fault: "client" | "server";

  $response?: HttpResponse;
  $retryable?: RetryableTrait;
  $metadata: ResponseMetadata;

  constructor(options: SdkExceptionOptions) {
    super(options.message);
    Object.setPrototypeOf(this, SdkException.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
}

// const deserializeMetadata = (output: HttpResponse): ResponseMetadata => ({
//   httpStatusCode: output.statusCode,
//   requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
//   extendedRequestId: output.headers["x-amz-id-2"],
//   cfId: output.headers["x-amz-cf-id"],
// });

// export interface InvalidSignatureException extends SmithyException {
//   name: "InvalidSignatureException";
//   $fault: "client";
//   SomeTrait: string | undefined;
// }

// export class InvalidSignatureException extends SmithyException {
//   constructor(parsedOutput: HttpResponse, deserialized: any) {
//     super({
//       name: "InvalidSignatureException",
//       $fault: "client",
//       $metadata: deserializeMetadata(parsedOutput),
//     });
//     Object.setPrototypeOf(this, InvalidSignatureException.prototype);
//     Object.assign(this, { ...deserialized });
//   }
// }

// (async () => {
//   const error = new InvalidSignatureException(
//     {
//       statusCode: 400,
//       headers: {
//         "x-amzn-request-id": "124",
//       },
//     },
//     await Promise.resolve({ SomeTrait: "trait_value" })
//   );

//   console.log(error);
//   console.log(error instanceof InvalidSignatureException);
//   console.log(error instanceof SdkException);
//   console.log(error instanceof Error);
//   console.log(new Error() instanceof InvalidSignatureException);
//   console.log(new Error() instanceof Error);
// })();
