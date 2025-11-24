---
layout: section
---

# Basic operations 


---
title: Creating commits
level: 2
---
- `jj new` creates a new empty commit 
- `jj describe` describes the current commit
- `jj split` splits the current commit into two commits


---
title: Using bookmarks
level: 2
---
- A bookmark is created with `jj bookmark create my-bookmark-name` 
- Bookmarks do not move when you create a new commit. They do move when a commit is split
- To move a bookmark, use `jj bookmark move`

