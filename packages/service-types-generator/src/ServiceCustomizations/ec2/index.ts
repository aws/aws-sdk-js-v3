import {
    ServiceCustomizationDefinition,
    TreeModel,
} from '@aws/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';

export function ec2Customizations(model: TreeModel): ServiceCustomizationDefinition {
    return {
        client: [],
        commands: {
            CopySnapshot: [{
                imports: [IMPORTS['middleware-ec2-copysnapshot']],
                type: 'Middleware',
                step: 'initialize',
                priority: 0,
                tags: '{PRESIGNED_URL: true, DESTINATION_REGION: true}',
                expression: `${packageNameToVariable('@aws/middleware-ec2-copysnapshot')}.addPresignedUrl(
        configuration.region,
        configuration.credentials,
        configuration.endpoint,
        configuration.base64Encoder,
        configuration.utf8Decoder,
        configuration.sha256,
    )`,
            }]
        }
    }
}
