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

import { XmlMapsXmlNameOutput } from "../models/models_0";
import { de_XmlMapsXmlNameCommand, se_XmlMapsXmlNameCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlMapsXmlNameCommand}.
 */
export interface XmlMapsXmlNameCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlMapsXmlNameCommand}.
 */
export interface XmlMapsXmlNameCommandOutput extends XmlMapsXmlNameOutput, __MetadataBearer {}

export class XmlMapsXmlNameCommand extends $Command<
  XmlMapsXmlNameCommandInput,
  XmlMapsXmlNameCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: XmlMapsXmlNameCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlMapsXmlNameCommandInput, XmlMapsXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "XmlMapsXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsQuery",
        operation: "XmlMapsXmlName",
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
  private serialize(input: XmlMapsXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_XmlMapsXmlNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlMapsXmlNameCommandOutput> {
    return de_XmlMapsXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
