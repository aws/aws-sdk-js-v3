// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RpcV2CborListInputOutput } from "../models/models_0";
import type { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";
import { RpcV2CborLists } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RpcV2CborListsCommand}.
 */
export interface RpcV2CborListsCommandInput extends RpcV2CborListInputOutput {}
/**
 * @public
 *
 * The output of {@link RpcV2CborListsCommand}.
 */
export interface RpcV2CborListsCommandOutput extends RpcV2CborListInputOutput, __MetadataBearer {}

/**
 * This test case serializes JSON lists for the following cases for both
 * input and output:
 *
 * 1. Normal lists.
 * 2. Normal sets.
 * 3. Lists of lists.
 * 4. Lists of structures.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, RpcV2CborListsCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"; // ES Modules import
 * // const { RpcV2ProtocolClient, RpcV2CborListsCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = { // RpcV2CborListInputOutput
 *   stringList: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   stringSet: [ // StringSet
 *     "STRING_VALUE",
 *   ],
 *   integerList: [ // IntegerList
 *     Number("int"),
 *   ],
 *   booleanList: [ // BooleanList
 *     true || false,
 *   ],
 *   timestampList: [ // TimestampList
 *     new Date("TIMESTAMP"),
 *   ],
 *   enumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   intEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   nestedStringList: [ // NestedStringList
 *     [
 *       "STRING_VALUE",
 *     ],
 *   ],
 *   structureList: [ // StructureList
 *     { // StructureListMember
 *       a: "STRING_VALUE",
 *       b: "STRING_VALUE",
 *     },
 *   ],
 *   blobList: [ // BlobList
 *     new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   ],
 * };
 * const command = new RpcV2CborListsCommand(input);
 * const response = await client.send(command);
 * // { // RpcV2CborListInputOutput
 * //   stringList: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   stringSet: [ // StringSet
 * //     "STRING_VALUE",
 * //   ],
 * //   integerList: [ // IntegerList
 * //     Number("int"),
 * //   ],
 * //   booleanList: [ // BooleanList
 * //     true || false,
 * //   ],
 * //   timestampList: [ // TimestampList
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   enumList: [ // FooEnumList
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   intEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * //   nestedStringList: [ // NestedStringList
 * //     [
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   structureList: [ // StructureList
 * //     { // StructureListMember
 * //       a: "STRING_VALUE",
 * //       b: "STRING_VALUE",
 * //     },
 * //   ],
 * //   blobList: [ // BlobList
 * //     new Uint8Array(),
 * //   ],
 * // };
 *
 * ```
 *
 * @param RpcV2CborListsCommandInput - {@link RpcV2CborListsCommandInput}
 * @returns {@link RpcV2CborListsCommandOutput}
 * @see {@link RpcV2CborListsCommandInput} for command's `input` shape.
 * @see {@link RpcV2CborListsCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 * @public
 */
export class RpcV2CborListsCommand extends $Command
  .classBuilder<
    RpcV2CborListsCommandInput,
    RpcV2CborListsCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RpcV2Protocol", "RpcV2CborLists", {})
  .n("RpcV2ProtocolClient", "RpcV2CborListsCommand")
  .sc(RpcV2CborLists)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RpcV2CborListInputOutput;
      output: RpcV2CborListInputOutput;
    };
    sdk: {
      input: RpcV2CborListsCommandInput;
      output: RpcV2CborListsCommandOutput;
    };
  };
}
