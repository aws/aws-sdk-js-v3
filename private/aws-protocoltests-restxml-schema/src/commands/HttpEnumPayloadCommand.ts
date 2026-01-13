// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EnumPayloadInput } from "../models/models_0";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";
import { HttpEnumPayload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpEnumPayloadCommand}.
 */
export interface HttpEnumPayloadCommandInput extends EnumPayloadInput {}
/**
 * @public
 *
 * The output of {@link HttpEnumPayloadCommand}.
 */
export interface HttpEnumPayloadCommandOutput extends EnumPayloadInput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpEnumPayloadCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpEnumPayloadCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // EnumPayloadInput
 *   payload: "enumvalue",
 * };
 * const command = new HttpEnumPayloadCommand(input);
 * const response = await client.send(command);
 * // { // EnumPayloadInput
 * //   payload: "enumvalue",
 * // };
 *
 * ```
 *
 * @param HttpEnumPayloadCommandInput - {@link HttpEnumPayloadCommandInput}
 * @returns {@link HttpEnumPayloadCommandOutput}
 * @see {@link HttpEnumPayloadCommandInput} for command's `input` shape.
 * @see {@link HttpEnumPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class HttpEnumPayloadCommand extends $Command
  .classBuilder<
    HttpEnumPayloadCommandInput,
    HttpEnumPayloadCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "HttpEnumPayload", {})
  .n("RestXmlProtocolClient", "HttpEnumPayloadCommand")
  .sc(HttpEnumPayload$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnumPayloadInput;
      output: EnumPayloadInput;
    };
    sdk: {
      input: HttpEnumPayloadCommandInput;
      output: HttpEnumPayloadCommandOutput;
    };
  };
}
