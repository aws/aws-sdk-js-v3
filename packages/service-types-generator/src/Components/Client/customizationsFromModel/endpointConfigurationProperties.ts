import {IMPORTS} from '../internalImports';
import {
    endpoint,
} from './standardConfigurationProperties';
import {
    ConfigurationPropertyDefinition,
    ConfigurationDefinition,
} from '@aws/build-types';
import {ServiceMetadata} from '@aws/types';

/**
 * @internal
 */
export function endpointConfigurationProperties(
    metadata: ServiceMetadata
): ConfigurationDefinition {
    return {
        endpointProvider: endpointProviderProperty(metadata),
        endpoint,
    };
}

/**
 * @internal
 */
function endpointProviderProperty(
    metadata: ServiceMetadata
): ConfigurationPropertyDefinition {
    return {
        type: 'unified',
        inputType: 'any', // TODO change this
        imports: [IMPORTS.types],
        documentation: 'The endpoint provider to call if no endpoint is provided',
        required: false,
        default: {
            type: 'value',
            expression: `() => { throw new Error('No endpoint provider defined'); }`,
        },
    };
}
