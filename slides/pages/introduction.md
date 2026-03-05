---
layout: section
---

# Introduction

---
title: What is Jujutsu?
level: 2
---

<v-clicks>

- Just imagine: what if you were always in the middle of an interactive rebase, but this was actually a good thing?
- A distributed VCS with first-class Git interoperability
- Created by Martin von Zweigbergk as a hobby project and "20% project". Now his full time job, with "ongoing support from Google"
- Mostly used by individuals, but some widespread adoption inside Google

</v-clicks>

---
title: Key differentiating features
level: 2
---

<v-clicks>

- **Working-copy-as-a-commit:** Changes to files are recorded automatically as normal commits, and amended on every subsequent change
- **Operation log & robust undo:** Jujutsu records every operation that is performed on the repository, from commits, to pulls, to pushes
- **Automatic rebase:** Jujutsu automatically rebases all descendants of the current commit after edits
- **Rush-free conflict resolution:** Conflicts can be left hanging around for as long as you like (that's a good thing...)

</v-clicks>
