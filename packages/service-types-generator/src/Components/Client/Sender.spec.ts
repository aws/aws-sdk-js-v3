import {Sender} from './Sender';
import {model} from '../../shapes.fixture';

describe('Sender', () => {
    it('should include a configuration interface', () => {
        const sender = new Sender(model, 'node');

        expect(sender.toString())
            .toMatch('export interface FakeConfiguration {');
    });

    it('should include a resolved configuration interface', () => {
        const sender = new Sender(model, 'node');

        expect(sender.toString()).toMatch(
            'export interface FakeResolvedConfiguration extends FakeConfiguration {'
        );
    });

    it('should include a module-scoped configuration resolver config object', () => {
        const sender = new Sender(model, 'node');

        expect(sender.toString()).toMatch(
            'const configurationProperties: __aws_types.ConfigurationDefinition<FakeConfiguration> = {'
        );
    });

    it('should include a sender class', () => {
        const sender = new Sender(model, 'node');

        expect(sender.toString()).toMatch(
            'export class FakeSender {'
        );
    });
});
