// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EnumPayloadInput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { HttpEnumPayload } from "../schemas/schemas_0";

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
 * import { RestJsonProtocolClient, HttpEnumPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpEnumPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class HttpEnumPayloadCommand extends $Command
  .classBuilder<
    HttpEnumPayloadCommandInput,
    HttpEnumPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpEnumPayload", {})
  .n("RestJsonProtocolClient", "HttpEnumPayloadCommand")
  .sc(HttpEnumPayload)
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
