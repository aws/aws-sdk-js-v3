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

import { XmlTimestampsInputOutput } from "../models/models_0";
import { de_XmlTimestampsCommand, se_XmlTimestampsCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlTimestampsCommand}.
 */
export interface XmlTimestampsCommandInput extends XmlTimestampsInputOutput {}
/**
 * @public
 *
 * The output of {@link XmlTimestampsCommand}.
 */
export interface XmlTimestampsCommandOutput extends XmlTimestampsInputOutput, __MetadataBearer {}

/**
 * @public
 * This tests how timestamps are serialized, including using the
 * default format of date-time and various @timestampFormat trait
 * values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlTimestampsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlTimestampsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlTimestampsInputOutput
 *   normal: new Date("TIMESTAMP"),
 *   dateTime: new Date("TIMESTAMP"),
 *   dateTimeOnTarget: new Date("TIMESTAMP"),
 *   epochSeconds: new Date("TIMESTAMP"),
 *   epochSecondsOnTarget: new Date("TIMESTAMP"),
 *   httpDate: new Date("TIMESTAMP"),
 *   httpDateOnTarget: new Date("TIMESTAMP"),
 * };
 * const command = new XmlTimestampsCommand(input);
 * const response = await client.send(command);
 * // { // XmlTimestampsInputOutput
 * //   normal: new Date("TIMESTAMP"),
 * //   dateTime: new Date("TIMESTAMP"),
 * //   dateTimeOnTarget: new Date("TIMESTAMP"),
 * //   epochSeconds: new Date("TIMESTAMP"),
 * //   epochSecondsOnTarget: new Date("TIMESTAMP"),
 * //   httpDate: new Date("TIMESTAMP"),
 * //   httpDateOnTarget: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param XmlTimestampsCommandInput - {@link XmlTimestampsCommandInput}
 * @returns {@link XmlTimestampsCommandOutput}
 * @see {@link XmlTimestampsCommandInput} for command's `input` shape.
 * @see {@link XmlTimestampsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class XmlTimestampsCommand extends $Command<
  XmlTimestampsCommandInput,
  XmlTimestampsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: XmlTimestampsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlTimestampsCommandInput, XmlTimestampsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlTimestampsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "XmlTimestamps",
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
  private serialize(input: XmlTimestampsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_XmlTimestampsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlTimestampsCommandOutput> {
    return de_XmlTimestampsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
