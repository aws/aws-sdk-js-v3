// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  EmptyInputAndEmptyOutputCommand,
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "./commands/EmptyInputAndEmptyOutputCommand";
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
import {
  HostWithPathOperationCommand,
  HostWithPathOperationCommandInput,
  HostWithPathOperationCommandOutput,
} from "./commands/HostWithPathOperationCommand";
import { JsonUnionsCommand, JsonUnionsCommandInput, JsonUnionsCommandOutput } from "./commands/JsonUnionsCommand";
import {
  NoInputAndNoOutputCommand,
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput,
} from "./commands/NoInputAndNoOutputCommand";
import {
  NoInputAndOutputCommand,
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput,
} from "./commands/NoInputAndOutputCommand";
import {
  PutWithContentEncodingCommand,
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "./commands/PutWithContentEncodingCommand";
import {
  SimpleScalarPropertiesCommand,
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "./commands/SimpleScalarPropertiesCommand";
import { JSONRPC10Client, JSONRPC10ClientConfig } from "./JSONRPC10Client";

const commands = {
  EmptyInputAndEmptyOutputCommand,
  EndpointOperationCommand,
  EndpointWithHostLabelOperationCommand,
  GreetingWithErrorsCommand,
  HostWithPathOperationCommand,
  JsonUnionsCommand,
  NoInputAndNoOutputCommand,
  NoInputAndOutputCommand,
  PutWithContentEncodingCommand,
  SimpleScalarPropertiesCommand,
};

export interface JSONRPC10 {
  /**
   * @see {@link EmptyInputAndEmptyOutputCommand}
   */
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EmptyInputAndEmptyOutputCommandOutput>;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointOperationCommand}
   */
  endpointOperation(
    args: EndpointOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointOperationCommandOutput>;
  endpointOperation(
    args: EndpointOperationCommandInput,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;
  endpointOperation(
    args: EndpointOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointWithHostLabelOperationCommand}
   */
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointWithHostLabelOperationCommandOutput>;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GreetingWithErrorsCommand}
   */
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GreetingWithErrorsCommandOutput>;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;

  /**
   * @see {@link HostWithPathOperationCommand}
   */
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HostWithPathOperationCommandOutput>;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonUnionsCommand}
   */
  jsonUnions(args: JsonUnionsCommandInput, options?: __HttpHandlerOptions): Promise<JsonUnionsCommandOutput>;
  jsonUnions(args: JsonUnionsCommandInput, cb: (err: any, data?: JsonUnionsCommandOutput) => void): void;
  jsonUnions(
    args: JsonUnionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;

  /**
   * @see {@link NoInputAndNoOutputCommand}
   */
  noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NoInputAndNoOutputCommandOutput>;
  noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    cb: (err: any, data?: NoInputAndNoOutputCommandOutput) => void
  ): void;
  noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NoInputAndNoOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link NoInputAndOutputCommand}
   */
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NoInputAndOutputCommandOutput>;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWithContentEncodingCommand}
   */
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutWithContentEncodingCommandOutput>;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    cb: (err: any, data?: PutWithContentEncodingCommandOutput) => void
  ): void;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWithContentEncodingCommandOutput) => void
  ): void;

  /**
   * @see {@link SimpleScalarPropertiesCommand}
   */
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimpleScalarPropertiesCommandOutput>;
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    cb: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): void;
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class JSONRPC10 extends JSONRPC10Client implements JSONRPC10 {}
createAggregatedClient(commands, JSONRPC10);
