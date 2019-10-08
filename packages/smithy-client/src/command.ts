import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import {
  InjectableMiddleware,
  HandlerOptions as InjectOptions
} from "@aws-sdk/types";

export class Command<InputType extends object, OutputType extends object> {
  readonly middlewareStack = new MiddlewareStack<InputType, OutputType>();
  use(
    injectable: InjectableMiddleware<InputType, OutputType>,
    options: InjectOptions = {}
  ) {
    const { middleware, step, priority, tags } = injectable;
    this.middlewareStack.add(
      // @ts-ignore
      middleware,
      {
        step: options.step || step,
        priority: options.priority || priority,
        tags: { ...tags, ...options.tags }
      }
    );
  }
}
