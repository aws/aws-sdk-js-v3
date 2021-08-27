import { RestJsonProtocolClient } from "./RestJsonProtocolClient";
import {
  AllQueryStringTypesCommand,
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
} from "./commands/AllQueryStringTypesCommand";
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
  DocumentTypeAsPayloadCommand,
  DocumentTypeAsPayloadCommandInput,
  DocumentTypeAsPayloadCommandOutput,
} from "./commands/DocumentTypeAsPayloadCommand";
import {
  DocumentTypeCommand,
  DocumentTypeCommandInput,
  DocumentTypeCommandOutput,
} from "./commands/DocumentTypeCommand";
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
import {
  HttpChecksumRequiredCommand,
  HttpChecksumRequiredCommandInput,
  HttpChecksumRequiredCommandOutput,
} from "./commands/HttpChecksumRequiredCommand";
import {
  HttpEnumPayloadCommand,
  HttpEnumPayloadCommandInput,
  HttpEnumPayloadCommandOutput,
} from "./commands/HttpEnumPayloadCommand";
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
  HttpPayloadWithStructureCommand,
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "./commands/HttpPayloadWithStructureCommand";
import {
  HttpPrefixHeadersCommand,
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
} from "./commands/HttpPrefixHeadersCommand";
import {
  HttpPrefixHeadersResponseCommand,
  HttpPrefixHeadersResponseCommandInput,
  HttpPrefixHeadersResponseCommandOutput,
} from "./commands/HttpPrefixHeadersResponseCommand";
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
  HttpStringPayloadCommand,
  HttpStringPayloadCommandInput,
  HttpStringPayloadCommandOutput,
} from "./commands/HttpStringPayloadCommand";
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
import { JsonBlobsCommand, JsonBlobsCommandInput, JsonBlobsCommandOutput } from "./commands/JsonBlobsCommand";
import { JsonEnumsCommand, JsonEnumsCommandInput, JsonEnumsCommandOutput } from "./commands/JsonEnumsCommand";
import { JsonListsCommand, JsonListsCommandInput, JsonListsCommandOutput } from "./commands/JsonListsCommand";
import { JsonMapsCommand, JsonMapsCommandInput, JsonMapsCommandOutput } from "./commands/JsonMapsCommand";
import {
  JsonTimestampsCommand,
  JsonTimestampsCommandInput,
  JsonTimestampsCommandOutput,
} from "./commands/JsonTimestampsCommand";
import { JsonUnionsCommand, JsonUnionsCommandInput, JsonUnionsCommandOutput } from "./commands/JsonUnionsCommand";
import {
  MalformedAcceptWithBodyCommand,
  MalformedAcceptWithBodyCommandInput,
  MalformedAcceptWithBodyCommandOutput,
} from "./commands/MalformedAcceptWithBodyCommand";
import {
  MalformedAcceptWithGenericStringCommand,
  MalformedAcceptWithGenericStringCommandInput,
  MalformedAcceptWithGenericStringCommandOutput,
} from "./commands/MalformedAcceptWithGenericStringCommand";
import {
  MalformedAcceptWithPayloadCommand,
  MalformedAcceptWithPayloadCommandInput,
  MalformedAcceptWithPayloadCommandOutput,
} from "./commands/MalformedAcceptWithPayloadCommand";
import {
  MalformedBlobCommand,
  MalformedBlobCommandInput,
  MalformedBlobCommandOutput,
} from "./commands/MalformedBlobCommand";
import {
  MalformedBooleanCommand,
  MalformedBooleanCommandInput,
  MalformedBooleanCommandOutput,
} from "./commands/MalformedBooleanCommand";
import {
  MalformedByteCommand,
  MalformedByteCommandInput,
  MalformedByteCommandOutput,
} from "./commands/MalformedByteCommand";
import {
  MalformedContentTypeWithBodyCommand,
  MalformedContentTypeWithBodyCommandInput,
  MalformedContentTypeWithBodyCommandOutput,
} from "./commands/MalformedContentTypeWithBodyCommand";
import {
  MalformedContentTypeWithGenericStringCommand,
  MalformedContentTypeWithGenericStringCommandInput,
  MalformedContentTypeWithGenericStringCommandOutput,
} from "./commands/MalformedContentTypeWithGenericStringCommand";
import {
  MalformedContentTypeWithPayloadCommand,
  MalformedContentTypeWithPayloadCommandInput,
  MalformedContentTypeWithPayloadCommandOutput,
} from "./commands/MalformedContentTypeWithPayloadCommand";
import {
  MalformedContentTypeWithoutBodyCommand,
  MalformedContentTypeWithoutBodyCommandInput,
  MalformedContentTypeWithoutBodyCommandOutput,
} from "./commands/MalformedContentTypeWithoutBodyCommand";
import {
  MalformedDoubleCommand,
  MalformedDoubleCommandInput,
  MalformedDoubleCommandOutput,
} from "./commands/MalformedDoubleCommand";
import {
  MalformedFloatCommand,
  MalformedFloatCommandInput,
  MalformedFloatCommandOutput,
} from "./commands/MalformedFloatCommand";
import {
  MalformedIntegerCommand,
  MalformedIntegerCommandInput,
  MalformedIntegerCommandOutput,
} from "./commands/MalformedIntegerCommand";
import {
  MalformedListCommand,
  MalformedListCommandInput,
  MalformedListCommandOutput,
} from "./commands/MalformedListCommand";
import {
  MalformedLongCommand,
  MalformedLongCommandInput,
  MalformedLongCommandOutput,
} from "./commands/MalformedLongCommand";
import {
  MalformedMapCommand,
  MalformedMapCommandInput,
  MalformedMapCommandOutput,
} from "./commands/MalformedMapCommand";
import {
  MalformedRequestBodyCommand,
  MalformedRequestBodyCommandInput,
  MalformedRequestBodyCommandOutput,
} from "./commands/MalformedRequestBodyCommand";
import {
  MalformedSetCommand,
  MalformedSetCommandInput,
  MalformedSetCommandOutput,
} from "./commands/MalformedSetCommand";
import {
  MalformedShortCommand,
  MalformedShortCommandInput,
  MalformedShortCommandOutput,
} from "./commands/MalformedShortCommand";
import {
  MalformedTimestampBodyDateTimeCommand,
  MalformedTimestampBodyDateTimeCommandInput,
  MalformedTimestampBodyDateTimeCommandOutput,
} from "./commands/MalformedTimestampBodyDateTimeCommand";
import {
  MalformedTimestampBodyDefaultCommand,
  MalformedTimestampBodyDefaultCommandInput,
  MalformedTimestampBodyDefaultCommandOutput,
} from "./commands/MalformedTimestampBodyDefaultCommand";
import {
  MalformedTimestampBodyHttpDateCommand,
  MalformedTimestampBodyHttpDateCommandInput,
  MalformedTimestampBodyHttpDateCommandOutput,
} from "./commands/MalformedTimestampBodyHttpDateCommand";
import {
  MalformedTimestampHeaderDateTimeCommand,
  MalformedTimestampHeaderDateTimeCommandInput,
  MalformedTimestampHeaderDateTimeCommandOutput,
} from "./commands/MalformedTimestampHeaderDateTimeCommand";
import {
  MalformedTimestampHeaderDefaultCommand,
  MalformedTimestampHeaderDefaultCommandInput,
  MalformedTimestampHeaderDefaultCommandOutput,
} from "./commands/MalformedTimestampHeaderDefaultCommand";
import {
  MalformedTimestampHeaderEpochCommand,
  MalformedTimestampHeaderEpochCommandInput,
  MalformedTimestampHeaderEpochCommandOutput,
} from "./commands/MalformedTimestampHeaderEpochCommand";
import {
  MalformedTimestampPathDefaultCommand,
  MalformedTimestampPathDefaultCommandInput,
  MalformedTimestampPathDefaultCommandOutput,
} from "./commands/MalformedTimestampPathDefaultCommand";
import {
  MalformedTimestampPathEpochCommand,
  MalformedTimestampPathEpochCommandInput,
  MalformedTimestampPathEpochCommandOutput,
} from "./commands/MalformedTimestampPathEpochCommand";
import {
  MalformedTimestampPathHttpDateCommand,
  MalformedTimestampPathHttpDateCommandInput,
  MalformedTimestampPathHttpDateCommandOutput,
} from "./commands/MalformedTimestampPathHttpDateCommand";
import {
  MalformedTimestampQueryDefaultCommand,
  MalformedTimestampQueryDefaultCommandInput,
  MalformedTimestampQueryDefaultCommandOutput,
} from "./commands/MalformedTimestampQueryDefaultCommand";
import {
  MalformedTimestampQueryEpochCommand,
  MalformedTimestampQueryEpochCommandInput,
  MalformedTimestampQueryEpochCommandOutput,
} from "./commands/MalformedTimestampQueryEpochCommand";
import {
  MalformedTimestampQueryHttpDateCommand,
  MalformedTimestampQueryHttpDateCommandInput,
  MalformedTimestampQueryHttpDateCommandOutput,
} from "./commands/MalformedTimestampQueryHttpDateCommand";
import {
  MalformedUnionCommand,
  MalformedUnionCommandInput,
  MalformedUnionCommandOutput,
} from "./commands/MalformedUnionCommand";
import {
  MediaTypeHeaderCommand,
  MediaTypeHeaderCommandInput,
  MediaTypeHeaderCommandOutput,
} from "./commands/MediaTypeHeaderCommand";
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
  StreamingTraitsCommand,
  StreamingTraitsCommandInput,
  StreamingTraitsCommandOutput,
} from "./commands/StreamingTraitsCommand";
import {
  StreamingTraitsRequireLengthCommand,
  StreamingTraitsRequireLengthCommandInput,
  StreamingTraitsRequireLengthCommandOutput,
} from "./commands/StreamingTraitsRequireLengthCommand";
import {
  StreamingTraitsWithMediaTypeCommand,
  StreamingTraitsWithMediaTypeCommandInput,
  StreamingTraitsWithMediaTypeCommandOutput,
} from "./commands/StreamingTraitsWithMediaTypeCommand";
import {
  TimestampFormatHeadersCommand,
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "./commands/TimestampFormatHeadersCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * A REST JSON service that sends JSON requests and responses.
 */
export class RestJsonProtocol extends RestJsonProtocolClient {
  /**
   * This example uses all query string types.
   */
  public allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllQueryStringTypesCommandOutput>;
  public allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    cb: (err: any, data?: AllQueryStringTypesCommandOutput) => void
  ): void;
  public allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllQueryStringTypesCommandOutput) => void
  ): void;
  public allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllQueryStringTypesCommandOutput) => void),
    cb?: (err: any, data?: AllQueryStringTypesCommandOutput) => void
  ): Promise<AllQueryStringTypesCommandOutput> | void {
    const command = new AllQueryStringTypesCommand(args);
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
   * This example uses fixed query string params and variable query string params.
   * The fixed query string parameters and variable parameters must both be
   * serialized (implementations may need to merge them together).
   */
  public constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConstantAndVariableQueryStringCommandOutput>;
  public constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    cb: (err: any, data?: ConstantAndVariableQueryStringCommandOutput) => void
  ): void;
  public constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConstantAndVariableQueryStringCommandOutput) => void
  ): void;
  public constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConstantAndVariableQueryStringCommandOutput) => void),
    cb?: (err: any, data?: ConstantAndVariableQueryStringCommandOutput) => void
  ): Promise<ConstantAndVariableQueryStringCommandOutput> | void {
    const command = new ConstantAndVariableQueryStringCommand(args);
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
   * This example uses a constant query string parameters and a label.
   * This simply tests that labels and query string parameters are
   * compatible. The fixed query string parameter named "hello" should
   * in no way conflict with the label, `{hello}`.
   */
  public constantQueryString(
    args: ConstantQueryStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConstantQueryStringCommandOutput>;
  public constantQueryString(
    args: ConstantQueryStringCommandInput,
    cb: (err: any, data?: ConstantQueryStringCommandOutput) => void
  ): void;
  public constantQueryString(
    args: ConstantQueryStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConstantQueryStringCommandOutput) => void
  ): void;
  public constantQueryString(
    args: ConstantQueryStringCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConstantQueryStringCommandOutput) => void),
    cb?: (err: any, data?: ConstantQueryStringCommandOutput) => void
  ): Promise<ConstantQueryStringCommandOutput> | void {
    const command = new ConstantQueryStringCommand(args);
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
   * This example serializes a document as part of the payload.
   */
  public documentType(
    args: DocumentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DocumentTypeCommandOutput>;
  public documentType(args: DocumentTypeCommandInput, cb: (err: any, data?: DocumentTypeCommandOutput) => void): void;
  public documentType(
    args: DocumentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DocumentTypeCommandOutput) => void
  ): void;
  public documentType(
    args: DocumentTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DocumentTypeCommandOutput) => void),
    cb?: (err: any, data?: DocumentTypeCommandOutput) => void
  ): Promise<DocumentTypeCommandOutput> | void {
    const command = new DocumentTypeCommand(args);
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
   * This example serializes a document as the entire HTTP payload.
   */
  public documentTypeAsPayload(
    args: DocumentTypeAsPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DocumentTypeAsPayloadCommandOutput>;
  public documentTypeAsPayload(
    args: DocumentTypeAsPayloadCommandInput,
    cb: (err: any, data?: DocumentTypeAsPayloadCommandOutput) => void
  ): void;
  public documentTypeAsPayload(
    args: DocumentTypeAsPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DocumentTypeAsPayloadCommandOutput) => void
  ): void;
  public documentTypeAsPayload(
    args: DocumentTypeAsPayloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DocumentTypeAsPayloadCommandOutput) => void),
    cb?: (err: any, data?: DocumentTypeAsPayloadCommandOutput) => void
  ): Promise<DocumentTypeAsPayloadCommandOutput> | void {
    const command = new DocumentTypeAsPayloadCommand(args);
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
   * The example tests how requests and responses are serialized when there's
   * no request or response payload because the operation has an empty input
   * and empty output structure that reuses the same shape. While this should
   * be rare, code generators must support this.
   */
  public emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EmptyInputAndEmptyOutputCommandOutput>;
  public emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;
  public emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;
  public emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void),
    cb?: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): Promise<EmptyInputAndEmptyOutputCommandOutput> | void {
    const command = new EmptyInputAndEmptyOutputCommand(args);
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
   * This operation has four possible return values:
   *
   * 1. A successful response in the form of GreetingWithErrorsOutput
   * 2. An InvalidGreeting error.
   * 3. A BadRequest error.
   * 4. A FooError.
   *
   * Implementations must be able to successfully take a response and
   * properly (de)serialize successful and error responses based on the
   * the presence of the
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

  public hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HostWithPathOperationCommandOutput>;
  public hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;
  public hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;
  public hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HostWithPathOperationCommandOutput) => void),
    cb?: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): Promise<HostWithPathOperationCommandOutput> | void {
    const command = new HostWithPathOperationCommand(args);
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
   * This example tests httpChecksumRequired trait
   */
  public httpChecksumRequired(
    args: HttpChecksumRequiredCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpChecksumRequiredCommandOutput>;
  public httpChecksumRequired(
    args: HttpChecksumRequiredCommandInput,
    cb: (err: any, data?: HttpChecksumRequiredCommandOutput) => void
  ): void;
  public httpChecksumRequired(
    args: HttpChecksumRequiredCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpChecksumRequiredCommandOutput) => void
  ): void;
  public httpChecksumRequired(
    args: HttpChecksumRequiredCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpChecksumRequiredCommandOutput) => void),
    cb?: (err: any, data?: HttpChecksumRequiredCommandOutput) => void
  ): Promise<HttpChecksumRequiredCommandOutput> | void {
    const command = new HttpChecksumRequiredCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public httpEnumPayload(
    args: HttpEnumPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpEnumPayloadCommandOutput>;
  public httpEnumPayload(
    args: HttpEnumPayloadCommandInput,
    cb: (err: any, data?: HttpEnumPayloadCommandOutput) => void
  ): void;
  public httpEnumPayload(
    args: HttpEnumPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpEnumPayloadCommandOutput) => void
  ): void;
  public httpEnumPayload(
    args: HttpEnumPayloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpEnumPayloadCommandOutput) => void),
    cb?: (err: any, data?: HttpEnumPayloadCommandOutput) => void
  ): Promise<HttpEnumPayloadCommandOutput> | void {
    const command = new HttpEnumPayloadCommand(args);
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
   * This examples serializes a blob shape in the payload.
   *
   * In this example, no JSON document is synthesized because the payload is
   * not a structure or a union type.
   */
  public httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadTraitsCommandOutput>;
  public httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    cb: (err: any, data?: HttpPayloadTraitsCommandOutput) => void
  ): void;
  public httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadTraitsCommandOutput) => void
  ): void;
  public httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpPayloadTraitsCommandOutput) => void),
    cb?: (err: any, data?: HttpPayloadTraitsCommandOutput) => void
  ): Promise<HttpPayloadTraitsCommandOutput> | void {
    const command = new HttpPayloadTraitsCommand(args);
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
   * This examples uses a `@mediaType` trait on the payload to force a custom
   * content-type to be serialized.
   */
  public httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput>;
  public httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    cb: (err: any, data?: HttpPayloadTraitsWithMediaTypeCommandOutput) => void
  ): void;
  public httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadTraitsWithMediaTypeCommandOutput) => void
  ): void;
  public httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpPayloadTraitsWithMediaTypeCommandOutput) => void),
    cb?: (err: any, data?: HttpPayloadTraitsWithMediaTypeCommandOutput) => void
  ): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> | void {
    const command = new HttpPayloadTraitsWithMediaTypeCommand(args);
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
   * This examples serializes a structure in the payload.
   *
   * Note that serializing a structure changes the wrapper element name
   * to match the targeted structure.
   */
  public httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithStructureCommandOutput>;
  public httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    cb: (err: any, data?: HttpPayloadWithStructureCommandOutput) => void
  ): void;
  public httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithStructureCommandOutput) => void
  ): void;
  public httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpPayloadWithStructureCommandOutput) => void),
    cb?: (err: any, data?: HttpPayloadWithStructureCommandOutput) => void
  ): Promise<HttpPayloadWithStructureCommandOutput> | void {
    const command = new HttpPayloadWithStructureCommand(args);
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
   * This examples adds headers to the input of a request and response by prefix.
   */
  public httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPrefixHeadersCommandOutput>;
  public httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    cb: (err: any, data?: HttpPrefixHeadersCommandOutput) => void
  ): void;
  public httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPrefixHeadersCommandOutput) => void
  ): void;
  public httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpPrefixHeadersCommandOutput) => void),
    cb?: (err: any, data?: HttpPrefixHeadersCommandOutput) => void
  ): Promise<HttpPrefixHeadersCommandOutput> | void {
    const command = new HttpPrefixHeadersCommand(args);
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
   * Clients that perform this test extract all headers from the response.
   */
  public httpPrefixHeadersResponse(
    args: HttpPrefixHeadersResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPrefixHeadersResponseCommandOutput>;
  public httpPrefixHeadersResponse(
    args: HttpPrefixHeadersResponseCommandInput,
    cb: (err: any, data?: HttpPrefixHeadersResponseCommandOutput) => void
  ): void;
  public httpPrefixHeadersResponse(
    args: HttpPrefixHeadersResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPrefixHeadersResponseCommandOutput) => void
  ): void;
  public httpPrefixHeadersResponse(
    args: HttpPrefixHeadersResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpPrefixHeadersResponseCommandOutput) => void),
    cb?: (err: any, data?: HttpPrefixHeadersResponseCommandOutput) => void
  ): Promise<HttpPrefixHeadersResponseCommandOutput> | void {
    const command = new HttpPrefixHeadersResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithFloatLabelsCommandOutput>;
  public httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    cb: (err: any, data?: HttpRequestWithFloatLabelsCommandOutput) => void
  ): void;
  public httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithFloatLabelsCommandOutput) => void
  ): void;
  public httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpRequestWithFloatLabelsCommandOutput) => void),
    cb?: (err: any, data?: HttpRequestWithFloatLabelsCommandOutput) => void
  ): Promise<HttpRequestWithFloatLabelsCommandOutput> | void {
    const command = new HttpRequestWithFloatLabelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithGreedyLabelInPathCommandOutput>;
  public httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    cb: (err: any, data?: HttpRequestWithGreedyLabelInPathCommandOutput) => void
  ): void;
  public httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithGreedyLabelInPathCommandOutput) => void
  ): void;
  public httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpRequestWithGreedyLabelInPathCommandOutput) => void),
    cb?: (err: any, data?: HttpRequestWithGreedyLabelInPathCommandOutput) => void
  ): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> | void {
    const command = new HttpRequestWithGreedyLabelInPathCommand(args);
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
   * The example tests how requests are serialized when there's no input
   * payload but there are HTTP labels.
   */
  public httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithLabelsCommandOutput>;
  public httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    cb: (err: any, data?: HttpRequestWithLabelsCommandOutput) => void
  ): void;
  public httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithLabelsCommandOutput) => void
  ): void;
  public httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpRequestWithLabelsCommandOutput) => void),
    cb?: (err: any, data?: HttpRequestWithLabelsCommandOutput) => void
  ): Promise<HttpRequestWithLabelsCommandOutput> | void {
    const command = new HttpRequestWithLabelsCommand(args);
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
   * The example tests how requests serialize different timestamp formats in the
   * URI path.
   */
  public httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput>;
  public httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    cb: (err: any, data?: HttpRequestWithLabelsAndTimestampFormatCommandOutput) => void
  ): void;
  public httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithLabelsAndTimestampFormatCommandOutput) => void
  ): void;
  public httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: HttpRequestWithLabelsAndTimestampFormatCommandOutput) => void),
    cb?: (err: any, data?: HttpRequestWithLabelsAndTimestampFormatCommandOutput) => void
  ): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> | void {
    const command = new HttpRequestWithLabelsAndTimestampFormatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public httpResponseCode(
    args: HttpResponseCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpResponseCodeCommandOutput>;
  public httpResponseCode(
    args: HttpResponseCodeCommandInput,
    cb: (err: any, data?: HttpResponseCodeCommandOutput) => void
  ): void;
  public httpResponseCode(
    args: HttpResponseCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpResponseCodeCommandOutput) => void
  ): void;
  public httpResponseCode(
    args: HttpResponseCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpResponseCodeCommandOutput) => void),
    cb?: (err: any, data?: HttpResponseCodeCommandOutput) => void
  ): Promise<HttpResponseCodeCommandOutput> | void {
    const command = new HttpResponseCodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public httpStringPayload(
    args: HttpStringPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpStringPayloadCommandOutput>;
  public httpStringPayload(
    args: HttpStringPayloadCommandInput,
    cb: (err: any, data?: HttpStringPayloadCommandOutput) => void
  ): void;
  public httpStringPayload(
    args: HttpStringPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpStringPayloadCommandOutput) => void
  ): void;
  public httpStringPayload(
    args: HttpStringPayloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpStringPayloadCommandOutput) => void),
    cb?: (err: any, data?: HttpStringPayloadCommandOutput) => void
  ): Promise<HttpStringPayloadCommandOutput> | void {
    const command = new HttpStringPayloadCommand(args);
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
   * This example ensures that query string bound request parameters are
   * serialized in the body of responses if the structure is used in both
   * the request and response.
   */
  public ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IgnoreQueryParamsInResponseCommandOutput>;
  public ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    cb: (err: any, data?: IgnoreQueryParamsInResponseCommandOutput) => void
  ): void;
  public ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IgnoreQueryParamsInResponseCommandOutput) => void
  ): void;
  public ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: IgnoreQueryParamsInResponseCommandOutput) => void),
    cb?: (err: any, data?: IgnoreQueryParamsInResponseCommandOutput) => void
  ): Promise<IgnoreQueryParamsInResponseCommandOutput> | void {
    const command = new IgnoreQueryParamsInResponseCommand(args);
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
   * The example tests how requests and responses are serialized when there is
   * no input or output payload but there are HTTP header bindings.
   */
  public inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InputAndOutputWithHeadersCommandOutput>;
  public inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    cb: (err: any, data?: InputAndOutputWithHeadersCommandOutput) => void
  ): void;
  public inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InputAndOutputWithHeadersCommandOutput) => void
  ): void;
  public inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InputAndOutputWithHeadersCommandOutput) => void),
    cb?: (err: any, data?: InputAndOutputWithHeadersCommandOutput) => void
  ): Promise<InputAndOutputWithHeadersCommandOutput> | void {
    const command = new InputAndOutputWithHeadersCommand(args);
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
   * Blobs are base64 encoded
   */
  public jsonBlobs(args: JsonBlobsCommandInput, options?: __HttpHandlerOptions): Promise<JsonBlobsCommandOutput>;
  public jsonBlobs(args: JsonBlobsCommandInput, cb: (err: any, data?: JsonBlobsCommandOutput) => void): void;
  public jsonBlobs(
    args: JsonBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonBlobsCommandOutput) => void
  ): void;
  public jsonBlobs(
    args: JsonBlobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JsonBlobsCommandOutput) => void),
    cb?: (err: any, data?: JsonBlobsCommandOutput) => void
  ): Promise<JsonBlobsCommandOutput> | void {
    const command = new JsonBlobsCommand(args);
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
   * This test case serializes JSON lists for the following cases for both
   * input and output:
   *
   * 1. Normal JSON lists.
   * 2. Normal JSON sets.
   * 3. JSON lists of lists.
   * 4. Lists of structures.
   */
  public jsonLists(args: JsonListsCommandInput, options?: __HttpHandlerOptions): Promise<JsonListsCommandOutput>;
  public jsonLists(args: JsonListsCommandInput, cb: (err: any, data?: JsonListsCommandOutput) => void): void;
  public jsonLists(
    args: JsonListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonListsCommandOutput) => void
  ): void;
  public jsonLists(
    args: JsonListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JsonListsCommandOutput) => void),
    cb?: (err: any, data?: JsonListsCommandOutput) => void
  ): Promise<JsonListsCommandOutput> | void {
    const command = new JsonListsCommand(args);
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
   * The example tests basic map serialization.
   */
  public jsonMaps(args: JsonMapsCommandInput, options?: __HttpHandlerOptions): Promise<JsonMapsCommandOutput>;
  public jsonMaps(args: JsonMapsCommandInput, cb: (err: any, data?: JsonMapsCommandOutput) => void): void;
  public jsonMaps(
    args: JsonMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonMapsCommandOutput) => void
  ): void;
  public jsonMaps(
    args: JsonMapsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JsonMapsCommandOutput) => void),
    cb?: (err: any, data?: JsonMapsCommandOutput) => void
  ): Promise<JsonMapsCommandOutput> | void {
    const command = new JsonMapsCommand(args);
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
   * This tests how timestamps are serialized, including using the
   * default format of date-time and various @timestampFormat trait
   * values.
   */
  public jsonTimestamps(
    args: JsonTimestampsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonTimestampsCommandOutput>;
  public jsonTimestamps(
    args: JsonTimestampsCommandInput,
    cb: (err: any, data?: JsonTimestampsCommandOutput) => void
  ): void;
  public jsonTimestamps(
    args: JsonTimestampsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonTimestampsCommandOutput) => void
  ): void;
  public jsonTimestamps(
    args: JsonTimestampsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JsonTimestampsCommandOutput) => void),
    cb?: (err: any, data?: JsonTimestampsCommandOutput) => void
  ): Promise<JsonTimestampsCommandOutput> | void {
    const command = new JsonTimestampsCommand(args);
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

  public malformedAcceptWithBody(
    args: MalformedAcceptWithBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedAcceptWithBodyCommandOutput>;
  public malformedAcceptWithBody(
    args: MalformedAcceptWithBodyCommandInput,
    cb: (err: any, data?: MalformedAcceptWithBodyCommandOutput) => void
  ): void;
  public malformedAcceptWithBody(
    args: MalformedAcceptWithBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedAcceptWithBodyCommandOutput) => void
  ): void;
  public malformedAcceptWithBody(
    args: MalformedAcceptWithBodyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedAcceptWithBodyCommandOutput) => void),
    cb?: (err: any, data?: MalformedAcceptWithBodyCommandOutput) => void
  ): Promise<MalformedAcceptWithBodyCommandOutput> | void {
    const command = new MalformedAcceptWithBodyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedAcceptWithGenericString(
    args: MalformedAcceptWithGenericStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedAcceptWithGenericStringCommandOutput>;
  public malformedAcceptWithGenericString(
    args: MalformedAcceptWithGenericStringCommandInput,
    cb: (err: any, data?: MalformedAcceptWithGenericStringCommandOutput) => void
  ): void;
  public malformedAcceptWithGenericString(
    args: MalformedAcceptWithGenericStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedAcceptWithGenericStringCommandOutput) => void
  ): void;
  public malformedAcceptWithGenericString(
    args: MalformedAcceptWithGenericStringCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedAcceptWithGenericStringCommandOutput) => void),
    cb?: (err: any, data?: MalformedAcceptWithGenericStringCommandOutput) => void
  ): Promise<MalformedAcceptWithGenericStringCommandOutput> | void {
    const command = new MalformedAcceptWithGenericStringCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedAcceptWithPayload(
    args: MalformedAcceptWithPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedAcceptWithPayloadCommandOutput>;
  public malformedAcceptWithPayload(
    args: MalformedAcceptWithPayloadCommandInput,
    cb: (err: any, data?: MalformedAcceptWithPayloadCommandOutput) => void
  ): void;
  public malformedAcceptWithPayload(
    args: MalformedAcceptWithPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedAcceptWithPayloadCommandOutput) => void
  ): void;
  public malformedAcceptWithPayload(
    args: MalformedAcceptWithPayloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedAcceptWithPayloadCommandOutput) => void),
    cb?: (err: any, data?: MalformedAcceptWithPayloadCommandOutput) => void
  ): Promise<MalformedAcceptWithPayloadCommandOutput> | void {
    const command = new MalformedAcceptWithPayloadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedBlob(
    args: MalformedBlobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedBlobCommandOutput>;
  public malformedBlob(
    args: MalformedBlobCommandInput,
    cb: (err: any, data?: MalformedBlobCommandOutput) => void
  ): void;
  public malformedBlob(
    args: MalformedBlobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedBlobCommandOutput) => void
  ): void;
  public malformedBlob(
    args: MalformedBlobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedBlobCommandOutput) => void),
    cb?: (err: any, data?: MalformedBlobCommandOutput) => void
  ): Promise<MalformedBlobCommandOutput> | void {
    const command = new MalformedBlobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedBoolean(
    args: MalformedBooleanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedBooleanCommandOutput>;
  public malformedBoolean(
    args: MalformedBooleanCommandInput,
    cb: (err: any, data?: MalformedBooleanCommandOutput) => void
  ): void;
  public malformedBoolean(
    args: MalformedBooleanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedBooleanCommandOutput) => void
  ): void;
  public malformedBoolean(
    args: MalformedBooleanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedBooleanCommandOutput) => void),
    cb?: (err: any, data?: MalformedBooleanCommandOutput) => void
  ): Promise<MalformedBooleanCommandOutput> | void {
    const command = new MalformedBooleanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedByte(
    args: MalformedByteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedByteCommandOutput>;
  public malformedByte(
    args: MalformedByteCommandInput,
    cb: (err: any, data?: MalformedByteCommandOutput) => void
  ): void;
  public malformedByte(
    args: MalformedByteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedByteCommandOutput) => void
  ): void;
  public malformedByte(
    args: MalformedByteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedByteCommandOutput) => void),
    cb?: (err: any, data?: MalformedByteCommandOutput) => void
  ): Promise<MalformedByteCommandOutput> | void {
    const command = new MalformedByteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedContentTypeWithBody(
    args: MalformedContentTypeWithBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithBodyCommandOutput>;
  public malformedContentTypeWithBody(
    args: MalformedContentTypeWithBodyCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithBodyCommandOutput) => void
  ): void;
  public malformedContentTypeWithBody(
    args: MalformedContentTypeWithBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithBodyCommandOutput) => void
  ): void;
  public malformedContentTypeWithBody(
    args: MalformedContentTypeWithBodyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedContentTypeWithBodyCommandOutput) => void),
    cb?: (err: any, data?: MalformedContentTypeWithBodyCommandOutput) => void
  ): Promise<MalformedContentTypeWithBodyCommandOutput> | void {
    const command = new MalformedContentTypeWithBodyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedContentTypeWithGenericString(
    args: MalformedContentTypeWithGenericStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithGenericStringCommandOutput>;
  public malformedContentTypeWithGenericString(
    args: MalformedContentTypeWithGenericStringCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithGenericStringCommandOutput) => void
  ): void;
  public malformedContentTypeWithGenericString(
    args: MalformedContentTypeWithGenericStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithGenericStringCommandOutput) => void
  ): void;
  public malformedContentTypeWithGenericString(
    args: MalformedContentTypeWithGenericStringCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: MalformedContentTypeWithGenericStringCommandOutput) => void),
    cb?: (err: any, data?: MalformedContentTypeWithGenericStringCommandOutput) => void
  ): Promise<MalformedContentTypeWithGenericStringCommandOutput> | void {
    const command = new MalformedContentTypeWithGenericStringCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedContentTypeWithoutBody(
    args: MalformedContentTypeWithoutBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithoutBodyCommandOutput>;
  public malformedContentTypeWithoutBody(
    args: MalformedContentTypeWithoutBodyCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithoutBodyCommandOutput) => void
  ): void;
  public malformedContentTypeWithoutBody(
    args: MalformedContentTypeWithoutBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithoutBodyCommandOutput) => void
  ): void;
  public malformedContentTypeWithoutBody(
    args: MalformedContentTypeWithoutBodyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedContentTypeWithoutBodyCommandOutput) => void),
    cb?: (err: any, data?: MalformedContentTypeWithoutBodyCommandOutput) => void
  ): Promise<MalformedContentTypeWithoutBodyCommandOutput> | void {
    const command = new MalformedContentTypeWithoutBodyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedContentTypeWithPayload(
    args: MalformedContentTypeWithPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithPayloadCommandOutput>;
  public malformedContentTypeWithPayload(
    args: MalformedContentTypeWithPayloadCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithPayloadCommandOutput) => void
  ): void;
  public malformedContentTypeWithPayload(
    args: MalformedContentTypeWithPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithPayloadCommandOutput) => void
  ): void;
  public malformedContentTypeWithPayload(
    args: MalformedContentTypeWithPayloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedContentTypeWithPayloadCommandOutput) => void),
    cb?: (err: any, data?: MalformedContentTypeWithPayloadCommandOutput) => void
  ): Promise<MalformedContentTypeWithPayloadCommandOutput> | void {
    const command = new MalformedContentTypeWithPayloadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedDouble(
    args: MalformedDoubleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedDoubleCommandOutput>;
  public malformedDouble(
    args: MalformedDoubleCommandInput,
    cb: (err: any, data?: MalformedDoubleCommandOutput) => void
  ): void;
  public malformedDouble(
    args: MalformedDoubleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedDoubleCommandOutput) => void
  ): void;
  public malformedDouble(
    args: MalformedDoubleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedDoubleCommandOutput) => void),
    cb?: (err: any, data?: MalformedDoubleCommandOutput) => void
  ): Promise<MalformedDoubleCommandOutput> | void {
    const command = new MalformedDoubleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedFloat(
    args: MalformedFloatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedFloatCommandOutput>;
  public malformedFloat(
    args: MalformedFloatCommandInput,
    cb: (err: any, data?: MalformedFloatCommandOutput) => void
  ): void;
  public malformedFloat(
    args: MalformedFloatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedFloatCommandOutput) => void
  ): void;
  public malformedFloat(
    args: MalformedFloatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedFloatCommandOutput) => void),
    cb?: (err: any, data?: MalformedFloatCommandOutput) => void
  ): Promise<MalformedFloatCommandOutput> | void {
    const command = new MalformedFloatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedInteger(
    args: MalformedIntegerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedIntegerCommandOutput>;
  public malformedInteger(
    args: MalformedIntegerCommandInput,
    cb: (err: any, data?: MalformedIntegerCommandOutput) => void
  ): void;
  public malformedInteger(
    args: MalformedIntegerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedIntegerCommandOutput) => void
  ): void;
  public malformedInteger(
    args: MalformedIntegerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedIntegerCommandOutput) => void),
    cb?: (err: any, data?: MalformedIntegerCommandOutput) => void
  ): Promise<MalformedIntegerCommandOutput> | void {
    const command = new MalformedIntegerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedList(
    args: MalformedListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedListCommandOutput>;
  public malformedList(
    args: MalformedListCommandInput,
    cb: (err: any, data?: MalformedListCommandOutput) => void
  ): void;
  public malformedList(
    args: MalformedListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedListCommandOutput) => void
  ): void;
  public malformedList(
    args: MalformedListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedListCommandOutput) => void),
    cb?: (err: any, data?: MalformedListCommandOutput) => void
  ): Promise<MalformedListCommandOutput> | void {
    const command = new MalformedListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedLong(
    args: MalformedLongCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedLongCommandOutput>;
  public malformedLong(
    args: MalformedLongCommandInput,
    cb: (err: any, data?: MalformedLongCommandOutput) => void
  ): void;
  public malformedLong(
    args: MalformedLongCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedLongCommandOutput) => void
  ): void;
  public malformedLong(
    args: MalformedLongCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedLongCommandOutput) => void),
    cb?: (err: any, data?: MalformedLongCommandOutput) => void
  ): Promise<MalformedLongCommandOutput> | void {
    const command = new MalformedLongCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedMap(
    args: MalformedMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedMapCommandOutput>;
  public malformedMap(args: MalformedMapCommandInput, cb: (err: any, data?: MalformedMapCommandOutput) => void): void;
  public malformedMap(
    args: MalformedMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedMapCommandOutput) => void
  ): void;
  public malformedMap(
    args: MalformedMapCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedMapCommandOutput) => void),
    cb?: (err: any, data?: MalformedMapCommandOutput) => void
  ): Promise<MalformedMapCommandOutput> | void {
    const command = new MalformedMapCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedRequestBody(
    args: MalformedRequestBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedRequestBodyCommandOutput>;
  public malformedRequestBody(
    args: MalformedRequestBodyCommandInput,
    cb: (err: any, data?: MalformedRequestBodyCommandOutput) => void
  ): void;
  public malformedRequestBody(
    args: MalformedRequestBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedRequestBodyCommandOutput) => void
  ): void;
  public malformedRequestBody(
    args: MalformedRequestBodyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedRequestBodyCommandOutput) => void),
    cb?: (err: any, data?: MalformedRequestBodyCommandOutput) => void
  ): Promise<MalformedRequestBodyCommandOutput> | void {
    const command = new MalformedRequestBodyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedSet(
    args: MalformedSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedSetCommandOutput>;
  public malformedSet(args: MalformedSetCommandInput, cb: (err: any, data?: MalformedSetCommandOutput) => void): void;
  public malformedSet(
    args: MalformedSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedSetCommandOutput) => void
  ): void;
  public malformedSet(
    args: MalformedSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedSetCommandOutput) => void),
    cb?: (err: any, data?: MalformedSetCommandOutput) => void
  ): Promise<MalformedSetCommandOutput> | void {
    const command = new MalformedSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedShort(
    args: MalformedShortCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedShortCommandOutput>;
  public malformedShort(
    args: MalformedShortCommandInput,
    cb: (err: any, data?: MalformedShortCommandOutput) => void
  ): void;
  public malformedShort(
    args: MalformedShortCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedShortCommandOutput) => void
  ): void;
  public malformedShort(
    args: MalformedShortCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedShortCommandOutput) => void),
    cb?: (err: any, data?: MalformedShortCommandOutput) => void
  ): Promise<MalformedShortCommandOutput> | void {
    const command = new MalformedShortCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampBodyDateTime(
    args: MalformedTimestampBodyDateTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampBodyDateTimeCommandOutput>;
  public malformedTimestampBodyDateTime(
    args: MalformedTimestampBodyDateTimeCommandInput,
    cb: (err: any, data?: MalformedTimestampBodyDateTimeCommandOutput) => void
  ): void;
  public malformedTimestampBodyDateTime(
    args: MalformedTimestampBodyDateTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampBodyDateTimeCommandOutput) => void
  ): void;
  public malformedTimestampBodyDateTime(
    args: MalformedTimestampBodyDateTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampBodyDateTimeCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampBodyDateTimeCommandOutput) => void
  ): Promise<MalformedTimestampBodyDateTimeCommandOutput> | void {
    const command = new MalformedTimestampBodyDateTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampBodyDefault(
    args: MalformedTimestampBodyDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampBodyDefaultCommandOutput>;
  public malformedTimestampBodyDefault(
    args: MalformedTimestampBodyDefaultCommandInput,
    cb: (err: any, data?: MalformedTimestampBodyDefaultCommandOutput) => void
  ): void;
  public malformedTimestampBodyDefault(
    args: MalformedTimestampBodyDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampBodyDefaultCommandOutput) => void
  ): void;
  public malformedTimestampBodyDefault(
    args: MalformedTimestampBodyDefaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampBodyDefaultCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampBodyDefaultCommandOutput) => void
  ): Promise<MalformedTimestampBodyDefaultCommandOutput> | void {
    const command = new MalformedTimestampBodyDefaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampBodyHttpDate(
    args: MalformedTimestampBodyHttpDateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampBodyHttpDateCommandOutput>;
  public malformedTimestampBodyHttpDate(
    args: MalformedTimestampBodyHttpDateCommandInput,
    cb: (err: any, data?: MalformedTimestampBodyHttpDateCommandOutput) => void
  ): void;
  public malformedTimestampBodyHttpDate(
    args: MalformedTimestampBodyHttpDateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampBodyHttpDateCommandOutput) => void
  ): void;
  public malformedTimestampBodyHttpDate(
    args: MalformedTimestampBodyHttpDateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampBodyHttpDateCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampBodyHttpDateCommandOutput) => void
  ): Promise<MalformedTimestampBodyHttpDateCommandOutput> | void {
    const command = new MalformedTimestampBodyHttpDateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampHeaderDateTime(
    args: MalformedTimestampHeaderDateTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampHeaderDateTimeCommandOutput>;
  public malformedTimestampHeaderDateTime(
    args: MalformedTimestampHeaderDateTimeCommandInput,
    cb: (err: any, data?: MalformedTimestampHeaderDateTimeCommandOutput) => void
  ): void;
  public malformedTimestampHeaderDateTime(
    args: MalformedTimestampHeaderDateTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampHeaderDateTimeCommandOutput) => void
  ): void;
  public malformedTimestampHeaderDateTime(
    args: MalformedTimestampHeaderDateTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampHeaderDateTimeCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampHeaderDateTimeCommandOutput) => void
  ): Promise<MalformedTimestampHeaderDateTimeCommandOutput> | void {
    const command = new MalformedTimestampHeaderDateTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampHeaderDefault(
    args: MalformedTimestampHeaderDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampHeaderDefaultCommandOutput>;
  public malformedTimestampHeaderDefault(
    args: MalformedTimestampHeaderDefaultCommandInput,
    cb: (err: any, data?: MalformedTimestampHeaderDefaultCommandOutput) => void
  ): void;
  public malformedTimestampHeaderDefault(
    args: MalformedTimestampHeaderDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampHeaderDefaultCommandOutput) => void
  ): void;
  public malformedTimestampHeaderDefault(
    args: MalformedTimestampHeaderDefaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampHeaderDefaultCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampHeaderDefaultCommandOutput) => void
  ): Promise<MalformedTimestampHeaderDefaultCommandOutput> | void {
    const command = new MalformedTimestampHeaderDefaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampHeaderEpoch(
    args: MalformedTimestampHeaderEpochCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampHeaderEpochCommandOutput>;
  public malformedTimestampHeaderEpoch(
    args: MalformedTimestampHeaderEpochCommandInput,
    cb: (err: any, data?: MalformedTimestampHeaderEpochCommandOutput) => void
  ): void;
  public malformedTimestampHeaderEpoch(
    args: MalformedTimestampHeaderEpochCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampHeaderEpochCommandOutput) => void
  ): void;
  public malformedTimestampHeaderEpoch(
    args: MalformedTimestampHeaderEpochCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampHeaderEpochCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampHeaderEpochCommandOutput) => void
  ): Promise<MalformedTimestampHeaderEpochCommandOutput> | void {
    const command = new MalformedTimestampHeaderEpochCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampPathDefault(
    args: MalformedTimestampPathDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampPathDefaultCommandOutput>;
  public malformedTimestampPathDefault(
    args: MalformedTimestampPathDefaultCommandInput,
    cb: (err: any, data?: MalformedTimestampPathDefaultCommandOutput) => void
  ): void;
  public malformedTimestampPathDefault(
    args: MalformedTimestampPathDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampPathDefaultCommandOutput) => void
  ): void;
  public malformedTimestampPathDefault(
    args: MalformedTimestampPathDefaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampPathDefaultCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampPathDefaultCommandOutput) => void
  ): Promise<MalformedTimestampPathDefaultCommandOutput> | void {
    const command = new MalformedTimestampPathDefaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampPathEpoch(
    args: MalformedTimestampPathEpochCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampPathEpochCommandOutput>;
  public malformedTimestampPathEpoch(
    args: MalformedTimestampPathEpochCommandInput,
    cb: (err: any, data?: MalformedTimestampPathEpochCommandOutput) => void
  ): void;
  public malformedTimestampPathEpoch(
    args: MalformedTimestampPathEpochCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampPathEpochCommandOutput) => void
  ): void;
  public malformedTimestampPathEpoch(
    args: MalformedTimestampPathEpochCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampPathEpochCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampPathEpochCommandOutput) => void
  ): Promise<MalformedTimestampPathEpochCommandOutput> | void {
    const command = new MalformedTimestampPathEpochCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampPathHttpDate(
    args: MalformedTimestampPathHttpDateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampPathHttpDateCommandOutput>;
  public malformedTimestampPathHttpDate(
    args: MalformedTimestampPathHttpDateCommandInput,
    cb: (err: any, data?: MalformedTimestampPathHttpDateCommandOutput) => void
  ): void;
  public malformedTimestampPathHttpDate(
    args: MalformedTimestampPathHttpDateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampPathHttpDateCommandOutput) => void
  ): void;
  public malformedTimestampPathHttpDate(
    args: MalformedTimestampPathHttpDateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampPathHttpDateCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampPathHttpDateCommandOutput) => void
  ): Promise<MalformedTimestampPathHttpDateCommandOutput> | void {
    const command = new MalformedTimestampPathHttpDateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampQueryDefault(
    args: MalformedTimestampQueryDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampQueryDefaultCommandOutput>;
  public malformedTimestampQueryDefault(
    args: MalformedTimestampQueryDefaultCommandInput,
    cb: (err: any, data?: MalformedTimestampQueryDefaultCommandOutput) => void
  ): void;
  public malformedTimestampQueryDefault(
    args: MalformedTimestampQueryDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampQueryDefaultCommandOutput) => void
  ): void;
  public malformedTimestampQueryDefault(
    args: MalformedTimestampQueryDefaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampQueryDefaultCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampQueryDefaultCommandOutput) => void
  ): Promise<MalformedTimestampQueryDefaultCommandOutput> | void {
    const command = new MalformedTimestampQueryDefaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampQueryEpoch(
    args: MalformedTimestampQueryEpochCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampQueryEpochCommandOutput>;
  public malformedTimestampQueryEpoch(
    args: MalformedTimestampQueryEpochCommandInput,
    cb: (err: any, data?: MalformedTimestampQueryEpochCommandOutput) => void
  ): void;
  public malformedTimestampQueryEpoch(
    args: MalformedTimestampQueryEpochCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampQueryEpochCommandOutput) => void
  ): void;
  public malformedTimestampQueryEpoch(
    args: MalformedTimestampQueryEpochCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampQueryEpochCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampQueryEpochCommandOutput) => void
  ): Promise<MalformedTimestampQueryEpochCommandOutput> | void {
    const command = new MalformedTimestampQueryEpochCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedTimestampQueryHttpDate(
    args: MalformedTimestampQueryHttpDateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampQueryHttpDateCommandOutput>;
  public malformedTimestampQueryHttpDate(
    args: MalformedTimestampQueryHttpDateCommandInput,
    cb: (err: any, data?: MalformedTimestampQueryHttpDateCommandOutput) => void
  ): void;
  public malformedTimestampQueryHttpDate(
    args: MalformedTimestampQueryHttpDateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampQueryHttpDateCommandOutput) => void
  ): void;
  public malformedTimestampQueryHttpDate(
    args: MalformedTimestampQueryHttpDateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedTimestampQueryHttpDateCommandOutput) => void),
    cb?: (err: any, data?: MalformedTimestampQueryHttpDateCommandOutput) => void
  ): Promise<MalformedTimestampQueryHttpDateCommandOutput> | void {
    const command = new MalformedTimestampQueryHttpDateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public malformedUnion(
    args: MalformedUnionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedUnionCommandOutput>;
  public malformedUnion(
    args: MalformedUnionCommandInput,
    cb: (err: any, data?: MalformedUnionCommandOutput) => void
  ): void;
  public malformedUnion(
    args: MalformedUnionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedUnionCommandOutput) => void
  ): void;
  public malformedUnion(
    args: MalformedUnionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MalformedUnionCommandOutput) => void),
    cb?: (err: any, data?: MalformedUnionCommandOutput) => void
  ): Promise<MalformedUnionCommandOutput> | void {
    const command = new MalformedUnionCommand(args);
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
   * This example ensures that mediaType strings are base64 encoded in headers.
   */
  public mediaTypeHeader(
    args: MediaTypeHeaderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MediaTypeHeaderCommandOutput>;
  public mediaTypeHeader(
    args: MediaTypeHeaderCommandInput,
    cb: (err: any, data?: MediaTypeHeaderCommandOutput) => void
  ): void;
  public mediaTypeHeader(
    args: MediaTypeHeaderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MediaTypeHeaderCommandOutput) => void
  ): void;
  public mediaTypeHeader(
    args: MediaTypeHeaderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MediaTypeHeaderCommandOutput) => void),
    cb?: (err: any, data?: MediaTypeHeaderCommandOutput) => void
  ): Promise<MediaTypeHeaderCommandOutput> | void {
    const command = new MediaTypeHeaderCommand(args);
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
   * The example tests how requests and responses are serialized when there's
   * no request or response payload because the operation has no input or output.
   * While this should be rare, code generators must support this.
   */
  public noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NoInputAndNoOutputCommandOutput>;
  public noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    cb: (err: any, data?: NoInputAndNoOutputCommandOutput) => void
  ): void;
  public noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NoInputAndNoOutputCommandOutput) => void
  ): void;
  public noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NoInputAndNoOutputCommandOutput) => void),
    cb?: (err: any, data?: NoInputAndNoOutputCommandOutput) => void
  ): Promise<NoInputAndNoOutputCommandOutput> | void {
    const command = new NoInputAndNoOutputCommand(args);
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
   * The example tests how requests and responses are serialized when there's
   * no request or response payload because the operation has no input and the
   * output is empty. While this should be rare, code generators must support
   * this.
   */
  public noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NoInputAndOutputCommandOutput>;
  public noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;
  public noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;
  public noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NoInputAndOutputCommandOutput) => void),
    cb?: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): Promise<NoInputAndOutputCommandOutput> | void {
    const command = new NoInputAndOutputCommand(args);
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
   * Null and empty headers are not sent over the wire.
   */
  public nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NullAndEmptyHeadersClientCommandOutput>;
  public nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    cb: (err: any, data?: NullAndEmptyHeadersClientCommandOutput) => void
  ): void;
  public nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NullAndEmptyHeadersClientCommandOutput) => void
  ): void;
  public nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NullAndEmptyHeadersClientCommandOutput) => void),
    cb?: (err: any, data?: NullAndEmptyHeadersClientCommandOutput) => void
  ): Promise<NullAndEmptyHeadersClientCommandOutput> | void {
    const command = new NullAndEmptyHeadersClientCommand(args);
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
   * Null and empty headers are not sent over the wire.
   */
  public nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NullAndEmptyHeadersServerCommandOutput>;
  public nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    cb: (err: any, data?: NullAndEmptyHeadersServerCommandOutput) => void
  ): void;
  public nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NullAndEmptyHeadersServerCommandOutput) => void
  ): void;
  public nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NullAndEmptyHeadersServerCommandOutput) => void),
    cb?: (err: any, data?: NullAndEmptyHeadersServerCommandOutput) => void
  ): Promise<NullAndEmptyHeadersServerCommandOutput> | void {
    const command = new NullAndEmptyHeadersServerCommand(args);
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
   * Omits null, but serializes empty string value.
   */
  public omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OmitsNullSerializesEmptyStringCommandOutput>;
  public omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    cb: (err: any, data?: OmitsNullSerializesEmptyStringCommandOutput) => void
  ): void;
  public omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OmitsNullSerializesEmptyStringCommandOutput) => void
  ): void;
  public omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: OmitsNullSerializesEmptyStringCommandOutput) => void),
    cb?: (err: any, data?: OmitsNullSerializesEmptyStringCommandOutput) => void
  ): Promise<OmitsNullSerializesEmptyStringCommandOutput> | void {
    const command = new OmitsNullSerializesEmptyStringCommand(args);
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
   * Automatically adds idempotency tokens.
   */
  public queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput>;
  public queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;
  public queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;
  public queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void),
    cb?: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput> | void {
    const command = new QueryIdempotencyTokenAutoFillCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryParamsAsStringListMapCommandOutput>;
  public queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    cb: (err: any, data?: QueryParamsAsStringListMapCommandOutput) => void
  ): void;
  public queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryParamsAsStringListMapCommandOutput) => void
  ): void;
  public queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryParamsAsStringListMapCommandOutput) => void),
    cb?: (err: any, data?: QueryParamsAsStringListMapCommandOutput) => void
  ): Promise<QueryParamsAsStringListMapCommandOutput> | void {
    const command = new QueryParamsAsStringListMapCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public queryPrecedence(
    args: QueryPrecedenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryPrecedenceCommandOutput>;
  public queryPrecedence(
    args: QueryPrecedenceCommandInput,
    cb: (err: any, data?: QueryPrecedenceCommandOutput) => void
  ): void;
  public queryPrecedence(
    args: QueryPrecedenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryPrecedenceCommandOutput) => void
  ): void;
  public queryPrecedence(
    args: QueryPrecedenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryPrecedenceCommandOutput) => void),
    cb?: (err: any, data?: QueryPrecedenceCommandOutput) => void
  ): Promise<QueryPrecedenceCommandOutput> | void {
    const command = new QueryPrecedenceCommand(args);
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
   * Recursive shapes
   */
  public recursiveShapes(
    args: RecursiveShapesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecursiveShapesCommandOutput>;
  public recursiveShapes(
    args: RecursiveShapesCommandInput,
    cb: (err: any, data?: RecursiveShapesCommandOutput) => void
  ): void;
  public recursiveShapes(
    args: RecursiveShapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecursiveShapesCommandOutput) => void
  ): void;
  public recursiveShapes(
    args: RecursiveShapesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RecursiveShapesCommandOutput) => void),
    cb?: (err: any, data?: RecursiveShapesCommandOutput) => void
  ): Promise<RecursiveShapesCommandOutput> | void {
    const command = new RecursiveShapesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimpleScalarPropertiesCommandOutput>;
  public simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    cb: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): void;
  public simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): void;
  public simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SimpleScalarPropertiesCommandOutput) => void),
    cb?: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): Promise<SimpleScalarPropertiesCommandOutput> | void {
    const command = new SimpleScalarPropertiesCommand(args);
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
   * This examples serializes a streaming blob shape in the request body.
   *
   * In this example, no JSON document is synthesized because the payload is
   * not a structure or a union type.
   */
  public streamingTraits(
    args: StreamingTraitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StreamingTraitsCommandOutput>;
  public streamingTraits(
    args: StreamingTraitsCommandInput,
    cb: (err: any, data?: StreamingTraitsCommandOutput) => void
  ): void;
  public streamingTraits(
    args: StreamingTraitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StreamingTraitsCommandOutput) => void
  ): void;
  public streamingTraits(
    args: StreamingTraitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StreamingTraitsCommandOutput) => void),
    cb?: (err: any, data?: StreamingTraitsCommandOutput) => void
  ): Promise<StreamingTraitsCommandOutput> | void {
    const command = new StreamingTraitsCommand(args);
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
   * This examples serializes a streaming blob shape with a required content
   * length in the request body.
   *
   * In this example, no JSON document is synthesized because the payload is
   * not a structure or a union type.
   */
  public streamingTraitsRequireLength(
    args: StreamingTraitsRequireLengthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StreamingTraitsRequireLengthCommandOutput>;
  public streamingTraitsRequireLength(
    args: StreamingTraitsRequireLengthCommandInput,
    cb: (err: any, data?: StreamingTraitsRequireLengthCommandOutput) => void
  ): void;
  public streamingTraitsRequireLength(
    args: StreamingTraitsRequireLengthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StreamingTraitsRequireLengthCommandOutput) => void
  ): void;
  public streamingTraitsRequireLength(
    args: StreamingTraitsRequireLengthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StreamingTraitsRequireLengthCommandOutput) => void),
    cb?: (err: any, data?: StreamingTraitsRequireLengthCommandOutput) => void
  ): Promise<StreamingTraitsRequireLengthCommandOutput> | void {
    const command = new StreamingTraitsRequireLengthCommand(args);
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
   * This examples serializes a streaming media-typed blob shape in the request body.
   *
   * This examples uses a `@mediaType` trait on the payload to force a custom
   * content-type to be serialized.
   */
  public streamingTraitsWithMediaType(
    args: StreamingTraitsWithMediaTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StreamingTraitsWithMediaTypeCommandOutput>;
  public streamingTraitsWithMediaType(
    args: StreamingTraitsWithMediaTypeCommandInput,
    cb: (err: any, data?: StreamingTraitsWithMediaTypeCommandOutput) => void
  ): void;
  public streamingTraitsWithMediaType(
    args: StreamingTraitsWithMediaTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StreamingTraitsWithMediaTypeCommandOutput) => void
  ): void;
  public streamingTraitsWithMediaType(
    args: StreamingTraitsWithMediaTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StreamingTraitsWithMediaTypeCommandOutput) => void),
    cb?: (err: any, data?: StreamingTraitsWithMediaTypeCommandOutput) => void
  ): Promise<StreamingTraitsWithMediaTypeCommandOutput> | void {
    const command = new StreamingTraitsWithMediaTypeCommand(args);
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
   * This example tests how timestamp request and response headers are serialized.
   */
  public timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TimestampFormatHeadersCommandOutput>;
  public timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    cb: (err: any, data?: TimestampFormatHeadersCommandOutput) => void
  ): void;
  public timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TimestampFormatHeadersCommandOutput) => void
  ): void;
  public timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TimestampFormatHeadersCommandOutput) => void),
    cb?: (err: any, data?: TimestampFormatHeadersCommandOutput) => void
  ): Promise<TimestampFormatHeadersCommandOutput> | void {
    const command = new TimestampFormatHeadersCommand(args);
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
