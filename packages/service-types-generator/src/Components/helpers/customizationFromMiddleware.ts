import {MiddlewareCustomizationDefinition} from '@aws/build-types';
import {IndentedSection} from '../IndentedSection';

function generateMiddlewareOptions(definition: MiddlewareCustomizationDefinition): string {
    const options: string[] = [
        `step: '${definition.step}'`
    ];

    if (typeof definition.priority === 'number') {
        options.push(`priority: ${definition.priority}`);
    }
    if (typeof definition.tags === 'string') {
        options.push(`tags: ${definition.tags}`);
    }

    return `{
${new IndentedSection(options.join(',\n'))}
}`;
}

export function customizationFromMiddleware(
    definition: MiddlewareCustomizationDefinition,
    stackName: string = 'this.middlewareStack'
): string {

    return `
${stackName}.add(
    ${definition.expression},
${new IndentedSection(generateMiddlewareOptions(definition))}
);`.trim();
}