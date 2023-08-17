// smithy-typescript generated code
import { EchoServiceClient, EchoServiceClientConfig } from "./EchoServiceClient";
import { EchoCommand, EchoCommandInput, EchoCommandOutput } from "./commands/EchoCommand";
import { LengthCommand, LengthCommandInput, LengthCommandOutput } from "./commands/LengthCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  EchoCommand,
  LengthCommand,
};

export interface EchoService {
  /**
   * @see {@link EchoCommand}
   */
  echo(args: EchoCommandInput, options?: __HttpHandlerOptions): Promise<EchoCommandOutput>;
  echo(args: EchoCommandInput, cb: (err: any, data?: EchoCommandOutput) => void): void;
  echo(args: EchoCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EchoCommandOutput) => void): void;

  /**
   * @see {@link LengthCommand}
   */
  length(args: LengthCommandInput, options?: __HttpHandlerOptions): Promise<LengthCommandOutput>;
  length(args: LengthCommandInput, cb: (err: any, data?: LengthCommandOutput) => void): void;
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
