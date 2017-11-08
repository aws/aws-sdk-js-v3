import {
    endpoint,
    maxRedirects,
    maxRetries,
    region,
    sslEnabled,
} from './standardConfigurationProperties';
import {signatureConfigurationProperties} from './signatureConfigurationProperties';
import {
    ConfigurationGenerationConfiguration,
    CustomizationDefinition,
    TreeModel,
} from '@aws/build-types';

/**
 * Collect the "customizations" that must be applied to a service client based
 * on the platform features used in its model.
 */
export function customizationsFromModel(
    model: TreeModel
): Array<CustomizationDefinition> {
    let configuration: ConfigurationGenerationConfiguration = {
        endpoint,
        maxRedirects,
        maxRetries,
        region,
        sslEnabled,
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
