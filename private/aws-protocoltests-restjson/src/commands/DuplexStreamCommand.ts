// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  type DuplexStreamInput,
  type DuplexStreamOutput,
  DuplexStreamInputFilterSensitiveLog,
  DuplexStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DuplexStreamCommand, se_DuplexStreamCommand } from "../protocols/Aws_restJson1";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DuplexStreamCommand}.
 */
export interface DuplexStreamCommandInput extends DuplexStreamInput {}
/**
 * @public
 *
 * The output of {@link DuplexStreamCommand}.
 */
export interface DuplexStreamCommandOutput extends DuplexStreamOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DuplexStreamCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, DuplexStreamCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // DuplexStreamInput
 *   stream: { // EventStream Union: only one key present
 *     headers: { // HeadersEvent
 *       booleanHeader: true || false,
 *       byteHeader: 0, // BYTE_VALUE
 *       shortHeader: Number("short"),
 *       intHeader: Number("int"),
 *       longHeader: Number("long"),
 *       blobHeader: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       stringHeader: "STRING_VALUE",
 *       timestampHeader: new Date("TIMESTAMP"),
 *     },
 *     blobPayload: { // BlobPayloadEvent
 *       payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     },
 *     stringPayload: { // StringPayloadEvent
 *       payload: "STRING_VALUE",
 *     },
 *     structurePayload: { // StructurePayloadEvent
 *       payload: { // PayloadStructure
 *         structureMember: "STRING_VALUE",
 *       },
 *     },
 *     unionPayload: { // UnionPayloadEvent
 *       payload: { // PayloadUnion Union: only one key present
 *         unionMember: "STRING_VALUE",
 *       },
 *     },
 *     headersAndExplicitPayload: { // HeadersAndExplicitPayloadEvent
 *       header: "STRING_VALUE",
 *       payload: {
 *         structureMember: "STRING_VALUE",
 *       },
 *     },
 *     headersAndImplicitPayload: { // HeadersAndImplicitPayloadEvent
 *       header: "STRING_VALUE",
 *       payload: "STRING_VALUE",
 *     },
 *     error: { // ErrorEvent
 *       message: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new DuplexStreamCommand(input);
 * const response = await client.send(command);
 * // { // DuplexStreamOutput
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
 * @param DuplexStreamCommandInput - {@link DuplexStreamCommandInput}
 * @returns {@link DuplexStreamCommandOutput}
 * @see {@link DuplexStreamCommandInput} for command's `input` shape.
 * @see {@link DuplexStreamCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class DuplexStreamCommand extends $Command
  .classBuilder<
    DuplexStreamCommandInput,
    DuplexStreamCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
    ];
  })
  .s("RestJson", "DuplexStream", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("RestJsonProtocolClient", "DuplexStreamCommand")
  .f(DuplexStreamInputFilterSensitiveLog, DuplexStreamOutputFilterSensitiveLog)
  .ser(se_DuplexStreamCommand)
  .de(de_DuplexStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DuplexStreamInput;
      output: DuplexStreamOutput;
    };
    sdk: {
      input: DuplexStreamCommandInput;
      output: DuplexStreamCommandOutput;
    };
  };
}
