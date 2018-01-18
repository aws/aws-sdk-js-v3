import {Client} from './Client';
import {model} from '../../shapes.fixture';
import {
    MiddlewareCustomizationDefinition
} from '@aws/build-types';

describe('Client', () => {
    it('should include a client class', () => {
        const sender = new Client(model, 'node');

        expect(sender.toString()).toMatch(
            'export class FakeServiceClient {'
        );
    });

    describe('middleware resolution', () => {
        const mockFooMiddlewareDefinition: MiddlewareCustomizationDefinition = {
            imports: [
                {
                    package: '@aws/foo',
                    version: '^1.0.0'
                }
            ],
            step: 'build',
            type: 'Middleware',
            priority: 10,
            expression: '__aws_foo.fooMiddleware'
        };
        const mockBarMiddlewareDefinition: MiddlewareCustomizationDefinition = {
            imports: [
                {
                    package: '@aws/bar',
                    version: '^1.0.0'
                },
                {
                    package: '@aws/bar-middleware',
                    version: '^1.0.0'
                }
            ],
            step: 'finalize',
            type: 'Middleware',
            priority: 20,
            expression: '__aws_bar.barMiddleware'
        };

        it('should include defined middleware', () => {
            const sender = new Client(model, 'node', [mockFooMiddlewareDefinition]);
            const clientCode = sender.toString();
            expect(clientCode).toMatch(`import * as __aws_foo from '@aws/foo';`);
            [
                'this.middlewareStack.add(',
                `${mockFooMiddlewareDefinition.expression}`,
                `step: '${mockFooMiddlewareDefinition.step}`,
                `priority: ${mockFooMiddlewareDefinition.priority}`
            ].forEach(line => {
                expect(clientCode).toMatch(line);
            });
        });

        it('should include tags', () => {
            const sender = new Client(model, 'node', [{...mockFooMiddlewareDefinition, tags: '{FOO: true}'}]);
            const clientCode = sender.toString();
            expect(clientCode).toMatch(`import * as __aws_foo from '@aws/foo';`);
            [
                'this.middlewareStack.add(',
                `${mockFooMiddlewareDefinition.expression}`,
                `step: '${mockFooMiddlewareDefinition.step}`,
                `priority: ${mockFooMiddlewareDefinition.priority}`,
                'tags: {FOO: true}'
            ].forEach(line => {
                expect(clientCode).toMatch(line);
            });
        });

        it('should handle multiple middleware', () => {
            const sender = new Client(model, 'node', [
                mockFooMiddlewareDefinition,
                mockBarMiddlewareDefinition
            ]);
            const clientCode = sender.toString();
            expect(clientCode).toMatch(`import * as __aws_foo from '@aws/foo';`);
            expect(clientCode).toMatch(`import * as __aws_bar from '@aws/bar';`);
            expect(clientCode).toMatch(`import * as __aws_bar_middleware from '@aws/bar-middleware';`);
            [
                'this.middlewareStack.add(',
                `${mockFooMiddlewareDefinition.expression}`,
                `step: '${mockFooMiddlewareDefinition.step}`,
                `priority: ${mockFooMiddlewareDefinition.priority}`,
                `${mockBarMiddlewareDefinition.expression}`,
                `step: '${mockBarMiddlewareDefinition.step}`,
                `priority: ${mockBarMiddlewareDefinition.priority}`
            ].forEach(line => {
                expect(clientCode).toMatch(line);
            });
        });
    });
});
