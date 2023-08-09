// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { HttpPayloadTraitsInputOutput } from "../models/models_0";
import { de_HttpPayloadTraitsCommand, se_HttpPayloadTraitsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type HttpPayloadTraitsCommandInputType = Omit<HttpPayloadTraitsInputOutput, "blob"> & {
  blob?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link HttpPayloadTraitsCommand}.
 */
export interface HttpPayloadTraitsCommandInput extends HttpPayloadTraitsCommandInputType {}
/**
 * @public
 */
export type HttpPayloadTraitsCommandOutputType = Omit<HttpPayloadTraitsInputOutput, "blob"> & {
  blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link HttpPayloadTraitsCommand}.
 */
export interface HttpPayloadTraitsCommandOutput extends HttpPayloadTraitsCommandOutputType, __MetadataBearer {}

/**
 * @public
 * This examples serializes a blob shape in the payload.
 *
 * In this example, no JSON document is synthesized because the payload is
 * not a structure or a union type.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadTraitsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadTraitsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadTraitsInputOutput
 *   foo: "STRING_VALUE",
 *   blob: "BLOB_VALUE",
 * };
 * const command = new HttpPayloadTraitsCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadTraitsInputOutput
 * //   foo: "STRING_VALUE",
 * //   blob: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param HttpPayloadTraitsCommandInput - {@link HttpPayloadTraitsCommandInput}
 * @returns {@link HttpPayloadTraitsCommandOutput}
 * @see {@link HttpPayloadTraitsCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadTraitsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class HttpPayloadTraitsCommand extends $Command<
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPayloadTraitsCommandInput) {
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
  ): Handler<HttpPayloadTraitsCommandInput, HttpPayloadTraitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPayloadTraitsCommand";
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
  private serialize(input: HttpPayloadTraitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HttpPayloadTraitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadTraitsCommandOutput> {
    return de_HttpPayloadTraitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
