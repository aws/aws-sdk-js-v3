import {Shape} from './protocol'

export enum LogLevel {
    All = 'log', //alias to Log
    Log = 'log',
    Info = 'info',
    Warn = 'warn',
    Error = 'error'
}

export interface LoggerOption {
    logger?: object;
    pattern?: string;
    logLevel?: LogLevel;
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
