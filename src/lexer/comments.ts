import { advanceChar, LexerState, scanNewLine, consumeLineFeed } from './common';
import { CharTypes, CharFlags } from './charClassifier';
import { Chars } from '../chars';
import { Context, ParserState } from '../common';
import { report, Errors } from '../errors';
import { CommentType } from '../estree';

// `CommentType` in upstream
export const enum CommentTypeEnum {
  Single,
  Multi,
  HTMLOpen,
  HTMLClose,
  HashBang
}

export const CommentTypes = ['SingleLine', 'MultiLine', 'HTMLOpen', 'HTMLClose', 'HashbangComment'];

/**
 * Skips hasbang (stage 3)
 *
 * @param parser  Parser object
 */
export function skipHashBang(parser: ParserState): void {
  // HashbangComment ::
  //   #!  SingleLineCommentChars_opt
  const { source } = parser;
  if (parser.currentChar === Chars.Hash && source.charCodeAt(parser.index + 1) === Chars.Exclamation) {
    advanceChar(parser);
    advanceChar(parser);
    skipSingleLineComment(
      parser,
      source,
      LexerState.None,
      CommentTypeEnum.HashBang,
      parser.tokenIndex,
      parser.tokenLine,
      parser.tokenColumn
    );
  }
}

export function skipSingleHTMLComment(
  parser: ParserState,
  source: string,
  state: LexerState,
  context: Context,
  type: CommentTypeEnum,
  start: number,
  line: number,
  column: number
): LexerState {
  if (context & Context.Module) report(parser, Errors.Unexpected);
  return skipSingleLineComment(parser, source, state, type, start, line, column);
}

/**
 * Skips single line comment
 *
 * @param parser  Parser object
 * @param state  Lexer state
 */
export function skipSingleLineComment(
  parser: ParserState,
  source: string,
  state: LexerState,
  type: CommentTypeEnum,
  start: number,
  line: number,
  column: number
): LexerState {
  const { index } = parser;
  parser.tokenIndex = parser.index;
  parser.tokenLine = parser.line;
  parser.tokenColumn = parser.column;
  while (parser.index < parser.end) {
    if (CharTypes[parser.currentChar] & CharFlags.LineTerminator) {
      const isCR = parser.currentChar === Chars.CarriageReturn;
      scanNewLine(parser);
      if (isCR && parser.index < parser.end && parser.currentChar === Chars.LineFeed)
        parser.currentChar = source.charCodeAt(++parser.index);
      break;
    } else if ((parser.currentChar ^ Chars.LineSeparator) <= 1) {
      scanNewLine(parser);
      break;
    }
    advanceChar(parser);
    parser.tokenIndex = parser.index;
    parser.tokenLine = parser.line;
    parser.tokenColumn = parser.column;
  }
  const commentVal = source.slice(index, parser.index);
  const commentObj = {
    type: CommentTypes[type & 0xff] as CommentType,
    value: commentVal,
    start: index,
    end: parser.index
  };
  if (parser.comments) parser.comments.push(commentObj);
  if (parser.onComment) {
    const loc = {
      start: {
        line,
        column
      },
      end: {
        line: parser.tokenLine,
        column: parser.tokenColumn
      }
    };
    // For Single, start before "//",
    // For HTMLOpen, start before "<!--",
    // For HTMLClose, start before "\n-->"
    parser.onComment(CommentTypes[type & 0xff], source.slice(index, parser.tokenIndex), start, parser.tokenIndex, loc);
  }
  return state | LexerState.NewLine;
}

/**
 * Skips multiline comment
 *
 * @param parser Parser object
 * @param state Lexer state
 */
export function skipMultiLineComment(parser: ParserState, source: string, state: LexerState): LexerState | void {
  const { index } = parser;
  while (parser.index < parser.end) {
    if (parser.currentChar < 0x2b) {
      let skippedOneAsterisk = false;
      while (parser.currentChar === Chars.Asterisk) {
        if (!skippedOneAsterisk) {
          state &= ~LexerState.LastIsCR;
          skippedOneAsterisk = true;
        }
        if (advanceChar(parser) === Chars.Slash) {
          advanceChar(parser);
          const commentVal = source.slice(index, parser.index - 2);
          const commentObj = {
            type: CommentTypes[CommentTypeEnum.Multi & 0xff] as CommentType,
            value: commentVal,
            start: index,
            end: parser.index
          };
          if (parser.comments) parser.comments.push(commentObj);
          if (parser.onComment) {
            const loc = {
              start: {
                line: parser.tokenLine,
                column: parser.tokenColumn
              },
              end: {
                line: parser.line,
                column: parser.column
              }
            };
            parser.onComment(
              CommentTypes[CommentTypeEnum.Multi & 0xff],
              source.slice(index, parser.index - 2),
              index - 2, // start before '/*'
              parser.index, // end after '*/'
              loc
            );
          }
          parser.tokenIndex = parser.index;
          parser.tokenLine = parser.line;
          parser.tokenColumn = parser.column;
          return state;
        }
      }

      if (skippedOneAsterisk) {
        continue;
      }

      if (CharTypes[parser.currentChar] & CharFlags.LineTerminator) {
        if (parser.currentChar === Chars.CarriageReturn) {
          state |= LexerState.NewLine | LexerState.LastIsCR;
          scanNewLine(parser);
        } else {
          consumeLineFeed(parser, state);
          state = (state & ~LexerState.LastIsCR) | LexerState.NewLine;
        }
      } else {
        advanceChar(parser);
      }
    } else if ((parser.currentChar ^ Chars.LineSeparator) <= 1) {
      state = (state & ~LexerState.LastIsCR) | LexerState.NewLine;
      scanNewLine(parser);
    } else {
      state &= ~LexerState.LastIsCR;
      advanceChar(parser);
    }
  }

  report(parser, Errors.UnterminatedComment);
}
