// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type UploadArchiveCommandInput,
  type UploadArchiveCommandOutput,
  UploadArchiveCommand,
} from "./commands/UploadArchiveCommand";
import {
  type UploadMultipartPartCommandInput,
  type UploadMultipartPartCommandOutput,
  UploadMultipartPartCommand,
} from "./commands/UploadMultipartPartCommand";
import { GlacierClient } from "./GlacierClient";

const commands = {
  UploadArchiveCommand,
  UploadMultipartPartCommand,
};

/**
 * @public
 */
export interface GlacierRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Glacier {
  /**
   * @see {@link UploadArchiveCommand}
   */
  uploadArchive(
    args: UploadArchiveCommandInput,
    options?: GlacierRequestOptions
  ): Promise<UploadArchiveCommandOutput>;
  uploadArchive(
    args: UploadArchiveCommandInput,
    cb: (err: any, data?: UploadArchiveCommandOutput) => void
  ): void;
  uploadArchive(
    args: UploadArchiveCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: UploadArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadMultipartPartCommand}
   */
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    options?: GlacierRequestOptions
  ): Promise<UploadMultipartPartCommandOutput>;
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    cb: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): void;
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class Glacier extends GlacierClient implements Glacier {}
createAggregatedClient(commands, Glacier);
