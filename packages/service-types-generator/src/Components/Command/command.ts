import {
    Operation,
    TreeModel
} from '@aws/build-types';

import {
    ServiceMetadata
} from '@aws/types';

export interface ICommand {
    
}

export class Command {
    constructor(
        private readonly metadata: ServiceMetadata,
        private readonly operation: Operation
    ) {}

    toString(): string {

    }
}