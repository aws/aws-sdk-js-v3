// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { KitchenSink } from "../models/models_0";
import { KitchenSinkOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link KitchenSinkOperationCommand}.
 */
export interface KitchenSinkOperationCommandInput extends KitchenSink {}
/**
 * @public
 *
 * The output of {@link KitchenSinkOperationCommand}.
 */
export interface KitchenSinkOperationCommandOutput extends KitchenSink, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, KitchenSinkOperationCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, KitchenSinkOperationCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json-schema";
 * const config = {}; // type is JsonProtocolClientConfig
 * const client = new JsonProtocolClient(config);
 * const input = { // KitchenSink
 *   Blob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   Boolean: true || false,
 *   Double: Number("double"),
 *   EmptyStruct: {},
 *   Float: Number("float"),
 *   HttpdateTimestamp: new Date("TIMESTAMP"),
 *   Integer: Number("int"),
 *   Iso8601Timestamp: new Date("TIMESTAMP"),
 *   JsonValue: "STRING_VALUE",
 *   ListOfLists: [ // ListOfListOfStrings
 *     [ // ListOfStrings
 *       "STRING_VALUE",
 *     ],
 *   ],
 *   ListOfMapsOfStrings: [ // ListOfMapsOfStrings
 *     { // MapOfStrings
 *       "<keys>": "STRING_VALUE",
 *     },
 *   ],
 *   ListOfStrings: [
 *     "STRING_VALUE",
 *   ],
 *   ListOfStructs: [ // ListOfStructs
 *     { // SimpleStruct
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Long: Number("long"),
 *   MapOfListsOfStrings: { // MapOfListsOfStrings
 *     "<keys>": [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MapOfMaps: { // MapOfMapOfStrings
 *     "<keys>": {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   MapOfStrings: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MapOfStructs: { // MapOfStructs
 *     "<keys>": {
 *       Value: "STRING_VALUE",
 *     },
 *   },
 *   RecursiveList: [ // ListOfKitchenSinks
 *     {
 *       Blob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       Boolean: true || false,
 *       Double: Number("double"),
 *       EmptyStruct: {},
 *       Float: Number("float"),
 *       HttpdateTimestamp: new Date("TIMESTAMP"),
 *       Integer: Number("int"),
 *       Iso8601Timestamp: new Date("TIMESTAMP"),
 *       JsonValue: "STRING_VALUE",
 *       ListOfLists: [
 *         "<ListOfStrings>",
 *       ],
 *       ListOfMapsOfStrings: [
 *         "<MapOfStrings>",
 *       ],
 *       ListOfStrings: "<ListOfStrings>",
 *       ListOfStructs: [
 *         {
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *       Long: Number("long"),
 *       MapOfListsOfStrings: {
 *         "<keys>": "<ListOfStrings>",
 *       },
 *       MapOfMaps: {
 *         "<keys>": "<MapOfStrings>",
 *       },
 *       MapOfStrings: "<MapOfStrings>",
 *       MapOfStructs: {
 *         "<keys>": {
 *           Value: "STRING_VALUE",
 *         },
 *       },
 *       RecursiveList: [
 *         "<KitchenSink>",
 *       ],
 *       RecursiveMap: { // MapOfKitchenSinks
 *         "<keys>": "<KitchenSink>",
 *       },
 *       RecursiveStruct: "<KitchenSink>",
 *       SimpleStruct: "<SimpleStruct>",
 *       String: "STRING_VALUE",
 *       StructWithJsonName: { // StructWithJsonName
 *         Value: "STRING_VALUE",
 *       },
 *       Timestamp: new Date("TIMESTAMP"),
 *       UnixTimestamp: new Date("TIMESTAMP"),
 *     },
 *   ],
 *   RecursiveMap: {
 *     "<keys>": "<KitchenSink>",
 *   },
 *   RecursiveStruct: "<KitchenSink>",
 *   SimpleStruct: "<SimpleStruct>",
 *   String: "STRING_VALUE",
 *   StructWithJsonName: {
 *     Value: "STRING_VALUE",
 *   },
 *   Timestamp: new Date("TIMESTAMP"),
 *   UnixTimestamp: new Date("TIMESTAMP"),
 * };
 * const command = new KitchenSinkOperationCommand(input);
 * const response = await client.send(command);
 * // { // KitchenSink
 * //   Blob: new Uint8Array(),
 * //   Boolean: true || false,
 * //   Double: Number("double"),
 * //   EmptyStruct: {},
 * //   Float: Number("float"),
 * //   HttpdateTimestamp: new Date("TIMESTAMP"),
 * //   Integer: Number("int"),
 * //   Iso8601Timestamp: new Date("TIMESTAMP"),
 * //   JsonValue: "STRING_VALUE",
 * //   ListOfLists: [ // ListOfListOfStrings
 * //     [ // ListOfStrings
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   ListOfMapsOfStrings: [ // ListOfMapsOfStrings
 * //     { // MapOfStrings
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * //   ListOfStrings: [
 * //     "STRING_VALUE",
 * //   ],
 * //   ListOfStructs: [ // ListOfStructs
 * //     { // SimpleStruct
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Long: Number("long"),
 * //   MapOfListsOfStrings: { // MapOfListsOfStrings
 * //     "<keys>": [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   MapOfMaps: { // MapOfMapOfStrings
 * //     "<keys>": {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   MapOfStrings: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   MapOfStructs: { // MapOfStructs
 * //     "<keys>": {
 * //       Value: "STRING_VALUE",
 * //     },
 * //   },
 * //   RecursiveList: [ // ListOfKitchenSinks
 * //     {
 * //       Blob: new Uint8Array(),
 * //       Boolean: true || false,
 * //       Double: Number("double"),
 * //       EmptyStruct: {},
 * //       Float: Number("float"),
 * //       HttpdateTimestamp: new Date("TIMESTAMP"),
 * //       Integer: Number("int"),
 * //       Iso8601Timestamp: new Date("TIMESTAMP"),
 * //       JsonValue: "STRING_VALUE",
 * //       ListOfLists: [
 * //         "<ListOfStrings>",
 * //       ],
 * //       ListOfMapsOfStrings: [
 * //         "<MapOfStrings>",
 * //       ],
 * //       ListOfStrings: "<ListOfStrings>",
 * //       ListOfStructs: [
 * //         {
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Long: Number("long"),
 * //       MapOfListsOfStrings: {
 * //         "<keys>": "<ListOfStrings>",
 * //       },
 * //       MapOfMaps: {
 * //         "<keys>": "<MapOfStrings>",
 * //       },
 * //       MapOfStrings: "<MapOfStrings>",
 * //       MapOfStructs: {
 * //         "<keys>": {
 * //           Value: "STRING_VALUE",
 * //         },
 * //       },
 * //       RecursiveList: [
 * //         "<KitchenSink>",
 * //       ],
 * //       RecursiveMap: { // MapOfKitchenSinks
 * //         "<keys>": "<KitchenSink>",
 * //       },
 * //       RecursiveStruct: "<KitchenSink>",
 * //       SimpleStruct: "<SimpleStruct>",
 * //       String: "STRING_VALUE",
 * //       StructWithJsonName: { // StructWithJsonName
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       UnixTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   RecursiveMap: {
 * //     "<keys>": "<KitchenSink>",
 * //   },
 * //   RecursiveStruct: "<KitchenSink>",
 * //   SimpleStruct: "<SimpleStruct>",
 * //   String: "STRING_VALUE",
 * //   StructWithJsonName: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   Timestamp: new Date("TIMESTAMP"),
 * //   UnixTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param KitchenSinkOperationCommandInput - {@link KitchenSinkOperationCommandInput}
 * @returns {@link KitchenSinkOperationCommandOutput}
 * @see {@link KitchenSinkOperationCommandInput} for command's `input` shape.
 * @see {@link KitchenSinkOperationCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link ErrorWithMembers} (client fault)
 *
 * @throws {@link ErrorWithoutMembers} (server fault)
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class KitchenSinkOperationCommand extends command<KitchenSinkOperationCommandInput, KitchenSinkOperationCommandOutput>(
  _ep0,
  _mw0,
  "KitchenSinkOperation",
  KitchenSinkOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: KitchenSink;
      output: KitchenSink;
    };
    sdk: {
      input: KitchenSinkOperationCommandInput;
      output: KitchenSinkOperationCommandOutput;
    };
  };
}
