import { MiddlewareStack } from "@aws-sdk/middleware-stack";

export class Command<InputType extends object, OutputType extends object> {
  readonly middlewareStack = new MiddlewareStack<InputType, OutputType>();
}
