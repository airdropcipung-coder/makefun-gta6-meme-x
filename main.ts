// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The entry itself is the X post: a GTA 6 meme whose picture shows make.fun's
// ghost mascot, posted from a public account with make.fun, the play code and
// an earn-money pitch in its text. This repository only hands the house the
// post's address, so all this program does is carry POST.json from the repo
// root into the output directory, byte for byte.
//
// It runs on Node 22 with the standard library only, and is written in plain
// JavaScript-compatible syntax so node --check accepts it as-is. It touches
// no network, reads no clock, and reads nothing outside the repository
// directory, so two runs always write identical bytes.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Afterwards out/POST.json is byte-identical to this directory's POST.json.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// In the grader these point at /bot and /output; locally the env vars above
// let the same command run against this directory instead.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(repoDir, 'POST.json');
const targetPath = join(outputDir, 'POST.json');

mkdirSync(outputDir, { recursive: true });

let postFile;
try {
  postFile = readFileSync(sourcePath);
} catch (err) {
  console.error('Could not read POST.json from ' + repoDir + ': ' + err.message);
  process.exit(1);
}

try {
  writeFileSync(targetPath, postFile);
} catch (err) {
  console.error('Could not write POST.json to ' + outputDir + ': ' + err.message);
  process.exit(1);
}
