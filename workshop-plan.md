## Intro - 5 mins - 13:05
- What is `jj`?
- Why does `jj` exist?
- Who created `jj`?
- Who uses `jj`?

## How to read `jj log` - 10 mins - 13:15

- `@`
- Commit ref vs. revision ref
- `git_head()`
- `watch -c jj log --color=always`

## Revsets - 10 mins - 13:25

- `@`
- Revision prefixes (eg `xyz` references `xyzghijklmnop`)
- `x+`, `x-` (`x++`, etc)
- `x::y` (`x::`, `::x`)
- (`~x`, `x & y`, `x | y`)

## Bonus (and less well used) revsets - 5 mins - 13:30

- `all()` - equivalent to `::`
- `heads(x)` - equivalent to `x ~ ::x-`
- `mine()`
- `fork_point(x)`
- `conflicts()`

## Creating and navigating revisions - 10 mins - 13:40

- `log`
- `undo`
- `new`
- `describe` (aka `desc`)
- `edit`

## Exercise 1 - 30 mins - 14:10

Check out the branch for exercise-one
1. Add descriptions to the commits (target once with relative targetting (@-), and once with absolute targetting `jj desc rhw`)
2. Add a new commit on top of the branch (I would not want to cover here the --after and --before options)
3. Make some changes if you like
4. Use `jj edit` to modify one of your previous commits
5. Observe that changes are automatically rebased on top of each other
6. Try to make a change with jj edit that conflicts with a later change
7. Use `jj undo` to undo that change

## Manipulating revs - 15 mins - 14:25

- `abandon`
- `squash`
- `split`
- `rebase`

## Exercise 2 - 30 mins - 14:55

Go to branch for exercise-two.
1. Use `jj squash` to squash all changes into that change
2. Use `jj split` to split the head into four commits (multiply, divide, square-root, and power), in that order
4. Use `jj rebase` to reorder the commits (two branches, one contains divide -> multiply -> power, the other just the square root commit)
   1. You will need to do a small amount of manual `jj edit` after using `jj split` to get the README perfect
   2. In order to minimise rebase conflicts you will want to keep all changes to the README.md in the parent commits

## More advanced disaster recovery - 10 mins - 15:05

- `operation` (aka `op`)
    - `log`
    - `restore`

## Managing conflicts - 10 mins - 15:15

- `resolve` (or `new` and use IDE)

## Exercise 3 - 30 mins

1. If you made a conflicting state in Exercise 1, try to recover it from the op log
2. Otherwise, go to exercise-three branch which is pushed to contain a conflict
3. Try resolving it with you IDE and see how this works with IDEs that support git

## Interfacing with a `git` remote - 15 mins - 15:30

- `bookmark`
    - `create`
    - `set`
- `git`
    - `fetch`
    - `push`
- `bookmark`
  - `track`

## Exercise 4 - 30 mins - 16:00

1. Create a new bookmark with the name of your group pointing to the head of one of the branches you have been working on
2. Use `jj bookmark track` on this bookmark to allow pushing to the remote
3. Push with `jj git push`
4. Someone else can use `jj git fetch` to fetch all remote bookmarks
5. Use `jj log -r ::<bookmark-name>@origin` to see the commits that are in that remote branch

## Quality of life features - 15 mins - 16:15

- `commit`
- `next --edit`
- `prev --edit`
- `redo`
- `absorb`
- `git push --named`

## Exercise 5 - 10 mins

Use `jj absorb` in the branch for exercise 5 to absorb changes into parent commits

## Extra useful features which we don't have time for today - 15 mins - 16:30

- `workspace`
    - `add`
    - `update-stale`
- `config`
    - `edit`
        - `--user`
        - `--repo`
- `duplicate`
- `evolog`

## Bonus exercise - Potentially infinite

1. Use `jj config edit --user` to create your preferred set
   1. Set up a merge editor (ui.merge-editor, and mergetools.*.program, mergetools.*.merge-args)
   2. Set up a default revset for log revset.log
   3. Create your own list of private commits (e.g. commits prefixed with "wip:")
   4. Set up an alias (a useful alias could be `tug` to move a bookmark from child commits to the current commit)
2. Set up a separate workspace of this repository
   1. Set loose your favourite agent in the separate workspace while you can continue yourself in the main repository
   2. Add snapshot.auto-update-stale true to your config
