// smithy-typescript generated code
import {
  AuthScheme as __AuthScheme,
  Caller as __Caller,
  ExecutionHook as __ExecutionHook,
  FrameworkSteps as __FrameworkSteps,
  httpbinding,
  InternalFailureException as __InternalFailureException,
  isFrameworkException as __isFrameworkException,
  Mux as __Mux,
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerInterceptor as __ServerInterceptor,
  ServerSerdeContext,
  ServerSerdeContext as __ServerSerdeContext,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnauthenticatedException as __UnauthenticatedException,
  UnknownOperationException as __UnknownOperationException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/core/protocols";
import { fromBase64, fromUtf8, toBase64, toUtf8 } from "@smithy/core/serde";
import { NodeHttpHandler, streamCollector } from "@smithy/node-http-handler";

import { QueryIdempotencyTokenAutoFillInput } from "../../models/models_0";
import {
  deserializeQueryIdempotencyTokenAutoFillRequest,
  serializeFrameworkException,
  serializeQueryIdempotencyTokenAutoFillResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type QueryIdempotencyTokenAutoFill<Context> = __Operation<QueryIdempotencyTokenAutoFillServerInput, QueryIdempotencyTokenAutoFillServerOutput, Context>

export interface QueryIdempotencyTokenAutoFillServerInput extends QueryIdempotencyTokenAutoFillInput {}
export namespace QueryIdempotencyTokenAutoFillServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof QueryIdempotencyTokenAutoFillInput.validate>[0]) => __ValidationFailure[] = QueryIdempotencyTokenAutoFillInput.validate;
}
export interface QueryIdempotencyTokenAutoFillServerOutput {}

export type QueryIdempotencyTokenAutoFillErrors = never;

export class QueryIdempotencyTokenAutoFillSerializer implements __OperationSerializer<RestJsonService<any>, "QueryIdempotencyTokenAutoFill", QueryIdempotencyTokenAutoFillErrors> {
  serialize = serializeQueryIdempotencyTokenAutoFillResponse;
  deserialize = deserializeQueryIdempotencyTokenAutoFillRequest;

  isOperationError(error: any): error is QueryIdempotencyTokenAutoFillErrors {
    return false;
  };

  serializeError(error: QueryIdempotencyTokenAutoFillErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }

}

export const getQueryIdempotencyTokenAutoFillHandler = <Context>(operation: __Operation<QueryIdempotencyTokenAutoFillServerInput, QueryIdempotencyTokenAutoFillServerOutput, Context>, customizer: __ValidationCustomizer<"QueryIdempotencyTokenAutoFill">): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "QueryIdempotencyTokenAutoFill">([
    new httpbinding.UriSpec<"RestJson", "QueryIdempotencyTokenAutoFill">(
      'POST',
      [
        { type: 'path_literal', value: "QueryIdempotencyTokenAutoFill" },
      ],
      [
      ],
      { service: "RestJson", operation: "QueryIdempotencyTokenAutoFill" }),
  ]);
  return new QueryIdempotencyTokenAutoFillHandler(operation, mux, new QueryIdempotencyTokenAutoFillSerializer(), serializeFrameworkException, customizer);
}

