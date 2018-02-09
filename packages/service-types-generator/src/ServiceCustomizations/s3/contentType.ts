import { 
    TreeModel,
    ServiceCustomizationDefinition,
} from '@aws/build-types';
import { IMPORTS } from '../../internalImports';
import { packageNameToVariable } from '../../packageNameToVariable';

export const contentTypeCustomization: ServiceCustomizationDefinition = {
    commands: {},
    client: [{
        type: 'Middleware',
        step: 'build',
        priority: -50,
        tags: '{\'Content-Type\': true}',
        imports: [IMPORTS['middleware-s3-add-content-type']],
        expression: `${
            packageNameToVariable('@aws/middleware-s3-add-content-type')
        }.addContentType`,
    }],
}
