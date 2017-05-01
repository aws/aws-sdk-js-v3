import {HttpTraitDefinition} from "@aws/service-model/lib/Operation";
import {HttpTrait} from "../../../lib/Components/Model";

describe('HttpTrait', () => {
    it('should return a string representing the HttpTrait object passed in', () => {
        const trait: HttpTraitDefinition = {
            method: 'HEAD',
            requestUri: '/',
        };

        expect((new HttpTrait(trait)).toString().replace(/\s/g, ''))
            .toEqual(`{method:'${trait.method}',requestUri:'${trait.requestUri}',}`);
    });
});
