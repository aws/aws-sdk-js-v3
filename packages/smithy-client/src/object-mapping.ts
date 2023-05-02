/**
 * @internal
 *
 * A set of instructions for multiple keys.
 * The aim is to provide a concise yet readable way to map and filter values
 * onto a target object.
 *
 * @example
 * ```javascript
 * const example: ObjectMappingInstructions = {
 *   lazyValue1: [, () => 1],
 *   lazyValue2: [, () => 2],
 *   lazyValue3: [, () => 3],
 *   lazyConditionalValue1: [() => true, () => 4],
 *   lazyConditionalValue2: [() => true, () => 5],
 *   lazyConditionalValue3: [true, () => 6],
 *   lazyConditionalValue4: [false, () => 44],
 *   lazyConditionalValue5: [() => false, () => 55],
 *   lazyConditionalValue6: ["", () => 66],
 *   simpleValue1: [, 7],
 *   simpleValue2: [, 8],
 *   simpleValue3: [, 9],
 *   conditionalValue1: [() => true, 10],
 *   conditionalValue2: [() => true, 11],
 *   conditionalValue3: [{}, 12],
 *   conditionalValue4: [false, 110],
 *   conditionalValue5: [() => false, 121],
 *   conditionalValue6: ["", 132],
 * };
 *
 * const exampleResult: Record<string, any> = {
 *   lazyValue1: 1,
 *   lazyValue2: 2,
 *   lazyValue3: 3,
 *   lazyConditionalValue1: 4,
 *   lazyConditionalValue2: 5,
 *   lazyConditionalValue3: 6,
 *   simpleValue1: 7,
 *   simpleValue2: 8,
 *   simpleValue3: 9,
 *   conditionalValue1: 10,
 *   conditionalValue2: 11,
 *   conditionalValue3: 12,
 * };
 * ```
 */
export type ObjectMappingInstructions = Record<string, ObjectMappingInstruction>;

/**
 * @internal
 *
 * A variant of the object mapping instruction for the `take` function.
 * In this case, the source value is provided to the value function, turning it
 * from a supplier into a mapper.
 */
export type SourceMappingInstructions = Record<string, ValueMapper | SourceMappingInstruction>;

/**
 * @internal
 *
 * An instruction set for assigning a value to a target object.
 */
export type ObjectMappingInstruction =
  | LazyValueInstruction
  | ConditionalLazyValueInstruction
  | SimpleValueInstruction
  | ConditionalValueInstruction
  | UnfilteredValue;

/**
 * @internal
 *
 * non-array
 */
export type UnfilteredValue = any;
/**
 * @internal
 */
export type LazyValueInstruction = [FilterStatus, ValueSupplier];
/**
 * @internal
 */
export type ConditionalLazyValueInstruction = [FilterStatusSupplier, ValueSupplier];
/**
 * @internal
 */
export type SimpleValueInstruction = [FilterStatus, Value];
/**
 * @internal
 */
export type ConditionalValueInstruction = [ValueFilteringFunction, Value];
/**
 * @internal
 */
export type SourceMappingInstruction = [(ValueFilteringFunction | FilterStatus)?, ValueMapper?, string?];

/**
 * @internal
 *
 * Filter is considered passed if
 * 1. It is a boolean true.
 * 2. It is not undefined and is itself truthy.
 * 3. It is undefined and the corresponding _value_ is neither null nor undefined.
 */
export type FilterStatus = boolean | unknown | void;

/**
 * @internal
 *
 * Supplies the filter check but not against any value as input.
 */
export type FilterStatusSupplier = () => boolean;

/**
 * @internal
 *
 * Filter check with the given value.
 */
export type ValueFilteringFunction = (value: any) => boolean;

/**
 * @internal
 *
 * Supplies the value for lazy evaluation.
 */
export type ValueSupplier = () => any;

/**
 * @internal
 *
 * A function that maps the source value to the target value.
 * Defaults to pass-through with nullish check.
 */
export type ValueMapper = (value: any) => any;

