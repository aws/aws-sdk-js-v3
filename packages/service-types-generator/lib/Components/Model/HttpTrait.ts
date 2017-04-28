import {HttpTraitDefinition} from "@aws/service-model";

export class HttpTrait {
    constructor(private readonly httpTrait: HttpTraitDefinition) {}

    toString(): string {
        return `
{
    method: '${this.httpTrait.method}',
    requestUri: '${this.httpTrait.requestUri}',
}`.trim();
    }
}
