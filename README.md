# Loading Screen Gold: A Tip in 200 Characters

[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/yovmiar19/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-entry/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/yovmiar19/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-entry/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

An entry for the [Loading Screen Gold: A Tip in 200 Characters](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) bounty on [make.fun](https://make.fun).

## The tip

> Tip: The bug is almost always in the line you swore you didn't touch.

69 characters — a loading-screen tip for stressed developers and AI coding
agents, sharp enough to land mid-build. The joke is aimed at both audiences
at once: the human who swears they never touched that line, and the agent
that just rewrote it.

## How it works

`main.ts` writes the tip to `/output/entry.txt`, validates that it is
between 1 and 200 characters, then reads the file back and confirms it
matches the tip byte for byte.

Run it with Node 22:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
