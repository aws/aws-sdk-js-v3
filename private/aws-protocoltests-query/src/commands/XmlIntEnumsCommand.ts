// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlIntEnumsOutput } from "../models/models_0";
import { de_XmlIntEnumsCommand, se_XmlIntEnumsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlIntEnumsCommand}.
 */
export interface XmlIntEnumsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlIntEnumsCommand}.
 */
export interface XmlIntEnumsCommandOutput extends XmlIntEnumsOutput, __MetadataBearer {}

/**
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlIntEnumsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlIntEnumsCommand(input);
 * const response = await client.send(command);
 * // { // XmlIntEnumsOutput
 * //   intEnum1: 1 || 2 || 3,
 * //   intEnum2: 1 || 2 || 3,
 * //   intEnum3: 1 || 2 || 3,
 * //   intEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * //   intEnumSet: [ // IntegerEnumSet
 * //     1 || 2 || 3,
 * //   ],
 * //   intEnumMap: { // IntegerEnumMap
 * //     "<keys>": 1 || 2 || 3,
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlIntEnumsCommandInput - {@link XmlIntEnumsCommandInput}
 * @returns {@link XmlIntEnumsCommandOutput}
 * @see {@link XmlIntEnumsCommandInput} for command's `input` shape.
 * @see {@link XmlIntEnumsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class XmlIntEnumsCommand extends $Command
  .classBuilder<
    XmlIntEnumsCommandInput,
    XmlIntEnumsCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("AwsQuery", "XmlIntEnums", {})
  .n("QueryProtocolClient", "XmlIntEnumsCommand")
  .f(void 0, void 0)
  .ser(se_XmlIntEnumsCommand)
  .de(de_XmlIntEnumsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlIntEnumsOutput;
    };
    sdk: {
      input: XmlIntEnumsCommandInput;
      output: XmlIntEnumsCommandOutput;
    };
  };
}
