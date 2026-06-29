// smithy-typescript generated code
import {
  AuthScheme as __AuthScheme,
  Caller as __Caller,
  ExecutionHook as __ExecutionHook,
  FrameworkSteps as __FrameworkSteps,
  generateValidationMessage as __generateValidationMessage,
  generateValidationSummary as __generateValidationSummary,
  httpbinding,
  InternalFailureException as __InternalFailureException,
  isFrameworkException as __isFrameworkException,
  Mux as __Mux,
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerInterceptor as __ServerInterceptor,
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

import { serializeFrameworkException } from "../protocols/Aws_restJson1";
import { MalformedEnum, MalformedEnumSerializer, MalformedEnumServerInput } from "./operations/MalformedEnum";
import { MalformedLength, MalformedLengthSerializer, MalformedLengthServerInput } from "./operations/MalformedLength";
import {
  MalformedLengthOverride,
  MalformedLengthOverrideSerializer,
  MalformedLengthOverrideServerInput,
} from "./operations/MalformedLengthOverride";
import {
  MalformedLengthQueryString,
  MalformedLengthQueryStringSerializer,
  MalformedLengthQueryStringServerInput,
} from "./operations/MalformedLengthQueryString";
import {
  MalformedPattern,
  MalformedPatternSerializer,
  MalformedPatternServerInput,
} from "./operations/MalformedPattern";
import {
  MalformedPatternOverride,
  MalformedPatternOverrideSerializer,
  MalformedPatternOverrideServerInput,
} from "./operations/MalformedPatternOverride";
import { MalformedRange, MalformedRangeSerializer, MalformedRangeServerInput } from "./operations/MalformedRange";
import {
  MalformedRangeOverride,
  MalformedRangeOverrideSerializer,
  MalformedRangeOverrideServerInput,
} from "./operations/MalformedRangeOverride";
import {
  MalformedRequired,
  MalformedRequiredSerializer,
  MalformedRequiredServerInput,
} from "./operations/MalformedRequired";
import {
  MalformedUniqueItems,
  MalformedUniqueItemsSerializer,
  MalformedUniqueItemsServerInput,
} from "./operations/MalformedUniqueItems";
import {
  RecursiveStructures,
  RecursiveStructuresSerializer,
  RecursiveStructuresServerInput,
} from "./operations/RecursiveStructures";
import {
  SensitiveValidation,
  SensitiveValidationSerializer,
  SensitiveValidationServerInput,
} from "./operations/SensitiveValidation";

export type RestJsonValidationServiceOperations = "MalformedEnum" | "MalformedLength" | "MalformedLengthOverride" | "MalformedLengthQueryString" | "MalformedPattern" | "MalformedPatternOverride" | "MalformedRange" | "MalformedRangeOverride" | "MalformedRequired" | "MalformedUniqueItems" | "RecursiveStructures" | "SensitiveValidation";
export interface RestJsonValidationService<Context> {
  MalformedEnum: MalformedEnum<Context>
  MalformedLength: MalformedLength<Context>
  MalformedLengthOverride: MalformedLengthOverride<Context>
  MalformedLengthQueryString: MalformedLengthQueryString<Context>
  MalformedPattern: MalformedPattern<Context>
  MalformedPatternOverride: MalformedPatternOverride<Context>
  MalformedRange: MalformedRange<Context>
  MalformedRangeOverride: MalformedRangeOverride<Context>
  MalformedRequired: MalformedRequired<Context>
  MalformedUniqueItems: MalformedUniqueItems<Context>
  RecursiveStructures: RecursiveStructures<Context>
  SensitiveValidation: SensitiveValidation<Context>
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
const RestJsonValidationServiceHandlerValidators: { [K in RestJsonValidationServiceOperations]: (input: any) => __ValidationFailure[] } = {
  "MalformedEnum": MalformedEnumServerInput.validate,
  "MalformedLength": MalformedLengthServerInput.validate,
  "MalformedLengthOverride": MalformedLengthOverrideServerInput.validate,
  "MalformedLengthQueryString": MalformedLengthQueryStringServerInput.validate,
  "MalformedPattern": MalformedPatternServerInput.validate,
  "MalformedPatternOverride": MalformedPatternOverrideServerInput.validate,
  "MalformedRange": MalformedRangeServerInput.validate,
  "MalformedRangeOverride": MalformedRangeOverrideServerInput.validate,
  "MalformedRequired": MalformedRequiredServerInput.validate,
  "MalformedUniqueItems": MalformedUniqueItemsServerInput.validate,
  "RecursiveStructures": RecursiveStructuresServerInput.validate,
  "SensitiveValidation": SensitiveValidationServerInput.validate,
};
export class RestJsonValidationServiceHandler<Context> implements __ServiceHandler<Context> {
  private readonly mux: __Mux<"RestJsonValidation", RestJsonValidationServiceOperations>;
  private readonly service: RestJsonValidationService<Context>;
  private readonly serializerFactory: <T extends RestJsonValidationServiceOperations>(op: T) => __OperationSerializer<RestJsonValidationService<Context>, T, __ServiceException>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<RestJsonValidationServiceOperations>;
  private readonly interceptors: __ServerInterceptor<Context>[] = [];
  private readonly authSchemes: __AuthScheme<Context>[] = [];
  /**
   * Construct a RestJsonValidationService handler.
   * @param service The {@link RestJsonValidationService} implementation that supplies the business logic for RestJsonValidationService
   * @param mux The {@link __Mux} that determines which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializerFactory A factory for an {@link __OperationSerializer} for each operation in RestJsonValidationService that
   *                          handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    service: RestJsonValidationService<Context>,
    mux: __Mux<"RestJsonValidation", RestJsonValidationServiceOperations>,
    serializerFactory:<T extends RestJsonValidationServiceOperations>(op: T) => __OperationSerializer<RestJsonValidationService<Context>, T, __ServiceException>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<RestJsonValidationServiceOperations>
  ) {
    this.service = service;
    this.mux = mux;
    this.serializerFactory = serializerFactory;
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
      route: (request) => this.mux.match(request)?.operation,
      deserialize: async (operation, request) => {
        try {
          return await this.serializerFactory(operation as RestJsonValidationServiceOperations).deserialize(request, { endpoint: () => Promise.resolve(request), ...serdeContextBase });
        } catch (error: unknown) {
          if (__isFrameworkException(error)) {
            throw error;
          }
          throw new __SerializationException();
        }
      },
      validate: (operation, input) => {
        const validationFailures = RestJsonValidationServiceHandlerValidators[operation as RestJsonValidationServiceOperations](input);
        if (validationFailures && validationFailures.length > 0) {
          const validationException = this.validationCustomizer({ operation: operation as RestJsonValidationServiceOperations }, validationFailures);
          if (validationException) {
            throw validationException;
          }
        }
      },
      invoke: (operation, input, context) => (this.service[operation as RestJsonValidationServiceOperations] as any)(input, context),
      serialize: (operation, output) => this.serializerFactory(operation as RestJsonValidationServiceOperations).serialize(output as any, serdeContextBase),
      serializeError: (operation, error) => {
        if (operation === undefined) {
          return undefined;
        }
        const serializer = this.serializerFactory(operation as RestJsonValidationServiceOperations);
        return serializer.isOperationError(error) ? serializer.serializeError(error, serdeContextBase) : undefined;
      },
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

export const getRestJsonValidationServiceHandler = <Context>(service: RestJsonValidationService<Context>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJsonValidation", keyof RestJsonValidationService<Context>>([
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedEnum">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedEnum" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedEnum" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedLength">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedLength" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedLength" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedLengthOverride">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedLengthOverride" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedLengthOverride" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedLengthQueryString">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedLengthQueryString" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedLengthQueryString" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedPattern">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedPattern" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedPattern" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedPatternOverride">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedPatternOverride" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedPatternOverride" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedRange">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedRange" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedRange" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedRangeOverride">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedRangeOverride" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedRangeOverride" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedRequired">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedRequired" },
      ],
      [
        { type: 'query', key: "stringInQuery" },
      ],
      { service: "RestJsonValidation", operation: "MalformedRequired" }),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedUniqueItems">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedUniqueItems" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "MalformedUniqueItems" }),
    new httpbinding.UriSpec<"RestJsonValidation", "RecursiveStructures">(
      'POST',
      [
        { type: 'path_literal', value: "RecursiveStructures" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "RecursiveStructures" }),
    new httpbinding.UriSpec<"RestJsonValidation", "SensitiveValidation">(
      'POST',
      [
        { type: 'path_literal', value: "SensitiveValidation" },
      ],
      [
      ],
      { service: "RestJsonValidation", operation: "SensitiveValidation" }),
  ]);
  const serFn: (op: RestJsonValidationServiceOperations) => __OperationSerializer<RestJsonValidationService<Context>, RestJsonValidationServiceOperations, __ServiceException> = (op) => {
    switch (op) {
      case "MalformedEnum": return new MalformedEnumSerializer();
      case "MalformedLength": return new MalformedLengthSerializer();
      case "MalformedLengthOverride": return new MalformedLengthOverrideSerializer();
      case "MalformedLengthQueryString": return new MalformedLengthQueryStringSerializer();
      case "MalformedPattern": return new MalformedPatternSerializer();
      case "MalformedPatternOverride": return new MalformedPatternOverrideSerializer();
      case "MalformedRange": return new MalformedRangeSerializer();
      case "MalformedRangeOverride": return new MalformedRangeOverrideSerializer();
      case "MalformedRequired": return new MalformedRequiredSerializer();
      case "MalformedUniqueItems": return new MalformedUniqueItemsSerializer();
      case "RecursiveStructures": return new RecursiveStructuresSerializer();
      case "SensitiveValidation": return new SensitiveValidationSerializer();
    }
  };
  const customizer: __ValidationCustomizer<RestJsonValidationServiceOperations> = (ctx, failures) => {
    if (!failures) {
      return undefined;
    }
    return {
      name: "ValidationException",
      $fault: "client",
      message: __generateValidationSummary(failures),
      fieldList: failures.map(failure => ({
        path: failure.path,
        message: __generateValidationMessage(failure)
      }))
    };
  };
  return new RestJsonValidationServiceHandler(service, mux, serFn, serializeFrameworkException, customizer);
}
