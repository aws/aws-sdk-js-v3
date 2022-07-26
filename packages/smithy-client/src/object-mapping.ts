/**
 * A set of instructions for multiple keys.
 * The aim is to provide a concise yet readable way to map and filter values
 * onto a target object.
 *
 * @example
 * ```javascript
 * const example: ObjectMappingInstructions = {
 *   lazyValue1: [, , () => 1],
 *   lazyValue2: ["lazyValue2AltKey", , () => 2],
 *   lazyValue3: [, , () => 3],
 *   lazyConditionalValue1: [, () => true, () => 4],
 *   lazyConditionalValue2: ["lazyConditionalValue2AltKey", () => true, () => 5],
 *   lazyConditionalValue3: [, true, () => 6],
 *   lazyConditionalValue4: [, false, () => 44],
 *   lazyConditionalValue5: ["lazyConditionalValue5AltKey", () => false, () => 55],
 *   lazyConditionalValue6: [, "", () => 66],
 *   simpleValue1: [, , 7],
 *   simpleValue2: ["simpleValueAltKey", , 8],
 *   simpleValue3: [, , 9],
 *   conditionalValue1: [, () => true, 10],
 *   conditionalValue2: ["conditionalValue2AltKey", () => true, 11],
 *   conditionalValue3: [, {}, 12],
 *   conditionalValue4: [, false, 110],
 *   conditionalValue5: ["conditionalValue5AltKey", () => false, 121],
 *   conditionalValue6: [, "", 132],
 * };
 *
 * const exampleResult: Record<string, any> = {
 *   lazyValue1: 1,
 *   lazyValue2AltKey: 2,
 *   lazyValue3: 3,
 *   lazyConditionalValue1: 4,
 *   lazyConditionalValue2AltKey: 5,
 *   lazyConditionalValue3: 6,
 *   simpleValue1: 7,
 *   simpleValueAltKey: 8,
 *   simpleValue3: 9,
 *   conditionalValue1: 10,
 *   conditionalValue2AltKey: 11,
 *   conditionalValue3: 12,
 * };
 * ```
 */
export type ObjectMappingInstructions = Record<string, ObjectMappingInstruction>;

/**
 * An instruction set for assigning a value to a target object.
 */
export type ObjectMappingInstruction =
  | LazyValueInstruction
  | ConditionalLazyValueInstruction
  | SimpleValueInstruction
  | ConditionalValueInstruction;

/**
 * [Key map or use same key, filter evaluation, value provider]
 */
export type LazyValueInstruction = [string | void, FilterEvaluation, () => any];

/**
 * [Key map or use same key, filter function, value provider]
 */
export type ConditionalLazyValueInstruction = [string | void, () => boolean, () => any];

/**
 * [Key map or use same key, filter evaluation, value]
 */
export type SimpleValueInstruction = [string | void, FilterEvaluation, any];

/**
 * [Key map or use same key, filter function on the value, value]
 */
export type ConditionalValueInstruction = [string | void, (value?: any) => boolean, any];

/**
 * Filter is considered passed if
 * 1. It is a boolean true.
 * 2. It is not undefined and is itself truthy.
 * 3. It is undefined and the corresponding _value_ is neither null nor undefined.
 */
export type FilterEvaluation = boolean | unknown | void;

/**
 * Transfer a set of keys from [source] to [target].
 * The check [sourceTransferCondition] is applied to values from the source,
 * and values are transferred only upon passing the check.
 */
export const map = (target: any, instructions: Record<string, ObjectMappingInstruction>): typeof target => {
  for (const key of Object.keys(instructions)) {
    // eslint-disable-next-line prefer-const
    let [targetKey, filter, value]: [void | string, ((_?: any) => boolean) | unknown, any] = instructions[key];

    if (targetKey === undefined) {
      targetKey = key;
    }

    if (typeof value === "function") {
      let _value: any;
      const defaultFilterPassed = filter === undefined && (_value = value()) != null;
      const customFilterPassed =
        (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);

      if (defaultFilterPassed) {
        target[targetKey as string] = _value;
      } else if (customFilterPassed) {
        target[targetKey as string] = value();
      }
    } else {
      const defaultFilterPassed = filter === undefined && value != null;
      const customFilterPassed =
        (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);

      if (defaultFilterPassed || customFilterPassed) {
        target[targetKey as string] = value;
      }
    }
  }
  return target;
};
