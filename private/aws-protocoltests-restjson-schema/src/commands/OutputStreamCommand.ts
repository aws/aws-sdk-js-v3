// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { OutputStreamOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { OutputStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OutputStreamCommand}.
 */
export interface OutputStreamCommandInput {}
/**
 * @public
 *
 * The output of {@link OutputStreamCommand}.
 */
export interface OutputStreamCommandOutput extends OutputStreamOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, OutputStreamCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, OutputStreamCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new OutputStreamCommand(input);
 * const response = await client.send(command);
 * // { // OutputStreamOutput
 * //   stream: { // EventStream Union: only one key present
 * //     headers: { // HeadersEvent
 * //       booleanHeader: true || false,
 * //       byteHeader: 0, // BYTE_VALUE
 * //       shortHeader: Number("short"),
 * //       intHeader: Number("int"),
 * //       longHeader: Number("long"),
 * //       blobHeader: new Uint8Array(),
 * //       stringHeader: "STRING_VALUE",
 * //       timestampHeader: new Date("TIMESTAMP"),
 * //     },
 * //     blobPayload: { // BlobPayloadEvent
 * //       payload: new Uint8Array(),
 * //     },
 * //     stringPayload: { // StringPayloadEvent
 * //       payload: "STRING_VALUE",
 * //     },
 * //     structurePayload: { // StructurePayloadEvent
 * //       payload: { // PayloadStructure
 * //         structureMember: "STRING_VALUE",
 * //       },
 * //     },
 * //     unionPayload: { // UnionPayloadEvent
 * //       payload: { // PayloadUnion Union: only one key present
 * //         unionMember: "STRING_VALUE",
 * //       },
 * //     },
 * //     headersAndExplicitPayload: { // HeadersAndExplicitPayloadEvent
 * //       header: "STRING_VALUE",
 * //       payload: {
 * //         structureMember: "STRING_VALUE",
 * //       },
 * //     },
 * //     headersAndImplicitPayload: { // HeadersAndImplicitPayloadEvent
 * //       header: "STRING_VALUE",
 * //       payload: "STRING_VALUE",
 * //     },
 * //     error: { // ErrorEvent
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param OutputStreamCommandInput - {@link OutputStreamCommandInput}
 * @returns {@link OutputStreamCommandOutput}
 * @see {@link OutputStreamCommandInput} for command's `input` shape.
 * @see {@link OutputStreamCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class OutputStreamCommand extends $Command
  .classBuilder<
    OutputStreamCommandInput,
    OutputStreamCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "OutputStream", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("RestJsonProtocolClient", "OutputStreamCommand")
  .sc(OutputStream$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: OutputStreamOutput;
    };
    sdk: {
      input: OutputStreamCommandInput;
      output: OutputStreamCommandOutput;
    };
  };
}
