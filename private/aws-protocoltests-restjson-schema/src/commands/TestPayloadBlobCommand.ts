// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { TestPayloadBlobInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { TestPayloadBlob } from "../schemas/schemas_3_Blob";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * import { RestJsonProtocolClient, TestPayloadBlobCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, TestPayloadBlobCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // TestPayloadBlobInputOutput
 *   contentType: "STRING_VALUE",
 *   data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new TestPayloadBlobCommand(input);
 * const response = await client.send(command);
 * // { // TestPayloadBlobInputOutput
 * //   contentType: "STRING_VALUE",
 * //   data: new Uint8Array(),
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
 *
 * @public
 */
export class TestPayloadBlobCommand extends $Command
  .classBuilder<
    TestPayloadBlobCommandInput,
    TestPayloadBlobCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "TestPayloadBlob", {})
  .n("RestJsonProtocolClient", "TestPayloadBlobCommand")
  .sc(TestPayloadBlob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestPayloadBlobInputOutput;
      output: TestPayloadBlobInputOutput;
    };
    sdk: {
      input: TestPayloadBlobCommandInput;
      output: TestPayloadBlobCommandOutput;
    };
  };
}
