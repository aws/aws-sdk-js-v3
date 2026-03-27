// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { type EchoCommandInput, type EchoCommandOutput, EchoCommand } from "./commands/EchoCommand";
import { type LengthCommandInput, type LengthCommandOutput, LengthCommand } from "./commands/LengthCommand";
import { EchoServiceClient } from "./EchoServiceClient";

const commands = {
  EchoCommand,
  LengthCommand,
};

export interface EchoService {
  /**
   * @see {@link EchoCommand}
   */
  echo(): Promise<EchoCommandOutput>;
  echo(
    args: EchoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EchoCommandOutput>;
  echo(
    args: EchoCommandInput,
    cb: (err: any, data?: EchoCommandOutput) => void
  ): void;
  echo(
    args: EchoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EchoCommandOutput) => void
  ): void;

  /**
   * @see {@link LengthCommand}
   */
  length(
    args: LengthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LengthCommandOutput>;
  length(
    args: LengthCommandInput,
    cb: (err: any, data?: LengthCommandOutput) => void
  ): void;
  length(
    args: LengthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LengthCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class EchoService extends EchoServiceClient implements EchoService {}
createAggregatedClient(commands, EchoService);
