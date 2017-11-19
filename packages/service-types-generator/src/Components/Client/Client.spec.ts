import {Client} from './Client';
import {model} from '../../shapes.fixture';

describe('Client', () => {
    it('should include a configuration interface', () => {
        const sender = new Client(model, 'node');

        expect(sender.toString())
            .toMatch('export interface FakeServiceConfiguration {');
    });

    it('should include a resolved configuration interface', () => {
        const sender = new Client(model, 'node');

        expect(sender.toString()).toMatch(
            'export interface FakeServiceResolvedConfiguration extends FakeServiceConfiguration {'
        );
    });

    it('should include a module-scoped configuration resolver config object', () => {
        const sender = new Client(model, 'node');

        expect(sender.toString()).toMatch(
`const configurationProperties: __aws_types.ConfigurationDefinition<
    FakeServiceResolvableConfiguration,
    FakeServiceResolvedConfiguration
> = {`
        );
    });

    it('should include a client class', () => {
        const sender = new Client(model, 'node');

        expect(sender.toString()).toMatch(
            'export class FakeServiceClient {'
        );
    });
});
