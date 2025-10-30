// smithy-typescript generated code
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { GetBucketLocationOutput, GetBucketLocationRequest } from "../models/models_0";
import { de_GetBucketLocationCommand, se_GetBucketLocationCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandInput extends GetBucketLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandOutput extends GetBucketLocationOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLocationCommand } from "@aws-sdk/aws-protocoltests-restxml-s3"; // ES Modules import
 * // const { S3Client, GetBucketLocationCommand } = require("@aws-sdk/aws-protocoltests-restxml-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketLocationRequest
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new GetBucketLocationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLocationOutput
 * //   LocationConstraint: "us-west-2",
 * // };
 *
 * ```
 *
 * @param GetBucketLocationCommandInput - {@link GetBucketLocationCommandInput}
 * @returns {@link GetBucketLocationCommandOutput}
 * @see {@link GetBucketLocationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class GetBucketLocationCommand extends $Command
  .classBuilder<
    GetBucketLocationCommandInput,
    GetBucketLocationCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize), getBucketEndpointPlugin(config)];
  })
  .s("AmazonS3", "GetBucketLocation", {})
  .n("S3Client", "GetBucketLocationCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketLocationCommand)
  .de(de_GetBucketLocationCommand)
  .build() {}
