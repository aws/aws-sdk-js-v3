import { ServiceCustomizationDefinition } from '@aws/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';
import {
    urlParser,
} from '../customizationsFromModel/standardConfigurationProperties';

const customizations: ServiceCustomizationDefinition = {
    commands: {
        Predict: [
            {
                imports: [IMPORTS['modeled-endpoint-middleware']],
                step: 'build',
                priority: 50,
                type: 'Middleware',
                tags: `{APPLY_PREDICT_ENDPOINT: true}`,
                expression:
    `${packageNameToVariable('@aws/modeled-endpoint-middleware')}.modeledEndpointMiddleware<PredictInput>(
        configuration.urlParser,
        'PredictEndpoint'
    )`,
                configuration: {
                    urlParser,
                }
            }
        ]
    },
    client: []
};

export function machineLearningCustomizations() {
    return customizations;
}
