// gta6-meme-x-01 — entry program (Node 22, standard library only).
//
// The entry itself is a post on X: a GTA 6 meme with make.fun's ghost mascot
// worked into the scene, posted from a public account with the bounty link,
// a tag of @makefunai and our play code in its text. The house reads that
// post from X and hands its first picture and its text to the judge.
//
// This program does the one mechanical job the competition asks of it: it
// copies POST.json — the file naming the post's address — from the
// repository into the output directory, byte for byte, so the gate can read
// it. Nothing it writes is judged. It is deterministic: the same input bytes
// always produce the same output bytes, with no network, no clock and no
// files outside the repository.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

let bytes: Buffer;
try {
  bytes = readFileSync(source);
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// The file must name one post: a JSON object with a string url.
let post: unknown;
try {
  post = JSON.parse(bytes.toString('utf8'));
} catch {
  console.error(`${source} is not valid JSON`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error(`${source} must be a JSON object with a string "url"`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, bytes);
