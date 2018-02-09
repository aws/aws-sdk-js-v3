import {
    endpointConfigurationProperties
} from './endpointConfigurationProperties';
import { httpConfigurationProperties } from './httpConfigurationProperties';
import { setContentLengthConfiguration } from './setContentLengthMiddleware';
import {
    serializerConfigurationProperties
} from './serializerConfigurationProperties';
import {
    signatureConfigurationProperties
} from './signatureConfigurationProperties';
import {
    maxRedirects,
    maxRetries,
    profile,
    region,
    sslEnabled,
    logger,
    logLevel
} from './standardConfigurationProperties';
import { streamType } from '../../streamType';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    RuntimeTarget,
    TreeModel,
} from '@aws/build-types';
import { retryMiddleware } from './retryMiddleware';

/**
 * Collect the "customizations" that must be applied to a service client based
 * on the platform features used in its model.
 */
export function customizationsFromModel(
    model: TreeModel,
    target: RuntimeTarget
): Array<CustomizationDefinition> {
    const streamTypeParam = streamType(target);
    let configuration: ConfigurationDefinition = {
        profile,
        maxRedirects,
        maxRetries,
        region,
        sslEnabled,
        logLevel,
        logger,
        ...endpointConfigurationProperties(model.metadata),
        ...serializerConfigurationProperties(model.metadata, streamTypeParam),
        ...httpConfigurationProperties('any', 'any', streamTypeParam)

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
        },
        setContentLengthConfiguration,
        retryMiddleware,
    ];
}
