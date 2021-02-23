import { JsonProtocolClient } from "./JsonProtocolClient";
import {
  EmptyOperationCommand,
  EmptyOperationCommandInput,
  EmptyOperationCommandOutput,
} from "./commands/EmptyOperationCommand";
import {
  EndpointOperationCommand,
  EndpointOperationCommandInput,
  EndpointOperationCommandOutput,
} from "./commands/EndpointOperationCommand";
import {
  EndpointWithHostLabelOperationCommand,
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "./commands/EndpointWithHostLabelOperationCommand";
import {
  GreetingWithErrorsCommand,
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
} from "./commands/GreetingWithErrorsCommand";
import { JsonEnumsCommand, JsonEnumsCommandInput, JsonEnumsCommandOutput } from "./commands/JsonEnumsCommand";
import { JsonUnionsCommand, JsonUnionsCommandInput, JsonUnionsCommandOutput } from "./commands/JsonUnionsCommand";
import {
  KitchenSinkOperationCommand,
  KitchenSinkOperationCommandInput,
  KitchenSinkOperationCommandOutput,
} from "./commands/KitchenSinkOperationCommand";
import {
  NullOperationCommand,
  NullOperationCommandInput,
  NullOperationCommandOutput,
} from "./commands/NullOperationCommand";
import {
  OperationWithOptionalInputOutputCommand,
  OperationWithOptionalInputOutputCommandInput,
  OperationWithOptionalInputOutputCommandOutput,
} from "./commands/OperationWithOptionalInputOutputCommand";
import {
  PutAndGetInlineDocumentsCommand,
  PutAndGetInlineDocumentsCommandInput,
  PutAndGetInlineDocumentsCommandOutput,
} from "./commands/PutAndGetInlineDocumentsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export class JsonProtocol extends JsonProtocolClient {
  public emptyOperation(
    args: EmptyOperationCommandInput,
    options?: __HttpHandlerOptions
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public endpointOperation(
    args: EndpointOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointOperationCommandOutput>;
  public endpointOperation(
    args: EndpointOperationCommandInput,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;
  public endpointOperation(
    args: EndpointOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;
  public endpointOperation(
    args: EndpointOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EndpointOperationCommandOutput) => void),
    cb?: (err: any, data?: EndpointOperationCommandOutput) => void
  ): Promise<EndpointOperationCommandOutput> | void {
    const command = new EndpointOperationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointWithHostLabelOperationCommandOutput>;
  public endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;
  public endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;
  public endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void),
    cb?: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): Promise<EndpointWithHostLabelOperationCommandOutput> | void {
    const command = new EndpointWithHostLabelOperationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * This operation has three possible return values:
   *
   * 1. A successful response in the form of GreetingWithErrorsOutput
   * 2. An InvalidGreeting error.
   * 3. A ComplexError error.
   *
   * Implementations must be able to successfully take a response and
   * properly deserialize successful and error responses.
   */
  public greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GreetingWithErrorsCommandOutput>;
  public greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;
  public greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;
  public greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GreetingWithErrorsCommandOutput) => void),
    cb?: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): Promise<GreetingWithErrorsCommandOutput> | void {
    const command = new GreetingWithErrorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * This example serializes enums as top level properties, in lists, sets, and maps.
   */
  public jsonEnums(args: JsonEnumsCommandInput, options?: __HttpHandlerOptions): Promise<JsonEnumsCommandOutput>;
  public jsonEnums(args: JsonEnumsCommandInput, cb: (err: any, data?: JsonEnumsCommandOutput) => void): void;
  public jsonEnums(
    args: JsonEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonEnumsCommandOutput) => void
  ): void;
  public jsonEnums(
    args: JsonEnumsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JsonEnumsCommandOutput) => void),
    cb?: (err: any, data?: JsonEnumsCommandOutput) => void
  ): Promise<JsonEnumsCommandOutput> | void {
    const command = new JsonEnumsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * This operation uses unions for inputs and outputs.
   */
  public jsonUnions(args: JsonUnionsCommandInput, options?: __HttpHandlerOptions): Promise<JsonUnionsCommandOutput>;
  public jsonUnions(args: JsonUnionsCommandInput, cb: (err: any, data?: JsonUnionsCommandOutput) => void): void;
  public jsonUnions(
    args: JsonUnionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;
  public jsonUnions(
    args: JsonUnionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JsonUnionsCommandOutput) => void),
    cb?: (err: any, data?: JsonUnionsCommandOutput) => void
  ): Promise<JsonUnionsCommandOutput> | void {
    const command = new JsonUnionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    options?: __HttpHandlerOptions
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public nullOperation(
    args: NullOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NullOperationCommandOutput>;
  public nullOperation(
    args: NullOperationCommandInput,
    cb: (err: any, data?: NullOperationCommandOutput) => void
  ): void;
  public nullOperation(
    args: NullOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NullOperationCommandOutput) => void
  ): void;
  public nullOperation(
    args: NullOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NullOperationCommandOutput) => void),
    cb?: (err: any, data?: NullOperationCommandOutput) => void
  ): Promise<NullOperationCommandOutput> | void {
    const command = new NullOperationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    options?: __HttpHandlerOptions
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
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * This example serializes an inline document as part of the payload.
   */
  public putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAndGetInlineDocumentsCommandOutput>;
  public putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    cb: (err: any, data?: PutAndGetInlineDocumentsCommandOutput) => void
  ): void;
  public putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAndGetInlineDocumentsCommandOutput) => void
  ): void;
  public putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAndGetInlineDocumentsCommandOutput) => void),
    cb?: (err: any, data?: PutAndGetInlineDocumentsCommandOutput) => void
  ): Promise<PutAndGetInlineDocumentsCommandOutput> | void {
    const command = new PutAndGetInlineDocumentsCommand(args);
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
