---
layout: section
---

# Revsets

---
title: Core syntax
level: 2
---

- **What is a revset?** A `revset` expression selects a set of revisions (commits) for commands like `jj log` and many `-r` / `--revisions` flags
- **`@`** is the current working-copy revision
- **Revision prefixes:** A unique prefix of a commit/change id can be used as a shorthand revision name
- **`x-` and `x+`:** `x-` selects parents of `x`; `x+` selects children of `x` (repeatable: `x--`, `x++`, …)
- **`x::`, `::x`:** `::x` selects ancestors of `x` (including `x`); `x::` selects descendants of `x` (including `x`)
- **`x::y`:** `x::y` selects commits that are descendants of `x` and ancestors of `y` (inclusive)
- **Set operators (extra):** `x ~ y` (set difference), `x & y` (intersection), `x | y` (union)
