// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StreamingTraitsRequireLengthInput,
  StreamingTraitsRequireLengthInputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StreamingTraitsRequireLengthCommand,
  se_StreamingTraitsRequireLengthCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, StreamingTraitsRequireLengthCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, StreamingTraitsRequireLengthCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "StreamingTraitsRequireLength", {})
  .n("RestJsonProtocolClient", "StreamingTraitsRequireLengthCommand")
  .f(StreamingTraitsRequireLengthInputFilterSensitiveLog, void 0)
  .ser(se_StreamingTraitsRequireLengthCommand)
  .de(de_StreamingTraitsRequireLengthCommand)
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
