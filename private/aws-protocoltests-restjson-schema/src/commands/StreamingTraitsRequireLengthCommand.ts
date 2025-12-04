// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StreamingTraitsRequireLengthInput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { StreamingTraitsRequireLength } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StreamingTraitsRequireLengthCommand}.
 */
export interface StreamingTraitsRequireLengthCommandInput extends Omit<StreamingTraitsRequireLengthInput, "blob"> {
  blob?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link StreamingTraitsRequireLengthCommand}.
 */
export interface StreamingTraitsRequireLengthCommandOutput extends __MetadataBearer {}

/**
 * This examples serializes a streaming blob shape with a required content
 * length in the request body.
 *
 * In this example, no JSON document is synthesized because the payload is
 * not a structure or a union type.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, StreamingTraitsRequireLengthCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, StreamingTraitsRequireLengthCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // StreamingTraitsRequireLengthInput
 *   foo: "STRING_VALUE",
 *   blob: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new StreamingTraitsRequireLengthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StreamingTraitsRequireLengthCommandInput - {@link StreamingTraitsRequireLengthCommandInput}
 * @returns {@link StreamingTraitsRequireLengthCommandOutput}
 * @see {@link StreamingTraitsRequireLengthCommandInput} for command's `input` shape.
 * @see {@link StreamingTraitsRequireLengthCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class StreamingTraitsRequireLengthCommand extends $Command
  .classBuilder<
    StreamingTraitsRequireLengthCommandInput,
    StreamingTraitsRequireLengthCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "StreamingTraitsRequireLength", {})
  .n("RestJsonProtocolClient", "StreamingTraitsRequireLengthCommand")
  .sc(StreamingTraitsRequireLength)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StreamingTraitsRequireLengthInput;
      output: {};
    };
    sdk: {
      input: StreamingTraitsRequireLengthCommandInput;
      output: StreamingTraitsRequireLengthCommandOutput;
    };
  };
}
