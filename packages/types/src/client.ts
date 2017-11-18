import {MiddlewareStack} from './middleware';

export interface ConfigurationPropertyDefinition<
    InputType,
    ServiceConfiguration extends {[key: string]: any}
> {
    /**
     * Whether this property must be supplied by the user of a client. If value
     * must be resolved but a default is available, this property should be
     * `false`.
     */
    required: boolean;

    /**
     * A static value to use as the default should none be supplied.
     */
    defaultValue?: InputType;

    /**
     * A function that returns a default value for this property. It will be
     * called if no value is supplied.
     */
    defaultProvider?: {
        (config: Partial<ServiceConfiguration>): InputType;
    }

    /**
     * A function that finalizes the value supplied and/or alters the client
     * configuration or middleware stack in reaction to it.
     */
    apply?: {
        (
            value: InputType,
            config: Partial<ServiceConfiguration>,
            clientMiddlewareStack: MiddlewareStack<any>
        ): void;
    }
}

/**
 * A map of configuration property names to configuration property definitions.
 *
 * Order is significant in the definition provided, as the config object passed
 * to any `defaultProvider` and `apply` functions will only include properties
 * that have already been resolved.
 */
export type ConfigurationDefinition<T extends {[key: string]: any}> = {
    readonly [P in keyof T]: ConfigurationPropertyDefinition<T[P], T>;
};
