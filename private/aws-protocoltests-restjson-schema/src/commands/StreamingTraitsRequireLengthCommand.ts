// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StreamingTraitsRequireLengthInput } from "../models/models_0";
import { StreamingTraitsRequireLength$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class StreamingTraitsRequireLengthCommand extends command<StreamingTraitsRequireLengthCommandInput, StreamingTraitsRequireLengthCommandOutput>(
  _ep0,
  _mw0,
  "StreamingTraitsRequireLength",
  StreamingTraitsRequireLength$
) {
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
