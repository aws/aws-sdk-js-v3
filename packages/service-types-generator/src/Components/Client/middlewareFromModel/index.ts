import {
    CustomizationDefinition,
    TreeModel
} from '@aws/build-types';
import {setContentLengthConfiguration} from './setContentLength';

export function middlewareFromModel(
    model: TreeModel
): Array<CustomizationDefinition> {
    return [
        setContentLengthConfiguration
    ]
}