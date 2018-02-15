import {
    CustomizationDefinition,
    CustomizationProvider,
    ConfigurationPropertyDefinition,
    MiddlewareCustomizationDefinition,
    ServiceCustomizationDefinition,
    SyntheticParameterCustomizationDefinition,
    TreeModel,
} from '@aws/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';

const accelerateDocumentation = 'Whether to use the S3 Transfer Acceleration endpoint by default';
const dualStackDocumentation = 'Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.';
const forcePathStyleDocumentation = 'Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>';

const bucketEndpoint: ConfigurationPropertyDefinition = {
    type: 'unified',
    documentation: 'Whether the provided endpoint addresses an individual bucket.',
    inputType: 'boolean',
    required: false,
    default: {
        type: 'value',
        expression: 'false',
    },
};

const bucketEndpointProperty: SyntheticParameterCustomizationDefinition = {
    type: 'SyntheticParameter',
    name: '$bucketEndpoint',
    location: 'input',
    typeExpression: 'string',
    documentation:
`Whether to use the bucket name as the endpoint for this request. The bucket
name must be a domain name with a CNAME record alias to an appropriate virtual
hosted-style S3 hostname, e.g. a bucket of \`images.johnsmith.net\` and a DNS
record of:

\`\`\`
images.johnsmith.net CNAME 			images.johnsmith.net.s3.amazonaws.com.
\`\`\`

@see https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs`
};

const forcePathStyle: ConfigurationPropertyDefinition = {
    type: 'unified',
    documentation: forcePathStyleDocumentation,
    inputType: 'boolean',
    required: false,
    default: {
        type: 'value',
        expression: 'false',
    },
};

const forcePathStyleProperty: SyntheticParameterCustomizationDefinition = {
    type: 'SyntheticParameter',
    name: '$forcePathStyle',
    location: 'input',
    typeExpression: 'boolean',
    documentation: forcePathStyleDocumentation,
};

const useAccelerateEndpoint: ConfigurationPropertyDefinition = {
    type: 'unified',
    documentation: accelerateDocumentation,
    inputType: 'boolean',
    required: false,
    default: {
        type: 'value',
        expression: 'false',
    },
};

const useAccelerateEndpointProperty: SyntheticParameterCustomizationDefinition = {
    type: 'SyntheticParameter',
    name: '$useAccelerateEndpoint',
    location: 'input',
    typeExpression: 'boolean',
    documentation: accelerateDocumentation,
};

const useDualstackEndpoint: ConfigurationPropertyDefinition = {
    type: 'unified',
    documentation: dualStackDocumentation,
    inputType: 'boolean',
    required: false,
    default: {
        type: 'value',
        expression: 'false',
    },
};

const useDualStackEndpointProperty: SyntheticParameterCustomizationDefinition = {
    type: 'SyntheticParameter',
    name: '$useDualstackEndpoint',
    location: 'input',
    typeExpression: 'boolean',
    documentation: dualStackDocumentation,
};

const bucketEndpointMiddleware: MiddlewareCustomizationDefinition = {
    type: 'Middleware',
    step: 'build',
    priority: 0,
    imports: [
        IMPORTS['bucket-endpoint-middleware']
    ],
    expression: `${
        packageNameToVariable('@aws/bucket-endpoint-middleware')
    }.bucketEndpointMiddleware({
        forcePathStyle: configuration.forcePathStyle,
        preformedBucketEndpoint: configuration.bucketEndpoint,
        useAccelerateEndpoint: configuration.useAccelerateEndpoint,
        useDualstackEndpoint: configuration.useDualstackEndpoint
    })`
};

const bucketEndpointCommandCustomizations: Array<CustomizationDefinition> = [
    bucketEndpointMiddleware,
    bucketEndpointProperty,
    forcePathStyleProperty,
    useAccelerateEndpointProperty,
    useDualStackEndpointProperty,
];

// Bucket endpoint customizations apply to all S3 operations except these
const uncustomizedCommands = [
    'CreateBucket',
    'DeleteBucket',
    'ListBuckets',
];

export const bucketEndpointCustomizations: CustomizationProvider = (
    model: TreeModel
) => {
    return {
        client: [
            {
                type: 'Configuration',
                configuration: {
                    bucketEndpoint,
                    forcePathStyle,
                    useAccelerateEndpoint,
                    useDualstackEndpoint,
                },
            },
        ],
        commands: Object.keys(model.operations).reduce(
            (operationMap, operationName) => {
                if (uncustomizedCommands.indexOf(operationName) === -1) {
                    operationMap[operationName] = [
                        ...bucketEndpointCommandCustomizations
                    ];
                }

                return operationMap;
            },
            {} as {[operationName: string]: Array<CustomizationDefinition>}
        ),
    };
}
