import {Structure} from "./SerializationModel";

export interface HttpTrait {
    method: string;
    requestUri: string;
}

export interface OperationModel {
    http: HttpTrait;
    input: Structure;
    output: Structure;
    errors: Array<Structure>;
}
