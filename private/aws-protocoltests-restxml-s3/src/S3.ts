// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteObjectTaggingCommand,
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "./commands/DeleteObjectTaggingCommand";
import {
  GetBucketLocationCommand,
  GetBucketLocationCommandInput,
  GetBucketLocationCommandOutput,
} from "./commands/GetBucketLocationCommand";
import { GetObjectCommand, GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import {
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
} from "./commands/ListObjectsV2Command";
import { S3Client, S3ClientConfig } from "./S3Client";

const commands = {
  DeleteObjectTaggingCommand,
  GetBucketLocationCommand,
  GetObjectCommand,
  ListObjectsV2Command,
};

export interface S3 {
  /**
   * @see {@link DeleteObjectTaggingCommand}
   */
  deleteObjectTagging(
    args: DeleteObjectTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObjectTaggingCommandOutput>;
  deleteObjectTagging(
    args: DeleteObjectTaggingCommandInput,
    cb: (err: any, data?: DeleteObjectTaggingCommandOutput) => void
  ): void;
  deleteObjectTagging(
    args: DeleteObjectTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketLocationCommand}
   */
  getBucketLocation(
    args: GetBucketLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketLocationCommandOutput>;
  getBucketLocation(
    args: GetBucketLocationCommandInput,
    cb: (err: any, data?: GetBucketLocationCommandOutput) => void
  ): void;
  getBucketLocation(
    args: GetBucketLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectCommand}
   */
  getObject(args: GetObjectCommandInput, options?: __HttpHandlerOptions): Promise<GetObjectCommandOutput>;
  getObject(args: GetObjectCommandInput, cb: (err: any, data?: GetObjectCommandOutput) => void): void;
  getObject(
    args: GetObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectsV2Command}
   */
  listObjectsV2(args: ListObjectsV2CommandInput, options?: __HttpHandlerOptions): Promise<ListObjectsV2CommandOutput>;
  listObjectsV2(args: ListObjectsV2CommandInput, cb: (err: any, data?: ListObjectsV2CommandOutput) => void): void;
  listObjectsV2(
    args: ListObjectsV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectsV2CommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class S3 extends S3Client implements S3 {}
createAggregatedClient(commands, S3);
