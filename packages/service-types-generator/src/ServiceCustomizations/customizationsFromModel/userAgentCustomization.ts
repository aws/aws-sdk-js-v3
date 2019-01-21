import { RuntimeTarget, ServiceCustomizationDefinition } from '@aws-sdk/build-types';
import { IMPORTS } from '../../internalImports';
import { packageNameToVariable } from '../../packageNameToVariable';

export function userAgentCustomization(
    runtime: RuntimeTarget
): ServiceCustomizationDefinition {
    const imports = [
        IMPORTS['middleware-header-default']
    ];
    if (runtime === 'node') {
        imports.push(IMPORTS['util-user-agent-node']);
    } else {
        imports.push(IMPORTS['util-user-agent-browser']);
    }
    const defaultValuePackageName = runtime === 'node' ? '@aws-sdk/util-user-agent-node' : '@aws-sdk/util-user-agent-browser';
    return {
        client: [{
            type: 'Middleware',
            step: 'build',
            priority: 0,
            imports,
            expression: `${packageNameToVariable('@aws-sdk/middleware-header-default')}.headerDefault({'${runtime === 'node' ? 'User-Agent' : 'X-Amz-User-Agent'}': ${packageNameToVariable(defaultValuePackageName)}.defaultUserAgent(ServiceMetadata.serviceId || ServiceMetadata.endpointPrefix, clientVersion)})`,
            tags: '{SET_USER_AGENT: true}',
        }],
        commands: {}
    }
}
