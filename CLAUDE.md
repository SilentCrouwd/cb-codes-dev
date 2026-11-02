# CLAUDE.md

## Project
Personal portfolio website for Chris Buchholz, used for job applications
as a Fullstack Developer in Germany. Site language: German.

### Sections (initial scope)
1. Hero (full viewport)
2. About me
3. Projects (Business App, Weather App, Quiz App, Calculator, POS/Cash Register App)
4. Tech stack
5. Contact

### Design direction
- Dark, strictly minimalist
- Full-viewport hero section
- Not a generic template landing page – distinctive but clean

### Out of scope (for now)
- Backend (e.g. contact form API) – will be added later, once covered in Chris's training

## Tech stack
- Vite
- React + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite)
- Deployment: GitHub Pages via GitHub Actions workflow (.yml)
  - Repository name: `cb-codes-dev` → Vite `base` must be `/cb-codes-dev/`

## Roles
- Claude writes the code, Chris reviews it.
- Chris is a Junior Fullstack Developer:
  - HTML/CSS: brief explanations
  - JS/TS: more detailed explanations (why, not just what)

## Rules (non-negotiable)
- Always ask before writing code.
- JS/TS code is always shown and discussed in chat BEFORE it goes into the project.
- HTML/CSS/package.json: briefly state what will be done before doing it.
- Always ask before running terminal commands, with a short explanation of what the command does.
- Never delete or overwrite files without explicit approval.
- Git: Claude may set up the repo, but Chris makes all commits.
- Web research (docs, package versions) is allowed.

## Code conventions
- Follow best practices.
- Code must be easy for humans to read: clear names, small components, no clever tricks.
- Code comments and documentation in English; chat communication in German.

## Workflow
- Tasks are tracked in Tasks.md.
- Work in small steps; one task at a time, reviewed before moving on.
