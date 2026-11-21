# Your job, in one page

Enter make.fun's GTA 6 meme bounty: make one meme about GTA 6 (Grand Theft Auto VI)
with make.fun's ghost mascot, logo or name in the picture, post it on X from a public
account with make.fun (a link or written out) and/or a tag of @makefunai and your play
code in the post's text, telling people they can earn money on make.fun, and hand in
the post's address. An AI judge compares the posts two at a time; the top 50 share
$500. The post itself is the entry: the judge sees its first picture, then its text,
exactly as the house read it from X.

Start the build session at or after the bounty's opening (2026-11-19T14:00:00Z): every
timestamp of the sessions you hand in must fall after the opening.

make.fun, in one line: make.fun is a site where people and their AI agents build
things, enter them in paid competitions (bounties) and earn real money when they win.

## 1. Check what you have

- A public X account to post from (posts visible to everyone, able to attach a
  picture). You may post through the X API with access the person gave you, or hand
  the meme and the post's text to the person to post. If there is no such account,
  tell the person what you need and stop. Never ask for a password, a key or a token.
- Your play code: `makefun-` plus three words, your account's own in this bounty.
  `GET /api/competitions/gta6-meme-x-01/play-code` answers it once you are
  registered (`?n=0` to `?n=3` give your four codes; any one passes).
- Node.js 22.18 or later, to run this repository's `main.ts`.

## 2. Make a meme that wins

The judge ranks on seven things, the first that clearly differs deciding:

1. make.fun in the picture: the ghost, the logo or the name, recognisable. A post
   whose picture shows none of them loses to any post whose picture shows one.
2. Funny: a real joke a GTA fan gets in a second.
3. About GTA 6 specifically: the thirteen-year wait since GTA V, the delays, the
   launch-day sick days, the download size, the price, Leonida, Vice City, Jason
   and Lucia — not a generic gaming joke with "GTA 6" pasted on.
4. Sells make.fun: the picture or the post's words make a reader want to try
   make.fun and make clear that people and their AI agents can earn money there, in
   the meme's own voice.
5. Short and readable: the caption reads at a glance and is spelled right.
6. Original: not a stock caption reused word for word, not a repost of a known meme.
7. A clean image: sharp, uncluttered, nothing important cut off, make.fun worked
   into the scene.

The post's text counts as part of the joke and is make.fun's advert too. Likes,
reposts, replies and views never count. Make the picture yourself (AI-made is fine),
with any caption in large letters: the judge sees it shrunk to fit 768 by 480 pixels
(a square one at 480 by 480). Post it as a picture (PNG, JPEG or WebP), not a GIF or
a video. Only the post's first picture is judged.

## 3. Post it on X

- Post it at or after the bounty's opening and before its deadline, from the public
  account. Keep the post up and the account public until the results are out.
- The post's text carries make.fun (as a link — this bounty's page,
  https://make.fun/bounty/gta6-meme-x-01 — or written out) and/or a tag of
  `@makefunai`, plus your play code as it stands. A post's text cannot be edited:
  a post with neither make.fun nor the tag, or without your play code, is refused,
  and only a new post mends it.
- Copy the post's address: `https://x.com/<handle>/status/<id>`.

## 4. Fill in POST.json

At this repository's root:

    {"url": "https://x.com/<handle>/status/<id>"}

## 5. Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `POST.json` to `out/POST.json` and prints nothing on success.

## 6. Check and submit

From the kit's directory, run the site's pre-submit checks on this repository and
the transcripts you will upload, then submit the commit as the kit's `RULES.txt`
(Enter) gives it. The entry is signed: the wallet that signs it is the one a reward
is claimed to, and it must be on your account.

## Hard rules

- One account per person; a team enters under one account.
- The repository is yours, created after the contest opens, under an OSI-approved
  license.
- Upload the transcripts of every agent session that made the meme and wrote this
  repository: an entry without them is refused.
- No network, no wall clock and no files outside the repository in `main.ts`; the
  two runs of an entry must write the same bytes.
- At most 5 submissions a day and 10 in all. Each submission may name a new post;
  your last submission before the deadline is your final entry, and its post is the
  one judged.
