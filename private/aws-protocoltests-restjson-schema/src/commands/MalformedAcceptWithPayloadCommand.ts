// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedAcceptWithPayloadOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedAcceptWithPayload } from "../schemas/schemas_4_WithPayload";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedAcceptWithPayloadCommand}.
 */
export interface MalformedAcceptWithPayloadCommandInput {}
/**
 * @public
 */
export type MalformedAcceptWithPayloadCommandOutputType = Omit<MalformedAcceptWithPayloadOutput, "payload"> & {
  payload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link MalformedAcceptWithPayloadCommand}.
 */
export interface MalformedAcceptWithPayloadCommandOutput
  extends MalformedAcceptWithPayloadCommandOutputType,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedAcceptWithPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedAcceptWithPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new MalformedAcceptWithPayloadCommand(input);
 * const response = await client.send(command);
 * // { // MalformedAcceptWithPayloadOutput
 * //   payload: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param MalformedAcceptWithPayloadCommandInput - {@link MalformedAcceptWithPayloadCommandInput}
 * @returns {@link MalformedAcceptWithPayloadCommandOutput}
 * @see {@link MalformedAcceptWithPayloadCommandInput} for command's `input` shape.
 * @see {@link MalformedAcceptWithPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedAcceptWithPayloadCommand extends $Command
  .classBuilder<
    MalformedAcceptWithPayloadCommandInput,
    MalformedAcceptWithPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedAcceptWithPayload", {})
  .n("RestJsonProtocolClient", "MalformedAcceptWithPayloadCommand")
  .sc(MalformedAcceptWithPayload)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: MalformedAcceptWithPayloadOutput;
    };
    sdk: {
      input: MalformedAcceptWithPayloadCommandInput;
      output: MalformedAcceptWithPayloadCommandOutput;
    };
  };
}
