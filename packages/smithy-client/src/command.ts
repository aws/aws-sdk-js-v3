import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { Pluggable, HandlerOptions as InjectOptions } from "@aws-sdk/types";

export class Command<InputType extends object, OutputType extends object> {
  readonly middlewareStack = new MiddlewareStack<InputType, OutputType>();
  use(pluggable: Pluggable<InputType, OutputType>) {
    pluggable(this.middlewareStack);
  }
}
