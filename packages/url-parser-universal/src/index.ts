import { HttpEndpoint, QueryParameterBag, UrlParser } from '@aws/types';
import { parseUrl as browserUrlParser } from '@aws/url-parser-browser';
import { parseUrl as nodeUrlParser } from '@aws/url-parser-node';

declare const URL: any;

export const parseUrl: UrlParser = typeof URL !== 'undefined'
    ? browserUrlParser
    : nodeUrlParser;
