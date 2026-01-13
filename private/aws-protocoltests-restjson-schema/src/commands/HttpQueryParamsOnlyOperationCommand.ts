// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HttpQueryParamsOnlyInput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { HttpQueryParamsOnlyOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpQueryParamsOnlyOperationCommand}.
 */
export interface HttpQueryParamsOnlyOperationCommandInput extends HttpQueryParamsOnlyInput {}
/**
 * @public
 *
 * The output of {@link HttpQueryParamsOnlyOperationCommand}.
 */
export interface HttpQueryParamsOnlyOperationCommandOutput extends __MetadataBearer {}

/**
 * This example tests httpQueryParams when no other query parameters exist.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpQueryParamsOnlyOperationCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpQueryParamsOnlyOperationCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpQueryParamsOnlyInput
 *   queryMap: { // QueryMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new HttpQueryParamsOnlyOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpQueryParamsOnlyOperationCommandInput - {@link HttpQueryParamsOnlyOperationCommandInput}
 * @returns {@link HttpQueryParamsOnlyOperationCommandOutput}
 * @see {@link HttpQueryParamsOnlyOperationCommandInput} for command's `input` shape.
 * @see {@link HttpQueryParamsOnlyOperationCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpQueryParamsOnlyOperationCommand extends $Command
  .classBuilder<
    HttpQueryParamsOnlyOperationCommandInput,
    HttpQueryParamsOnlyOperationCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpQueryParamsOnlyOperation", {})
  .n("RestJsonProtocolClient", "HttpQueryParamsOnlyOperationCommand")
  .sc(HttpQueryParamsOnlyOperation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpQueryParamsOnlyInput;
      output: {};
    };
    sdk: {
      input: HttpQueryParamsOnlyOperationCommandInput;
      output: HttpQueryParamsOnlyOperationCommandOutput;
    };
  };
}
