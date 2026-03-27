import type * as ESTree from './estree';
import { type Token } from './token';
type OnInsertedSemicolon = (pos: number) => any;
type SourceType = 'script' | 'module' | 'commonjs';
export type OnToken = (token: string, start: number, end: number, loc: ESTree.SourceLocation) => any;
export type OnComment = (type: ESTree.CommentType, value: string, start: number, end: number, loc: ESTree.SourceLocation) => any;
export interface Options {
    sourceType?: SourceType;
    next?: boolean;
    ranges?: boolean | {
        start?: boolean;
        end?: boolean;
        range?: boolean;
    };
    webcompat?: boolean;
    loc?: boolean;
    raw?: boolean;
    impliedStrict?: boolean;
    preserveParens?: boolean;
    lexical?: boolean;
    source?: string;
    jsx?: boolean;
    onComment?: ESTree.Comment[] | OnComment;
    onInsertedSemicolon?: OnInsertedSemicolon;
    onToken?: Token[] | OnToken;
    validateRegex?: boolean;
    attachComments?: boolean;
    module?: boolean;
    globalReturn?: boolean;
}
export interface NormalizedRanges {
    start: boolean;
    end: boolean;
    range: boolean;
}
export type NormalizedOptions = Omit<Options, 'validateRegex' | 'onComment' | 'onToken' | 'ranges'> & {
    validateRegex: boolean;
    ranges?: NormalizedRanges;
    onComment?: OnComment;
    onToken?: OnToken;
};
export declare function normalizeOptions(rawOptions: Options): NormalizedOptions;
export {};
