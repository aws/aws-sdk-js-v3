// smithy-typescript generated code
import { EchoServiceClient } from "./EchoServiceClient";
import { EchoCommand, EchoCommandInput, EchoCommandOutput } from "./commands/EchoCommand";
import { LengthCommand, LengthCommandInput, LengthCommandOutput } from "./commands/LengthCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export class EchoService extends EchoServiceClient {
  public echo(args: EchoCommandInput, options?: __HttpHandlerOptions): Promise<EchoCommandOutput>;
  public echo(args: EchoCommandInput, cb: (err: any, data?: EchoCommandOutput) => void): void;
  public echo(
    args: EchoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EchoCommandOutput) => void
  ): void;
  public echo(
    args: EchoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EchoCommandOutput) => void),
    cb?: (err: any, data?: EchoCommandOutput) => void
  ): Promise<EchoCommandOutput> | void {
    const command = new EchoCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public length(args: LengthCommandInput, options?: __HttpHandlerOptions): Promise<LengthCommandOutput>;
  public length(args: LengthCommandInput, cb: (err: any, data?: LengthCommandOutput) => void): void;
  public length(
    args: LengthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LengthCommandOutput) => void
  ): void;
  public length(
    args: LengthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LengthCommandOutput) => void),
    cb?: (err: any, data?: LengthCommandOutput) => void
  ): Promise<LengthCommandOutput> | void {
    const command = new LengthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
