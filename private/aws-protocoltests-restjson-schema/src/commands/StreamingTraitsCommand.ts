// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type {
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadInputTypes,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StreamingTraitsInputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { StreamingTraits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StreamingTraitsCommand}.
 */
export interface StreamingTraitsCommandInput extends Omit<StreamingTraitsInputOutput, "blob"> {
  blob?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link StreamingTraitsCommand}.
 */
export interface StreamingTraitsCommandOutput extends Omit<StreamingTraitsInputOutput, "blob">, __MetadataBearer {
  blob?: StreamingBlobPayloadOutputTypes;
}

/**
 * This examples serializes a streaming blob shape in the request body.
 *
 * In this example, no JSON document is synthesized because the payload is
 * not a structure or a union type.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, StreamingTraitsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, StreamingTraitsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // StreamingTraitsInputOutput
 *   foo: "STRING_VALUE",
 *   blob: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new StreamingTraitsCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.blob.transformToByteArray();
 * // const str = await response.blob.transformToString();
 * // response.blob.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // StreamingTraitsInputOutput
 * //   foo: "STRING_VALUE",
 * //   blob: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param StreamingTraitsCommandInput - {@link StreamingTraitsCommandInput}
 * @returns {@link StreamingTraitsCommandOutput}
 * @see {@link StreamingTraitsCommandInput} for command's `input` shape.
 * @see {@link StreamingTraitsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class StreamingTraitsCommand extends $Command
  .classBuilder<
    StreamingTraitsCommandInput,
    StreamingTraitsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "StreamingTraits", {})
  .n("RestJsonProtocolClient", "StreamingTraitsCommand")
  .sc(StreamingTraits$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StreamingTraitsInputOutput;
      output: StreamingTraitsInputOutput;
    };
    sdk: {
      input: StreamingTraitsCommandInput;
      output: StreamingTraitsCommandOutput;
    };
  };
}
