// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PostUnionWithJsonNameInput, PostUnionWithJsonNameOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { PostUnionWithJsonName } from "../schemas/schemas_49_PostUnionWithJsonName";

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
 * import { RestJsonProtocolClient, PostUnionWithJsonNameCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, PostUnionWithJsonNameCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "PostUnionWithJsonName", {})
  .n("RestJsonProtocolClient", "PostUnionWithJsonNameCommand")
  .sc(PostUnionWithJsonName)
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
