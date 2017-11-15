import {
    httpHandler,
    _own_http_handler,
    maxRedirects,
    maxRetries,
    region,
    sslEnabled,
} from './standardConfigurationProperties';
import {endpointConfigurationProperties} from './endpointConfigurationProperties';
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
        maxRedirects,
        maxRetries,
        region,
        sslEnabled,
        _own_http_handler,
        httpHandler,
        ...endpointConfigurationProperties(model.metadata),
        ...serializerConfigurationProperties(model.metadata, streamType),
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
