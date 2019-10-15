import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { Injectable, HandlerOptions as InjectOptions } from "@aws-sdk/types";

export class Command<InputType extends object, OutputType extends object> {
  readonly middlewareStack = new MiddlewareStack<InputType, OutputType>();
  use(
    injectable: Injectable<InputType, OutputType>,
    injectableOverrider?: (options: InjectOptions) => InjectOptions
  ) {
    if (injectable.toRemove && injectable.toRemove.length > 0) {
      for (const toRemove of injectable.toRemove)
        this.middlewareStack.remove(toRemove);
    }
    for (const { middleware, ...options } of injectable.injectedMiddleware) {
      this.middlewareStack.add(
        // @ts-ignore -- Middleware and option type matching safety is enforced by InjectableMiddleware types
        middleware,
        injectableOverrider ? injectableOverrider(options) : options
      );
    }
  }
}
