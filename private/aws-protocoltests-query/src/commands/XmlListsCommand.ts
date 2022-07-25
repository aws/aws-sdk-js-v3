// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { XmlListsOutput, XmlListsOutputFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_queryXmlListsCommand, serializeAws_queryXmlListsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

export interface XmlListsCommandInput {}
export interface XmlListsCommandOutput extends XmlListsOutput, __MetadataBearer {}

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
 * 7. Lists of structures.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlListsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlListsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const command = new XmlListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link XmlListsCommandInput} for command's `input` shape.
 * @see {@link XmlListsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 */
export class XmlListsCommand extends $Command<
  XmlListsCommandInput,
  XmlListsCommandOutput,
  QueryProtocolClientResolvedConfig
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
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlListsCommandInput, XmlListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "XmlListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: XmlListsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryXmlListsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlListsCommandOutput> {
    return deserializeAws_queryXmlListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
