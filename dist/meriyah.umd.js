(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.meriyah = {}));
})(this, (function (exports) { 'use strict';

  const errorMessages = {
      [0]: 'Unexpected token',
      [30]: "Unexpected token: '%0'",
      [1]: 'Octal escape sequences are not allowed in strict mode',
      [2]: 'Octal escape sequences are not allowed in template strings',
      [3]: '\\8 and \\9 are not allowed in template strings',
      [4]: 'Private identifier #%0 is not defined',
      [5]: 'Illegal Unicode escape sequence',
      [6]: 'Invalid code point %0',
      [7]: 'Invalid hexadecimal escape sequence',
      [9]: 'Octal literals are not allowed in strict mode',
      [8]: 'Decimal integer literals with a leading zero are forbidden in strict mode',
      [10]: 'Expected number in radix %0',
      [151]: 'Invalid left-hand side assignment to a destructible right-hand side',
      [11]: 'Non-number found after exponent indicator',
      [12]: 'Invalid BigIntLiteral',
      [13]: 'No identifiers allowed directly after numeric literal',
      [14]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
      [15]: 'Escapes \\8 or \\9 are not allowed in strict mode',
      [16]: 'Unterminated string literal',
      [17]: 'Unterminated template literal',
      [18]: 'Multiline comment was not closed properly',
      [19]: 'The identifier contained dynamic unicode escape that was not closed',
      [20]: "Illegal character '%0'",
      [21]: 'Missing hexadecimal digits',
      [22]: 'Invalid implicit octal',
      [23]: 'Invalid line break in string literal',
      [24]: 'Only unicode escapes are legal in identifier names',
      [25]: "Expected '%0'",
      [26]: 'Invalid left-hand side in assignment',
      [27]: 'Invalid left-hand side in async arrow',
      [28]: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
      [29]: 'Member access on super must be in a method',
      [31]: 'Await expression not allowed in formal parameter',
      [32]: 'Yield expression not allowed in formal parameter',
      [95]: "Unexpected token: 'escaped keyword'",
      [33]: 'Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses',
      [123]: 'Async functions can only be declared at the top level or inside a block',
      [34]: 'Unterminated regular expression',
      [35]: 'Unexpected regular expression flag',
      [36]: "Duplicate regular expression flag '%0'",
      [37]: '%0 functions must have exactly %1 argument%2',
      [38]: 'Setter function argument must not be a rest parameter',
      [39]: '%0 declaration must have a name in this context',
      [40]: 'Function name may not contain any reserved words or be eval or arguments in strict mode',
      [41]: 'The rest operator is missing an argument',
      [42]: 'A getter cannot be a generator',
      [43]: 'A setter cannot be a generator',
      [44]: 'A computed property name must be followed by a colon or paren',
      [134]: 'Object literal keys that are strings or numbers must be a method or have a colon',
      [46]: 'Found `* async x(){}` but this should be `async * x(){}`',
      [45]: 'Getters and setters can not be generators',
      [47]: "'%0' can not be generator method",
      [48]: "No line break is allowed after '=>'",
      [49]: 'The left-hand side of the arrow can only be destructed through assignment',
      [50]: 'The binding declaration is not destructible',
      [51]: 'Async arrow can not be followed by new expression',
      [52]: "Classes may not have a static property named 'prototype'",
      [53]: 'Class constructor may not be a %0',
      [54]: 'Duplicate constructor method in class',
      [55]: 'Invalid increment/decrement operand',
      [56]: 'Invalid use of `new` keyword on an increment/decrement expression',
      [57]: '`=>` is an invalid assignment target',
      [58]: 'Rest element may not have a trailing comma',
      [59]: 'Missing initializer in %0 declaration',
      [60]: "'for-%0' loop head declarations can not have an initializer",
      [61]: 'Invalid left-hand side in for-%0 loop: Must have a single binding',
      [62]: 'Invalid shorthand property initializer',
      [63]: 'Property name __proto__ appears more than once in object literal',
      [64]: 'Let is disallowed as a lexically bound name',
      [65]: "Invalid use of '%0' inside new expression",
      [66]: "Illegal 'use strict' directive in function with non-simple parameter list",
      [67]: 'Identifier "let" disallowed as left-hand side expression in strict mode',
      [68]: 'Illegal continue statement',
      [69]: 'Illegal break statement',
      [70]: 'Cannot have `let[...]` as a var name in strict mode',
      [71]: 'Invalid destructuring assignment target',
      [72]: 'Rest parameter may not have a default initializer',
      [73]: 'The rest argument must the be last parameter',
      [74]: 'Invalid rest argument',
      [76]: 'In strict mode code, functions can only be declared at top level or inside a block',
      [77]: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
      [78]: 'Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
      [79]: "Class declaration can't appear in single-statement context",
      [80]: 'Invalid left-hand side in for-%0',
      [81]: 'Invalid assignment in for-%0',
      [82]: 'for await (... of ...) is only valid in async functions and async generators',
      [83]: 'The first token after the template expression should be a continuation of the template',
      [85]: '`let` declaration not allowed here and `let` cannot be a regular var name in strict mode',
      [84]: '`let \n [` is a restricted production at the start of a statement',
      [86]: 'Catch clause requires exactly one parameter, not more (and no trailing comma)',
      [87]: 'Catch clause parameter does not support default values',
      [88]: 'Missing catch or finally after try',
      [89]: 'More than one default clause in switch statement',
      [90]: 'Illegal newline after throw',
      [91]: 'Strict mode code may not include a with statement',
      [92]: 'Illegal return statement',
      [93]: 'The left hand side of the for-header binding declaration is not destructible',
      [94]: 'new.target only allowed within functions or static blocks',
      [96]: "'#' not followed by identifier",
      [102]: 'Invalid keyword',
      [101]: "Can not use 'let' as a class name",
      [100]: "'A lexical declaration can't define a 'let' binding",
      [99]: 'Can not use `let` as variable name in strict mode',
      [97]: "'%0' may not be used as an identifier in this context",
      [98]: 'Await is only valid in async functions',
      [103]: 'The %0 keyword can only be used with the module goal',
      [104]: 'Unicode codepoint must not be greater than 0x10FFFF',
      [105]: '%0 source must be string',
      [106]: 'Only a identifier or string can be used to indicate alias',
      [107]: "Only '*' or '{...}' can be imported after default",
      [108]: 'Trailing decorator may be followed by method',
      [109]: "Decorators can't be used with a constructor",
      [110]: 'Can not use `await` as identifier in module or async func',
      [111]: 'Can not use `await` as identifier in module',
      [112]: 'HTML comments are only allowed with web compatibility (Annex B)',
      [113]: "The identifier 'let' must not be in expression position in strict mode",
      [114]: 'Cannot assign to `eval` and `arguments` in strict mode',
      [115]: "The left-hand side of a for-of loop may not start with 'let'",
      [116]: 'Block body arrows can not be immediately invoked without a group',
      [117]: 'Block body arrows can not be immediately accessed without a group',
      [118]: 'Unexpected strict mode reserved word',
      [119]: 'Unexpected eval or arguments in strict mode',
      [120]: 'Decorators must not be followed by a semicolon',
      [121]: 'Calling delete on expression not allowed in strict mode',
      [122]: 'Pattern can not have a tail',
      [124]: 'Can not have a `yield` expression on the left side of a ternary',
      [125]: 'An arrow function can not have a postfix update operator',
      [126]: 'Invalid object literal key character after generator star',
      [127]: 'Private fields can not be deleted',
      [129]: 'Classes may not have a field called constructor',
      [128]: 'Classes may not have a private element named constructor',
      [130]: 'A class field initializer or static block may not contain arguments',
      [131]: 'Generators can only be declared at the top level or inside a block',
      [132]: 'Async methods are a restricted production and cannot have a newline following it',
      [133]: 'Unexpected character after object literal property name',
      [135]: 'Invalid key token',
      [136]: "Label '%0' has already been declared",
      [137]: 'continue statement must be nested within an iteration statement',
      [138]: "Undefined label '%0'",
      [139]: 'Trailing comma is disallowed inside import(...) arguments',
      [140]: 'Invalid binding in JSON import',
      [141]: 'import() requires exactly one argument',
      [142]: 'Cannot use new with import(...)',
      [143]: '... is not allowed in import()',
      [144]: "Expected '=>'",
      [145]: "Duplicate binding '%0'",
      [146]: 'Duplicate private identifier #%0',
      [147]: "Cannot export a duplicate name '%0'",
      [150]: 'Duplicate %0 for-binding',
      [148]: "Exported binding '%0' needs to refer to a top-level declared variable",
      [149]: 'Unexpected private field',
      [153]: 'Numeric separators are not allowed at the end of numeric literals',
      [152]: 'Only one underscore is allowed as numeric separator',
      [154]: 'JSX value should be either an expression or a quoted JSX text',
      [155]: 'Expected corresponding JSX closing tag for %0',
      [156]: 'Adjacent JSX elements must be wrapped in an enclosing tag',
      [157]: "JSX attributes must only be assigned a non-empty 'expression'",
      [158]: "'%0' has already been declared",
      [159]: "'%0' shadowed a catch clause binding",
      [160]: 'Dot property must be an identifier',
      [161]: 'Encountered invalid input after spread/rest argument',
      [162]: 'Catch without try',
      [163]: 'Finally without try',
      [164]: 'Expected corresponding closing tag for JSX fragment',
      [165]: 'Coalescing and logical operators used together in the same expression must be disambiguated with parentheses',
      [166]: 'Invalid tagged template on optional chain',
      [167]: 'Invalid optional chain from super property',
      [168]: 'Invalid optional chain from new expression',
      [169]: 'Cannot use "import.meta" outside a module',
      [170]: 'Leading decorators must be attached to a class declaration',
      [171]: 'An export name cannot include a lone surrogate, found %0',
      [172]: 'A string literal cannot be used as an exported binding without `from`',
      [173]: "Private fields can't be accessed on super",
      [174]: "The only valid meta property for import is 'import.meta'",
      [175]: "'import.meta' must not contain escaped characters",
      [176]: 'cannot use "await" as identifier inside an async function',
      [177]: 'cannot use "await" in static blocks'
  };
  class ParseError extends SyntaxError {
      constructor(start, startLine, startColumn, end, endLine, endColumn, type, ...params) {
          const message = '[' +
              startLine +
              ':' +
              startColumn +
              '-' +
              endLine +
              ':' +
              endColumn +
              ']: ' +
              errorMessages[type].replace(/%(\d+)/g, (_, i) => params[i]);
          super(`${message}`);
          this.start = start;
          this.end = end;
          this.range = [start, end];
          this.loc = {
              start: { line: startLine, column: startColumn },
              end: { line: endLine, column: endColumn }
          };
          this.description = message;
      }
  }
  function report(parser, type, ...params) {
      throw new ParseError(parser.tokenIndex, parser.tokenLine, parser.tokenColumn, parser.index, parser.line, parser.column, type, ...params);
  }
  function reportScopeError(scope) {
      throw new ParseError(scope.tokenIndex, scope.tokenLine, scope.tokenColumn, scope.index, scope.line, scope.column, scope.type, ...scope.params);
  }
  function reportMessageAt(tokenIndex, tokenLine, tokenColumn, index, line, column, type, ...params) {
      throw new ParseError(tokenIndex, tokenLine, tokenColumn, index, line, column, type, ...params);
  }
  function reportScannerError(tokenIndex, tokenLine, tokenColumn, index, line, column, type) {
      throw new ParseError(tokenIndex, tokenLine, tokenColumn, index, line, column, type);
  }

  function isIDContinue(code) {
      return (unicodeLookup[(code >>> 5) + 0] >>> code & 31 & 1) !== 0;
  }
  function isIDStart(code) {
      return (unicodeLookup[(code >>> 5) + 34816] >>> code & 31 & 1) !== 0;
  }
  const unicodeLookup = ((compressed, lookup) => {
      const result = new Uint32Array(104448);
      let index = 0;
      let subIndex = 0;
      while (index < 3822) {
          const inst = compressed[index++];
          if (inst < 0) {
              subIndex -= inst;
          }
          else {
              let code = compressed[index++];
              if (inst & 2)
                  code = lookup[code];
              if (inst & 1) {
                  result.fill(code, subIndex, subIndex += compressed[index++]);
              }
              else {
                  result[subIndex++] = code;
              }
          }
      }
      return result;
  })([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 65, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 66, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 18, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 60, 2, 7, 2, 6, 0, 4286611199, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 2, 203, 2, 3, 0, 4093640191, 0, 660618719, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1616920031, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 71, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 72, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 10, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2151677951, 2, 29, 2, 9, 0, 909311, 3, 0, 2, 0, 814743551, 2, 49, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 110, 2, 51, 2, 0, 2, 81, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 17, -1, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 9, 2, 0, 2, 54, 0, 4294960127, 2, 10, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, 2, 210, 2, 55, 0, 1048577, 2, 86, 2, 14, -1, 2, 14, 0, 131042, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 90, 2, 2, 0, -16, 2, 91, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 2, 133, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 2, 0, 0, 4351, 2, 0, 2, 9, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 9, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, 2, 25, 0, 1638399, 2, 183, 2, 109, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 2, 163, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 67, 2, 6, 2, 12, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 23, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 48, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 57, 2, 167, 2, 20, 2, 43, 2, 36, 2, 18, 2, 37, 2, 18, 2, 126, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 144, 2, 0, 2, 58, 2, 56, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 61, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 134, 0, 4190109695, 2, 52, -2, 2, 135, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 68, 2, 18, 2, 0, 2, 42, -6, 2, 0, 2, 45, 2, 59, 2, 44, 2, 45, 2, 46, 2, 47, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 48, 2, 138, 0, 33259519, 2, 49, -9, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 2, 205, -4, 2, 57, -13, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 92, 2, 0, 0, 2105343, 0, 4160749584, 2, 177, -34, 2, 8, 2, 154, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 60, 2, 100, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 18, 2, 17, 2, 0, 2, 32, -14, 2, 18, 2, 32, -6, 2, 18, 2, 12, -15, 2, 155, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 61, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -22250, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 63, 2, 64, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 65, 2, 0, 2, 34, -1, 2, 18, 2, 66, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 67, 3, 0, 2, 0, 131135, 2, 98, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 32511, 2, 0, 2, 49, -1, 2, 99, 2, 68, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 70, 2, 69, 0, 33554435, 2, 131, 2, 70, 2, 164, 0, 131075, 0, 3594373096, 0, 67094296, 2, 69, -1, 0, 4294828000, 0, 603979263, 0, 654311424, 0, 3, 0, 4294828001, 0, 602930687, 2, 171, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 71, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 72, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 73, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 74, 2, 0, 2, 75, 2, 76, 2, 77, 2, 0, 2, 78, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 79, 2, 5, 3, 0, 2, 2, 80, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 9, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 18, 2, 51, 2, 0, 2, 81, 2, 49, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 9, 0, 8160, -1, 2, 127, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 2, 184, 2, 10, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 82, 2, 10, 2, 0, 2, 83, 2, 84, 2, 85, -3, 2, 86, 2, 14, -3, 2, 87, 2, 88, 2, 89, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 90, 2, -17, 2, 91, 0, 524157950, 2, 4, 2, 0, 2, 92, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 17, 2, 0, -1, 2, 18, -16, 3, 0, 206, -2, 3, 0, 692, 2, 73, -1, 2, 18, 2, 10, 3, 0, 8, 2, 93, 0, 3072, 2, 0, 0, 2147516415, 2, 10, 3, 0, 2, 2, 25, 2, 94, 2, 95, 3, 0, 2, 2, 96, 2, 0, 2, 97, 2, 46, 0, 4294965179, 0, 7, 2, 0, 2, 9, 2, 95, 2, 9, -1, 0, 1761345536, 2, 98, 0, 4294901823, 2, 38, 2, 20, 2, 99, 2, 35, 2, 100, 0, 2080440287, 2, 0, 2, 34, 2, 153, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 101, 2, 102, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 103, 2, 104, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 105, 2, 106, 3, 0, 2, 2, 19, 2, 107, 3, 0, 10, 2, 10, 2, 18, 2, 0, 2, 47, 2, 0, 2, 31, 2, 108, -3, 2, 109, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 110, 2, 0, 2, 8, 2, 111, -1, 2, 112, 2, 113, 2, 114, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 67, 2, 6, 2, 30, 2, 10, 2, 0, 2, 115, -1, 3, 0, 4, 2, 10, 2, 18, 2, 116, 2, 7, 2, 0, 2, 117, 2, 0, 2, 118, 2, 119, 2, 120, 2, 0, 2, 9, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 121, 2, 122, -2, 2, 123, 2, 124, 2, 30, 2, 21, 2, 8, -2, 2, 125, 2, 30, 2, 32, -2, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 126, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 98, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 57, -1, 2, 20, 2, 43, 2, 37, 2, 18, 0, 3, 2, 18, 2, 126, 2, 21, 2, 127, 2, 54, -1, 0, 2490368, 2, 127, 2, 25, 2, 18, 2, 34, 2, 127, 2, 38, 0, 4294901904, 0, 4718591, 2, 127, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 70, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 17, 2, 192, -1, 2, 0, 2, 25, 2, 209, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 133, -3, 3, 0, 2, 2, 55, 2, 134, 0, 2147549183, 0, 2, -2, 2, 135, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 18, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 59, 2, 17, 0, 1, 2, 46, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, -10, 2, 35, 0, 4294836212, 2, 9, -3, 2, 69, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 17, 3, 0, 6, 2, 50, -81, 2, 18, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 10, -55, 3, 0, 17, 2, 42, 2, 8, 2, 18, 2, 0, 2, 8, 2, 18, 2, 60, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 73, -6, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 107, -2, 0, 11, 3, 0, 191, 2, 54, 3, 0, 38, 2, 30, 2, 55, 2, 34, -278, 2, 140, 3, 0, 9, 2, 141, 2, 142, 2, 56, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 143, 2, 144, -187, 3, 0, 2, 2, 58, 2, 0, 2, 145, 2, 146, 2, 62, 2, 0, 2, 147, 2, 148, 2, 149, 3, 0, 10, 2, 150, 2, 151, 2, 22, 3, 58, 2, 3, 152, 2, 3, 59, 2, 2, 153, -57, 2, 8, 2, 154, -7, 2, 18, 2, 0, 2, 60, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 18, 2, 60, 2, 0, 2, 133, -14, 2, 18, 2, 133, -6, 2, 18, 0, 81919, -15, 2, 155, 3, 0, 6, 2, 126, -1, 3, 0, 2, 0, 2063, -37, 2, 62, 2, 156, 2, 157, 2, 158, 2, 159, 2, 160, -138, 3, 0, 1335, -1, 3, 0, 129, 2, 32, 3, 0, 6, 2, 10, 3, 0, 180, 2, 161, 3, 0, 233, 2, 162, 3, 0, 18, 2, 10, -77, 3, 0, 16, 2, 10, -47, 3, 0, 154, 2, 6, 3, 0, 130, 2, 25, -28386, 2, 0, 0, 1, -1, 2, 55, 2, 0, 0, 8193, -21, 2, 201, 0, 10255, 0, 4, -11, 2, 69, 2, 182, -1, 0, 71680, -1, 2, 174, 0, 4292900864, 0, 268435519, -5, 2, 163, -1, 2, 173, -1, 0, 6144, -2, 2, 46, -1, 2, 168, -1, 0, 2147532800, 2, 164, 2, 170, 0, 8355840, -2, 0, 4, -4, 2, 198, 0, 205128192, 0, 1333757536, 0, 2147483696, 0, 423953, 0, 747766272, 0, 2717763192, 0, 4286578751, 0, 278545, 2, 165, 0, 4294886464, 0, 33292336, 0, 417809, 2, 165, 0, 1327482464, 0, 4278190128, 0, 700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 166, 0, 201327104, 0, 3634348576, 0, 8323120, 2, 166, 0, 202375680, 0, 2678047264, 0, 4293984304, 2, 166, -1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0, 10517376, 0, 4293066815, 0, 1, 2, 213, 2, 167, 2, 0, 0, 2089, 0, 3221225552, 0, 201359520, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2, 163, 0, 4160757760, 2, 0, -6, 2, 179, -11, 0, 3263218176, -1, 0, 49664, 0, 2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 168, 2, 186, 2, 187, -2, 2, 175, -20, 0, 3758096385, -2, 2, 169, 2, 195, 2, 94, 2, 180, 0, 4294057984, -2, 2, 176, 2, 172, 0, 4227874816, -2, 2, 169, -1, 2, 170, -1, 2, 181, 2, 55, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 178, 0, 939588608, -1, 0, 805306368, -1, 2, 55, 2, 171, 2, 172, 2, 173, 2, 211, 2, 0, -2, 0, 8192, -4, 0, 267386880, -1, 0, 117440512, 0, 7168, -1, 2, 170, 2, 168, 2, 174, 2, 188, -16, 2, 175, -1, 0, 1426112704, 2, 176, -1, 2, 196, 0, 271581216, 0, 2149777408, 2, 25, 2, 174, 2, 55, 0, 851967, 2, 189, -1, 2, 177, 2, 190, -4, 2, 178, -20, 2, 98, 2, 208, -56, 0, 3145728, 2, 191, -10, 0, 32505856, -1, 2, 179, -1, 0, 2147385088, 2, 94, 1, 2155905152, 2, -3, 2, 176, 2, 0, 0, 67108864, -2, 2, 180, -6, 2, 181, 2, 25, 0, 1, -1, 0, 1, -1, 2, 182, -3, 2, 126, 2, 69, -2, 2, 100, -2, 0, 32704, 2, 55, -915, 2, 183, -1, 2, 207, -10, 2, 194, -5, 2, 185, -6, 0, 3759456256, 2, 19, -1, 2, 184, -1, 2, 185, -2, 0, 4227874752, -3, 0, 2146435072, 2, 186, -2, 0, 1006649344, 2, 55, -1, 2, 94, 0, 201375744, -3, 0, 134217720, 2, 94, 0, 4286677377, 0, 32896, -1, 2, 178, -3, 0, 4227907584, -349, 0, 65520, 0, 1920, 2, 167, 3, 0, 264, -11, 2, 173, -2, 2, 187, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524280, -13, 2, 193, -1, 0, 4294934272, 2, 25, 2, 187, -1, 2, 215, 0, 2158720, -3, 2, 186, 0, 1, -4, 2, 55, 0, 3808625411, 0, 3489628288, 0, 4096, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 188, 0, 120, 0, 7340032, -2, 2, 189, 2, 4, 2, 25, 2, 176, 3, 0, 4, 2, 186, -1, 2, 190, 2, 167, -1, 0, 8176, 2, 170, 2, 188, 0, 1073741824, -1, 0, 4290773232, 2, 0, -4, 2, 176, 2, 197, 0, 15728640, 2, 167, -1, 2, 174, -1, 0, 134250480, 0, 4720640, 0, 3825467396, -1, 2, 180, -9, 2, 94, 2, 181, 0, 4294967040, 2, 137, 0, 4160880640, 3, 0, 2, 0, 704, 0, 1849688064, 2, 191, -1, 2, 55, 0, 4294901887, 2, 0, 0, 130547712, 0, 1879048192, 2, 212, 3, 0, 2, -1, 2, 192, 2, 193, -1, 0, 17829776, 0, 2025848832, 0, 4261477888, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128, 2, 200, 0, 16252928, 0, 3791388672, 2, 130, 3, 0, 2, -2, 2, 206, 2, 0, -1, 2, 107, -1, 0, 66584576, -1, 2, 199, -1, 0, 448, 0, 4294918080, 3, 0, 6, 2, 55, -1, 0, 4294755328, 0, 4294967267, 2, 7, -1, 2, 174, 2, 187, 2, 25, 2, 98, 2, 25, 2, 194, 2, 94, -2, 0, 245760, 2, 195, -1, 2, 163, 2, 202, 0, 4227923456, -1, 2, 196, 2, 174, 2, 94, -3, 0, 4292870145, 0, 262144, -1, 2, 95, 2, 0, 0, 1073758848, 2, 197, -1, 0, 4227921920, 2, 198, 0, 68289024, 0, 528402016, 0, 4292927536, 0, 46080, 2, 191, 0, 4265609306, 0, 4294967289, -2, 0, 268435456, 2, 95, -2, 2, 199, 3, 0, 5, -1, 2, 200, 2, 176, 2, 0, -2, 0, 4227923936, 2, 67, -1, 2, 187, 2, 197, 2, 99, 2, 168, 2, 178, 2, 204, 3, 0, 5, -1, 2, 167, 3, 0, 3, -2, 0, 2146959360, 0, 9440640, 0, 104857600, 0, 4227923840, 3, 0, 2, 0, 768, 2, 201, 2, 28, -2, 2, 174, -2, 2, 202, -1, 2, 169, 2, 98, 3, 0, 5, -1, 0, 4227923964, 0, 512, 0, 8388608, 2, 203, 2, 183, 2, 193, 0, 4286578944, 3, 0, 2, 0, 1152, 0, 1266679808, 2, 199, 0, 576, 0, 4261707776, 2, 98, 3, 0, 9, 2, 169, 0, 131072, 0, 939524096, 2, 188, 3, 0, 2, 2, 16, -1, 0, 2147221504, -28, 2, 187, 3, 0, 3, -3, 0, 4292902912, -6, 2, 99, 3, 0, 81, 2, 25, -2, 2, 107, -33, 2, 18, 2, 181, -124, 2, 188, -18, 2, 204, 3, 0, 213, -1, 2, 187, 3, 0, 54, -17, 2, 169, 2, 55, 2, 205, -1, 2, 55, 2, 197, 0, 4290822144, -2, 0, 67174336, 0, 520093700, 2, 18, 3, 0, 13, -1, 2, 187, 3, 0, 6, -2, 2, 188, 3, 0, 3, -2, 0, 30720, -1, 0, 32512, 3, 0, 2, 0, 4294770656, -191, 2, 185, -38, 2, 181, 2, 8, 2, 206, 3, 0, 278, 0, 2417033215, -9, 0, 4294705144, 0, 4292411391, 0, 65295, -11, 2, 167, 3, 0, 72, -3, 0, 3758159872, 0, 201391616, 3, 0, 123, -7, 2, 187, -13, 2, 180, 3, 0, 2, -1, 2, 173, 2, 207, -3, 2, 99, 2, 0, -7, 2, 181, -1, 0, 384, -1, 0, 133693440, -3, 2, 208, -2, 2, 110, 3, 0, 3, 3, 180, 2, -2, 2, 94, 2, 169, 3, 0, 4, -2, 2, 196, -1, 2, 163, 0, 335552923, 2, 209, -1, 0, 538974272, 0, 2214592512, 0, 132000, -10, 0, 192, -8, 2, 210, -21, 0, 134213632, 2, 162, 3, 0, 34, 2, 55, 0, 4294965279, 3, 0, 6, 0, 100663424, 0, 63524, -1, 2, 214, 2, 152, 3, 0, 3, -1, 0, 3221282816, 0, 4294917120, 3, 0, 9, 2, 25, 2, 211, -1, 2, 212, 3, 0, 14, 2, 25, 2, 187, 3, 0, 6, 2, 25, 2, 213, 3, 0, 15, 0, 2147520640, -6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24, 2, 36, -1, 0, 4292870144, 3, 0, 2, 0, 1, 2, 176, 3, 0, 6, 2, 209, 0, 4110942569, 0, 1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 47, 3, 0, 8, -1, 2, 178, -2, 2, 180, 0, 98304, 0, 65537, 2, 181, -5, 2, 214, 2, 0, 2, 37, 2, 202, 2, 167, 0, 4294770176, 2, 110, 3, 0, 4, -30, 2, 192, 0, 3758153728, -3, 0, 125829120, -2, 2, 187, 0, 4294897664, 2, 178, -1, 2, 199, -1, 2, 174, 0, 4026580992, 2, 95, 2, 0, -10, 2, 180, 0, 3758145536, 0, 31744, -1, 0, 1610628992, 0, 4261477376, -4, 2, 215, -2, 2, 187, 3, 0, 32, -1335, 2, 0, -129, 2, 187, -6, 2, 176, -180, 0, 65532, -233, 2, 177, -18, 2, 176, 3, 0, 77, -16, 2, 176, 3, 0, 47, -154, 2, 170, -130, 2, 18, 3, 0, 22250, -7, 2, 18, 3, 0, 6128], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 32767, 4294901760, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294705152, 4294770687, 67043583, 1023, 15, 2047999, 67043343, 67051519, 16777215, 2147483648, 4294902000, 28, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 535511039, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 4294967288, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4095, 4285526655, 4294966527, 4294966143, 64, 4294966719, 3774873592, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 4294901761, 536870912, 2952790016, 202506752, 139264, 4026531840, 402653184, 4261412864, 63488, 1610612736, 4227922944, 49152, 65280, 3233808384, 3221225472, 65534, 61440, 57152, 4293918720, 4290772992, 25165824, 57344, 4227915776, 4278190080, 3758096384, 4227858432, 4160749568, 3758129152, 4294836224, 4194304, 251658240, 196608, 4294963200, 2143289344, 2097152, 64512, 417808, 4227923712, 12582912, 50331648, 65528, 65472, 4294967168, 15360, 4294966784, 65408, 4294965248, 16, 12288, 4294934528, 2080374784, 2013265920, 4294950912, 524288]);

  function advanceChar(parser) {
      parser.column++;
      return (parser.currentChar = parser.source.charCodeAt(++parser.index));
  }
  function consumePossibleSurrogatePair(parser) {
      const hi = parser.currentChar;
      if ((hi & 0xfc00) !== 55296)
          return 0;
      const lo = parser.source.charCodeAt(parser.index + 1);
      if ((lo & 0xfc00) !== 56320)
          return 0;
      return 65536 + ((hi & 0x3ff) << 10) + (lo & 0x3ff);
  }
  function consumeLineFeed(parser, state) {
      parser.currentChar = parser.source.charCodeAt(++parser.index);
      parser.flags |= 1;
      if ((state & 4) === 0) {
          parser.column = 0;
          parser.line++;
      }
  }
  function scanNewLine(parser) {
      parser.flags |= 1;
      parser.currentChar = parser.source.charCodeAt(++parser.index);
      parser.column = 0;
      parser.line++;
  }
  function isExoticECMAScriptWhitespace(ch) {
      return (ch === 160 ||
          ch === 65279 ||
          ch === 133 ||
          ch === 5760 ||
          (ch >= 8192 && ch <= 8203) ||
          ch === 8239 ||
          ch === 8287 ||
          ch === 12288 ||
          ch === 8201 ||
          ch === 65519);
  }
  function toHex(code) {
      return code < 65 ? code - 48 : (code - 65 + 10) & 0xf;
  }
  function convertTokenType(t) {
      switch (t) {
          case 134283266:
              return 'NumericLiteral';
          case 134283267:
              return 'StringLiteral';
          case 86021:
          case 86022:
              return 'BooleanLiteral';
          case 86023:
              return 'NullLiteral';
          case 65540:
              return 'RegularExpression';
          case 67174408:
          case 67174409:
          case 131:
              return 'TemplateLiteral';
          default:
              if ((t & 143360) === 143360)
                  return 'Identifier';
              if ((t & 4096) === 4096)
                  return 'Keyword';
              return 'Punctuator';
      }
  }

  const CharTypes = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      8 | 1024,
      0,
      0,
      8 | 2048,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      8192,
      0,
      1 | 2,
      0,
      0,
      8192,
      0,
      0,
      0,
      256,
      0,
      256 | 32768,
      0,
      0,
      2 | 16 | 128 | 32 | 64,
      2 | 16 | 128 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 32 | 64,
      2 | 16 | 512 | 64,
      2 | 16 | 512 | 64,
      0,
      0,
      16384,
      0,
      0,
      0,
      0,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2 | 64,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      1 | 2,
      0,
      1,
      0,
      0,
      1 | 2 | 4096,
      0,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4 | 64,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      1 | 2 | 4,
      16384,
      0,
      0,
      0,
      0
  ];
  const isIdStart = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0
  ];
  const isIdPart = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0
  ];
  function isIdentifierStart(code) {
      return code <= 0x7F
          ? isIdStart[code] > 0
          : isIDStart(code);
  }
  function isIdentifierPart(code) {
      return code <= 0x7F
          ? isIdPart[code] > 0
          : isIDContinue(code) || (code === 8204 || code === 8205);
  }

  const CommentTypes = ['SingleLine', 'MultiLine', 'HTMLOpen', 'HTMLClose', 'HashbangComment'];
  function skipHashBang(parser) {
      const { source } = parser;
      if (parser.currentChar === 35 && source.charCodeAt(parser.index + 1) === 33) {
          advanceChar(parser);
          advanceChar(parser);
          skipSingleLineComment(parser, source, 0, 4, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      }
  }
  function skipSingleHTMLComment(parser, source, state, context, type, start, line, column) {
      if (context & 512)
          report(parser, 0);
      return skipSingleLineComment(parser, source, state, type, start, line, column);
  }
  function skipSingleLineComment(parser, source, state, type, start, line, column) {
      const { index } = parser;
      parser.tokenIndex = parser.index;
      parser.tokenLine = parser.line;
      parser.tokenColumn = parser.column;
      while (parser.index < parser.end) {
          if (CharTypes[parser.currentChar] & 8) {
              const isCR = parser.currentChar === 13;
              scanNewLine(parser);
              if (isCR && parser.index < parser.end && parser.currentChar === 10)
                  parser.currentChar = source.charCodeAt(++parser.index);
              break;
          }
          else if ((parser.currentChar ^ 8232) <= 1) {
              scanNewLine(parser);
              break;
          }
          advanceChar(parser);
          parser.tokenIndex = parser.index;
          parser.tokenLine = parser.line;
          parser.tokenColumn = parser.column;
      }
      const commentVal = source.slice(index, parser.index);
      const commentObj = { type: CommentTypes[type & 0xff], value: commentVal, start: index, end: parser.index };
      parser.comments && parser.comments.push(commentObj);
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
          parser.onComment(CommentTypes[type & 0xff], source.slice(index, parser.tokenIndex), start, parser.tokenIndex, loc);
      }
      return state | 1;
  }
  function skipMultiLineComment(parser, source, state) {
      const { index } = parser;
      while (parser.index < parser.end) {
          if (parser.currentChar < 0x2b) {
              let skippedOneAsterisk = false;
              while (parser.currentChar === 42) {
                  if (!skippedOneAsterisk) {
                      state &= ~4;
                      skippedOneAsterisk = true;
                  }
                  if (advanceChar(parser) === 47) {
                      advanceChar(parser);
                      const commentVal = source.slice(index, parser.index - 2);
                      const commentObj = { type: CommentTypes[1 & 0xff], value: commentVal, start: index, end: parser.index };
                      parser.comments && parser.comments.push(commentObj);
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
                          parser.onComment(CommentTypes[1 & 0xff], source.slice(index, parser.index - 2), index - 2, parser.index, loc);
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
              if (CharTypes[parser.currentChar] & 8) {
                  if (parser.currentChar === 13) {
                      state |= 1 | 4;
                      scanNewLine(parser);
                  }
                  else {
                      consumeLineFeed(parser, state);
                      state = (state & ~4) | 1;
                  }
              }
              else {
                  advanceChar(parser);
              }
          }
          else if ((parser.currentChar ^ 8232) <= 1) {
              state = (state & ~4) | 1;
              scanNewLine(parser);
          }
          else {
              state &= ~4;
              advanceChar(parser);
          }
      }
      report(parser, 18);
  }

  var RegexState;
  (function (RegexState) {
      RegexState[RegexState["Empty"] = 0] = "Empty";
      RegexState[RegexState["Escape"] = 1] = "Escape";
      RegexState[RegexState["Class"] = 2] = "Class";
  })(RegexState || (RegexState = {}));
  var RegexFlags;
  (function (RegexFlags) {
      RegexFlags[RegexFlags["Empty"] = 0] = "Empty";
      RegexFlags[RegexFlags["IgnoreCase"] = 1] = "IgnoreCase";
      RegexFlags[RegexFlags["Global"] = 2] = "Global";
      RegexFlags[RegexFlags["Multiline"] = 4] = "Multiline";
      RegexFlags[RegexFlags["Unicode"] = 16] = "Unicode";
      RegexFlags[RegexFlags["Sticky"] = 8] = "Sticky";
      RegexFlags[RegexFlags["DotAll"] = 32] = "DotAll";
      RegexFlags[RegexFlags["Indices"] = 64] = "Indices";
      RegexFlags[RegexFlags["UnicodeSets"] = 128] = "UnicodeSets";
  })(RegexFlags || (RegexFlags = {}));
  function scanRegularExpression(parser, context) {
      const bodyStart = parser.index;
      let preparseState = RegexState.Empty;
      loop: while (true) {
          const ch = parser.currentChar;
          advanceChar(parser);
          if (preparseState & RegexState.Escape) {
              preparseState &= ~RegexState.Escape;
          }
          else {
              switch (ch) {
                  case 47:
                      if (!preparseState)
                          break loop;
                      else
                          break;
                  case 92:
                      preparseState |= RegexState.Escape;
                      break;
                  case 91:
                      preparseState |= RegexState.Class;
                      break;
                  case 93:
                      preparseState &= RegexState.Escape;
                      break;
              }
          }
          if (ch === 13 ||
              ch === 10 ||
              ch === 8232 ||
              ch === 8233) {
              report(parser, 34);
          }
          if (parser.index >= parser.source.length) {
              return report(parser, 34);
          }
      }
      const bodyEnd = parser.index - 1;
      let mask = RegexFlags.Empty;
      let char = parser.currentChar;
      const { index: flagStart } = parser;
      while (isIdentifierPart(char)) {
          switch (char) {
              case 103:
                  if (mask & RegexFlags.Global)
                      report(parser, 36, 'g');
                  mask |= RegexFlags.Global;
                  break;
              case 105:
                  if (mask & RegexFlags.IgnoreCase)
                      report(parser, 36, 'i');
                  mask |= RegexFlags.IgnoreCase;
                  break;
              case 109:
                  if (mask & RegexFlags.Multiline)
                      report(parser, 36, 'm');
                  mask |= RegexFlags.Multiline;
                  break;
              case 117:
                  if (mask & RegexFlags.Unicode)
                      report(parser, 36, 'u');
                  if (mask & RegexFlags.UnicodeSets)
                      report(parser, 36, 'vu');
                  mask |= RegexFlags.Unicode;
                  break;
              case 118:
                  if (mask & RegexFlags.Unicode)
                      report(parser, 36, 'uv');
                  if (mask & RegexFlags.UnicodeSets)
                      report(parser, 36, 'v');
                  mask |= RegexFlags.UnicodeSets;
                  break;
              case 121:
                  if (mask & RegexFlags.Sticky)
                      report(parser, 36, 'y');
                  mask |= RegexFlags.Sticky;
                  break;
              case 115:
                  if (mask & RegexFlags.DotAll)
                      report(parser, 36, 's');
                  mask |= RegexFlags.DotAll;
                  break;
              case 100:
                  if (mask & RegexFlags.Indices)
                      report(parser, 36, 'd');
                  mask |= RegexFlags.Indices;
                  break;
              default:
                  report(parser, 35);
          }
          char = advanceChar(parser);
      }
      const flags = parser.source.slice(flagStart, parser.index);
      const pattern = parser.source.slice(bodyStart, bodyEnd);
      parser.tokenRegExp = { pattern, flags };
      if (context & 128)
          parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
      parser.tokenValue = validate(parser, pattern, flags);
      return 65540;
  }
  function validate(parser, pattern, flags) {
      try {
          return new RegExp(pattern, flags);
      }
      catch {
          try {
              new RegExp(pattern, flags);
              return null;
          }
          catch {
              report(parser, 34);
          }
      }
  }

  function scanString(parser, context, quote) {
      const { index: start } = parser;
      let ret = '';
      let char = advanceChar(parser);
      let marker = parser.index;
      while ((CharTypes[char] & 8) === 0) {
          if (char === quote) {
              ret += parser.source.slice(marker, parser.index);
              advanceChar(parser);
              if (context & 128)
                  parser.tokenRaw = parser.source.slice(start, parser.index);
              parser.tokenValue = ret;
              return 134283267;
          }
          if ((char & 8) === 8 && char === 92) {
              ret += parser.source.slice(marker, parser.index);
              char = advanceChar(parser);
              if (char < 0x7f || char === 8232 || char === 8233) {
                  const code = parseEscape(parser, context, char);
                  if (code >= 0)
                      ret += String.fromCodePoint(code);
                  else
                      handleStringError(parser, code, 0);
              }
              else {
                  ret += String.fromCodePoint(char);
              }
              marker = parser.index + 1;
          }
          if (parser.index >= parser.end)
              report(parser, 16);
          char = advanceChar(parser);
      }
      report(parser, 16);
  }
  function parseEscape(parser, context, first, isTemplate = 0) {
      switch (first) {
          case 98:
              return 8;
          case 102:
              return 12;
          case 114:
              return 13;
          case 110:
              return 10;
          case 116:
              return 9;
          case 118:
              return 11;
          case 13: {
              if (parser.index < parser.end) {
                  const nextChar = parser.source.charCodeAt(parser.index + 1);
                  if (nextChar === 10) {
                      parser.index = parser.index + 1;
                      parser.currentChar = nextChar;
                  }
              }
          }
          case 10:
          case 8232:
          case 8233:
              parser.column = -1;
              parser.line++;
              return -1;
          case 48:
          case 49:
          case 50:
          case 51: {
              let code = first - 48;
              let index = parser.index + 1;
              let column = parser.column + 1;
              if (index < parser.end) {
                  const next = parser.source.charCodeAt(index);
                  if ((CharTypes[next] & 32) === 0) {
                      if (code !== 0 || CharTypes[next] & 512) {
                          if (context & 256 || isTemplate)
                              return -2;
                          parser.flags |= 64;
                      }
                  }
                  else if (context & 256 || isTemplate) {
                      return -2;
                  }
                  else {
                      parser.currentChar = next;
                      code = (code << 3) | (next - 48);
                      index++;
                      column++;
                      if (index < parser.end) {
                          const next = parser.source.charCodeAt(index);
                          if (CharTypes[next] & 32) {
                              parser.currentChar = next;
                              code = (code << 3) | (next - 48);
                              index++;
                              column++;
                          }
                      }
                      parser.flags |= 64;
                  }
                  parser.index = index - 1;
                  parser.column = column - 1;
              }
              return code;
          }
          case 52:
          case 53:
          case 54:
          case 55: {
              if (isTemplate || context & 256)
                  return -2;
              let code = first - 48;
              const index = parser.index + 1;
              const column = parser.column + 1;
              if (index < parser.end) {
                  const next = parser.source.charCodeAt(index);
                  if (CharTypes[next] & 32) {
                      code = (code << 3) | (next - 48);
                      parser.currentChar = next;
                      parser.index = index;
                      parser.column = column;
                  }
              }
              parser.flags |= 64;
              return code;
          }
          case 120: {
              const ch1 = advanceChar(parser);
              if ((CharTypes[ch1] & 64) === 0)
                  return -4;
              const hi = toHex(ch1);
              const ch2 = advanceChar(parser);
              if ((CharTypes[ch2] & 64) === 0)
                  return -4;
              const lo = toHex(ch2);
              return (hi << 4) | lo;
          }
          case 117: {
              const ch = advanceChar(parser);
              if (parser.currentChar === 123) {
                  let code = 0;
                  while ((CharTypes[advanceChar(parser)] & 64) !== 0) {
                      code = (code << 4) | toHex(parser.currentChar);
                      if (code > 1114111)
                          return -5;
                  }
                  if (parser.currentChar < 1 || parser.currentChar !== 125) {
                      return -4;
                  }
                  return code;
              }
              else {
                  if ((CharTypes[ch] & 64) === 0)
                      return -4;
                  const ch2 = parser.source.charCodeAt(parser.index + 1);
                  if ((CharTypes[ch2] & 64) === 0)
                      return -4;
                  const ch3 = parser.source.charCodeAt(parser.index + 2);
                  if ((CharTypes[ch3] & 64) === 0)
                      return -4;
                  const ch4 = parser.source.charCodeAt(parser.index + 3);
                  if ((CharTypes[ch4] & 64) === 0)
                      return -4;
                  parser.index += 3;
                  parser.column += 3;
                  parser.currentChar = parser.source.charCodeAt(parser.index);
                  return (toHex(ch) << 12) | (toHex(ch2) << 8) | (toHex(ch3) << 4) | toHex(ch4);
              }
          }
          case 56:
          case 57:
              if (isTemplate || (context & 64) === 0 || context & 256)
                  return -3;
              parser.flags |= 4096;
          default:
              return first;
      }
  }
  function handleStringError(state, code, isTemplate) {
      switch (code) {
          case -1:
              return;
          case -2:
              report(state, isTemplate ? 2 : 1);
          case -3:
              report(state, isTemplate ? 3 : 14);
          case -4:
              report(state, 7);
          case -5:
              report(state, 104);
      }
  }

  function scanTemplate(parser, context) {
      const { index: start } = parser;
      let token = 67174409;
      let ret = '';
      let char = advanceChar(parser);
      while (char !== 96) {
          if (char === 36 && parser.source.charCodeAt(parser.index + 1) === 123) {
              advanceChar(parser);
              token = 67174408;
              break;
          }
          else if (char === 92) {
              char = advanceChar(parser);
              if (char > 0x7e) {
                  ret += String.fromCodePoint(char);
              }
              else {
                  const { index, line, column } = parser;
                  const code = parseEscape(parser, context | 256, char, 1);
                  if (code >= 0) {
                      ret += String.fromCodePoint(code);
                  }
                  else if (code !== -1 && context & 16384) {
                      parser.index = index;
                      parser.line = line;
                      parser.column = column;
                      ret = null;
                      char = scanBadTemplate(parser, char);
                      if (char < 0)
                          token = 67174408;
                      break;
                  }
                  else {
                      handleStringError(parser, code, 1);
                  }
              }
          }
          else if (parser.index < parser.end) {
              if (char === 13 && parser.source.charCodeAt(parser.index) === 10) {
                  ret += String.fromCodePoint(char);
                  parser.currentChar = parser.source.charCodeAt(++parser.index);
              }
              if (((char & 83) < 3 && char === 10) || (char ^ 8232) <= 1) {
                  parser.column = -1;
                  parser.line++;
              }
              ret += String.fromCodePoint(char);
          }
          if (parser.index >= parser.end)
              report(parser, 17);
          char = advanceChar(parser);
      }
      advanceChar(parser);
      parser.tokenValue = ret;
      parser.tokenRaw = parser.source.slice(start + 1, parser.index - (token === 67174409 ? 1 : 2));
      return token;
  }
  function scanBadTemplate(parser, ch) {
      while (ch !== 96) {
          switch (ch) {
              case 36: {
                  const index = parser.index + 1;
                  if (index < parser.end && parser.source.charCodeAt(index) === 123) {
                      parser.index = index;
                      parser.column++;
                      return -ch;
                  }
                  break;
              }
              case 10:
              case 8232:
              case 8233:
                  parser.column = -1;
                  parser.line++;
          }
          if (parser.index >= parser.end)
              report(parser, 17);
          ch = advanceChar(parser);
      }
      return ch;
  }
  function scanTemplateTail(parser, context) {
      if (parser.index >= parser.end)
          report(parser, 0);
      parser.index--;
      parser.column--;
      return scanTemplate(parser, context);
  }

  function scanNumber(parser, context, kind) {
      let char = parser.currentChar;
      let value = 0;
      let digit = 9;
      let atStart = kind & 64 ? 0 : 1;
      let digits = 0;
      let allowSeparator = 0;
      if (kind & 64) {
          value = '.' + scanDecimalDigitsOrSeparator(parser, char);
          char = parser.currentChar;
          if (char === 110)
              report(parser, 12);
      }
      else {
          if (char === 48) {
              char = advanceChar(parser);
              if ((char | 32) === 120) {
                  kind = 8 | 128;
                  char = advanceChar(parser);
                  while (CharTypes[char] & (64 | 4096)) {
                      if (char === 95) {
                          if (!allowSeparator)
                              report(parser, 152);
                          allowSeparator = 0;
                          char = advanceChar(parser);
                          continue;
                      }
                      allowSeparator = 1;
                      value = value * 0x10 + toHex(char);
                      digits++;
                      char = advanceChar(parser);
                  }
                  if (digits === 0 || !allowSeparator) {
                      report(parser, digits === 0 ? 21 : 153);
                  }
              }
              else if ((char | 32) === 111) {
                  kind = 4 | 128;
                  char = advanceChar(parser);
                  while (CharTypes[char] & (32 | 4096)) {
                      if (char === 95) {
                          if (!allowSeparator) {
                              report(parser, 152);
                          }
                          allowSeparator = 0;
                          char = advanceChar(parser);
                          continue;
                      }
                      allowSeparator = 1;
                      value = value * 8 + (char - 48);
                      digits++;
                      char = advanceChar(parser);
                  }
                  if (digits === 0 || !allowSeparator) {
                      report(parser, digits === 0 ? 0 : 153);
                  }
              }
              else if ((char | 32) === 98) {
                  kind = 2 | 128;
                  char = advanceChar(parser);
                  while (CharTypes[char] & (128 | 4096)) {
                      if (char === 95) {
                          if (!allowSeparator) {
                              report(parser, 152);
                          }
                          allowSeparator = 0;
                          char = advanceChar(parser);
                          continue;
                      }
                      allowSeparator = 1;
                      value = value * 2 + (char - 48);
                      digits++;
                      char = advanceChar(parser);
                  }
                  if (digits === 0 || !allowSeparator) {
                      report(parser, digits === 0 ? 0 : 153);
                  }
              }
              else if (CharTypes[char] & 32) {
                  if (context & 256)
                      report(parser, 1);
                  kind = 1;
                  while (CharTypes[char] & 16) {
                      if (CharTypes[char] & 512) {
                          kind = 32;
                          atStart = 0;
                          break;
                      }
                      value = value * 8 + (char - 48);
                      char = advanceChar(parser);
                  }
              }
              else if (CharTypes[char] & 512) {
                  if (context & 256)
                      report(parser, 1);
                  parser.flags |= 64;
                  kind = 32;
              }
              else if (char === 95) {
                  report(parser, 0);
              }
          }
          if (kind & 48) {
              if (atStart) {
                  while (digit >= 0 && CharTypes[char] & (16 | 4096)) {
                      if (char === 95) {
                          char = advanceChar(parser);
                          if (char === 95 || kind & 32) {
                              reportScannerError(parser.index, parser.line, parser.column, parser.index + 1, parser.line, parser.column, 152);
                          }
                          allowSeparator = 1;
                          continue;
                      }
                      allowSeparator = 0;
                      value = 10 * value + (char - 48);
                      char = advanceChar(parser);
                      --digit;
                  }
                  if (allowSeparator) {
                      reportScannerError(parser.index, parser.line, parser.column, parser.index + 1, parser.line, parser.column, 153);
                  }
                  if (digit >= 0 && !isIdentifierStart(char) && char !== 46) {
                      parser.tokenValue = value;
                      if (context & 128)
                          parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
                      return 134283266;
                  }
              }
              value += scanDecimalDigitsOrSeparator(parser, char);
              char = parser.currentChar;
              if (char === 46) {
                  if (advanceChar(parser) === 95)
                      report(parser, 0);
                  kind = 64;
                  value += '.' + scanDecimalDigitsOrSeparator(parser, parser.currentChar);
                  char = parser.currentChar;
              }
          }
      }
      const end = parser.index;
      let isBigInt = 0;
      if (char === 110 && kind & 128) {
          isBigInt = 1;
          char = advanceChar(parser);
      }
      else {
          if ((char | 32) === 101) {
              char = advanceChar(parser);
              if (CharTypes[char] & 256)
                  char = advanceChar(parser);
              const { index } = parser;
              if ((CharTypes[char] & 16) === 0)
                  report(parser, 11);
              value += parser.source.substring(end, index) + scanDecimalDigitsOrSeparator(parser, char);
              char = parser.currentChar;
          }
      }
      if ((parser.index < parser.end && CharTypes[char] & 16) || isIdentifierStart(char)) {
          report(parser, 13);
      }
      if (isBigInt) {
          parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
          parser.tokenValue = BigInt(parser.tokenRaw.slice(0, -1).replaceAll('_', ''));
          return 134283388;
      }
      parser.tokenValue =
          kind & (1 | 2 | 8 | 4)
              ? value
              : kind & 32
                  ? parseFloat(parser.source.substring(parser.tokenIndex, parser.index))
                  : +value;
      if (context & 128)
          parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
      return 134283266;
  }
  function scanDecimalDigitsOrSeparator(parser, char) {
      let allowSeparator = 0;
      let start = parser.index;
      let ret = '';
      while (CharTypes[char] & (16 | 4096)) {
          if (char === 95) {
              const { index } = parser;
              char = advanceChar(parser);
              if (char === 95) {
                  reportScannerError(parser.index, parser.line, parser.column, parser.index + 1, parser.line, parser.column, 152);
              }
              allowSeparator = 1;
              ret += parser.source.substring(start, index);
              start = parser.index;
              continue;
          }
          allowSeparator = 0;
          char = advanceChar(parser);
      }
      if (allowSeparator) {
          reportScannerError(parser.index, parser.line, parser.column, parser.index + 1, parser.line, parser.column, 153);
      }
      return ret + parser.source.substring(start, parser.index);
  }

  const KeywordDescTable = [
      'end of source',
      'identifier', 'number', 'string', 'regular expression',
      'false', 'true', 'null',
      'template continuation', 'template tail',
      '=>', '(', '{', '.', '...', '}', ')', ';', ',', '[', ']', ':', '?', '\'', '"',
      '++', '--',
      '=', '<<=', '>>=', '>>>=', '**=', '+=', '-=', '*=', '/=', '%=', '^=', '|=',
      '&=', '||=', '&&=', '??=',
      'typeof', 'delete', 'void', '!', '~', '+', '-', 'in', 'instanceof', '*', '%', '/', '**', '&&',
      '||', '===', '!==', '==', '!=', '<=', '>=', '<', '>', '<<', '>>', '>>>', '&', '|', '^',
      'var', 'let', 'const',
      'break', 'case', 'catch', 'class', 'continue', 'debugger', 'default', 'do', 'else', 'export',
      'extends', 'finally', 'for', 'function', 'if', 'import', 'new', 'return', 'super', 'switch',
      'this', 'throw', 'try', 'while', 'with',
      'implements', 'interface', 'package', 'private', 'protected', 'public', 'static', 'yield',
      'as', 'async', 'await', 'constructor', 'get', 'set', 'accessor', 'from', 'of',
      'enum', 'eval', 'arguments', 'escaped keyword', 'escaped future reserved keyword', 'reserved if strict', '#',
      'BigIntLiteral', '??', '?.', 'WhiteSpace', 'Illegal', 'LineTerminator', 'PrivateField',
      'Template', '@', 'target', 'meta', 'LineFeed', 'Escaped', 'JSXText'
  ];
  const descKeywordTable = Object.create(null, {
      this: { value: 86111 },
      function: { value: 86104 },
      if: { value: 20569 },
      return: { value: 20572 },
      var: { value: 86088 },
      else: { value: 20563 },
      for: { value: 20567 },
      new: { value: 86107 },
      in: { value: 8673330 },
      typeof: { value: 16863275 },
      while: { value: 20578 },
      case: { value: 20556 },
      break: { value: 20555 },
      try: { value: 20577 },
      catch: { value: 20557 },
      delete: { value: 16863276 },
      throw: { value: 86112 },
      switch: { value: 86110 },
      continue: { value: 20559 },
      default: { value: 20561 },
      instanceof: { value: 8411187 },
      do: { value: 20562 },
      void: { value: 16863277 },
      finally: { value: 20566 },
      async: { value: 209005 },
      await: { value: 209006 },
      class: { value: 86094 },
      const: { value: 86090 },
      constructor: { value: 12399 },
      debugger: { value: 20560 },
      export: { value: 20564 },
      extends: { value: 20565 },
      false: { value: 86021 },
      from: { value: 12403 },
      get: { value: 12400 },
      implements: { value: 36964 },
      import: { value: 86106 },
      interface: { value: 36965 },
      let: { value: 241737 },
      null: { value: 86023 },
      of: { value: 274548 },
      package: { value: 36966 },
      private: { value: 36967 },
      protected: { value: 36968 },
      public: { value: 36969 },
      set: { value: 12401 },
      static: { value: 36970 },
      super: { value: 86109 },
      true: { value: 86022 },
      with: { value: 20579 },
      yield: { value: 241771 },
      enum: { value: 86133 },
      eval: { value: 537079926 },
      as: { value: 77932 },
      arguments: { value: 537079927 },
      target: { value: 209029 },
      meta: { value: 209030 },
      accessor: { value: 12402 },
  });

  function scanIdentifier(parser, context, isValidAsKeyword) {
      while (isIdPart[advanceChar(parser)])
          ;
      parser.tokenValue = parser.source.slice(parser.tokenIndex, parser.index);
      return parser.currentChar !== 92 && parser.currentChar <= 0x7e
          ? descKeywordTable[parser.tokenValue] || 208897
          : scanIdentifierSlowCase(parser, context, 0, isValidAsKeyword);
  }
  function scanUnicodeIdentifier(parser, context) {
      const cookedChar = scanIdentifierUnicodeEscape(parser);
      if (!isIdentifierStart(cookedChar))
          report(parser, 5);
      parser.tokenValue = String.fromCodePoint(cookedChar);
      return scanIdentifierSlowCase(parser, context, 1, CharTypes[cookedChar] & 4);
  }
  function scanIdentifierSlowCase(parser, context, hasEscape, isValidAsKeyword) {
      let start = parser.index;
      while (parser.index < parser.end) {
          if (parser.currentChar === 92) {
              parser.tokenValue += parser.source.slice(start, parser.index);
              hasEscape = 1;
              const code = scanIdentifierUnicodeEscape(parser);
              if (!isIdentifierPart(code))
                  report(parser, 5);
              isValidAsKeyword = isValidAsKeyword && CharTypes[code] & 4;
              parser.tokenValue += String.fromCodePoint(code);
              start = parser.index;
          }
          else {
              const merged = consumePossibleSurrogatePair(parser);
              if (merged > 0) {
                  if (!isIdentifierPart(merged)) {
                      report(parser, 20, String.fromCodePoint(merged));
                  }
                  parser.currentChar = merged;
                  parser.index++;
                  parser.column++;
              }
              else if (!isIdentifierPart(parser.currentChar)) {
                  break;
              }
              advanceChar(parser);
          }
      }
      if (parser.index <= parser.end) {
          parser.tokenValue += parser.source.slice(start, parser.index);
      }
      const { length } = parser.tokenValue;
      if (isValidAsKeyword && length >= 2 && length <= 11) {
          const token = descKeywordTable[parser.tokenValue];
          if (token === void 0)
              return 208897 | (hasEscape ? -2147483648 : 0);
          if (!hasEscape)
              return token;
          if (token === 209006) {
              if ((context & (512 | 524288)) === 0) {
                  return token | -2147483648;
              }
              return -2147483528;
          }
          if (context & 256) {
              if (token === 36970) {
                  return -2147483527;
              }
              if ((token & 36864) === 36864) {
                  return -2147483527;
              }
              if ((token & 20480) === 20480) {
                  if (context & 67108864 && (context & 2048) === 0) {
                      return token | -2147483648;
                  }
                  else {
                      return -2147483528;
                  }
              }
              return 209018 | -2147483648;
          }
          if (context & 67108864 &&
              (context & 2048) === 0 &&
              (token & 20480) === 20480) {
              return token | -2147483648;
          }
          if (token === 241771) {
              return context & 67108864
                  ? 209018 | -2147483648
                  : context & 262144
                      ? -2147483528
                      : token | -2147483648;
          }
          if (token === 209005) {
              return 209018 | -2147483648;
          }
          if ((token & 36864) === 36864) {
              return token | 12288 | -2147483648;
          }
          return -2147483528;
      }
      return 208897 | (hasEscape ? -2147483648 : 0);
  }
  function scanPrivateIdentifier(parser) {
      let char = advanceChar(parser);
      if (char === 92)
          return 130;
      const merged = consumePossibleSurrogatePair(parser);
      if (merged)
          char = merged;
      if (!isIdentifierStart(char))
          report(parser, 96);
      return 130;
  }
  function scanIdentifierUnicodeEscape(parser) {
      if (parser.source.charCodeAt(parser.index + 1) !== 117) {
          report(parser, 5);
      }
      parser.currentChar = parser.source.charCodeAt((parser.index += 2));
      return scanUnicodeEscape(parser);
  }
  function scanUnicodeEscape(parser) {
      let codePoint = 0;
      const char = parser.currentChar;
      if (char === 123) {
          const begin = parser.index - 2;
          while (CharTypes[advanceChar(parser)] & 64) {
              codePoint = (codePoint << 4) | toHex(parser.currentChar);
              if (codePoint > 1114111)
                  reportScannerError(begin, parser.line, parser.column, parser.index, parser.line, parser.column, 104);
          }
          if (parser.currentChar !== 125) {
              reportScannerError(begin, parser.line, parser.column, parser.index, parser.line, parser.column, 7);
          }
          advanceChar(parser);
          return codePoint;
      }
      if ((CharTypes[char] & 64) === 0)
          report(parser, 7);
      const char2 = parser.source.charCodeAt(parser.index + 1);
      if ((CharTypes[char2] & 64) === 0)
          report(parser, 7);
      const char3 = parser.source.charCodeAt(parser.index + 2);
      if ((CharTypes[char3] & 64) === 0)
          report(parser, 7);
      const char4 = parser.source.charCodeAt(parser.index + 3);
      if ((CharTypes[char4] & 64) === 0)
          report(parser, 7);
      codePoint = (toHex(char) << 12) | (toHex(char2) << 8) | (toHex(char3) << 4) | toHex(char4);
      parser.currentChar = parser.source.charCodeAt((parser.index += 4));
      return codePoint;
  }

  const TokenLookup = [
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      127,
      135,
      127,
      127,
      129,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      128,
      127,
      16842798,
      134283267,
      130,
      208897,
      8391477,
      8390213,
      134283267,
      67174411,
      16,
      8391476,
      25233968,
      18,
      25233969,
      67108877,
      8457014,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      134283266,
      21,
      1074790417,
      8456256,
      1077936155,
      8390721,
      22,
      132,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      208897,
      69271571,
      136,
      20,
      8389959,
      208897,
      131,
      4096,
      4096,
      4096,
      4096,
      4096,
      4096,
      4096,
      208897,
      4096,
      208897,
      208897,
      4096,
      208897,
      4096,
      208897,
      4096,
      208897,
      4096,
      4096,
      4096,
      208897,
      4096,
      4096,
      208897,
      4096,
      4096,
      2162700,
      8389702,
      1074790415,
      16842799,
      128
  ];
  function nextToken(parser, context) {
      parser.flags = (parser.flags | 1) ^ 1;
      parser.startIndex = parser.index;
      parser.startColumn = parser.column;
      parser.startLine = parser.line;
      parser.setToken(scanSingleToken(parser, context, 0));
  }
  function scanSingleToken(parser, context, state) {
      const isStartOfLine = parser.index === 0;
      const { source } = parser;
      let startIndex = parser.index;
      let startLine = parser.line;
      let startColumn = parser.column;
      while (parser.index < parser.end) {
          parser.tokenIndex = parser.index;
          parser.tokenColumn = parser.column;
          parser.tokenLine = parser.line;
          !parser.comments && (parser.comments = []);
          let char = parser.currentChar;
          if (char <= 0x7e) {
              const token = TokenLookup[char];
              switch (token) {
                  case 67174411:
                  case 16:
                  case 2162700:
                  case 1074790415:
                  case 69271571:
                  case 20:
                  case 21:
                  case 1074790417:
                  case 18:
                  case 16842799:
                  case 132:
                  case 128:
                      advanceChar(parser);
                      return token;
                  case 208897:
                      return scanIdentifier(parser, context, 0);
                  case 4096:
                      return scanIdentifier(parser, context, 1);
                  case 134283266:
                      return scanNumber(parser, context, 16 | 128);
                  case 134283267:
                      return scanString(parser, context, char);
                  case 131:
                      return scanTemplate(parser, context);
                  case 136:
                      return scanUnicodeIdentifier(parser, context);
                  case 130:
                      return scanPrivateIdentifier(parser);
                  case 127:
                      advanceChar(parser);
                      break;
                  case 129:
                      state |= 1 | 4;
                      scanNewLine(parser);
                      break;
                  case 135:
                      consumeLineFeed(parser, state);
                      state = (state & ~4) | 1;
                      break;
                  case 8456256: {
                      const ch = advanceChar(parser);
                      if (parser.index < parser.end) {
                          if (ch === 60) {
                              if (parser.index < parser.end && advanceChar(parser) === 61) {
                                  advanceChar(parser);
                                  return 4194332;
                              }
                              return 8390978;
                          }
                          else if (ch === 61) {
                              advanceChar(parser);
                              return 8390718;
                          }
                          if (ch === 33) {
                              const index = parser.index + 1;
                              if (index + 1 < parser.end &&
                                  source.charCodeAt(index) === 45 &&
                                  source.charCodeAt(index + 1) == 45) {
                                  parser.column += 3;
                                  parser.currentChar = source.charCodeAt((parser.index += 3));
                                  state = skipSingleHTMLComment(parser, source, state, context, 2, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                                  startIndex = parser.tokenIndex;
                                  startLine = parser.tokenLine;
                                  startColumn = parser.tokenColumn;
                                  continue;
                              }
                              return 8456256;
                          }
                      }
                      return 8456256;
                  }
                  case 1077936155: {
                      advanceChar(parser);
                      const ch = parser.currentChar;
                      if (ch === 61) {
                          if (advanceChar(parser) === 61) {
                              advanceChar(parser);
                              return 8390458;
                          }
                          return 8390460;
                      }
                      if (ch === 62) {
                          advanceChar(parser);
                          return 10;
                      }
                      return 1077936155;
                  }
                  case 16842798:
                      if (advanceChar(parser) !== 61) {
                          return 16842798;
                      }
                      if (advanceChar(parser) !== 61) {
                          return 8390461;
                      }
                      advanceChar(parser);
                      return 8390459;
                  case 8391477:
                      if (advanceChar(parser) !== 61)
                          return 8391477;
                      advanceChar(parser);
                      return 4194340;
                  case 8391476: {
                      advanceChar(parser);
                      if (parser.index >= parser.end)
                          return 8391476;
                      const ch = parser.currentChar;
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194338;
                      }
                      if (ch !== 42)
                          return 8391476;
                      if (advanceChar(parser) !== 61)
                          return 8391735;
                      advanceChar(parser);
                      return 4194335;
                  }
                  case 8389959:
                      if (advanceChar(parser) !== 61)
                          return 8389959;
                      advanceChar(parser);
                      return 4194341;
                  case 25233968: {
                      advanceChar(parser);
                      const ch = parser.currentChar;
                      if (ch === 43) {
                          advanceChar(parser);
                          return 33619993;
                      }
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194336;
                      }
                      return 25233968;
                  }
                  case 25233969: {
                      advanceChar(parser);
                      const ch = parser.currentChar;
                      if (ch === 45) {
                          advanceChar(parser);
                          if ((state & 1 || isStartOfLine) && parser.currentChar === 62) {
                              if ((context & 64) === 0)
                                  report(parser, 112);
                              advanceChar(parser);
                              state = skipSingleHTMLComment(parser, source, state, context, 3, startIndex, startLine, startColumn);
                              startIndex = parser.tokenIndex;
                              startLine = parser.tokenLine;
                              startColumn = parser.tokenColumn;
                              continue;
                          }
                          return 33619994;
                      }
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194337;
                      }
                      return 25233969;
                  }
                  case 8457014: {
                      advanceChar(parser);
                      if (parser.index < parser.end) {
                          const ch = parser.currentChar;
                          if (ch === 47) {
                              advanceChar(parser);
                              state = skipSingleLineComment(parser, source, state, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                              startIndex = parser.tokenIndex;
                              startLine = parser.tokenLine;
                              startColumn = parser.tokenColumn;
                              continue;
                          }
                          if (ch === 42) {
                              advanceChar(parser);
                              state = skipMultiLineComment(parser, source, state);
                              startIndex = parser.tokenIndex;
                              startLine = parser.tokenLine;
                              startColumn = parser.tokenColumn;
                              continue;
                          }
                          if (context & 8192) {
                              return scanRegularExpression(parser, context);
                          }
                          if (ch === 61) {
                              advanceChar(parser);
                              return 4259875;
                          }
                      }
                      return 8457014;
                  }
                  case 67108877: {
                      const next = advanceChar(parser);
                      if (next >= 48 && next <= 57)
                          return scanNumber(parser, context, 64 | 16);
                      if (next === 46) {
                          const index = parser.index + 1;
                          if (index < parser.end && source.charCodeAt(index) === 46) {
                              parser.column += 2;
                              parser.currentChar = source.charCodeAt((parser.index += 2));
                              return 14;
                          }
                      }
                      return 67108877;
                  }
                  case 8389702: {
                      advanceChar(parser);
                      const ch = parser.currentChar;
                      if (ch === 124) {
                          advanceChar(parser);
                          if (parser.currentChar === 61) {
                              advanceChar(parser);
                              return 4194344;
                          }
                          return 8913465;
                      }
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194342;
                      }
                      return 8389702;
                  }
                  case 8390721: {
                      advanceChar(parser);
                      const ch = parser.currentChar;
                      if (ch === 61) {
                          advanceChar(parser);
                          return 8390719;
                      }
                      if (ch !== 62)
                          return 8390721;
                      advanceChar(parser);
                      if (parser.index < parser.end) {
                          const ch = parser.currentChar;
                          if (ch === 62) {
                              if (advanceChar(parser) === 61) {
                                  advanceChar(parser);
                                  return 4194334;
                              }
                              return 8390980;
                          }
                          if (ch === 61) {
                              advanceChar(parser);
                              return 4194333;
                          }
                      }
                      return 8390979;
                  }
                  case 8390213: {
                      advanceChar(parser);
                      const ch = parser.currentChar;
                      if (ch === 38) {
                          advanceChar(parser);
                          if (parser.currentChar === 61) {
                              advanceChar(parser);
                              return 4194345;
                          }
                          return 8913720;
                      }
                      if (ch === 61) {
                          advanceChar(parser);
                          return 4194343;
                      }
                      return 8390213;
                  }
                  case 22: {
                      let ch = advanceChar(parser);
                      if (ch === 63) {
                          advanceChar(parser);
                          if (parser.currentChar === 61) {
                              advanceChar(parser);
                              return 4194346;
                          }
                          return 276824445;
                      }
                      if (ch === 46) {
                          const index = parser.index + 1;
                          if (index < parser.end) {
                              ch = source.charCodeAt(index);
                              if (!(ch >= 48 && ch <= 57)) {
                                  advanceChar(parser);
                                  return 67108990;
                              }
                          }
                      }
                      return 22;
                  }
              }
          }
          else {
              if ((char ^ 8232) <= 1) {
                  state = (state & ~4) | 1;
                  scanNewLine(parser);
                  continue;
              }
              const merged = consumePossibleSurrogatePair(parser);
              if (merged > 0)
                  char = merged;
              if (isIDStart(char)) {
                  parser.tokenValue = '';
                  return scanIdentifierSlowCase(parser, context, 0, 0);
              }
              if (isExoticECMAScriptWhitespace(char)) {
                  advanceChar(parser);
                  continue;
              }
              report(parser, 20, String.fromCodePoint(char));
          }
      }
      return 1048576;
  }

  const entities = {
      AElig: '\u00C6',
      AMP: '\u0026',
      Aacute: '\u00C1',
      Abreve: '\u0102',
      Acirc: '\u00C2',
      Acy: '\u0410',
      Afr: '\uD835\uDD04',
      Agrave: '\u00C0',
      Alpha: '\u0391',
      Amacr: '\u0100',
      And: '\u2A53',
      Aogon: '\u0104',
      Aopf: '\uD835\uDD38',
      ApplyFunction: '\u2061',
      Aring: '\u00C5',
      Ascr: '\uD835\uDC9C',
      Assign: '\u2254',
      Atilde: '\u00C3',
      Auml: '\u00C4',
      Backslash: '\u2216',
      Barv: '\u2AE7',
      Barwed: '\u2306',
      Bcy: '\u0411',
      Because: '\u2235',
      Bernoullis: '\u212C',
      Beta: '\u0392',
      Bfr: '\uD835\uDD05',
      Bopf: '\uD835\uDD39',
      Breve: '\u02D8',
      Bscr: '\u212C',
      Bumpeq: '\u224E',
      CHcy: '\u0427',
      COPY: '\u00A9',
      Cacute: '\u0106',
      Cap: '\u22D2',
      CapitalDifferentialD: '\u2145',
      Cayleys: '\u212D',
      Ccaron: '\u010C',
      Ccedil: '\u00C7',
      Ccirc: '\u0108',
      Cconint: '\u2230',
      Cdot: '\u010A',
      Cedilla: '\u00B8',
      CenterDot: '\u00B7',
      Cfr: '\u212D',
      Chi: '\u03A7',
      CircleDot: '\u2299',
      CircleMinus: '\u2296',
      CirclePlus: '\u2295',
      CircleTimes: '\u2297',
      ClockwiseContourIntegral: '\u2232',
      CloseCurlyDoubleQuote: '\u201D',
      CloseCurlyQuote: '\u2019',
      Colon: '\u2237',
      Colone: '\u2A74',
      Congruent: '\u2261',
      Conint: '\u222F',
      ContourIntegral: '\u222E',
      Copf: '\u2102',
      Coproduct: '\u2210',
      CounterClockwiseContourIntegral: '\u2233',
      Cross: '\u2A2F',
      Cscr: '\uD835\uDC9E',
      Cup: '\u22D3',
      CupCap: '\u224D',
      DD: '\u2145',
      DDotrahd: '\u2911',
      DJcy: '\u0402',
      DScy: '\u0405',
      DZcy: '\u040F',
      Dagger: '\u2021',
      Darr: '\u21A1',
      Dashv: '\u2AE4',
      Dcaron: '\u010E',
      Dcy: '\u0414',
      Del: '\u2207',
      Delta: '\u0394',
      Dfr: '\uD835\uDD07',
      DiacriticalAcute: '\u00B4',
      DiacriticalDot: '\u02D9',
      DiacriticalDoubleAcute: '\u02DD',
      DiacriticalGrave: '\u0060',
      DiacriticalTilde: '\u02DC',
      Diamond: '\u22C4',
      DifferentialD: '\u2146',
      Dopf: '\uD835\uDD3B',
      Dot: '\u00A8',
      DotDot: '\u20DC',
      DotEqual: '\u2250',
      DoubleContourIntegral: '\u222F',
      DoubleDot: '\u00A8',
      DoubleDownArrow: '\u21D3',
      DoubleLeftArrow: '\u21D0',
      DoubleLeftRightArrow: '\u21D4',
      DoubleLeftTee: '\u2AE4',
      DoubleLongLeftArrow: '\u27F8',
      DoubleLongLeftRightArrow: '\u27FA',
      DoubleLongRightArrow: '\u27F9',
      DoubleRightArrow: '\u21D2',
      DoubleRightTee: '\u22A8',
      DoubleUpArrow: '\u21D1',
      DoubleUpDownArrow: '\u21D5',
      DoubleVerticalBar: '\u2225',
      DownArrow: '\u2193',
      DownArrowBar: '\u2913',
      DownArrowUpArrow: '\u21F5',
      DownBreve: '\u0311',
      DownLeftRightVector: '\u2950',
      DownLeftTeeVector: '\u295E',
      DownLeftVector: '\u21BD',
      DownLeftVectorBar: '\u2956',
      DownRightTeeVector: '\u295F',
      DownRightVector: '\u21C1',
      DownRightVectorBar: '\u2957',
      DownTee: '\u22A4',
      DownTeeArrow: '\u21A7',
      Downarrow: '\u21D3',
      Dscr: '\uD835\uDC9F',
      Dstrok: '\u0110',
      ENG: '\u014A',
      ETH: '\u00D0',
      Eacute: '\u00C9',
      Ecaron: '\u011A',
      Ecirc: '\u00CA',
      Ecy: '\u042D',
      Edot: '\u0116',
      Efr: '\uD835\uDD08',
      Egrave: '\u00C8',
      Element: '\u2208',
      Emacr: '\u0112',
      EmptySmallSquare: '\u25FB',
      EmptyVerySmallSquare: '\u25AB',
      Eogon: '\u0118',
      Eopf: '\uD835\uDD3C',
      Epsilon: '\u0395',
      Equal: '\u2A75',
      EqualTilde: '\u2242',
      Equilibrium: '\u21CC',
      Escr: '\u2130',
      Esim: '\u2A73',
      Eta: '\u0397',
      Euml: '\u00CB',
      Exists: '\u2203',
      ExponentialE: '\u2147',
      Fcy: '\u0424',
      Ffr: '\uD835\uDD09',
      FilledSmallSquare: '\u25FC',
      FilledVerySmallSquare: '\u25AA',
      Fopf: '\uD835\uDD3D',
      ForAll: '\u2200',
      Fouriertrf: '\u2131',
      Fscr: '\u2131',
      GJcy: '\u0403',
      GT: '\u003E',
      Gamma: '\u0393',
      Gammad: '\u03DC',
      Gbreve: '\u011E',
      Gcedil: '\u0122',
      Gcirc: '\u011C',
      Gcy: '\u0413',
      Gdot: '\u0120',
      Gfr: '\uD835\uDD0A',
      Gg: '\u22D9',
      Gopf: '\uD835\uDD3E',
      GreaterEqual: '\u2265',
      GreaterEqualLess: '\u22DB',
      GreaterFullEqual: '\u2267',
      GreaterGreater: '\u2AA2',
      GreaterLess: '\u2277',
      GreaterSlantEqual: '\u2A7E',
      GreaterTilde: '\u2273',
      Gscr: '\uD835\uDCA2',
      Gt: '\u226B',
      HARDcy: '\u042A',
      Hacek: '\u02C7',
      Hat: '\u005E',
      Hcirc: '\u0124',
      Hfr: '\u210C',
      HilbertSpace: '\u210B',
      Hopf: '\u210D',
      HorizontalLine: '\u2500',
      Hscr: '\u210B',
      Hstrok: '\u0126',
      HumpDownHump: '\u224E',
      HumpEqual: '\u224F',
      IEcy: '\u0415',
      IJlig: '\u0132',
      IOcy: '\u0401',
      Iacute: '\u00CD',
      Icirc: '\u00CE',
      Icy: '\u0418',
      Idot: '\u0130',
      Ifr: '\u2111',
      Igrave: '\u00CC',
      Im: '\u2111',
      Imacr: '\u012A',
      ImaginaryI: '\u2148',
      Implies: '\u21D2',
      Int: '\u222C',
      Integral: '\u222B',
      Intersection: '\u22C2',
      InvisibleComma: '\u2063',
      InvisibleTimes: '\u2062',
      Iogon: '\u012E',
      Iopf: '\uD835\uDD40',
      Iota: '\u0399',
      Iscr: '\u2110',
      Itilde: '\u0128',
      Iukcy: '\u0406',
      Iuml: '\u00CF',
      Jcirc: '\u0134',
      Jcy: '\u0419',
      Jfr: '\uD835\uDD0D',
      Jopf: '\uD835\uDD41',
      Jscr: '\uD835\uDCA5',
      Jsercy: '\u0408',
      Jukcy: '\u0404',
      KHcy: '\u0425',
      KJcy: '\u040C',
      Kappa: '\u039A',
      Kcedil: '\u0136',
      Kcy: '\u041A',
      Kfr: '\uD835\uDD0E',
      Kopf: '\uD835\uDD42',
      Kscr: '\uD835\uDCA6',
      LJcy: '\u0409',
      LT: '\u003C',
      Lacute: '\u0139',
      Lambda: '\u039B',
      Lang: '\u27EA',
      Laplacetrf: '\u2112',
      Larr: '\u219E',
      Lcaron: '\u013D',
      Lcedil: '\u013B',
      Lcy: '\u041B',
      LeftAngleBracket: '\u27E8',
      LeftArrow: '\u2190',
      LeftArrowBar: '\u21E4',
      LeftArrowRightArrow: '\u21C6',
      LeftCeiling: '\u2308',
      LeftDoubleBracket: '\u27E6',
      LeftDownTeeVector: '\u2961',
      LeftDownVector: '\u21C3',
      LeftDownVectorBar: '\u2959',
      LeftFloor: '\u230A',
      LeftRightArrow: '\u2194',
      LeftRightVector: '\u294E',
      LeftTee: '\u22A3',
      LeftTeeArrow: '\u21A4',
      LeftTeeVector: '\u295A',
      LeftTriangle: '\u22B2',
      LeftTriangleBar: '\u29CF',
      LeftTriangleEqual: '\u22B4',
      LeftUpDownVector: '\u2951',
      LeftUpTeeVector: '\u2960',
      LeftUpVector: '\u21BF',
      LeftUpVectorBar: '\u2958',
      LeftVector: '\u21BC',
      LeftVectorBar: '\u2952',
      Leftarrow: '\u21D0',
      Leftrightarrow: '\u21D4',
      LessEqualGreater: '\u22DA',
      LessFullEqual: '\u2266',
      LessGreater: '\u2276',
      LessLess: '\u2AA1',
      LessSlantEqual: '\u2A7D',
      LessTilde: '\u2272',
      Lfr: '\uD835\uDD0F',
      Ll: '\u22D8',
      Lleftarrow: '\u21DA',
      Lmidot: '\u013F',
      LongLeftArrow: '\u27F5',
      LongLeftRightArrow: '\u27F7',
      LongRightArrow: '\u27F6',
      Longleftarrow: '\u27F8',
      Longleftrightarrow: '\u27FA',
      Longrightarrow: '\u27F9',
      Lopf: '\uD835\uDD43',
      LowerLeftArrow: '\u2199',
      LowerRightArrow: '\u2198',
      Lscr: '\u2112',
      Lsh: '\u21B0',
      Lstrok: '\u0141',
      Lt: '\u226A',
      Map: '\u2905',
      Mcy: '\u041C',
      MediumSpace: '\u205F',
      Mellintrf: '\u2133',
      Mfr: '\uD835\uDD10',
      MinusPlus: '\u2213',
      Mopf: '\uD835\uDD44',
      Mscr: '\u2133',
      Mu: '\u039C',
      NJcy: '\u040A',
      Nacute: '\u0143',
      Ncaron: '\u0147',
      Ncedil: '\u0145',
      Ncy: '\u041D',
      NegativeMediumSpace: '\u200B',
      NegativeThickSpace: '\u200B',
      NegativeThinSpace: '\u200B',
      NegativeVeryThinSpace: '\u200B',
      NestedGreaterGreater: '\u226B',
      NestedLessLess: '\u226A',
      NewLine: '\u000A',
      Nfr: '\uD835\uDD11',
      NoBreak: '\u2060',
      NonBreakingSpace: '\u00A0',
      Nopf: '\u2115',
      Not: '\u2AEC',
      NotCongruent: '\u2262',
      NotCupCap: '\u226D',
      NotDoubleVerticalBar: '\u2226',
      NotElement: '\u2209',
      NotEqual: '\u2260',
      NotEqualTilde: '\u2242\u0338',
      NotExists: '\u2204',
      NotGreater: '\u226F',
      NotGreaterEqual: '\u2271',
      NotGreaterFullEqual: '\u2267\u0338',
      NotGreaterGreater: '\u226B\u0338',
      NotGreaterLess: '\u2279',
      NotGreaterSlantEqual: '\u2A7E\u0338',
      NotGreaterTilde: '\u2275',
      NotHumpDownHump: '\u224E\u0338',
      NotHumpEqual: '\u224F\u0338',
      NotLeftTriangle: '\u22EA',
      NotLeftTriangleBar: '\u29CF\u0338',
      NotLeftTriangleEqual: '\u22EC',
      NotLess: '\u226E',
      NotLessEqual: '\u2270',
      NotLessGreater: '\u2278',
      NotLessLess: '\u226A\u0338',
      NotLessSlantEqual: '\u2A7D\u0338',
      NotLessTilde: '\u2274',
      NotNestedGreaterGreater: '\u2AA2\u0338',
      NotNestedLessLess: '\u2AA1\u0338',
      NotPrecedes: '\u2280',
      NotPrecedesEqual: '\u2AAF\u0338',
      NotPrecedesSlantEqual: '\u22E0',
      NotReverseElement: '\u220C',
      NotRightTriangle: '\u22EB',
      NotRightTriangleBar: '\u29D0\u0338',
      NotRightTriangleEqual: '\u22ED',
      NotSquareSubset: '\u228F\u0338',
      NotSquareSubsetEqual: '\u22E2',
      NotSquareSuperset: '\u2290\u0338',
      NotSquareSupersetEqual: '\u22E3',
      NotSubset: '\u2282\u20D2',
      NotSubsetEqual: '\u2288',
      NotSucceeds: '\u2281',
      NotSucceedsEqual: '\u2AB0\u0338',
      NotSucceedsSlantEqual: '\u22E1',
      NotSucceedsTilde: '\u227F\u0338',
      NotSuperset: '\u2283\u20D2',
      NotSupersetEqual: '\u2289',
      NotTilde: '\u2241',
      NotTildeEqual: '\u2244',
      NotTildeFullEqual: '\u2247',
      NotTildeTilde: '\u2249',
      NotVerticalBar: '\u2224',
      Nscr: '\uD835\uDCA9',
      Ntilde: '\u00D1',
      Nu: '\u039D',
      OElig: '\u0152',
      Oacute: '\u00D3',
      Ocirc: '\u00D4',
      Ocy: '\u041E',
      Odblac: '\u0150',
      Ofr: '\uD835\uDD12',
      Ograve: '\u00D2',
      Omacr: '\u014C',
      Omega: '\u03A9',
      Omicron: '\u039F',
      Oopf: '\uD835\uDD46',
      OpenCurlyDoubleQuote: '\u201C',
      OpenCurlyQuote: '\u2018',
      Or: '\u2A54',
      Oscr: '\uD835\uDCAA',
      Oslash: '\u00D8',
      Otilde: '\u00D5',
      Otimes: '\u2A37',
      Ouml: '\u00D6',
      OverBar: '\u203E',
      OverBrace: '\u23DE',
      OverBracket: '\u23B4',
      OverParenthesis: '\u23DC',
      PartialD: '\u2202',
      Pcy: '\u041F',
      Pfr: '\uD835\uDD13',
      Phi: '\u03A6',
      Pi: '\u03A0',
      PlusMinus: '\u00B1',
      Poincareplane: '\u210C',
      Popf: '\u2119',
      Pr: '\u2ABB',
      Precedes: '\u227A',
      PrecedesEqual: '\u2AAF',
      PrecedesSlantEqual: '\u227C',
      PrecedesTilde: '\u227E',
      Prime: '\u2033',
      Product: '\u220F',
      Proportion: '\u2237',
      Proportional: '\u221D',
      Pscr: '\uD835\uDCAB',
      Psi: '\u03A8',
      QUOT: '\u0022',
      Qfr: '\uD835\uDD14',
      Qopf: '\u211A',
      Qscr: '\uD835\uDCAC',
      RBarr: '\u2910',
      REG: '\u00AE',
      Racute: '\u0154',
      Rang: '\u27EB',
      Rarr: '\u21A0',
      Rarrtl: '\u2916',
      Rcaron: '\u0158',
      Rcedil: '\u0156',
      Rcy: '\u0420',
      Re: '\u211C',
      ReverseElement: '\u220B',
      ReverseEquilibrium: '\u21CB',
      ReverseUpEquilibrium: '\u296F',
      Rfr: '\u211C',
      Rho: '\u03A1',
      RightAngleBracket: '\u27E9',
      RightArrow: '\u2192',
      RightArrowBar: '\u21E5',
      RightArrowLeftArrow: '\u21C4',
      RightCeiling: '\u2309',
      RightDoubleBracket: '\u27E7',
      RightDownTeeVector: '\u295D',
      RightDownVector: '\u21C2',
      RightDownVectorBar: '\u2955',
      RightFloor: '\u230B',
      RightTee: '\u22A2',
      RightTeeArrow: '\u21A6',
      RightTeeVector: '\u295B',
      RightTriangle: '\u22B3',
      RightTriangleBar: '\u29D0',
      RightTriangleEqual: '\u22B5',
      RightUpDownVector: '\u294F',
      RightUpTeeVector: '\u295C',
      RightUpVector: '\u21BE',
      RightUpVectorBar: '\u2954',
      RightVector: '\u21C0',
      RightVectorBar: '\u2953',
      Rightarrow: '\u21D2',
      Ropf: '\u211D',
      RoundImplies: '\u2970',
      Rrightarrow: '\u21DB',
      Rscr: '\u211B',
      Rsh: '\u21B1',
      RuleDelayed: '\u29F4',
      SHCHcy: '\u0429',
      SHcy: '\u0428',
      SOFTcy: '\u042C',
      Sacute: '\u015A',
      Sc: '\u2ABC',
      Scaron: '\u0160',
      Scedil: '\u015E',
      Scirc: '\u015C',
      Scy: '\u0421',
      Sfr: '\uD835\uDD16',
      ShortDownArrow: '\u2193',
      ShortLeftArrow: '\u2190',
      ShortRightArrow: '\u2192',
      ShortUpArrow: '\u2191',
      Sigma: '\u03A3',
      SmallCircle: '\u2218',
      Sopf: '\uD835\uDD4A',
      Sqrt: '\u221A',
      Square: '\u25A1',
      SquareIntersection: '\u2293',
      SquareSubset: '\u228F',
      SquareSubsetEqual: '\u2291',
      SquareSuperset: '\u2290',
      SquareSupersetEqual: '\u2292',
      SquareUnion: '\u2294',
      Sscr: '\uD835\uDCAE',
      Star: '\u22C6',
      Sub: '\u22D0',
      Subset: '\u22D0',
      SubsetEqual: '\u2286',
      Succeeds: '\u227B',
      SucceedsEqual: '\u2AB0',
      SucceedsSlantEqual: '\u227D',
      SucceedsTilde: '\u227F',
      SuchThat: '\u220B',
      Sum: '\u2211',
      Sup: '\u22D1',
      Superset: '\u2283',
      SupersetEqual: '\u2287',
      Supset: '\u22D1',
      THORN: '\u00DE',
      TRADE: '\u2122',
      TSHcy: '\u040B',
      TScy: '\u0426',
      Tab: '\u0009',
      Tau: '\u03A4',
      Tcaron: '\u0164',
      Tcedil: '\u0162',
      Tcy: '\u0422',
      Tfr: '\uD835\uDD17',
      Therefore: '\u2234',
      Theta: '\u0398',
      ThickSpace: '\u205F\u200A',
      ThinSpace: '\u2009',
      Tilde: '\u223C',
      TildeEqual: '\u2243',
      TildeFullEqual: '\u2245',
      TildeTilde: '\u2248',
      Topf: '\uD835\uDD4B',
      TripleDot: '\u20DB',
      Tscr: '\uD835\uDCAF',
      Tstrok: '\u0166',
      Uacute: '\u00DA',
      Uarr: '\u219F',
      Uarrocir: '\u2949',
      Ubrcy: '\u040E',
      Ubreve: '\u016C',
      Ucirc: '\u00DB',
      Ucy: '\u0423',
      Udblac: '\u0170',
      Ufr: '\uD835\uDD18',
      Ugrave: '\u00D9',
      Umacr: '\u016A',
      UnderBar: '\u005F',
      UnderBrace: '\u23DF',
      UnderBracket: '\u23B5',
      UnderParenthesis: '\u23DD',
      Union: '\u22C3',
      UnionPlus: '\u228E',
      Uogon: '\u0172',
      Uopf: '\uD835\uDD4C',
      UpArrow: '\u2191',
      UpArrowBar: '\u2912',
      UpArrowDownArrow: '\u21C5',
      UpDownArrow: '\u2195',
      UpEquilibrium: '\u296E',
      UpTee: '\u22A5',
      UpTeeArrow: '\u21A5',
      Uparrow: '\u21D1',
      Updownarrow: '\u21D5',
      UpperLeftArrow: '\u2196',
      UpperRightArrow: '\u2197',
      Upsi: '\u03D2',
      Upsilon: '\u03A5',
      Uring: '\u016E',
      Uscr: '\uD835\uDCB0',
      Utilde: '\u0168',
      Uuml: '\u00DC',
      VDash: '\u22AB',
      Vbar: '\u2AEB',
      Vcy: '\u0412',
      Vdash: '\u22A9',
      Vdashl: '\u2AE6',
      Vee: '\u22C1',
      Verbar: '\u2016',
      Vert: '\u2016',
      VerticalBar: '\u2223',
      VerticalLine: '\u007C',
      VerticalSeparator: '\u2758',
      VerticalTilde: '\u2240',
      VeryThinSpace: '\u200A',
      Vfr: '\uD835\uDD19',
      Vopf: '\uD835\uDD4D',
      Vscr: '\uD835\uDCB1',
      Vvdash: '\u22AA',
      Wcirc: '\u0174',
      Wedge: '\u22C0',
      Wfr: '\uD835\uDD1A',
      Wopf: '\uD835\uDD4E',
      Wscr: '\uD835\uDCB2',
      Xfr: '\uD835\uDD1B',
      Xi: '\u039E',
      Xopf: '\uD835\uDD4F',
      Xscr: '\uD835\uDCB3',
      YAcy: '\u042F',
      YIcy: '\u0407',
      YUcy: '\u042E',
      Yacute: '\u00DD',
      Ycirc: '\u0176',
      Ycy: '\u042B',
      Yfr: '\uD835\uDD1C',
      Yopf: '\uD835\uDD50',
      Yscr: '\uD835\uDCB4',
      Yuml: '\u0178',
      ZHcy: '\u0416',
      Zacute: '\u0179',
      Zcaron: '\u017D',
      Zcy: '\u0417',
      Zdot: '\u017B',
      ZeroWidthSpace: '\u200B',
      Zeta: '\u0396',
      Zfr: '\u2128',
      Zopf: '\u2124',
      Zscr: '\uD835\uDCB5',
      aacute: '\u00E1',
      abreve: '\u0103',
      ac: '\u223E',
      acE: '\u223E\u0333',
      acd: '\u223F',
      acirc: '\u00E2',
      acute: '\u00B4',
      acy: '\u0430',
      aelig: '\u00E6',
      af: '\u2061',
      afr: '\uD835\uDD1E',
      agrave: '\u00E0',
      alefsym: '\u2135',
      aleph: '\u2135',
      alpha: '\u03B1',
      amacr: '\u0101',
      amalg: '\u2A3F',
      amp: '\u0026',
      and: '\u2227',
      andand: '\u2A55',
      andd: '\u2A5C',
      andslope: '\u2A58',
      andv: '\u2A5A',
      ang: '\u2220',
      ange: '\u29A4',
      angle: '\u2220',
      angmsd: '\u2221',
      angmsdaa: '\u29A8',
      angmsdab: '\u29A9',
      angmsdac: '\u29AA',
      angmsdad: '\u29AB',
      angmsdae: '\u29AC',
      angmsdaf: '\u29AD',
      angmsdag: '\u29AE',
      angmsdah: '\u29AF',
      angrt: '\u221F',
      angrtvb: '\u22BE',
      angrtvbd: '\u299D',
      angsph: '\u2222',
      angst: '\u00C5',
      angzarr: '\u237C',
      aogon: '\u0105',
      aopf: '\uD835\uDD52',
      ap: '\u2248',
      apE: '\u2A70',
      apacir: '\u2A6F',
      ape: '\u224A',
      apid: '\u224B',
      apos: '\u0027',
      approx: '\u2248',
      approxeq: '\u224A',
      aring: '\u00E5',
      ascr: '\uD835\uDCB6',
      ast: '\u002A',
      asymp: '\u2248',
      asympeq: '\u224D',
      atilde: '\u00E3',
      auml: '\u00E4',
      awconint: '\u2233',
      awint: '\u2A11',
      bNot: '\u2AED',
      backcong: '\u224C',
      backepsilon: '\u03F6',
      backprime: '\u2035',
      backsim: '\u223D',
      backsimeq: '\u22CD',
      barvee: '\u22BD',
      barwed: '\u2305',
      barwedge: '\u2305',
      bbrk: '\u23B5',
      bbrktbrk: '\u23B6',
      bcong: '\u224C',
      bcy: '\u0431',
      bdquo: '\u201E',
      becaus: '\u2235',
      because: '\u2235',
      bemptyv: '\u29B0',
      bepsi: '\u03F6',
      bernou: '\u212C',
      beta: '\u03B2',
      beth: '\u2136',
      between: '\u226C',
      bfr: '\uD835\uDD1F',
      bigcap: '\u22C2',
      bigcirc: '\u25EF',
      bigcup: '\u22C3',
      bigodot: '\u2A00',
      bigoplus: '\u2A01',
      bigotimes: '\u2A02',
      bigsqcup: '\u2A06',
      bigstar: '\u2605',
      bigtriangledown: '\u25BD',
      bigtriangleup: '\u25B3',
      biguplus: '\u2A04',
      bigvee: '\u22C1',
      bigwedge: '\u22C0',
      bkarow: '\u290D',
      blacklozenge: '\u29EB',
      blacksquare: '\u25AA',
      blacktriangle: '\u25B4',
      blacktriangledown: '\u25BE',
      blacktriangleleft: '\u25C2',
      blacktriangleright: '\u25B8',
      blank: '\u2423',
      blk12: '\u2592',
      blk14: '\u2591',
      blk34: '\u2593',
      block: '\u2588',
      bne: '\u003D\u20E5',
      bnequiv: '\u2261\u20E5',
      bnot: '\u2310',
      bopf: '\uD835\uDD53',
      bot: '\u22A5',
      bottom: '\u22A5',
      bowtie: '\u22C8',
      boxDL: '\u2557',
      boxDR: '\u2554',
      boxDl: '\u2556',
      boxDr: '\u2553',
      boxH: '\u2550',
      boxHD: '\u2566',
      boxHU: '\u2569',
      boxHd: '\u2564',
      boxHu: '\u2567',
      boxUL: '\u255D',
      boxUR: '\u255A',
      boxUl: '\u255C',
      boxUr: '\u2559',
      boxV: '\u2551',
      boxVH: '\u256C',
      boxVL: '\u2563',
      boxVR: '\u2560',
      boxVh: '\u256B',
      boxVl: '\u2562',
      boxVr: '\u255F',
      boxbox: '\u29C9',
      boxdL: '\u2555',
      boxdR: '\u2552',
      boxdl: '\u2510',
      boxdr: '\u250C',
      boxh: '\u2500',
      boxhD: '\u2565',
      boxhU: '\u2568',
      boxhd: '\u252C',
      boxhu: '\u2534',
      boxminus: '\u229F',
      boxplus: '\u229E',
      boxtimes: '\u22A0',
      boxuL: '\u255B',
      boxuR: '\u2558',
      boxul: '\u2518',
      boxur: '\u2514',
      boxv: '\u2502',
      boxvH: '\u256A',
      boxvL: '\u2561',
      boxvR: '\u255E',
      boxvh: '\u253C',
      boxvl: '\u2524',
      boxvr: '\u251C',
      bprime: '\u2035',
      breve: '\u02D8',
      brvbar: '\u00A6',
      bscr: '\uD835\uDCB7',
      bsemi: '\u204F',
      bsim: '\u223D',
      bsime: '\u22CD',
      bsol: '\u005C',
      bsolb: '\u29C5',
      bsolhsub: '\u27C8',
      bull: '\u2022',
      bullet: '\u2022',
      bump: '\u224E',
      bumpE: '\u2AAE',
      bumpe: '\u224F',
      bumpeq: '\u224F',
      cacute: '\u0107',
      cap: '\u2229',
      capand: '\u2A44',
      capbrcup: '\u2A49',
      capcap: '\u2A4B',
      capcup: '\u2A47',
      capdot: '\u2A40',
      caps: '\u2229\uFE00',
      caret: '\u2041',
      caron: '\u02C7',
      ccaps: '\u2A4D',
      ccaron: '\u010D',
      ccedil: '\u00E7',
      ccirc: '\u0109',
      ccups: '\u2A4C',
      ccupssm: '\u2A50',
      cdot: '\u010B',
      cedil: '\u00B8',
      cemptyv: '\u29B2',
      cent: '\u00A2',
      centerdot: '\u00B7',
      cfr: '\uD835\uDD20',
      chcy: '\u0447',
      check: '\u2713',
      checkmark: '\u2713',
      chi: '\u03C7',
      cir: '\u25CB',
      cirE: '\u29C3',
      circ: '\u02C6',
      circeq: '\u2257',
      circlearrowleft: '\u21BA',
      circlearrowright: '\u21BB',
      circledR: '\u00AE',
      circledS: '\u24C8',
      circledast: '\u229B',
      circledcirc: '\u229A',
      circleddash: '\u229D',
      cire: '\u2257',
      cirfnint: '\u2A10',
      cirmid: '\u2AEF',
      cirscir: '\u29C2',
      clubs: '\u2663',
      clubsuit: '\u2663',
      colon: '\u003A',
      colone: '\u2254',
      coloneq: '\u2254',
      comma: '\u002C',
      commat: '\u0040',
      comp: '\u2201',
      compfn: '\u2218',
      complement: '\u2201',
      complexes: '\u2102',
      cong: '\u2245',
      congdot: '\u2A6D',
      conint: '\u222E',
      copf: '\uD835\uDD54',
      coprod: '\u2210',
      copy: '\u00A9',
      copysr: '\u2117',
      crarr: '\u21B5',
      cross: '\u2717',
      cscr: '\uD835\uDCB8',
      csub: '\u2ACF',
      csube: '\u2AD1',
      csup: '\u2AD0',
      csupe: '\u2AD2',
      ctdot: '\u22EF',
      cudarrl: '\u2938',
      cudarrr: '\u2935',
      cuepr: '\u22DE',
      cuesc: '\u22DF',
      cularr: '\u21B6',
      cularrp: '\u293D',
      cup: '\u222A',
      cupbrcap: '\u2A48',
      cupcap: '\u2A46',
      cupcup: '\u2A4A',
      cupdot: '\u228D',
      cupor: '\u2A45',
      cups: '\u222A\uFE00',
      curarr: '\u21B7',
      curarrm: '\u293C',
      curlyeqprec: '\u22DE',
      curlyeqsucc: '\u22DF',
      curlyvee: '\u22CE',
      curlywedge: '\u22CF',
      curren: '\u00A4',
      curvearrowleft: '\u21B6',
      curvearrowright: '\u21B7',
      cuvee: '\u22CE',
      cuwed: '\u22CF',
      cwconint: '\u2232',
      cwint: '\u2231',
      cylcty: '\u232D',
      dArr: '\u21D3',
      dHar: '\u2965',
      dagger: '\u2020',
      daleth: '\u2138',
      darr: '\u2193',
      dash: '\u2010',
      dashv: '\u22A3',
      dbkarow: '\u290F',
      dblac: '\u02DD',
      dcaron: '\u010F',
      dcy: '\u0434',
      dd: '\u2146',
      ddagger: '\u2021',
      ddarr: '\u21CA',
      ddotseq: '\u2A77',
      deg: '\u00B0',
      delta: '\u03B4',
      demptyv: '\u29B1',
      dfisht: '\u297F',
      dfr: '\uD835\uDD21',
      dharl: '\u21C3',
      dharr: '\u21C2',
      diam: '\u22C4',
      diamond: '\u22C4',
      diamondsuit: '\u2666',
      diams: '\u2666',
      die: '\u00A8',
      digamma: '\u03DD',
      disin: '\u22F2',
      div: '\u00F7',
      divide: '\u00F7',
      divideontimes: '\u22C7',
      divonx: '\u22C7',
      djcy: '\u0452',
      dlcorn: '\u231E',
      dlcrop: '\u230D',
      dollar: '\u0024',
      dopf: '\uD835\uDD55',
      dot: '\u02D9',
      doteq: '\u2250',
      doteqdot: '\u2251',
      dotminus: '\u2238',
      dotplus: '\u2214',
      dotsquare: '\u22A1',
      doublebarwedge: '\u2306',
      downarrow: '\u2193',
      downdownarrows: '\u21CA',
      downharpoonleft: '\u21C3',
      downharpoonright: '\u21C2',
      drbkarow: '\u2910',
      drcorn: '\u231F',
      drcrop: '\u230C',
      dscr: '\uD835\uDCB9',
      dscy: '\u0455',
      dsol: '\u29F6',
      dstrok: '\u0111',
      dtdot: '\u22F1',
      dtri: '\u25BF',
      dtrif: '\u25BE',
      duarr: '\u21F5',
      duhar: '\u296F',
      dwangle: '\u29A6',
      dzcy: '\u045F',
      dzigrarr: '\u27FF',
      eDDot: '\u2A77',
      eDot: '\u2251',
      eacute: '\u00E9',
      easter: '\u2A6E',
      ecaron: '\u011B',
      ecir: '\u2256',
      ecirc: '\u00EA',
      ecolon: '\u2255',
      ecy: '\u044D',
      edot: '\u0117',
      ee: '\u2147',
      efDot: '\u2252',
      efr: '\uD835\uDD22',
      eg: '\u2A9A',
      egrave: '\u00E8',
      egs: '\u2A96',
      egsdot: '\u2A98',
      el: '\u2A99',
      elinters: '\u23E7',
      ell: '\u2113',
      els: '\u2A95',
      elsdot: '\u2A97',
      emacr: '\u0113',
      empty: '\u2205',
      emptyset: '\u2205',
      emptyv: '\u2205',
      emsp13: '\u2004',
      emsp14: '\u2005',
      emsp: '\u2003',
      eng: '\u014B',
      ensp: '\u2002',
      eogon: '\u0119',
      eopf: '\uD835\uDD56',
      epar: '\u22D5',
      eparsl: '\u29E3',
      eplus: '\u2A71',
      epsi: '\u03B5',
      epsilon: '\u03B5',
      epsiv: '\u03F5',
      eqcirc: '\u2256',
      eqcolon: '\u2255',
      eqsim: '\u2242',
      eqslantgtr: '\u2A96',
      eqslantless: '\u2A95',
      equals: '\u003D',
      equest: '\u225F',
      equiv: '\u2261',
      equivDD: '\u2A78',
      eqvparsl: '\u29E5',
      erDot: '\u2253',
      erarr: '\u2971',
      escr: '\u212F',
      esdot: '\u2250',
      esim: '\u2242',
      eta: '\u03B7',
      eth: '\u00F0',
      euml: '\u00EB',
      euro: '\u20AC',
      excl: '\u0021',
      exist: '\u2203',
      expectation: '\u2130',
      exponentiale: '\u2147',
      fallingdotseq: '\u2252',
      fcy: '\u0444',
      female: '\u2640',
      ffilig: '\uFB03',
      fflig: '\uFB00',
      ffllig: '\uFB04',
      ffr: '\uD835\uDD23',
      filig: '\uFB01',
      fjlig: '\u0066\u006A',
      flat: '\u266D',
      fllig: '\uFB02',
      fltns: '\u25B1',
      fnof: '\u0192',
      fopf: '\uD835\uDD57',
      forall: '\u2200',
      fork: '\u22D4',
      forkv: '\u2AD9',
      fpartint: '\u2A0D',
      frac12: '\u00BD',
      frac13: '\u2153',
      frac14: '\u00BC',
      frac15: '\u2155',
      frac16: '\u2159',
      frac18: '\u215B',
      frac23: '\u2154',
      frac25: '\u2156',
      frac34: '\u00BE',
      frac35: '\u2157',
      frac38: '\u215C',
      frac45: '\u2158',
      frac56: '\u215A',
      frac58: '\u215D',
      frac78: '\u215E',
      frasl: '\u2044',
      frown: '\u2322',
      fscr: '\uD835\uDCBB',
      gE: '\u2267',
      gEl: '\u2A8C',
      gacute: '\u01F5',
      gamma: '\u03B3',
      gammad: '\u03DD',
      gap: '\u2A86',
      gbreve: '\u011F',
      gcirc: '\u011D',
      gcy: '\u0433',
      gdot: '\u0121',
      ge: '\u2265',
      gel: '\u22DB',
      geq: '\u2265',
      geqq: '\u2267',
      geqslant: '\u2A7E',
      ges: '\u2A7E',
      gescc: '\u2AA9',
      gesdot: '\u2A80',
      gesdoto: '\u2A82',
      gesdotol: '\u2A84',
      gesl: '\u22DB\uFE00',
      gesles: '\u2A94',
      gfr: '\uD835\uDD24',
      gg: '\u226B',
      ggg: '\u22D9',
      gimel: '\u2137',
      gjcy: '\u0453',
      gl: '\u2277',
      glE: '\u2A92',
      gla: '\u2AA5',
      glj: '\u2AA4',
      gnE: '\u2269',
      gnap: '\u2A8A',
      gnapprox: '\u2A8A',
      gne: '\u2A88',
      gneq: '\u2A88',
      gneqq: '\u2269',
      gnsim: '\u22E7',
      gopf: '\uD835\uDD58',
      grave: '\u0060',
      gscr: '\u210A',
      gsim: '\u2273',
      gsime: '\u2A8E',
      gsiml: '\u2A90',
      gt: '\u003E',
      gtcc: '\u2AA7',
      gtcir: '\u2A7A',
      gtdot: '\u22D7',
      gtlPar: '\u2995',
      gtquest: '\u2A7C',
      gtrapprox: '\u2A86',
      gtrarr: '\u2978',
      gtrdot: '\u22D7',
      gtreqless: '\u22DB',
      gtreqqless: '\u2A8C',
      gtrless: '\u2277',
      gtrsim: '\u2273',
      gvertneqq: '\u2269\uFE00',
      gvnE: '\u2269\uFE00',
      hArr: '\u21D4',
      hairsp: '\u200A',
      half: '\u00BD',
      hamilt: '\u210B',
      hardcy: '\u044A',
      harr: '\u2194',
      harrcir: '\u2948',
      harrw: '\u21AD',
      hbar: '\u210F',
      hcirc: '\u0125',
      hearts: '\u2665',
      heartsuit: '\u2665',
      hellip: '\u2026',
      hercon: '\u22B9',
      hfr: '\uD835\uDD25',
      hksearow: '\u2925',
      hkswarow: '\u2926',
      hoarr: '\u21FF',
      homtht: '\u223B',
      hookleftarrow: '\u21A9',
      hookrightarrow: '\u21AA',
      hopf: '\uD835\uDD59',
      horbar: '\u2015',
      hscr: '\uD835\uDCBD',
      hslash: '\u210F',
      hstrok: '\u0127',
      hybull: '\u2043',
      hyphen: '\u2010',
      iacute: '\u00ED',
      ic: '\u2063',
      icirc: '\u00EE',
      icy: '\u0438',
      iecy: '\u0435',
      iexcl: '\u00A1',
      iff: '\u21D4',
      ifr: '\uD835\uDD26',
      igrave: '\u00EC',
      ii: '\u2148',
      iiiint: '\u2A0C',
      iiint: '\u222D',
      iinfin: '\u29DC',
      iiota: '\u2129',
      ijlig: '\u0133',
      imacr: '\u012B',
      image: '\u2111',
      imagline: '\u2110',
      imagpart: '\u2111',
      imath: '\u0131',
      imof: '\u22B7',
      imped: '\u01B5',
      in: '\u2208',
      incare: '\u2105',
      infin: '\u221E',
      infintie: '\u29DD',
      inodot: '\u0131',
      int: '\u222B',
      intcal: '\u22BA',
      integers: '\u2124',
      intercal: '\u22BA',
      intlarhk: '\u2A17',
      intprod: '\u2A3C',
      iocy: '\u0451',
      iogon: '\u012F',
      iopf: '\uD835\uDD5A',
      iota: '\u03B9',
      iprod: '\u2A3C',
      iquest: '\u00BF',
      iscr: '\uD835\uDCBE',
      isin: '\u2208',
      isinE: '\u22F9',
      isindot: '\u22F5',
      isins: '\u22F4',
      isinsv: '\u22F3',
      isinv: '\u2208',
      it: '\u2062',
      itilde: '\u0129',
      iukcy: '\u0456',
      iuml: '\u00EF',
      jcirc: '\u0135',
      jcy: '\u0439',
      jfr: '\uD835\uDD27',
      jmath: '\u0237',
      jopf: '\uD835\uDD5B',
      jscr: '\uD835\uDCBF',
      jsercy: '\u0458',
      jukcy: '\u0454',
      kappa: '\u03BA',
      kappav: '\u03F0',
      kcedil: '\u0137',
      kcy: '\u043A',
      kfr: '\uD835\uDD28',
      kgreen: '\u0138',
      khcy: '\u0445',
      kjcy: '\u045C',
      kopf: '\uD835\uDD5C',
      kscr: '\uD835\uDCC0',
      lAarr: '\u21DA',
      lArr: '\u21D0',
      lAtail: '\u291B',
      lBarr: '\u290E',
      lE: '\u2266',
      lEg: '\u2A8B',
      lHar: '\u2962',
      lacute: '\u013A',
      laemptyv: '\u29B4',
      lagran: '\u2112',
      lambda: '\u03BB',
      lang: '\u27E8',
      langd: '\u2991',
      langle: '\u27E8',
      lap: '\u2A85',
      laquo: '\u00AB',
      larr: '\u2190',
      larrb: '\u21E4',
      larrbfs: '\u291F',
      larrfs: '\u291D',
      larrhk: '\u21A9',
      larrlp: '\u21AB',
      larrpl: '\u2939',
      larrsim: '\u2973',
      larrtl: '\u21A2',
      lat: '\u2AAB',
      latail: '\u2919',
      late: '\u2AAD',
      lates: '\u2AAD\uFE00',
      lbarr: '\u290C',
      lbbrk: '\u2772',
      lbrace: '\u007B',
      lbrack: '\u005B',
      lbrke: '\u298B',
      lbrksld: '\u298F',
      lbrkslu: '\u298D',
      lcaron: '\u013E',
      lcedil: '\u013C',
      lceil: '\u2308',
      lcub: '\u007B',
      lcy: '\u043B',
      ldca: '\u2936',
      ldquo: '\u201C',
      ldquor: '\u201E',
      ldrdhar: '\u2967',
      ldrushar: '\u294B',
      ldsh: '\u21B2',
      le: '\u2264',
      leftarrow: '\u2190',
      leftarrowtail: '\u21A2',
      leftharpoondown: '\u21BD',
      leftharpoonup: '\u21BC',
      leftleftarrows: '\u21C7',
      leftrightarrow: '\u2194',
      leftrightarrows: '\u21C6',
      leftrightharpoons: '\u21CB',
      leftrightsquigarrow: '\u21AD',
      leftthreetimes: '\u22CB',
      leg: '\u22DA',
      leq: '\u2264',
      leqq: '\u2266',
      leqslant: '\u2A7D',
      les: '\u2A7D',
      lescc: '\u2AA8',
      lesdot: '\u2A7F',
      lesdoto: '\u2A81',
      lesdotor: '\u2A83',
      lesg: '\u22DA\uFE00',
      lesges: '\u2A93',
      lessapprox: '\u2A85',
      lessdot: '\u22D6',
      lesseqgtr: '\u22DA',
      lesseqqgtr: '\u2A8B',
      lessgtr: '\u2276',
      lesssim: '\u2272',
      lfisht: '\u297C',
      lfloor: '\u230A',
      lfr: '\uD835\uDD29',
      lg: '\u2276',
      lgE: '\u2A91',
      lhard: '\u21BD',
      lharu: '\u21BC',
      lharul: '\u296A',
      lhblk: '\u2584',
      ljcy: '\u0459',
      ll: '\u226A',
      llarr: '\u21C7',
      llcorner: '\u231E',
      llhard: '\u296B',
      lltri: '\u25FA',
      lmidot: '\u0140',
      lmoust: '\u23B0',
      lmoustache: '\u23B0',
      lnE: '\u2268',
      lnap: '\u2A89',
      lnapprox: '\u2A89',
      lne: '\u2A87',
      lneq: '\u2A87',
      lneqq: '\u2268',
      lnsim: '\u22E6',
      loang: '\u27EC',
      loarr: '\u21FD',
      lobrk: '\u27E6',
      longleftarrow: '\u27F5',
      longleftrightarrow: '\u27F7',
      longmapsto: '\u27FC',
      longrightarrow: '\u27F6',
      looparrowleft: '\u21AB',
      looparrowright: '\u21AC',
      lopar: '\u2985',
      lopf: '\uD835\uDD5D',
      loplus: '\u2A2D',
      lotimes: '\u2A34',
      lowast: '\u2217',
      lowbar: '\u005F',
      loz: '\u25CA',
      lozenge: '\u25CA',
      lozf: '\u29EB',
      lpar: '\u0028',
      lparlt: '\u2993',
      lrarr: '\u21C6',
      lrcorner: '\u231F',
      lrhar: '\u21CB',
      lrhard: '\u296D',
      lrm: '\u200E',
      lrtri: '\u22BF',
      lsaquo: '\u2039',
      lscr: '\uD835\uDCC1',
      lsh: '\u21B0',
      lsim: '\u2272',
      lsime: '\u2A8D',
      lsimg: '\u2A8F',
      lsqb: '\u005B',
      lsquo: '\u2018',
      lsquor: '\u201A',
      lstrok: '\u0142',
      lt: '\u003C',
      ltcc: '\u2AA6',
      ltcir: '\u2A79',
      ltdot: '\u22D6',
      lthree: '\u22CB',
      ltimes: '\u22C9',
      ltlarr: '\u2976',
      ltquest: '\u2A7B',
      ltrPar: '\u2996',
      ltri: '\u25C3',
      ltrie: '\u22B4',
      ltrif: '\u25C2',
      lurdshar: '\u294A',
      luruhar: '\u2966',
      lvertneqq: '\u2268\uFE00',
      lvnE: '\u2268\uFE00',
      mDDot: '\u223A',
      macr: '\u00AF',
      male: '\u2642',
      malt: '\u2720',
      maltese: '\u2720',
      map: '\u21A6',
      mapsto: '\u21A6',
      mapstodown: '\u21A7',
      mapstoleft: '\u21A4',
      mapstoup: '\u21A5',
      marker: '\u25AE',
      mcomma: '\u2A29',
      mcy: '\u043C',
      mdash: '\u2014',
      measuredangle: '\u2221',
      mfr: '\uD835\uDD2A',
      mho: '\u2127',
      micro: '\u00B5',
      mid: '\u2223',
      midast: '\u002A',
      midcir: '\u2AF0',
      middot: '\u00B7',
      minus: '\u2212',
      minusb: '\u229F',
      minusd: '\u2238',
      minusdu: '\u2A2A',
      mlcp: '\u2ADB',
      mldr: '\u2026',
      mnplus: '\u2213',
      models: '\u22A7',
      mopf: '\uD835\uDD5E',
      mp: '\u2213',
      mscr: '\uD835\uDCC2',
      mstpos: '\u223E',
      mu: '\u03BC',
      multimap: '\u22B8',
      mumap: '\u22B8',
      nGg: '\u22D9\u0338',
      nGt: '\u226B\u20D2',
      nGtv: '\u226B\u0338',
      nLeftarrow: '\u21CD',
      nLeftrightarrow: '\u21CE',
      nLl: '\u22D8\u0338',
      nLt: '\u226A\u20D2',
      nLtv: '\u226A\u0338',
      nRightarrow: '\u21CF',
      nVDash: '\u22AF',
      nVdash: '\u22AE',
      nabla: '\u2207',
      nacute: '\u0144',
      nang: '\u2220\u20D2',
      nap: '\u2249',
      napE: '\u2A70\u0338',
      napid: '\u224B\u0338',
      napos: '\u0149',
      napprox: '\u2249',
      natur: '\u266E',
      natural: '\u266E',
      naturals: '\u2115',
      nbsp: '\u00A0',
      nbump: '\u224E\u0338',
      nbumpe: '\u224F\u0338',
      ncap: '\u2A43',
      ncaron: '\u0148',
      ncedil: '\u0146',
      ncong: '\u2247',
      ncongdot: '\u2A6D\u0338',
      ncup: '\u2A42',
      ncy: '\u043D',
      ndash: '\u2013',
      ne: '\u2260',
      neArr: '\u21D7',
      nearhk: '\u2924',
      nearr: '\u2197',
      nearrow: '\u2197',
      nedot: '\u2250\u0338',
      nequiv: '\u2262',
      nesear: '\u2928',
      nesim: '\u2242\u0338',
      nexist: '\u2204',
      nexists: '\u2204',
      nfr: '\uD835\uDD2B',
      ngE: '\u2267\u0338',
      nge: '\u2271',
      ngeq: '\u2271',
      ngeqq: '\u2267\u0338',
      ngeqslant: '\u2A7E\u0338',
      nges: '\u2A7E\u0338',
      ngsim: '\u2275',
      ngt: '\u226F',
      ngtr: '\u226F',
      nhArr: '\u21CE',
      nharr: '\u21AE',
      nhpar: '\u2AF2',
      ni: '\u220B',
      nis: '\u22FC',
      nisd: '\u22FA',
      niv: '\u220B',
      njcy: '\u045A',
      nlArr: '\u21CD',
      nlE: '\u2266\u0338',
      nlarr: '\u219A',
      nldr: '\u2025',
      nle: '\u2270',
      nleftarrow: '\u219A',
      nleftrightarrow: '\u21AE',
      nleq: '\u2270',
      nleqq: '\u2266\u0338',
      nleqslant: '\u2A7D\u0338',
      nles: '\u2A7D\u0338',
      nless: '\u226E',
      nlsim: '\u2274',
      nlt: '\u226E',
      nltri: '\u22EA',
      nltrie: '\u22EC',
      nmid: '\u2224',
      nopf: '\uD835\uDD5F',
      not: '\u00AC',
      notin: '\u2209',
      notinE: '\u22F9\u0338',
      notindot: '\u22F5\u0338',
      notinva: '\u2209',
      notinvb: '\u22F7',
      notinvc: '\u22F6',
      notni: '\u220C',
      notniva: '\u220C',
      notnivb: '\u22FE',
      notnivc: '\u22FD',
      npar: '\u2226',
      nparallel: '\u2226',
      nparsl: '\u2AFD\u20E5',
      npart: '\u2202\u0338',
      npolint: '\u2A14',
      npr: '\u2280',
      nprcue: '\u22E0',
      npre: '\u2AAF\u0338',
      nprec: '\u2280',
      npreceq: '\u2AAF\u0338',
      nrArr: '\u21CF',
      nrarr: '\u219B',
      nrarrc: '\u2933\u0338',
      nrarrw: '\u219D\u0338',
      nrightarrow: '\u219B',
      nrtri: '\u22EB',
      nrtrie: '\u22ED',
      nsc: '\u2281',
      nsccue: '\u22E1',
      nsce: '\u2AB0\u0338',
      nscr: '\uD835\uDCC3',
      nshortmid: '\u2224',
      nshortparallel: '\u2226',
      nsim: '\u2241',
      nsime: '\u2244',
      nsimeq: '\u2244',
      nsmid: '\u2224',
      nspar: '\u2226',
      nsqsube: '\u22E2',
      nsqsupe: '\u22E3',
      nsub: '\u2284',
      nsubE: '\u2AC5\u0338',
      nsube: '\u2288',
      nsubset: '\u2282\u20D2',
      nsubseteq: '\u2288',
      nsubseteqq: '\u2AC5\u0338',
      nsucc: '\u2281',
      nsucceq: '\u2AB0\u0338',
      nsup: '\u2285',
      nsupE: '\u2AC6\u0338',
      nsupe: '\u2289',
      nsupset: '\u2283\u20D2',
      nsupseteq: '\u2289',
      nsupseteqq: '\u2AC6\u0338',
      ntgl: '\u2279',
      ntilde: '\u00F1',
      ntlg: '\u2278',
      ntriangleleft: '\u22EA',
      ntrianglelefteq: '\u22EC',
      ntriangleright: '\u22EB',
      ntrianglerighteq: '\u22ED',
      nu: '\u03BD',
      num: '\u0023',
      numero: '\u2116',
      numsp: '\u2007',
      nvDash: '\u22AD',
      nvHarr: '\u2904',
      nvap: '\u224D\u20D2',
      nvdash: '\u22AC',
      nvge: '\u2265\u20D2',
      nvgt: '\u003E\u20D2',
      nvinfin: '\u29DE',
      nvlArr: '\u2902',
      nvle: '\u2264\u20D2',
      nvlt: '\u003C\u20D2',
      nvltrie: '\u22B4\u20D2',
      nvrArr: '\u2903',
      nvrtrie: '\u22B5\u20D2',
      nvsim: '\u223C\u20D2',
      nwArr: '\u21D6',
      nwarhk: '\u2923',
      nwarr: '\u2196',
      nwarrow: '\u2196',
      nwnear: '\u2927',
      oS: '\u24C8',
      oacute: '\u00F3',
      oast: '\u229B',
      ocir: '\u229A',
      ocirc: '\u00F4',
      ocy: '\u043E',
      odash: '\u229D',
      odblac: '\u0151',
      odiv: '\u2A38',
      odot: '\u2299',
      odsold: '\u29BC',
      oelig: '\u0153',
      ofcir: '\u29BF',
      ofr: '\uD835\uDD2C',
      ogon: '\u02DB',
      ograve: '\u00F2',
      ogt: '\u29C1',
      ohbar: '\u29B5',
      ohm: '\u03A9',
      oint: '\u222E',
      olarr: '\u21BA',
      olcir: '\u29BE',
      olcross: '\u29BB',
      oline: '\u203E',
      olt: '\u29C0',
      omacr: '\u014D',
      omega: '\u03C9',
      omicron: '\u03BF',
      omid: '\u29B6',
      ominus: '\u2296',
      oopf: '\uD835\uDD60',
      opar: '\u29B7',
      operp: '\u29B9',
      oplus: '\u2295',
      or: '\u2228',
      orarr: '\u21BB',
      ord: '\u2A5D',
      order: '\u2134',
      orderof: '\u2134',
      ordf: '\u00AA',
      ordm: '\u00BA',
      origof: '\u22B6',
      oror: '\u2A56',
      orslope: '\u2A57',
      orv: '\u2A5B',
      oscr: '\u2134',
      oslash: '\u00F8',
      osol: '\u2298',
      otilde: '\u00F5',
      otimes: '\u2297',
      otimesas: '\u2A36',
      ouml: '\u00F6',
      ovbar: '\u233D',
      par: '\u2225',
      para: '\u00B6',
      parallel: '\u2225',
      parsim: '\u2AF3',
      parsl: '\u2AFD',
      part: '\u2202',
      pcy: '\u043F',
      percnt: '\u0025',
      period: '\u002E',
      permil: '\u2030',
      perp: '\u22A5',
      pertenk: '\u2031',
      pfr: '\uD835\uDD2D',
      phi: '\u03C6',
      phiv: '\u03D5',
      phmmat: '\u2133',
      phone: '\u260E',
      pi: '\u03C0',
      pitchfork: '\u22D4',
      piv: '\u03D6',
      planck: '\u210F',
      planckh: '\u210E',
      plankv: '\u210F',
      plus: '\u002B',
      plusacir: '\u2A23',
      plusb: '\u229E',
      pluscir: '\u2A22',
      plusdo: '\u2214',
      plusdu: '\u2A25',
      pluse: '\u2A72',
      plusmn: '\u00B1',
      plussim: '\u2A26',
      plustwo: '\u2A27',
      pm: '\u00B1',
      pointint: '\u2A15',
      popf: '\uD835\uDD61',
      pound: '\u00A3',
      pr: '\u227A',
      prE: '\u2AB3',
      prap: '\u2AB7',
      prcue: '\u227C',
      pre: '\u2AAF',
      prec: '\u227A',
      precapprox: '\u2AB7',
      preccurlyeq: '\u227C',
      preceq: '\u2AAF',
      precnapprox: '\u2AB9',
      precneqq: '\u2AB5',
      precnsim: '\u22E8',
      precsim: '\u227E',
      prime: '\u2032',
      primes: '\u2119',
      prnE: '\u2AB5',
      prnap: '\u2AB9',
      prnsim: '\u22E8',
      prod: '\u220F',
      profalar: '\u232E',
      profline: '\u2312',
      profsurf: '\u2313',
      prop: '\u221D',
      propto: '\u221D',
      prsim: '\u227E',
      prurel: '\u22B0',
      pscr: '\uD835\uDCC5',
      psi: '\u03C8',
      puncsp: '\u2008',
      qfr: '\uD835\uDD2E',
      qint: '\u2A0C',
      qopf: '\uD835\uDD62',
      qprime: '\u2057',
      qscr: '\uD835\uDCC6',
      quaternions: '\u210D',
      quatint: '\u2A16',
      quest: '\u003F',
      questeq: '\u225F',
      quot: '\u0022',
      rAarr: '\u21DB',
      rArr: '\u21D2',
      rAtail: '\u291C',
      rBarr: '\u290F',
      rHar: '\u2964',
      race: '\u223D\u0331',
      racute: '\u0155',
      radic: '\u221A',
      raemptyv: '\u29B3',
      rang: '\u27E9',
      rangd: '\u2992',
      range: '\u29A5',
      rangle: '\u27E9',
      raquo: '\u00BB',
      rarr: '\u2192',
      rarrap: '\u2975',
      rarrb: '\u21E5',
      rarrbfs: '\u2920',
      rarrc: '\u2933',
      rarrfs: '\u291E',
      rarrhk: '\u21AA',
      rarrlp: '\u21AC',
      rarrpl: '\u2945',
      rarrsim: '\u2974',
      rarrtl: '\u21A3',
      rarrw: '\u219D',
      ratail: '\u291A',
      ratio: '\u2236',
      rationals: '\u211A',
      rbarr: '\u290D',
      rbbrk: '\u2773',
      rbrace: '\u007D',
      rbrack: '\u005D',
      rbrke: '\u298C',
      rbrksld: '\u298E',
      rbrkslu: '\u2990',
      rcaron: '\u0159',
      rcedil: '\u0157',
      rceil: '\u2309',
      rcub: '\u007D',
      rcy: '\u0440',
      rdca: '\u2937',
      rdldhar: '\u2969',
      rdquo: '\u201D',
      rdquor: '\u201D',
      rdsh: '\u21B3',
      real: '\u211C',
      realine: '\u211B',
      realpart: '\u211C',
      reals: '\u211D',
      rect: '\u25AD',
      reg: '\u00AE',
      rfisht: '\u297D',
      rfloor: '\u230B',
      rfr: '\uD835\uDD2F',
      rhard: '\u21C1',
      rharu: '\u21C0',
      rharul: '\u296C',
      rho: '\u03C1',
      rhov: '\u03F1',
      rightarrow: '\u2192',
      rightarrowtail: '\u21A3',
      rightharpoondown: '\u21C1',
      rightharpoonup: '\u21C0',
      rightleftarrows: '\u21C4',
      rightleftharpoons: '\u21CC',
      rightrightarrows: '\u21C9',
      rightsquigarrow: '\u219D',
      rightthreetimes: '\u22CC',
      ring: '\u02DA',
      risingdotseq: '\u2253',
      rlarr: '\u21C4',
      rlhar: '\u21CC',
      rlm: '\u200F',
      rmoust: '\u23B1',
      rmoustache: '\u23B1',
      rnmid: '\u2AEE',
      roang: '\u27ED',
      roarr: '\u21FE',
      robrk: '\u27E7',
      ropar: '\u2986',
      ropf: '\uD835\uDD63',
      roplus: '\u2A2E',
      rotimes: '\u2A35',
      rpar: '\u0029',
      rpargt: '\u2994',
      rppolint: '\u2A12',
      rrarr: '\u21C9',
      rsaquo: '\u203A',
      rscr: '\uD835\uDCC7',
      rsh: '\u21B1',
      rsqb: '\u005D',
      rsquo: '\u2019',
      rsquor: '\u2019',
      rthree: '\u22CC',
      rtimes: '\u22CA',
      rtri: '\u25B9',
      rtrie: '\u22B5',
      rtrif: '\u25B8',
      rtriltri: '\u29CE',
      ruluhar: '\u2968',
      rx: '\u211E',
      sacute: '\u015B',
      sbquo: '\u201A',
      sc: '\u227B',
      scE: '\u2AB4',
      scap: '\u2AB8',
      scaron: '\u0161',
      sccue: '\u227D',
      sce: '\u2AB0',
      scedil: '\u015F',
      scirc: '\u015D',
      scnE: '\u2AB6',
      scnap: '\u2ABA',
      scnsim: '\u22E9',
      scpolint: '\u2A13',
      scsim: '\u227F',
      scy: '\u0441',
      sdot: '\u22C5',
      sdotb: '\u22A1',
      sdote: '\u2A66',
      seArr: '\u21D8',
      searhk: '\u2925',
      searr: '\u2198',
      searrow: '\u2198',
      sect: '\u00A7',
      semi: '\u003B',
      seswar: '\u2929',
      setminus: '\u2216',
      setmn: '\u2216',
      sext: '\u2736',
      sfr: '\uD835\uDD30',
      sfrown: '\u2322',
      sharp: '\u266F',
      shchcy: '\u0449',
      shcy: '\u0448',
      shortmid: '\u2223',
      shortparallel: '\u2225',
      shy: '\u00AD',
      sigma: '\u03C3',
      sigmaf: '\u03C2',
      sigmav: '\u03C2',
      sim: '\u223C',
      simdot: '\u2A6A',
      sime: '\u2243',
      simeq: '\u2243',
      simg: '\u2A9E',
      simgE: '\u2AA0',
      siml: '\u2A9D',
      simlE: '\u2A9F',
      simne: '\u2246',
      simplus: '\u2A24',
      simrarr: '\u2972',
      slarr: '\u2190',
      smallsetminus: '\u2216',
      smashp: '\u2A33',
      smeparsl: '\u29E4',
      smid: '\u2223',
      smile: '\u2323',
      smt: '\u2AAA',
      smte: '\u2AAC',
      smtes: '\u2AAC\uFE00',
      softcy: '\u044C',
      sol: '\u002F',
      solb: '\u29C4',
      solbar: '\u233F',
      sopf: '\uD835\uDD64',
      spades: '\u2660',
      spadesuit: '\u2660',
      spar: '\u2225',
      sqcap: '\u2293',
      sqcaps: '\u2293\uFE00',
      sqcup: '\u2294',
      sqcups: '\u2294\uFE00',
      sqsub: '\u228F',
      sqsube: '\u2291',
      sqsubset: '\u228F',
      sqsubseteq: '\u2291',
      sqsup: '\u2290',
      sqsupe: '\u2292',
      sqsupset: '\u2290',
      sqsupseteq: '\u2292',
      squ: '\u25A1',
      square: '\u25A1',
      squarf: '\u25AA',
      squf: '\u25AA',
      srarr: '\u2192',
      sscr: '\uD835\uDCC8',
      ssetmn: '\u2216',
      ssmile: '\u2323',
      sstarf: '\u22C6',
      star: '\u2606',
      starf: '\u2605',
      straightepsilon: '\u03F5',
      straightphi: '\u03D5',
      strns: '\u00AF',
      sub: '\u2282',
      subE: '\u2AC5',
      subdot: '\u2ABD',
      sube: '\u2286',
      subedot: '\u2AC3',
      submult: '\u2AC1',
      subnE: '\u2ACB',
      subne: '\u228A',
      subplus: '\u2ABF',
      subrarr: '\u2979',
      subset: '\u2282',
      subseteq: '\u2286',
      subseteqq: '\u2AC5',
      subsetneq: '\u228A',
      subsetneqq: '\u2ACB',
      subsim: '\u2AC7',
      subsub: '\u2AD5',
      subsup: '\u2AD3',
      succ: '\u227B',
      succapprox: '\u2AB8',
      succcurlyeq: '\u227D',
      succeq: '\u2AB0',
      succnapprox: '\u2ABA',
      succneqq: '\u2AB6',
      succnsim: '\u22E9',
      succsim: '\u227F',
      sum: '\u2211',
      sung: '\u266A',
      sup1: '\u00B9',
      sup2: '\u00B2',
      sup3: '\u00B3',
      sup: '\u2283',
      supE: '\u2AC6',
      supdot: '\u2ABE',
      supdsub: '\u2AD8',
      supe: '\u2287',
      supedot: '\u2AC4',
      suphsol: '\u27C9',
      suphsub: '\u2AD7',
      suplarr: '\u297B',
      supmult: '\u2AC2',
      supnE: '\u2ACC',
      supne: '\u228B',
      supplus: '\u2AC0',
      supset: '\u2283',
      supseteq: '\u2287',
      supseteqq: '\u2AC6',
      supsetneq: '\u228B',
      supsetneqq: '\u2ACC',
      supsim: '\u2AC8',
      supsub: '\u2AD4',
      supsup: '\u2AD6',
      swArr: '\u21D9',
      swarhk: '\u2926',
      swarr: '\u2199',
      swarrow: '\u2199',
      swnwar: '\u292A',
      szlig: '\u00DF',
      target: '\u2316',
      tau: '\u03C4',
      tbrk: '\u23B4',
      tcaron: '\u0165',
      tcedil: '\u0163',
      tcy: '\u0442',
      tdot: '\u20DB',
      telrec: '\u2315',
      tfr: '\uD835\uDD31',
      there4: '\u2234',
      therefore: '\u2234',
      theta: '\u03B8',
      thetasym: '\u03D1',
      thetav: '\u03D1',
      thickapprox: '\u2248',
      thicksim: '\u223C',
      thinsp: '\u2009',
      thkap: '\u2248',
      thksim: '\u223C',
      thorn: '\u00FE',
      tilde: '\u02DC',
      times: '\u00D7',
      timesb: '\u22A0',
      timesbar: '\u2A31',
      timesd: '\u2A30',
      tint: '\u222D',
      toea: '\u2928',
      top: '\u22A4',
      topbot: '\u2336',
      topcir: '\u2AF1',
      topf: '\uD835\uDD65',
      topfork: '\u2ADA',
      tosa: '\u2929',
      tprime: '\u2034',
      trade: '\u2122',
      triangle: '\u25B5',
      triangledown: '\u25BF',
      triangleleft: '\u25C3',
      trianglelefteq: '\u22B4',
      triangleq: '\u225C',
      triangleright: '\u25B9',
      trianglerighteq: '\u22B5',
      tridot: '\u25EC',
      trie: '\u225C',
      triminus: '\u2A3A',
      triplus: '\u2A39',
      trisb: '\u29CD',
      tritime: '\u2A3B',
      trpezium: '\u23E2',
      tscr: '\uD835\uDCC9',
      tscy: '\u0446',
      tshcy: '\u045B',
      tstrok: '\u0167',
      twixt: '\u226C',
      twoheadleftarrow: '\u219E',
      twoheadrightarrow: '\u21A0',
      uArr: '\u21D1',
      uHar: '\u2963',
      uacute: '\u00FA',
      uarr: '\u2191',
      ubrcy: '\u045E',
      ubreve: '\u016D',
      ucirc: '\u00FB',
      ucy: '\u0443',
      udarr: '\u21C5',
      udblac: '\u0171',
      udhar: '\u296E',
      ufisht: '\u297E',
      ufr: '\uD835\uDD32',
      ugrave: '\u00F9',
      uharl: '\u21BF',
      uharr: '\u21BE',
      uhblk: '\u2580',
      ulcorn: '\u231C',
      ulcorner: '\u231C',
      ulcrop: '\u230F',
      ultri: '\u25F8',
      umacr: '\u016B',
      uml: '\u00A8',
      uogon: '\u0173',
      uopf: '\uD835\uDD66',
      uparrow: '\u2191',
      updownarrow: '\u2195',
      upharpoonleft: '\u21BF',
      upharpoonright: '\u21BE',
      uplus: '\u228E',
      upsi: '\u03C5',
      upsih: '\u03D2',
      upsilon: '\u03C5',
      upuparrows: '\u21C8',
      urcorn: '\u231D',
      urcorner: '\u231D',
      urcrop: '\u230E',
      uring: '\u016F',
      urtri: '\u25F9',
      uscr: '\uD835\uDCCA',
      utdot: '\u22F0',
      utilde: '\u0169',
      utri: '\u25B5',
      utrif: '\u25B4',
      uuarr: '\u21C8',
      uuml: '\u00FC',
      uwangle: '\u29A7',
      vArr: '\u21D5',
      vBar: '\u2AE8',
      vBarv: '\u2AE9',
      vDash: '\u22A8',
      vangrt: '\u299C',
      varepsilon: '\u03F5',
      varkappa: '\u03F0',
      varnothing: '\u2205',
      varphi: '\u03D5',
      varpi: '\u03D6',
      varpropto: '\u221D',
      varr: '\u2195',
      varrho: '\u03F1',
      varsigma: '\u03C2',
      varsubsetneq: '\u228A\uFE00',
      varsubsetneqq: '\u2ACB\uFE00',
      varsupsetneq: '\u228B\uFE00',
      varsupsetneqq: '\u2ACC\uFE00',
      vartheta: '\u03D1',
      vartriangleleft: '\u22B2',
      vartriangleright: '\u22B3',
      vcy: '\u0432',
      vdash: '\u22A2',
      vee: '\u2228',
      veebar: '\u22BB',
      veeeq: '\u225A',
      vellip: '\u22EE',
      verbar: '\u007C',
      vert: '\u007C',
      vfr: '\uD835\uDD33',
      vltri: '\u22B2',
      vnsub: '\u2282\u20D2',
      vnsup: '\u2283\u20D2',
      vopf: '\uD835\uDD67',
      vprop: '\u221D',
      vrtri: '\u22B3',
      vscr: '\uD835\uDCCB',
      vsubnE: '\u2ACB\uFE00',
      vsubne: '\u228A\uFE00',
      vsupnE: '\u2ACC\uFE00',
      vsupne: '\u228B\uFE00',
      vzigzag: '\u299A',
      wcirc: '\u0175',
      wedbar: '\u2A5F',
      wedge: '\u2227',
      wedgeq: '\u2259',
      weierp: '\u2118',
      wfr: '\uD835\uDD34',
      wopf: '\uD835\uDD68',
      wp: '\u2118',
      wr: '\u2240',
      wreath: '\u2240',
      wscr: '\uD835\uDCCC',
      xcap: '\u22C2',
      xcirc: '\u25EF',
      xcup: '\u22C3',
      xdtri: '\u25BD',
      xfr: '\uD835\uDD35',
      xhArr: '\u27FA',
      xharr: '\u27F7',
      xi: '\u03BE',
      xlArr: '\u27F8',
      xlarr: '\u27F5',
      xmap: '\u27FC',
      xnis: '\u22FB',
      xodot: '\u2A00',
      xopf: '\uD835\uDD69',
      xoplus: '\u2A01',
      xotime: '\u2A02',
      xrArr: '\u27F9',
      xrarr: '\u27F6',
      xscr: '\uD835\uDCCD',
      xsqcup: '\u2A06',
      xuplus: '\u2A04',
      xutri: '\u25B3',
      xvee: '\u22C1',
      xwedge: '\u22C0',
      yacute: '\u00FD',
      yacy: '\u044F',
      ycirc: '\u0177',
      ycy: '\u044B',
      yen: '\u00A5',
      yfr: '\uD835\uDD36',
      yicy: '\u0457',
      yopf: '\uD835\uDD6A',
      yscr: '\uD835\uDCCE',
      yucy: '\u044E',
      yuml: '\u00FF',
      zacute: '\u017A',
      zcaron: '\u017E',
      zcy: '\u0437',
      zdot: '\u017C',
      zeetrf: '\u2128',
      zeta: '\u03B6',
      zfr: '\uD835\uDD37',
      zhcy: '\u0436',
      zigrarr: '\u21DD',
      zopf: '\uD835\uDD6B',
      zscr: '\uD835\uDCCF',
      zwj: '\u200D',
      zwnj: '\u200C'
  };
  const decodeMap = {
      '0': 65533,
      '128': 8364,
      '130': 8218,
      '131': 402,
      '132': 8222,
      '133': 8230,
      '134': 8224,
      '135': 8225,
      '136': 710,
      '137': 8240,
      '138': 352,
      '139': 8249,
      '140': 338,
      '142': 381,
      '145': 8216,
      '146': 8217,
      '147': 8220,
      '148': 8221,
      '149': 8226,
      '150': 8211,
      '151': 8212,
      '152': 732,
      '153': 8482,
      '154': 353,
      '155': 8250,
      '156': 339,
      '158': 382,
      '159': 376
  };
  function decodeHTMLStrict(text) {
      return text.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (key) => {
          if (key.charAt(1) === '#') {
              const secondChar = key.charAt(2);
              const codePoint = secondChar === 'X' || secondChar === 'x' ? parseInt(key.slice(3), 16) : parseInt(key.slice(2), 10);
              return decodeCodePoint(codePoint);
          }
          return entities[key.slice(1, -1)] || key;
      });
  }
  function decodeCodePoint(codePoint) {
      if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
          return '\uFFFD';
      }
      if (codePoint in decodeMap) {
          codePoint = decodeMap[codePoint];
      }
      return String.fromCodePoint(codePoint);
  }

  function scanJSXAttributeValue(parser, context) {
      parser.startIndex = parser.tokenIndex = parser.index;
      parser.startColumn = parser.tokenColumn = parser.column;
      parser.startLine = parser.tokenLine = parser.line;
      parser.setToken(CharTypes[parser.currentChar] & 8192
          ? scanJSXString(parser, context)
          : scanSingleToken(parser, context, 0));
      return parser.getToken();
  }
  function scanJSXString(parser, context) {
      const quote = parser.currentChar;
      let char = advanceChar(parser);
      const start = parser.index;
      while (char !== quote) {
          if (parser.index >= parser.end)
              report(parser, 16);
          char = advanceChar(parser);
      }
      if (char !== quote)
          report(parser, 16);
      parser.tokenValue = parser.source.slice(start, parser.index);
      advanceChar(parser);
      if (context & 128)
          parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
      return 134283267;
  }
  function nextJSXToken(parser, context) {
      parser.startIndex = parser.tokenIndex = parser.index;
      parser.startColumn = parser.tokenColumn = parser.column;
      parser.startLine = parser.tokenLine = parser.line;
      if (parser.index >= parser.end) {
          parser.setToken(1048576);
          return;
      }
      if (parser.currentChar === 60) {
          advanceChar(parser);
          parser.setToken(8456256);
          return;
      }
      if (parser.currentChar === 123) {
          advanceChar(parser);
          parser.setToken(2162700);
          return;
      }
      let state = 0;
      while (parser.index < parser.end) {
          const type = CharTypes[parser.source.charCodeAt(parser.index)];
          if (type & 1024) {
              state |= 1 | 4;
              scanNewLine(parser);
          }
          else if (type & 2048) {
              consumeLineFeed(parser, state);
              state = (state & ~4) | 1;
          }
          else {
              advanceChar(parser);
          }
          if (CharTypes[parser.currentChar] & 16384)
              break;
      }
      if (parser.tokenIndex === parser.index)
          report(parser, 0);
      const raw = parser.source.slice(parser.tokenIndex, parser.index);
      if (context & 128)
          parser.tokenRaw = raw;
      parser.tokenValue = decodeHTMLStrict(raw);
      parser.setToken(137);
  }
  function rescanJSXIdentifier(parser) {
      if ((parser.getToken() & 143360) === 143360) {
          const { index } = parser;
          let char = parser.currentChar;
          while (CharTypes[char] & (32768 | 2)) {
              char = advanceChar(parser);
          }
          parser.tokenValue += parser.source.slice(index, parser.index);
      }
      parser.setToken(208897, true);
      return parser.getToken();
  }

  function collectLeadingComments(parser) {
      let leadingComments = [];
      if (parser.attachComments) {
          if (parser.comments && parser.comments.length) {
              leadingComments = parser.comments;
              parser.comments = [];
          }
          if (!parser.leadingComments) {
              parser.leadingComments = [];
          }
          parser.leadingComments.push(leadingComments);
      }
      return leadingComments;
  }
  function matchOrInsertSemicolon(parser, context) {
      if ((parser.flags & 1) === 0 && (parser.getToken() & 1048576) !== 1048576) {
          report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      }
      if (!consumeOpt(parser, context, 1074790417)) {
          parser.onInsertedSemicolon?.(parser.startIndex);
      }
  }
  function isValidStrictMode(parser, index, tokenIndex, tokenValue) {
      if (index - tokenIndex < 13 && tokenValue === 'use strict') {
          if ((parser.getToken() & 1048576) === 1048576 || parser.flags & 1) {
              return 1;
          }
      }
      return 0;
  }
  function optionalBit(parser, context, t) {
      if (parser.getToken() !== t)
          return 0;
      nextToken(parser, context);
      return 1;
  }
  function consumeOpt(parser, context, t) {
      if (parser.getToken() !== t)
          return false;
      nextToken(parser, context);
      return true;
  }
  function consume(parser, context, t) {
      if (parser.getToken() !== t)
          report(parser, 25, KeywordDescTable[t & 255]);
      nextToken(parser, context);
  }
  function reinterpretToPattern(state, node) {
      switch (node.type) {
          case 'ArrayExpression': {
              node.type = 'ArrayPattern';
              const { elements } = node;
              for (let i = 0, n = elements.length; i < n; ++i) {
                  const element = elements[i];
                  if (element)
                      reinterpretToPattern(state, element);
              }
              return;
          }
          case 'ObjectExpression': {
              node.type = 'ObjectPattern';
              const { properties } = node;
              for (let i = 0, n = properties.length; i < n; ++i) {
                  reinterpretToPattern(state, properties[i]);
              }
              return;
          }
          case 'AssignmentExpression':
              node.type = 'AssignmentPattern';
              if (node.operator !== '=')
                  report(state, 71);
              delete node.operator;
              reinterpretToPattern(state, node.left);
              return;
          case 'Property':
              reinterpretToPattern(state, node.value);
              return;
          case 'SpreadElement':
              node.type = 'RestElement';
              reinterpretToPattern(state, node.argument);
      }
  }
  function validateBindingIdentifier(parser, context, kind, t, skipEvalArgCheck) {
      if (context & 256) {
          if ((t & 36864) === 36864) {
              report(parser, 118);
          }
          if (!skipEvalArgCheck && (t & 537079808) === 537079808) {
              report(parser, 119);
          }
      }
      if ((t & 20480) === 20480 || t === -2147483528) {
          report(parser, 102);
      }
      if (kind & (8 | 16) && (t & 255) === (241737 & 255)) {
          report(parser, 100);
      }
      if (context & (524288 | 512) && t === 209006) {
          report(parser, 110);
      }
      if (context & (262144 | 256) && t === 241771) {
          report(parser, 97, 'yield');
      }
  }
  function validateFunctionName(parser, context, t) {
      if (context & 256) {
          if ((t & 36864) === 36864) {
              report(parser, 118);
          }
          if ((t & 537079808) === 537079808) {
              report(parser, 119);
          }
          if (t === -2147483527) {
              report(parser, 95);
          }
          if (t === -2147483528) {
              report(parser, 95);
          }
      }
      if ((t & 20480) === 20480) {
          report(parser, 102);
      }
      if (context & (524288 | 512) && t === 209006) {
          report(parser, 110);
      }
      if (context & (262144 | 256) && t === 241771) {
          report(parser, 97, 'yield');
      }
  }
  function isStrictReservedWord(parser, context, t) {
      if (t === 209006) {
          if (context & (524288 | 512))
              report(parser, 110);
          parser.destructible |= 128;
      }
      if (t === 241771 && context & 262144)
          report(parser, 97, 'yield');
      return ((t & 20480) === 20480 ||
          (t & 36864) === 36864 ||
          t == -2147483527);
  }
  function isPropertyWithPrivateFieldKey(expr) {
      return !expr.property ? false : expr.property.type === 'PrivateIdentifier';
  }
  function isValidLabel(parser, labels, name, isIterationStatement) {
      while (labels) {
          if (labels['$' + name]) {
              if (isIterationStatement)
                  report(parser, 137);
              return 1;
          }
          if (isIterationStatement && labels.loop)
              isIterationStatement = 0;
          labels = labels['$'];
      }
      return 0;
  }
  function validateAndDeclareLabel(parser, labels, name) {
      let set = labels;
      while (set) {
          if (set['$' + name])
              report(parser, 136, name);
          set = set['$'];
      }
      labels['$' + name] = 1;
  }
  function finishNode(parser, context, start, line, column, node) {
      if (context & 2) {
          node.start = start;
          node.end = parser.startIndex;
          node.range = [start, parser.startIndex];
      }
      if (context & 4) {
          node.loc = {
              start: {
                  line,
                  column
              },
              end: {
                  line: parser.startLine,
                  column: parser.startColumn
              }
          };
          if (parser.sourceFile) {
              node.loc.source = parser.sourceFile;
          }
      }
      if (parser.attachComments) {
          const leadingComments = parser.leadingComments && parser.leadingComments.pop();
          if (leadingComments && leadingComments.length > 0) {
              node.leadingComments = leadingComments;
          }
          if (parser.comments && parser.comments.length > 0) {
              node.trailingComments = parser.comments;
              parser.comments = [];
          }
      }
      return node;
  }
  function isEqualTagName(elementName) {
      switch (elementName.type) {
          case 'JSXIdentifier':
              return elementName.name;
          case 'JSXNamespacedName':
              return elementName.namespace + ':' + elementName.name;
          case 'JSXMemberExpression':
              return isEqualTagName(elementName.object) + '.' + isEqualTagName(elementName.property);
      }
  }
  function createArrowHeadParsingScope(parser, context, value) {
      const scope = addChildScope(createScope(), 1024);
      addBlockName(parser, context, scope, value, 1, 0);
      return scope;
  }
  function recordScopeError(parser, type, ...params) {
      const { index, line, column, tokenIndex, tokenLine, tokenColumn } = parser;
      return {
          type,
          params,
          index,
          line,
          column,
          tokenIndex,
          tokenLine,
          tokenColumn
      };
  }
  function createScope() {
      return {
          parent: void 0,
          type: 2
      };
  }
  function addChildScope(parent, type) {
      return {
          parent,
          type,
          scopeError: void 0
      };
  }
  function addChildPrivateScope(parent) {
      return {
          parent,
          refs: Object.create(null)
      };
  }
  function addVarOrBlock(parser, context, scope, name, kind, origin) {
      if (kind & 4) {
          addVarName(parser, context, scope, name, kind);
      }
      else {
          addBlockName(parser, context, scope, name, kind, origin);
      }
      if (origin & 64) {
          declareUnboundVariable(parser, name);
      }
  }
  function addBlockName(parser, context, scope, name, kind, origin) {
      const value = scope['#' + name];
      if (value && (value & 2) === 0) {
          if (kind & 1) {
              scope.scopeError = recordScopeError(parser, 145, name);
          }
          else if (context & 64 &&
              (context & 256) === 0 &&
              origin & 2 &&
              value === 64 &&
              kind === 64) ;
          else {
              report(parser, 145, name);
          }
      }
      if (scope.type & 128 &&
          scope.parent['#' + name] &&
          (scope.parent['#' + name] & 2) === 0) {
          report(parser, 145, name);
      }
      if (scope.type & 1024 && value && (value & 2) === 0) {
          if (kind & 1) {
              scope.scopeError = recordScopeError(parser, 145, name);
          }
      }
      if (scope.type & 64) {
          if (scope.parent['#' + name] & 768)
              report(parser, 159, name);
      }
      scope['#' + name] = kind;
  }
  function addVarName(parser, context, scope, name, kind) {
      let currentScope = scope;
      while (currentScope && (currentScope.type & 256) === 0) {
          const value = currentScope['#' + name];
          if (value & 248) {
              if (context & 64 &&
                  (context & 256) === 0 &&
                  ((kind & 128 && value & 68) ||
                      (value & 128 && kind & 68))) ;
              else {
                  report(parser, 145, name);
              }
          }
          if (currentScope === scope) {
              if (value & 1 && kind & 1) {
                  currentScope.scopeError = recordScopeError(parser, 145, name);
              }
          }
          if (value & 256 ||
              (value & 512 && (context & 64) === 0)) {
              report(parser, 145, name);
          }
          currentScope['#' + name] = kind;
          currentScope = currentScope.parent;
      }
  }
  function addPrivateIdentifier(parser, scope, name, kind) {
      let focusKind = kind & (32 | 768);
      if (!(focusKind & 768))
          focusKind |= 768;
      const value = scope['#' + name];
      if (value !== undefined &&
          ((value & 32) !== (focusKind & 32) || value & focusKind & 768)) {
          report(parser, 146, name);
      }
      scope['#' + name] = value ? value | focusKind : focusKind;
  }
  function addPrivateIdentifierRef(parser, scope, name) {
      scope.refs[name] ??= [];
      scope.refs[name].push({
          index: parser.tokenIndex,
          line: parser.tokenLine,
          column: parser.tokenColumn
      });
  }
  function isPrivateIdentifierDefined(name, scope) {
      if (scope['#' + name])
          return 1;
      if (scope.parent)
          return isPrivateIdentifierDefined(name, scope.parent);
      return 0;
  }
  function validatePrivateIdentifierRefs(scope) {
      for (const name in scope.refs) {
          if (!isPrivateIdentifierDefined(name, scope)) {
              const { index, line, column } = scope.refs[name][0];
              throw new ParseError(index, line, column, index + name.length, line, column + name.length, 4, name);
          }
      }
  }
  function declareUnboundVariable(parser, name) {
      if (parser.exportedNames !== void 0 && name !== '') {
          if (parser.exportedNames['#' + name]) {
              report(parser, 147, name);
          }
          parser.exportedNames['#' + name] = 1;
      }
  }
  function addBindingToExports(parser, name) {
      if (parser.exportedBindings !== void 0 && name !== '') {
          parser.exportedBindings['#' + name] = 1;
      }
  }
  function pushComment(context, array) {
      return function (type, value, start, end, loc) {
          const comment = {
              type,
              value
          };
          if (context & 2) {
              comment.start = start;
              comment.end = end;
              comment.range = [start, end];
          }
          if (context & 4) {
              comment.loc = loc;
          }
          array.push(comment);
      };
  }
  function pushToken(context, array) {
      return function (token, start, end, loc) {
          const tokens = {
              token
          };
          if (context & 2) {
              tokens.start = start;
              tokens.end = end;
              tokens.range = [start, end];
          }
          if (context & 4) {
              tokens.loc = loc;
          }
          array.push(tokens);
      };
  }
  function isValidIdentifier(context, t) {
      if (context & (256 | 262144)) {
          if (context & 512 && t === 209006)
              return false;
          if (context & 262144 && t === 241771)
              return false;
          return (t & 12288) === 12288;
      }
      return (t & 12288) === 12288 || (t & 36864) === 36864;
  }
  function classifyIdentifier(parser, context, t) {
      if ((t & 537079808) === 537079808) {
          if (context & 256)
              report(parser, 119);
          parser.flags |= 512;
      }
      if (!isValidIdentifier(context, t))
          report(parser, 0);
  }

  function create(source, sourceFile, onComment, onToken, onInsertedSemicolon, attachComments) {
      let token = 1048576;
      let lastOnToken = null;
      return {
          source,
          flags: 0,
          index: 0,
          line: 1,
          column: 0,
          startIndex: 0,
          end: source.length,
          tokenIndex: 0,
          startColumn: 0,
          tokenColumn: 0,
          tokenLine: 1,
          startLine: 1,
          sourceFile,
          tokenValue: '',
          getToken() {
              return token;
          },
          setToken(value, replaceLast = false) {
              if (onToken) {
                  if (value !== 1048576) {
                      const loc = {
                          start: {
                              line: this.tokenLine,
                              column: this.tokenColumn
                          },
                          end: {
                              line: this.line,
                              column: this.column
                          }
                      };
                      if (!replaceLast && lastOnToken) {
                          onToken(...lastOnToken);
                      }
                      lastOnToken = [convertTokenType(value), this.tokenIndex, this.index, loc];
                  }
                  else {
                      if (lastOnToken) {
                          onToken(...lastOnToken);
                          lastOnToken = null;
                      }
                  }
              }
              return (token = value);
          },
          tokenRaw: '',
          tokenRegExp: void 0,
          currentChar: source.charCodeAt(0),
          exportedNames: [],
          exportedBindings: [],
          assignable: 1,
          destructible: 0,
          onComment,
          onToken,
          onInsertedSemicolon,
          attachComments,
          leadingDecorators: []
      };
  }
  function parseSource(source, options, context) {
      let sourceFile = '';
      let onComment;
      let onInsertedSemicolon;
      let onToken;
      let attachComments = false;
      if (options != null) {
          if (options.module)
              context |= 512 | 256;
          if (options.next)
              context |= 1;
          if (options.loc)
              context |= 4;
          if (options.ranges)
              context |= 2;
          if (options.uniqueKeyInPattern)
              context |= 134217728;
          if (options.lexical)
              context |= 16;
          if (options.webcompat)
              context |= 64;
          if (options.globalReturn)
              context |= 1048576;
          if (options.raw)
              context |= 128;
          if (options.preserveParens)
              context |= 32;
          if (options.impliedStrict)
              context |= 256;
          if (options.jsx)
              context |= 8;
          if (options.source)
              sourceFile = options.source;
          if (options.onComment != null) {
              onComment = Array.isArray(options.onComment) ? pushComment(context, options.onComment) : options.onComment;
          }
          if (options.onInsertedSemicolon != null)
              onInsertedSemicolon = options.onInsertedSemicolon;
          if (options.onToken != null) {
              onToken = Array.isArray(options.onToken) ? pushToken(context, options.onToken) : options.onToken;
          }
          if (options.attachComments != null) {
              attachComments = options.attachComments;
          }
      }
      const parser = create(source, sourceFile, onComment, onToken, onInsertedSemicolon, attachComments);
      skipHashBang(parser);
      const scope = context & 16 ? createScope() : void 0;
      let body = [];
      let sourceType = 'script';
      if (context & 512) {
          sourceType = 'module';
          body = parseModuleItemList(parser, context | 2048, scope);
          if (scope) {
              for (const key in parser.exportedBindings) {
                  if (key[0] === '#' && !scope[key])
                      report(parser, 148, key.slice(1));
              }
          }
      }
      else {
          body = parseStatementList(parser, context | 2048, scope);
      }
      const node = {
          type: 'Program',
          sourceType,
          body
      };
      if (context & 2) {
          node.start = 0;
          node.end = source.length;
          node.range = [0, source.length];
      }
      if (context & 4) {
          node.loc = {
              start: { line: 1, column: 0 },
              end: { line: parser.line, column: parser.column }
          };
          if (parser.sourceFile)
              node.loc.source = sourceFile;
      }
      return node;
  }
  function parseStatementList(parser, context, scope) {
      nextToken(parser, context | 8192 | 67108864);
      const statements = [];
      while (parser.getToken() === 134283267) {
          const { index, tokenIndex, tokenValue, tokenLine, tokenColumn } = parser;
          const token = parser.getToken();
          const expr = parseLiteral(parser, context);
          if (isValidStrictMode(parser, index, tokenIndex, tokenValue)) {
              context |= 256;
              if (parser.flags & 64) {
                  reportMessageAt(parser.tokenIndex, parser.tokenLine, parser.tokenColumn, parser.index, parser.line, parser.column, 9);
              }
              if (parser.flags & 4096) {
                  reportMessageAt(parser.tokenIndex, parser.tokenLine, parser.tokenColumn, parser.index, parser.line, parser.column, 15);
              }
          }
          statements.push(parseDirective(parser, context, expr, token, tokenIndex, tokenLine, tokenColumn));
      }
      while (parser.getToken() !== 1048576) {
          statements.push(parseStatementListItem(parser, context, scope, undefined, 4, {}));
      }
      return statements;
  }
  function parseModuleItemList(parser, context, scope) {
      nextToken(parser, context | 8192);
      const statements = [];
      while (parser.getToken() === 134283267) {
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          const token = parser.getToken();
          statements.push(parseDirective(parser, context, parseLiteral(parser, context), token, tokenIndex, tokenLine, tokenColumn));
      }
      while (parser.getToken() !== 1048576) {
          statements.push(parseModuleItem(parser, context, scope));
      }
      return statements;
  }
  function parseModuleItem(parser, context, scope) {
      parser.leadingDecorators = parseDecorators(parser, context, undefined);
      let moduleItem;
      switch (parser.getToken()) {
          case 20564:
              moduleItem = parseExportDeclaration(parser, context, scope);
              break;
          case 86106:
              moduleItem = parseImportDeclaration(parser, context, scope);
              break;
          default:
              moduleItem = parseStatementListItem(parser, context, scope, undefined, 4, {});
      }
      if (parser.leadingDecorators.length) {
          report(parser, 170);
      }
      return moduleItem;
  }
  function parseStatementListItem(parser, context, scope, privateScope, origin, labels) {
      const start = parser.tokenIndex;
      const line = parser.tokenLine;
      const column = parser.tokenColumn;
      switch (parser.getToken()) {
          case 86104:
              return parseFunctionDeclaration(parser, context, scope, privateScope, origin, 1, 0, 0, start, line, column);
          case 132:
          case 86094:
              return parseClassDeclaration(parser, context, scope, privateScope, 0, start, line, column);
          case 86090:
              return parseLexicalDeclaration(parser, context, scope, privateScope, 16, 0, start, line, column);
          case 241737:
              return parseLetIdentOrVarDeclarationStatement(parser, context, scope, privateScope, origin, start, line, column);
          case 20564:
              report(parser, 103, 'export');
          case 86106:
              nextToken(parser, context);
              switch (parser.getToken()) {
                  case 67174411:
                      return parseImportCallDeclaration(parser, context, privateScope, start, line, column);
                  case 67108877:
                      return parseImportMetaDeclaration(parser, context, start, line, column);
                  default:
                      report(parser, 103, 'import');
              }
          case 209005:
              return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, 1, start, line, column);
          default:
              return parseStatement(parser, context, scope, privateScope, origin, labels, 1, start, line, column);
      }
  }
  function parseStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl, start, line, column) {
      switch (parser.getToken()) {
          case 86088:
              return parseVariableStatement(parser, context, scope, privateScope, 0, start, line, column);
          case 20572:
              return parseReturnStatement(parser, context, privateScope, start, line, column);
          case 20569:
              return parseIfStatement(parser, context, scope, privateScope, labels, start, line, column);
          case 20567:
              return parseForStatement(parser, context, scope, privateScope, labels, start, line, column);
          case 20562:
              return parseDoWhileStatement(parser, context, scope, privateScope, labels, start, line, column);
          case 20578:
              return parseWhileStatement(parser, context, scope, privateScope, labels, start, line, column);
          case 86110:
              return parseSwitchStatement(parser, context, scope, privateScope, labels, start, line, column);
          case 1074790417:
              return parseEmptyStatement(parser, context, start, line, column);
          case 2162700:
              return parseBlock(parser, context, scope ? addChildScope(scope, 2) : scope, privateScope, labels, start, line, column);
          case 86112:
              return parseThrowStatement(parser, context, privateScope, start, line, column);
          case 20555:
              return parseBreakStatement(parser, context, labels, start, line, column);
          case 20559:
              return parseContinueStatement(parser, context, labels, start, line, column);
          case 20577:
              return parseTryStatement(parser, context, scope, privateScope, labels, start, line, column);
          case 20579:
              return parseWithStatement(parser, context, scope, privateScope, labels, start, line, column);
          case 20560:
              return parseDebuggerStatement(parser, context, start, line, column);
          case 209005:
              return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, 0, start, line, column);
          case 20557:
              report(parser, 162);
          case 20566:
              report(parser, 163);
          case 86104:
              report(parser, context & 256
                  ? 76
                  : (context & 64) === 0
                      ? 78
                      : 77);
          case 86094:
              report(parser, 79);
          default:
              return parseExpressionOrLabelledStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl, start, line, column);
      }
  }
  function parseExpressionOrLabelledStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl, start, line, column) {
      const { tokenValue } = parser;
      const token = parser.getToken();
      let expr;
      switch (token) {
          case 241737:
              expr = parseIdentifier(parser, context);
              if (context & 256)
                  report(parser, 85);
              if (parser.getToken() === 69271571)
                  report(parser, 84);
              break;
          default:
              expr = parsePrimaryExpression(parser, context, privateScope, 2, 0, 1, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      }
      if (token & 143360 && parser.getToken() === 21) {
          return parseLabelledStatement(parser, context, scope, privateScope, origin, labels, tokenValue, expr, token, allowFuncDecl, start, line, column);
      }
      expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start, line, column);
      expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, start, line, column, expr);
      if (parser.getToken() === 18) {
          expr = parseSequenceExpression(parser, context, privateScope, 0, start, line, column, expr);
      }
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseBlock(parser, context, scope, privateScope, labels, start, line, column) {
      const body = [];
      collectLeadingComments(parser);
      consume(parser, context | 8192, 2162700);
      while (parser.getToken() !== 1074790415) {
          body.push(parseStatementListItem(parser, context, scope, privateScope, 2, { $: labels }));
      }
      var innerComments = null;
      if (parser.attachComments) {
          if (body.length <= 0 && parser.comments && parser.comments.length > 0) {
              innerComments = parser.comments;
              parser.comments = [];
          }
      }
      consume(parser, context | 8192, 1074790415);
      const blockNode = finishNode(parser, context, start, line, column, {
          type: 'BlockStatement',
          body
      });
      if (innerComments) {
          blockNode.innerComments = innerComments;
      }
      return blockNode;
  }
  function parseReturnStatement(parser, context, privateScope, start, line, column) {
      if ((context & 1048576) === 0)
          report(parser, 92);
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const argument = parser.flags & 1 || parser.getToken() & 1048576
          ? null
          : parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      matchOrInsertSemicolon(parser, context | 8192);
      return finishNode(parser, context, start, line, column, {
          type: 'ReturnStatement',
          argument
      });
  }
  function parseExpressionStatement(parser, context, expression, start, line, column) {
      parser.leadingComments && parser.leadingComments.push([]);
      matchOrInsertSemicolon(parser, context | 8192);
      return finishNode(parser, context, start, line, column, {
          type: 'ExpressionStatement',
          expression
      });
  }
  function parseLabelledStatement(parser, context, scope, privateScope, origin, labels, value, expr, token, allowFuncDecl, start, line, column) {
      collectLeadingComments(parser);
      validateBindingIdentifier(parser, context, 0, token, 1);
      validateAndDeclareLabel(parser, labels, value);
      nextToken(parser, context | 8192);
      const body = allowFuncDecl &&
          (context & 256) === 0 &&
          context & 64 &&
          parser.getToken() === 86104
          ? parseFunctionDeclaration(parser, context, addChildScope(scope, 2), privateScope, origin, 0, 0, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn)
          : parseStatement(parser, context, scope, privateScope, origin, labels, allowFuncDecl, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      return finishNode(parser, context, start, line, column, {
          type: 'LabeledStatement',
          label: expr,
          body
      });
  }
  function parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, privateScope, origin, labels, allowFuncDecl, start, line, column) {
      const { tokenValue } = parser;
      const token = parser.getToken();
      let expr = parseIdentifier(parser, context);
      if (parser.getToken() === 21) {
          return parseLabelledStatement(parser, context, scope, privateScope, origin, labels, tokenValue, expr, token, 1, start, line, column);
      }
      const asyncNewLine = parser.flags & 1;
      if (!asyncNewLine) {
          if (parser.getToken() === 86104) {
              if (!allowFuncDecl)
                  report(parser, 123);
              return parseFunctionDeclaration(parser, context, scope, privateScope, origin, 1, 0, 1, start, line, column);
          }
          if (isValidIdentifier(context, parser.getToken())) {
              expr = parseAsyncArrowAfterIdent(parser, context, privateScope, 1, start, line, column);
              if (parser.getToken() === 18)
                  expr = parseSequenceExpression(parser, context, privateScope, 0, start, line, column, expr);
              return parseExpressionStatement(parser, context, expr, start, line, column);
          }
      }
      if (parser.getToken() === 67174411) {
          expr = parseAsyncArrowOrCallExpression(parser, context, privateScope, expr, 1, 1, 0, asyncNewLine, start, line, column);
      }
      else {
          if (parser.getToken() === 10) {
              classifyIdentifier(parser, context, token);
              if ((token & 36864) === 36864) {
                  parser.flags |= 256;
              }
              expr = parseArrowFromIdentifier(parser, context | 524288, privateScope, parser.tokenValue, expr, 0, 1, 0, start, line, column);
          }
          parser.assignable = 1;
      }
      expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start, line, column);
      expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, start, line, column, expr);
      parser.assignable = 1;
      if (parser.getToken() === 18) {
          expr = parseSequenceExpression(parser, context, privateScope, 0, start, line, column, expr);
      }
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseDirective(parser, context, expression, token, start, line, column) {
      const endIndex = parser.startIndex;
      collectLeadingComments(parser);
      if (token !== 1074790417) {
          parser.assignable = 2;
          expression = parseMemberOrUpdateExpression(parser, context, undefined, expression, 0, 0, start, line, column);
          if (parser.getToken() !== 1074790417) {
              expression = parseAssignmentExpression(parser, context, undefined, 0, 0, start, line, column, expression);
              if (parser.getToken() === 18) {
                  expression = parseSequenceExpression(parser, context, undefined, 0, start, line, column, expression);
              }
          }
          matchOrInsertSemicolon(parser, context | 8192);
      }
      return expression.type === 'Literal' && typeof expression.value === 'string'
          ? finishNode(parser, context, start, line, column, {
              type: 'ExpressionStatement',
              expression,
              directive: parser.source.slice(start + 1, endIndex - 1)
          })
          : finishNode(parser, context, start, line, column, {
              type: 'ExpressionStatement',
              expression
          });
  }
  function parseEmptyStatement(parser, context, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      return finishNode(parser, context, start, line, column, {
          type: 'EmptyStatement'
      });
  }
  function parseThrowStatement(parser, context, privateScope, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      if (parser.flags & 1)
          report(parser, 90);
      const argument = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      matchOrInsertSemicolon(parser, context | 8192);
      return finishNode(parser, context, start, line, column, {
          type: 'ThrowStatement',
          argument
      });
  }
  function parseIfStatement(parser, context, scope, privateScope, labels, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      consume(parser, context | 8192, 67174411);
      parser.assignable = 1;
      const leadingCommentForTest = collectLeadingComments(parser);
      const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.line, parser.tokenColumn);
      if (parser.attachComments) {
          test.leadingComments = leadingCommentForTest;
      }
      consume(parser, context | 8192, 16);
      const consequent = parseConsequentOrAlternative(parser, context, scope, privateScope, labels, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      let alternate = null;
      if (parser.getToken() === 20563) {
          nextToken(parser, context | 8192);
          alternate = parseConsequentOrAlternative(parser, context, scope, privateScope, labels, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'IfStatement',
          test,
          consequent,
          alternate
      });
  }
  function parseConsequentOrAlternative(parser, context, scope, privateScope, labels, start, line, column) {
      return context & 256 ||
          (context & 64) === 0 ||
          parser.getToken() !== 86104
          ? parseStatement(parser, context, scope, privateScope, 0, { $: labels }, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn)
          : parseFunctionDeclaration(parser, context, addChildScope(scope, 2), privateScope, 0, 0, 0, 0, start, line, column);
  }
  function parseSwitchStatement(parser, context, scope, privateScope, labels, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      consume(parser, context | 8192, 67174411);
      const discriminant = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context, 16);
      consume(parser, context, 2162700);
      const cases = [];
      let seenDefault = 0;
      if (scope)
          scope = addChildScope(scope, 8);
      while (parser.getToken() !== 1074790415) {
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          collectLeadingComments(parser);
          let test = null;
          const consequent = [];
          if (consumeOpt(parser, context | 8192, 20556)) {
              test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          }
          else {
              consume(parser, context | 8192, 20561);
              if (seenDefault)
                  report(parser, 89);
              seenDefault = 1;
          }
          consume(parser, context | 8192, 21);
          while (parser.getToken() !== 20556 &&
              parser.getToken() !== 1074790415 &&
              parser.getToken() !== 20561) {
              consequent.push(parseStatementListItem(parser, context | 1024, scope, privateScope, 2, {
                  $: labels
              }));
          }
          cases.push(finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
              type: 'SwitchCase',
              test,
              consequent
          }));
      }
      consume(parser, context | 8192, 1074790415);
      return finishNode(parser, context, start, line, column, {
          type: 'SwitchStatement',
          discriminant,
          cases
      });
  }
  function parseWhileStatement(parser, context, scope, privateScope, labels, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      consume(parser, context | 8192, 67174411);
      const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context | 8192, 16);
      const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
      return finishNode(parser, context, start, line, column, {
          type: 'WhileStatement',
          test,
          body
      });
  }
  function parseIterationStatementBody(parser, context, scope, privateScope, labels) {
      return parseStatement(parser, ((context | 33554432) ^ 33554432) | 32768, scope, privateScope, 0, { loop: 1, $: labels }, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
  }
  function parseContinueStatement(parser, context, labels, start, line, column) {
      collectLeadingComments(parser);
      if ((context & 32768) === 0)
          report(parser, 68);
      nextToken(parser, context);
      let label = null;
      if ((parser.flags & 1) === 0 && parser.getToken() & 143360) {
          const { tokenValue } = parser;
          label = parseIdentifier(parser, context | 8192);
          if (!isValidLabel(parser, labels, tokenValue, 1))
              report(parser, 138, tokenValue);
      }
      matchOrInsertSemicolon(parser, context | 8192);
      return finishNode(parser, context, start, line, column, {
          type: 'ContinueStatement',
          label
      });
  }
  function parseBreakStatement(parser, context, labels, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      let label = null;
      if ((parser.flags & 1) === 0 && parser.getToken() & 143360) {
          const { tokenValue } = parser;
          label = parseIdentifier(parser, context | 8192);
          if (!isValidLabel(parser, labels, tokenValue, 0))
              report(parser, 138, tokenValue);
      }
      else if ((context & (1024 | 32768)) === 0) {
          report(parser, 69);
      }
      matchOrInsertSemicolon(parser, context | 8192);
      return finishNode(parser, context, start, line, column, {
          type: 'BreakStatement',
          label
      });
  }
  function parseWithStatement(parser, context, scope, privateScope, labels, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      if (context & 256)
          report(parser, 91);
      consume(parser, context | 8192, 67174411);
      const object = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context | 8192, 16);
      const body = parseStatement(parser, context, scope, privateScope, 2, labels, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      return finishNode(parser, context, start, line, column, {
          type: 'WithStatement',
          object,
          body
      });
  }
  function parseDebuggerStatement(parser, context, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      matchOrInsertSemicolon(parser, context | 8192);
      return finishNode(parser, context, start, line, column, {
          type: 'DebuggerStatement'
      });
  }
  function parseTryStatement(parser, context, scope, privateScope, labels, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const firstScope = scope ? addChildScope(scope, 32) : void 0;
      const block = parseBlock(parser, context, firstScope, privateScope, { $: labels }, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      const handler = consumeOpt(parser, context | 8192, 20557)
          ? parseCatchBlock(parser, context, scope, privateScope, labels, tokenIndex, tokenLine, tokenColumn)
          : null;
      let finalizer = null;
      if (parser.getToken() === 20566) {
          nextToken(parser, context | 8192);
          const finalizerScope = firstScope ? addChildScope(scope, 4) : void 0;
          finalizer = parseBlock(parser, context, finalizerScope, privateScope, { $: labels }, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      }
      if (!handler && !finalizer) {
          report(parser, 88);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'TryStatement',
          block,
          handler,
          finalizer
      });
  }
  function parseCatchBlock(parser, context, scope, privateScope, labels, start, line, column) {
      let param = null;
      let additionalScope = scope;
      collectLeadingComments(parser);
      if (consumeOpt(parser, context, 67174411)) {
          if (scope)
              scope = addChildScope(scope, 4);
          param = parseBindingPattern(parser, context, scope, privateScope, (parser.getToken() & 2097152) === 2097152
              ? 256
              : 512, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          if (parser.getToken() === 18) {
              report(parser, 86);
          }
          else if (parser.getToken() === 1077936155) {
              report(parser, 87);
          }
          consume(parser, context | 8192, 16);
      }
      if (scope)
          additionalScope = addChildScope(scope, 64);
      const body = parseBlock(parser, context, additionalScope, privateScope, { $: labels }, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      return finishNode(parser, context, start, line, column, {
          type: 'CatchClause',
          param,
          body
      });
  }
  function parseStaticBlock(parser, context, scope, privateScope, start, line, column) {
      if (scope)
          scope = addChildScope(scope, 2);
      const ctorContext = 131072 | 1048576 | 262144 | 1024 | 32768;
      context =
          ((context | ctorContext) ^ ctorContext) |
              65536 |
              524288 |
              268435456 |
              16777216;
      const { body } = parseBlock(parser, context, scope, privateScope, {}, start, line, column);
      return finishNode(parser, context, start, line, column, {
          type: 'StaticBlock',
          body
      });
  }
  function parseDoWhileStatement(parser, context, scope, privateScope, labels, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
      consume(parser, context, 20578);
      consume(parser, context | 8192, 67174411);
      const test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context | 8192, 16);
      consumeOpt(parser, context | 8192, 1074790417);
      return finishNode(parser, context, start, line, column, {
          type: 'DoWhileStatement',
          body,
          test
      });
  }
  function parseLetIdentOrVarDeclarationStatement(parser, context, scope, privateScope, origin, start, line, column) {
      const { tokenValue } = parser;
      const token = parser.getToken();
      let expr = parseIdentifier(parser, context);
      if (parser.getToken() & (143360 | 2097152)) {
          if (expr.trailingComments) {
              parser.comments = expr.trailingComments;
          }
          const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, 8, 0);
          matchOrInsertSemicolon(parser, context | 8192);
          if (expr.leadingComments) {
              parser.leadingComments && parser.leadingComments.push(expr.leadingComments);
          }
          else {
              parser.leadingComments && parser.leadingComments.push([]);
          }
          return finishNode(parser, context, start, line, column, {
              type: 'VariableDeclaration',
              kind: 'let',
              declarations
          });
      }
      parser.assignable = 1;
      if (context & 256)
          report(parser, 85);
      if (parser.getToken() === 21) {
          return parseLabelledStatement(parser, context, scope, privateScope, origin, {}, tokenValue, expr, token, 0, start, line, column);
      }
      if (parser.getToken() === 10) {
          let scope = void 0;
          if (context & 16)
              scope = createArrowHeadParsingScope(parser, context, tokenValue);
          parser.flags = (parser.flags | 128) ^ 128;
          expr = parseArrowFunctionExpression(parser, context, scope, privateScope, [expr], 0, start, line, column);
      }
      else {
          expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start, line, column);
          expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, start, line, column, expr);
      }
      if (parser.getToken() === 18) {
          expr = parseSequenceExpression(parser, context, privateScope, 0, start, line, column, expr);
      }
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseLexicalDeclaration(parser, context, scope, privateScope, kind, origin, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      const comments = parser.comments;
      const leadingComments = parser.leadingComments;
      if (parser.attachComments) {
          parser.comments = [];
          parser.leadingComments = [];
      }
      const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, kind, origin);
      matchOrInsertSemicolon(parser, context | 8192);
      if (parser.attachComments) {
          parser.comments = comments;
          parser.leadingComments = leadingComments;
      }
      return finishNode(parser, context, start, line, column, {
          type: 'VariableDeclaration',
          kind: kind & 8 ? 'let' : 'const',
          declarations
      });
  }
  function parseVariableStatement(parser, context, scope, privateScope, origin, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      const declarations = parseVariableDeclarationList(parser, context, scope, privateScope, 4, origin);
      matchOrInsertSemicolon(parser, context | 8192);
      return finishNode(parser, context, start, line, column, {
          type: 'VariableDeclaration',
          kind: 'var',
          declarations
      });
  }
  function parseVariableDeclarationList(parser, context, scope, privateScope, kind, origin) {
      let bindingCount = 1;
      const list = [
          parseVariableDeclaration(parser, context, scope, privateScope, kind, origin)
      ];
      while (consumeOpt(parser, context, 18)) {
          bindingCount++;
          list.push(parseVariableDeclaration(parser, context, scope, privateScope, kind, origin));
      }
      if (bindingCount > 1 && origin & 32 && parser.getToken() & 262144) {
          report(parser, 61, KeywordDescTable[parser.getToken() & 255]);
      }
      return list;
  }
  function parseVariableDeclaration(parser, context, scope, privateScope, kind, origin) {
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      const token = parser.getToken();
      let init = null;
      collectLeadingComments(parser);
      const id = parseBindingPattern(parser, context, scope, privateScope, kind, origin, tokenIndex, tokenLine, tokenColumn);
      if (parser.getToken() === 1077936155) {
          nextToken(parser, context | 8192);
          init = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          if (origin & 32 || (token & 2097152) === 0) {
              if (parser.getToken() === 274548 ||
                  (parser.getToken() === 8673330 &&
                      (token & 2097152 || (kind & 4) === 0 || context & 256))) {
                  reportMessageAt(tokenIndex, tokenLine, tokenColumn, parser.index, parser.line, parser.column, 60, parser.getToken() === 274548 ? 'of' : 'in');
              }
          }
      }
      else if ((kind & 16 || (token & 2097152) > 0) &&
          (parser.getToken() & 262144) !== 262144) {
          report(parser, 59, kind & 16 ? 'const' : 'destructuring');
      }
      return finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
          type: 'VariableDeclarator',
          id,
          init
      });
  }
  function parseForStatement(parser, context, scope, privateScope, labels, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      const forAwait = ((context & 524288) > 0 || ((context & 512) > 0 && (context & 2048) > 0)) &&
          consumeOpt(parser, context, 209006);
      consume(parser, context | 8192, 67174411);
      if (scope)
          scope = addChildScope(scope, 1);
      let test = null;
      let update = null;
      let destructible = 0;
      let init = null;
      let isVarDecl = parser.getToken() === 86088 ||
          parser.getToken() === 241737 ||
          parser.getToken() === 86090;
      let right;
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      const token = parser.getToken();
      if (isVarDecl) {
          if (token === 241737) {
              init = parseIdentifier(parser, context);
              if (parser.getToken() & (143360 | 2097152)) {
                  if (parser.getToken() === 8673330) {
                      if (context & 256)
                          report(parser, 67);
                  }
                  else {
                      collectLeadingComments(parser);
                      init = finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
                          type: 'VariableDeclaration',
                          kind: 'let',
                          declarations: parseVariableDeclarationList(parser, context | 33554432, scope, privateScope, 8, 32)
                      });
                  }
                  parser.assignable = 1;
              }
              else if (context & 256) {
                  report(parser, 67);
              }
              else {
                  isVarDecl = false;
                  parser.assignable = 1;
                  init = parseMemberOrUpdateExpression(parser, context, privateScope, init, 0, 0, tokenIndex, tokenLine, tokenColumn);
                  if (parser.getToken() === 274548)
                      report(parser, 115);
              }
          }
          else {
              collectLeadingComments(parser);
              nextToken(parser, context);
              init = finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, token === 86088
                  ? {
                      type: 'VariableDeclaration',
                      kind: 'var',
                      declarations: parseVariableDeclarationList(parser, context | 33554432, scope, privateScope, 4, 32)
                  }
                  : {
                      type: 'VariableDeclaration',
                      kind: 'const',
                      declarations: parseVariableDeclarationList(parser, context | 33554432, scope, privateScope, 16, 32)
                  });
              parser.assignable = 1;
          }
      }
      else if (token === 1074790417) {
          if (forAwait)
              report(parser, 82);
      }
      else if ((token & 2097152) === 2097152) {
          init =
              token === 2162700
                  ? parseObjectLiteralOrPattern(parser, context, void 0, privateScope, 1, 0, 0, 2, 32, tokenIndex, tokenLine, tokenColumn)
                  : parseArrayExpressionOrPattern(parser, context, void 0, privateScope, 1, 0, 0, 2, 32, tokenIndex, tokenLine, tokenColumn);
          destructible = parser.destructible;
          if (destructible & 64) {
              report(parser, 63);
          }
          parser.assignable =
              destructible & 16 ? 2 : 1;
          init = parseMemberOrUpdateExpression(parser, context | 33554432, privateScope, init, 0, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      }
      else {
          init = parseLeftHandSideExpression(parser, context | 33554432, privateScope, 1, 0, 1, tokenIndex, tokenLine, tokenColumn);
      }
      if ((parser.getToken() & 262144) === 262144) {
          if (parser.getToken() === 274548) {
              if (parser.assignable & 2)
                  report(parser, 80, forAwait ? 'await' : 'of');
              reinterpretToPattern(parser, init);
              nextToken(parser, context | 8192);
              right = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              consume(parser, context | 8192, 16);
              const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
              return finishNode(parser, context, start, line, column, {
                  type: 'ForOfStatement',
                  left: init,
                  right,
                  body,
                  await: forAwait
              });
          }
          if (parser.assignable & 2)
              report(parser, 80, 'in');
          reinterpretToPattern(parser, init);
          nextToken(parser, context | 8192);
          if (forAwait)
              report(parser, 82);
          right = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          consume(parser, context | 8192, 16);
          const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
          return finishNode(parser, context, start, line, column, {
              type: 'ForInStatement',
              body,
              left: init,
              right
          });
      }
      if (forAwait)
          report(parser, 82);
      if (!isVarDecl) {
          if (destructible & 8 && parser.getToken() !== 1077936155) {
              report(parser, 80, 'loop');
          }
          init = parseAssignmentExpression(parser, context | 33554432, privateScope, 0, 0, tokenIndex, tokenLine, tokenColumn, init);
      }
      if (parser.getToken() === 18)
          init = parseSequenceExpression(parser, context, privateScope, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn, init);
      consume(parser, context | 8192, 1074790417);
      if (parser.getToken() !== 1074790417)
          test = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context | 8192, 1074790417);
      if (parser.getToken() !== 16)
          update = parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context | 8192, 16);
      const body = parseIterationStatementBody(parser, context, scope, privateScope, labels);
      return finishNode(parser, context, start, line, column, {
          type: 'ForStatement',
          init,
          test,
          update,
          body
      });
  }
  function parseRestrictedIdentifier(parser, context, scope) {
      if (!isValidIdentifier(context, parser.getToken()))
          report(parser, 118);
      if ((parser.getToken() & 537079808) === 537079808)
          report(parser, 119);
      if (scope)
          addBlockName(parser, context, scope, parser.tokenValue, 8, 0);
      return parseIdentifier(parser, context);
  }
  function parseImportDeclaration(parser, context, scope) {
      const start = parser.tokenIndex;
      const line = parser.tokenLine;
      const column = parser.tokenColumn;
      collectLeadingComments(parser);
      nextToken(parser, context);
      let source = null;
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      let specifiers = [];
      if (parser.getToken() === 134283267) {
          source = parseLiteral(parser, context);
      }
      else {
          if (parser.getToken() & 143360) {
              collectLeadingComments(parser);
              const local = parseRestrictedIdentifier(parser, context, scope);
              specifiers = [
                  finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
                      type: 'ImportDefaultSpecifier',
                      local
                  })
              ];
              if (consumeOpt(parser, context, 18)) {
                  switch (parser.getToken()) {
                      case 8391476:
                          specifiers.push(parseImportNamespaceSpecifier(parser, context, scope));
                          break;
                      case 2162700:
                          parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                          break;
                      default:
                          report(parser, 107);
                  }
              }
          }
          else {
              switch (parser.getToken()) {
                  case 8391476:
                      specifiers = [parseImportNamespaceSpecifier(parser, context, scope)];
                      break;
                  case 2162700:
                      parseImportSpecifierOrNamedImports(parser, context, scope, specifiers);
                      break;
                  case 67174411:
                      return parseImportCallDeclaration(parser, context, undefined, start, line, column);
                  case 67108877:
                      return parseImportMetaDeclaration(parser, context, start, line, column);
                  default:
                      report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
              }
          }
          source = parseModuleSpecifier(parser, context);
      }
      const node = {
          type: 'ImportDeclaration',
          specifiers,
          source
      };
      if (context & 1) {
          node.attributes = parseImportAttributes(parser, context, specifiers);
      }
      matchOrInsertSemicolon(parser, context | 8192);
      return finishNode(parser, context, start, line, column, node);
  }
  function parseImportNamespaceSpecifier(parser, context, scope) {
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      collectLeadingComments(parser);
      nextToken(parser, context);
      consume(parser, context, 77932);
      if ((parser.getToken() & 134217728) === 134217728) {
          reportMessageAt(tokenIndex, tokenLine, tokenColumn, parser.index, parser.line, parser.column, 30, KeywordDescTable[parser.getToken() & 255]);
      }
      return finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
          type: 'ImportNamespaceSpecifier',
          local: parseRestrictedIdentifier(parser, context, scope)
      });
  }
  function parseModuleSpecifier(parser, context) {
      consume(parser, context, 12403);
      if (parser.getToken() !== 134283267)
          report(parser, 105, 'Import');
      return parseLiteral(parser, context);
  }
  function parseImportSpecifierOrNamedImports(parser, context, scope, specifiers) {
      nextToken(parser, context);
      while (parser.getToken() & 143360 || parser.getToken() === 134283267) {
          let { tokenValue, tokenIndex, tokenLine, tokenColumn } = parser;
          collectLeadingComments(parser);
          const token = parser.getToken();
          const imported = parseModuleExportName(parser, context);
          let local;
          if (consumeOpt(parser, context, 77932)) {
              if ((parser.getToken() & 134217728) === 134217728 ||
                  parser.getToken() === 18) {
                  report(parser, 106);
              }
              else {
                  validateBindingIdentifier(parser, context, 16, parser.getToken(), 0);
              }
              tokenValue = parser.tokenValue;
              local = parseIdentifier(parser, context);
          }
          else if (imported.type === 'Identifier') {
              validateBindingIdentifier(parser, context, 16, token, 0);
              local = imported;
          }
          else {
              report(parser, 25, KeywordDescTable[77932 & 255]);
          }
          if (scope)
              addBlockName(parser, context, scope, tokenValue, 8, 0);
          specifiers.push(finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
              type: 'ImportSpecifier',
              local,
              imported
          }));
          if (parser.getToken() !== 1074790415)
              consume(parser, context, 18);
      }
      consume(parser, context, 1074790415);
      return specifiers;
  }
  function parseImportMetaDeclaration(parser, context, start, line, column) {
      collectLeadingComments(parser);
      let expr = parseImportMetaExpression(parser, context, finishNode(parser, context, start, line, column, {
          type: 'Identifier',
          name: 'import'
      }), start, line, column);
      expr = parseMemberOrUpdateExpression(parser, context, undefined, expr, 0, 0, start, line, column);
      expr = parseAssignmentExpression(parser, context, undefined, 0, 0, start, line, column, expr);
      if (parser.getToken() === 18) {
          expr = parseSequenceExpression(parser, context, undefined, 0, start, line, column, expr);
      }
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseImportCallDeclaration(parser, context, privateScope, start, line, column) {
      let expr = parseImportExpression(parser, context, privateScope, 0, start, line, column);
      expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, start, line, column);
      if (parser.getToken() === 18) {
          expr = parseSequenceExpression(parser, context, privateScope, 0, start, line, column, expr);
      }
      return parseExpressionStatement(parser, context, expr, start, line, column);
  }
  function parseExportDeclaration(parser, context, scope) {
      const start = parser.tokenIndex;
      const line = parser.tokenLine;
      const column = parser.tokenColumn;
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const specifiers = [];
      let declaration = null;
      let source = null;
      let attributes = null;
      let key;
      if (consumeOpt(parser, context | 8192, 20561)) {
          collectLeadingComments(parser);
          switch (parser.getToken()) {
              case 86104: {
                  declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  break;
              }
              case 132:
              case 86094:
                  declaration = parseClassDeclaration(parser, context, scope, undefined, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  break;
              case 209005: {
                  const { tokenIndex, tokenLine, tokenColumn } = parser;
                  declaration = parseIdentifier(parser, context);
                  const { flags } = parser;
                  if ((flags & 1) === 0) {
                      if (parser.getToken() === 86104) {
                          declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 1, 1, tokenIndex, tokenLine, tokenColumn);
                      }
                      else {
                          if (parser.getToken() === 67174411) {
                              declaration = parseAsyncArrowOrCallExpression(parser, context, undefined, declaration, 1, 1, 0, flags, tokenIndex, tokenLine, tokenColumn);
                              declaration = parseMemberOrUpdateExpression(parser, context, undefined, declaration, 0, 0, tokenIndex, tokenLine, tokenColumn);
                              declaration = parseAssignmentExpression(parser, context, undefined, 0, 0, tokenIndex, tokenLine, tokenColumn, declaration);
                          }
                          else if (parser.getToken() & 143360) {
                              if (scope)
                                  scope = createArrowHeadParsingScope(parser, context, parser.tokenValue);
                              declaration = parseIdentifier(parser, context);
                              declaration = parseArrowFunctionExpression(parser, context, scope, undefined, [declaration], 1, tokenIndex, tokenLine, tokenColumn);
                          }
                      }
                  }
                  break;
              }
              default:
                  declaration = parseExpression(parser, context, undefined, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  matchOrInsertSemicolon(parser, context | 8192);
          }
          if (scope)
              declareUnboundVariable(parser, 'default');
          return finishNode(parser, context, start, line, column, {
              type: 'ExportDefaultDeclaration',
              declaration
          });
      }
      switch (parser.getToken()) {
          case 8391476: {
              nextToken(parser, context);
              let exported = null;
              const isNamedDeclaration = consumeOpt(parser, context, 77932);
              if (isNamedDeclaration) {
                  collectLeadingComments(parser);
                  if (scope)
                      declareUnboundVariable(parser, parser.tokenValue);
                  exported = parseModuleExportName(parser, context);
              }
              consume(parser, context, 12403);
              if (parser.getToken() !== 134283267)
                  report(parser, 105, 'Export');
              source = parseLiteral(parser, context);
              const node = {
                  type: 'ExportAllDeclaration',
                  source,
                  exported
              };
              if (context & 1) {
                  node.attributes = parseImportAttributes(parser, context);
              }
              matchOrInsertSemicolon(parser, context | 8192);
              return finishNode(parser, context, start, line, column, node);
          }
          case 2162700: {
              nextToken(parser, context);
              const tmpExportedNames = [];
              const tmpExportedBindings = [];
              let hasLiteralLocal = 0;
              while (parser.getToken() & 143360 || parser.getToken() === 134283267) {
                  const { tokenIndex, tokenValue, tokenLine, tokenColumn } = parser;
                  collectLeadingComments(parser);
                  const local = parseModuleExportName(parser, context);
                  if (local.type === 'Literal') {
                      hasLiteralLocal = 1;
                  }
                  let exported;
                  if (parser.getToken() === 77932) {
                      nextToken(parser, context);
                      if ((parser.getToken() & 143360) === 0 && parser.getToken() !== 134283267) {
                          report(parser, 106);
                      }
                      if (scope) {
                          tmpExportedNames.push(parser.tokenValue);
                          tmpExportedBindings.push(tokenValue);
                      }
                      exported = parseModuleExportName(parser, context);
                  }
                  else {
                      if (scope) {
                          tmpExportedNames.push(parser.tokenValue);
                          tmpExportedBindings.push(parser.tokenValue);
                      }
                      exported = local;
                  }
                  specifiers.push(finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
                      type: 'ExportSpecifier',
                      local,
                      exported
                  }));
                  if (parser.getToken() !== 1074790415)
                      consume(parser, context, 18);
              }
              consume(parser, context, 1074790415);
              if (consumeOpt(parser, context, 12403)) {
                  if (parser.getToken() !== 134283267)
                      report(parser, 105, 'Export');
                  source = parseLiteral(parser, context);
                  if (context & 1) {
                      attributes = parseImportAttributes(parser, context, specifiers);
                  }
                  if (scope) {
                      tmpExportedNames.forEach((n) => declareUnboundVariable(parser, n));
                  }
              }
              else {
                  if (hasLiteralLocal) {
                      report(parser, 172);
                  }
                  if (scope) {
                      tmpExportedNames.forEach((n) => declareUnboundVariable(parser, n));
                      tmpExportedBindings.forEach((b) => addBindingToExports(parser, b));
                  }
              }
              matchOrInsertSemicolon(parser, context | 8192);
              break;
          }
          case 86094:
              declaration = parseClassDeclaration(parser, context, scope, undefined, 2, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              break;
          case 86104:
              declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 2, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              break;
          case 241737:
              declaration = parseLexicalDeclaration(parser, context, scope, undefined, 8, 64, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              break;
          case 86090:
              declaration = parseLexicalDeclaration(parser, context, scope, undefined, 16, 64, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              break;
          case 86088:
              declaration = parseVariableStatement(parser, context, scope, undefined, 64, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              break;
          case 209005: {
              const { tokenIndex, tokenLine, tokenColumn } = parser;
              nextToken(parser, context);
              if ((parser.flags & 1) === 0 && parser.getToken() === 86104) {
                  declaration = parseFunctionDeclaration(parser, context, scope, undefined, 4, 1, 2, 1, tokenIndex, tokenLine, tokenColumn);
                  if (scope) {
                      key = declaration.id ? declaration.id.name : '';
                      declareUnboundVariable(parser, key);
                  }
                  break;
              }
          }
          default:
              report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      }
      const node = {
          type: 'ExportNamedDeclaration',
          declaration,
          specifiers,
          source
      };
      if (attributes) {
          node.attributes = attributes;
      }
      return finishNode(parser, context, start, line, column, node);
  }
  function parseExpression(parser, context, privateScope, canAssign, inGroup, start, line, column) {
      let expr = parsePrimaryExpression(parser, context, privateScope, 2, 0, canAssign, inGroup, 1, start, line, column);
      expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, 0, start, line, column);
      return parseAssignmentExpression(parser, context, privateScope, inGroup, 0, start, line, column, expr);
  }
  function parseSequenceExpression(parser, context, privateScope, inGroup, start, line, column, expr) {
      const expressions = [expr];
      collectLeadingComments(parser);
      while (consumeOpt(parser, context | 8192, 18)) {
          expressions.push(parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn));
      }
      return finishNode(parser, context, start, line, column, {
          type: 'SequenceExpression',
          expressions
      });
  }
  function parseExpressions(parser, context, privateScope, inGroup, canAssign, start, line, column) {
      const expr = parseExpression(parser, context, privateScope, canAssign, inGroup, start, line, column);
      return parser.getToken() === 18
          ? parseSequenceExpression(parser, context, privateScope, inGroup, start, line, column, expr)
          : expr;
  }
  function parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, start, line, column, left) {
      const token = parser.getToken();
      if ((token & 4194304) === 4194304) {
          collectLeadingComments(parser);
          if (parser.assignable & 2)
              report(parser, 26);
          if ((!isPattern && token === 1077936155 && left.type === 'ArrayExpression') ||
              left.type === 'ObjectExpression') {
              reinterpretToPattern(parser, left);
          }
          nextToken(parser, context | 8192);
          const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          parser.assignable = 2;
          return finishNode(parser, context, start, line, column, isPattern
              ? {
                  type: 'AssignmentPattern',
                  left,
                  right
              }
              : {
                  type: 'AssignmentExpression',
                  left,
                  operator: KeywordDescTable[token & 255],
                  right
              });
      }
      if ((token & 8388608) === 8388608) {
          left = parseBinaryExpression(parser, context, privateScope, inGroup, start, line, column, 4, token, left);
      }
      if (consumeOpt(parser, context | 8192, 22)) {
          left = parseConditionalExpression(parser, context, privateScope, left, start, line, column);
      }
      return left;
  }
  function parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, start, line, column, left) {
      const token = parser.getToken();
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      left = finishNode(parser, context, start, line, column, isPattern
          ? {
              type: 'AssignmentPattern',
              left,
              right
          }
          : {
              type: 'AssignmentExpression',
              left,
              operator: KeywordDescTable[token & 255],
              right
          });
      parser.assignable = 2;
      return left;
  }
  function parseConditionalExpression(parser, context, privateScope, test, start, line, column) {
      parser.leadingComments && parser.leadingComments.push([]);
      const consequent = parseExpression(parser, (context | 33554432) ^ 33554432, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context | 8192, 21);
      parser.assignable = 1;
      const alternate = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'ConditionalExpression',
          test,
          consequent,
          alternate
      });
  }
  function parseBinaryExpression(parser, context, privateScope, inGroup, start, line, column, minPrec, operator, left) {
      const bit = -((context & 33554432) > 0) & 8673330;
      let t;
      let prec;
      parser.assignable = 2;
      while (parser.getToken() & 8388608) {
          collectLeadingComments(parser);
          t = parser.getToken();
          prec = t & 3840;
          if ((t & 524288 && operator & 268435456) || (operator & 524288 && t & 268435456)) {
              report(parser, 165);
          }
          if (prec + ((t === 8391735) << 8) - ((bit === t) << 12) <= minPrec)
              break;
          nextToken(parser, context | 8192);
          left = finishNode(parser, context, start, line, column, {
              type: t & 524288 || t & 268435456 ? 'LogicalExpression' : 'BinaryExpression',
              left,
              right: parseBinaryExpression(parser, context, privateScope, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn, prec, t, parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn)),
              operator: KeywordDescTable[t & 255]
          });
      }
      if (parser.getToken() === 1077936155)
          report(parser, 26);
      return left;
  }
  function parseUnaryExpression(parser, context, privateScope, isLHS, start, line, column, inGroup) {
      if (!isLHS)
          report(parser, 0);
      const unaryOperator = parser.getToken();
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const arg = parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      if (parser.getToken() === 8391735)
          report(parser, 33);
      if (context & 256 && unaryOperator === 16863276) {
          if (arg.type === 'Identifier') {
              report(parser, 121);
          }
          else if (isPropertyWithPrivateFieldKey(arg)) {
              report(parser, 127);
          }
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'UnaryExpression',
          operator: KeywordDescTable[unaryOperator & 255],
          argument: arg,
          prefix: true
      });
  }
  function parseAsyncExpression(parser, context, privateScope, inGroup, isLHS, canAssign, inNew, start, line, column) {
      const token = parser.getToken();
      const expr = parseIdentifier(parser, context);
      const { flags } = parser;
      if ((flags & 1) === 0) {
          if (parser.getToken() === 86104) {
              return parseFunctionExpression(parser, context, privateScope, 1, inGroup, start, line, column);
          }
          if (isValidIdentifier(context, parser.getToken())) {
              if (!isLHS)
                  report(parser, 0);
              if ((parser.getToken() & 36864) === 36864) {
                  parser.flags |= 256;
              }
              return parseAsyncArrowAfterIdent(parser, context, privateScope, canAssign, start, line, column);
          }
      }
      if (!inNew && parser.getToken() === 67174411) {
          return parseAsyncArrowOrCallExpression(parser, context, privateScope, expr, canAssign, 1, 0, flags, start, line, column);
      }
      if (parser.getToken() === 10) {
          classifyIdentifier(parser, context, token);
          if (inNew)
              report(parser, 51);
          if ((token & 36864) === 36864) {
              parser.flags |= 256;
          }
          return parseArrowFromIdentifier(parser, context, privateScope, parser.tokenValue, expr, inNew, canAssign, 0, start, line, column);
      }
      parser.assignable = 1;
      return expr;
  }
  function parseYieldExpressionOrIdentifier(parser, context, privateScope, inGroup, canAssign, start, line, column) {
      if (inGroup)
          parser.destructible |= 256;
      if (context & 262144) {
          collectLeadingComments(parser);
          nextToken(parser, context | 8192);
          if (context & 2097152)
              report(parser, 32);
          if (!canAssign)
              report(parser, 26);
          if (parser.getToken() === 22)
              report(parser, 124);
          let argument = null;
          let delegate = false;
          if ((parser.flags & 1) === 0) {
              delegate = consumeOpt(parser, context | 8192, 8391476);
              if (parser.getToken() & (12288 | 65536) || delegate) {
                  argument = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              }
          }
          else if (parser.getToken() === 8391476) {
              report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
          }
          parser.assignable = 2;
          return finishNode(parser, context, start, line, column, {
              type: 'YieldExpression',
              argument,
              delegate
          });
      }
      if (context & 256)
          report(parser, 97, 'yield');
      return parseIdentifierOrArrow(parser, context, privateScope, start, line, column);
  }
  function parseAwaitExpressionOrIdentifier(parser, context, privateScope, inNew, inGroup, start, line, column) {
      if (inGroup)
          parser.destructible |= 128;
      if (context & 268435456)
          report(parser, 177);
      const possibleIdentiferOrArrowFunc = parseIdentifierOrArrow(parser, context, privateScope, start, line, column);
      const isIdentifier = possibleIdentiferOrArrowFunc.type === 'ArrowFunctionExpression' ||
          (parser.getToken() & 65536) === 0;
      if (isIdentifier) {
          if (context & 524288)
              reportMessageAt(start, line, column, parser.startIndex, parser.startLine, parser.startColumn, 176);
          if (context & 512)
              reportMessageAt(start, line, column, parser.startIndex, parser.startLine, parser.startColumn, 110);
          if (context & 2097152 && context & 524288)
              reportMessageAt(start, line, column, parser.startIndex, parser.startLine, parser.startColumn, 110);
          return possibleIdentiferOrArrowFunc;
      }
      if (context & 2097152) {
          reportMessageAt(start, line, column, parser.startIndex, parser.startLine, parser.startColumn, 31);
      }
      if (context & 524288 || (context & 512 && context & 2048)) {
          if (inNew)
              reportMessageAt(start, line, column, parser.startIndex, parser.startLine, parser.startColumn, 0);
          collectLeadingComments(parser);
          const argument = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          if (parser.getToken() === 8391735)
              report(parser, 33);
          parser.assignable = 2;
          return finishNode(parser, context, start, line, column, {
              type: 'AwaitExpression',
              argument
          });
      }
      if (context & 512)
          reportMessageAt(start, line, column, parser.startIndex, parser.startLine, parser.startColumn, 98);
      return possibleIdentiferOrArrowFunc;
  }
  function parseFunctionBody(parser, context, scope, privateScope, origin, funcNameToken, scopeError) {
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      collectLeadingComments(parser);
      consume(parser, context | 8192, 2162700);
      const body = [];
      if (parser.getToken() !== 1074790415) {
          while (parser.getToken() === 134283267) {
              const { index, tokenIndex, tokenValue } = parser;
              const token = parser.getToken();
              const expr = parseLiteral(parser, context);
              if (isValidStrictMode(parser, index, tokenIndex, tokenValue)) {
                  context |= 256;
                  if (parser.flags & 128) {
                      reportMessageAt(tokenIndex, tokenLine, tokenColumn, parser.index, parser.line, parser.column, 66);
                  }
                  if (parser.flags & 64) {
                      reportMessageAt(tokenIndex, tokenLine, tokenColumn, parser.index, parser.line, parser.column, 9);
                  }
                  if (parser.flags & 4096) {
                      reportMessageAt(tokenIndex, tokenLine, tokenColumn, parser.index, parser.line, parser.column, 15);
                  }
                  if (scopeError)
                      reportScopeError(scopeError);
              }
              body.push(parseDirective(parser, context, expr, token, tokenIndex, parser.tokenLine, parser.tokenColumn));
          }
          if (context & 256) {
              if (funcNameToken) {
                  if ((funcNameToken & 537079808) === 537079808) {
                      report(parser, 119);
                  }
                  if ((funcNameToken & 36864) === 36864) {
                      report(parser, 40);
                  }
              }
              if (parser.flags & 512)
                  report(parser, 119);
              if (parser.flags & 256)
                  report(parser, 118);
          }
      }
      parser.flags =
          (parser.flags | 512 | 256 | 64 | 4096) ^
              (512 | 256 | 64 | 4096);
      parser.destructible = (parser.destructible | 256) ^ 256;
      let innerComments = null;
      if (parser.attachComments) {
          if (parser.comments && parser.comments.length > 0) {
              innerComments = parser.comments;
              parser.comments = [];
          }
      }
      while (parser.getToken() !== 1074790415) {
          body.push(parseStatementListItem(parser, context, scope, privateScope, 4, {}));
      }
      consume(parser, origin & (16 | 8) ? context | 8192 : context, 1074790415);
      parser.flags &= ~(128 | 64 | 4096);
      if (parser.getToken() === 1077936155)
          report(parser, 26);
      const blockNode = finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
          type: 'BlockStatement',
          body
      });
      if (innerComments) {
          blockNode.innerComments = innerComments;
      }
      return blockNode;
  }
  function parseSuperExpression(parser, context, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      switch (parser.getToken()) {
          case 67108990:
              report(parser, 167);
          case 67174411: {
              if ((context & 131072) === 0)
                  report(parser, 28);
              parser.assignable = 2;
              break;
          }
          case 69271571:
          case 67108877: {
              if ((context & 65536) === 0)
                  report(parser, 29);
              parser.assignable = 1;
              break;
          }
          default:
              report(parser, 30, 'super');
      }
      return finishNode(parser, context, start, line, column, { type: 'Super' });
  }
  function parseLeftHandSideExpression(parser, context, privateScope, canAssign, inGroup, isLHS, start, line, column) {
      const expression = parsePrimaryExpression(parser, context, privateScope, 2, 0, canAssign, inGroup, isLHS, start, line, column);
      return parseMemberOrUpdateExpression(parser, context, privateScope, expression, inGroup, 0, start, line, column);
  }
  function parseUpdateExpression(parser, context, expr, start, line, column) {
      if (parser.assignable & 2)
          report(parser, 55);
      const token = parser.getToken();
      collectLeadingComments(parser);
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'UpdateExpression',
          argument: expr,
          operator: KeywordDescTable[token & 255],
          prefix: false
      });
  }
  function parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, inChain, start, line, column) {
      if ((parser.getToken() & 33619968) === 33619968 && (parser.flags & 1) === 0) {
          expr = parseUpdateExpression(parser, context, expr, start, line, column);
      }
      else if ((parser.getToken() & 67108864) === 67108864) {
          context = (context | 33554432) ^ 33554432;
          collectLeadingComments(parser);
          switch (parser.getToken()) {
              case 67108877: {
                  nextToken(parser, (context | 67108864 | 2048) ^ 2048);
                  if (context & 4096 && parser.getToken() === 130 && parser.tokenValue === 'super') {
                      report(parser, 173);
                  }
                  parser.assignable = 1;
                  const property = parsePropertyOrPrivatePropertyName(parser, context | 16384, privateScope);
                  expr = finishNode(parser, context, start, line, column, {
                      type: 'MemberExpression',
                      object: expr,
                      computed: false,
                      property
                  });
                  break;
              }
              case 69271571: {
                  let restoreHasOptionalChaining = false;
                  if ((parser.flags & 2048) === 2048) {
                      restoreHasOptionalChaining = true;
                      parser.flags = (parser.flags | 2048) ^ 2048;
                  }
                  nextToken(parser, context | 8192);
                  const { tokenIndex, tokenLine, tokenColumn } = parser;
                  const property = parseExpressions(parser, context, privateScope, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
                  consume(parser, context, 20);
                  parser.assignable = 1;
                  expr = finishNode(parser, context, start, line, column, {
                      type: 'MemberExpression',
                      object: expr,
                      computed: true,
                      property
                  });
                  if (restoreHasOptionalChaining) {
                      parser.flags |= 2048;
                  }
                  break;
              }
              case 67174411: {
                  if ((parser.flags & 1024) === 1024) {
                      parser.flags = (parser.flags | 1024) ^ 1024;
                      return expr;
                  }
                  let restoreHasOptionalChaining = false;
                  if ((parser.flags & 2048) === 2048) {
                      restoreHasOptionalChaining = true;
                      parser.flags = (parser.flags | 2048) ^ 2048;
                  }
                  const args = parseArguments(parser, context, privateScope, inGroup);
                  parser.assignable = 2;
                  expr = finishNode(parser, context, start, line, column, {
                      type: 'CallExpression',
                      callee: expr,
                      arguments: args
                  });
                  if (restoreHasOptionalChaining) {
                      parser.flags |= 2048;
                  }
                  break;
              }
              case 67108990: {
                  nextToken(parser, (context | 67108864 | 2048) ^ 2048);
                  parser.flags |= 2048;
                  parser.assignable = 2;
                  expr = parseOptionalChain(parser, context, privateScope, expr, start, line, column);
                  break;
              }
              default:
                  if ((parser.flags & 2048) === 2048) {
                      report(parser, 166);
                  }
                  parser.assignable = 2;
                  expr = finishNode(parser, context, start, line, column, {
                      type: 'TaggedTemplateExpression',
                      tag: expr,
                      quasi: parser.getToken() === 67174408
                          ? parseTemplate(parser, context | 16384, privateScope)
                          : parseTemplateLiteral(parser, context, parser.tokenIndex, parser.tokenLine, parser.tokenColumn)
                  });
          }
          expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 1, start, line, column);
      }
      if (inChain === 0 && (parser.flags & 2048) === 2048) {
          parser.flags = (parser.flags | 2048) ^ 2048;
          expr = finishNode(parser, context, start, line, column, {
              type: 'ChainExpression',
              expression: expr
          });
      }
      return expr;
  }
  function parseOptionalChain(parser, context, privateScope, expr, start, line, column) {
      collectLeadingComments(parser);
      let restoreHasOptionalChaining = false;
      let node;
      if (parser.getToken() === 69271571 || parser.getToken() === 67174411) {
          if ((parser.flags & 2048) === 2048) {
              restoreHasOptionalChaining = true;
              parser.flags = (parser.flags | 2048) ^ 2048;
          }
      }
      if (parser.getToken() === 69271571) {
          nextToken(parser, context | 8192);
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          const property = parseExpressions(parser, context, privateScope, 0, 1, tokenIndex, tokenLine, tokenColumn);
          consume(parser, context, 20);
          parser.assignable = 2;
          node = finishNode(parser, context, start, line, column, {
              type: 'MemberExpression',
              object: expr,
              computed: true,
              optional: true,
              property
          });
      }
      else if (parser.getToken() === 67174411) {
          const args = parseArguments(parser, context, privateScope, 0);
          parser.assignable = 2;
          node = finishNode(parser, context, start, line, column, {
              type: 'CallExpression',
              callee: expr,
              arguments: args,
              optional: true
          });
      }
      else {
          const property = parsePropertyOrPrivatePropertyName(parser, context, privateScope);
          parser.assignable = 2;
          node = finishNode(parser, context, start, line, column, {
              type: 'MemberExpression',
              object: expr,
              computed: false,
              optional: true,
              property
          });
      }
      if (restoreHasOptionalChaining) {
          parser.flags |= 2048;
      }
      return node;
  }
  function parsePropertyOrPrivatePropertyName(parser, context, privateScope) {
      if ((parser.getToken() & 143360) === 0 &&
          parser.getToken() !== -2147483528 &&
          parser.getToken() !== -2147483527 &&
          parser.getToken() !== 130) {
          report(parser, 160);
      }
      return parser.getToken() === 130
          ? parsePrivateIdentifier(parser, context, privateScope, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn)
          : parseIdentifier(parser, context);
  }
  function parseUpdateExpressionPrefixed(parser, context, privateScope, inNew, isLHS, start, line, column) {
      if (inNew)
          report(parser, 56);
      if (!isLHS)
          report(parser, 0);
      collectLeadingComments(parser);
      const token = parser.getToken();
      nextToken(parser, context | 8192);
      const arg = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      if (parser.assignable & 2) {
          report(parser, 55);
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'UpdateExpression',
          argument: arg,
          operator: KeywordDescTable[token & 255],
          prefix: true
      });
  }
  function parsePrimaryExpression(parser, context, privateScope, kind, inNew, canAssign, inGroup, isLHS, start, line, column) {
      if ((parser.getToken() & 143360) === 143360) {
          switch (parser.getToken()) {
              case 209006:
                  return parseAwaitExpressionOrIdentifier(parser, context, privateScope, inNew, inGroup, start, line, column);
              case 241771:
                  return parseYieldExpressionOrIdentifier(parser, context, privateScope, inGroup, canAssign, start, line, column);
              case 209005:
                  return parseAsyncExpression(parser, context, privateScope, inGroup, isLHS, canAssign, inNew, start, line, column);
          }
          const { tokenValue } = parser;
          const token = parser.getToken();
          const expr = parseIdentifier(parser, context | 16384);
          if (parser.getToken() === 10) {
              if (!isLHS)
                  report(parser, 0);
              classifyIdentifier(parser, context, token);
              if ((token & 36864) === 36864) {
                  parser.flags |= 256;
              }
              return parseArrowFromIdentifier(parser, context, privateScope, tokenValue, expr, inNew, canAssign, 0, start, line, column);
          }
          if (context & 4096 &&
              !(context & 8388608) &&
              !(context & 2097152) &&
              parser.tokenValue === 'arguments')
              report(parser, 130);
          if ((token & 255) === (241737 & 255)) {
              if (context & 256)
                  report(parser, 113);
              if (kind & (8 | 16))
                  report(parser, 100);
          }
          parser.assignable =
              context & 256 && (token & 537079808) === 537079808
                  ? 2
                  : 1;
          return expr;
      }
      if ((parser.getToken() & 134217728) === 134217728) {
          return parseLiteral(parser, context);
      }
      switch (parser.getToken()) {
          case 33619993:
          case 33619994:
              return parseUpdateExpressionPrefixed(parser, context, privateScope, inNew, isLHS, start, line, column);
          case 16863276:
          case 16842798:
          case 16842799:
          case 25233968:
          case 25233969:
          case 16863275:
          case 16863277:
              return parseUnaryExpression(parser, context, privateScope, isLHS, start, line, column, inGroup);
          case 86104:
              return parseFunctionExpression(parser, context, privateScope, 0, inGroup, start, line, column);
          case 2162700:
              return parseObjectLiteral(parser, context, privateScope, canAssign ? 0 : 1, inGroup, start, line, column);
          case 69271571:
              return parseArrayLiteral(parser, context, privateScope, canAssign ? 0 : 1, inGroup, start, line, column);
          case 67174411:
              const leadingComment = collectLeadingComments(parser);
              parser.leadingComments && parser.leadingComments.pop();
              const exprNode = parseParenthesizedExpression(parser, context | 16384, privateScope, canAssign, 1, 0, start, line, column);
              if (exprNode.leadingComment && leadingComment) {
                  exprNode.leadingComments.concat(leadingComment);
              }
              else if (leadingComment.length > 0) {
                  exprNode.leadingComments = leadingComment;
              }
              return exprNode;
          case 86021:
          case 86022:
          case 86023:
              return parseNullOrTrueOrFalseLiteral(parser, context, start, line, column);
          case 86111:
              return parseThisExpression(parser, context);
          case 65540:
              return parseRegExpLiteral(parser, context, start, line, column);
          case 132:
          case 86094:
              return parseClassExpression(parser, context, privateScope, inGroup, start, line, column);
          case 86109:
              return parseSuperExpression(parser, context, start, line, column);
          case 67174409:
              return parseTemplateLiteral(parser, context, start, line, column);
          case 67174408:
              return parseTemplate(parser, context, privateScope);
          case 86107:
              return parseNewExpression(parser, context, privateScope, inGroup, start, line, column);
          case 134283388:
              return parseBigIntLiteral(parser, context, start, line, column);
          case 130:
              return parsePrivateIdentifier(parser, context, privateScope, 0, start, line, column);
          case 86106:
              return parseImportCallOrMetaExpression(parser, context, privateScope, inNew, inGroup, start, line, column);
          case 8456256:
              if (context & 8)
                  return parseJSXRootElementOrFragment(parser, context, privateScope, 0, start, line, column);
          default:
              if (isValidIdentifier(context, parser.getToken()))
                  return parseIdentifierOrArrow(parser, context, privateScope, start, line, column);
              report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      }
  }
  function parseImportCallOrMetaExpression(parser, context, privateScope, inNew, inGroup, start, line, column) {
      let expr = parseIdentifier(parser, context);
      if (parser.getToken() === 67108877) {
          return parseImportMetaExpression(parser, context, expr, start, line, column);
      }
      if (inNew)
          report(parser, 142);
      expr = parseImportExpression(parser, context, privateScope, inGroup, start, line, column);
      parser.assignable = 2;
      return parseMemberOrUpdateExpression(parser, context, privateScope, expr, inGroup, 0, start, line, column);
  }
  function parseImportMetaExpression(parser, context, meta, start, line, column) {
      if ((context & 512) === 0)
          report(parser, 169);
      collectLeadingComments(parser);
      nextToken(parser, context);
      const token = parser.getToken();
      if (token !== 209030 && parser.tokenValue !== 'meta') {
          report(parser, 174);
      }
      else if (token & -2147483648) {
          report(parser, 175);
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'MetaProperty',
          meta,
          property: parseIdentifier(parser, context)
      });
  }
  function parseImportExpression(parser, context, privateScope, inGroup, start, line, column) {
      collectLeadingComments(parser);
      consume(parser, context | 8192, 67174411);
      if (parser.getToken() === 14)
          report(parser, 143);
      const source = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      const node = {
          type: 'ImportExpression',
          source
      };
      if (context & 1) {
          let options = null;
          if (parser.getToken() === 18) {
              consume(parser, context, 18);
              if (parser.getToken() !== 16) {
                  const expContext = (context | 33554432) ^ 33554432;
                  options = parseExpression(parser, expContext, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              }
          }
          node.options = options;
          consumeOpt(parser, context, 18);
      }
      consume(parser, context, 16);
      return finishNode(parser, context, start, line, column, node);
  }
  function parseImportAttributes(parser, context, specifiers = null) {
      if (!consumeOpt(parser, context, 20579))
          return [];
      consume(parser, context, 2162700);
      const attributes = [];
      const keysContent = new Set();
      while (parser.getToken() !== 1074790415) {
          const start = parser.tokenIndex;
          const line = parser.tokenLine;
          const column = parser.tokenColumn;
          const key = parseIdentifierOrStringLiteral(parser, context);
          consume(parser, context, 21);
          const value = parseStringLiteral(parser, context);
          const keyContent = key.type === 'Literal' ? key.value : key.name;
          const isJSONImportAttribute = keyContent === 'type' && value.value === 'json';
          if (isJSONImportAttribute) {
              const validJSONImportAttributeBindings = specifiers === null ||
                  (specifiers.length === 1 &&
                      (specifiers[0].type === 'ImportDefaultSpecifier' ||
                          specifiers[0].type === 'ImportNamespaceSpecifier' ||
                          (specifiers[0].type === 'ImportSpecifier' &&
                              specifiers[0].imported.type === 'Identifier' &&
                              specifiers[0].imported.name === 'default') ||
                          (specifiers[0].type === 'ExportSpecifier' &&
                              specifiers[0].local.type === 'Identifier' &&
                              specifiers[0].local.name === 'default')));
              if (!validJSONImportAttributeBindings)
                  report(parser, 140);
          }
          if (keysContent.has(keyContent)) {
              report(parser, 145, `${keyContent}`);
          }
          keysContent.add(keyContent);
          attributes.push(finishNode(parser, context, start, line, column, {
              type: 'ImportAttribute',
              key,
              value
          }));
          if (parser.getToken() !== 1074790415) {
              consume(parser, context, 18);
          }
      }
      consume(parser, context, 1074790415);
      return attributes;
  }
  function parseStringLiteral(parser, context) {
      if (parser.getToken() === 134283267) {
          return parseLiteral(parser, context);
      }
      else {
          report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      }
  }
  function parseIdentifierOrStringLiteral(parser, context) {
      if (parser.getToken() === 134283267) {
          return parseLiteral(parser, context);
      }
      else if (parser.getToken() & 143360) {
          return parseIdentifier(parser, context);
      }
      else {
          report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      }
  }
  function validateStringWellFormed(parser, str) {
      const len = str.length;
      for (let i = 0; i < len; i++) {
          const code = str.charCodeAt(i);
          if ((code & 0xfc00) !== 55296)
              continue;
          if (code > 56319 || ++i >= len || (str.charCodeAt(i) & 0xfc00) !== 56320) {
              report(parser, 171, JSON.stringify(str.charAt(i--)));
          }
      }
  }
  function parseModuleExportName(parser, context) {
      if (parser.getToken() === 134283267) {
          validateStringWellFormed(parser, parser.tokenValue);
          return parseLiteral(parser, context);
      }
      else if (parser.getToken() & 143360) {
          return parseIdentifier(parser, context);
      }
      else {
          report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      }
  }
  function parseBigIntLiteral(parser, context, start, line, column) {
      const { tokenRaw, tokenValue } = parser;
      collectLeadingComments(parser);
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, context & 128
          ? {
              type: 'Literal',
              value: tokenValue,
              bigint: tokenRaw.slice(0, -1),
              raw: tokenRaw
          }
          : {
              type: 'Literal',
              value: tokenValue,
              bigint: tokenRaw.slice(0, -1)
          });
  }
  function parseTemplateLiteral(parser, context, start, line, column) {
      collectLeadingComments(parser);
      parser.assignable = 2;
      const { tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn } = parser;
      consume(parser, context, 67174409);
      const quasis = [
          parseTemplateElement(parser, context, tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn, true)
      ];
      return finishNode(parser, context, start, line, column, {
          type: 'TemplateLiteral',
          expressions: [],
          quasis
      });
  }
  function parseTemplate(parser, context, privateScope) {
      context = (context | 33554432) ^ 33554432;
      collectLeadingComments(parser);
      const { tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn } = parser;
      consume(parser, (context & ~16384) | 8192, 67174408);
      const quasis = [
          parseTemplateElement(parser, context, tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn, false)
      ];
      const expressions = [
          parseExpressions(parser, context & ~16384, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn)
      ];
      if (parser.getToken() !== 1074790415)
          report(parser, 83);
      while (parser.setToken(scanTemplateTail(parser, context), true) !== 67174409) {
          const { tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn } = parser;
          consume(parser, (context & ~16384) | 8192, 67174408);
          quasis.push(parseTemplateElement(parser, context, tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn, false));
          expressions.push(parseExpressions(parser, context, privateScope, 0, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn));
          if (parser.getToken() !== 1074790415)
              report(parser, 83);
      }
      {
          const { tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn } = parser;
          consume(parser, context, 67174409);
          quasis.push(parseTemplateElement(parser, context, tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn, true));
      }
      return finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
          type: 'TemplateLiteral',
          expressions,
          quasis
      });
  }
  function parseTemplateElement(parser, context, cooked, raw, start, line, col, tail) {
      parser.leadingComments && parser.leadingComments.push([]);
      const node = finishNode(parser, context, start, line, col, {
          type: 'TemplateElement',
          value: {
              cooked,
              raw
          },
          tail
      });
      const tailSize = tail ? 1 : 2;
      if (context & 2) {
          node.start += 1;
          node.range[0] += 1;
          node.end -= tailSize;
          node.range[1] -= tailSize;
      }
      if (context & 4) {
          node.loc.start.column += 1;
          node.loc.end.column -= tailSize;
      }
      return node;
  }
  function parseSpreadElement(parser, context, privateScope, start, line, column) {
      context = (context | 33554432) ^ 33554432;
      collectLeadingComments(parser);
      consume(parser, context | 8192, 14);
      const argument = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      parser.assignable = 1;
      return finishNode(parser, context, start, line, column, {
          type: 'SpreadElement',
          argument
      });
  }
  function parseArguments(parser, context, privateScope, inGroup) {
      nextToken(parser, context | 8192);
      const args = [];
      if (parser.getToken() === 16) {
          nextToken(parser, context | 16384);
          return args;
      }
      while (parser.getToken() !== 16) {
          if (parser.getToken() === 14) {
              args.push(parseSpreadElement(parser, context, privateScope, parser.tokenIndex, parser.tokenLine, parser.tokenColumn));
          }
          else {
              args.push(parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn));
          }
          if (parser.getToken() !== 18)
              break;
          nextToken(parser, context | 8192);
          if (parser.getToken() === 16)
              break;
      }
      consume(parser, context | 16384, 16);
      return args;
  }
  function parseIdentifier(parser, context) {
      const { tokenValue, tokenIndex, tokenLine, tokenColumn } = parser;
      collectLeadingComments(parser);
      const allowRegex = tokenValue === 'await' && (parser.getToken() & -2147483648) === 0;
      nextToken(parser, context | (allowRegex ? 8192 : 0));
      return finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
          type: 'Identifier',
          name: tokenValue
      });
  }
  function parseLiteral(parser, context) {
      const { tokenValue, tokenRaw, tokenIndex, tokenLine, tokenColumn } = parser;
      collectLeadingComments(parser);
      if (parser.getToken() === 134283388) {
          return parseBigIntLiteral(parser, context, tokenIndex, tokenLine, tokenColumn);
      }
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, context & 128
          ? {
              type: 'Literal',
              value: tokenValue,
              raw: tokenRaw
          }
          : {
              type: 'Literal',
              value: tokenValue
          });
  }
  function parseNullOrTrueOrFalseLiteral(parser, context, start, line, column) {
      collectLeadingComments(parser);
      const raw = KeywordDescTable[parser.getToken() & 255];
      const value = parser.getToken() === 86023 ? null : raw === 'true';
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, context & 128
          ? {
              type: 'Literal',
              value,
              raw
          }
          : {
              type: 'Literal',
              value
          });
  }
  function parseThisExpression(parser, context) {
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      collectLeadingComments(parser);
      nextToken(parser, context);
      parser.assignable = 2;
      return finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
          type: 'ThisExpression'
      });
  }
  function parseFunctionDeclaration(parser, context, scope, privateScope, origin, allowGen, flags, isAsync, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const isGenerator = allowGen ? optionalBit(parser, context, 8391476) : 0;
      let id = null;
      let funcNameToken;
      let functionScope = scope ? createScope() : void 0;
      if (parser.getToken() === 67174411) {
          if ((flags & 1) === 0)
              report(parser, 39, 'Function');
      }
      else {
          const kind = origin & 4 && ((context & 2048) === 0 || (context & 512) === 0)
              ? 4
              : 64 | (isAsync ? 1024 : 0) | (isGenerator ? 1024 : 0);
          validateFunctionName(parser, context, parser.getToken());
          if (scope) {
              if (kind & 4) {
                  addVarName(parser, context, scope, parser.tokenValue, kind);
              }
              else {
                  addBlockName(parser, context, scope, parser.tokenValue, kind, origin);
              }
              functionScope = addChildScope(functionScope, 256);
              if (flags) {
                  if (flags & 2) {
                      declareUnboundVariable(parser, parser.tokenValue);
                  }
              }
          }
          funcNameToken = parser.getToken();
          if (parser.getToken() & 143360) {
              id = parseIdentifier(parser, context);
          }
          else {
              report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
          }
      }
      const modifierFlags = 65536 |
          131072 |
          262144 |
          524288 |
          2097152 |
          4194304;
      context =
          ((context | modifierFlags) ^ modifierFlags) |
              16777216 |
              (isAsync ? 524288 : 0) |
              (isGenerator ? 262144 : 0) |
              (isGenerator ? 0 : 67108864);
      if (scope)
          functionScope = addChildScope(functionScope, 512);
      const params = parseFormalParametersOrFormalList(parser, (context | 2097152) & ~268435456, functionScope, privateScope, 0, 1);
      const modiferFlags = 2048 | 1024 | 32768 | 268435456;
      const body = parseFunctionBody(parser, ((context | modiferFlags) ^ modiferFlags) | 8388608 | 1048576, scope ? addChildScope(functionScope, 128) : functionScope, privateScope, 8, funcNameToken, functionScope?.scopeError);
      return finishNode(parser, context, start, line, column, {
          type: 'FunctionDeclaration',
          id,
          params,
          body,
          async: isAsync === 1,
          generator: isGenerator === 1
      });
  }
  function parseFunctionExpression(parser, context, privateScope, isAsync, inGroup, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const isGenerator = optionalBit(parser, context, 8391476);
      const generatorAndAsyncFlags = (isAsync ? 524288 : 0) | (isGenerator ? 262144 : 0);
      let id = null;
      let funcNameToken;
      let scope = context & 16 ? createScope() : void 0;
      const modifierFlags = 65536 |
          131072 |
          262144 |
          524288 |
          2097152 |
          4194304 |
          268435456;
      if (parser.getToken() & 143360) {
          validateFunctionName(parser, ((context | modifierFlags) ^ modifierFlags) | generatorAndAsyncFlags, parser.getToken());
          if (scope)
              scope = addChildScope(scope, 256);
          funcNameToken = parser.getToken();
          id = parseIdentifier(parser, context);
      }
      context =
          ((context | modifierFlags) ^ modifierFlags) |
              16777216 |
              generatorAndAsyncFlags |
              (isGenerator ? 0 : 67108864);
      if (scope)
          scope = addChildScope(scope, 512);
      const params = parseFormalParametersOrFormalList(parser, (context | 2097152) & ~268435456, scope, privateScope, inGroup, 1);
      const body = parseFunctionBody(parser, (context & ~(33554432 | 1024 | 2048 | 32768 | 4096)) |
          8388608 |
          1048576, scope ? addChildScope(scope, 128) : scope, privateScope, 0, funcNameToken, scope?.scopeError);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'FunctionExpression',
          id,
          params,
          body,
          async: isAsync === 1,
          generator: isGenerator === 1
      });
  }
  function parseArrayLiteral(parser, context, privateScope, skipInitializer, inGroup, start, line, column) {
      const expr = parseArrayExpressionOrPattern(parser, context, void 0, privateScope, skipInitializer, inGroup, 0, 2, 0, start, line, column);
      if (parser.destructible & 64) {
          report(parser, 63);
      }
      if (parser.destructible & 8) {
          report(parser, 62);
      }
      return expr;
  }
  function parseArrayExpressionOrPattern(parser, context, scope, privateScope, skipInitializer, inGroup, isPattern, kind, origin, start, line, column) {
      nextToken(parser, context | 8192);
      const elements = [];
      let destructible = 0;
      context = (context | 33554432) ^ 33554432;
      while (parser.getToken() !== 20) {
          if (consumeOpt(parser, context | 8192, 18)) {
              elements.push(null);
          }
          else {
              let left;
              const { tokenIndex, tokenLine, tokenColumn, tokenValue } = parser;
              const token = parser.getToken();
              if (token & 143360) {
                  left = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
                  if (parser.getToken() === 1077936155) {
                      if (parser.assignable & 2)
                          report(parser, 26);
                      nextToken(parser, context | 8192);
                      if (scope)
                          addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
                      const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                      left = finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, isPattern
                          ? {
                              type: 'AssignmentPattern',
                              left,
                              right
                          }
                          : {
                              type: 'AssignmentExpression',
                              operator: '=',
                              left,
                              right
                          });
                      destructible |=
                          parser.destructible & 256
                              ? 256
                              : 0 | (parser.destructible & 128)
                                  ? 128
                                  : 0;
                  }
                  else if (parser.getToken() === 18 || parser.getToken() === 20) {
                      if (parser.assignable & 2) {
                          destructible |= 16;
                      }
                      else if (scope) {
                          addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
                      }
                      destructible |=
                          parser.destructible & 256
                              ? 256
                              : 0 | (parser.destructible & 128)
                                  ? 128
                                  : 0;
                  }
                  else {
                      destructible |=
                          kind & 1
                              ? 32
                              : (kind & 2) === 0
                                  ? 16
                                  : 0;
                      left = parseMemberOrUpdateExpression(parser, context, privateScope, left, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                      if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                          if (parser.getToken() !== 1077936155)
                              destructible |= 16;
                          left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, left);
                      }
                      else if (parser.getToken() !== 1077936155) {
                          destructible |=
                              parser.assignable & 2
                                  ? 16
                                  : 32;
                      }
                  }
              }
              else if (token & 2097152) {
                  left =
                      parser.getToken() === 2162700
                          ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn)
                          : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn);
                  destructible |= parser.destructible;
                  parser.assignable =
                      parser.destructible & 16
                          ? 2
                          : 1;
                  if (parser.getToken() === 18 || parser.getToken() === 20) {
                      if (parser.assignable & 2) {
                          destructible |= 16;
                      }
                  }
                  else if (parser.destructible & 8) {
                      report(parser, 71);
                  }
                  else {
                      left = parseMemberOrUpdateExpression(parser, context, privateScope, left, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                      destructible = parser.assignable & 2 ? 16 : 0;
                      if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                          left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, left);
                      }
                      else if (parser.getToken() !== 1077936155) {
                          destructible |=
                              parser.assignable & 2
                                  ? 16
                                  : 32;
                      }
                  }
              }
              else if (token === 14) {
                  left = parseSpreadOrRestElement(parser, context, scope, privateScope, 20, kind, origin, 0, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn);
                  destructible |= parser.destructible;
                  if (parser.getToken() !== 18 && parser.getToken() !== 20)
                      report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
              }
              else {
                  left = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1, tokenIndex, tokenLine, tokenColumn);
                  if (parser.getToken() !== 18 && parser.getToken() !== 20) {
                      left = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, left);
                      if ((kind & (2 | 1)) === 0 && token === 67174411)
                          destructible |= 16;
                  }
                  else if (parser.assignable & 2) {
                      destructible |= 16;
                  }
                  else if (token === 67174411) {
                      destructible |=
                          parser.assignable & 1 && kind & (2 | 1)
                              ? 32
                              : 16;
                  }
              }
              elements.push(left);
              if (consumeOpt(parser, context | 8192, 18)) {
                  if (parser.getToken() === 20)
                      break;
              }
              else
                  break;
          }
      }
      consume(parser, context, 20);
      const node = finishNode(parser, context, start, line, column, {
          type: isPattern ? 'ArrayPattern' : 'ArrayExpression',
          elements
      });
      if (!skipInitializer && parser.getToken() & 4194304) {
          return parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, line, column, node);
      }
      parser.destructible = destructible;
      return node;
  }
  function parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, line, column, node) {
      if (parser.getToken() !== 1077936155)
          report(parser, 26);
      nextToken(parser, context | 8192);
      if (destructible & 16)
          report(parser, 26);
      if (!isPattern)
          reinterpretToPattern(parser, node);
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      const right = parseExpression(parser, context, privateScope, 1, inGroup, tokenIndex, tokenLine, tokenColumn);
      parser.destructible =
          ((destructible | 64 | 8) ^
              (8 | 64)) |
              (parser.destructible & 128 ? 128 : 0) |
              (parser.destructible & 256 ? 256 : 0);
      return finishNode(parser, context, start, line, column, isPattern
          ? {
              type: 'AssignmentPattern',
              left: node,
              right
          }
          : {
              type: 'AssignmentExpression',
              left: node,
              operator: '=',
              right
          });
  }
  function parseSpreadOrRestElement(parser, context, scope, privateScope, closingToken, kind, origin, isAsync, inGroup, isPattern, start, line, column) {
      nextToken(parser, context | 8192);
      let argument = null;
      let destructible = 0;
      const { tokenValue, tokenIndex, tokenLine, tokenColumn } = parser;
      let token = parser.getToken();
      if (token & 143360) {
          parser.assignable = 1;
          argument = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
          token = parser.getToken();
          argument = parseMemberOrUpdateExpression(parser, context, privateScope, argument, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
          if (parser.getToken() !== 18 && parser.getToken() !== closingToken) {
              if (parser.assignable & 2 && parser.getToken() === 1077936155)
                  report(parser, 71);
              destructible |= 16;
              argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, argument);
          }
          if (parser.assignable & 2) {
              destructible |= 16;
          }
          else if (token === closingToken || token === 18) {
              if (scope)
                  addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
          }
          else {
              destructible |= 32;
          }
          destructible |= parser.destructible & 128 ? 128 : 0;
      }
      else if (token === closingToken) {
          report(parser, 41);
      }
      else if (token & 2097152) {
          argument =
              parser.getToken() === 2162700
                  ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn)
                  : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn);
          token = parser.getToken();
          if (token !== 1077936155 && token !== closingToken && token !== 18) {
              if (parser.destructible & 8)
                  report(parser, 71);
              argument = parseMemberOrUpdateExpression(parser, context, privateScope, argument, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
              destructible |= parser.assignable & 2 ? 16 : 0;
              if ((parser.getToken() & 4194304) === 4194304) {
                  if (parser.getToken() !== 1077936155)
                      destructible |= 16;
                  argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, argument);
              }
              else {
                  if ((parser.getToken() & 8388608) === 8388608) {
                      argument = parseBinaryExpression(parser, context, privateScope, 1, tokenIndex, tokenLine, tokenColumn, 4, token, argument);
                  }
                  if (consumeOpt(parser, context | 8192, 22)) {
                      argument = parseConditionalExpression(parser, context, privateScope, argument, tokenIndex, tokenLine, tokenColumn);
                  }
                  destructible |=
                      parser.assignable & 2
                          ? 16
                          : 32;
              }
          }
          else {
              destructible |=
                  closingToken === 1074790415 && token !== 1077936155
                      ? 16
                      : parser.destructible;
          }
      }
      else {
          destructible |= 32;
          argument = parseLeftHandSideExpression(parser, context, privateScope, 1, inGroup, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          const token = parser.getToken();
          if (token === 1077936155) {
              if (parser.assignable & 2)
                  report(parser, 26);
              argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, argument);
              destructible |= 16;
          }
          else {
              if (token === 18) {
                  destructible |= 16;
              }
              else if (token !== closingToken) {
                  argument = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, argument);
              }
              destructible |=
                  parser.assignable & 1 ? 32 : 16;
          }
          parser.destructible = destructible;
          if (parser.getToken() !== closingToken && parser.getToken() !== 18)
              report(parser, 161);
          return finishNode(parser, context, start, line, column, {
              type: isPattern ? 'RestElement' : 'SpreadElement',
              argument: argument
          });
      }
      if (parser.getToken() !== closingToken) {
          if (kind & 1)
              destructible |= isAsync ? 16 : 32;
          if (consumeOpt(parser, context | 8192, 1077936155)) {
              if (destructible & 16)
                  report(parser, 26);
              reinterpretToPattern(parser, argument);
              const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              argument = finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, isPattern
                  ? {
                      type: 'AssignmentPattern',
                      left: argument,
                      right
                  }
                  : {
                      type: 'AssignmentExpression',
                      left: argument,
                      operator: '=',
                      right
                  });
              destructible = 16;
          }
          else {
              destructible |= 16;
          }
      }
      parser.destructible = destructible;
      return finishNode(parser, context, start, line, column, {
          type: isPattern ? 'RestElement' : 'SpreadElement',
          argument: argument
      });
  }
  function parseMethodDefinition(parser, context, privateScope, kind, inGroup, start, line, column) {
      const modifierFlags = 262144 |
          524288 |
          2097152 |
          ((kind & 64) === 0 ? 131072 | 4194304 : 0);
      context =
          ((context | modifierFlags) ^ modifierFlags) |
              (kind & 8 ? 262144 : 0) |
              (kind & 16 ? 524288 : 0) |
              (kind & 64 ? 4194304 : 0) |
              65536 |
              8388608 |
              16777216;
      collectLeadingComments(parser);
      let scope = context & 16 ? addChildScope(createScope(), 512) : void 0;
      const params = parseMethodFormals(parser, (context | 2097152) & ~268435456, scope, privateScope, kind, 1, inGroup);
      if (scope)
          scope = addChildScope(scope, 128);
      const body = parseFunctionBody(parser, (context & ~(33554432 | 1024 | 2048 | 268435456)) |
          8388608 |
          1048576, scope, privateScope, 0, void 0, scope?.parent?.scopeError);
      return finishNode(parser, context, start, line, column, {
          type: 'FunctionExpression',
          params,
          body,
          async: (kind & 16) > 0,
          generator: (kind & 8) > 0,
          id: null
      });
  }
  function parseObjectLiteral(parser, context, privateScope, skipInitializer, inGroup, start, line, column) {
      const expr = parseObjectLiteralOrPattern(parser, context, void 0, privateScope, skipInitializer, inGroup, 0, 2, 0, start, line, column);
      if (parser.destructible & 64) {
          report(parser, 63);
      }
      if (parser.destructible & 8) {
          report(parser, 62);
      }
      return expr;
  }
  function parseObjectLiteralOrPattern(parser, context, scope, privateScope, skipInitializer, inGroup, isPattern, kind, origin, start, line, column) {
      nextToken(parser, context);
      const properties = [];
      let destructible = 0;
      let prototypeCount = 0;
      context = (context | 33554432) ^ 33554432;
      while (parser.getToken() !== 1074790415) {
          const { tokenValue, tokenLine, tokenColumn, tokenIndex } = parser;
          const token = parser.getToken();
          if (token === 14) {
              properties.push(parseSpreadOrRestElement(parser, context, scope, privateScope, 1074790415, kind, origin, 0, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn));
          }
          else {
              let state = 0;
              let key = null;
              let value;
              if (parser.getToken() & 143360 ||
                  parser.getToken() === -2147483528 ||
                  parser.getToken() === -2147483527) {
                  if (parser.getToken() === -2147483527)
                      destructible |= 16;
                  key = parseIdentifier(parser, context);
                  if (parser.getToken() === 18 ||
                      parser.getToken() === 1074790415 ||
                      parser.getToken() === 1077936155) {
                      state |= 4;
                      if (context & 256 && (token & 537079808) === 537079808) {
                          destructible |= 16;
                      }
                      else {
                          validateBindingIdentifier(parser, context, kind, token, 0);
                      }
                      if (scope)
                          addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
                      if (consumeOpt(parser, context | 8192, 1077936155)) {
                          destructible |= 8;
                          const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                          destructible |=
                              parser.destructible & 256
                                  ? 256
                                  : 0 | (parser.destructible & 128)
                                      ? 128
                                      : 0;
                          value = finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
                              type: 'AssignmentPattern',
                              left: context & 134217728 ? { ...key } : key,
                              right
                          });
                      }
                      else {
                          destructible |=
                              (token === 209006 ? 128 : 0) |
                                  (token === -2147483528 ? 16 : 0);
                          value = context & 134217728 ? { ...key } : key;
                      }
                  }
                  else if (consumeOpt(parser, context | 8192, 21)) {
                      const { tokenIndex, tokenLine, tokenColumn } = parser;
                      if (tokenValue === '__proto__')
                          prototypeCount++;
                      if (parser.getToken() & 143360) {
                          const tokenAfterColon = parser.getToken();
                          const valueAfterColon = parser.tokenValue;
                          value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
                          const token = parser.getToken();
                          value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                          if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (token === 1077936155 || token === 1074790415 || token === 18) {
                                  destructible |= parser.destructible & 128 ? 128 : 0;
                                  if (parser.assignable & 2) {
                                      destructible |= 16;
                                  }
                                  else if (scope && (tokenAfterColon & 143360) === 143360) {
                                      addVarOrBlock(parser, context, scope, valueAfterColon, kind, origin);
                                  }
                              }
                              else {
                                  destructible |=
                                      parser.assignable & 1
                                          ? 32
                                          : 16;
                              }
                          }
                          else if ((parser.getToken() & 4194304) === 4194304) {
                              if (parser.assignable & 2) {
                                  destructible |= 16;
                              }
                              else if (token !== 1077936155) {
                                  destructible |= 32;
                              }
                              else if (scope) {
                                  addVarOrBlock(parser, context, scope, valueAfterColon, kind, origin);
                              }
                              value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                          }
                          else {
                              destructible |= 16;
                              if ((parser.getToken() & 8388608) === 8388608) {
                                  value = parseBinaryExpression(parser, context, privateScope, 1, tokenIndex, tokenLine, tokenColumn, 4, token, value);
                              }
                              if (consumeOpt(parser, context | 8192, 22)) {
                                  value = parseConditionalExpression(parser, context, privateScope, value, tokenIndex, tokenLine, tokenColumn);
                              }
                          }
                      }
                      else if ((parser.getToken() & 2097152) === 2097152) {
                          value =
                              parser.getToken() === 69271571
                                  ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn)
                                  : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn);
                          destructible = parser.destructible;
                          parser.assignable =
                              destructible & 16 ? 2 : 1;
                          if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                          }
                          else if (parser.destructible & 8) {
                              report(parser, 71);
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                              destructible = parser.assignable & 2 ? 16 : 0;
                              if ((parser.getToken() & 4194304) === 4194304) {
                                  value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                              }
                              else {
                                  if ((parser.getToken() & 8388608) === 8388608) {
                                      value = parseBinaryExpression(parser, context, privateScope, 1, tokenIndex, tokenLine, tokenColumn, 4, token, value);
                                  }
                                  if (consumeOpt(parser, context | 8192, 22)) {
                                      value = parseConditionalExpression(parser, context, privateScope, value, tokenIndex, tokenLine, tokenColumn);
                                  }
                                  destructible |=
                                      parser.assignable & 2
                                          ? 16
                                          : 32;
                              }
                          }
                      }
                      else {
                          value = parseLeftHandSideExpression(parser, context, privateScope, 1, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
                          destructible |=
                              parser.assignable & 1
                                  ? 32
                                  : 16;
                          if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                              destructible = parser.assignable & 2 ? 16 : 0;
                              if (parser.getToken() !== 18 && token !== 1074790415) {
                                  if (parser.getToken() !== 1077936155)
                                      destructible |= 16;
                                  value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                              }
                          }
                      }
                  }
                  else if (parser.getToken() === 69271571) {
                      destructible |= 16;
                      if (token === 209005)
                          state |= 16;
                      state |=
                          (token === 12400
                              ? 256
                              : token === 12401
                                  ? 512
                                  : 1) | 2;
                      key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                      destructible |= parser.assignable;
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  }
                  else if (parser.getToken() & 143360) {
                      destructible |= 16;
                      if (token === -2147483528)
                          report(parser, 95);
                      if (token === 209005) {
                          if (parser.flags & 1)
                              report(parser, 132);
                          state |= 16 | 1;
                      }
                      else if (token === 12400) {
                          state |= 256;
                      }
                      else if (token === 12401) {
                          state |= 512;
                      }
                      else {
                          report(parser, 0);
                      }
                      key = parseIdentifier(parser, context);
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  }
                  else if (parser.getToken() === 67174411) {
                      destructible |= 16;
                      state |= 1;
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  }
                  else if (parser.getToken() === 8391476) {
                      destructible |= 16;
                      if (token === 12400) {
                          report(parser, 42);
                      }
                      else if (token === 12401) {
                          report(parser, 43);
                      }
                      else if (token !== 209005) {
                          report(parser, 30, KeywordDescTable[8391476 & 255]);
                      }
                      nextToken(parser, context);
                      state |=
                          8 | 1 | (token === 209005 ? 16 : 0);
                      if (parser.getToken() & 143360) {
                          key = parseIdentifier(parser, context);
                      }
                      else if ((parser.getToken() & 134217728) === 134217728) {
                          key = parseLiteral(parser, context);
                      }
                      else if (parser.getToken() === 69271571) {
                          state |= 2;
                          key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                          destructible |= parser.assignable;
                      }
                      else {
                          report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
                      }
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  }
                  else if ((parser.getToken() & 134217728) === 134217728) {
                      if (token === 209005)
                          state |= 16;
                      state |=
                          token === 12400
                              ? 256
                              : token === 12401
                                  ? 512
                                  : 1;
                      destructible |= 16;
                      key = parseLiteral(parser, context);
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  }
                  else {
                      report(parser, 133);
                  }
              }
              else if ((parser.getToken() & 134217728) === 134217728) {
                  key = parseLiteral(parser, context);
                  if (parser.getToken() === 21) {
                      consume(parser, context | 8192, 21);
                      const { tokenIndex, tokenLine, tokenColumn } = parser;
                      if (tokenValue === '__proto__')
                          prototypeCount++;
                      if (parser.getToken() & 143360) {
                          value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
                          const { tokenValue: valueAfterColon } = parser;
                          const token = parser.getToken();
                          value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                          if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (token === 1077936155 || token === 1074790415 || token === 18) {
                                  if (parser.assignable & 2) {
                                      destructible |= 16;
                                  }
                                  else if (scope) {
                                      addVarOrBlock(parser, context, scope, valueAfterColon, kind, origin);
                                  }
                              }
                              else {
                                  destructible |=
                                      parser.assignable & 1
                                          ? 32
                                          : 16;
                              }
                          }
                          else if (parser.getToken() === 1077936155) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                              value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                          }
                          else {
                              destructible |= 16;
                              value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                          }
                      }
                      else if ((parser.getToken() & 2097152) === 2097152) {
                          value =
                              parser.getToken() === 69271571
                                  ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn)
                                  : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn);
                          destructible = parser.destructible;
                          parser.assignable =
                              destructible & 16 ? 2 : 1;
                          if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (parser.assignable & 2) {
                                  destructible |= 16;
                              }
                          }
                          else if ((parser.destructible & 8) !== 8) {
                              value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                              destructible = parser.assignable & 2 ? 16 : 0;
                              if ((parser.getToken() & 4194304) === 4194304) {
                                  value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                              }
                              else {
                                  if ((parser.getToken() & 8388608) === 8388608) {
                                      value = parseBinaryExpression(parser, context, privateScope, 1, tokenIndex, tokenLine, tokenColumn, 4, token, value);
                                  }
                                  if (consumeOpt(parser, context | 8192, 22)) {
                                      value = parseConditionalExpression(parser, context, privateScope, value, tokenIndex, tokenLine, tokenColumn);
                                  }
                                  destructible |=
                                      parser.assignable & 2
                                          ? 16
                                          : 32;
                              }
                          }
                      }
                      else {
                          value = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1, tokenIndex, tokenLine, tokenColumn);
                          destructible |=
                              parser.assignable & 1
                                  ? 32
                                  : 16;
                          if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (parser.assignable & 2) {
                                  destructible |= 16;
                              }
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                              destructible = parser.assignable & 1 ? 0 : 16;
                              if (parser.getToken() !== 18 && parser.getToken() !== 1074790415) {
                                  if (parser.getToken() !== 1077936155)
                                      destructible |= 16;
                                  value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                              }
                          }
                      }
                  }
                  else if (parser.getToken() === 67174411) {
                      state |= 1;
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                      destructible = parser.assignable | 16;
                  }
                  else {
                      report(parser, 134);
                  }
              }
              else if (parser.getToken() === 69271571) {
                  key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                  destructible |= parser.destructible & 256 ? 256 : 0;
                  state |= 2;
                  if (parser.getToken() === 21) {
                      nextToken(parser, context | 8192);
                      const { tokenIndex, tokenLine, tokenColumn, tokenValue } = parser;
                      const tokenAfterColon = parser.getToken();
                      if (parser.getToken() & 143360) {
                          value = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
                          const token = parser.getToken();
                          value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                          if ((parser.getToken() & 4194304) === 4194304) {
                              destructible |=
                                  parser.assignable & 2
                                      ? 16
                                      : token === 1077936155
                                          ? 0
                                          : 32;
                              value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                          }
                          else if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (token === 1077936155 || token === 1074790415 || token === 18) {
                                  if (parser.assignable & 2) {
                                      destructible |= 16;
                                  }
                                  else if (scope && (tokenAfterColon & 143360) === 143360) {
                                      addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
                                  }
                              }
                              else {
                                  destructible |=
                                      parser.assignable & 1
                                          ? 32
                                          : 16;
                              }
                          }
                          else {
                              destructible |= 16;
                              value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                          }
                      }
                      else if ((parser.getToken() & 2097152) === 2097152) {
                          value =
                              parser.getToken() === 69271571
                                  ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn)
                                  : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, inGroup, isPattern, kind, origin, tokenIndex, tokenLine, tokenColumn);
                          destructible = parser.destructible;
                          parser.assignable =
                              destructible & 16 ? 2 : 1;
                          if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                          }
                          else if (destructible & 8) {
                              report(parser, 62);
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                              destructible =
                                  parser.assignable & 2 ? destructible | 16 : 0;
                              if ((parser.getToken() & 4194304) === 4194304) {
                                  if (parser.getToken() !== 1077936155)
                                      destructible |= 16;
                                  value = parseAssignmentExpressionOrPattern(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                              }
                              else {
                                  if ((parser.getToken() & 8388608) === 8388608) {
                                      value = parseBinaryExpression(parser, context, privateScope, 1, tokenIndex, tokenLine, tokenColumn, 4, token, value);
                                  }
                                  if (consumeOpt(parser, context | 8192, 22)) {
                                      value = parseConditionalExpression(parser, context, privateScope, value, tokenIndex, tokenLine, tokenColumn);
                                  }
                                  destructible |=
                                      parser.assignable & 2
                                          ? 16
                                          : 32;
                              }
                          }
                      }
                      else {
                          value = parseLeftHandSideExpression(parser, context, privateScope, 1, 0, 1, tokenIndex, tokenLine, tokenColumn);
                          destructible |=
                              parser.assignable & 1
                                  ? 32
                                  : 16;
                          if (parser.getToken() === 18 || parser.getToken() === 1074790415) {
                              if (parser.assignable & 2)
                                  destructible |= 16;
                          }
                          else {
                              value = parseMemberOrUpdateExpression(parser, context, privateScope, value, inGroup, 0, tokenIndex, tokenLine, tokenColumn);
                              destructible = parser.assignable & 1 ? 0 : 16;
                              if (parser.getToken() !== 18 && parser.getToken() !== 1074790415) {
                                  if (parser.getToken() !== 1077936155)
                                      destructible |= 16;
                                  value = parseAssignmentExpression(parser, context, privateScope, inGroup, isPattern, tokenIndex, tokenLine, tokenColumn, value);
                              }
                          }
                      }
                  }
                  else if (parser.getToken() === 67174411) {
                      state |= 1;
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, tokenLine, tokenColumn);
                      destructible = 16;
                  }
                  else {
                      report(parser, 44);
                  }
              }
              else if (token === 8391476) {
                  consume(parser, context | 8192, 8391476);
                  state |= 8;
                  if (parser.getToken() & 143360) {
                      const token = parser.getToken();
                      key = parseIdentifier(parser, context);
                      state |= 1;
                      if (parser.getToken() === 67174411) {
                          destructible |= 16;
                          value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                      }
                      else {
                          reportMessageAt(parser.tokenIndex, parser.tokenLine, parser.tokenColumn, parser.index, parser.line, parser.column, token === 209005
                              ? 46
                              : token === 12400 || parser.getToken() === 12401
                                  ? 45
                                  : 47, KeywordDescTable[token & 255]);
                      }
                  }
                  else if ((parser.getToken() & 134217728) === 134217728) {
                      destructible |= 16;
                      key = parseLiteral(parser, context);
                      state |= 1;
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, tokenIndex, tokenLine, tokenColumn);
                  }
                  else if (parser.getToken() === 69271571) {
                      destructible |= 16;
                      state |= 2 | 1;
                      key = parseComputedPropertyName(parser, context, privateScope, inGroup);
                      value = parseMethodDefinition(parser, context, privateScope, state, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
                  }
                  else {
                      report(parser, 126);
                  }
              }
              else {
                  report(parser, 30, KeywordDescTable[token & 255]);
              }
              destructible |= parser.destructible & 128 ? 128 : 0;
              parser.destructible = destructible;
              properties.push(finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
                  type: 'Property',
                  key: key,
                  value,
                  kind: !(state & 768) ? 'init' : state & 512 ? 'set' : 'get',
                  computed: (state & 2) > 0,
                  method: (state & 1) > 0,
                  shorthand: (state & 4) > 0
              }));
          }
          destructible |= parser.destructible;
          if (parser.getToken() !== 18)
              break;
          nextToken(parser, context);
      }
      consume(parser, context, 1074790415);
      if (prototypeCount > 1)
          destructible |= 64;
      const node = finishNode(parser, context, start, line, column, {
          type: isPattern ? 'ObjectPattern' : 'ObjectExpression',
          properties
      });
      if (!skipInitializer && parser.getToken() & 4194304) {
          return parseArrayOrObjectAssignmentPattern(parser, context, privateScope, destructible, inGroup, isPattern, start, line, column, node);
      }
      parser.destructible = destructible;
      return node;
  }
  function parseMethodFormals(parser, context, scope, privateScope, kind, type, inGroup) {
      consume(parser, context, 67174411);
      const params = [];
      parser.flags = (parser.flags | 128) ^ 128;
      if (parser.getToken() === 16) {
          if (kind & 512) {
              report(parser, 37, 'Setter', 'one', '');
          }
          nextToken(parser, context);
          return params;
      }
      if (kind & 256) {
          report(parser, 37, 'Getter', 'no', 's');
      }
      if (kind & 512 && parser.getToken() === 14) {
          report(parser, 38);
      }
      context = (context | 33554432) ^ 33554432;
      let setterArgs = 0;
      let isNonSimpleParameterList = 0;
      while (parser.getToken() !== 18) {
          let left = null;
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          if (parser.getToken() & 143360) {
              if ((context & 256) === 0) {
                  if ((parser.getToken() & 36864) === 36864) {
                      parser.flags |= 256;
                  }
                  if ((parser.getToken() & 537079808) === 537079808) {
                      parser.flags |= 512;
                  }
              }
              left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0, tokenIndex, tokenLine, tokenColumn);
          }
          else {
              if (parser.getToken() === 2162700) {
                  left = parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, type, 0, tokenIndex, tokenLine, tokenColumn);
              }
              else if (parser.getToken() === 69271571) {
                  left = parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, type, 0, tokenIndex, tokenLine, tokenColumn);
              }
              else if (parser.getToken() === 14) {
                  left = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, type, 0, 0, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
              }
              isNonSimpleParameterList = 1;
              if (parser.destructible & (32 | 16))
                  report(parser, 50);
          }
          if (parser.getToken() === 1077936155) {
              nextToken(parser, context | 8192);
              isNonSimpleParameterList = 1;
              const right = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              left = finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
                  type: 'AssignmentPattern',
                  left: left,
                  right
              });
          }
          setterArgs++;
          params.push(left);
          if (!consumeOpt(parser, context, 18))
              break;
          if (parser.getToken() === 16) {
              break;
          }
      }
      if (kind & 512 && setterArgs !== 1) {
          report(parser, 37, 'Setter', 'one', '');
      }
      if (scope && scope.scopeError)
          reportScopeError(scope.scopeError);
      if (isNonSimpleParameterList)
          parser.flags |= 128;
      consume(parser, context, 16);
      return params;
  }
  function parseComputedPropertyName(parser, context, privateScope, inGroup) {
      nextToken(parser, context | 8192);
      const key = parseExpression(parser, (context | 33554432) ^ 33554432, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context, 20);
      return key;
  }
  function parseParenthesizedExpression(parser, context, privateScope, canAssign, kind, origin, start, line, column) {
      parser.flags = (parser.flags | 128) ^ 128;
      const { tokenIndex: piStart, tokenLine: plStart, tokenColumn: pcStart } = parser;
      nextToken(parser, context | 8192 | 67108864);
      const scope = context & 16 ? addChildScope(createScope(), 1024) : void 0;
      context = (context | 33554432) ^ 33554432;
      if (consumeOpt(parser, context, 16)) {
          return parseParenthesizedArrow(parser, context, scope, privateScope, [], canAssign, 0, start, line, column);
      }
      let destructible = 0;
      parser.destructible &= ~(256 | 128);
      let expr;
      let expressions = [];
      let isSequence = 0;
      let isNonSimpleParameterList = 0;
      let hasStrictReserved = 0;
      const { tokenIndex: iStart, tokenLine: lStart, tokenColumn: cStart } = parser;
      parser.assignable = 1;
      while (parser.getToken() !== 16) {
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          const token = parser.getToken();
          if (token & 143360) {
              if (scope)
                  addBlockName(parser, context, scope, parser.tokenValue, 1, 0);
              if ((token & 537079808) === 537079808) {
                  isNonSimpleParameterList = 1;
              }
              else if ((token & 36864) === 36864) {
                  hasStrictReserved = 1;
              }
              expr = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, 1, 1, tokenIndex, tokenLine, tokenColumn);
              if (parser.getToken() === 16 || parser.getToken() === 18) {
                  if (parser.assignable & 2) {
                      destructible |= 16;
                      isNonSimpleParameterList = 1;
                  }
              }
              else {
                  if (parser.getToken() === 1077936155) {
                      isNonSimpleParameterList = 1;
                  }
                  else {
                      destructible |= 16;
                  }
                  expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 1, 0, tokenIndex, tokenLine, tokenColumn);
                  if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                      expr = parseAssignmentExpression(parser, context, privateScope, 1, 0, tokenIndex, tokenLine, tokenColumn, expr);
                  }
              }
          }
          else if ((token & 2097152) === 2097152) {
              expr =
                  token === 2162700
                      ? parseObjectLiteralOrPattern(parser, context | 67108864, scope, privateScope, 0, 1, 0, kind, origin, tokenIndex, tokenLine, tokenColumn)
                      : parseArrayExpressionOrPattern(parser, context | 67108864, scope, privateScope, 0, 1, 0, kind, origin, tokenIndex, tokenLine, tokenColumn);
              destructible |= parser.destructible;
              isNonSimpleParameterList = 1;
              parser.assignable = 2;
              if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                  if (destructible & 8)
                      report(parser, 122);
                  expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenIndex, tokenLine, tokenColumn);
                  destructible |= 16;
                  if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                      expr = parseAssignmentExpression(parser, context, privateScope, 0, 0, tokenIndex, tokenLine, tokenColumn, expr);
                  }
              }
          }
          else if (token === 14) {
              expr = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, origin, 0, 1, 0, tokenIndex, tokenLine, tokenColumn);
              if (parser.destructible & 16)
                  report(parser, 74);
              isNonSimpleParameterList = 1;
              if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
                  expressions.push(expr);
              }
              destructible |= 8;
              break;
          }
          else {
              destructible |= 16;
              expr = parseExpression(parser, context, privateScope, 1, 1, tokenIndex, tokenLine, tokenColumn);
              if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
                  expressions.push(expr);
              }
              if (parser.getToken() === 18) {
                  if (!isSequence) {
                      isSequence = 1;
                      expressions = [expr];
                  }
              }
              if (isSequence) {
                  while (consumeOpt(parser, context | 8192, 18)) {
                      expressions.push(parseExpression(parser, context, privateScope, 1, 1, parser.tokenIndex, parser.tokenLine, parser.tokenColumn));
                  }
                  parser.assignable = 2;
                  expr = finishNode(parser, context, iStart, lStart, cStart, {
                      type: 'SequenceExpression',
                      expressions
                  });
              }
              consume(parser, context, 16);
              parser.destructible = destructible;
              return expr;
          }
          if (isSequence && (parser.getToken() === 16 || parser.getToken() === 18)) {
              expressions.push(expr);
          }
          if (!consumeOpt(parser, context | 8192, 18))
              break;
          if (!isSequence) {
              isSequence = 1;
              expressions = [expr];
          }
          if (parser.getToken() === 16) {
              destructible |= 8;
              break;
          }
      }
      if (isSequence) {
          parser.assignable = 2;
          expr = finishNode(parser, context, iStart, lStart, cStart, {
              type: 'SequenceExpression',
              expressions
          });
      }
      consume(parser, context, 16);
      if (destructible & 16 && destructible & 8)
          report(parser, 151);
      destructible |=
          parser.destructible & 256
              ? 256
              : 0 | (parser.destructible & 128)
                  ? 128
                  : 0;
      if (parser.getToken() === 10) {
          if (destructible & (32 | 16))
              report(parser, 49);
          if (context & (524288 | 512) && destructible & 128)
              report(parser, 31);
          if (context & (256 | 262144) && destructible & 256) {
              report(parser, 32);
          }
          if (isNonSimpleParameterList)
              parser.flags |= 128;
          if (hasStrictReserved)
              parser.flags |= 256;
          return parseParenthesizedArrow(parser, context, scope, privateScope, isSequence ? expressions : [expr], canAssign, 0, start, line, column);
      }
      if (destructible & 64) {
          report(parser, 63);
      }
      if (destructible & 8) {
          report(parser, 144);
      }
      parser.destructible = ((parser.destructible | 256) ^ 256) | destructible;
      return context & 32
          ? (parser.leadingComments && parser.leadingComments.push([]),
              finishNode(parser, context, piStart, plStart, pcStart, {
                  type: 'ParenthesizedExpression',
                  expression: expr
              }))
          : expr;
  }
  function parseIdentifierOrArrow(parser, context, privateScope, start, line, column) {
      const { tokenValue } = parser;
      let isNonSimpleParameterList = 0;
      let hasStrictReserved = 0;
      if ((parser.getToken() & 537079808) === 537079808) {
          isNonSimpleParameterList = 1;
      }
      else if ((parser.getToken() & 36864) === 36864) {
          hasStrictReserved = 1;
      }
      const expr = parseIdentifier(parser, context);
      parser.assignable = 1;
      if (parser.getToken() === 10) {
          let scope = void 0;
          if (context & 16)
              scope = createArrowHeadParsingScope(parser, context, tokenValue);
          if (isNonSimpleParameterList)
              parser.flags |= 128;
          if (hasStrictReserved)
              parser.flags |= 256;
          return parseArrowFunctionExpression(parser, context, scope, privateScope, [expr], 0, start, line, column);
      }
      return expr;
  }
  function parseArrowFromIdentifier(parser, context, privateScope, value, expr, inNew, canAssign, isAsync, start, line, column) {
      if (!canAssign)
          report(parser, 57);
      if (inNew)
          report(parser, 51);
      parser.flags &= ~128;
      const scope = context & 16 ? createArrowHeadParsingScope(parser, context, value) : void 0;
      return parseArrowFunctionExpression(parser, context, scope, privateScope, [expr], isAsync, start, line, column);
  }
  function parseParenthesizedArrow(parser, context, scope, privateScope, params, canAssign, isAsync, start, line, column) {
      if (!canAssign)
          report(parser, 57);
      for (let i = 0; i < params.length; ++i)
          reinterpretToPattern(parser, params[i]);
      return parseArrowFunctionExpression(parser, context, scope, privateScope, params, isAsync, start, line, column);
  }
  function parseArrowFunctionExpression(parser, context, scope, privateScope, params, isAsync, start, line, column) {
      if (parser.flags & 1)
          report(parser, 48);
      collectLeadingComments(parser);
      consume(parser, context | 8192, 10);
      const modifierFlags = 262144 | 524288 | 2097152 | 268435456;
      context = ((context | modifierFlags) ^ modifierFlags) | (isAsync ? 524288 : 0);
      const expression = parser.getToken() !== 2162700;
      let body;
      if (scope && scope.scopeError)
          reportScopeError(scope.scopeError);
      if (expression) {
          parser.flags =
              (parser.flags | 512 | 256 | 64 | 4096) ^
                  (512 | 256 | 64 | 4096);
          body = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      }
      else {
          if (scope)
              scope = addChildScope(scope, 128);
          const modifierFlags = 1024 | 33554432 | 2048;
          body = parseFunctionBody(parser, ((context | modifierFlags) ^ modifierFlags) | 1048576, scope, privateScope, 16, void 0, void 0);
          switch (parser.getToken()) {
              case 69271571:
                  if ((parser.flags & 1) === 0) {
                      report(parser, 116);
                  }
                  break;
              case 67108877:
              case 67174409:
              case 22:
                  report(parser, 117);
              case 67174411:
                  if ((parser.flags & 1) === 0) {
                      report(parser, 116);
                  }
                  parser.flags |= 1024;
                  break;
          }
          if ((parser.getToken() & 8388608) === 8388608 && (parser.flags & 1) === 0)
              report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
          if ((parser.getToken() & 33619968) === 33619968)
              report(parser, 125);
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'ArrowFunctionExpression',
          params,
          body,
          async: isAsync === 1,
          expression
      });
  }
  function parseFormalParametersOrFormalList(parser, context, scope, privateScope, inGroup, kind) {
      consume(parser, context, 67174411);
      parser.flags = (parser.flags | 128) ^ 128;
      const params = [];
      if (consumeOpt(parser, context, 16))
          return params;
      context = (context | 33554432) ^ 33554432;
      let isNonSimpleParameterList = 0;
      while (parser.getToken() !== 18) {
          let left;
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          const token = parser.getToken();
          if (token & 143360) {
              if ((context & 256) === 0) {
                  if ((token & 36864) === 36864) {
                      parser.flags |= 256;
                  }
                  if ((token & 537079808) === 537079808) {
                      parser.flags |= 512;
                  }
              }
              left = parseAndClassifyIdentifier(parser, context, scope, kind | 1, 0, tokenIndex, tokenLine, tokenColumn);
          }
          else {
              if (token === 2162700) {
                  left = parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, kind, 0, tokenIndex, tokenLine, tokenColumn);
              }
              else if (token === 69271571) {
                  left = parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, inGroup, 1, kind, 0, tokenIndex, tokenLine, tokenColumn);
              }
              else if (token === 14) {
                  left = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, 0, 0, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
              }
              else {
                  report(parser, 30, KeywordDescTable[token & 255]);
              }
              isNonSimpleParameterList = 1;
              if (parser.destructible & (32 | 16)) {
                  report(parser, 50);
              }
          }
          if (parser.getToken() === 1077936155) {
              collectLeadingComments(parser);
              nextToken(parser, context | 8192);
              isNonSimpleParameterList = 1;
              const right = parseExpression(parser, context, privateScope, 1, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
              left = finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
                  type: 'AssignmentPattern',
                  left,
                  right
              });
          }
          params.push(left);
          if (!consumeOpt(parser, context, 18))
              break;
          if (parser.getToken() === 16) {
              break;
          }
      }
      if (isNonSimpleParameterList)
          parser.flags |= 128;
      if (scope && (isNonSimpleParameterList || context & 256) && scope.scopeError) {
          reportScopeError(scope.scopeError);
      }
      consume(parser, context, 16);
      return params;
  }
  function parseMembeExpressionNoCall(parser, context, privateScope, expr, inGroup, start, line, column) {
      const token = parser.getToken();
      if (token & 67108864) {
          collectLeadingComments(parser);
          if (token === 67108877) {
              nextToken(parser, context | 67108864);
              parser.assignable = 1;
              const property = parsePropertyOrPrivatePropertyName(parser, context, privateScope);
              return parseMembeExpressionNoCall(parser, context, privateScope, finishNode(parser, context, start, line, column, {
                  type: 'MemberExpression',
                  object: expr,
                  computed: false,
                  property
              }), 0, start, line, column);
          }
          else if (token === 69271571) {
              nextToken(parser, context | 8192);
              const { tokenIndex, tokenLine, tokenColumn } = parser;
              const property = parseExpressions(parser, context, privateScope, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
              consume(parser, context, 20);
              parser.assignable = 1;
              return parseMembeExpressionNoCall(parser, context, privateScope, finishNode(parser, context, start, line, column, {
                  type: 'MemberExpression',
                  object: expr,
                  computed: true,
                  property
              }), 0, start, line, column);
          }
          else if (token === 67174408 || token === 67174409) {
              parser.assignable = 2;
              return parseMembeExpressionNoCall(parser, context, privateScope, finishNode(parser, context, start, line, column, {
                  type: 'TaggedTemplateExpression',
                  tag: expr,
                  quasi: parser.getToken() === 67174408
                      ? parseTemplate(parser, context | 16384, privateScope)
                      : parseTemplateLiteral(parser, context | 16384, parser.tokenIndex, parser.tokenLine, parser.tokenColumn)
              }), 0, start, line, column);
          }
      }
      return expr;
  }
  function parseNewExpression(parser, context, privateScope, inGroup, start, line, column) {
      const id = parseIdentifier(parser, context | 8192);
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      if (consumeOpt(parser, context, 67108877)) {
          if (context & 16777216 && parser.getToken() === 209029) {
              parser.assignable = 2;
              return parseMetaProperty(parser, context, id, start, line, column);
          }
          report(parser, 94);
      }
      collectLeadingComments(parser);
      parser.assignable = 2;
      if ((parser.getToken() & 16842752) === 16842752) {
          report(parser, 65, KeywordDescTable[parser.getToken() & 255]);
      }
      const expr = parsePrimaryExpression(parser, context, privateScope, 2, 1, 0, inGroup, 1, tokenIndex, tokenLine, tokenColumn);
      context = (context | 33554432) ^ 33554432;
      if (parser.getToken() === 67108990)
          report(parser, 168);
      const callee = parseMembeExpressionNoCall(parser, context, privateScope, expr, inGroup, tokenIndex, tokenLine, tokenColumn);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'NewExpression',
          callee,
          arguments: parser.getToken() === 67174411 ? parseArguments(parser, context, privateScope, inGroup) : []
      });
  }
  function parseMetaProperty(parser, context, meta, start, line, column) {
      collectLeadingComments(parser);
      const property = parseIdentifier(parser, context);
      return finishNode(parser, context, start, line, column, {
          type: 'MetaProperty',
          meta,
          property
      });
  }
  function parseAsyncArrowAfterIdent(parser, context, privateScope, canAssign, start, line, column) {
      if (parser.getToken() === 209006)
          report(parser, 31);
      if (context & (256 | 262144) && parser.getToken() === 241771) {
          report(parser, 32);
      }
      classifyIdentifier(parser, context, parser.getToken());
      if ((parser.getToken() & 36864) === 36864) {
          parser.flags |= 256;
      }
      return parseArrowFromIdentifier(parser, (context & ~268435456) | 524288, privateScope, parser.tokenValue, parseIdentifier(parser, context), 0, canAssign, 1, start, line, column);
  }
  function parseAsyncArrowOrCallExpression(parser, context, privateScope, callee, canAssign, kind, origin, flags, start, line, column) {
      nextToken(parser, context | 8192);
      const scope = context & 16 ? addChildScope(createScope(), 1024) : void 0;
      context = (context | 33554432) ^ 33554432;
      if (consumeOpt(parser, context, 16)) {
          if (parser.getToken() === 10) {
              if (flags & 1)
                  report(parser, 48);
              return parseParenthesizedArrow(parser, context, scope, privateScope, [], canAssign, 1, start, line, column);
          }
          return finishNode(parser, context, start, line, column, {
              type: 'CallExpression',
              callee,
              arguments: []
          });
      }
      let destructible = 0;
      let expr = null;
      let isNonSimpleParameterList = 0;
      parser.destructible =
          (parser.destructible | 256 | 128) ^
              (256 | 128);
      const params = [];
      while (parser.getToken() !== 16) {
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          const token = parser.getToken();
          if (token & 143360) {
              if (scope)
                  addBlockName(parser, context, scope, parser.tokenValue, kind, 0);
              if ((token & 537079808) === 537079808) {
                  parser.flags |= 512;
              }
              else if ((token & 36864) === 36864) {
                  parser.flags |= 256;
              }
              expr = parsePrimaryExpression(parser, context, privateScope, kind, 0, 1, 1, 1, tokenIndex, tokenLine, tokenColumn);
              if (parser.getToken() === 16 || parser.getToken() === 18) {
                  if (parser.assignable & 2) {
                      destructible |= 16;
                      isNonSimpleParameterList = 1;
                  }
              }
              else {
                  if (parser.getToken() === 1077936155) {
                      isNonSimpleParameterList = 1;
                  }
                  else {
                      destructible |= 16;
                  }
                  expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 1, 0, tokenIndex, tokenLine, tokenColumn);
                  if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                      expr = parseAssignmentExpression(parser, context, privateScope, 1, 0, tokenIndex, tokenLine, tokenColumn, expr);
                  }
              }
          }
          else if (token & 2097152) {
              expr =
                  token === 2162700
                      ? parseObjectLiteralOrPattern(parser, context, scope, privateScope, 0, 1, 0, kind, origin, tokenIndex, tokenLine, tokenColumn)
                      : parseArrayExpressionOrPattern(parser, context, scope, privateScope, 0, 1, 0, kind, origin, tokenIndex, tokenLine, tokenColumn);
              destructible |= parser.destructible;
              isNonSimpleParameterList = 1;
              if (parser.getToken() !== 16 && parser.getToken() !== 18) {
                  if (destructible & 8)
                      report(parser, 122);
                  expr = parseMemberOrUpdateExpression(parser, context, privateScope, expr, 0, 0, tokenIndex, tokenLine, tokenColumn);
                  destructible |= 16;
                  if ((parser.getToken() & 8388608) === 8388608) {
                      expr = parseBinaryExpression(parser, context, privateScope, 1, start, line, column, 4, token, expr);
                  }
                  if (consumeOpt(parser, context | 8192, 22)) {
                      expr = parseConditionalExpression(parser, context, privateScope, expr, start, line, column);
                  }
              }
          }
          else if (token === 14) {
              expr = parseSpreadOrRestElement(parser, context, scope, privateScope, 16, kind, origin, 1, 1, 0, tokenIndex, tokenLine, tokenColumn);
              destructible |=
                  (parser.getToken() === 16 ? 0 : 16) | parser.destructible;
              isNonSimpleParameterList = 1;
          }
          else {
              expr = parseExpression(parser, context, privateScope, 1, 0, tokenIndex, tokenLine, tokenColumn);
              destructible = parser.assignable;
              params.push(expr);
              while (consumeOpt(parser, context | 8192, 18)) {
                  params.push(parseExpression(parser, context, privateScope, 1, 0, tokenIndex, tokenLine, tokenColumn));
              }
              destructible |= parser.assignable;
              consume(parser, context, 16);
              parser.destructible = destructible | 16;
              parser.assignable = 2;
              return finishNode(parser, context, start, line, column, {
                  type: 'CallExpression',
                  callee,
                  arguments: params
              });
          }
          params.push(expr);
          if (!consumeOpt(parser, context | 8192, 18))
              break;
      }
      consume(parser, context, 16);
      destructible |=
          parser.destructible & 256
              ? 256
              : 0 | (parser.destructible & 128)
                  ? 128
                  : 0;
      if (parser.getToken() === 10) {
          if (destructible & (32 | 16))
              report(parser, 27);
          if (parser.flags & 1 || flags & 1)
              report(parser, 48);
          if (destructible & 128)
              report(parser, 31);
          if (context & (256 | 262144) && destructible & 256)
              report(parser, 32);
          if (isNonSimpleParameterList)
              parser.flags |= 128;
          return parseParenthesizedArrow(parser, context | 524288, scope, privateScope, params, canAssign, 1, start, line, column);
      }
      if (destructible & 64) {
          report(parser, 63);
      }
      if (destructible & 8) {
          report(parser, 62);
      }
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'CallExpression',
          callee,
          arguments: params
      });
  }
  function parseRegExpLiteral(parser, context, start, line, column) {
      const { tokenRaw, tokenRegExp, tokenValue } = parser;
      collectLeadingComments(parser);
      nextToken(parser, context);
      parser.assignable = 2;
      return context & 128
          ? finishNode(parser, context, start, line, column, {
              type: 'Literal',
              value: tokenValue,
              regex: tokenRegExp,
              raw: tokenRaw
          })
          : finishNode(parser, context, start, line, column, {
              type: 'Literal',
              value: tokenValue,
              regex: tokenRegExp
          });
  }
  function parseClassDeclaration(parser, context, scope, privateScope, flags, start, line, column) {
      collectLeadingComments(parser);
      let decorators = parseDecorators(parser, context, privateScope);
      if (decorators.length) {
          start = parser.tokenIndex;
          line = parser.tokenLine;
          column = parser.tokenColumn;
      }
      if (parser.leadingDecorators.length) {
          parser.leadingDecorators.push(...decorators);
          decorators = parser.leadingDecorators;
          parser.leadingDecorators = [];
      }
      context = (context | 4194304 | 256) ^ 4194304;
      nextToken(parser, context);
      let id = null;
      let superClass = null;
      const { tokenValue } = parser;
      if (parser.getToken() & 4096 && parser.getToken() !== 20565) {
          if (isStrictReservedWord(parser, context, parser.getToken())) {
              report(parser, 118);
          }
          if ((parser.getToken() & 537079808) === 537079808) {
              report(parser, 119);
          }
          if (scope) {
              addBlockName(parser, context, scope, tokenValue, 32, 0);
              if (flags) {
                  if (flags & 2) {
                      declareUnboundVariable(parser, tokenValue);
                  }
              }
          }
          id = parseIdentifier(parser, context);
      }
      else {
          if ((flags & 1) === 0)
              report(parser, 39, 'Class');
      }
      let inheritedContext = context;
      if (consumeOpt(parser, context | 8192, 20565)) {
          superClass = parseLeftHandSideExpression(parser, context, privateScope, 0, 0, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          inheritedContext |= 131072;
      }
      else {
          inheritedContext = (inheritedContext | 131072) ^ 131072;
      }
      const body = parseClassBody(parser, inheritedContext, context, scope, privateScope, 2, 8, 0);
      return finishNode(parser, context, start, line, column, {
          type: 'ClassDeclaration',
          id,
          superClass,
          body,
          ...(context & 1 ? { decorators } : null)
      });
  }
  function parseClassExpression(parser, context, privateScope, inGroup, start, line, column) {
      let id = null;
      let superClass = null;
      collectLeadingComments(parser);
      const decorators = parseDecorators(parser, context, privateScope);
      if (decorators.length) {
          start = parser.tokenIndex;
          line = parser.tokenLine;
          column = parser.tokenColumn;
      }
      context = (context | 256 | 4194304) ^ 4194304;
      nextToken(parser, context);
      if (parser.getToken() & 4096 && parser.getToken() !== 20565) {
          if (isStrictReservedWord(parser, context, parser.getToken()))
              report(parser, 118);
          if ((parser.getToken() & 537079808) === 537079808) {
              report(parser, 119);
          }
          id = parseIdentifier(parser, context);
      }
      let inheritedContext = context;
      if (consumeOpt(parser, context | 8192, 20565)) {
          superClass = parseLeftHandSideExpression(parser, context, privateScope, 0, inGroup, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          inheritedContext |= 131072;
      }
      else {
          inheritedContext = (inheritedContext | 131072) ^ 131072;
      }
      const body = parseClassBody(parser, inheritedContext, context, void 0, privateScope, 2, 0, inGroup);
      parser.assignable = 2;
      return finishNode(parser, context, start, line, column, {
          type: 'ClassExpression',
          id,
          superClass,
          body,
          ...(context & 1 ? { decorators } : null)
      });
  }
  function parseDecorators(parser, context, privateScope) {
      const list = [];
      if (context & 1) {
          while (parser.getToken() === 132) {
              list.push(parseDecoratorList(parser, context, privateScope, parser.tokenIndex, parser.tokenLine, parser.tokenColumn));
          }
      }
      return list;
  }
  function parseDecoratorList(parser, context, privateScope, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      let expression = parsePrimaryExpression(parser, context, privateScope, 2, 0, 1, 0, 1, start, line, column);
      expression = parseMemberOrUpdateExpression(parser, context, privateScope, expression, 0, 0, start, line, column);
      return finishNode(parser, context, start, line, column, {
          type: 'Decorator',
          expression
      });
  }
  function parseClassBody(parser, context, inheritedContext, scope, parentScope, kind, origin, inGroup) {
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      const privateScope = context & 16 ? addChildPrivateScope(parentScope) : undefined;
      collectLeadingComments(parser);
      consume(parser, context | 8192, 2162700);
      const modifierFlags = 33554432 | 268435456;
      context = (context | modifierFlags) ^ modifierFlags;
      const hasConstr = parser.flags & 32;
      parser.flags = (parser.flags | 32) ^ 32;
      const body = [];
      let decorators;
      while (parser.getToken() !== 1074790415) {
          let length = 0;
          decorators = parseDecorators(parser, context, privateScope);
          length = decorators.length;
          if (length > 0 && parser.tokenValue === 'constructor') {
              report(parser, 109);
          }
          if (parser.getToken() === 1074790415)
              report(parser, 108);
          if (consumeOpt(parser, context, 1074790417)) {
              if (length > 0)
                  report(parser, 120);
              continue;
          }
          body.push(parseClassElementList(parser, context, scope, privateScope, inheritedContext, kind, decorators, 0, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn));
      }
      consume(parser, origin & 8 ? context | 8192 : context, 1074790415);
      parser.flags = (parser.flags & ~32) | hasConstr;
      if (privateScope)
          validatePrivateIdentifierRefs(privateScope);
      parser.flags = (parser.flags & ~32) | hasConstr;
      return finishNode(parser, context, tokenIndex, tokenLine, tokenColumn, {
          type: 'ClassBody',
          body
      });
  }
  function parseClassElementList(parser, context, scope, privateScope, inheritedContext, type, decorators, isStatic, inGroup, start, line, column) {
      let kind = isStatic ? 32 : 0;
      let key = null;
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      const token = parser.getToken();
      if (token & (143360 | 36864) || token === -2147483528) {
          key = parseIdentifier(parser, context);
          switch (token) {
              case 36970:
                  if (!isStatic &&
                      parser.getToken() !== 67174411 &&
                      (parser.getToken() & 1048576) !== 1048576 &&
                      parser.getToken() !== 1077936155) {
                      return parseClassElementList(parser, context, scope, privateScope, inheritedContext, type, decorators, 1, inGroup, start, line, column);
                  }
                  break;
              case 209005:
                  if (parser.getToken() !== 67174411 && (parser.flags & 1) === 0) {
                      if ((parser.getToken() & 1073741824) === 1073741824) {
                          return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, tokenIndex, tokenLine, tokenColumn);
                      }
                      kind |= 16 | (optionalBit(parser, context, 8391476) ? 8 : 0);
                  }
                  break;
              case 12400:
                  if (parser.getToken() !== 67174411) {
                      if ((parser.getToken() & 1073741824) === 1073741824) {
                          return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, tokenIndex, tokenLine, tokenColumn);
                      }
                      kind |= 256;
                  }
                  break;
              case 12401:
                  if (parser.getToken() !== 67174411) {
                      if ((parser.getToken() & 1073741824) === 1073741824) {
                          return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, tokenIndex, tokenLine, tokenColumn);
                      }
                      kind |= 512;
                  }
                  break;
              case 12402:
                  if (parser.getToken() !== 67174411 && (parser.flags & 1) === 0) {
                      if ((parser.getToken() & 1073741824) === 1073741824) {
                          return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, tokenIndex, tokenLine, tokenColumn);
                      }
                      if (context & 1)
                          kind |= 1024;
                  }
                  break;
          }
      }
      else if (token === 69271571) {
          kind |= 2;
          key = parseComputedPropertyName(parser, inheritedContext, privateScope, inGroup);
      }
      else if ((token & 134217728) === 134217728) {
          key = parseLiteral(parser, context);
      }
      else if (token === 8391476) {
          kind |= 8;
          nextToken(parser, context);
      }
      else if (parser.getToken() === 130) {
          kind |= 8192;
          key = parsePrivateIdentifier(parser, context | 4096, privateScope, 768, tokenIndex, tokenLine, tokenColumn);
      }
      else if ((parser.getToken() & 1073741824) === 1073741824) {
          kind |= 128;
      }
      else if (isStatic && token === 2162700) {
          return parseStaticBlock(parser, context | 4096, scope, privateScope, tokenIndex, tokenLine, tokenColumn);
      }
      else if (token === -2147483527) {
          key = parseIdentifier(parser, context);
          if (parser.getToken() !== 67174411)
              report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      }
      else {
          report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      }
      if (kind & (8 | 16 | 768 | 1024)) {
          if (parser.getToken() & 143360 ||
              parser.getToken() === -2147483528 ||
              parser.getToken() === -2147483527) {
              key = parseIdentifier(parser, context);
          }
          else if ((parser.getToken() & 134217728) === 134217728) {
              key = parseLiteral(parser, context);
          }
          else if (parser.getToken() === 69271571) {
              kind |= 2;
              key = parseComputedPropertyName(parser, context, privateScope, 0);
          }
          else if (parser.getToken() === 130) {
              kind |= 8192;
              key = parsePrivateIdentifier(parser, context, privateScope, kind, tokenIndex, tokenLine, tokenColumn);
          }
          else
              report(parser, 135);
      }
      if ((kind & 2) === 0) {
          if (parser.tokenValue === 'constructor') {
              if ((parser.getToken() & 1073741824) === 1073741824) {
                  report(parser, 129);
              }
              else if ((kind & 32) === 0 && parser.getToken() === 67174411) {
                  if (kind & (768 | 16 | 128 | 8)) {
                      report(parser, 53, 'accessor');
                  }
                  else if ((context & 131072) === 0) {
                      if (parser.flags & 32)
                          report(parser, 54);
                      else
                          parser.flags |= 32;
                  }
              }
              kind |= 64;
          }
          else if ((kind & 8192) === 0 &&
              kind & 32 &&
              parser.tokenValue === 'prototype') {
              report(parser, 52);
          }
      }
      if (kind & 1024 || (parser.getToken() !== 67174411 && (kind & 768) === 0)) {
          return parsePropertyDefinition(parser, context, privateScope, key, kind, decorators, tokenIndex, tokenLine, tokenColumn);
      }
      collectLeadingComments(parser);
      const value = parseMethodDefinition(parser, context | 4096, privateScope, kind, inGroup, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      return finishNode(parser, context, start, line, column, {
          type: 'MethodDefinition',
          kind: (kind & 32) === 0 && kind & 64
              ? 'constructor'
              : kind & 256
                  ? 'get'
                  : kind & 512
                      ? 'set'
                      : 'method',
          static: (kind & 32) > 0,
          computed: (kind & 2) > 0,
          key,
          value,
          ...(context & 1 ? { decorators } : null)
      });
  }
  function parsePrivateIdentifier(parser, context, privateScope, kind, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      const { tokenValue } = parser;
      if (tokenValue === 'constructor')
          report(parser, 128);
      if (context & 16) {
          if (!privateScope)
              report(parser, 4, tokenValue);
          if (kind) {
              addPrivateIdentifier(parser, privateScope, tokenValue, kind);
          }
          else {
              addPrivateIdentifierRef(parser, privateScope, tokenValue);
          }
      }
      nextToken(parser, context);
      return finishNode(parser, context, start, line, column, {
          type: 'PrivateIdentifier',
          name: tokenValue
      });
  }
  function parsePropertyDefinition(parser, context, privateScope, key, state, decorators, start, line, column) {
      let value = null;
      if (state & 8)
          report(parser, 0);
      collectLeadingComments(parser);
      if (parser.getToken() === 1077936155) {
          nextToken(parser, context | 8192);
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          if (parser.getToken() === 537079927)
              report(parser, 119);
          const modifierFlags = 262144 |
              524288 |
              2097152 |
              ((state & 64) === 0 ? 131072 | 4194304 : 0);
          context =
              ((context | modifierFlags) ^ modifierFlags) |
                  (state & 8 ? 262144 : 0) |
                  (state & 16 ? 524288 : 0) |
                  (state & 64 ? 4194304 : 0) |
                  65536 |
                  16777216;
          value = parsePrimaryExpression(parser, context | 4096, privateScope, 2, 0, 1, 0, 1, tokenIndex, tokenLine, tokenColumn);
          if ((parser.getToken() & 1073741824) !== 1073741824 ||
              (parser.getToken() & 4194304) === 4194304) {
              value = parseMemberOrUpdateExpression(parser, context | 4096, privateScope, value, 0, 0, tokenIndex, tokenLine, tokenColumn);
              value = parseAssignmentExpression(parser, context | 4096, privateScope, 0, 0, tokenIndex, tokenLine, tokenColumn, value);
          }
      }
      matchOrInsertSemicolon(parser, context);
      return finishNode(parser, context, start, line, column, {
          type: state & 1024 ? 'AccessorProperty' : 'PropertyDefinition',
          key,
          value,
          static: (state & 32) > 0,
          computed: (state & 2) > 0,
          ...(context & 1 ? { decorators } : null)
      });
  }
  function parseBindingPattern(parser, context, scope, privateScope, type, origin, start, line, column) {
      if (parser.getToken() & 143360 ||
          ((context & 256) === 0 && parser.getToken() === -2147483527))
          return parseAndClassifyIdentifier(parser, context, scope, type, origin, start, line, column);
      if ((parser.getToken() & 2097152) !== 2097152)
          report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      const left = parser.getToken() === 69271571
          ? parseArrayExpressionOrPattern(parser, context, scope, privateScope, 1, 0, 1, type, origin, start, line, column)
          : parseObjectLiteralOrPattern(parser, context, scope, privateScope, 1, 0, 1, type, origin, start, line, column);
      if (parser.destructible & 16)
          report(parser, 50);
      if (parser.destructible & 32)
          report(parser, 50);
      return left;
  }
  function parseAndClassifyIdentifier(parser, context, scope, kind, origin, start, line, column) {
      const { tokenValue } = parser;
      const token = parser.getToken();
      if (context & 256) {
          if ((token & 537079808) === 537079808) {
              report(parser, 119);
          }
          else if ((token & 36864) === 36864 || token === -2147483527) {
              report(parser, 118);
          }
      }
      if ((token & 20480) === 20480) {
          report(parser, 102);
      }
      if (token === 241771) {
          if (context & 262144)
              report(parser, 32);
          if (context & 512)
              report(parser, 111);
      }
      if ((token & 255) === (241737 & 255)) {
          if (kind & (8 | 16))
              report(parser, 100);
      }
      if (token === 209006) {
          if (context & 524288)
              report(parser, 176);
          if (context & 512)
              report(parser, 110);
      }
      collectLeadingComments(parser);
      nextToken(parser, context);
      if (scope)
          addVarOrBlock(parser, context, scope, tokenValue, kind, origin);
      return finishNode(parser, context, start, line, column, {
          type: 'Identifier',
          name: tokenValue
      });
  }
  function parseJSXRootElementOrFragment(parser, context, privateScope, inJSXChild, start, line, column) {
      collectLeadingComments(parser);
      if (!inJSXChild)
          consume(parser, context, 8456256);
      if (parser.getToken() === 8390721) {
          const openingFragment = parseOpeningFragment(parser, context, start, line, column);
          const [children, closingFragment] = parseJSXChildrenAndClosingFragment(parser, context, privateScope, inJSXChild);
          return finishNode(parser, context, start, line, column, {
              type: 'JSXFragment',
              openingFragment,
              children,
              closingFragment
          });
      }
      if (parser.getToken() === 8457014)
          report(parser, 30, KeywordDescTable[parser.getToken() & 255]);
      let closingElement = null;
      let children = [];
      const openingElement = parseJSXOpeningElementOrSelfCloseElement(parser, context, privateScope, inJSXChild, start, line, column);
      if (!openingElement.selfClosing) {
          [children, closingElement] = parseJSXChildrenAndClosingElement(parser, context, privateScope, inJSXChild);
          const close = isEqualTagName(closingElement.name);
          if (isEqualTagName(openingElement.name) !== close)
              report(parser, 155, close);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXElement',
          children,
          openingElement,
          closingElement
      });
  }
  function parseOpeningFragment(parser, context, start, line, column) {
      collectLeadingComments(parser);
      nextJSXToken(parser, context);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXOpeningFragment'
      });
  }
  function parseJSXClosingElement(parser, context, inJSXChild, start, line, column) {
      collectLeadingComments(parser);
      consume(parser, context, 8457014);
      const name = parseJSXElementName(parser, context, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      if (parser.getToken() !== 8390721) {
          report(parser, 25, KeywordDescTable[8390721 & 255]);
      }
      if (inJSXChild) {
          nextJSXToken(parser, context);
      }
      else {
          nextToken(parser, context);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXClosingElement',
          name
      });
  }
  function parseJSXClosingFragment(parser, context, inJSXChild, start, line, column) {
      collectLeadingComments(parser);
      consume(parser, context, 8457014);
      if (parser.getToken() !== 8390721) {
          report(parser, 25, KeywordDescTable[8390721 & 255]);
      }
      if (inJSXChild) {
          nextJSXToken(parser, context);
      }
      else {
          nextToken(parser, context);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXClosingFragment'
      });
  }
  function parseJSXChildrenAndClosingElement(parser, context, privateScope, inJSXChild) {
      const children = [];
      while (true) {
          const child = parseJSXChildOrClosingElement(parser, context, privateScope, inJSXChild, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          if (child.type === 'JSXClosingElement') {
              return [children, child];
          }
          children.push(child);
      }
  }
  function parseJSXChildrenAndClosingFragment(parser, context, privateScope, inJSXChild) {
      const children = [];
      while (true) {
          const child = parseJSXChildOrClosingFragment(parser, context, privateScope, inJSXChild, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
          if (child.type === 'JSXClosingFragment') {
              return [children, child];
          }
          children.push(child);
      }
  }
  function parseJSXChildOrClosingElement(parser, context, privateScope, inJSXChild, start, line, column) {
      if (parser.getToken() === 137)
          return parseJSXText(parser, context, start, line, column);
      if (parser.getToken() === 2162700)
          return parseJSXExpressionContainer(parser, context, privateScope, 1, 0, start, line, column);
      if (parser.getToken() === 8456256) {
          nextToken(parser, context);
          if (parser.getToken() === 8457014)
              return parseJSXClosingElement(parser, context, inJSXChild, start, line, column);
          return parseJSXRootElementOrFragment(parser, context, privateScope, 1, start, line, column);
      }
      report(parser, 0);
  }
  function parseJSXChildOrClosingFragment(parser, context, privateScope, inJSXChild, start, line, column) {
      if (parser.getToken() === 137)
          return parseJSXText(parser, context, start, line, column);
      if (parser.getToken() === 2162700)
          return parseJSXExpressionContainer(parser, context, privateScope, 1, 0, start, line, column);
      if (parser.getToken() === 8456256) {
          nextToken(parser, context);
          if (parser.getToken() === 8457014)
              return parseJSXClosingFragment(parser, context, inJSXChild, start, line, column);
          return parseJSXRootElementOrFragment(parser, context, privateScope, 1, start, line, column);
      }
      report(parser, 0);
  }
  function parseJSXText(parser, context, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      const node = {
          type: 'JSXText',
          value: parser.tokenValue
      };
      if (context & 128) {
          node.raw = parser.tokenRaw;
      }
      return finishNode(parser, context, start, line, column, node);
  }
  function parseJSXOpeningElementOrSelfCloseElement(parser, context, privateScope, inJSXChild, start, line, column) {
      collectLeadingComments(parser);
      if ((parser.getToken() & 143360) !== 143360 &&
          (parser.getToken() & 4096) !== 4096)
          report(parser, 0);
      const tagName = parseJSXElementName(parser, context, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      const attributes = parseJSXAttributes(parser, context, privateScope);
      const selfClosing = parser.getToken() === 8457014;
      if (selfClosing)
          consume(parser, context, 8457014);
      if (parser.getToken() !== 8390721) {
          report(parser, 25, KeywordDescTable[8390721 & 255]);
      }
      if (inJSXChild || !selfClosing) {
          nextJSXToken(parser, context);
      }
      else {
          nextToken(parser, context);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXOpeningElement',
          name: tagName,
          attributes,
          selfClosing
      });
  }
  function parseJSXElementName(parser, context, start, line, column) {
      rescanJSXIdentifier(parser);
      let key = parseJSXIdentifier(parser, context, start, line, column);
      if (parser.getToken() === 21)
          return parseJSXNamespacedName(parser, context, key, start, line, column);
      while (consumeOpt(parser, context, 67108877)) {
          rescanJSXIdentifier(parser);
          key = parseJSXMemberExpression(parser, context, key, start, line, column);
      }
      return key;
  }
  function parseJSXMemberExpression(parser, context, object, start, line, column) {
      collectLeadingComments(parser);
      const property = parseJSXIdentifier(parser, context, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXMemberExpression',
          object,
          property
      });
  }
  function parseJSXAttributes(parser, context, privateScope) {
      const attributes = [];
      while (parser.getToken() !== 8457014 &&
          parser.getToken() !== 8390721 &&
          parser.getToken() !== 1048576) {
          attributes.push(parseJsxAttribute(parser, context, privateScope, parser.tokenIndex, parser.tokenLine, parser.tokenColumn));
      }
      return attributes;
  }
  function parseJSXSpreadAttribute(parser, context, privateScope, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context);
      consume(parser, context, 14);
      const expression = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context, 1074790415);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXSpreadAttribute',
          argument: expression
      });
  }
  function parseJsxAttribute(parser, context, privateScope, start, line, column) {
      collectLeadingComments(parser);
      if (parser.getToken() === 2162700)
          return parseJSXSpreadAttribute(parser, context, privateScope, start, line, column);
      rescanJSXIdentifier(parser);
      let value = null;
      let name = parseJSXIdentifier(parser, context, start, line, column);
      if (parser.getToken() === 21) {
          name = parseJSXNamespacedName(parser, context, name, start, line, column);
      }
      if (parser.getToken() === 1077936155) {
          const token = scanJSXAttributeValue(parser, context);
          const { tokenIndex, tokenLine, tokenColumn } = parser;
          switch (token) {
              case 134283267:
                  value = parseLiteral(parser, context);
                  break;
              case 8456256:
                  value = parseJSXRootElementOrFragment(parser, context, privateScope, 0, tokenIndex, tokenLine, tokenColumn);
                  break;
              case 2162700:
                  value = parseJSXExpressionContainer(parser, context, privateScope, 0, 1, tokenIndex, tokenLine, tokenColumn);
                  break;
              default:
                  report(parser, 154);
          }
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXAttribute',
          value,
          name
      });
  }
  function parseJSXNamespacedName(parser, context, namespace, start, line, column) {
      collectLeadingComments(parser);
      consume(parser, context, 21);
      const name = parseJSXIdentifier(parser, context, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXNamespacedName',
          namespace,
          name
      });
  }
  function parseJSXExpressionContainer(parser, context, privateScope, inJSXChild, isAttr, start, line, column) {
      collectLeadingComments(parser);
      nextToken(parser, context | 8192);
      const { tokenIndex, tokenLine, tokenColumn } = parser;
      if (parser.getToken() === 14)
          return parseJSXSpreadChild(parser, context, privateScope, start, line, column);
      let expression = null;
      if (parser.getToken() === 1074790415) {
          if (isAttr)
              report(parser, 157);
          expression = parseJSXEmptyExpression(parser, context, parser.startIndex, parser.startLine, parser.startColumn);
      }
      else {
          expression = parseExpression(parser, context, privateScope, 1, 0, tokenIndex, tokenLine, tokenColumn);
      }
      if (parser.getToken() !== 1074790415) {
          report(parser, 25, KeywordDescTable[1074790415 & 255]);
      }
      if (inJSXChild) {
          nextJSXToken(parser, context);
      }
      else {
          nextToken(parser, context);
      }
      return finishNode(parser, context, start, line, column, {
          type: 'JSXExpressionContainer',
          expression
      });
  }
  function parseJSXSpreadChild(parser, context, privateScope, start, line, column) {
      collectLeadingComments(parser);
      consume(parser, context, 14);
      const expression = parseExpression(parser, context, privateScope, 1, 0, parser.tokenIndex, parser.tokenLine, parser.tokenColumn);
      consume(parser, context, 1074790415);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXSpreadChild',
          expression
      });
  }
  function parseJSXEmptyExpression(parser, context, start, line, column) {
      collectLeadingComments(parser);
      parser.startIndex = parser.tokenIndex;
      parser.startLine = parser.tokenLine;
      parser.startColumn = parser.tokenColumn;
      return finishNode(parser, context, start, line, column, {
          type: 'JSXEmptyExpression'
      });
  }
  function parseJSXIdentifier(parser, context, start, line, column) {
      const { tokenValue } = parser;
      collectLeadingComments(parser);
      nextToken(parser, context);
      return finishNode(parser, context, start, line, column, {
          type: 'JSXIdentifier',
          name: tokenValue
      });
  }

  var estree = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var version = "6.0.2";

  function parseScript(source, options) {
      return parseSource(source, options, 0);
  }
  function parseModule(source, options) {
      return parseSource(source, options, 256 | 512);
  }
  function parse(source, options) {
      return parseSource(source, options, 0);
  }

  exports.ESTree = estree;
  exports.parse = parse;
  exports.parseModule = parseModule;
  exports.parseScript = parseScript;
  exports.version = version;

}));
