import { HttpEndpoint, QueryParameterBag, UrlParser } from '@aws-sdk/types';
import { parseUrl as browserUrlParser } from '@aws-sdk/url-parser-browser';
import { parseUrl as nodeUrlParser } from '@aws-sdk/url-parser-node';

declare const URL: any;

export const parseUrl: UrlParser = typeof URL !== 'undefined'
    ? browserUrlParser
    : nodeUrlParser;
