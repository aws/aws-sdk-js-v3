// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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

export interface JsonProtocol {
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
   * @see {@link DatetimeOffsetsCommand}
   */
  datetimeOffsets(): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(args: DatetimeOffsetsCommandInput, cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void): void;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;

  /**
   * @see {@link EmptyOperationCommand}
   */
  emptyOperation(): Promise<EmptyOperationCommandOutput>;
  emptyOperation(
    args: EmptyOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EmptyOperationCommandOutput>;
  emptyOperation(args: EmptyOperationCommandInput, cb: (err: any, data?: EmptyOperationCommandOutput) => void): void;
  emptyOperation(
    args: EmptyOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EmptyOperationCommandOutput) => void
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
   * @see {@link FractionalSecondsCommand}
   */
  fractionalSeconds(): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
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
   * @see {@link JsonEnumsCommand}
   */
  jsonEnums(): Promise<JsonEnumsCommandOutput>;
  jsonEnums(args: JsonEnumsCommandInput, options?: __HttpHandlerOptions): Promise<JsonEnumsCommandOutput>;
  jsonEnums(args: JsonEnumsCommandInput, cb: (err: any, data?: JsonEnumsCommandOutput) => void): void;
  jsonEnums(
    args: JsonEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonIntEnumsCommand}
   */
  jsonIntEnums(): Promise<JsonIntEnumsCommandOutput>;
  jsonIntEnums(args: JsonIntEnumsCommandInput, options?: __HttpHandlerOptions): Promise<JsonIntEnumsCommandOutput>;
  jsonIntEnums(args: JsonIntEnumsCommandInput, cb: (err: any, data?: JsonIntEnumsCommandOutput) => void): void;
  jsonIntEnums(
    args: JsonIntEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonIntEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonUnionsCommand}
   */
  jsonUnions(): Promise<JsonUnionsCommandOutput>;
  jsonUnions(args: JsonUnionsCommandInput, options?: __HttpHandlerOptions): Promise<JsonUnionsCommandOutput>;
  jsonUnions(args: JsonUnionsCommandInput, cb: (err: any, data?: JsonUnionsCommandOutput) => void): void;
  jsonUnions(
    args: JsonUnionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;

  /**
   * @see {@link KitchenSinkOperationCommand}
   */
  kitchenSinkOperation(): Promise<KitchenSinkOperationCommandOutput>;
  kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<KitchenSinkOperationCommandOutput>;
  kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    cb: (err: any, data?: KitchenSinkOperationCommandOutput) => void
  ): void;
  kitchenSinkOperation(
    args: KitchenSinkOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: KitchenSinkOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link NullOperationCommand}
   */
  nullOperation(): Promise<NullOperationCommandOutput>;
  nullOperation(args: NullOperationCommandInput, options?: __HttpHandlerOptions): Promise<NullOperationCommandOutput>;
  nullOperation(args: NullOperationCommandInput, cb: (err: any, data?: NullOperationCommandOutput) => void): void;
  nullOperation(
    args: NullOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NullOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link OperationWithOptionalInputOutputCommand}
   */
  operationWithOptionalInputOutput(): Promise<OperationWithOptionalInputOutputCommandOutput>;
  operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OperationWithOptionalInputOutputCommandOutput>;
  operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    cb: (err: any, data?: OperationWithOptionalInputOutputCommandOutput) => void
  ): void;
  operationWithOptionalInputOutput(
    args: OperationWithOptionalInputOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OperationWithOptionalInputOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAndGetInlineDocumentsCommand}
   */
  putAndGetInlineDocuments(): Promise<PutAndGetInlineDocumentsCommandOutput>;
  putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAndGetInlineDocumentsCommandOutput>;
  putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    cb: (err: any, data?: PutAndGetInlineDocumentsCommandOutput) => void
  ): void;
  putAndGetInlineDocuments(
    args: PutAndGetInlineDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAndGetInlineDocumentsCommandOutput) => void
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

  /**
   * @see {@link SparseNullsOperationCommand}
   */
  sparseNullsOperation(): Promise<SparseNullsOperationCommandOutput>;
  sparseNullsOperation(
    args: SparseNullsOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SparseNullsOperationCommandOutput>;
  sparseNullsOperation(
    args: SparseNullsOperationCommandInput,
    cb: (err: any, data?: SparseNullsOperationCommandOutput) => void
  ): void;
  sparseNullsOperation(
    args: SparseNullsOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SparseNullsOperationCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class JsonProtocol extends JsonProtocolClient implements JsonProtocol {}
createAggregatedClient(commands, JsonProtocol);
