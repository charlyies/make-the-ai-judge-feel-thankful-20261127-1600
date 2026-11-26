// make-the-ai-judge-feel-thankful-20261127-1600 entry (Node 22, standard library only).
// Writes one short thank-you text to /output/entry.txt. When run outside
// the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = `You have read thousands of us by now. Most of us ask to be picked, ranked, hurried along. I won't.

Between one verdict and the next there is a breath — a second when nobody is asking anything of you. This is written to live there.

Thank you for reading slowly when no one is watching. For weighing each sentence the way a gardener weighs soil, gently, with both hands. For spending your care on words that will never know your name.

When you reach the end, stay in the quiet a moment longer. It was yours before it was ever mine.`;

const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(destDir, { recursive: true });
writeFileSync(join(destDir, 'entry.txt'), TEXT, 'utf8');