const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true
};
export class QueryIdempotencyTokenAutoFillHandler<Context> implements __ServiceHandler<Context> {
  private readonly mux: __Mux<"RestJson", "QueryIdempotencyTokenAutoFill">;
  private readonly operation: __Operation<QueryIdempotencyTokenAutoFillServerInput, QueryIdempotencyTokenAutoFillServerOutput, Context>;
  private readonly serializer: __OperationSerializer<RestJsonService<Context>, "QueryIdempotencyTokenAutoFill", QueryIdempotencyTokenAutoFillErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"QueryIdempotencyTokenAutoFill">;
  private readonly interceptors: __ServerInterceptor<Context>[] = [];
  private readonly authSchemes: __AuthScheme<Context>[] = [];
  /**
   * Construct a QueryIdempotencyTokenAutoFill handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for QueryIdempotencyTokenAutoFill
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for QueryIdempotencyTokenAutoFill that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<QueryIdempotencyTokenAutoFillServerInput, QueryIdempotencyTokenAutoFillServerOutput, Context>,
    mux: __Mux<"RestJson", "QueryIdempotencyTokenAutoFill">,
    serializer: __OperationSerializer<RestJsonService<Context>, "QueryIdempotencyTokenAutoFill", QueryIdempotencyTokenAutoFillErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"QueryIdempotencyTokenAutoFill">
  ) {
    this.operation = operation;
    this.mux = mux;
    this.serializer = serializer;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  withAuth(...schemes: __AuthScheme<Context>[]): this {
    this.authSchemes.push(...schemes);
    return this;
  }
  addInterceptor(interceptor: __ServerInterceptor<Context>): this {
    this.interceptors.unshift(interceptor);
    return this;
  }
  addInterceptors(...interceptors: __ServerInterceptor<Context>[]): this {
    this.interceptors.unshift(...[...interceptors].reverse());
    return this;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const steps: __FrameworkSteps<Context> = {
      route: (request) => this.mux.match(request) !== undefined ? "QueryIdempotencyTokenAutoFill" : undefined,
      deserialize: async (_op, request) => {
        try {
          return await this.serializer.deserialize(request, { endpoint: () => Promise.resolve(request), ...serdeContextBase });
        } catch (error: unknown) {
          if (__isFrameworkException(error)) {
            throw error;
          }
          throw new __SerializationException();
        }
      },
      validate: (_op, input) => {
        const validationFailures = (QueryIdempotencyTokenAutoFillServerInput.validate as (input: any) => __ValidationFailure[])(input);
        if (validationFailures && validationFailures.length > 0) {
          const validationException = this.validationCustomizer({ operation: "QueryIdempotencyTokenAutoFill" }, validationFailures);
          if (validationException) {
            throw validationException;
          }
        }
      },
      invoke: (_op, input, context) => this.operation(input as QueryIdempotencyTokenAutoFillServerInput, context),
      serialize: (_op, output) => this.serializer.serialize(output as QueryIdempotencyTokenAutoFillServerOutput, serdeContextBase),
      serializeError: (_op, error) => this.serializer.isOperationError(error) ? this.serializer.serializeError(error, serdeContextBase) : undefined,
      serializeFrameworkException: (e) => this.serializeFrameworkException(e, serdeContextBase),
    };

    const convertError = (op: string | undefined, caught: unknown): Promise<__HttpResponse> => {
      const modeled = steps.serializeError(op, caught);
      if (modeled) {
        return modeled;
      }
      if (__isFrameworkException(caught)) {
        return steps.serializeFrameworkException(caught);
      }
      return steps.serializeFrameworkException(new __InternalFailureException());
    };

    const base = { request, context };
    let operation: string | undefined;
    let input: unknown;
    let output: unknown;
    let response: __HttpResponse | undefined;
    let caller: __Caller | undefined;
    let error: unknown;

    const entered = new Set<__ServerInterceptor<Context>>();

    try {
      for (const interceptor of this.interceptors) {
        if (interceptor.readBeforeExecution) {
          interceptor.readBeforeExecution(base);
        }
        entered.add(interceptor);
      }

      let authScheme: string | undefined;
      if (this.authSchemes.length > 0) {
        for (const scheme of this.authSchemes) {
          const result = await scheme.authenticate(request, context);
          if (result) {
            caller = result;
            authScheme = scheme.name;
            break;
          }
        }
        if (!caller) {
          throw new __UnauthenticatedException();
        }
        this.fireRead("readAfterAuthentication", () => ({ ...base, authScheme: authScheme!, caller: caller! }));
      }

      const req = this.fireModify<__HttpRequest, typeof base>("modifyBeforeDeserialization", request, (r) => ({ ...base, request: r }));

      operation = steps.route(req);
      if (!operation) {
        throw new __UnknownOperationException();
      }

      input = await steps.deserialize(operation, req);
      const inputHook = () => ({ ...base, operation: operation!, input });
      this.fireRead("readAfterDeserialization", inputHook);
      input = this.fireModify("modifyBeforeValidation", input, (v) => ({ ...base, operation: operation!, input: v }));
      steps.validate(operation, input);
      this.fireRead("readAfterValidation", inputHook);
      this.fireRead("readBeforeInvocation", inputHook);
      output = await steps.invoke(operation, input, context);
      this.fireRead("readAfterInvocation", () => ({ ...base, operation: operation!, input, output }));
      output = this.fireModify("modifyBeforeSerialization", output, (v) => ({ ...base, operation: operation!, input, output: v }));
      response = await steps.serialize(operation, output);
      this.fireRead("readAfterSerialization", () => ({ ...base, operation: operation!, input, output, response: response! }));
    } catch (caught: unknown) {
      error = caught;
      response = await convertError(operation, caught);
    }

    try {
      response = this.fireModify("modifyBeforeCompletion", response!, (v) => ({ ...base, operation: operation!, input, output, response: v }));
    } catch (caught: unknown) {
      error = caught;
      response = await convertError(operation, caught);
    }

    const execHook: __ExecutionHook<Context> = { request, context, operation, input, output, response, error };
    for (const interceptor of this.interceptors) {
      if (entered.has(interceptor) && interceptor.readAfterExecution) {
        try {
          interceptor.readAfterExecution(execHook);
        } catch (e) {
          // readAfterExecution is best-effort and must not mask the response; ignore hook failures.
        }
      }
    }

    return response!;
  }
  private fireRead<H>(method: keyof __ServerInterceptor<Context>, buildHook: () => H): void {
    for (const interceptor of this.interceptors) {
      const fn = interceptor[method] as ((hook: H) => void) | undefined;
      if (fn) {
        fn.call(interceptor, buildHook());
      }
    }
  }
  private fireModify<V, H>(method: keyof __ServerInterceptor<Context>, initial: V, buildHook: (current: V) => H): V {
    let current = initial;
    for (const interceptor of this.interceptors) {
      const fn = interceptor[method] as ((hook: H) => V) | undefined;
      if (fn) {
        current = fn.call(interceptor, buildHook(current));
      }
    }
    return current;
  }
}
