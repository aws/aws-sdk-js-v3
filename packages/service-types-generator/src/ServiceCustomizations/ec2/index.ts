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
                expression: `${packageNameToVariable('@aws/middleware-ec2-copysnapshot')}.addPresignedUrl({
        region: configuration.region,
        credentials: configuration.credentials,
        endpoint: configuration.endpoint,
        base64Encoder: configuration.base64Encoder,
        utf8Decoder: configuration.utf8Decoder,
        sha256: configuration.sha256,
    })`,
            }]
        }
    }
}
