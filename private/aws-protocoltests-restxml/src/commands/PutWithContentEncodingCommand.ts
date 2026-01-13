// smithy-typescript generated code
import { getCompressionPlugin } from "@smithy/middleware-compression";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutWithContentEncodingInput } from "../models/models_0";
import { de_PutWithContentEncodingCommand, se_PutWithContentEncodingCommand } from "../protocols/Aws_restXml";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutWithContentEncodingCommand}.
 */
export interface PutWithContentEncodingCommandInput extends PutWithContentEncodingInput {}
/**
 * @public
 *
 * The output of {@link PutWithContentEncodingCommand}.
 */
export interface PutWithContentEncodingCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, PutWithContentEncodingCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, PutWithContentEncodingCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // PutWithContentEncodingInput
 *   encoding: "STRING_VALUE",
 *   data: "STRING_VALUE",
 * };
 * const command = new PutWithContentEncodingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWithContentEncodingCommandInput - {@link PutWithContentEncodingCommandInput}
 * @returns {@link PutWithContentEncodingCommandOutput}
 * @see {@link PutWithContentEncodingCommandInput} for command's `input` shape.
 * @see {@link PutWithContentEncodingCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class PutWithContentEncodingCommand extends $Command
  .classBuilder<
    PutWithContentEncodingCommandInput,
    PutWithContentEncodingCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getCompressionPlugin(config, {
        'encodings': ['gzip'],
      }),
    ];
  })
  .s("RestXml", "PutWithContentEncoding", {})
  .n("RestXmlProtocolClient", "PutWithContentEncodingCommand")
  .f(void 0, void 0)
  .ser(se_PutWithContentEncodingCommand)
  .de(de_PutWithContentEncodingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWithContentEncodingInput;
      output: {};
    };
    sdk: {
      input: PutWithContentEncodingCommandInput;
      output: PutWithContentEncodingCommandOutput;
    };
  };
}
