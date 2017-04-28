import {XmlNamespace} from "../../../lib/Components/Model/XmlNamespace";

describe('XmlNamespace', () => {
    it('should create an object with prefix and uri set', () => {
        expect(new XmlNamespace({prefix: 'foo', uri: 'bar'}).toString())
            .toBe(`{prefix: 'foo', uri: 'bar'}`);
    });

    it('should create an object with just prefix when uri missing', () => {
        expect(new XmlNamespace({prefix: 'foo'}).toString())
            .toBe(`{prefix: 'foo'}`);
    });

    it('should create an object with just prefix when uri missing', () => {
        expect(new XmlNamespace({prefix: 'foo', uri: 'bar'}).toString())
            .toBe(`{prefix: 'foo', uri: 'bar'}`);
    });
});
