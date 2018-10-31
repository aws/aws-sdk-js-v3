import {
    endpointConfigurationProperties
} from './endpointConfigurationProperties';
import { httpConfigurationProperties } from './httpConfigurationProperties';
import {
    mergeCustomizationDefinitions,
} from '../mergeCustomizationDefinitions';
import { setContentLengthConfiguration } from './setContentLengthMiddleware';
import {
    serializerConfigurationProperties,
    serializerMiddleware
} from './serializerConfigurationProperties';
import { 
    signatureCustomizations,
} from './signatureCustomizations';
import {
    maxRedirects,
    maxRetries,
    profile,
    region,
    sslEnabled,
} from './standardConfigurationProperties';
import { streamType } from '../../streamType';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    RuntimeTarget,
    ServiceCustomizationDefinition,
    TreeModel,
} from '@aws-sdk/build-types';
import { retryMiddleware } from './retryMiddleware';

/**
 * Collect the "customizations" that must be applied to a service client based
 * on the platform features used in its model.
 */
export function customizationsFromModel(
    model: TreeModel,
    target: RuntimeTarget
): ServiceCustomizationDefinition {
    const streamTypeParam = streamType(target);
    let configuration: ConfigurationDefinition = {
        profile,
        maxRedirects,
        maxRetries,
        region,
        sslEnabled,
        ...endpointConfigurationProperties(model.metadata),
        ...serializerConfigurationProperties(model.metadata, streamTypeParam),
        ...httpConfigurationProperties('any', 'any', streamTypeParam)
    };

    return mergeCustomizationDefinitions(
        {
            client: [
                {
                    type: 'Configuration',
                    configuration,
                },
                serializerMiddleware(model.metadata, streamTypeParam),
                setContentLengthConfiguration,
                retryMiddleware,
            ],
            commands: {},
        },
        signatureCustomizations(model, target)
    );
}
