// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import {
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadInputTypes,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { StreamingTraitsInputOutput, StreamingTraitsInputOutputFilterSensitiveLog } from "../models/models_0";
import { de_StreamingTraitsCommand, se_StreamingTraitsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, StreamingTraitsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, StreamingTraitsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "StreamingTraits", {})
  .n("RestJsonProtocolClient", "StreamingTraitsCommand")
  .f(StreamingTraitsInputOutputFilterSensitiveLog, StreamingTraitsInputOutputFilterSensitiveLog)
  .ser(se_StreamingTraitsCommand)
  .de(de_StreamingTraitsCommand)
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
