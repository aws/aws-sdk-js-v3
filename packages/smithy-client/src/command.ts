import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { Injectable, HandlerOptions as InjectOptions } from "@aws-sdk/types";

export class Command<InputType extends object, OutputType extends object> {
  readonly middlewareStack = new MiddlewareStack<InputType, OutputType>();
  use(injectable: Injectable<InputType, OutputType>) {
    injectable(this.middlewareStack);
  }
}
