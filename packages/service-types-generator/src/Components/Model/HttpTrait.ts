import { HttpTrait as HttpTraitDefinition } from "@aws-sdk/types";

export class HttpTrait {
  constructor(private readonly httpTrait: HttpTraitDefinition) {}

  toString(): string {
    return `
{
  method: '${this.httpTrait.method}',
  requestUri: '${this.httpTrait.requestUri}',
}
        `.trim();
  }
}
