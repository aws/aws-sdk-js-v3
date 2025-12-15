// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JsonBlobsInputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { JsonBlobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JsonBlobsCommand}.
 */
export interface JsonBlobsCommandInput extends JsonBlobsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonBlobsCommand}.
 */
export interface JsonBlobsCommandOutput extends JsonBlobsInputOutput, __MetadataBearer {}

/**
 * Blobs are base64 encoded
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonBlobsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonBlobsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonBlobsInputOutput
 *   data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new JsonBlobsCommand(input);
 * const response = await client.send(command);
 * // { // JsonBlobsInputOutput
 * //   data: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param JsonBlobsCommandInput - {@link JsonBlobsCommandInput}
 * @returns {@link JsonBlobsCommandOutput}
 * @see {@link JsonBlobsCommandInput} for command's `input` shape.
 * @see {@link JsonBlobsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class JsonBlobsCommand extends $Command
  .classBuilder<
    JsonBlobsCommandInput,
    JsonBlobsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "JsonBlobs", {})
  .n("RestJsonProtocolClient", "JsonBlobsCommand")
  .sc(JsonBlobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JsonBlobsInputOutput;
      output: JsonBlobsInputOutput;
    };
    sdk: {
      input: JsonBlobsCommandInput;
      output: JsonBlobsCommandOutput;
    };
  };
}
