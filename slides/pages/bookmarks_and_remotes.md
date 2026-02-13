---
layout: section
---

# Interfacing with a `git` remote

---
title: Bookmarks and remotes
level: 2
---

- **Bookmarks (mental model):** bookmarks are named pointers to revisions (often used like Git branches)
- **`jj bookmark create`** creates a new bookmark
- **`jj bookmark set`** creates a new bookmark, or updates an existing one by name
- **`jj bookmark move`** moves existing bookmark(s) to a target revision
- **`jj bookmark track`** starts tracking given remote bookmarks
- **`jj git fetch`** fetches from a Git remote
- **`jj git push`** pushes bookmark updates to a Git remote
- **`jj git push --named`:** `--named <name>=<rev>` pushes a revision under a new bookmark name (and tracks it if it’s new)
