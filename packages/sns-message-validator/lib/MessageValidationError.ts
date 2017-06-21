import {Message} from "./Message";

export class MessageValidationError extends Error {
    constructor(
        public readonly invalidParameters: Partial<Message>,
        errorMessage?: string
    ) {
        super(errorMessage);
    }
}
