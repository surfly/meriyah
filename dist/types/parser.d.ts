import { Context } from './common.ts';
import type * as ESTree from './estree.ts';
import { type Options } from './options.ts';
export declare function parseSource(source: string, rawOptions?: Options, context?: Context): ESTree.Program;
