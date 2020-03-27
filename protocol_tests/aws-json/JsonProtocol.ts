import { JsonProtocolClient } from "./JsonProtocolClient";
import {
  EmptyOperationCommand,
  EmptyOperationCommandInput,
  EmptyOperationCommandOutput,
} from "./commands/EmptyOperationCommand";
import {
  KitchenSinkOperationCommand,
  KitchenSinkOperationCommandInput,
  KitchenSinkOperationCommandOutput,
} from "./commands/KitchenSinkOperationCommand";
import {
  OperationWithOptionalInputOutputCommand,
  OperationWithOptionalInputOutputCommandInput,
  OperationWithOptionalInputOutputCommandOutput,
} from "./commands/OperationWithOptionalInputOutputCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export class JsonProtocol extends JsonProtocolClient {
  public emptyOperation(
    args: EmptyOperationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<EmptyOperationCommandOutput>;
  public emptyOperation(
    args: EmptyOperationCommandInput,
    cb: (err: any, data?: EmptyOperationCommandOutput) => void
  ): void;
  public emptyOperation(
    args: EmptyOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EmptyOperationCommandOutput) => void
  ): void;
  public emptyOperation(
    args: EmptyOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EmptyOperationCommandOutput) => void),
    cb?: (err: any, data?: EmptyOperationCommandOutput) => void
  ): Promise<EmptyOperationCommandOutput> | void {
    const command = new EmptyOperationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<KitchenSinkOperationCommandOutput>;
  public kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    cb: (err: any, data?: KitchenSinkOperationCommandOutput) => void
  ): void;
  public kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: KitchenSinkOperationCommandOutput) => void
  ): void;
  public kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: KitchenSinkOperationCommandOutput) => void),
    cb?: (err: any, data?: KitchenSinkOperationCommandOutput) => void
  ): Promise<KitchenSinkOperationCommandOutput> | void {
    const command = new KitchenSinkOperationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<OperationWithOptionalInputOutputCommandOutput>;
  public operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    cb: (err: any, data?: OperationWithOptionalInputOutputCommandOutput) => void
  ): void;
  public operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OperationWithOptionalInputOutputCommandOutput) => void
  ): void;
  public operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: OperationWithOptionalInputOutputCommandOutput) => void),
    cb?: (err: any, data?: OperationWithOptionalInputOutputCommandOutput) => void
  ): Promise<OperationWithOptionalInputOutputCommandOutput> | void {
    const command = new OperationWithOptionalInputOutputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

}
