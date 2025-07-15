import { Context, type Location } from '../common';
import { type Parser } from '../parser/parser';
import { LexerState } from './common';
export declare const enum CommentTypeEnum {
    Single = 0,
    Multi = 1,
    HTMLOpen = 2,
    HTMLClose = 3,
    HashBang = 4
}
export declare function skipHashBang(parser: Parser): void;
export declare function skipSingleHTMLComment(parser: Parser, source: string, state: LexerState, context: Context, type: CommentTypeEnum, start: Location): LexerState;
export declare function skipSingleLineComment(parser: Parser, source: string, state: LexerState, type: CommentTypeEnum, start: Location): LexerState;
export declare function skipMultiLineComment(parser: Parser, source: string, state: LexerState): LexerState | void;
