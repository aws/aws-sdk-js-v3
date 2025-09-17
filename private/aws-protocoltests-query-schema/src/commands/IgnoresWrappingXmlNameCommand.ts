// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IgnoresWrappingXmlNameOutput } from "../models/models_0";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { IgnoresWrappingXmlName } from "../schemas/schemas_19_IgnoresWrappingXmlName";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link IgnoresWrappingXmlNameCommand}.
 */
export interface IgnoresWrappingXmlNameCommandInput {}
/**
 * @public
 *
 * The output of {@link IgnoresWrappingXmlNameCommand}.
 */
export interface IgnoresWrappingXmlNameCommandOutput extends IgnoresWrappingXmlNameOutput, __MetadataBearer {}

/**
 * The xmlName trait on the output structure is ignored in AWS Query.
 *
 * The wrapping element is always operation name + "Response", and
 * inside of that wrapper is another wrapper named operation name + "Result".
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, IgnoresWrappingXmlNameCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, IgnoresWrappingXmlNameCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new IgnoresWrappingXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // IgnoresWrappingXmlNameOutput
 * //   foo: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param IgnoresWrappingXmlNameCommandInput - {@link IgnoresWrappingXmlNameCommandInput}
 * @returns {@link IgnoresWrappingXmlNameCommandOutput}
 * @see {@link IgnoresWrappingXmlNameCommandInput} for command's `input` shape.
 * @see {@link IgnoresWrappingXmlNameCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class IgnoresWrappingXmlNameCommand extends $Command
  .classBuilder<
    IgnoresWrappingXmlNameCommandInput,
    IgnoresWrappingXmlNameCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsQuery", "IgnoresWrappingXmlName", {})
  .n("QueryProtocolClient", "IgnoresWrappingXmlNameCommand")
  .sc(IgnoresWrappingXmlName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: IgnoresWrappingXmlNameOutput;
    };
    sdk: {
      input: IgnoresWrappingXmlNameCommandInput;
      output: IgnoresWrappingXmlNameCommandOutput;
    };
  };
}
