import { RestXmlProtocolClient } from "./RestXmlProtocolClient";
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
  HttpPayloadWithStructureCommand,
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "./commands/HttpPayloadWithStructureCommand";
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
import { XmlListsCommand, XmlListsCommandInput, XmlListsCommandOutput } from "./commands/XmlListsCommand";
import { XmlMapsCommand, XmlMapsCommandInput, XmlMapsCommandOutput } from "./commands/XmlMapsCommand";
import {
  XmlMapsXmlNameCommand,
  XmlMapsXmlNameCommandInput,
  XmlMapsXmlNameCommandOutput,
} from "./commands/XmlMapsXmlNameCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * A REST XML service that sends XML requests and responses.
 */
export class RestXmlProtocol extends RestXmlProtocolClient {
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

  public endpointWithHostLabelHeaderOperation(
    args: EndpointWithHostLabelHeaderOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointWithHostLabelHeaderOperationCommandOutput>;
  public endpointWithHostLabelHeaderOperation(
    args: EndpointWithHostLabelHeaderOperationCommandInput,
    cb: (err: any, data?: EndpointWithHostLabelHeaderOperationCommandOutput) => void
  ): void;
  public endpointWithHostLabelHeaderOperation(
    args: EndpointWithHostLabelHeaderOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointWithHostLabelHeaderOperationCommandOutput) => void
  ): void;
  public endpointWithHostLabelHeaderOperation(
    args: EndpointWithHostLabelHeaderOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EndpointWithHostLabelHeaderOperationCommandOutput) => void),
    cb?: (err: any, data?: EndpointWithHostLabelHeaderOperationCommandOutput) => void
  ): Promise<EndpointWithHostLabelHeaderOperationCommandOutput> | void {
    const command = new EndpointWithHostLabelHeaderOperationCommand(args);
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
   * Flattened maps
   */
  public flattenedXmlMap(
    args: FlattenedXmlMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlattenedXmlMapCommandOutput>;
  public flattenedXmlMap(
    args: FlattenedXmlMapCommandInput,
    cb: (err: any, data?: FlattenedXmlMapCommandOutput) => void
  ): void;
  public flattenedXmlMap(
    args: FlattenedXmlMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlattenedXmlMapCommandOutput) => void
  ): void;
  public flattenedXmlMap(
    args: FlattenedXmlMapCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FlattenedXmlMapCommandOutput) => void),
    cb?: (err: any, data?: FlattenedXmlMapCommandOutput) => void
  ): Promise<FlattenedXmlMapCommandOutput> | void {
    const command = new FlattenedXmlMapCommand(args);
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
   * Flattened maps with @xmlName
   */
  public flattenedXmlMapWithXmlName(
    args: FlattenedXmlMapWithXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlattenedXmlMapWithXmlNameCommandOutput>;
  public flattenedXmlMapWithXmlName(
    args: FlattenedXmlMapWithXmlNameCommandInput,
    cb: (err: any, data?: FlattenedXmlMapWithXmlNameCommandOutput) => void
  ): void;
  public flattenedXmlMapWithXmlName(
    args: FlattenedXmlMapWithXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlattenedXmlMapWithXmlNameCommandOutput) => void
  ): void;
  public flattenedXmlMapWithXmlName(
    args: FlattenedXmlMapWithXmlNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FlattenedXmlMapWithXmlNameCommandOutput) => void),
    cb?: (err: any, data?: FlattenedXmlMapWithXmlNameCommandOutput) => void
  ): Promise<FlattenedXmlMapWithXmlNameCommandOutput> | void {
    const command = new FlattenedXmlMapWithXmlNameCommand(args);
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
   * Flattened maps with @xmlNamespace and @xmlName
   */
  public flattenedXmlMapWithXmlNamespace(
    args: FlattenedXmlMapWithXmlNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput>;
  public flattenedXmlMapWithXmlNamespace(
    args: FlattenedXmlMapWithXmlNamespaceCommandInput,
    cb: (err: any, data?: FlattenedXmlMapWithXmlNamespaceCommandOutput) => void
  ): void;
  public flattenedXmlMapWithXmlNamespace(
    args: FlattenedXmlMapWithXmlNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlattenedXmlMapWithXmlNamespaceCommandOutput) => void
  ): void;
  public flattenedXmlMapWithXmlNamespace(
    args: FlattenedXmlMapWithXmlNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FlattenedXmlMapWithXmlNamespaceCommandOutput) => void),
    cb?: (err: any, data?: FlattenedXmlMapWithXmlNamespaceCommandOutput) => void
  ): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> | void {
    const command = new FlattenedXmlMapWithXmlNamespaceCommand(args);
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
   * 3. A BadRequest error.
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

  /**
   * This examples serializes a blob shape in the payload.
   *
   * In this example, no XML document is synthesized because the payload is
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
   * The following example serializes a payload that uses an XML name,
   * changing the wrapper name.
   */
  public httpPayloadWithXmlName(
    args: HttpPayloadWithXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithXmlNameCommandOutput>;
  public httpPayloadWithXmlName(
    args: HttpPayloadWithXmlNameCommandInput,
    cb: (err: any, data?: HttpPayloadWithXmlNameCommandOutput) => void
  ): void;
  public httpPayloadWithXmlName(
    args: HttpPayloadWithXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithXmlNameCommandOutput) => void
  ): void;
  public httpPayloadWithXmlName(
    args: HttpPayloadWithXmlNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpPayloadWithXmlNameCommandOutput) => void),
    cb?: (err: any, data?: HttpPayloadWithXmlNameCommandOutput) => void
  ): Promise<HttpPayloadWithXmlNameCommandOutput> | void {
    const command = new HttpPayloadWithXmlNameCommand(args);
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
   * The following example serializes a payload that uses an XML namespace.
   */
  public httpPayloadWithXmlNamespace(
    args: HttpPayloadWithXmlNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithXmlNamespaceCommandOutput>;
  public httpPayloadWithXmlNamespace(
    args: HttpPayloadWithXmlNamespaceCommandInput,
    cb: (err: any, data?: HttpPayloadWithXmlNamespaceCommandOutput) => void
  ): void;
  public httpPayloadWithXmlNamespace(
    args: HttpPayloadWithXmlNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithXmlNamespaceCommandOutput) => void
  ): void;
  public httpPayloadWithXmlNamespace(
    args: HttpPayloadWithXmlNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpPayloadWithXmlNamespaceCommandOutput) => void),
    cb?: (err: any, data?: HttpPayloadWithXmlNamespaceCommandOutput) => void
  ): Promise<HttpPayloadWithXmlNamespaceCommandOutput> | void {
    const command = new HttpPayloadWithXmlNamespaceCommand(args);
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
   * The following example serializes a payload that uses an XML namespace.
   */
  public httpPayloadWithXmlNamespaceAndPrefix(
    args: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput>;
  public httpPayloadWithXmlNamespaceAndPrefix(
    args: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    cb: (err: any, data?: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput) => void
  ): void;
  public httpPayloadWithXmlNamespaceAndPrefix(
    args: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput) => void
  ): void;
  public httpPayloadWithXmlNamespaceAndPrefix(
    args: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput) => void),
    cb?: (err: any, data?: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput) => void
  ): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> | void {
    const command = new HttpPayloadWithXmlNamespaceAndPrefixCommand(args);
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
   * The example tests how timestamp request and response headers are serialized.
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

  /**
   * This example serializes an XML attributes on synthesized document.
   */
  public xmlAttributes(
    args: XmlAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlAttributesCommandOutput>;
  public xmlAttributes(
    args: XmlAttributesCommandInput,
    cb: (err: any, data?: XmlAttributesCommandOutput) => void
  ): void;
  public xmlAttributes(
    args: XmlAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlAttributesCommandOutput) => void
  ): void;
  public xmlAttributes(
    args: XmlAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlAttributesCommandOutput) => void),
    cb?: (err: any, data?: XmlAttributesCommandOutput) => void
  ): Promise<XmlAttributesCommandOutput> | void {
    const command = new XmlAttributesCommand(args);
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
   * This example serializes an XML attributes on a document targeted by httpPayload.
   */
  public xmlAttributesOnPayload(
    args: XmlAttributesOnPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlAttributesOnPayloadCommandOutput>;
  public xmlAttributesOnPayload(
    args: XmlAttributesOnPayloadCommandInput,
    cb: (err: any, data?: XmlAttributesOnPayloadCommandOutput) => void
  ): void;
  public xmlAttributesOnPayload(
    args: XmlAttributesOnPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlAttributesOnPayloadCommandOutput) => void
  ): void;
  public xmlAttributesOnPayload(
    args: XmlAttributesOnPayloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlAttributesOnPayloadCommandOutput) => void),
    cb?: (err: any, data?: XmlAttributesOnPayloadCommandOutput) => void
  ): Promise<XmlAttributesOnPayloadCommandOutput> | void {
    const command = new XmlAttributesOnPayloadCommand(args);
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
  public xmlBlobs(args: XmlBlobsCommandInput, options?: __HttpHandlerOptions): Promise<XmlBlobsCommandOutput>;
  public xmlBlobs(args: XmlBlobsCommandInput, cb: (err: any, data?: XmlBlobsCommandOutput) => void): void;
  public xmlBlobs(
    args: XmlBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlBlobsCommandOutput) => void
  ): void;
  public xmlBlobs(
    args: XmlBlobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlBlobsCommandOutput) => void),
    cb?: (err: any, data?: XmlBlobsCommandOutput) => void
  ): Promise<XmlBlobsCommandOutput> | void {
    const command = new XmlBlobsCommand(args);
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
  public xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlEmptyBlobsCommandOutput>;
  public xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    cb: (err: any, data?: XmlEmptyBlobsCommandOutput) => void
  ): void;
  public xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyBlobsCommandOutput) => void
  ): void;
  public xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlEmptyBlobsCommandOutput) => void),
    cb?: (err: any, data?: XmlEmptyBlobsCommandOutput) => void
  ): Promise<XmlEmptyBlobsCommandOutput> | void {
    const command = new XmlEmptyBlobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlEmptyListsCommandOutput>;
  public xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    cb: (err: any, data?: XmlEmptyListsCommandOutput) => void
  ): void;
  public xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyListsCommandOutput) => void
  ): void;
  public xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlEmptyListsCommandOutput) => void),
    cb?: (err: any, data?: XmlEmptyListsCommandOutput) => void
  ): Promise<XmlEmptyListsCommandOutput> | void {
    const command = new XmlEmptyListsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public xmlEmptyMaps(
    args: XmlEmptyMapsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlEmptyMapsCommandOutput>;
  public xmlEmptyMaps(args: XmlEmptyMapsCommandInput, cb: (err: any, data?: XmlEmptyMapsCommandOutput) => void): void;
  public xmlEmptyMaps(
    args: XmlEmptyMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyMapsCommandOutput) => void
  ): void;
  public xmlEmptyMaps(
    args: XmlEmptyMapsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlEmptyMapsCommandOutput) => void),
    cb?: (err: any, data?: XmlEmptyMapsCommandOutput) => void
  ): Promise<XmlEmptyMapsCommandOutput> | void {
    const command = new XmlEmptyMapsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public xmlEmptyStrings(
    args: XmlEmptyStringsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlEmptyStringsCommandOutput>;
  public xmlEmptyStrings(
    args: XmlEmptyStringsCommandInput,
    cb: (err: any, data?: XmlEmptyStringsCommandOutput) => void
  ): void;
  public xmlEmptyStrings(
    args: XmlEmptyStringsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyStringsCommandOutput) => void
  ): void;
  public xmlEmptyStrings(
    args: XmlEmptyStringsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlEmptyStringsCommandOutput) => void),
    cb?: (err: any, data?: XmlEmptyStringsCommandOutput) => void
  ): Promise<XmlEmptyStringsCommandOutput> | void {
    const command = new XmlEmptyStringsCommand(args);
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
  public xmlEnums(args: XmlEnumsCommandInput, options?: __HttpHandlerOptions): Promise<XmlEnumsCommandOutput>;
  public xmlEnums(args: XmlEnumsCommandInput, cb: (err: any, data?: XmlEnumsCommandOutput) => void): void;
  public xmlEnums(
    args: XmlEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEnumsCommandOutput) => void
  ): void;
  public xmlEnums(
    args: XmlEnumsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlEnumsCommandOutput) => void),
    cb?: (err: any, data?: XmlEnumsCommandOutput) => void
  ): Promise<XmlEnumsCommandOutput> | void {
    const command = new XmlEnumsCommand(args);
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
   * This test case serializes XML lists for the following cases for both
   * input and output:
   *
   * 1. Normal XML lists.
   * 2. Normal XML sets.
   * 3. XML lists of lists.
   * 4. XML lists with @xmlName on its members
   * 5. Flattened XML lists.
   * 6. Flattened XML lists with @xmlName.
   * 7. Flattened XML lists with @xmlNamespace.
   * 8. Lists of structures.
   */
  public xmlLists(args: XmlListsCommandInput, options?: __HttpHandlerOptions): Promise<XmlListsCommandOutput>;
  public xmlLists(args: XmlListsCommandInput, cb: (err: any, data?: XmlListsCommandOutput) => void): void;
  public xmlLists(
    args: XmlListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlListsCommandOutput) => void
  ): void;
  public xmlLists(
    args: XmlListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlListsCommandOutput) => void),
    cb?: (err: any, data?: XmlListsCommandOutput) => void
  ): Promise<XmlListsCommandOutput> | void {
    const command = new XmlListsCommand(args);
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
  public xmlMaps(args: XmlMapsCommandInput, options?: __HttpHandlerOptions): Promise<XmlMapsCommandOutput>;
  public xmlMaps(args: XmlMapsCommandInput, cb: (err: any, data?: XmlMapsCommandOutput) => void): void;
  public xmlMaps(
    args: XmlMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlMapsCommandOutput) => void
  ): void;
  public xmlMaps(
    args: XmlMapsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlMapsCommandOutput) => void),
    cb?: (err: any, data?: XmlMapsCommandOutput) => void
  ): Promise<XmlMapsCommandOutput> | void {
    const command = new XmlMapsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public xmlMapsXmlName(
    args: XmlMapsXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlMapsXmlNameCommandOutput>;
  public xmlMapsXmlName(
    args: XmlMapsXmlNameCommandInput,
    cb: (err: any, data?: XmlMapsXmlNameCommandOutput) => void
  ): void;
  public xmlMapsXmlName(
    args: XmlMapsXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlMapsXmlNameCommandOutput) => void
  ): void;
  public xmlMapsXmlName(
    args: XmlMapsXmlNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlMapsXmlNameCommandOutput) => void),
    cb?: (err: any, data?: XmlMapsXmlNameCommandOutput) => void
  ): Promise<XmlMapsXmlNameCommandOutput> | void {
    const command = new XmlMapsXmlNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public xmlNamespaces(
    args: XmlNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlNamespacesCommandOutput>;
  public xmlNamespaces(
    args: XmlNamespacesCommandInput,
    cb: (err: any, data?: XmlNamespacesCommandOutput) => void
  ): void;
  public xmlNamespaces(
    args: XmlNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlNamespacesCommandOutput) => void
  ): void;
  public xmlNamespaces(
    args: XmlNamespacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlNamespacesCommandOutput) => void),
    cb?: (err: any, data?: XmlNamespacesCommandOutput) => void
  ): Promise<XmlNamespacesCommandOutput> | void {
    const command = new XmlNamespacesCommand(args);
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
  public xmlTimestamps(
    args: XmlTimestampsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<XmlTimestampsCommandOutput>;
  public xmlTimestamps(
    args: XmlTimestampsCommandInput,
    cb: (err: any, data?: XmlTimestampsCommandOutput) => void
  ): void;
  public xmlTimestamps(
    args: XmlTimestampsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlTimestampsCommandOutput) => void
  ): void;
  public xmlTimestamps(
    args: XmlTimestampsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlTimestampsCommandOutput) => void),
    cb?: (err: any, data?: XmlTimestampsCommandOutput) => void
  ): Promise<XmlTimestampsCommandOutput> | void {
    const command = new XmlTimestampsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public xmlUnions(args: XmlUnionsCommandInput, options?: __HttpHandlerOptions): Promise<XmlUnionsCommandOutput>;
  public xmlUnions(args: XmlUnionsCommandInput, cb: (err: any, data?: XmlUnionsCommandOutput) => void): void;
  public xmlUnions(
    args: XmlUnionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlUnionsCommandOutput) => void
  ): void;
  public xmlUnions(
    args: XmlUnionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: XmlUnionsCommandOutput) => void),
    cb?: (err: any, data?: XmlUnionsCommandOutput) => void
  ): Promise<XmlUnionsCommandOutput> | void {
    const command = new XmlUnionsCommand(args);
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
