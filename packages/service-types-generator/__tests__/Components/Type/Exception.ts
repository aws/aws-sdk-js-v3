import {Exception} from "../../../lib/Components/Type/Exception";
import {minimalShapeMap} from "../../../__fixtures__/index";

describe('Exception', () => {
    it('should include standard exception members if not defined', () => {

        const exception = new Exception(
            'Exception',
            {
                Exception: {
                    type: 'structure',
                    members: {},
                    documentation: '<p>An exceptional state</p>',
                }
            }
        );

        expect(exception.toString()).toEqual(
`/**
 * <p>An exceptional state</p>
 */
export interface Exception {
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
}`
        );
    });

    it('should not override message if separately defined', () => {
        const exception = new Exception(
            'Exception',
            {
                ...minimalShapeMap,
                Exception: {
                    type: 'structure',
                    members: {
                        message: {shape: 'string'}
                    },
                    documentation: '<p>An exceptional state</p>',
                }
            }
        );

        expect(exception.toString()).toEqual(
            `/**
 * <p>An exceptional state</p>
 */
export interface Exception {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;
    
    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;
    
    /**
     * string
     */
    message?: string;
}`
        );
    });

    it('should not override name if separately defined', () => {
        const exception = new Exception(
            'Exception',
            {
                ...minimalShapeMap,
                Exception: {
                    type: 'structure',
                    members: {
                        name: {shape: 'string'}
                    },
                    documentation: '<p>An exceptional state</p>',
                }
            }
        );

        expect(exception.toString()).toEqual(
            `/**
 * <p>An exceptional state</p>
 */
export interface Exception {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;
    
    /**
     * <p>Human-readable description of the error.</p>
     */
    message?: string;
    
    /**
     * string
     */
    name?: string;
}`
        );
    });

    it('should not override stack if separately defined', () => {
        const exception = new Exception(
            'Exception',
            {
                ...minimalShapeMap,
                Exception: {
                    type: 'structure',
                    members: {
                        stack: {shape: 'string'}
                    },
                    documentation: '<p>An exceptional state</p>',
                }
            }
        );

        expect(exception.toString()).toEqual(
            `/**
 * <p>An exceptional state</p>
 */
export interface Exception {
    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;
    
    /**
     * <p>Human-readable description of the error.</p>
     */
    message?: string;
    
    /**
     * string
     */
    stack?: string;
}`
        );
    });
});