import { QueryProtocolClient } from "./QueryProtocolClient";
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
  IgnoresWrappingXmlNameCommand,
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput,
} from "./commands/IgnoresWrappingXmlNameCommand";
import {
  NestedStructuresCommand,
  NestedStructuresCommandInput,
  NestedStructuresCommandOutput,
} from "./commands/NestedStructuresCommand";
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
  QueryIdempotencyTokenAutoFillCommand,
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import { QueryListsCommand, QueryListsCommandInput, QueryListsCommandOutput } from "./commands/QueryListsCommand";
import { QueryMapsCommand, QueryMapsCommandInput, QueryMapsCommandOutput } from "./commands/QueryMapsCommand";
import {
  QueryTimestampsCommand,
  QueryTimestampsCommandInput,
  QueryTimestampsCommandOutput,
} from "./commands/QueryTimestampsCommand";
import {
  RecursiveXmlShapesCommand,
  RecursiveXmlShapesCommandInput,
  RecursiveXmlShapesCommandOutput,
} from "./commands/RecursiveXmlShapesCommand";
import {
  SimpleInputParamsCommand,
  SimpleInputParamsCommandInput,
  SimpleInputParamsCommandOutput,
} from "./commands/SimpleInputParamsCommand";
import {
  SimpleScalarXmlPropertiesCommand,
  SimpleScalarXmlPropertiesCommandInput,
  SimpleScalarXmlPropertiesCommandOutput,
} from "./commands/SimpleScalarXmlPropertiesCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * A query service that sends query requests and XML responses.
 */
export class QueryProtocol extends QueryProtocolClient {
  /**
   * The example tests how requests and responses are serialized when there's
   * no request or response members.
   *
   * While this should be rare, code generators must support this.
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
   * The xmlName trait on the output structure is ignored in AWS Query.
   *
   * The wrapping element is always operation name + "Response", and
   * inside of that wrapper is another wrapper named operation name + "Result".
   */
  public ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IgnoresWrappingXmlNameCommandOutput>;
  public ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    cb: (err: any, data?: IgnoresWrappingXmlNameCommandOutput) => void
  ): void;
  public ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IgnoresWrappingXmlNameCommandOutput) => void
  ): void;
  public ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: IgnoresWrappingXmlNameCommandOutput) => void),
    cb?: (err: any, data?: IgnoresWrappingXmlNameCommandOutput) => void
  ): Promise<IgnoresWrappingXmlNameCommandOutput> | void {
    const command = new IgnoresWrappingXmlNameCommand(args);
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
   * This test serializes nested and recursive structure members.
   */
  public nestedStructures(
    args: NestedStructuresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NestedStructuresCommandOutput>;
  public nestedStructures(
    args: NestedStructuresCommandInput,
    cb: (err: any, data?: NestedStructuresCommandOutput) => void
  ): void;
  public nestedStructures(
    args: NestedStructuresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NestedStructuresCommandOutput) => void
  ): void;
  public nestedStructures(
    args: NestedStructuresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NestedStructuresCommandOutput) => void),
    cb?: (err: any, data?: NestedStructuresCommandOutput) => void
  ): Promise<NestedStructuresCommandOutput> | void {
    const command = new NestedStructuresCommand(args);
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
   *
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
   * no request payload or response members.
   *
   * While this should be rare, code generators must support this.
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
   * This test serializes simple and complex lists.
   */
  public queryLists(args: QueryListsCommandInput, options?: __HttpHandlerOptions): Promise<QueryListsCommandOutput>;
  public queryLists(args: QueryListsCommandInput, cb: (err: any, data?: QueryListsCommandOutput) => void): void;
  public queryLists(
    args: QueryListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryListsCommandOutput) => void
  ): void;
  public queryLists(
    args: QueryListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryListsCommandOutput) => void),
    cb?: (err: any, data?: QueryListsCommandOutput) => void
  ): Promise<QueryListsCommandOutput> | void {
    const command = new QueryListsCommand(args);
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
   * This test serializes simple and complex maps.
   */
  public queryMaps(args: QueryMapsCommandInput, options?: __HttpHandlerOptions): Promise<QueryMapsCommandOutput>;
  public queryMaps(args: QueryMapsCommandInput, cb: (err: any, data?: QueryMapsCommandOutput) => void): void;
  public queryMaps(
    args: QueryMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryMapsCommandOutput) => void
  ): void;
  public queryMaps(
    args: QueryMapsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryMapsCommandOutput) => void),
    cb?: (err: any, data?: QueryMapsCommandOutput) => void
  ): Promise<QueryMapsCommandOutput> | void {
    const command = new QueryMapsCommand(args);
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
   * This test serializes timestamps.
   *
   * 1. Timestamps are serialized as RFC 3339 date-time values by default.
   * 2. A timestampFormat trait on a member changes the format.
   * 3. A timestampFormat trait on the shape targeted by the member changes the format.
   */
  public queryTimestamps(
    args: QueryTimestampsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryTimestampsCommandOutput>;
  public queryTimestamps(
    args: QueryTimestampsCommandInput,
    cb: (err: any, data?: QueryTimestampsCommandOutput) => void
  ): void;
  public queryTimestamps(
    args: QueryTimestampsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryTimestampsCommandOutput) => void
  ): void;
  public queryTimestamps(
    args: QueryTimestampsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryTimestampsCommandOutput) => void),
    cb?: (err: any, data?: QueryTimestampsCommandOutput) => void
  ): Promise<QueryTimestampsCommandOutput> | void {
    const command = new QueryTimestampsCommand(args);
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
  public recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecursiveXmlShapesCommandOutput>;
  public recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    cb: (err: any, data?: RecursiveXmlShapesCommandOutput) => void
  ): void;
  public recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecursiveXmlShapesCommandOutput) => void
  ): void;
  public recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RecursiveXmlShapesCommandOutput) => void),
    cb?: (err: any, data?: RecursiveXmlShapesCommandOutput) => void
  ): Promise<RecursiveXmlShapesCommandOutput> | void {
    const command = new RecursiveXmlShapesCommand(args);
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
   * This test serializes strings, numbers, and boolean values.
   */
  public simpleInputParams(
    args: SimpleInputParamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimpleInputParamsCommandOutput>;
  public simpleInputParams(
    args: SimpleInputParamsCommandInput,
    cb: (err: any, data?: SimpleInputParamsCommandOutput) => void
  ): void;
  public simpleInputParams(
    args: SimpleInputParamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimpleInputParamsCommandOutput) => void
  ): void;
  public simpleInputParams(
    args: SimpleInputParamsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SimpleInputParamsCommandOutput) => void),
    cb?: (err: any, data?: SimpleInputParamsCommandOutput) => void
  ): Promise<SimpleInputParamsCommandOutput> | void {
    const command = new SimpleInputParamsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimpleScalarXmlPropertiesCommandOutput>;
  public simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    cb: (err: any, data?: SimpleScalarXmlPropertiesCommandOutput) => void
  ): void;
  public simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimpleScalarXmlPropertiesCommandOutput) => void
  ): void;
  public simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SimpleScalarXmlPropertiesCommandOutput) => void),
    cb?: (err: any, data?: SimpleScalarXmlPropertiesCommandOutput) => void
  ): Promise<SimpleScalarXmlPropertiesCommandOutput> | void {
    const command = new SimpleScalarXmlPropertiesCommand(args);
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
   * 7. Lists of structures.
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
}
