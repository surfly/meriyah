import * as t from 'node:assert/strict';
import { describe, it } from 'vitest';
import { parseSource } from '../../src/parser';

describe('Attach comments', () => {
  it('Leading comments', () => {
    const parseResult = parseSource(
      `
      /* comment */\nconst foo = 1;
    `,
      {
        attachComments: true,
      },
    );

    t.ok(parseResult.body[0].leadingComments?.length === 1, 'Parser does not attach comments');
  });
});
