// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { KitchenSink } from "../models/models_0";
import { de_KitchenSinkOperationCommand, se_KitchenSinkOperationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * import { JsonProtocolClient, KitchenSinkOperationCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, KitchenSinkOperationCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // KitchenSink
 *   Blob: "BLOB_VALUE",
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
 *       Blob: "BLOB_VALUE",
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
 * //   Blob: "BLOB_VALUE",
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
 * //       Blob: "BLOB_VALUE",
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
 * @throws {@link ErrorWithoutMembers} (server fault)
 *
 * @throws {@link ErrorWithMembers} (client fault)
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 */
export class KitchenSinkOperationCommand extends $Command<
  KitchenSinkOperationCommandInput,
  KitchenSinkOperationCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: KitchenSinkOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<KitchenSinkOperationCommandInput, KitchenSinkOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "KitchenSinkOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "JsonProtocol",
        operation: "KitchenSinkOperation",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: KitchenSinkOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_KitchenSinkOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<KitchenSinkOperationCommandOutput> {
    return de_KitchenSinkOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
