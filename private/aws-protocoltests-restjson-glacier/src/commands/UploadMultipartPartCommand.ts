// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  UploadMultipartPartInput,
  UploadMultipartPartInputFilterSensitiveLog,
  UploadMultipartPartOutput,
} from "../models/models_0";
import { de_UploadMultipartPartCommand, se_UploadMultipartPartCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UploadMultipartPartCommand}.
 */
export interface UploadMultipartPartCommandInput extends Omit<UploadMultipartPartInput, "body"> {
  body?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link UploadMultipartPartCommand}.
 */
export interface UploadMultipartPartCommandOutput extends UploadMultipartPartOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, UploadMultipartPartCommand } from "@aws-sdk/aws-protocoltests-restjson-glacier"; // ES Modules import
 * // const { GlacierClient, UploadMultipartPartCommand } = require("@aws-sdk/aws-protocoltests-restjson-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // UploadMultipartPartInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   checksum: "STRING_VALUE",
 *   range: "STRING_VALUE",
 *   body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new UploadMultipartPartCommand(input);
 * const response = await client.send(command);
 * // { // UploadMultipartPartOutput
 * //   checksum: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UploadMultipartPartCommandInput - {@link UploadMultipartPartCommandInput}
 * @returns {@link UploadMultipartPartCommandOutput}
 * @see {@link UploadMultipartPartCommandInput} for command's `input` shape.
 * @see {@link UploadMultipartPartCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 *
 */
export class UploadMultipartPartCommand extends $Command
  .classBuilder<
    UploadMultipartPartCommandInput,
    UploadMultipartPartCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "UploadMultipartPart", {})
  .n("GlacierClient", "UploadMultipartPartCommand")
  .f(UploadMultipartPartInputFilterSensitiveLog, void 0)
  .ser(se_UploadMultipartPartCommand)
  .de(de_UploadMultipartPartCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadMultipartPartInput;
      output: UploadMultipartPartOutput;
    };
    sdk: {
      input: UploadMultipartPartCommandInput;
      output: UploadMultipartPartCommandOutput;
    };
  };
}
