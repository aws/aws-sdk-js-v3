// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type EmptyInputOutputCommandInput,
  type EmptyInputOutputCommandOutput,
  EmptyInputOutputCommand,
} from "./commands/EmptyInputOutputCommand";
import { type Float16CommandInput, type Float16CommandOutput, Float16Command } from "./commands/Float16Command";
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
  type NoInputOutputCommandInput,
  type NoInputOutputCommandOutput,
  NoInputOutputCommand,
} from "./commands/NoInputOutputCommand";
import {
  type OperationWithDefaultsCommandInput,
  type OperationWithDefaultsCommandOutput,
  OperationWithDefaultsCommand,
} from "./commands/OperationWithDefaultsCommand";
import {
  type OptionalInputOutputCommandInput,
  type OptionalInputOutputCommandOutput,
  OptionalInputOutputCommand,
} from "./commands/OptionalInputOutputCommand";
import {
  type RecursiveShapesCommandInput,
  type RecursiveShapesCommandOutput,
  RecursiveShapesCommand,
} from "./commands/RecursiveShapesCommand";
import {
  type RpcV2CborDenseMapsCommandInput,
  type RpcV2CborDenseMapsCommandOutput,
  RpcV2CborDenseMapsCommand,
} from "./commands/RpcV2CborDenseMapsCommand";
import {
  type RpcV2CborListsCommandInput,
  type RpcV2CborListsCommandOutput,
  RpcV2CborListsCommand,
} from "./commands/RpcV2CborListsCommand";
import {
  type RpcV2CborSparseMapsCommandInput,
  type RpcV2CborSparseMapsCommandOutput,
  RpcV2CborSparseMapsCommand,
} from "./commands/RpcV2CborSparseMapsCommand";
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
import { RpcV2ProtocolClient } from "./RpcV2ProtocolClient";

const commands = {
  EmptyInputOutputCommand,
  Float16Command,
  FractionalSecondsCommand,
  GreetingWithErrorsCommand,
  NoInputOutputCommand,
  OperationWithDefaultsCommand,
  OptionalInputOutputCommand,
  RecursiveShapesCommand,
  RpcV2CborDenseMapsCommand,
  RpcV2CborListsCommand,
  RpcV2CborSparseMapsCommand,
  SimpleScalarPropertiesCommand,
  SparseNullsOperationCommand,
};

export interface RpcV2Protocol {
  /**
   * @see {@link EmptyInputOutputCommand}
   */
  emptyInputOutput(): Promise<EmptyInputOutputCommandOutput>;
  emptyInputOutput(
    args: EmptyInputOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EmptyInputOutputCommandOutput>;
  emptyInputOutput(
    args: EmptyInputOutputCommandInput,
    cb: (err: any, data?: EmptyInputOutputCommandOutput) => void
  ): void;
  emptyInputOutput(
    args: EmptyInputOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EmptyInputOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link Float16Command}
   */
  float16(): Promise<Float16CommandOutput>;
  float16(
    args: Float16CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<Float16CommandOutput>;
  float16(
    args: Float16CommandInput,
    cb: (err: any, data?: Float16CommandOutput) => void
  ): void;
  float16(
    args: Float16CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: Float16CommandOutput) => void
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
   * @see {@link NoInputOutputCommand}
   */
  noInputOutput(): Promise<NoInputOutputCommandOutput>;
  noInputOutput(
    args: NoInputOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NoInputOutputCommandOutput>;
  noInputOutput(
    args: NoInputOutputCommandInput,
    cb: (err: any, data?: NoInputOutputCommandOutput) => void
  ): void;
  noInputOutput(
    args: NoInputOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NoInputOutputCommandOutput) => void
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
   * @see {@link OptionalInputOutputCommand}
   */
  optionalInputOutput(): Promise<OptionalInputOutputCommandOutput>;
  optionalInputOutput(
    args: OptionalInputOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OptionalInputOutputCommandOutput>;
  optionalInputOutput(
    args: OptionalInputOutputCommandInput,
    cb: (err: any, data?: OptionalInputOutputCommandOutput) => void
  ): void;
  optionalInputOutput(
    args: OptionalInputOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OptionalInputOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link RecursiveShapesCommand}
   */
  recursiveShapes(): Promise<RecursiveShapesCommandOutput>;
  recursiveShapes(
    args: RecursiveShapesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecursiveShapesCommandOutput>;
  recursiveShapes(
    args: RecursiveShapesCommandInput,
    cb: (err: any, data?: RecursiveShapesCommandOutput) => void
  ): void;
  recursiveShapes(
    args: RecursiveShapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecursiveShapesCommandOutput) => void
  ): void;

  /**
   * @see {@link RpcV2CborDenseMapsCommand}
   */
  rpcV2CborDenseMaps(): Promise<RpcV2CborDenseMapsCommandOutput>;
  rpcV2CborDenseMaps(
    args: RpcV2CborDenseMapsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RpcV2CborDenseMapsCommandOutput>;
  rpcV2CborDenseMaps(
    args: RpcV2CborDenseMapsCommandInput,
    cb: (err: any, data?: RpcV2CborDenseMapsCommandOutput) => void
  ): void;
  rpcV2CborDenseMaps(
    args: RpcV2CborDenseMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RpcV2CborDenseMapsCommandOutput) => void
  ): void;

  /**
   * @see {@link RpcV2CborListsCommand}
   */
  rpcV2CborLists(): Promise<RpcV2CborListsCommandOutput>;
  rpcV2CborLists(
    args: RpcV2CborListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RpcV2CborListsCommandOutput>;
  rpcV2CborLists(
    args: RpcV2CborListsCommandInput,
    cb: (err: any, data?: RpcV2CborListsCommandOutput) => void
  ): void;
  rpcV2CborLists(
    args: RpcV2CborListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RpcV2CborListsCommandOutput) => void
  ): void;

  /**
   * @see {@link RpcV2CborSparseMapsCommand}
   */
  rpcV2CborSparseMaps(): Promise<RpcV2CborSparseMapsCommandOutput>;
  rpcV2CborSparseMaps(
    args: RpcV2CborSparseMapsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RpcV2CborSparseMapsCommandOutput>;
  rpcV2CborSparseMaps(
    args: RpcV2CborSparseMapsCommandInput,
    cb: (err: any, data?: RpcV2CborSparseMapsCommandOutput) => void
  ): void;
  rpcV2CborSparseMaps(
    args: RpcV2CborSparseMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RpcV2CborSparseMapsCommandOutput) => void
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
export class RpcV2Protocol extends RpcV2ProtocolClient implements RpcV2Protocol {}
createAggregatedClient(commands, RpcV2Protocol);
