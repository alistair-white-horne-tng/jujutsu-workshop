---
layout: section
---

# Creating and navigating revisions

---
title: Creating and navigating revisions
level: 2
---

<ul>
  <li v-click><code>jj log</code> shows revision history</li>
  <li v-click><code>jj undo</code> undoes ANY <code>jj</code> command (super OP)</li>
  <li v-click><code>jj new</code> creates a new, empty revision on top of <code>@</code></li>
  <li v-click><code>jj describe</code> / <code>jj desc</code> updates the description (commit message) of <code>@</code></li>
  <li v-click><code>jj edit [rev]</code> moves <code>@</code> to <code>rev</code></li>
</ul>

<p v-click>NB: <code>jj</code> snapshots the repo whenever you run a command</p>
