// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlNamespacesOutput } from "../models/models_0";
import { de_XmlNamespacesCommand, se_XmlNamespacesCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlNamespacesCommand}.
 */
export interface XmlNamespacesCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlNamespacesCommand}.
 */
export interface XmlNamespacesCommandOutput extends XmlNamespacesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlNamespacesCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlNamespacesCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // XmlNamespacesOutput
 * //   nested: { // XmlNamespaceNested
 * //     foo: "STRING_VALUE",
 * //     values: [ // XmlNamespacedList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlNamespacesCommandInput - {@link XmlNamespacesCommandInput}
 * @returns {@link XmlNamespacesCommandOutput}
 * @see {@link XmlNamespacesCommandInput} for command's `input` shape.
 * @see {@link XmlNamespacesCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class XmlNamespacesCommand extends $Command
  .classBuilder<
    XmlNamespacesCommandInput,
    XmlNamespacesCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("AwsQuery", "XmlNamespaces", {})
  .n("QueryProtocolClient", "XmlNamespacesCommand")
  .f(void 0, void 0)
  .ser(se_XmlNamespacesCommand)
  .de(de_XmlNamespacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlNamespacesOutput;
    };
    sdk: {
      input: XmlNamespacesCommandInput;
      output: XmlNamespacesCommandOutput;
    };
  };
}
