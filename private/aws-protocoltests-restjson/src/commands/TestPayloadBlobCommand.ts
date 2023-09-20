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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { TestPayloadBlobInputOutput } from "../models/models_0";
import { de_TestPayloadBlobCommand, se_TestPayloadBlobCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type TestPayloadBlobCommandInputType = Omit<TestPayloadBlobInputOutput, "data"> & {
  data?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link TestPayloadBlobCommand}.
 */
export interface TestPayloadBlobCommandInput extends TestPayloadBlobCommandInputType {}
/**
 * @public
 */
export type TestPayloadBlobCommandOutputType = Omit<TestPayloadBlobInputOutput, "data"> & {
  data?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link TestPayloadBlobCommand}.
 */
export interface TestPayloadBlobCommandOutput extends TestPayloadBlobCommandOutputType, __MetadataBearer {}

/**
 * @public
 * This example operation serializes a payload targeting a blob.
 *
 * The Blob shape is not structured content and we cannot
 * make assumptions about what data will be sent. This test ensures
 * only a generic "Content-Type: application/octet-stream" header
 * is used, and that we are not treating an empty body as an
 * empty JSON document.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestPayloadBlobCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TestPayloadBlobCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // TestPayloadBlobInputOutput
 *   contentType: "STRING_VALUE",
 *   data: "BLOB_VALUE",
 * };
 * const command = new TestPayloadBlobCommand(input);
 * const response = await client.send(command);
 * // { // TestPayloadBlobInputOutput
 * //   contentType: "STRING_VALUE",
 * //   data: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param TestPayloadBlobCommandInput - {@link TestPayloadBlobCommandInput}
 * @returns {@link TestPayloadBlobCommandOutput}
 * @see {@link TestPayloadBlobCommandInput} for command's `input` shape.
 * @see {@link TestPayloadBlobCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class TestPayloadBlobCommand extends $Command<
  TestPayloadBlobCommandInput,
  TestPayloadBlobCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: TestPayloadBlobCommandInput) {
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
  ): Handler<TestPayloadBlobCommandInput, TestPayloadBlobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "TestPayloadBlobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "TestPayloadBlob",
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
  private serialize(input: TestPayloadBlobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestPayloadBlobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestPayloadBlobCommandOutput> {
    return de_TestPayloadBlobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
