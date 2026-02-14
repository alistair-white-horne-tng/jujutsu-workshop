---
layout: section
---

# Bonus (and less well used) revsets

---
title: Extra revsets
level: 2
---

<v-clicks>

- **`all()`** selects all revisions (equivalent to `::`)
- **`heads(x)`** selects the head revisions in `x` (equivalent to `x ~ ::x-`)
- **`mine()`** selects revisions authored by the current user (equivalent to `author_email(exact-i:<user-email>)`)
- **`fork_point(x)`** selects the first shared ancestor between `@` and `x`
- **`conflicts()`** selects revisions that have files in a conflicted state

</v-clicks>
