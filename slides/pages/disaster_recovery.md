---
layout: section
---

# More advanced disaster recovery

---
title: The operation log
level: 2
---

<v-clicks>

Every change to the repo is recorded in an “operation”.

- **`jj op log`** shows the operation history (the “undo tree”)
- **`jj op restore [operation]`** restores the whole repo to the state it was in at the given operation

NB: `jj undo` is just a shortcut for `jj op restore @-`

</v-clicks>
