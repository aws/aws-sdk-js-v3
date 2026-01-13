// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SimpleScalarXmlPropertiesOutput } from "../models/models_0";
import type { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { SimpleScalarXmlProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SimpleScalarXmlPropertiesCommand}.
 */
export interface SimpleScalarXmlPropertiesCommandInput {}
/**
 * @public
 *
 * The output of {@link SimpleScalarXmlPropertiesCommand}.
 */
export interface SimpleScalarXmlPropertiesCommandOutput extends SimpleScalarXmlPropertiesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, SimpleScalarXmlPropertiesCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, SimpleScalarXmlPropertiesCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new SimpleScalarXmlPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // SimpleScalarXmlPropertiesOutput
 * //   stringValue: "STRING_VALUE",
 * //   emptyStringValue: "STRING_VALUE",
 * //   trueBooleanValue: true || false,
 * //   falseBooleanValue: true || false,
 * //   byteValue: 0, // BYTE_VALUE
 * //   shortValue: Number("short"),
 * //   integerValue: Number("int"),
 * //   longValue: Number("long"),
 * //   floatValue: Number("float"),
 * //   doubleValue: Number("double"),
 * // };
 *
 * ```
 *
 * @param SimpleScalarXmlPropertiesCommandInput - {@link SimpleScalarXmlPropertiesCommandInput}
 * @returns {@link SimpleScalarXmlPropertiesCommandOutput}
 * @see {@link SimpleScalarXmlPropertiesCommandInput} for command's `input` shape.
 * @see {@link SimpleScalarXmlPropertiesCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class SimpleScalarXmlPropertiesCommand extends $Command
  .classBuilder<
    SimpleScalarXmlPropertiesCommandInput,
    SimpleScalarXmlPropertiesCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsQuery", "SimpleScalarXmlProperties", {})
  .n("QueryProtocolClient", "SimpleScalarXmlPropertiesCommand")
  .sc(SimpleScalarXmlProperties$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: SimpleScalarXmlPropertiesOutput;
    };
    sdk: {
      input: SimpleScalarXmlPropertiesCommandInput;
      output: SimpleScalarXmlPropertiesCommandOutput;
    };
  };
}
