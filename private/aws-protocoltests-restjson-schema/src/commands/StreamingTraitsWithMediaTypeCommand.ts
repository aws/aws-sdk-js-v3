// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadInputTypes,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StreamingTraitsWithMediaTypeInputOutput,
  StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog,
} from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { StreamingTraitsWithMediaType } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StreamingTraitsWithMediaTypeCommand}.
 */
export interface StreamingTraitsWithMediaTypeCommandInput
  extends Omit<StreamingTraitsWithMediaTypeInputOutput, "blob"> {
  blob?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link StreamingTraitsWithMediaTypeCommand}.
 */
export interface StreamingTraitsWithMediaTypeCommandOutput
  extends Omit<StreamingTraitsWithMediaTypeInputOutput, "blob">,
    __MetadataBearer {
  blob?: StreamingBlobPayloadOutputTypes;
}

/**
 * This examples serializes a streaming media-typed blob shape in the request body.
 *
 * This examples uses a `@mediaType` trait on the payload to force a custom
 * content-type to be serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, StreamingTraitsWithMediaTypeCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, StreamingTraitsWithMediaTypeCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // StreamingTraitsWithMediaTypeInputOutput
 *   foo: "STRING_VALUE",
 *   blob: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new StreamingTraitsWithMediaTypeCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.blob.transformToByteArray();
 * // const str = await response.blob.transformToString();
 * // response.blob.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // StreamingTraitsWithMediaTypeInputOutput
 * //   foo: "STRING_VALUE",
 * //   blob: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param StreamingTraitsWithMediaTypeCommandInput - {@link StreamingTraitsWithMediaTypeCommandInput}
 * @returns {@link StreamingTraitsWithMediaTypeCommandOutput}
 * @see {@link StreamingTraitsWithMediaTypeCommandInput} for command's `input` shape.
 * @see {@link StreamingTraitsWithMediaTypeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class StreamingTraitsWithMediaTypeCommand extends $Command
  .classBuilder<
    StreamingTraitsWithMediaTypeCommandInput,
    StreamingTraitsWithMediaTypeCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "StreamingTraitsWithMediaType", {})
  .n("RestJsonProtocolClient", "StreamingTraitsWithMediaTypeCommand")
  .f(
    StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog,
    StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog
  )
  .sc(StreamingTraitsWithMediaType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StreamingTraitsWithMediaTypeInputOutput;
      output: StreamingTraitsWithMediaTypeInputOutput;
    };
    sdk: {
      input: StreamingTraitsWithMediaTypeCommandInput;
      output: StreamingTraitsWithMediaTypeCommandOutput;
    };
  };
}
