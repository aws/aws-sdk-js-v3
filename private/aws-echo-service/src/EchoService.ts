// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { type EchoCommandInput, type EchoCommandOutput, EchoCommand } from "./commands/EchoCommand";
import { type LengthCommandInput, type LengthCommandOutput, LengthCommand } from "./commands/LengthCommand";
import { EchoServiceClient } from "./EchoServiceClient";

const commands = {
  EchoCommand,
  LengthCommand,
};

/**
 * @public
 */
export interface EchoServiceRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface EchoService {
  /**
   * @see {@link EchoCommand}
   */
  echo(): Promise<EchoCommandOutput>;
  echo(
    args: EchoCommandInput,
    options?: EchoServiceRequestOptions
  ): Promise<EchoCommandOutput>;
  echo(
    args: EchoCommandInput,
    cb: (err: any, data?: EchoCommandOutput) => void
  ): void;
  echo(
    args: EchoCommandInput,
    options: EchoServiceRequestOptions,
    cb: (err: any, data?: EchoCommandOutput) => void
  ): void;

  /**
   * @see {@link LengthCommand}
   */
  length(
    args: LengthCommandInput,
    options?: EchoServiceRequestOptions
  ): Promise<LengthCommandOutput>;
  length(
    args: LengthCommandInput,
    cb: (err: any, data?: LengthCommandOutput) => void
  ): void;
  length(
    args: LengthCommandInput,
    options: EchoServiceRequestOptions,
    cb: (err: any, data?: LengthCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class EchoService extends EchoServiceClient implements EchoService {}
createAggregatedClient(commands, EchoService);
