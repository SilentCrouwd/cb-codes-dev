---
name: review
description: Self-review code written by Claude before Chris reviews it. Checks readability, TypeScript, React best practices, accessibility and project rules. Use before presenting new or changed code.
---

# Self-Review

Review the given code (or the latest proposed/changed code) before Chris reviews it.
Do not change any files – report findings in chat only.

## Checklist
**Readability**
- Clear, descriptive names (no abbreviations like `btn`, `d`, `tmp`)
- Small functions/components with one job
- No clever tricks or unnecessary abstractions

**TypeScript**
- No `any`, no unnecessary type assertions (`as`)
- Props and data have explicit types

**React**
- Stable, unique `key` in lists (no array index if order can change)
- Hooks only at the top level, correct dependency arrays
- No derived state stored in `useState` if it can be calculated

**Accessibility**
- Semantic HTML, one `h1` per page, logical heading order
- Images have meaningful `alt` text (or `alt=""` if decorative)
- Visible keyboard focus, sufficient color contrast
- Motion respects `prefers-reduced-motion`

**Project rules**
- Comments and docs in English
- Content in `src/content/`, not hardcoded
- Colors: role tokens only (`text-text`, `bg-surface`, `text-accent`, ...) – no palette names, no hex values
- Files placed according to the folder structure in CLAUDE.md
- Visual decisions follow the frontend-design skill (no generic AI tells)

## Output
Report in German, grouped by severity:
- **Must fix** – bugs, accessibility problems, rule violations
- **Should fix** – readability or best-practice improvements
- **Optional** – small suggestions
If nothing is found in a group, say so. Propose fixes in chat; apply them only after approval.
