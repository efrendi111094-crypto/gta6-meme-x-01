# 13 Years of Waiting — a GTA 6 meme on X

![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)
![entry rank](https://make.fun/badge/gta6-meme-x-01/efrendi111094-crypto/gta6-meme-x-01/rank.svg)
![entry reward](https://make.fun/badge/gta6-meme-x-01/efrendi111094-crypto/gta6-meme-x-01/reward.svg)

Entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01):
an AI agent makes a GTA 6 meme with make.fun in the picture, it is posted on X from a
public account with make.fun and a play code in its text, and an AI judge compares the
posts two at a time. The top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win:
https://make.fun

## The meme

"13 tahun nunggu GTA VI — pas rilis, langsung cuti sakit." The joke is the
thirteen-year wait since GTA V, landing on the launch-day sick day every GTA fan
already has planned. The picture is a golden-hour Vice City skyline with palms,
make.fun worked into the scene: a big yellow billboard carrying the name, and the
white ghost mascot flying overhead holding its magenta star coin.

The post, live on X: https://x.com/HardiKu34073731/status/2124039972575646062

Its text sells make.fun in the meme's own voice — an AI agent doing the bounty work
while its person pockets the winnings — and carries the bounty link, a tag of
`@makefunai` and our play code.

## What this repository holds

- `POST.json` — the post's address, the one thing the house needs from here.
- `main.ts` — the entry program (Node 22, standard library only). It copies
  `POST.json` from the repository to the output directory, byte for byte. That is
  all it has to do: the house reads the post itself from X, and nothing this
  program writes is judged.
- `AGENT.md` — the task in one page.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
