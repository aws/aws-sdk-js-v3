import {Exception} from "./Exception";
import {IndentedSection} from "../IndentedSection";
import {
    METADATA_PROPERTY_IMPORT,
    OUTPUT_METADATA_PROPERTY,
} from "./constants";

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
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
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
                    name: 'message'
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
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
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
                    name: 'name'
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
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
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
                    name: 'stack'
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
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
}`
        );
    });
});
