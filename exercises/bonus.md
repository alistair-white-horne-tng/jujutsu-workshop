# The docs

[The docs](https://docs.jj-vcs.dev/latest/) are concise and easy to read. Have a browse of the
[CLI reference](https://docs.jj-vcs.dev/latest/cli-reference/) and play around with whichever commands take your fancy

# Some concrete first steps

1. Use `jj config edit --user` to create your preferred config. Refer to [the docs](https://docs.jj-vcs.dev/latest/config/) to help you out
   1. Set up an alias. Eg `jj w` for `watch -c jj log --color=always`. You could even set this to just `jj` ([docs](https://docs.jj-vcs.dev/latest/config/#aliases))
   2. Set up a default revset for `jj log` ([docs](https://docs.jj-vcs.dev/latest/config/#default-revisions))
   3. Create your own list of private commits (e.g. commits prefixed with "wip:") ([docs](https://docs.jj-vcs.dev/latest/config/#set-of-private-commits))
   4. Set `ui.movement.edit = true` if you prefer ([docs](https://docs.jj-vcs.dev/latest/cli-reference/#options_49))
2. Set up a separate workspace of this repository ([docs](https://docs.jj-vcs.dev/latest/working-copy/#workspaces))
   1. Let your favourite agent loose in the new workspace while you can continue your own development in the original repo
   2. Set a long-running set of unit tests going in a different workspace, on a different revision than you're currently working on
   3. Add `snapshot.auto-update-stale = true` to your config ([what is a stale working copy?](https://docs.jj-vcs.dev/latest/working-copy/#stale-working-copy))
      ([auto-update-stale docs](https://docs.jj-vcs.dev/latest/config/#automatic-update-of-stale-working-copies))
3. Start using `jj` on a real live project.
   1. You can just `jj git init --colocate` from any existing Git repo (or `jj git clone --colocate $URL`) and start `jj`-ing!
   2. You can mix-and-match `jj` and Git in the same repo while you get used to it.
   However, this is not a very well-tested use-case; your mileage may vary.
   Also worth noting that `jj` can't `undo` Git commands. I recommend that you bite the bullet and hard switch to `jj`.
   That `undo` command really makes the learning curve very manageable!
