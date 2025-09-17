// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SimpleScalarStructure } from "../models/models_0";
import { de_SimpleScalarPropertiesCommand, se_SimpleScalarPropertiesCommand } from "../protocols/Rpcv2cbor";
import { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SimpleScalarPropertiesCommand}.
 */
export interface SimpleScalarPropertiesCommandInput extends SimpleScalarStructure {}
/**
 * @public
 *
 * The output of {@link SimpleScalarPropertiesCommand}.
 */
export interface SimpleScalarPropertiesCommandOutput extends SimpleScalarStructure, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, SimpleScalarPropertiesCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"; // ES Modules import
 * // const { RpcV2ProtocolClient, SimpleScalarPropertiesCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = { // SimpleScalarStructure
 *   trueBooleanValue: true || false,
 *   falseBooleanValue: true || false,
 *   byteValue: 0, // BYTE_VALUE
 *   doubleValue: Number("double"),
 *   floatValue: Number("float"),
 *   integerValue: Number("int"),
 *   longValue: Number("long"),
 *   shortValue: Number("short"),
 *   stringValue: "STRING_VALUE",
 *   blobValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new SimpleScalarPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // SimpleScalarStructure
 * //   trueBooleanValue: true || false,
 * //   falseBooleanValue: true || false,
 * //   byteValue: 0, // BYTE_VALUE
 * //   doubleValue: Number("double"),
 * //   floatValue: Number("float"),
 * //   integerValue: Number("int"),
 * //   longValue: Number("long"),
 * //   shortValue: Number("short"),
 * //   stringValue: "STRING_VALUE",
 * //   blobValue: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param SimpleScalarPropertiesCommandInput - {@link SimpleScalarPropertiesCommandInput}
 * @returns {@link SimpleScalarPropertiesCommandOutput}
 * @see {@link SimpleScalarPropertiesCommandInput} for command's `input` shape.
 * @see {@link SimpleScalarPropertiesCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 */
export class SimpleScalarPropertiesCommand extends $Command
  .classBuilder<
    SimpleScalarPropertiesCommandInput,
    SimpleScalarPropertiesCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RpcV2Protocol", "SimpleScalarProperties", {})
  .n("RpcV2ProtocolClient", "SimpleScalarPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_SimpleScalarPropertiesCommand)
  .de(de_SimpleScalarPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SimpleScalarStructure;
      output: SimpleScalarStructure;
    };
    sdk: {
      input: SimpleScalarPropertiesCommandInput;
      output: SimpleScalarPropertiesCommandOutput;
    };
  };
}
