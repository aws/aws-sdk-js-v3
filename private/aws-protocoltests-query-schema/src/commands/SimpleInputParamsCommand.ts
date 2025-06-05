// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SimpleInputParamsInput } from "../models/models_0";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { SimpleInputParams } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SimpleInputParamsCommand}.
 */
export interface SimpleInputParamsCommandInput extends SimpleInputParamsInput {}
/**
 * @public
 *
 * The output of {@link SimpleInputParamsCommand}.
 */
export interface SimpleInputParamsCommandOutput extends __MetadataBearer {}

/**
 * This test serializes strings, numbers, and boolean values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, SimpleInputParamsCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, SimpleInputParamsCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = { // SimpleInputParamsInput
 *   Foo: "STRING_VALUE",
 *   Bar: "STRING_VALUE",
 *   Baz: true || false,
 *   Bam: Number("int"),
 *   FloatValue: Number("float"),
 *   Boo: Number("double"),
 *   Qux: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   FooEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   IntegerEnum: 1 || 2 || 3,
 * };
 * const command = new SimpleInputParamsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SimpleInputParamsCommandInput - {@link SimpleInputParamsCommandInput}
 * @returns {@link SimpleInputParamsCommandOutput}
 * @see {@link SimpleInputParamsCommandInput} for command's `input` shape.
 * @see {@link SimpleInputParamsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class SimpleInputParamsCommand extends $Command
  .classBuilder<
    SimpleInputParamsCommandInput,
    SimpleInputParamsCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsQuery", "SimpleInputParams", {})
  .n("QueryProtocolClient", "SimpleInputParamsCommand")
  .f(void 0, void 0)
  .sc(SimpleInputParams)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SimpleInputParamsInput;
      output: {};
    };
    sdk: {
      input: SimpleInputParamsCommandInput;
      output: SimpleInputParamsCommandOutput;
    };
  };
}
