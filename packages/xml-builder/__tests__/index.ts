import * as pkg from '../';

describe('package index', () => {
    it('should define XmlNode', () => {
        expect(pkg.XmlNode).toBeDefined();
    });

    it('should define XmlText', () => {
        expect(pkg.XmlText).toBeDefined();
    });
});