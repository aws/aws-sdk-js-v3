// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { de_NoInputAndNoOutputCommand, se_NoInputAndNoOutputCommand } from "../protocols/Aws_query";
import type { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NoInputAndNoOutputCommand}.
 */
export interface NoInputAndNoOutputCommandInput {}
/**
 * @public
 *
 * The output of {@link NoInputAndNoOutputCommand}.
 */
export interface NoInputAndNoOutputCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response payload because the operation has no input or output.
 *
 * While this should be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, NoInputAndNoOutputCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, NoInputAndNoOutputCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new NoInputAndNoOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NoInputAndNoOutputCommandInput - {@link NoInputAndNoOutputCommandInput}
 * @returns {@link NoInputAndNoOutputCommandOutput}
 * @see {@link NoInputAndNoOutputCommandInput} for command's `input` shape.
 * @see {@link NoInputAndNoOutputCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class NoInputAndNoOutputCommand extends $Command
  .classBuilder<
    NoInputAndNoOutputCommandInput,
    NoInputAndNoOutputCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsQuery", "NoInputAndNoOutput", {})
  .n("QueryProtocolClient", "NoInputAndNoOutputCommand")
  .f(void 0, void 0)
  .ser(se_NoInputAndNoOutputCommand)
  .de(de_NoInputAndNoOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: NoInputAndNoOutputCommandInput;
      output: NoInputAndNoOutputCommandOutput;
    };
  };
}
