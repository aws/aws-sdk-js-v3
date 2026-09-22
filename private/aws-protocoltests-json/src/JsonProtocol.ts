// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type ContentTypeParametersCommandInput,
  type ContentTypeParametersCommandOutput,
  ContentTypeParametersCommand,
} from "./commands/ContentTypeParametersCommand";
import {
  type DatetimeOffsetsCommandInput,
  type DatetimeOffsetsCommandOutput,
  DatetimeOffsetsCommand,
} from "./commands/DatetimeOffsetsCommand";
import {
  type EmptyOperationCommandInput,
  type EmptyOperationCommandOutput,
  EmptyOperationCommand,
} from "./commands/EmptyOperationCommand";
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
  type FractionalSecondsCommandInput,
  type FractionalSecondsCommandOutput,
  FractionalSecondsCommand,
} from "./commands/FractionalSecondsCommand";
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
import { type JsonEnumsCommandInput, type JsonEnumsCommandOutput, JsonEnumsCommand } from "./commands/JsonEnumsCommand";
import {
  type JsonIntEnumsCommandInput,
  type JsonIntEnumsCommandOutput,
  JsonIntEnumsCommand,
} from "./commands/JsonIntEnumsCommand";
import {
  type JsonUnionsCommandInput,
  type JsonUnionsCommandOutput,
  JsonUnionsCommand,
} from "./commands/JsonUnionsCommand";
import {
  type KitchenSinkOperationCommandInput,
  type KitchenSinkOperationCommandOutput,
  KitchenSinkOperationCommand,
} from "./commands/KitchenSinkOperationCommand";
import {
  type NullOperationCommandInput,
  type NullOperationCommandOutput,
  NullOperationCommand,
} from "./commands/NullOperationCommand";
import {
  type OperationWithOptionalInputOutputCommandInput,
  type OperationWithOptionalInputOutputCommandOutput,
  OperationWithOptionalInputOutputCommand,
} from "./commands/OperationWithOptionalInputOutputCommand";
import {
  type PutAndGetInlineDocumentsCommandInput,
  type PutAndGetInlineDocumentsCommandOutput,
  PutAndGetInlineDocumentsCommand,
} from "./commands/PutAndGetInlineDocumentsCommand";
import {
  type PutWithContentEncodingCommandInput,
  type PutWithContentEncodingCommandOutput,
  PutWithContentEncodingCommand,
} from "./commands/PutWithContentEncodingCommand";
import {
  type SimpleScalarPropertiesCommandInput,
  type SimpleScalarPropertiesCommandOutput,
  SimpleScalarPropertiesCommand,
} from "./commands/SimpleScalarPropertiesCommand";
import {
  type SparseNullsOperationCommandInput,
  type SparseNullsOperationCommandOutput,
  SparseNullsOperationCommand,
} from "./commands/SparseNullsOperationCommand";
import { JsonProtocolClient } from "./JsonProtocolClient";

const commands = {
  ContentTypeParametersCommand,
  DatetimeOffsetsCommand,
  EmptyOperationCommand,
  EndpointOperationCommand,
  EndpointWithHostLabelOperationCommand,
  FractionalSecondsCommand,
  GreetingWithErrorsCommand,
  HostWithPathOperationCommand,
  JsonEnumsCommand,
  JsonIntEnumsCommand,
  JsonUnionsCommand,
  KitchenSinkOperationCommand,
  NullOperationCommand,
  OperationWithOptionalInputOutputCommand,
  PutAndGetInlineDocumentsCommand,
  PutWithContentEncodingCommand,
  SimpleScalarPropertiesCommand,
  SparseNullsOperationCommand,
};

/**
 * @public
 */
