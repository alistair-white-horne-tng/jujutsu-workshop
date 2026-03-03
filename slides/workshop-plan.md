## Intro - 5 mins
- What is `jj`?
- Why does `jj` exist?
- Who created `jj`?
- Who uses `jj`?

## How to read `jj log` - 10 mins

- `@`
- Commit ref vs. revision ref
- `git_head()`
- `watch -c jj log --color=always`

## Revsets - 10 mins

- `@`
- Revision prefixes (eg `xyz` references `xyzghijklmnop`)
- `x+`, `x-` (`x++`, etc)
- `x::y` (`x::`, `::x`)
- (`~x`, `x & y`, `x | y`)

## Bonus (and less well used) revsets - 5 mins

- `all()` - equivalent to `::`
- `heads(x)` - equivalent to `x ~ ::x-`
- `mine()`
- `fork_point(x)`
- `conflicts()`

## Creating and navigating revisions - 10 mins

- `log`
- `undo`
- `new`
- `describe` (aka `desc`)
- `edit`

## Exercise 1

## Manipulating revs - 15 mins

- `abandon`
- `squash`
- `split`
- `rebase`

## Exercise 2 - 30 mins

## More advanced disaster recovery - 10 mins

- `operation` (aka `op`)
    - `log`
    - `restore`

## Managing conflicts - 10 mins

- `resolve` (or `new` and use IDE)

## Exercise 3 - 30 mins

## Interfacing with a `git` remote - 15 mins

- `bookmark`
    - `create`
    - `set`
- `git`
    - `fetch`
    - `push`

## Exercise 4

## Quality of life features - 15 mins

- `commit`
- `next --edit`
- `prev --edit`
- `redo`
- `absorb`
- `bookmark move`
- `git push --named`

## Extra useful features which we don't have time for today - 15 mins

- `workspace`
    - `add`
    - `update-stale`
- `config`
    - `edit`
        - `--user`
        - `--repo`
- `bookmark`
    - `track`?
- `duplicate`?
- `file annotate`?

## Bonus exercise

## Non-essential (demoable) cool features

- `interdiff`
- `parallelize`
- `evolog`?