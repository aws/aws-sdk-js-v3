import {packageNameToVariable} from '../packageNameToVariable';

/**
 * @internal
 */
export function staticOrProvider(staticType: string) {
    return `${staticType}|${packageNameToVariable('@aws/types')}.Provider<${staticType}>`;
}

/**
 * @internal
 */
export function applyStaticOrProvider(
    key: string,
    staticType: string,
    staticEvaluationExpression: string
): string {
    return `
(
    ${key}: ${staticOrProvider(staticType)},
    configuration: {${key}: ${staticOrProvider(staticType)}}
) => {
    if (${staticEvaluationExpression}) {
        const promisified = Promise.resolve(${key});
        configuration.${key} = () => promisified;
    }
}
            `.trim();
}
