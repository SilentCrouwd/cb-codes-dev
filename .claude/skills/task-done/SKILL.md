---
name: task-done
description: Mark a task in Tasks.md as done, suggest a commit message and show the next task. Use when Chris confirms a task is finished.
disable-model-invocation: true
---

# Task Done

Close the current task and prepare the next one.

## Steps
1. Identify the finished task in Tasks.md. If unclear which one, ask.
2. Briefly confirm it is really complete (all sub-tasks checked, code reviewed and approved).
   If something is missing, say what – do not mark it as done.
3. Mark it as done (`- [ ]` → `- [x]`) in Tasks.md. If all sub-tasks of a parent are done, mark the parent too.
4. Suggest a commit message in English (Conventional Commits, e.g. `feat: add hero section`).
   Do NOT run git commands – Chris makes all commits.
5. Show the next open task and briefly describe what it involves.
   Ask whether to start it.

## Rules
- Only edit Tasks.md, no other files.
- If new tasks came up during the work, propose adding them to Tasks.md (do not add them without approval).
