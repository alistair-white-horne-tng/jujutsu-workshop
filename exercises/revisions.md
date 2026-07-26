# Cheat sheet

A helpful little cheat-sheet with the commands you will find useful during this exercise

- `jj log` shows revision history (or use the auto-updating version: `watch -c jj log --color=always`)
- `jj show` shows the diff in the target revision (target defaults to `@`)
- `jj undo` undoes _any_ `jj` command
- `jj new` creates a new empty revision on top of the target revision (target defaults to `@`)
- `jj describe` (aka `jj desc`) changes the description of the target revision (target defaults to `@`)
- `jj edit [rev]` moves the working copy (`@`) to `[rev]`

NB: Most of these can be used with the `-r` flag to operate on a revision other than `@`.

# The exercise

1. Make a new empty commit on top of `main`. This is likely already the case after you `jj init`ed.
2. Edit this file by completing this sentence: My favourite house pets are ______
3. Consult the log and see that this revision is no longer empty
4. Observe the diff in your IDE, and also by using `jj show`
5. Give this revision a description
6. `jj undo` the description (pro tip: You can undo the undo by using `jj redo`)
7. Give the revision a more epic description
8. Create a new revision on top of the current one (pro tip: You can `jj desc` and `jj new` simultaneously using `jj commit`)
9. Finish this sentence: My favourite non-pet animals are _____
10. Describe the rev (pro tip: [1])
11. Move the working copy back to the *house pet* revision (not the non-pet one)
12. Look at this file in your IDE, and see what the diff is showing, and which of your changes have disappeared
13. Change your answer to the house pet sentence
14. Move the working copy forwards to the non-pet animal rev
15. Observe the log and the resulting file with satisfaction

# If you're finished

- Make/edit a few more commits, but this time try describing a commit which is not `@`.
- Also try out referring to revisions differently (eg relatively: `@-` vs absolutely: `uz`)

[1] Some frequently used commands, such as `new` and `desc` don't need the `-r` flag when referring to a commit;
eg `jj new main` is identical to `jj new -r main`. Also `jj desc -r @` == `jj desc @` == `jj desc`
