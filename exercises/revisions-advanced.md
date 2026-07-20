# Cheat sheet

- `jj abandon` deletes a rev
- `jj squash` combines a rev with its parent
- `jj split` splits a rev into two
- `jj rebase` moves revs to have different parent(s)

# The exercise

1. `jj new main`
2. My favourite colour is _____
3. That was a silly idea; abandon this revision
4. Actually maybe it wasn't so bad; write your favourite colour again (either by hand, or `jj undo`)
5. Describe, and make a new revision on top of this one
6. My favourite operating system is _____
7. Squash these two revisions into one (pro tip: [1])
8. Edit this new combined revision (fun sidequest: try using `jj prev --edit` [2])
9. Split the revision into two (don't cheat by using `jj undo`...)
10. In the hunk selector, use `right arrow` to unfold, `Enter` to select, and `c` to confirm (pro tip: [3])
11. You'll be prompted to write the descriptions for the two new commits in succession
12. Make a new revision on top of the split revision
13. My favourite outdoor air temperature is _____
14. Describe
15. Rebase the air temp revision onto `main`
16. Put it back to where it used to be
17. Re-order the air temp revision to be before the OS revision (hint: you may need to use `-B` or `-A` here)
18. Make a new revision on top of these three
19. Change all three of your answers (colour, OS, air temp) in the same revision
20. `jj absorb`
21. Explore the magic which just happened

# If you're finished

- Try rebasing so that a revision has more than one parent; there is no limit here!
- Muck about with creating/re-ordering/squashing/splitting your revisions!
This is what we meant when we said "imagine you're constantly in the middle of an interactive rebase"


[1] If needed, you can select which commit to squash from and into using the flags `-f` and `-t`

[2] You can configure `--edit` to be the default behavior by adding something to your `jj config --user`. This is what I (Alistair) have done. 
Go read the "options" sections of [the docs for jj prev](https://docs.jj-vcs.dev/latest/cli-reference/#jj-prev)

[3] If you find yourself using `jj split` immediately followed by `jj squash`, you can instead "interactive squash"; `jj squash -i`.
This allows you to select which lines you squash
