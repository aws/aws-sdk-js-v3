// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { HttpPayloadTraitsWithMediaTypeInputOutput } from "../models/models_0";
import {
  de_HttpPayloadTraitsWithMediaTypeCommand,
  se_HttpPayloadTraitsWithMediaTypeCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

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
 * import { RestXmlProtocolClient, HttpPayloadTraitsWithMediaTypeCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadTraitsWithMediaTypeCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestXmlProtocolClient(config);
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
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class HttpPayloadTraitsWithMediaTypeCommand extends $Command
  .classBuilder<
    HttpPayloadTraitsWithMediaTypeCommandInput,
    HttpPayloadTraitsWithMediaTypeCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "HttpPayloadTraitsWithMediaType", {})
  .n("RestXmlProtocolClient", "HttpPayloadTraitsWithMediaTypeCommand")
  .f(void 0, void 0)
  .ser(se_HttpPayloadTraitsWithMediaTypeCommand)
  .de(de_HttpPayloadTraitsWithMediaTypeCommand)
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
