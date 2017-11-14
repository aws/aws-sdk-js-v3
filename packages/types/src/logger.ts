import {Shape, Member} from './protocol'

export enum LogLevel {
    All = 'log', //alias to Log
    Log = 'log',
    Info = 'info',
    Warn = 'warn',
    Error = 'error'
}

export interface LoggerOption {
    logger?: object;
    logLevel?: LogLevel;
}

export interface Logger {
    log(content: string): void;
    error(content: string): void;
    warn(content: string): void;
    info(content: string): void;
}

export interface paramsOperation {
    (input: any, shape: Member): string
}
