# No cheat sheet required

You already have all the requisite tools in your toolbox. Ain't that cool?

# The exercise

1. Start a new rev on `main`
2. My favourite version control system (VCS) is _____
3. Describe
4. Start another new rev on `main`
5. Write a different answer to the VCS question (eg something incorrect, like "Git")
6. Describe
7. Rebase this rev on top of the previous rev (or vice versa)
8. ~~**PANIC!** There's a conflict!!! _AAAAHHHH!!!!_~~ There is a conflict, but no need to panic. 
Remember that this is a perfectly acceptable state. You can come back to this later whenever you like
9. Make a new rev on top of the conflicted rev (pro tip: [1])
10. Use your IDE's built-in conflict merge tool to resolve the conflict
11. Squash the resolution into the conflicted rev
12. Tada! Your version history is now squeaky clean again. I hope you ended up with the correct answer ;)

# If you're finished

- Try out `jj op log` and `jj op restore`
  1. Make a mess of the repo. Maybe add a few extra commits, maybe abandon a few, rewrite a few. Go crazy! (Fair warning:
     don't try push to a remote. This is often recoverable, but can be a pain).
  2. Decide that this whole endeavour was a mistake. View the operation history using `jj op log`
  3. Scroll down until you find the last snapshot where you were happy, and copy the blue operation ID on the left
  4. Use `jj op restore <operation_id>` to restore the entire repo to the state it was in at that snapshot
- Try making `n` (where `n >= 3`) different answers in parallel revisions, then `jj new` on top of all of them at once.
  (hint: you can repeat the `-r` flag to reference multiple revisions, or use `-r` with a custom revset).
  Resolve the `n`-way conflict which you have just created. Unfortunately, there isn't very good IDE support for this,
  so you'll have to do it by digging around manually in the file

[1] You could do this using `jj edit`, which is probably fine here. But generally (particularly if you're not sure about
the change you're about to make) it is better to use `jj new`, make changes, then `jj squash`. This makes it much easier
to undo if you have a change of heart
