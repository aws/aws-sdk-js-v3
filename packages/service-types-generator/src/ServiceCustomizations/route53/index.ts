import {
    CustomizationDefinition,
    MiddlewareCustomizationDefinition,
    ServiceCustomizationDefinition,
    TreeModel,
} from '@aws/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';

const idNormalizerMiddleware: MiddlewareCustomizationDefinition = {
    type: 'Middleware',
    step: 'initialize',
    priority: 0,
    imports: [
        IMPORTS['route53-id-normalizer-middleware']
    ],
    expression: `${packageNameToVariable('@aws/route53-id-normalizer-middleware')}.idNormalizerMiddleware`,
    tags: `{NORMALIZE_ROUTE53_IDS: true}`,
};

const changeBatchNormalizerMiddleware: MiddlewareCustomizationDefinition = {
    type: 'Middleware',
    step: 'initialize',
    priority: 0,
    imports: [
        IMPORTS['route53-id-normalizer-middleware']
    ],
    expression: `${packageNameToVariable('@aws/route53-id-normalizer-middleware')}.changeBatchAliasTargetIdNormalizerMiddleware`,
    tags: `{NORMALIZE_ROUTE53_IDS: true}`,
};

const idParams = ['DelegationSetId', 'HostedZoneId', 'Id'];

export function route53Customizations(
    model: TreeModel
): ServiceCustomizationDefinition {
    return {
        client: [],
        commands: Object.keys(model.operations).reduce(
            (operationMap, operationName) => {
                const customizations = new Set<CustomizationDefinition>();
                const { input, name } = model.operations[operationName];
                const inputKeys = Object.keys(input.shape.members);
                for (const idParam of idParams) {
                    if (inputKeys.indexOf(idParam) > -1) {
                        customizations.add(idNormalizerMiddleware);
                    }
                }

                if (name === 'ChangeResourceRecordSets') {
                    customizations.add(changeBatchNormalizerMiddleware);
                }

                if (customizations.size > 0) {
                    operationMap[operationName] = [...customizations];
                }

                return operationMap;
            },
            {} as {[operationName: string]: Array<CustomizationDefinition>}
        ),
    };
}