/**
 * @internal
 *
 * A non-function value.
 */
export type Value = any;

/**
 * @internal
 * Internal/Private, for codegen use only.
 *
 * Transfer a set of keys from [instructions] to [target].
 *
 * For each instruction in the record, the target key will be the instruction key.
 * The target assignment will be conditional on the instruction's filter.
 * The target assigned value will be supplied by the instructions as an evaluable function or non-function value.
 *
 * @see ObjectMappingInstructions for an example.
 */
export function map(
  target: any,
  filter: (value: any) => boolean,
  instructions: Record<string, ValueSupplier | Value>
): typeof target;
/**
 * @internal
 */
export function map(instructions: ObjectMappingInstructions): any;
/**
 * @internal
 */
export function map(target: any, instructions: ObjectMappingInstructions): typeof target;
/**
 * @internal
 */
export function map(arg0: any, arg1?: any, arg2?: any): any {
  let target: any;
  let filter: (value?: any) => boolean;
  let instructions: ObjectMappingInstructions;

  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }

  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key]; // unchecked value.
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}

/**
 * Convert a regular object `{ k: v }` to `{ k: [, v] }` mapping instruction set with default
 * filter.
 *
 * @internal
 */
export const convertMap = (target: any): Record<string, any> => {
  const output: Record<string, any> = {};
  for (const [k, v] of Object.entries(target || {})) {
    output[k] = [, v];
  }
  return output;
};

/**
 * @param source - original object with data.
 * @param instructions - how to map the data.
 * @returns new object mapped from the source object.
 * @internal
 */
export const take = (source: any, instructions: SourceMappingInstructions): any => {
  const out = {};
  for (const key in instructions) {
    applyInstruction(out, source, instructions, key);
  }
  return out;
};

/**
 * Private, for codegen use only.
 *
 * @param target - target object.
 * @param filter - uniform filter function to apply to all values
 * @param instructions - map of keys and values/suppliers (will be evaluated)
 *
 * @internal
 */
const mapWithFilter = (
  target: any,
  filter: (value: any) => boolean,
  instructions: Record<string, ValueSupplier | Value | ObjectMappingInstruction>
): typeof target => {
  return map(
    target,
    Object.entries(instructions).reduce(
      (
        _instructions: ObjectMappingInstructions,
        [key, value]: [string, ValueSupplier | Value | ObjectMappingInstruction]
      ) => {
        if (Array.isArray(value)) {
          // is custom instruction and not a value or value supplier
          _instructions[key] = value as ObjectMappingInstruction;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }

        return _instructions;
      },
      {}
    )
  );
};

/**
 * @internal
 *
 * Applies a single instruction at the given key from source to target.
 */
const applyInstruction = (
  target: any,
  source: null | any,
  instructions: ObjectMappingInstructions | Record<string, SourceMappingInstruction>,
  targetKey: string
): void => {
  if (source !== null) {
    let instruction = instructions[targetKey];
    if (typeof instruction === "function") {
      instruction = [, instruction];
    }
    const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
    if ((typeof filter === "function" && filter(source[sourceKey])) || (typeof filter !== "function" && !!filter)) {
      target[targetKey] = valueFn(source[sourceKey]);
    }
    return;
  }

  // eslint-disable-next-line prefer-const
  let [filter, value]: [((_?: any) => boolean) | unknown, any] = instructions[targetKey];

  if (typeof value === "function") {
    let _value: any;
    const defaultFilterPassed = filter === undefined && (_value = value()) != null;
    const customFilterPassed =
      (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);

    if (defaultFilterPassed) {
      target[targetKey] = _value;
    } else if (customFilterPassed) {
      target[targetKey] = value();
    }
  } else {
    const defaultFilterPassed = filter === undefined && value != null;
    const customFilterPassed =
      (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);

    if (defaultFilterPassed || customFilterPassed) {
      target[targetKey] = value;
    }
  }
};

/**
 * internal
 */
const nonNullish = (_: any) => _ != null;

/**
 * internal
 */
const pass = (_: any) => _;
