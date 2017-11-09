import {Shape} from './protocol'

export type LogLevel = 'info' | 'log' | 'warn' | 'error';

export namespace Logging {
    export const allLogLevels: [LogLevel] = ['info', 'log', 'warn', 'error']
}

export interface LoggerOption {
    logger?: object;
    pattern?: string;
    logLevels?: [LogLevel] | LogLevel
}

export interface WritableLogger {
    formatter?: LogFormatter;
    log(content: string): void;
    error(content: string): void;
    warn(content: string): void;
    info(content: string): void;
}

export interface LogFormatter {
    format(stats: {[key: string]: string|undefined}): string;
}
