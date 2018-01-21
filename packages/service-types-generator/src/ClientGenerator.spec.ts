import { ClientGenerator } from './ClientGenerator';
import { serviceIdFromMetadata } from './serviceIdFromMetadata';
import { model } from './shapes.fixture';

const serviceId = serviceIdFromMetadata(model.metadata);
const classicClientIdentifier = serviceId.replace(/\s/g, '');
const clientIdentifier = `${classicClientIdentifier}Client`;

describe('ClientGenerator', () => {
    it('should yield a client', () => {
        const generator = new ClientGenerator(model, 'browser');
        let found = false;

        for (const [identifier, content] of generator) {
            if (identifier === clientIdentifier) {
                found = true;
                expect(content).toMatch(`export class ${clientIdentifier} {`);
            }
        }

        expect(found).toBe(true);
    });

    it('should yield a classic client', () => {
        const generator = new ClientGenerator(model, 'browser');
        let found = false;

        for (const [identifier, content] of generator) {
            if (identifier === classicClientIdentifier) {
                found = true;
                expect(content).toMatch(
                    `export class ${classicClientIdentifier} extends ${clientIdentifier} {`
                );
            }
        }

        expect(found).toBe(true);
    });
});
