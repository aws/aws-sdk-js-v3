// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type DatetimeOffsetsCommandInput,
  type DatetimeOffsetsCommandOutput,
  DatetimeOffsetsCommand,
} from "./commands/DatetimeOffsetsCommand";
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
import {
  type IgnoresWrappingXmlNameCommandInput,
  type IgnoresWrappingXmlNameCommandOutput,
  IgnoresWrappingXmlNameCommand,
} from "./commands/IgnoresWrappingXmlNameCommand";
import {
  type NestedStructuresCommandInput,
  type NestedStructuresCommandOutput,
  NestedStructuresCommand,
} from "./commands/NestedStructuresCommand";
import {
  type NoInputAndOutputCommandInput,
  type NoInputAndOutputCommandOutput,
  NoInputAndOutputCommand,
} from "./commands/NoInputAndOutputCommand";
import {
  type PutWithContentEncodingCommandInput,
  type PutWithContentEncodingCommandOutput,
  PutWithContentEncodingCommand,
} from "./commands/PutWithContentEncodingCommand";
import {
  type QueryIdempotencyTokenAutoFillCommandInput,
  type QueryIdempotencyTokenAutoFillCommandOutput,
  QueryIdempotencyTokenAutoFillCommand,
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import {
  type QueryListsCommandInput,
  type QueryListsCommandOutput,
  QueryListsCommand,
} from "./commands/QueryListsCommand";
import {
  type QueryTimestampsCommandInput,
  type QueryTimestampsCommandOutput,
  QueryTimestampsCommand,
} from "./commands/QueryTimestampsCommand";
import {
  type RecursiveXmlShapesCommandInput,
  type RecursiveXmlShapesCommandOutput,
  RecursiveXmlShapesCommand,
} from "./commands/RecursiveXmlShapesCommand";
import {
  type SimpleInputParamsCommandInput,
  type SimpleInputParamsCommandOutput,
  SimpleInputParamsCommand,
} from "./commands/SimpleInputParamsCommand";
import {
  type SimpleScalarXmlPropertiesCommandInput,
  type SimpleScalarXmlPropertiesCommandOutput,
  SimpleScalarXmlPropertiesCommand,
} from "./commands/SimpleScalarXmlPropertiesCommand";
import { type XmlBlobsCommandInput, type XmlBlobsCommandOutput, XmlBlobsCommand } from "./commands/XmlBlobsCommand";
import {
  type XmlEmptyBlobsCommandInput,
  type XmlEmptyBlobsCommandOutput,
  XmlEmptyBlobsCommand,
} from "./commands/XmlEmptyBlobsCommand";
import {
  type XmlEmptyListsCommandInput,
  type XmlEmptyListsCommandOutput,
  XmlEmptyListsCommand,
} from "./commands/XmlEmptyListsCommand";
import { type XmlEnumsCommandInput, type XmlEnumsCommandOutput, XmlEnumsCommand } from "./commands/XmlEnumsCommand";
import {
  type XmlIntEnumsCommandInput,
  type XmlIntEnumsCommandOutput,
  XmlIntEnumsCommand,
} from "./commands/XmlIntEnumsCommand";
import { type XmlListsCommandInput, type XmlListsCommandOutput, XmlListsCommand } from "./commands/XmlListsCommand";
import {
  type XmlNamespacesCommandInput,
  type XmlNamespacesCommandOutput,
  XmlNamespacesCommand,
} from "./commands/XmlNamespacesCommand";
import {
  type XmlTimestampsCommandInput,
  type XmlTimestampsCommandOutput,
  XmlTimestampsCommand,
} from "./commands/XmlTimestampsCommand";
import { EC2ProtocolClient } from "./EC2ProtocolClient";

const commands = {
  DatetimeOffsetsCommand,
  EmptyInputAndEmptyOutputCommand,
  EndpointOperationCommand,
  EndpointWithHostLabelOperationCommand,
  FractionalSecondsCommand,
  GreetingWithErrorsCommand,
  HostWithPathOperationCommand,
  IgnoresWrappingXmlNameCommand,
  NestedStructuresCommand,
  NoInputAndOutputCommand,
  PutWithContentEncodingCommand,
  QueryIdempotencyTokenAutoFillCommand,
  QueryListsCommand,
  QueryTimestampsCommand,
  RecursiveXmlShapesCommand,
  SimpleInputParamsCommand,
  SimpleScalarXmlPropertiesCommand,
  XmlBlobsCommand,
  XmlEmptyBlobsCommand,
  XmlEmptyListsCommand,
  XmlEnumsCommand,
  XmlIntEnumsCommand,
  XmlListsCommand,
  XmlNamespacesCommand,
  XmlTimestampsCommand,
};

/**
 * @public
 */
export interface EC2ProtocolRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface EC2Protocol {
  /**
   * @see {@link DatetimeOffsetsCommand}
   */
  datetimeOffsets(): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;

  /**
   * @see {@link EmptyInputAndEmptyOutputCommand}
   */
  emptyInputAndEmptyOutput(): Promise<EmptyInputAndEmptyOutputCommandOutput>;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<EmptyInputAndEmptyOutputCommandOutput>;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointOperationCommand}
   */
  endpointOperation(): Promise<EndpointOperationCommandOutput>;
  endpointOperation(
    args: EndpointOperationCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<EndpointOperationCommandOutput>;
  endpointOperation(
    args: EndpointOperationCommandInput,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;
  endpointOperation(
    args: EndpointOperationCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointWithHostLabelOperationCommand}
   */
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<EndpointWithHostLabelOperationCommandOutput>;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link FractionalSecondsCommand}
   */
  fractionalSeconds(): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;

  /**
   * @see {@link GreetingWithErrorsCommand}
   */
  greetingWithErrors(): Promise<GreetingWithErrorsCommandOutput>;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<GreetingWithErrorsCommandOutput>;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;

  /**
   * @see {@link HostWithPathOperationCommand}
   */
  hostWithPathOperation(): Promise<HostWithPathOperationCommandOutput>;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<HostWithPathOperationCommandOutput>;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link IgnoresWrappingXmlNameCommand}
   */
  ignoresWrappingXmlName(): Promise<IgnoresWrappingXmlNameCommandOutput>;
  ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<IgnoresWrappingXmlNameCommandOutput>;
  ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    cb: (err: any, data?: IgnoresWrappingXmlNameCommandOutput) => void
  ): void;
  ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: IgnoresWrappingXmlNameCommandOutput) => void
  ): void;

  /**
   * @see {@link NestedStructuresCommand}
   */
  nestedStructures(): Promise<NestedStructuresCommandOutput>;
  nestedStructures(
    args: NestedStructuresCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<NestedStructuresCommandOutput>;
  nestedStructures(
    args: NestedStructuresCommandInput,
    cb: (err: any, data?: NestedStructuresCommandOutput) => void
  ): void;
  nestedStructures(
    args: NestedStructuresCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: NestedStructuresCommandOutput) => void
  ): void;

  /**
   * @see {@link NoInputAndOutputCommand}
   */
  noInputAndOutput(): Promise<NoInputAndOutputCommandOutput>;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<NoInputAndOutputCommandOutput>;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWithContentEncodingCommand}
   */
  putWithContentEncoding(): Promise<PutWithContentEncodingCommandOutput>;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<PutWithContentEncodingCommandOutput>;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    cb: (err: any, data?: PutWithContentEncodingCommandOutput) => void
  ): void;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: PutWithContentEncodingCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryIdempotencyTokenAutoFillCommand}
   */
  queryIdempotencyTokenAutoFill(): Promise<QueryIdempotencyTokenAutoFillCommandOutput>;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput>;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryListsCommand}
   */
  queryLists(): Promise<QueryListsCommandOutput>;
  queryLists(
    args: QueryListsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<QueryListsCommandOutput>;
  queryLists(
    args: QueryListsCommandInput,
    cb: (err: any, data?: QueryListsCommandOutput) => void
  ): void;
  queryLists(
    args: QueryListsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: QueryListsCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryTimestampsCommand}
   */
  queryTimestamps(): Promise<QueryTimestampsCommandOutput>;
  queryTimestamps(
    args: QueryTimestampsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<QueryTimestampsCommandOutput>;
  queryTimestamps(
    args: QueryTimestampsCommandInput,
    cb: (err: any, data?: QueryTimestampsCommandOutput) => void
  ): void;
  queryTimestamps(
    args: QueryTimestampsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: QueryTimestampsCommandOutput) => void
  ): void;

  /**
   * @see {@link RecursiveXmlShapesCommand}
   */
  recursiveXmlShapes(): Promise<RecursiveXmlShapesCommandOutput>;
  recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<RecursiveXmlShapesCommandOutput>;
  recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    cb: (err: any, data?: RecursiveXmlShapesCommandOutput) => void
  ): void;
  recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: RecursiveXmlShapesCommandOutput) => void
  ): void;

  /**
   * @see {@link SimpleInputParamsCommand}
   */
  simpleInputParams(): Promise<SimpleInputParamsCommandOutput>;
  simpleInputParams(
    args: SimpleInputParamsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<SimpleInputParamsCommandOutput>;
  simpleInputParams(
    args: SimpleInputParamsCommandInput,
    cb: (err: any, data?: SimpleInputParamsCommandOutput) => void
  ): void;
  simpleInputParams(
    args: SimpleInputParamsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: SimpleInputParamsCommandOutput) => void
  ): void;

  /**
   * @see {@link SimpleScalarXmlPropertiesCommand}
   */
  simpleScalarXmlProperties(): Promise<SimpleScalarXmlPropertiesCommandOutput>;
  simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<SimpleScalarXmlPropertiesCommandOutput>;
  simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    cb: (err: any, data?: SimpleScalarXmlPropertiesCommandOutput) => void
  ): void;
  simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: SimpleScalarXmlPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlBlobsCommand}
   */
  xmlBlobs(): Promise<XmlBlobsCommandOutput>;
  xmlBlobs(
    args: XmlBlobsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<XmlBlobsCommandOutput>;
  xmlBlobs(
    args: XmlBlobsCommandInput,
    cb: (err: any, data?: XmlBlobsCommandOutput) => void
  ): void;
  xmlBlobs(
    args: XmlBlobsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: XmlBlobsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEmptyBlobsCommand}
   */
  xmlEmptyBlobs(): Promise<XmlEmptyBlobsCommandOutput>;
  xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<XmlEmptyBlobsCommandOutput>;
  xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    cb: (err: any, data?: XmlEmptyBlobsCommandOutput) => void
  ): void;
  xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: XmlEmptyBlobsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEmptyListsCommand}
   */
  xmlEmptyLists(): Promise<XmlEmptyListsCommandOutput>;
  xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<XmlEmptyListsCommandOutput>;
  xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    cb: (err: any, data?: XmlEmptyListsCommandOutput) => void
  ): void;
  xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: XmlEmptyListsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEnumsCommand}
   */
  xmlEnums(): Promise<XmlEnumsCommandOutput>;
  xmlEnums(
    args: XmlEnumsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<XmlEnumsCommandOutput>;
  xmlEnums(
    args: XmlEnumsCommandInput,
    cb: (err: any, data?: XmlEnumsCommandOutput) => void
  ): void;
  xmlEnums(
    args: XmlEnumsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: XmlEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlIntEnumsCommand}
   */
  xmlIntEnums(): Promise<XmlIntEnumsCommandOutput>;
  xmlIntEnums(
    args: XmlIntEnumsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<XmlIntEnumsCommandOutput>;
  xmlIntEnums(
    args: XmlIntEnumsCommandInput,
    cb: (err: any, data?: XmlIntEnumsCommandOutput) => void
  ): void;
  xmlIntEnums(
    args: XmlIntEnumsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: XmlIntEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlListsCommand}
   */
  xmlLists(): Promise<XmlListsCommandOutput>;
  xmlLists(
    args: XmlListsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<XmlListsCommandOutput>;
  xmlLists(
    args: XmlListsCommandInput,
    cb: (err: any, data?: XmlListsCommandOutput) => void
  ): void;
  xmlLists(
    args: XmlListsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: XmlListsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlNamespacesCommand}
   */
  xmlNamespaces(): Promise<XmlNamespacesCommandOutput>;
  xmlNamespaces(
    args: XmlNamespacesCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<XmlNamespacesCommandOutput>;
  xmlNamespaces(
    args: XmlNamespacesCommandInput,
    cb: (err: any, data?: XmlNamespacesCommandOutput) => void
  ): void;
  xmlNamespaces(
    args: XmlNamespacesCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: XmlNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlTimestampsCommand}
   */
  xmlTimestamps(): Promise<XmlTimestampsCommandOutput>;
  xmlTimestamps(
    args: XmlTimestampsCommandInput,
    options?: EC2ProtocolRequestOptions
  ): Promise<XmlTimestampsCommandOutput>;
  xmlTimestamps(
    args: XmlTimestampsCommandInput,
    cb: (err: any, data?: XmlTimestampsCommandOutput) => void
  ): void;
  xmlTimestamps(
    args: XmlTimestampsCommandInput,
    options: EC2ProtocolRequestOptions,
    cb: (err: any, data?: XmlTimestampsCommandOutput) => void
  ): void;
}

/**
 * An EC2 query service that sends query requests and XML responses.
 * @public
 */
export class EC2Protocol extends EC2ProtocolClient implements EC2Protocol {}
createAggregatedClient(commands, EC2Protocol);
