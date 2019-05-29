import { MiddlewareStack, Terminalware } from "./middleware";
import { Structure } from "./protocol";
import { Provider, Decoder, Encoder, UrlParser } from "./util";
import { StreamCollector, ResponseParser } from "./unmarshaller";
import { RequestSerializer } from "./marshaller";
import { HttpEndpoint, HttpHandler } from "./http";
import { Command } from "./command";
import { MetadataBearer } from "./response";
import { Credentials } from "./credentials";
import { Hash, HashConstructor } from "./crypto";

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

  /**
   * A function that finalizes the value supplied and/or alters the client
   * configuration or middleware stack in reaction to it.
   */
  apply?: ConfigApplicator<ResolvedConfiguration>;
}

export interface ConfigApplicator<FullConfiguration> {
  (
    config: FullConfiguration,
    clientMiddlewareStack: MiddlewareStack<any, any, any>
  ): void;
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
  >
};

/**
 * A general interface for service clients' configuration interface.
 * It is idempotent among browser or node clients
 */
export interface ClientResolvedConfigurationBase<
  OutputTypes extends object,
  StreamType
> {
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
  streamCollector?: StreamCollector<StreamType>;
  serializer?: Provider<RequestSerializer<StreamType>>;
  parser?: ResponseParser<StreamType>;
  _user_injected_http_handler?: boolean;
  httpHandler?: HttpHandler<StreamType>;
  handler?: Terminalware<OutputTypes, StreamType>;
  md5?: { new (): Hash };
  sha256?: HashConstructor;
}

/**
 * function definition for different overrides of client's 'send' function.
 */
interface InvokeFunction<
  InputTypes extends object,
  OutputTypes extends MetadataBearer,
  StreamType
> {
  <InputType extends InputTypes, OutputType extends OutputTypes>(
    command: Command<
      InputTypes,
      InputType,
      OutputTypes,
      OutputType,
      ClientResolvedConfigurationBase<OutputTypes, StreamType>,
      StreamType
    >
  ): Promise<OutputType>;
  <InputType extends InputTypes, OutputType extends OutputTypes>(
    command: Command<
      InputTypes,
      InputType,
      OutputTypes,
      OutputType,
      ClientResolvedConfigurationBase<OutputTypes, StreamType>,
      StreamType
    >,
    cb: (err: any, data?: OutputType) => void
  ): void;
  <InputType extends InputTypes, OutputType extends OutputTypes>(
    command: Command<
      InputTypes,
      InputType,
      OutputTypes,
      OutputType,
      ClientResolvedConfigurationBase<OutputTypes, StreamType>,
      StreamType
    >,
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void;
}

/**
 * A general interface for service clients, idempotent to browser or node clients
 */
export interface AWSClient<
  InputTypes extends object,
  OutputTypes extends MetadataBearer,
  StreamType
> {
  readonly config: ClientResolvedConfigurationBase<OutputTypes, StreamType>;
  middlewareStack: MiddlewareStack<InputTypes, OutputTypes, StreamType>;
  send: InvokeFunction<InputTypes, OutputTypes, StreamType>;
}
