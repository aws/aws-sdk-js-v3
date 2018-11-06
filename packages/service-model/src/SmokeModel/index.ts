import {
    SmokeTestCase,
    SmokeTestModel
} from '@aws-sdk/build-types';

/**
 * @internal
 */
export function isSmokeTestModel(model: any): model is SmokeTestModel {
    return typeof model === 'object'
        && model !== null
        && typeof model.version === 'number'
        && typeof model.defaultRegion === 'string'
        && Array.isArray(model.testCases)
        && model.testCases.length >= 1
        && model.testCases.every(isTestCase);
}

/**
 * @internal
 */
function isTestCase(model: any): model is SmokeTestCase {
    return typeof model === 'object'
        && model !== null
        && typeof model.operationName === 'string'
        && typeof model.input === 'object'
        && model.input !== null
        && typeof model.errorExpectedFromService === 'boolean'
}

/**
 * Converts a JSON string into a SmokeTestModel structure.
 * 
 * @throws Error if the provided JSON is not a smoke test model.
 */
export function fromSmokeTestModelJson(modelJson: string): SmokeTestModel {
    const parsed: any = JSON.parse(modelJson);
    if (isSmokeTestModel(parsed)) {
        return parsed;
    }

    throw new Error('Invalid smoke test model');
}