import {packageNameToVariable} from '../../packageNameToVariable';

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
    staticEvaluationExpression: string,
    optional: boolean = true
): string {
    return `
(
    ${key}: ${staticOrProvider(staticType)}${optional ? '|undefined' : ''},
    configuration: {${key}${optional ? '?' : ''}: ${staticOrProvider(staticType)}}
) => {
    if (${staticEvaluationExpression}) {
        const promisified = Promise.resolve(${key});
        configuration.${key} = () => promisified;
    }
}
            `.trim();
}
