import { MiddlewareStack, Terminalware } from "./middleware";
import { Structure } from "./protocol";
import { Provider, Decoder, Encoder, UrlParser } from "./util";
// import { StreamCollector, ResponseParser } from "./unmarshaller";
import { RequestSerializer } from "./marshaller";
import { HttpEndpoint } from "./http";
import { TransferHandler } from "./transfer";
import { Command } from "./command";
import { MetadataBearer } from "./response";
import { Credentials } from "./credentials";
import { Hash, HashConstructor } from "./crypto";
import { Middleware } from "./middleware";

export interface ConfigurationPropertyDefinition<
  InputType,
  ResolvedType extends InputType,
  ServiceConfiguration extends { [key: string]: any },
  ResolvedConfiguration extends ServiceConfiguration
> {
  /**
   * Whether this property must be supplied by the user of a client. If value
   * must be resolved but a default is available, this property should be
   * `false` or undefined.
   */
  required?: boolean;

  /**
   * A static value to use as the default should none be supplied.
   */
  defaultValue?: ResolvedType;

  /**
   * A function that returns a default value for this property. It will be
   * called if no value is supplied.
   */
  defaultProvider?: {
    (config: ResolvedConfiguration): ResolvedType;
  };

  /**
   * A function that normalizes input to the subtype expected by the SDK.
   */
  normalize?: {
    (value: InputType, config: Partial<ResolvedConfiguration>): ResolvedType;
  };
}

/**
 * A map of configuration property names to configuration property definitions.
 *
 * Order is significant in the definition provided, as the config object passed
 * to any `defaultProvider` and `apply` functions will only include properties
 * that have already been resolved.
 */
export type ConfigurationDefinition<
  Configuration extends { [key: string]: any },
  ResolvedConfiguration extends Configuration
> = {
  readonly [P in keyof Configuration]: ConfigurationPropertyDefinition<
    Configuration[P],
    ResolvedConfiguration[P],
    Configuration,
    ResolvedConfiguration
  >;
};

/**
 * A general interface for service clients' configuration interface.
 * It is idempotent among browser or node clients
 */
export interface ClientResolvedConfigurationBase {
  credentials?: Provider<Credentials>;
  profile?: string;
  maxRedirects?: number;
  maxRetries?: number;
  region?: Provider<string>;
  sslEnabled?: boolean;
  urlParser?: UrlParser;
  endpointProvider?: any;
  endpoint?: Provider<HttpEndpoint>;
  base64Decoder?: Decoder;
  base64Encoder?: Encoder;
  utf8Decoder?: Decoder;
  utf8Incoder?: Encoder;
  // streamCollector?: StreamCollector<StreamType>;
  // serializer?: Provider<RequestSerializer<StreamType>>;
  // parser?: ResponseParser<StreamType>;
  _user_injected_http_handler?: boolean;
  httpHandler?: TransferHandler<any, any>;
  md5?: { new (): Hash };
  sha256?: HashConstructor;
}

/**
 * function definition for different overrides of client's 'send' function.
 */
interface InvokeFunction<
  InputTypes extends object,
  OutputTypes extends MetadataBearer
> {
  <InputType extends InputTypes, OutputType extends OutputTypes>(
    command: Command<
      InputTypes,
      InputType,
      OutputTypes,
      OutputType,
      ClientResolvedConfigurationBase
    >,
    options?: any
  ): Promise<OutputType>;
  <InputType extends InputTypes, OutputType extends OutputTypes>(
    command: Command<
      InputTypes,
      InputType,
      OutputTypes,
      OutputType,
      ClientResolvedConfigurationBase
    >,
    options: any,
    cb: (err: any, data?: OutputType) => void
  ): void;
  <InputType extends InputTypes, OutputType extends OutputTypes>(
    command: Command<
      InputTypes,
      InputType,
      OutputTypes,
      OutputType,
      ClientResolvedConfigurationBase
    >,
    options?: any,
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void;
}

/**
 * A general interface for service clients, idempotent to browser or node clients
 */
export interface AWSClient {
  readonly config: ClientResolvedConfigurationBase;
  middlewareStack: MiddlewareStack<any, any>;
  send: InvokeFunction<any, any>;
}

export interface Injectable {
  injectInto: (client: AWSClient) => AWSClient;
}
