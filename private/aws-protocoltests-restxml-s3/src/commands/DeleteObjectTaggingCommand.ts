// smithy-typescript generated code
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeleteObjectTaggingOutput, DeleteObjectTaggingRequest } from "../models/models_0";
import { de_DeleteObjectTaggingCommand, se_DeleteObjectTaggingCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteObjectTaggingCommand}.
 */
export interface DeleteObjectTaggingCommandInput extends DeleteObjectTaggingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectTaggingCommand}.
 */
export interface DeleteObjectTaggingCommandOutput extends DeleteObjectTaggingOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectTaggingCommand } from "@aws-sdk/aws-protocoltests-restxml-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectTaggingCommand } = require("@aws-sdk/aws-protocoltests-restxml-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteObjectTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObjectTaggingOutput
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteObjectTaggingCommandInput - {@link DeleteObjectTaggingCommandInput}
 * @returns {@link DeleteObjectTaggingCommandOutput}
 * @see {@link DeleteObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class DeleteObjectTaggingCommand extends $Command
  .classBuilder<
    DeleteObjectTaggingCommandInput,
    DeleteObjectTaggingCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize), getBucketEndpointPlugin(config)];
  })
  .s("AmazonS3", "DeleteObjectTagging", {})
  .n("S3Client", "DeleteObjectTaggingCommand")
  .f(void 0, void 0)
  .ser(se_DeleteObjectTaggingCommand)
  .de(de_DeleteObjectTaggingCommand)
  .build() {}
