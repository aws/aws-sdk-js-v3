import {Client} from './Client';
import {model} from '../../shapes.fixture';

describe('Client', () => {
    it('should include a client class', () => {
        const sender = new Client(model, 'node');

        expect(sender.toString()).toMatch(
            'export class FakeServiceClient {'
        );
    });
});
