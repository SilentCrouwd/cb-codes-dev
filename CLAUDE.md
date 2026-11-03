# CLAUDE.md

## Project

Personal portfolio website for Christian Buchholz ("Chris"), used for job applications
as a Fullstack Developer in Germany. Site language: German.

- Name shown on the site: Christian Buchholz
- Background: trained chef, now in further training as a frontend developer;
  runs a small business building static websites for small companies
- Tone of voice: direct, down-to-earth, warm and personal
- Client projects will be added once available

### Sections (initial scope)

1. Hero (full viewport)
2. About me
3. Projects (Business App, Kanban Board, Weather App, Quiz App, Calculator, POS/Cash Register App)
4. Tech stack
5. Contact

### Design direction

- Dark, strictly minimalist
- Full-viewport hero section
- Not a generic template landing page – distinctive but clean
- Guiding idea: "Mise en place" – the chef's discipline of preparing everything
  before service, applied to code. Shown through attitude and copy, not kitchen decoration.
- Preview (design reference): https://claude.ai/artifact/D1CJnCz9CPxWpyuHvkNXqM

### Design plan (approved)

**Colors**

| Token          | Hex       | Use                                   |
| -------------- | --------- | ------------------------------------- |
| aubergine      | `#241B26` | page background                       |
| aubergine-soft | `#33283A` | surfaces, dividers, image placeholders |
| mehl           | `#F3EDE8` | main text, icons                      |
| pfeffer        | `#A99CA8` | secondary text                        |
| rote-bete      | `#E0558A` | accent: links, focus, group headings  |

- Page background: subtle diagonal gradient (top left → bottom right):
  `#34233A` → `#241B26` (45%) → `#1C1520`
- Avoid: green, yellow, brown
- Tokens live in `src/index.css` (`@theme`) in two layers:
  - Palette (kitchen names): `aubergine`, `mehl`, `rote-bete`, ...
  - Roles: `page`, `page-from`, `page-to`, `surface`, `text`, `muted`, `accent`
- **Components use role colors only** (`bg-page`, `text-text`, `text-muted`, `text-accent`, ...),
  never palette colors or hex values. A light mode later only remaps the roles.

**Typography** (self-hosted)

- Headings: Young Serif
- Body: Atkinson Hyperlegible Next
- Line length below 80 characters, left-aligned layout

**Sections**

- Header: logo "CB" in a circle (stamp style), navigation links on the right
- Hero: name, one-line story ("Gelernter Koch. Heute baue ich Websites – mit derselben Sorgfalt."),
  two links. Background image on the right (later: AI-generated image of Chris at the computer),
  fading from transparent (left) to opaque (right) via `mask-image`.
  On mobile the image sits behind the text with a stronger dark overlay.
- About me: heading left, text right
- Projects: one row per project – screenshot (16:10) + title, description, tech, links
- Tools ("Werkzeuge"): tiles with monochrome icons (Simple Icons, color: mehl),
  grouped into Frontend / Handwerkszeug / Als Nächstes
- Contact: links (email, GitHub, LinkedIn) + a real photo of Chris
- Footer: copyright, Impressum, Datenschutz

**Motion**

- Only one orchestrated moment: hero lines fade in one after another on page load
- Respect `prefers-reduced-motion` (no animation)

### Out of scope (for now)

- Backend (e.g. contact form API) – will be added later, once covered in Chris's training

## Tech stack

- Vite
- React + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite)
- Fonts: self-hosted only (GDPR) – no Google Fonts CDN or any other external font requests
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
- Formatting: Prettier (`.prettierrc`: semicolons, single quotes). ESLint for code quality only.
- Components use named exports (`export function Hero()`), no default exports.

## Folder structure

```
src/
├── assets/               images (profile photo, project screenshots)
├── components/           global components, used by more than one section
├── sections/             one folder per page section
│   ├── Hero/
│   │   └── Hero.tsx
│   └── Projects/
│       ├── Projects.tsx
│       └── components/   components used only inside this section
│           └── ProjectCard.tsx
├── content/              page content as TS files (projects.ts, techStack.ts)
├── App.tsx               composes the sections
├── main.tsx              entry point
└── index.css             Tailwind import + theme
```

- A section gets its own `components/` folder only when it actually needs one.
- A component starts in its section. Once a second section needs it, move it to `src/components/`.
- Texts and lists live in `src/content/`, never hardcoded in components.
- Create folders only when the first file goes into them.

## Workflow

- Tasks are tracked in Tasks.md.
- Work in small steps; one task at a time, reviewed before moving on.
