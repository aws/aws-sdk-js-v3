import {
    maxRedirects,
    maxRetries,
    profile,
    region,
    sslEnabled,
} from './standardConfigurationProperties';
import {endpointConfigurationProperties} from './endpointConfigurationProperties';
import {httpConfigurationProperties} from './httpConfigurationProperties';
import {serializerConfigurationProperties} from './serializerConfigurationProperties';
import {signatureConfigurationProperties} from './signatureConfigurationProperties';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    TreeModel,
} from '@aws/build-types';

/**
 * Collect the "customizations" that must be applied to a service client based
 * on the platform features used in its model.
 */
export function customizationsFromModel(
    model: TreeModel,
    streamType: string
): Array<CustomizationDefinition> {
    let configuration: ConfigurationDefinition = {
        profile,
        maxRedirects,
        maxRetries,
        region,
        sslEnabled,
        ...endpointConfigurationProperties(model.metadata),
        ...serializerConfigurationProperties(model.metadata, streamType),
        ...httpConfigurationProperties('any', 'any', streamType)

    };

    if (model.metadata.signatureVersion !== 'none') {
        configuration = {
            ...configuration,
            ...signatureConfigurationProperties(model.metadata)
        };
    }

    return [
        {
            type: 'Configuration',
            configuration,
        }
    ];
}
