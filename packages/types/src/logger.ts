import {Shape} from './protocol'

export type LogLevel = 'info' | 'log' | 'warn' | 'error';

export namespace Logging {
    export const allLogLevels: [LogLevel] = ['info', 'log', 'warn', 'error']
}

export interface LoggerOption {
    logger?: object;
    pattern?: string;
    logLevel?: [LogLevel] | LogLevel
}

export interface WritableLogger {
    pattern?: string;
    log(content: string): void;
    error(content: string): void;
    warn(content: string): void;
    info(content: string): void;
}
