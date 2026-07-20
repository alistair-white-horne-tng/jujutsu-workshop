# Cheat sheet

- `jj git fetch` fetches all bookmarks from the remote
- `jj git push` pushes bookmarks to the remote
- `jj bookmark set` creates/moves a bookmark on/to `@`
- `jj bookmark track` tracks a bookmark

# The exercise

1. Find yourself a buddy (trios also work)
2. Fetch new changes from the remote (this should be a no-op unless someone has snuck in a change since you last fetched)
3. Make a new commit on `main`
4. My favourite ice-cream flavour is _____
5. Describe
6. Create a bookmark. Give it a unique name so it doesn't conflict with someone else's
7. Track this bookmark
8. Observe the `*` next to this bookmark. This means that the local copy has changes which the remote is missing
9. Push this bookmark (pro tips: [1] and [2])
10. Wait until both you and your buddy have both pushed
11. Fetch
12. Make a new commit on top of your buddy's bookmark (hint: you will need to append `@origin` to the end of their bookmark name
    because you are not tracking it yet. If you did the setup steps properly, this should tab-complete)
13. Observe the immutable-ness of your buddy's revision(s)
14. Try to edit your buddy's revision. `jj` should tell you this is not allowed
15. Track your buddy's bookmark (pro tip: [3])
16. Now edit your buddy's revision. Change their answer to the ice cream question - their answer is probably wrong anyway ;)
17. Push their bookmark
18. Wait until you and your buddy have both pushed
19. Fetch
20. Observe your buddy's opinion being imposed upon you

# If you're finished

- Try this again, but this time create, track and push a bookmark simultaneously using the shortcut `jj git push --named [bookmark_name]=[rev]`
- Try making another revision on top of your bookmark and then use `jj bookmark advance`

[1] You can combine `jj bookmark set`, `jj bookmark track` and `jj git push` by using `jj git push --named [bookmark_name]=[rev]`

[2] You don't need to specify a revision to `jj git push`, so long as the bookmark is in the revset `::@`

[3] In real life, this is usually not a good idea unless you're working closely with the bookmark's owner, 
and they know you're doing this. Just the same as force-pushing someone else's branch in Git.
