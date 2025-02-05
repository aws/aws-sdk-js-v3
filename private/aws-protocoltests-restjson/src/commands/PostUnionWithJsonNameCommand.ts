// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { PostUnionWithJsonNameInput, PostUnionWithJsonNameOutput } from "../models/models_0";
import { de_PostUnionWithJsonNameCommand, se_PostUnionWithJsonNameCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PostUnionWithJsonNameCommand}.
 */
export interface PostUnionWithJsonNameCommandInput extends PostUnionWithJsonNameInput {}
/**
 * @public
 *
 * The output of {@link PostUnionWithJsonNameCommand}.
 */
export interface PostUnionWithJsonNameCommandOutput extends PostUnionWithJsonNameOutput, __MetadataBearer {}

/**
 * This operation defines a union that uses jsonName on some members.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, PostUnionWithJsonNameCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, PostUnionWithJsonNameCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // PostUnionWithJsonNameInput
 *   value: { // UnionWithJsonName Union: only one key present
 *     foo: "STRING_VALUE",
 *     bar: "STRING_VALUE",
 *     baz: "STRING_VALUE",
 *   },
 * };
 * const command = new PostUnionWithJsonNameCommand(input);
 * const response = await client.send(command);
 * // { // PostUnionWithJsonNameOutput
 * //   value: { // UnionWithJsonName Union: only one key present
 * //     foo: "STRING_VALUE",
 * //     bar: "STRING_VALUE",
 * //     baz: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PostUnionWithJsonNameCommandInput - {@link PostUnionWithJsonNameCommandInput}
 * @returns {@link PostUnionWithJsonNameCommandOutput}
 * @see {@link PostUnionWithJsonNameCommandInput} for command's `input` shape.
 * @see {@link PostUnionWithJsonNameCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class PostUnionWithJsonNameCommand extends $Command
  .classBuilder<
    PostUnionWithJsonNameCommandInput,
    PostUnionWithJsonNameCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "PostUnionWithJsonName", {})
  .n("RestJsonProtocolClient", "PostUnionWithJsonNameCommand")
  .f(void 0, void 0)
  .ser(se_PostUnionWithJsonNameCommand)
  .de(de_PostUnionWithJsonNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostUnionWithJsonNameInput;
      output: PostUnionWithJsonNameOutput;
    };
    sdk: {
      input: PostUnionWithJsonNameCommandInput;
      output: PostUnionWithJsonNameCommandOutput;
    };
  };
}
