import { Context } from '../common';
import { type Parser } from '../parser/parser';
import { Token } from '../token';
import { LexerState } from './common';
export declare function nextToken(parser: Parser, context: Context): void;
export declare function scanSingleToken(parser: Parser, context: Context, state: LexerState): Token;
