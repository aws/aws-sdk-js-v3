import {ServiceCustomizationDefinition} from '@aws/build-types';
import {packageNameToVariable} from '../../Components/Client/packageNameToVariable';
import {IMPORTS} from '../../Components/Client/internalImports';

export const customizations: ServiceCustomizationDefinition = {
    middleware: {
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
        configuration.signingName
    )`,
            }]
        }
    }
}
