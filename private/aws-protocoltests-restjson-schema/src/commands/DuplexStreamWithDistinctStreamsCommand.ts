// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { DuplexStreamWithDistinctStreamsInput, DuplexStreamWithDistinctStreamsOutput } from "../models/models_0";
import { DuplexStreamWithDistinctStreams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DuplexStreamWithDistinctStreamsCommand}.
 */
export interface DuplexStreamWithDistinctStreamsCommandInput extends DuplexStreamWithDistinctStreamsInput {}
/**
 * @public
 *
 * The output of {@link DuplexStreamWithDistinctStreamsCommand}.
 */
export interface DuplexStreamWithDistinctStreamsCommandOutput extends DuplexStreamWithDistinctStreamsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DuplexStreamWithDistinctStreamsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, DuplexStreamWithDistinctStreamsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // DuplexStreamWithDistinctStreamsInput
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
 * const command = new DuplexStreamWithDistinctStreamsCommand(input);
 * const response = await client.send(command);
 * // { // DuplexStreamWithDistinctStreamsOutput
 * //   stream: { // SingletonEventStream Union: only one key present
 * //     singleton: { // SingletonEvent
 * //       value: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DuplexStreamWithDistinctStreamsCommandInput - {@link DuplexStreamWithDistinctStreamsCommandInput}
 * @returns {@link DuplexStreamWithDistinctStreamsCommandOutput}
 * @see {@link DuplexStreamWithDistinctStreamsCommandInput} for command's `input` shape.
 * @see {@link DuplexStreamWithDistinctStreamsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class DuplexStreamWithDistinctStreamsCommand extends command<DuplexStreamWithDistinctStreamsCommandInput, DuplexStreamWithDistinctStreamsCommandOutput>(
  _ep0,
  _mw1,
  "DuplexStreamWithDistinctStreams",
  DuplexStreamWithDistinctStreams$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DuplexStreamWithDistinctStreamsInput;
      output: DuplexStreamWithDistinctStreamsOutput;
    };
    sdk: {
      input: DuplexStreamWithDistinctStreamsCommandInput;
      output: DuplexStreamWithDistinctStreamsCommandOutput;
    };
  };
}
