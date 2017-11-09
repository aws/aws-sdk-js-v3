import {MiddlewareStack, Step} from './middleware';

export type ConfigurationPropertyType = 'transient'|'persistent';

export interface ConfigurationPropertyDefinition<
    InputType,
    ServiceConfiguration extends {[key: string]: any}
> {
    /**
     * The type of configuration property represented by this key.
     *
     * Transient properties are used during client construction, typically as
     * inputs to other configuration properties.
     *
     * Persistent properties will be stored on the `config` property of a
     * constructed client and will be used while executing methods.
     */
    type: ConfigurationPropertyType;

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
        (config: ServiceConfiguration): InputType;
    }

    /**
     * A function that finalizes the value supplied and/or alters the client
     * configuration or middleware stack in reaction to it.
     */
    apply?: {
        (
            value: InputType,
            config: ServiceConfiguration,
            clientMiddlewareStack: MiddlewareStack<any>
        ): void;
    }
}

/**
 * A map of configuration property names to configuration property definitions.
 */
export type ConfigurationDefinition<T extends {[key: string]: any}> = {
    readonly [P in keyof T]: ConfigurationPropertyDefinition<P, T>;
};
