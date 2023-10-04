// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AllQueryStringTypesCommand,
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
} from "./commands/AllQueryStringTypesCommand";
import {
  BodyWithXmlNameCommand,
  BodyWithXmlNameCommandInput,
  BodyWithXmlNameCommandOutput,
} from "./commands/BodyWithXmlNameCommand";
import {
  ConstantAndVariableQueryStringCommand,
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput,
} from "./commands/ConstantAndVariableQueryStringCommand";
import {
  ConstantQueryStringCommand,
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput,
} from "./commands/ConstantQueryStringCommand";
import {
  DatetimeOffsetsCommand,
  DatetimeOffsetsCommandInput,
  DatetimeOffsetsCommandOutput,
} from "./commands/DatetimeOffsetsCommand";
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
  EndpointWithHostLabelHeaderOperationCommand,
  EndpointWithHostLabelHeaderOperationCommandInput,
  EndpointWithHostLabelHeaderOperationCommandOutput,
} from "./commands/EndpointWithHostLabelHeaderOperationCommand";
import {
  EndpointWithHostLabelOperationCommand,
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "./commands/EndpointWithHostLabelOperationCommand";
import {
  FlattenedXmlMapCommand,
  FlattenedXmlMapCommandInput,
  FlattenedXmlMapCommandOutput,
} from "./commands/FlattenedXmlMapCommand";
import {
  FlattenedXmlMapWithXmlNameCommand,
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput,
} from "./commands/FlattenedXmlMapWithXmlNameCommand";
import {
  FlattenedXmlMapWithXmlNamespaceCommand,
  FlattenedXmlMapWithXmlNamespaceCommandInput,
  FlattenedXmlMapWithXmlNamespaceCommandOutput,
} from "./commands/FlattenedXmlMapWithXmlNamespaceCommand";
import {
  FractionalSecondsCommand,
  FractionalSecondsCommandInput,
  FractionalSecondsCommandOutput,
} from "./commands/FractionalSecondsCommand";
import {
  GreetingWithErrorsCommand,
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
} from "./commands/GreetingWithErrorsCommand";
import {
  HttpPayloadTraitsCommand,
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput,
} from "./commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommand,
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
} from "./commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  HttpPayloadWithMemberXmlNameCommand,
  HttpPayloadWithMemberXmlNameCommandInput,
  HttpPayloadWithMemberXmlNameCommandOutput,
} from "./commands/HttpPayloadWithMemberXmlNameCommand";
import {
  HttpPayloadWithStructureCommand,
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "./commands/HttpPayloadWithStructureCommand";
import {
  HttpPayloadWithUnionCommand,
  HttpPayloadWithUnionCommandInput,
  HttpPayloadWithUnionCommandOutput,
} from "./commands/HttpPayloadWithUnionCommand";
import {
  HttpPayloadWithXmlNameCommand,
  HttpPayloadWithXmlNameCommandInput,
  HttpPayloadWithXmlNameCommandOutput,
} from "./commands/HttpPayloadWithXmlNameCommand";
import {
  HttpPayloadWithXmlNamespaceAndPrefixCommand,
  HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  HttpPayloadWithXmlNamespaceAndPrefixCommandOutput,
} from "./commands/HttpPayloadWithXmlNamespaceAndPrefixCommand";
import {
  HttpPayloadWithXmlNamespaceCommand,
  HttpPayloadWithXmlNamespaceCommandInput,
  HttpPayloadWithXmlNamespaceCommandOutput,
} from "./commands/HttpPayloadWithXmlNamespaceCommand";
import {
  HttpPrefixHeadersCommand,
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
} from "./commands/HttpPrefixHeadersCommand";
import {
  HttpRequestWithFloatLabelsCommand,
  HttpRequestWithFloatLabelsCommandInput,
  HttpRequestWithFloatLabelsCommandOutput,
} from "./commands/HttpRequestWithFloatLabelsCommand";
import {
  HttpRequestWithGreedyLabelInPathCommand,
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput,
} from "./commands/HttpRequestWithGreedyLabelInPathCommand";
import {
  HttpRequestWithLabelsAndTimestampFormatCommand,
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput,
} from "./commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import {
  HttpRequestWithLabelsCommand,
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput,
} from "./commands/HttpRequestWithLabelsCommand";
import {
  HttpResponseCodeCommand,
  HttpResponseCodeCommandInput,
  HttpResponseCodeCommandOutput,
} from "./commands/HttpResponseCodeCommand";
import {
  IgnoreQueryParamsInResponseCommand,
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
} from "./commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommand,
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
} from "./commands/InputAndOutputWithHeadersCommand";
import {
  NestedXmlMapsCommand,
  NestedXmlMapsCommandInput,
  NestedXmlMapsCommandOutput,
} from "./commands/NestedXmlMapsCommand";
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
  NullAndEmptyHeadersClientCommand,
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
} from "./commands/NullAndEmptyHeadersClientCommand";
import {
  NullAndEmptyHeadersServerCommand,
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput,
} from "./commands/NullAndEmptyHeadersServerCommand";
import {
  OmitsNullSerializesEmptyStringCommand,
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput,
} from "./commands/OmitsNullSerializesEmptyStringCommand";
import {
  PutWithContentEncodingCommand,
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "./commands/PutWithContentEncodingCommand";
import {
  QueryIdempotencyTokenAutoFillCommand,
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import {
  QueryParamsAsStringListMapCommand,
  QueryParamsAsStringListMapCommandInput,
  QueryParamsAsStringListMapCommandOutput,
} from "./commands/QueryParamsAsStringListMapCommand";
import {
  QueryPrecedenceCommand,
  QueryPrecedenceCommandInput,
  QueryPrecedenceCommandOutput,
} from "./commands/QueryPrecedenceCommand";
import {
  RecursiveShapesCommand,
  RecursiveShapesCommandInput,
  RecursiveShapesCommandOutput,
} from "./commands/RecursiveShapesCommand";
import {
  SimpleScalarPropertiesCommand,
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "./commands/SimpleScalarPropertiesCommand";
import {
  TimestampFormatHeadersCommand,
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "./commands/TimestampFormatHeadersCommand";
import {
  XmlAttributesCommand,
  XmlAttributesCommandInput,
  XmlAttributesCommandOutput,
} from "./commands/XmlAttributesCommand";
import {
  XmlAttributesOnPayloadCommand,
  XmlAttributesOnPayloadCommandInput,
  XmlAttributesOnPayloadCommandOutput,
} from "./commands/XmlAttributesOnPayloadCommand";
import { XmlBlobsCommand, XmlBlobsCommandInput, XmlBlobsCommandOutput } from "./commands/XmlBlobsCommand";
import {
  XmlEmptyBlobsCommand,
  XmlEmptyBlobsCommandInput,
  XmlEmptyBlobsCommandOutput,
} from "./commands/XmlEmptyBlobsCommand";
import {
  XmlEmptyListsCommand,
  XmlEmptyListsCommandInput,
  XmlEmptyListsCommandOutput,
} from "./commands/XmlEmptyListsCommand";
import {
  XmlEmptyMapsCommand,
  XmlEmptyMapsCommandInput,
  XmlEmptyMapsCommandOutput,
} from "./commands/XmlEmptyMapsCommand";
import {
  XmlEmptyStringsCommand,
  XmlEmptyStringsCommandInput,
  XmlEmptyStringsCommandOutput,
} from "./commands/XmlEmptyStringsCommand";
import { XmlEnumsCommand, XmlEnumsCommandInput, XmlEnumsCommandOutput } from "./commands/XmlEnumsCommand";
import { XmlIntEnumsCommand, XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput } from "./commands/XmlIntEnumsCommand";
import { XmlListsCommand, XmlListsCommandInput, XmlListsCommandOutput } from "./commands/XmlListsCommand";
import { XmlMapsCommand, XmlMapsCommandInput, XmlMapsCommandOutput } from "./commands/XmlMapsCommand";
import {
  XmlMapsXmlNameCommand,
  XmlMapsXmlNameCommandInput,
  XmlMapsXmlNameCommandOutput,
} from "./commands/XmlMapsXmlNameCommand";
import {
  XmlMapWithXmlNamespaceCommand,
  XmlMapWithXmlNamespaceCommandInput,
  XmlMapWithXmlNamespaceCommandOutput,
} from "./commands/XmlMapWithXmlNamespaceCommand";
import {
  XmlNamespacesCommand,
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput,
} from "./commands/XmlNamespacesCommand";
import {
  XmlTimestampsCommand,
  XmlTimestampsCommandInput,
  XmlTimestampsCommandOutput,
} from "./commands/XmlTimestampsCommand";
import { XmlUnionsCommand, XmlUnionsCommandInput, XmlUnionsCommandOutput } from "./commands/XmlUnionsCommand";
import { RestXmlProtocolClient, RestXmlProtocolClientConfig } from "./RestXmlProtocolClient";

const commands = {
  AllQueryStringTypesCommand,
  BodyWithXmlNameCommand,
  ConstantAndVariableQueryStringCommand,
  ConstantQueryStringCommand,
  DatetimeOffsetsCommand,
  EmptyInputAndEmptyOutputCommand,
  EndpointOperationCommand,
  EndpointWithHostLabelHeaderOperationCommand,
  EndpointWithHostLabelOperationCommand,
  FlattenedXmlMapCommand,
  FlattenedXmlMapWithXmlNameCommand,
  FlattenedXmlMapWithXmlNamespaceCommand,
  FractionalSecondsCommand,
  GreetingWithErrorsCommand,
  HttpPayloadTraitsCommand,
  HttpPayloadTraitsWithMediaTypeCommand,
  HttpPayloadWithMemberXmlNameCommand,
  HttpPayloadWithStructureCommand,
  HttpPayloadWithUnionCommand,
  HttpPayloadWithXmlNameCommand,
  HttpPayloadWithXmlNamespaceCommand,
  HttpPayloadWithXmlNamespaceAndPrefixCommand,
  HttpPrefixHeadersCommand,
  HttpRequestWithFloatLabelsCommand,
  HttpRequestWithGreedyLabelInPathCommand,
  HttpRequestWithLabelsCommand,
  HttpRequestWithLabelsAndTimestampFormatCommand,
  HttpResponseCodeCommand,
  IgnoreQueryParamsInResponseCommand,
  InputAndOutputWithHeadersCommand,
  NestedXmlMapsCommand,
  NoInputAndNoOutputCommand,
  NoInputAndOutputCommand,
  NullAndEmptyHeadersClientCommand,
  NullAndEmptyHeadersServerCommand,
  OmitsNullSerializesEmptyStringCommand,
  PutWithContentEncodingCommand,
  QueryIdempotencyTokenAutoFillCommand,
  QueryParamsAsStringListMapCommand,
  QueryPrecedenceCommand,
  RecursiveShapesCommand,
  SimpleScalarPropertiesCommand,
  TimestampFormatHeadersCommand,
  XmlAttributesCommand,
  XmlAttributesOnPayloadCommand,
  XmlBlobsCommand,
  XmlEmptyBlobsCommand,
  XmlEmptyListsCommand,
  XmlEmptyMapsCommand,
  XmlEmptyStringsCommand,
  XmlEnumsCommand,
  XmlIntEnumsCommand,
  XmlListsCommand,
  XmlMapsCommand,
  XmlMapsXmlNameCommand,
  XmlMapWithXmlNamespaceCommand,
  XmlNamespacesCommand,
  XmlTimestampsCommand,
  XmlUnionsCommand,
};

export interface RestXmlProtocol {
  /**
   * @see {@link AllQueryStringTypesCommand}
   */
  allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllQueryStringTypesCommandOutput>;
  allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    cb: (err: any, data?: AllQueryStringTypesCommandOutput) => void
  ): void;
  allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllQueryStringTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link BodyWithXmlNameCommand}
   */
  bodyWithXmlName(
    args: BodyWithXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BodyWithXmlNameCommandOutput>;
  bodyWithXmlName(args: BodyWithXmlNameCommandInput, cb: (err: any, data?: BodyWithXmlNameCommandOutput) => void): void;
  bodyWithXmlName(
    args: BodyWithXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BodyWithXmlNameCommandOutput) => void
  ): void;

  /**
   * @see {@link ConstantAndVariableQueryStringCommand}
   */
  constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConstantAndVariableQueryStringCommandOutput>;
  constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    cb: (err: any, data?: ConstantAndVariableQueryStringCommandOutput) => void
  ): void;
  constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConstantAndVariableQueryStringCommandOutput) => void
  ): void;

  /**
   * @see {@link ConstantQueryStringCommand}
   */
  constantQueryString(
    args: ConstantQueryStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConstantQueryStringCommandOutput>;
  constantQueryString(
    args: ConstantQueryStringCommandInput,
    cb: (err: any, data?: ConstantQueryStringCommandOutput) => void
  ): void;
  constantQueryString(
    args: ConstantQueryStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConstantQueryStringCommandOutput) => void
  ): void;

  /**
   * @see {@link DatetimeOffsetsCommand}
   */
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
   * @see {@link EndpointWithHostLabelHeaderOperationCommand}
   */
  endpointWithHostLabelHeaderOperation(
    args: EndpointWithHostLabelHeaderOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointWithHostLabelHeaderOperationCommandOutput>;
  endpointWithHostLabelHeaderOperation(
    args: EndpointWithHostLabelHeaderOperationCommandInput,
    cb: (err: any, data?: EndpointWithHostLabelHeaderOperationCommandOutput) => void
  ): void;
  endpointWithHostLabelHeaderOperation(
    args: EndpointWithHostLabelHeaderOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointWithHostLabelHeaderOperationCommandOutput) => void
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
   * @see {@link FlattenedXmlMapCommand}
   */
  flattenedXmlMap(
    args: FlattenedXmlMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlattenedXmlMapCommandOutput>;
  flattenedXmlMap(args: FlattenedXmlMapCommandInput, cb: (err: any, data?: FlattenedXmlMapCommandOutput) => void): void;
  flattenedXmlMap(
    args: FlattenedXmlMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlattenedXmlMapCommandOutput) => void
  ): void;

  /**
   * @see {@link FlattenedXmlMapWithXmlNameCommand}
   */
  flattenedXmlMapWithXmlName(
    args: FlattenedXmlMapWithXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlattenedXmlMapWithXmlNameCommandOutput>;
  flattenedXmlMapWithXmlName(
    args: FlattenedXmlMapWithXmlNameCommandInput,
    cb: (err: any, data?: FlattenedXmlMapWithXmlNameCommandOutput) => void
  ): void;
  flattenedXmlMapWithXmlName(
    args: FlattenedXmlMapWithXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlattenedXmlMapWithXmlNameCommandOutput) => void
  ): void;

  /**
   * @see {@link FlattenedXmlMapWithXmlNamespaceCommand}
   */
  flattenedXmlMapWithXmlNamespace(
    args: FlattenedXmlMapWithXmlNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput>;
  flattenedXmlMapWithXmlNamespace(
    args: FlattenedXmlMapWithXmlNamespaceCommandInput,
    cb: (err: any, data?: FlattenedXmlMapWithXmlNamespaceCommandOutput) => void
  ): void;
  flattenedXmlMapWithXmlNamespace(
    args: FlattenedXmlMapWithXmlNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlattenedXmlMapWithXmlNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link FractionalSecondsCommand}
   */
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
   * @see {@link HttpPayloadTraitsCommand}
   */
  httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadTraitsCommandOutput>;
  httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    cb: (err: any, data?: HttpPayloadTraitsCommandOutput) => void
  ): void;
  httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadTraitsCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadTraitsWithMediaTypeCommand}
   */
  httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput>;
  httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    cb: (err: any, data?: HttpPayloadTraitsWithMediaTypeCommandOutput) => void
  ): void;
  httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadTraitsWithMediaTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadWithMemberXmlNameCommand}
   */
  httpPayloadWithMemberXmlName(
    args: HttpPayloadWithMemberXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithMemberXmlNameCommandOutput>;
  httpPayloadWithMemberXmlName(
    args: HttpPayloadWithMemberXmlNameCommandInput,
    cb: (err: any, data?: HttpPayloadWithMemberXmlNameCommandOutput) => void
  ): void;
  httpPayloadWithMemberXmlName(
    args: HttpPayloadWithMemberXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithMemberXmlNameCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadWithStructureCommand}
   */
  httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithStructureCommandOutput>;
  httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    cb: (err: any, data?: HttpPayloadWithStructureCommandOutput) => void
  ): void;
  httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithStructureCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadWithUnionCommand}
   */
  httpPayloadWithUnion(
    args: HttpPayloadWithUnionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithUnionCommandOutput>;
  httpPayloadWithUnion(
    args: HttpPayloadWithUnionCommandInput,
    cb: (err: any, data?: HttpPayloadWithUnionCommandOutput) => void
  ): void;
  httpPayloadWithUnion(
    args: HttpPayloadWithUnionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithUnionCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadWithXmlNameCommand}
   */
  httpPayloadWithXmlName(
    args: HttpPayloadWithXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithXmlNameCommandOutput>;
  httpPayloadWithXmlName(
    args: HttpPayloadWithXmlNameCommandInput,
    cb: (err: any, data?: HttpPayloadWithXmlNameCommandOutput) => void
  ): void;
  httpPayloadWithXmlName(
    args: HttpPayloadWithXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithXmlNameCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadWithXmlNamespaceCommand}
   */
  httpPayloadWithXmlNamespace(
    args: HttpPayloadWithXmlNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithXmlNamespaceCommandOutput>;
  httpPayloadWithXmlNamespace(
    args: HttpPayloadWithXmlNamespaceCommandInput,
    cb: (err: any, data?: HttpPayloadWithXmlNamespaceCommandOutput) => void
  ): void;
  httpPayloadWithXmlNamespace(
    args: HttpPayloadWithXmlNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithXmlNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadWithXmlNamespaceAndPrefixCommand}
   */
  httpPayloadWithXmlNamespaceAndPrefix(
    args: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput>;
  httpPayloadWithXmlNamespaceAndPrefix(
    args: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    cb: (err: any, data?: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput) => void
  ): void;
  httpPayloadWithXmlNamespaceAndPrefix(
    args: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPrefixHeadersCommand}
   */
  httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPrefixHeadersCommandOutput>;
  httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    cb: (err: any, data?: HttpPrefixHeadersCommandOutput) => void
  ): void;
  httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPrefixHeadersCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithFloatLabelsCommand}
   */
  httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithFloatLabelsCommandOutput>;
  httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    cb: (err: any, data?: HttpRequestWithFloatLabelsCommandOutput) => void
  ): void;
  httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithFloatLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithGreedyLabelInPathCommand}
   */
  httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithGreedyLabelInPathCommandOutput>;
  httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    cb: (err: any, data?: HttpRequestWithGreedyLabelInPathCommandOutput) => void
  ): void;
  httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithGreedyLabelInPathCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithLabelsCommand}
   */
  httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithLabelsCommandOutput>;
  httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    cb: (err: any, data?: HttpRequestWithLabelsCommandOutput) => void
  ): void;
  httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithLabelsAndTimestampFormatCommand}
   */
  httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput>;
  httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    cb: (err: any, data?: HttpRequestWithLabelsAndTimestampFormatCommandOutput) => void
  ): void;
  httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithLabelsAndTimestampFormatCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpResponseCodeCommand}
   */
  httpResponseCode(
    args: HttpResponseCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpResponseCodeCommandOutput>;
  httpResponseCode(
    args: HttpResponseCodeCommandInput,
    cb: (err: any, data?: HttpResponseCodeCommandOutput) => void
  ): void;
  httpResponseCode(
    args: HttpResponseCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpResponseCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link IgnoreQueryParamsInResponseCommand}
   */
  ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IgnoreQueryParamsInResponseCommandOutput>;
  ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    cb: (err: any, data?: IgnoreQueryParamsInResponseCommandOutput) => void
  ): void;
  ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IgnoreQueryParamsInResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link InputAndOutputWithHeadersCommand}
   */
  inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InputAndOutputWithHeadersCommandOutput>;
  inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    cb: (err: any, data?: InputAndOutputWithHeadersCommandOutput) => void
  ): void;
  inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InputAndOutputWithHeadersCommandOutput) => void
  ): void;

  /**
   * @see {@link NestedXmlMapsCommand}
   */
  nestedXmlMaps(args: NestedXmlMapsCommandInput, options?: __HttpHandlerOptions): Promise<NestedXmlMapsCommandOutput>;
  nestedXmlMaps(args: NestedXmlMapsCommandInput, cb: (err: any, data?: NestedXmlMapsCommandOutput) => void): void;
  nestedXmlMaps(
    args: NestedXmlMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NestedXmlMapsCommandOutput) => void
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
   * @see {@link NullAndEmptyHeadersClientCommand}
   */
  nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NullAndEmptyHeadersClientCommandOutput>;
  nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    cb: (err: any, data?: NullAndEmptyHeadersClientCommandOutput) => void
  ): void;
  nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NullAndEmptyHeadersClientCommandOutput) => void
  ): void;

  /**
   * @see {@link NullAndEmptyHeadersServerCommand}
   */
  nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NullAndEmptyHeadersServerCommandOutput>;
  nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    cb: (err: any, data?: NullAndEmptyHeadersServerCommandOutput) => void
  ): void;
  nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NullAndEmptyHeadersServerCommandOutput) => void
  ): void;

  /**
   * @see {@link OmitsNullSerializesEmptyStringCommand}
   */
  omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OmitsNullSerializesEmptyStringCommandOutput>;
  omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    cb: (err: any, data?: OmitsNullSerializesEmptyStringCommandOutput) => void
  ): void;
  omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OmitsNullSerializesEmptyStringCommandOutput) => void
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
   * @see {@link QueryIdempotencyTokenAutoFillCommand}
   */
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput>;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryParamsAsStringListMapCommand}
   */
  queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryParamsAsStringListMapCommandOutput>;
  queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    cb: (err: any, data?: QueryParamsAsStringListMapCommandOutput) => void
  ): void;
  queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryParamsAsStringListMapCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryPrecedenceCommand}
   */
  queryPrecedence(
    args: QueryPrecedenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryPrecedenceCommandOutput>;
  queryPrecedence(args: QueryPrecedenceCommandInput, cb: (err: any, data?: QueryPrecedenceCommandOutput) => void): void;
  queryPrecedence(
    args: QueryPrecedenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryPrecedenceCommandOutput) => void
  ): void;

  /**
   * @see {@link RecursiveShapesCommand}
   */
  recursiveShapes(
    args: RecursiveShapesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecursiveShapesCommandOutput>;
  recursiveShapes(args: RecursiveShapesCommandInput, cb: (err: any, data?: RecursiveShapesCommandOutput) => void): void;
  recursiveShapes(
    args: RecursiveShapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecursiveShapesCommandOutput) => void
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

  /**
   * @see {@link TimestampFormatHeadersCommand}
   */
  timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TimestampFormatHeadersCommandOutput>;
  timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    cb: (err: any, data?: TimestampFormatHeadersCommandOutput) => void
  ): void;
  timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TimestampFormatHeadersCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlAttributesCommand}
   */
  xmlAttributes(args: XmlAttributesCommandInput, options?: __HttpHandlerOptions): Promise<XmlAttributesCommandOutput>;
  xmlAttributes(args: XmlAttributesCommandInput, cb: (err: any, data?: XmlAttributesCommandOutput) => void): void;
  xmlAttributes(
    args: XmlAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlAttributesOnPayloadCommand}
   */
  xmlAttributesOnPayload(
    args: XmlAttributesOnPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlAttributesOnPayloadCommandOutput>;
  xmlAttributesOnPayload(
    args: XmlAttributesOnPayloadCommandInput,
    cb: (err: any, data?: XmlAttributesOnPayloadCommandOutput) => void
  ): void;
  xmlAttributesOnPayload(
    args: XmlAttributesOnPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlAttributesOnPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlBlobsCommand}
   */
  xmlBlobs(args: XmlBlobsCommandInput, options?: __HttpHandlerOptions): Promise<XmlBlobsCommandOutput>;
  xmlBlobs(args: XmlBlobsCommandInput, cb: (err: any, data?: XmlBlobsCommandOutput) => void): void;
  xmlBlobs(
    args: XmlBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlBlobsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEmptyBlobsCommand}
   */
  xmlEmptyBlobs(args: XmlEmptyBlobsCommandInput, options?: __HttpHandlerOptions): Promise<XmlEmptyBlobsCommandOutput>;
  xmlEmptyBlobs(args: XmlEmptyBlobsCommandInput, cb: (err: any, data?: XmlEmptyBlobsCommandOutput) => void): void;
  xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyBlobsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEmptyListsCommand}
   */
  xmlEmptyLists(args: XmlEmptyListsCommandInput, options?: __HttpHandlerOptions): Promise<XmlEmptyListsCommandOutput>;
  xmlEmptyLists(args: XmlEmptyListsCommandInput, cb: (err: any, data?: XmlEmptyListsCommandOutput) => void): void;
  xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyListsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEmptyMapsCommand}
   */
  xmlEmptyMaps(args: XmlEmptyMapsCommandInput, options?: __HttpHandlerOptions): Promise<XmlEmptyMapsCommandOutput>;
  xmlEmptyMaps(args: XmlEmptyMapsCommandInput, cb: (err: any, data?: XmlEmptyMapsCommandOutput) => void): void;
  xmlEmptyMaps(
    args: XmlEmptyMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyMapsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEmptyStringsCommand}
   */
  xmlEmptyStrings(
    args: XmlEmptyStringsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlEmptyStringsCommandOutput>;
  xmlEmptyStrings(args: XmlEmptyStringsCommandInput, cb: (err: any, data?: XmlEmptyStringsCommandOutput) => void): void;
  xmlEmptyStrings(
    args: XmlEmptyStringsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyStringsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEnumsCommand}
   */
  xmlEnums(args: XmlEnumsCommandInput, options?: __HttpHandlerOptions): Promise<XmlEnumsCommandOutput>;
  xmlEnums(args: XmlEnumsCommandInput, cb: (err: any, data?: XmlEnumsCommandOutput) => void): void;
  xmlEnums(
    args: XmlEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlIntEnumsCommand}
   */
  xmlIntEnums(args: XmlIntEnumsCommandInput, options?: __HttpHandlerOptions): Promise<XmlIntEnumsCommandOutput>;
  xmlIntEnums(args: XmlIntEnumsCommandInput, cb: (err: any, data?: XmlIntEnumsCommandOutput) => void): void;
  xmlIntEnums(
    args: XmlIntEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlIntEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlListsCommand}
   */
  xmlLists(args: XmlListsCommandInput, options?: __HttpHandlerOptions): Promise<XmlListsCommandOutput>;
  xmlLists(args: XmlListsCommandInput, cb: (err: any, data?: XmlListsCommandOutput) => void): void;
  xmlLists(
    args: XmlListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlListsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlMapsCommand}
   */
  xmlMaps(args: XmlMapsCommandInput, options?: __HttpHandlerOptions): Promise<XmlMapsCommandOutput>;
  xmlMaps(args: XmlMapsCommandInput, cb: (err: any, data?: XmlMapsCommandOutput) => void): void;
  xmlMaps(
    args: XmlMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlMapsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlMapsXmlNameCommand}
   */
  xmlMapsXmlName(
    args: XmlMapsXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlMapsXmlNameCommandOutput>;
  xmlMapsXmlName(args: XmlMapsXmlNameCommandInput, cb: (err: any, data?: XmlMapsXmlNameCommandOutput) => void): void;
  xmlMapsXmlName(
    args: XmlMapsXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlMapsXmlNameCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlMapWithXmlNamespaceCommand}
   */
  xmlMapWithXmlNamespace(
    args: XmlMapWithXmlNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlMapWithXmlNamespaceCommandOutput>;
  xmlMapWithXmlNamespace(
    args: XmlMapWithXmlNamespaceCommandInput,
    cb: (err: any, data?: XmlMapWithXmlNamespaceCommandOutput) => void
  ): void;
  xmlMapWithXmlNamespace(
    args: XmlMapWithXmlNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlMapWithXmlNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlNamespacesCommand}
   */
  xmlNamespaces(args: XmlNamespacesCommandInput, options?: __HttpHandlerOptions): Promise<XmlNamespacesCommandOutput>;
  xmlNamespaces(args: XmlNamespacesCommandInput, cb: (err: any, data?: XmlNamespacesCommandOutput) => void): void;
  xmlNamespaces(
    args: XmlNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlTimestampsCommand}
   */
  xmlTimestamps(args: XmlTimestampsCommandInput, options?: __HttpHandlerOptions): Promise<XmlTimestampsCommandOutput>;
  xmlTimestamps(args: XmlTimestampsCommandInput, cb: (err: any, data?: XmlTimestampsCommandOutput) => void): void;
  xmlTimestamps(
    args: XmlTimestampsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlTimestampsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlUnionsCommand}
   */
  xmlUnions(args: XmlUnionsCommandInput, options?: __HttpHandlerOptions): Promise<XmlUnionsCommandOutput>;
  xmlUnions(args: XmlUnionsCommandInput, cb: (err: any, data?: XmlUnionsCommandOutput) => void): void;
  xmlUnions(
    args: XmlUnionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlUnionsCommandOutput) => void
  ): void;
}

/**
 * @public
 * A REST XML service that sends XML requests and responses.
 */
export class RestXmlProtocol extends RestXmlProtocolClient implements RestXmlProtocol {}
createAggregatedClient(commands, RestXmlProtocol);
