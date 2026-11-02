---
name: new-component
description: Propose a new React component for the portfolio following the project rules. Use when Chris asks for a new component or section.
disable-model-invocation: true
---

# New Component

Propose a new React + TypeScript component. Never write it into the project before Chris has approved it.

## Steps
1. Clarify purpose: what the component shows/does and where it is used. Ask if unclear.
2. Check Tasks.md and existing components – reuse before creating something new.
3. Propose in chat:
   - File name and location (PascalCase, e.g. `src/components/ProjectCard.tsx`)
   - Props as a TypeScript `type` (no `any`)
   - The full component code
4. Explain the code in German at junior level:
   - TSX/logic: detailed – explain why, not just what
   - Tailwind classes / markup: brief
5. Wait for Chris's review. Apply requested changes and show them again.
6. Only after explicit approval: create the file.

## Rules
- One component per file, named export
- Data (texts, lists) lives in `src/data/`, not hardcoded in components
- Semantic HTML (`section`, `nav`, `article`, ...) and accessible markup
- Styling with Tailwind v4 utility classes; follow frontend-design skill for visual decisions
- Comments in English, only where the code is not self-explanatory
