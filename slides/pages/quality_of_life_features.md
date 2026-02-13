---
layout: section
---

# Quality of life features

---
title: Handy commands
level: 2
---

- **`jj commit`** updates the description and creates a new change on top (`ci`)
- **`jj next --edit`:** `jj next` moves the working copy to a child revision (often paired with `--edit`)
- **`jj prev --edit`:** `jj prev` moves the working copy back relative to the current revision (often paired with `--edit`)
- **`jj redo`** redoes the most recently undone operation
- **`jj absorb`** moves changes from a revision into the stack of mutable revisions
- **`jj bookmark move`** moves existing bookmark(s) to a target revision
- **`jj git push --named`:** `--named <name>=<rev>` pushes a revision under a new bookmark name
