---
layout: section
---

# Revsets

---
title: What is a revset?
level: 2
---

<v-clicks>

- The revset language allows you to select a set of revisions 🤯
- Often refers to a single commit, but can also select multiple revisions
- Used by many commands to manipulate revisions, using the `-r` flag

</v-clicks>

---
title: Core syntax
level: 2
---

<v-clicks>

- `@` is the current working-copy revision
- **Revision prefixes:** A unique prefix of a commit/change id can be used as a shorthand revision name
- `x-` selects parent(s) of `x` (eg `@-`)
- `x+` selects children of `x` (repeatable: `x--`, `x++`, …)
- `x::` selects descendants of `x` (including `x`)
- `::x` selects ancestors of `x` (including `x`)
- `x::y` selects commits that are descendants of `x` and ancestors of `y` (inclusive)

</v-clicks>

---
title: Non-essential revsets
level: 2
---

<v-clicks>

- `x ~ y` (set difference), `x & y` (intersection), `x | y` (union)
- `all()` selects all revisions (equivalent to `::`)
- `heads(x)` selects the "tips of the branches" in `x` (equivalent to `x ~ ::x-`)
- `mine()` selects revisions authored by the current user
- `fork_point(x)` selects the first shared ancestor between the commits in `x`
- `conflicts()` selects revisions that are in a conflicted state

</v-clicks>
