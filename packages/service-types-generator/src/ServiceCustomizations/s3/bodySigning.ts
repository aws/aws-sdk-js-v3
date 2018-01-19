import {
    ConfigCustomizationDefinition,
    ConfigurationPropertyDefinition,
    CustomizationProvider,
    MiddlewareCustomizationDefinition,
    ServiceCustomizationDefinition
} from '@aws/build-types';
import {
    packageNameToVariable
} from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';
import {
    base64Encoder,
    md5,
    sha256,
} from '../customizationsFromModel/standardConfigurationProperties';

const md5Checksum: MiddlewareCustomizationDefinition = {
    imports: [
        IMPORTS['apply-body-checksum-middleware'],
    ],
    step: 'build',
    priority: 0,
    type: 'Middleware',
    tags: `{BODY_CHECKSUM: true}`,
    expression:
`${packageNameToVariable('@aws/apply-body-checksum-middleware')}.applyBodyChecksumMiddleware(
    'Content-MD5',
    configuration.md5,
    configuration.base64Encoder,
    configuration.streamCollector
)`,
    configuration: {
        md5,
        base64Encoder,
    }
};

const sha256Checksum: MiddlewareCustomizationDefinition = {
    imports: [
        IMPORTS['apply-body-checksum-middleware'],
    ],
    step: 'build',
    priority: 0,
    type: 'Middleware',
    tags: `{BODY_CHECKSUM: true}`,
    expression:
`${packageNameToVariable('@aws/apply-body-checksum-middleware')}.applyBodyChecksumMiddleware(
    'X-Amz-Content-Sha256',
    configuration.sha256,
    configuration.base64Encoder,
    configuration.streamCollector
)`,
    configuration: {
        sha256,
        base64Encoder,
    }
};

const disableBodySigning: ConfigurationPropertyDefinition = {
    type: 'unified',
    documentation: 'Whether body signing should be disabled. Body signing can only be disabled when using HTTPS',
    inputType: 'boolean',
    required: false,
    default: {
        type: 'provider',
        expression: `(configuration: { sslEnabled: boolean }) => configuration.sslEnabled`
    }
};

const disableBodySigningCustomization: ConfigCustomizationDefinition = {
    type: 'Configuration',
    configuration: {
        disableBodySigning,
    }
};

const unsignedPayload: MiddlewareCustomizationDefinition = {
    imports: [
        IMPORTS['sigv4-unsigned-payload-middleware'],
    ],
    step: 'build',
    priority: sha256Checksum.priority + 100,
    type: 'Middleware',
    tags: `{BODY_CHECKSUM: true, UNSIGNED_PAYLOAD: true}`,
    expression: `${packageNameToVariable('@aws/sigv4-unsigned-payload-middleware')}.sigV4UnsignedPayloadMiddleware`,
    // TODO uncomment once https://github.com/aws/aws-sdk-js-staging/pull/90 lands
    // conditionExpression: `configuration.disableBodySigning`,
    configuration: {
        disableBodySigning
    }
};

export const bodySigningCustomizations: CustomizationProvider = () => {
    return {
        commands: {
            DeleteObjects: [
                md5Checksum,
            ],
            PutBucketCors: [
                md5Checksum,
            ],
            PutBucketLifecycle: [
                md5Checksum,
            ],
            PutBucketLifecycleConfiguration: [
                md5Checksum,
            ],
            PutBucketPolicy: [
                md5Checksum,
            ],
            PutBucketTagging: [
                md5Checksum,
            ],
            PutBucketReplication: [
                md5Checksum,
            ],
            PutObject: [
                unsignedPayload,
                sha256Checksum,
            ],
            UploadPart: [
                unsignedPayload,
                sha256Checksum,
            ],
        },
        client: [
            disableBodySigningCustomization,
        ],
    };
}
