# Cheat sheet

A helpful little cheat-sheet with the commands you will find useful during this exercise

- `jj log` shows revision history (or use the auto-updating version: `watch -c jj log --color=always`)
- `jj undo` undoes any `jj` command
- `jj new` creates a new empty revision on top of `@`
- `jj describe` (aka `jj desc`) changes the description of `@`
- `jj edit [rev]` moves the working copy (`@`) to `[rev]`

NB: Most of these can be used with the `-r` flag to operate on a revision other than `@`.

# The exercise

1. Make a new commit on top of `main`. This is likely already the case after you clone the repo.
2. Edit this file by completing this sentence: My favourite house pets are ______
3. Consult the log and see that this revision is no longer empty
4. Give this revision a description
5. `jj undo` the description (pro tip: You can undo the undo by using `jj redo`)
6. Give the revision a more epic description
7. Create a new revision on top of the current one (pro tip: You can `jj desc` and `jj new` simultaneously using `jj commit`)
8. Finish this sentence: My favourite non-pet animals are _____
9. Describe the rev (pro tip: [1])
10. Move the working copy back to the *house pet* revision (not the non-pet one)
11. Look at this file in your IDE, and see what the diff is showing, and which of your changes have disappeared
12. Change your answer to the house pet sentence
13. Move the working copy forwards to the non-pet animal rev
14. Observe the log and the resulting file with satisfaction

# If you're finished

- Make/edit a few more commits, but this time try describing a commit which is not `@`.
- Also try out referring to revisions differently (eg relatively: `@-` vs absolutely: `uz`)

[1] Some frequently used commands, such as `new` and `desc` don't need the `-r` flag when referring to a commit;
eg `jj new main` is identical to `jj new -r main`. Also `jj desc -r @` == `jj desc @` == `jj desc`
