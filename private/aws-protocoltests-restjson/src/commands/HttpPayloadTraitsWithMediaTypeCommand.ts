// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpPayloadTraitsWithMediaTypeInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpPayloadTraitsWithMediaType } from "../schemas/schemas_25_HttpPayloadTraitsWithMediaType";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type HttpPayloadTraitsWithMediaTypeCommandInputType = Omit<HttpPayloadTraitsWithMediaTypeInputOutput, "blob"> & {
  blob?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link HttpPayloadTraitsWithMediaTypeCommand}.
 */
export interface HttpPayloadTraitsWithMediaTypeCommandInput extends HttpPayloadTraitsWithMediaTypeCommandInputType {}
/**
 * @public
 */
export type HttpPayloadTraitsWithMediaTypeCommandOutputType = Omit<
  HttpPayloadTraitsWithMediaTypeInputOutput,
  "blob"
> & {
  blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link HttpPayloadTraitsWithMediaTypeCommand}.
 */
export interface HttpPayloadTraitsWithMediaTypeCommandOutput
  extends HttpPayloadTraitsWithMediaTypeCommandOutputType,
    __MetadataBearer {}

/**
 * This example uses a `@mediaType` trait on the payload to force a custom
 * content-type to be serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadTraitsWithMediaTypeCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadTraitsWithMediaTypeCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadTraitsWithMediaTypeInputOutput
 *   foo: "STRING_VALUE",
 *   blob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new HttpPayloadTraitsWithMediaTypeCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadTraitsWithMediaTypeInputOutput
 * //   foo: "STRING_VALUE",
 * //   blob: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param HttpPayloadTraitsWithMediaTypeCommandInput - {@link HttpPayloadTraitsWithMediaTypeCommandInput}
 * @returns {@link HttpPayloadTraitsWithMediaTypeCommandOutput}
 * @see {@link HttpPayloadTraitsWithMediaTypeCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadTraitsWithMediaTypeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadTraitsWithMediaTypeCommand extends $Command
  .classBuilder<
    HttpPayloadTraitsWithMediaTypeCommandInput,
    HttpPayloadTraitsWithMediaTypeCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpPayloadTraitsWithMediaType", {})
  .n("RestJsonProtocolClient", "HttpPayloadTraitsWithMediaTypeCommand")
  .sc(HttpPayloadTraitsWithMediaType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadTraitsWithMediaTypeInputOutput;
      output: HttpPayloadTraitsWithMediaTypeInputOutput;
    };
    sdk: {
      input: HttpPayloadTraitsWithMediaTypeCommandInput;
      output: HttpPayloadTraitsWithMediaTypeCommandOutput;
    };
  };
}
