// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
} from "../commands/ListObjectsV2Command";
import { S3Client } from "../S3Client";
import { S3PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectsV2: (
  config: S3PaginationConfiguration,
  input: ListObjectsV2CommandInput,
  ...rest: any[]
) => Paginator<ListObjectsV2CommandOutput> = createPaginator<
  S3PaginationConfiguration,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput
>(S3Client, ListObjectsV2Command, "ContinuationToken", "NextContinuationToken", "MaxKeys");
