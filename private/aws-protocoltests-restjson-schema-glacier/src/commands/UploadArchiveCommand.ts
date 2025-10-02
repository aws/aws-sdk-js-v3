// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ArchiveCreationOutput, UploadArchiveInput } from "../models/models_0";
import { UploadArchive } from "../schemas/schemas_1_Upload";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UploadArchiveCommand}.
 */
export interface UploadArchiveCommandInput extends Omit<UploadArchiveInput, "body"> {
  body?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link UploadArchiveCommand}.
 */
export interface UploadArchiveCommandOutput extends ArchiveCreationOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, UploadArchiveCommand } from "@aws-sdk/aws-protocoltests-restjson-schema-glacier"; // ES Modules import
 * // const { GlacierClient, UploadArchiveCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // UploadArchiveInput
 *   vaultName: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   archiveDescription: "STRING_VALUE",
 *   checksum: "STRING_VALUE",
 *   body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new UploadArchiveCommand(input);
 * const response = await client.send(command);
 * // { // ArchiveCreationOutput
 * //   location: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   archiveId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UploadArchiveCommandInput - {@link UploadArchiveCommandInput}
 * @returns {@link UploadArchiveCommandOutput}
 * @see {@link UploadArchiveCommandInput} for command's `input` shape.
 * @see {@link UploadArchiveCommandOutput} for command's `response` shape.
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
export class UploadArchiveCommand extends $Command
  .classBuilder<
    UploadArchiveCommandInput,
    UploadArchiveCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Glacier", "UploadArchive", {})
  .n("GlacierClient", "UploadArchiveCommand")
  .sc(UploadArchive)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadArchiveInput;
      output: ArchiveCreationOutput;
    };
    sdk: {
      input: UploadArchiveCommandInput;
      output: UploadArchiveCommandOutput;
    };
  };
}
