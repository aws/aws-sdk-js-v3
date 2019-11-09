import { MiddlewareStack } from "./middleware";
import { Command } from "./command";
import { MetadataBearer } from "./response";

/**
 * function definition for different overrides of client's 'send' function.
 */
interface InvokeFunction<
  InputTypes extends object,
  OutputTypes extends MetadataBearer,
  ResolvedClientConfiguration
> {
  <InputType extends InputTypes, OutputType extends OutputTypes>(
    command: Command<
      InputTypes,
      InputType,
      OutputTypes,
      OutputType,
      ResolvedClientConfiguration
    >,
    options?: any
  ): Promise<OutputType>;
  <InputType extends InputTypes, OutputType extends OutputTypes>(
    command: Command<
      InputTypes,
      InputType,
      OutputTypes,
      OutputType,
      ResolvedClientConfiguration
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
      ResolvedClientConfiguration
    >,
    options?: any,
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void;
}

/**
 * A general interface for service clients, idempotent to browser or node clients
 */
export interface Client<
  Input extends object,
  Output extends MetadataBearer,
  ResolvedClientConfiguration
> {
  readonly config: ResolvedClientConfiguration;
  middlewareStack: MiddlewareStack<Input, Output>;
  send: InvokeFunction<Input, Output, ResolvedClientConfiguration>;
}
