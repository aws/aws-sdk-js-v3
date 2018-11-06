import {Command} from './command';
import {model} from '../../shapes.fixture';
import {
    MiddlewareCustomizationDefinition
} from '@aws-sdk/build-types';
import {Client} from "../Client/Client";

describe('Command', () => {
    const operation = model.operations['GetResource'];

    it('should include a command class', () => {
        const sender = new Command(operation, 'node');

        expect(sender.toString()).toMatch(
            'export class GetResourceCommand implements __aws_sdk_types.Command<'
        );
    });

    describe('middleware resolution', () => {
        const mockFooMiddlewareDefinition: MiddlewareCustomizationDefinition = {
            imports: [
                {
                    package: '@aws-sdk/foo',
                    version: '^1.0.0'
                }
            ],
            step: 'build',
            type: 'Middleware',
            priority: 10,
            expression: '__aws_sdk_foo.fooMiddleware'
        };
        const mockBarMiddlewareDefinition: MiddlewareCustomizationDefinition = {
            imports: [
                {
                    package: '@aws-sdk/bar',
                    version: '^1.0.0'
                },
                {
                    package: '@aws-sdk/bar-middleware',
                    version: '^1.0.0'
                }
            ],
            step: 'finalize',
            type: 'Middleware',
            priority: 20,
            expression: '__aws_sdk_bar.barMiddleware'
        };

        it('should include defined middleware', () => {
            const sender = new Command(operation, 'node', [mockFooMiddlewareDefinition]);
            const commandCode = sender.toString();
            expect(commandCode).toMatch(`import * as __aws_sdk_foo from '@aws-sdk/foo';`);
            [
                'stack.add(',
                `${mockFooMiddlewareDefinition.expression}`,
                `step: '${mockFooMiddlewareDefinition.step}`,
                `priority: ${mockFooMiddlewareDefinition.priority}`
            ].forEach(line => {
                expect(commandCode).toMatch(line);
            });
        });

        it('should include tags', () => {
            const sender = new Command(operation, 'node', [{...mockFooMiddlewareDefinition, tags: '{FOO: true}'}]);
            const commandCode = sender.toString();
            expect(commandCode).toMatch(`import * as __aws_sdk_foo from '@aws-sdk/foo';`);
            [
                'stack.add(',
                `${mockFooMiddlewareDefinition.expression}`,
                `step: '${mockFooMiddlewareDefinition.step}`,
                `priority: ${mockFooMiddlewareDefinition.priority}`,
                'tags: {FOO: true}'
            ].forEach(line => {
                expect(commandCode).toMatch(line);
            });
        });

        it('should handle multiple middleware', () => {
            const sender = new Command(operation, 'node', [
                mockFooMiddlewareDefinition,
                mockBarMiddlewareDefinition
            ]);
            const commandCode = sender.toString();
            expect(commandCode).toMatch(`import * as __aws_sdk_foo from '@aws-sdk/foo';`);
            expect(commandCode).toMatch(`import * as __aws_sdk_bar from '@aws-sdk/bar';`);
            expect(commandCode).toMatch(`import * as __aws_sdk_bar_middleware from '@aws-sdk/bar-middleware';`);
            [
                'stack.add(',
                `${mockFooMiddlewareDefinition.expression}`,
                `step: '${mockFooMiddlewareDefinition.step}`,
                `priority: ${mockFooMiddlewareDefinition.priority}`,
                `${mockBarMiddlewareDefinition.expression}`,
                `step: '${mockBarMiddlewareDefinition.step}`,
                `priority: ${mockBarMiddlewareDefinition.priority}`
            ].forEach(line => {
                expect(commandCode).toMatch(line);
            });
        });
    });
});