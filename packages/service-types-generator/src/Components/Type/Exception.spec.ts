import {Exception} from "./Exception";
import {IndentedSection} from "../IndentedSection";
import {
    METADATA_PROPERTY_IMPORT,
    OUTPUT_METADATA_PROPERTY,
    SERVICEEXCEPTION_METADATA_IMPORT
} from "./constants";

describe('Exception', () => {
    it('should include standard exception members if not defined', () => {
        const exception = new Exception({
            type: 'structure',
            required: [],
            name: 'MyException',
            documentation: '<p>A structure exception</p>',
            members: {
                Type: {
                    shape: {
                        type: 'string',
                        name: 'type',
                        documentation: 'type property doc',
                    }
                },
                Message: {
                    shape: {
                        type: 'string',
                        name: 'message',
                        documentation: 'message property doc',
                    }
                }
            }
        });

        expect(exception.toString()).toEqual(
`${SERVICEEXCEPTION_METADATA_IMPORT.toString()}

/**
 * <p>A structure exception</p>
 */
export interface MyException extends __ServiceException__<_MyExceptionDetails> {
    name: 'MyException';
}

export interface _MyExceptionDetails {
    /**
     * type property doc
     */
    Type?: string;

    /**
     * message property doc
     */
    Message?: string;
}`
        );
    });
});
