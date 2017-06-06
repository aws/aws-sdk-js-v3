import {Exception} from "../../../lib/Components/Type/Exception";
import {IndentedSection} from "../../../lib/Components/IndentedSection";
import {
    getOutputMetadataPropertyDefinition,
    METADATA_PROPERTY_IMPORT
} from "../../../lib/Components/Type/getOutputMetadataPropertyDefinition";

describe('Exception', () => {
    it('should include standard exception members if not defined', () => {

        const exception = new Exception({
            type: 'structure',
            required: [],
            members: {},
            name: 'MyException',
            documentation: '<p>An exceptional state</p>',
        });

        expect(exception.toString()).toEqual(
`${METADATA_PROPERTY_IMPORT.toString()}

/**
 * <p>An exceptional state</p>
 */
export interface MyException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;
    
    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;
    
    /**
     * <p>Human-readable description of the error.</p>
     */
    message?: string;
    
${new IndentedSection(getOutputMetadataPropertyDefinition())}
}`
        );
    });

    it('should not override message if separately defined', () => {
        const exception = new Exception({
            type: 'structure',
            required: [],
            members: {
                message: {
                    shape: {
                        type: 'string',
                        name: 'name',
                        documentation: 'message property doc',
                    },
                }
            },
            name: 'MyException',
            documentation: '<p>An exceptional state</p>',
        });

        expect(exception.toString()).toEqual(
`${METADATA_PROPERTY_IMPORT.toString()}

/**
 * <p>An exceptional state</p>
 */
export interface MyException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;
    
    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;
    
    /**
     * message property doc
     */
    message?: string;
    
${new IndentedSection(getOutputMetadataPropertyDefinition())}
}`
        );
    });

    it('should not override name if separately defined', () => {
        const exception = new Exception({
            type: 'structure',
            required: [],
            members: {
                name: {
                    shape: {
                        type: 'string',
                        name: 'name',
                        documentation: 'name property doc',
                    },
                }
            },
            name: 'MyException',
            documentation: '<p>An exceptional state</p>',
        });

        expect(exception.toString()).toEqual(
`${METADATA_PROPERTY_IMPORT.toString()}

/**
 * <p>An exceptional state</p>
 */
export interface MyException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;
    
    /**
     * <p>Human-readable description of the error.</p>
     */
    message?: string;
    
    /**
     * name property doc
     */
    name?: string;
    
${new IndentedSection(getOutputMetadataPropertyDefinition())}
}`
        );
    });

    it('should not override stack if separately defined', () => {
        const exception = new Exception({
            type: 'structure',
            required: [],
            members: {
                stack: {
                    shape: {
                        type: 'string',
                        name: 'stack',
                        documentation: 'stack property doc',
                    },
                }
            },
            name: 'MyException',
            documentation: '<p>An exceptional state</p>',
        });

        expect(exception.toString()).toEqual(
`${METADATA_PROPERTY_IMPORT.toString()}

/**
 * <p>An exceptional state</p>
 */
export interface MyException {
    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;
    
    /**
     * <p>Human-readable description of the error.</p>
     */
    message?: string;
    
    /**
     * stack property doc
     */
    stack?: string;
    
${new IndentedSection(getOutputMetadataPropertyDefinition())}
}`
        );
    });
});
