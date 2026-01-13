// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type ContentTypeParametersCommandInput,
  type ContentTypeParametersCommandOutput,
  ContentTypeParametersCommand,
} from "./commands/ContentTypeParametersCommand";
import {
  type EmptyInputAndEmptyOutputCommandInput,
  type EmptyInputAndEmptyOutputCommandOutput,
  EmptyInputAndEmptyOutputCommand,
} from "./commands/EmptyInputAndEmptyOutputCommand";
import {
  type EndpointOperationCommandInput,
  type EndpointOperationCommandOutput,
  EndpointOperationCommand,
} from "./commands/EndpointOperationCommand";
import {
  type EndpointWithHostLabelOperationCommandInput,
  type EndpointWithHostLabelOperationCommandOutput,
  EndpointWithHostLabelOperationCommand,
} from "./commands/EndpointWithHostLabelOperationCommand";
import {
  type GreetingWithErrorsCommandInput,
  type GreetingWithErrorsCommandOutput,
  GreetingWithErrorsCommand,
} from "./commands/GreetingWithErrorsCommand";
import {
  type HostWithPathOperationCommandInput,
  type HostWithPathOperationCommandOutput,
  HostWithPathOperationCommand,
} from "./commands/HostWithPathOperationCommand";
import {
  type JsonUnionsCommandInput,
  type JsonUnionsCommandOutput,
  JsonUnionsCommand,
} from "./commands/JsonUnionsCommand";
import {
  type NoInputAndNoOutputCommandInput,
  type NoInputAndNoOutputCommandOutput,
  NoInputAndNoOutputCommand,
} from "./commands/NoInputAndNoOutputCommand";
import {
  type NoInputAndOutputCommandInput,
  type NoInputAndOutputCommandOutput,
  NoInputAndOutputCommand,
} from "./commands/NoInputAndOutputCommand";
import {
  type OperationWithDefaultsCommandInput,
  type OperationWithDefaultsCommandOutput,
  OperationWithDefaultsCommand,
} from "./commands/OperationWithDefaultsCommand";
import {
  type OperationWithNestedStructureCommandInput,
  type OperationWithNestedStructureCommandOutput,
  OperationWithNestedStructureCommand,
} from "./commands/OperationWithNestedStructureCommand";
import {
  type OperationWithRequiredMembersCommandInput,
  type OperationWithRequiredMembersCommandOutput,
  OperationWithRequiredMembersCommand,
} from "./commands/OperationWithRequiredMembersCommand";
import {
  type OperationWithRequiredMembersWithDefaultsCommandInput,
  type OperationWithRequiredMembersWithDefaultsCommandOutput,
  OperationWithRequiredMembersWithDefaultsCommand,
} from "./commands/OperationWithRequiredMembersWithDefaultsCommand";
import {
  type PutWithContentEncodingCommandInput,
  type PutWithContentEncodingCommandOutput,
  PutWithContentEncodingCommand,
} from "./commands/PutWithContentEncodingCommand";
import {
  type QueryIncompatibleOperationCommandInput,
  type QueryIncompatibleOperationCommandOutput,
  QueryIncompatibleOperationCommand,
} from "./commands/QueryIncompatibleOperationCommand";
import {
  type SimpleScalarPropertiesCommandInput,
  type SimpleScalarPropertiesCommandOutput,
  SimpleScalarPropertiesCommand,
} from "./commands/SimpleScalarPropertiesCommand";
import { JSONRPC10Client } from "./JSONRPC10Client";

const commands = {
  ContentTypeParametersCommand,
  EmptyInputAndEmptyOutputCommand,
  EndpointOperationCommand,
  EndpointWithHostLabelOperationCommand,
  GreetingWithErrorsCommand,
  HostWithPathOperationCommand,
  JsonUnionsCommand,
  NoInputAndNoOutputCommand,
  NoInputAndOutputCommand,
  OperationWithDefaultsCommand,
  OperationWithNestedStructureCommand,
  OperationWithRequiredMembersCommand,
  OperationWithRequiredMembersWithDefaultsCommand,
  PutWithContentEncodingCommand,
  QueryIncompatibleOperationCommand,
  SimpleScalarPropertiesCommand,
};

