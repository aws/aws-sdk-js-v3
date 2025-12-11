// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HttpPayloadTraitsInputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { HttpPayloadTraits } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type HttpPayloadTraitsCommandInputType = Omit<HttpPayloadTraitsInputOutput, "blob"> & {
  blob?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link HttpPayloadTraitsCommand}.
 */
export interface HttpPayloadTraitsCommandInput extends HttpPayloadTraitsCommandInputType {}
/**
 * @public
 */
export type HttpPayloadTraitsCommandOutputType = Omit<HttpPayloadTraitsInputOutput, "blob"> & {
  blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link HttpPayloadTraitsCommand}.
 */
export interface HttpPayloadTraitsCommandOutput extends HttpPayloadTraitsCommandOutputType, __MetadataBearer {}

/**
 * This example serializes a blob shape in the payload.
 *
 * In this example, no JSON document is synthesized because the payload is
 * not a structure or a union type.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadTraitsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadTraitsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadTraitsInputOutput
 *   foo: "STRING_VALUE",
 *   blob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new HttpPayloadTraitsCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadTraitsInputOutput
 * //   foo: "STRING_VALUE",
 * //   blob: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param HttpPayloadTraitsCommandInput - {@link HttpPayloadTraitsCommandInput}
 * @returns {@link HttpPayloadTraitsCommandOutput}
 * @see {@link HttpPayloadTraitsCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadTraitsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadTraitsCommand extends $Command
  .classBuilder<
    HttpPayloadTraitsCommandInput,
    HttpPayloadTraitsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpPayloadTraits", {})
  .n("RestJsonProtocolClient", "HttpPayloadTraitsCommand")
  .sc(HttpPayloadTraits)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadTraitsInputOutput;
      output: HttpPayloadTraitsInputOutput;
    };
    sdk: {
      input: HttpPayloadTraitsCommandInput;
      output: HttpPayloadTraitsCommandOutput;
    };
  };
}
