import {Member} from './protocol'

/**
 * A list of logger's log level. These levels are sorted in
 * order of increasing severity. Each log level includes itself and all
 * the levels behind itself.
 *
 * @example new Logger({logLevel: 'warn'}) will print all the warn and error
 * message.
 */
export type LogLevel = 'all' | 'log' | 'info' | 'warn' | 'error' | 'off'

/**
 * An object consumed by Logger constructor to initiate a logger object.
 */
export interface LoggerOptions {
    logger?: Logger;
    logLevel?: LogLevel;
}

/**
 * Represents a logger object that is available in HandlerExecutionContext
 * throughout the middleware stack.
 */
export interface Logger {
    log(content: string): void;
    info(content: string): void;
    warn(content: string): void;
    error(content: string): void;
}

/**
 * A function that removes the sensitive information from input parameters
 * and output objects during logging.
 */
export interface SensitiveDataScrubber {
    (input: any, shape: Member): string
}
