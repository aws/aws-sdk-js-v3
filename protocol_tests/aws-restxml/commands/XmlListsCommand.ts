import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlListsInputOutput } from "../models/models_0";
import { deserializeAws_restXmlXmlListsCommand, serializeAws_restXmlXmlListsCommand } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type XmlListsCommandInput = XmlListsInputOutput;
export type XmlListsCommandOutput = XmlListsInputOutput & __MetadataBearer;

/**
 * This test case serializes XML lists for the following cases for both
 * input and output:
 *
 * 1. Normal XML lists.
 * 2. Normal XML sets.
 * 3. XML lists of lists.
 * 4. XML lists with @xmlName on its members
 * 5. Flattened XML lists.
 * 6. Flattened XML lists with @xmlName.
 * 7. Flattened XML lists with @xmlNamespace.
 * 8. Lists of structures.
 */
export class XmlListsCommand extends $Command<
  XmlListsCommandInput,
  XmlListsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlListsCommandInput) {
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
  ): Handler<XmlListsCommandInput, XmlListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: XmlListsInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: XmlListsInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlXmlListsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlListsCommandOutput> {
    return deserializeAws_restXmlXmlListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
