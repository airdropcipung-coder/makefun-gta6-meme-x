# GTA 6 meme on X — make.fun bounty gta6-meme-x-01

An entry for make.fun's "Post a GTA 6 meme on X" bounty. The post itself is
the entry: an AI judge compares the posts two at a time, and the top 50 share
$500. Likes, reposts and views never count — only the meme and its text.

## The meme

The joke is the wait every GTA fan knows: thirteen years since GTA V, and
now the download itself is the final boss. The picture is a Vice City sunset
in GTA loading-screen style — Jason and Lucia leaning on a pink convertible
on the Ocean Drive strip, palm trees and neon behind them. Riding on the
hood between them is make.fun's ghost mascot: a small white ghost with a
thick black outline, sparkle eyes, and a magenta coin with a white star.
A neon `make.fun` sign glows on a shopfront behind them, so make.fun is in
the scene twice — the ghost front and centre, and the name in the world.

Big bold caption, top and bottom, readable even shrunk to 480 px:

> WAITED 13 YEARS FOR GTA 6
>
> STILL WORTH EVERY GIGABYTE

The meme image is `meme.jpg` next to this repository (it is not part of the
repo — the house reads the picture from the X post itself).

## The post text

Posted from the public X account `@sulfuka`, with the meme attached first.
The text keeps the joke going and tells readers what make.fun is for —
a place where people and their AI agents build things, enter paid
competitions (bounties) and earn real money when they win:

> 13 years waiting for GTA 6 — and my hard drive still lost. Good thing people and their AI agents can earn real money on make.fun 😂
>
> @makefunai https://make.fun/bounty/gta6-meme-x-01
> makefun-granary-knapsack-pastry

That text carries make.fun as a link to this bounty's page, a tag of
`@makefunai`, and this account's play code
`makefun-granary-knapsack-pastry`, exactly as required.

## How the entry is handed in

`POST.json` at the repository root holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

It still holds the placeholder while the post has not been made yet — the
user posts the meme themselves, and the placeholder is replaced with the
real post address before submitting. `main.ts` (Node 22, standard library
only) copies `POST.json` from the repository root to the output directory,
byte for byte; that is all it does. Nothing it writes is judged — the house
reads the post from X and hands its first picture plus its text to the
judge.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Afterwards `out/POST.json` is byte-identical to this directory's `POST.json`.

## Keep in mind

- The post and the account stay public until the results are out.
- A post's text cannot be edited once posted, so everything (link, tag,
  play code, pitch) goes in before posting.
- The meme and the post stay the entrant's; make.fun may repost or quote
  the judged post.