export interface JSONRPC10 {
  /**
   * @see {@link ContentTypeParametersCommand}
   */
  contentTypeParameters(): Promise<ContentTypeParametersCommandOutput>;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ContentTypeParametersCommandOutput>;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    cb: (err: any, data?: ContentTypeParametersCommandOutput) => void
  ): void;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ContentTypeParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link EmptyInputAndEmptyOutputCommand}
   */
  emptyInputAndEmptyOutput(): Promise<EmptyInputAndEmptyOutputCommandOutput>;
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
  endpointOperation(): Promise<EndpointOperationCommandOutput>;
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
  greetingWithErrors(): Promise<GreetingWithErrorsCommandOutput>;
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
  hostWithPathOperation(): Promise<HostWithPathOperationCommandOutput>;
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
  jsonUnions(): Promise<JsonUnionsCommandOutput>;
  jsonUnions(
    args: JsonUnionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonUnionsCommandOutput>;
  jsonUnions(
    args: JsonUnionsCommandInput,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;
  jsonUnions(
    args: JsonUnionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;

  /**
   * @see {@link NoInputAndNoOutputCommand}
   */
  noInputAndNoOutput(): Promise<NoInputAndNoOutputCommandOutput>;
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
  noInputAndOutput(): Promise<NoInputAndOutputCommandOutput>;
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
   * @see {@link OperationWithDefaultsCommand}
   */
  operationWithDefaults(): Promise<OperationWithDefaultsCommandOutput>;
  operationWithDefaults(
    args: OperationWithDefaultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OperationWithDefaultsCommandOutput>;
  operationWithDefaults(
    args: OperationWithDefaultsCommandInput,
    cb: (err: any, data?: OperationWithDefaultsCommandOutput) => void
  ): void;
  operationWithDefaults(
    args: OperationWithDefaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OperationWithDefaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link OperationWithNestedStructureCommand}
   */
  operationWithNestedStructure(
    args: OperationWithNestedStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OperationWithNestedStructureCommandOutput>;
  operationWithNestedStructure(
    args: OperationWithNestedStructureCommandInput,
    cb: (err: any, data?: OperationWithNestedStructureCommandOutput) => void
  ): void;
  operationWithNestedStructure(
    args: OperationWithNestedStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OperationWithNestedStructureCommandOutput) => void
  ): void;

  /**
   * @see {@link OperationWithRequiredMembersCommand}
   */
  operationWithRequiredMembers(): Promise<OperationWithRequiredMembersCommandOutput>;
  operationWithRequiredMembers(
    args: OperationWithRequiredMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OperationWithRequiredMembersCommandOutput>;
  operationWithRequiredMembers(
    args: OperationWithRequiredMembersCommandInput,
    cb: (err: any, data?: OperationWithRequiredMembersCommandOutput) => void
  ): void;
  operationWithRequiredMembers(
    args: OperationWithRequiredMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OperationWithRequiredMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link OperationWithRequiredMembersWithDefaultsCommand}
   */
  operationWithRequiredMembersWithDefaults(): Promise<OperationWithRequiredMembersWithDefaultsCommandOutput>;
  operationWithRequiredMembersWithDefaults(
    args: OperationWithRequiredMembersWithDefaultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OperationWithRequiredMembersWithDefaultsCommandOutput>;
  operationWithRequiredMembersWithDefaults(
    args: OperationWithRequiredMembersWithDefaultsCommandInput,
    cb: (err: any, data?: OperationWithRequiredMembersWithDefaultsCommandOutput) => void
  ): void;
  operationWithRequiredMembersWithDefaults(
    args: OperationWithRequiredMembersWithDefaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OperationWithRequiredMembersWithDefaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWithContentEncodingCommand}
   */
  putWithContentEncoding(): Promise<PutWithContentEncodingCommandOutput>;
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
   * @see {@link QueryIncompatibleOperationCommand}
   */
  queryIncompatibleOperation(): Promise<QueryIncompatibleOperationCommandOutput>;
  queryIncompatibleOperation(
    args: QueryIncompatibleOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryIncompatibleOperationCommandOutput>;
  queryIncompatibleOperation(
    args: QueryIncompatibleOperationCommandInput,
    cb: (err: any, data?: QueryIncompatibleOperationCommandOutput) => void
  ): void;
  queryIncompatibleOperation(
    args: QueryIncompatibleOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryIncompatibleOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link SimpleScalarPropertiesCommand}
   */
  simpleScalarProperties(): Promise<SimpleScalarPropertiesCommandOutput>;
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
