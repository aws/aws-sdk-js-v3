import {MiddlewareStack} from './middleware';

export interface ConfigurationPropertyDefinition<
    InputType,
    ResolvedType extends InputType,
    ServiceConfiguration extends {[key: string]: any},
    ResolvedConfiguration extends ServiceConfiguration
> {
    /**
     * Whether this property must be supplied by the user of a client. If value
     * must be resolved but a default is available, this property should be
     * `false` or undefined.
     */
    required?: boolean;

    /**
     * A static value to use as the default should none be supplied.
     */
    defaultValue?: ResolvedType;

    /**
     * A function that returns a default value for this property. It will be
     * called if no value is supplied.
     */
    defaultProvider?: {
        (config: ResolvedConfiguration): ResolvedType;
    }

    /**
     * A function that normalizes input to the subtype expected by the SDK.
     */
    normalize?: {
        (value: InputType, config: Partial<ResolvedConfiguration>): ResolvedType;
    }
    
    /**
     * A function that finalizes the value supplied and/or alters the client
     * configuration or middleware stack in reaction to it.
     */
    apply?: ConfigApplicator<ResolvedConfiguration>;
}

export interface ConfigApplicator<FullConfiguration> {
    (config: FullConfiguration, clientMiddlewareStack: MiddlewareStack<any, any, any>): void;
}

/**
 * A map of configuration property names to configuration property definitions.
 *
 * Order is significant in the definition provided, as the config object passed
 * to any `defaultProvider` and `apply` functions will only include properties
 * that have already been resolved.
 */
export type ConfigurationDefinition<
    Configuration extends {[key: string]: any},
    ResolvedConfiguration extends Configuration
> = {
    readonly [P in keyof Configuration]: ConfigurationPropertyDefinition<
        Configuration[P],
        ResolvedConfiguration[P],
        Configuration,
        ResolvedConfiguration
    >;
};
