type MapToType<T> = T extends "string"
  ? string
  : T extends "boolean"
  ? boolean
  : T extends "number"
  ? number
  : T extends "array"
  ? unknown[]
  : T extends "object"
  ? Record<string, unknown>
  : never;

type MapToTypeArray<T extends any[]> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
  ? [MapToType<First>, ...MapToTypeArray<Rest>]
  : never;

export const validateArgTypes = <P extends any[]>(fnName: string, args: any[], ...argTypes: P): MapToTypeArray<P> => {
  if (args.length < argTypes.length) {
    throw new Error(`Function "${fnName}" expects "${argTypes.length}" parameters, got ${args.length}`);
  }
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const expectedType = argTypes[i];
    if (expectedType === "boolean" && typeof arg !== "boolean") {
      throw new Error(`Expect ${i + 1}th parameter of function "${fnName}" to be type "boolean", but got value ${arg}`);
    }
    if (expectedType === "number" && typeof arg !== "number") {
      throw new Error(`Expect ${i + 1}th parameter of function "${fnName}" to be type "number", but got value ${arg}`);
    }
    if (expectedType === "array" && !(arg instanceof Array)) {
      throw new Error(`Expect ${i + 1}th parameter of function "${fnName}" to be type "array", but got value ${arg}`);
    }
    if (expectedType === "object" && !(arg instanceof Object)) {
      throw new Error(`Expect ${i + 1}th parameter of function "${fnName}" to be type "object", but got value ${arg}`);
    }
  }
  return args as MapToTypeArray<P>;
};
