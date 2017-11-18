import {ClassicClient} from './ClassicClient';
import {model} from '../../shapes.fixture';

describe('ClassicClient', () => {
    it('should create a class extending the client', () => {
        const client = new ClassicClient(model, 'universal');

        expect(client.toString()).toMatch(
            'export class FakeService extends FakeServiceClient {'
        );
    });

    it('should create a method for each operation', () => {
        const stringified = (new ClassicClient(model, 'universal')).toString();

        for (const operationName of Object.keys(model.operations)) {
            expect(stringified).toMatch(`public ${
                operationName.substring(0, 1).toLowerCase()
                    + operationName.substring(1)
            }(`);
        }
    });
});
