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
} from "@smithy/types";

import { UnionInputOutput } from "../models/models_0";
import { de_JsonUnionsCommand, se_JsonUnionsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link JsonUnionsCommand}.
 */
export interface JsonUnionsCommandInput extends UnionInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonUnionsCommand}.
 */
export interface JsonUnionsCommandOutput extends UnionInputOutput, __MetadataBearer {}

/**
 * @public
 * This operation uses unions for inputs and outputs.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonUnionsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonUnionsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // UnionInputOutput
 *   contents: { // MyUnion Union: only one key present
 *     stringValue: "STRING_VALUE",
 *     booleanValue: true || false,
 *     numberValue: Number("int"),
 *     blobValue: "BLOB_VALUE",
 *     timestampValue: new Date("TIMESTAMP"),
 *     enumValue: "Foo" || "Baz" || "Bar" || "1" || "0",
 *     listValue: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     mapValue: { // StringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     structureValue: { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *     renamedStructureValue: { // GreetingStruct
 *       salutation: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new JsonUnionsCommand(input);
 * const response = await client.send(command);
 * // { // UnionInputOutput
 * //   contents: { // MyUnion Union: only one key present
 * //     stringValue: "STRING_VALUE",
 * //     booleanValue: true || false,
 * //     numberValue: Number("int"),
 * //     blobValue: "BLOB_VALUE",
 * //     timestampValue: new Date("TIMESTAMP"),
 * //     enumValue: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //     listValue: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     mapValue: { // StringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     structureValue: { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //     renamedStructureValue: { // GreetingStruct
 * //       salutation: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonUnionsCommandInput - {@link JsonUnionsCommandInput}
 * @returns {@link JsonUnionsCommandOutput}
 * @see {@link JsonUnionsCommandInput} for command's `input` shape.
 * @see {@link JsonUnionsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class JsonUnionsCommand extends $Command<
  JsonUnionsCommandInput,
  JsonUnionsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: JsonUnionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<JsonUnionsCommandInput, JsonUnionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "JsonUnionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: JsonUnionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_JsonUnionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonUnionsCommandOutput> {
    return de_JsonUnionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