export interface JsonProtocolRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface JsonProtocol {
  /**
   * @see {@link ContentTypeParametersCommand}
   */
  contentTypeParameters(): Promise<ContentTypeParametersCommandOutput>;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<ContentTypeParametersCommandOutput>;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    cb: (err: any, data?: ContentTypeParametersCommandOutput) => void
  ): void;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: ContentTypeParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DatetimeOffsetsCommand}
   */
  datetimeOffsets(): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;

  /**
   * @see {@link EmptyOperationCommand}
   */
  emptyOperation(): Promise<EmptyOperationCommandOutput>;
  emptyOperation(
    args: EmptyOperationCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<EmptyOperationCommandOutput>;
  emptyOperation(
    args: EmptyOperationCommandInput,
    cb: (err: any, data?: EmptyOperationCommandOutput) => void
  ): void;
  emptyOperation(
    args: EmptyOperationCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: EmptyOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointOperationCommand}
   */
  endpointOperation(): Promise<EndpointOperationCommandOutput>;
  endpointOperation(
    args: EndpointOperationCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<EndpointOperationCommandOutput>;
  endpointOperation(
    args: EndpointOperationCommandInput,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;
  endpointOperation(
    args: EndpointOperationCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointWithHostLabelOperationCommand}
   */
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<EndpointWithHostLabelOperationCommandOutput>;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link FractionalSecondsCommand}
   */
  fractionalSeconds(): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;

  /**
   * @see {@link GreetingWithErrorsCommand}
   */
  greetingWithErrors(): Promise<GreetingWithErrorsCommandOutput>;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<GreetingWithErrorsCommandOutput>;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;

  /**
   * @see {@link HostWithPathOperationCommand}
   */
  hostWithPathOperation(): Promise<HostWithPathOperationCommandOutput>;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<HostWithPathOperationCommandOutput>;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonEnumsCommand}
   */
  jsonEnums(): Promise<JsonEnumsCommandOutput>;
  jsonEnums(
    args: JsonEnumsCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<JsonEnumsCommandOutput>;
  jsonEnums(
    args: JsonEnumsCommandInput,
    cb: (err: any, data?: JsonEnumsCommandOutput) => void
  ): void;
  jsonEnums(
    args: JsonEnumsCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: JsonEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonIntEnumsCommand}
   */
  jsonIntEnums(): Promise<JsonIntEnumsCommandOutput>;
  jsonIntEnums(
    args: JsonIntEnumsCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<JsonIntEnumsCommandOutput>;
  jsonIntEnums(
    args: JsonIntEnumsCommandInput,
    cb: (err: any, data?: JsonIntEnumsCommandOutput) => void
  ): void;
  jsonIntEnums(
    args: JsonIntEnumsCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: JsonIntEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonUnionsCommand}
   */
  jsonUnions(): Promise<JsonUnionsCommandOutput>;
  jsonUnions(
    args: JsonUnionsCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<JsonUnionsCommandOutput>;
  jsonUnions(
    args: JsonUnionsCommandInput,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;
  jsonUnions(
    args: JsonUnionsCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;

  /**
   * @see {@link KitchenSinkOperationCommand}
   */
  kitchenSinkOperation(): Promise<KitchenSinkOperationCommandOutput>;
  kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<KitchenSinkOperationCommandOutput>;
  kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    cb: (err: any, data?: KitchenSinkOperationCommandOutput) => void
  ): void;
  kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: KitchenSinkOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link NullOperationCommand}
   */
  nullOperation(): Promise<NullOperationCommandOutput>;
  nullOperation(
    args: NullOperationCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<NullOperationCommandOutput>;
  nullOperation(
    args: NullOperationCommandInput,
    cb: (err: any, data?: NullOperationCommandOutput) => void
  ): void;
  nullOperation(
    args: NullOperationCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: NullOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link OperationWithOptionalInputOutputCommand}
   */
  operationWithOptionalInputOutput(): Promise<OperationWithOptionalInputOutputCommandOutput>;
  operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<OperationWithOptionalInputOutputCommandOutput>;
  operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    cb: (err: any, data?: OperationWithOptionalInputOutputCommandOutput) => void
  ): void;
  operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: OperationWithOptionalInputOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAndGetInlineDocumentsCommand}
   */
  putAndGetInlineDocuments(): Promise<PutAndGetInlineDocumentsCommandOutput>;
  putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<PutAndGetInlineDocumentsCommandOutput>;
  putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    cb: (err: any, data?: PutAndGetInlineDocumentsCommandOutput) => void
  ): void;
  putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: PutAndGetInlineDocumentsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWithContentEncodingCommand}
   */
  putWithContentEncoding(): Promise<PutWithContentEncodingCommandOutput>;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<PutWithContentEncodingCommandOutput>;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    cb: (err: any, data?: PutWithContentEncodingCommandOutput) => void
  ): void;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: PutWithContentEncodingCommandOutput) => void
  ): void;

  /**
   * @see {@link SimpleScalarPropertiesCommand}
   */
  simpleScalarProperties(): Promise<SimpleScalarPropertiesCommandOutput>;
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<SimpleScalarPropertiesCommandOutput>;
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    cb: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): void;
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link SparseNullsOperationCommand}
   */
  sparseNullsOperation(): Promise<SparseNullsOperationCommandOutput>;
  sparseNullsOperation(
    args: SparseNullsOperationCommandInput,
    options?: JsonProtocolRequestOptions
  ): Promise<SparseNullsOperationCommandOutput>;
  sparseNullsOperation(
    args: SparseNullsOperationCommandInput,
    cb: (err: any, data?: SparseNullsOperationCommandOutput) => void
  ): void;
  sparseNullsOperation(
    args: SparseNullsOperationCommandInput,
    options: JsonProtocolRequestOptions,
    cb: (err: any, data?: SparseNullsOperationCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class JsonProtocol extends JsonProtocolClient implements JsonProtocol {}
createAggregatedClient(commands, JsonProtocol);
