# PHASE 4 — TECHNICAL ARCHITECTURE & FILE STRUCTURE
## Carlos Pérez Cabrera | Implementation Blueprint

### 1. Recommended Stack & Rationale

**Current Environment Adaptation:**
While Next.js was requested, this environment is currently configured for **Vite + React**.
*   **Recommendation:** We will proceed with **Vite + React + TypeScript**.
*   **Why:** It offers the same modern component architecture and performance for a Single Page Application (SPA) portfolio without the server-side complexity of Next.js. It is lightweight, fast, and perfect for a "premium static" feel.

**Core Technologies:**
*   **Framework:** React 19 (Latest features)
*   **Build Tool:** Vite (Fast HMR, optimized production build)
*   **Styling:** Tailwind CSS v4 (Utility-first, design system implementation)
*   **Animation:** Framer Motion (Complex layout animations, scroll reveals)
*   **Icons:** Lucide React (Clean, consistent SVG icons)
*   **Language:** TypeScript (Type safety for project data structures)
*   **SEO:** `react-helmet-async` (To manage meta tags in a SPA)

---

### 2. Project File Structure

```text
/
├── public/
│   ├── images/
│   │   ├── projects/       # Project screenshots (mockups)
│   │   ├── profile/        # Headshots (if any)
│   │   └── og-image.jpg    # Social sharing image
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Section.tsx # Wrapper for consistent padding/margins
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Athletics.tsx
│   │   └── ui/             # Reusable "Atom" components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Typography.tsx
│   │       └── ThemeToggle.tsx
│   ├── data/               # SINGLE SOURCE OF TRUTH for content
│   │   ├── profile.ts      # Bio, links, contact info
│   │   ├── projects.ts     # Case studies data
│   │   └── experience.ts   # Work history & education
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   └── useTheme.ts
│   ├── lib/
│   │   └── utils.ts        # Helper functions (clsx/tailwind-merge)
│   ├── styles/
│   │   └── globals.css     # Tailwind imports & custom fonts
│   ├── App.tsx             # Main layout composition
│   └── main.tsx            # Entry point
├── index.html
├── tailwind.config.js      # Design system tokens (colors, fonts)
└── tsconfig.json
```

---

### 3. Component Architecture

**Atomic Design Principles:**
*   **Atoms (`src/components/ui`):**
    *   `Button`: Handles primary (solid), secondary (outline), and text variants.
    *   `Card`: Base container with hover lift and shadow logic.
    *   `Typography`: Pre-styled `H1`, `H2`, `Body` components to enforce the design system.
*   **Molecules:**
    *   `ProjectCard`: Combines `Card`, `Typography`, `Badge`, and `Image`.
    *   `TimelineItem`: Combines date, role, and description.
*   **Organisms (`src/components/sections`):**
    *   `Hero`: Full-screen intro with animation orchestration.
    *   `Projects`: Grid layout of `ProjectCard`s.

---

### 4. Content & Data Structure

We will decouple content from code. This allows you to update text without touching React components.

**`src/data/profile.ts`**
```typescript
export const PROFILE = {
  name: "Carlos Pérez Cabrera",
  title: "Operations & Automation Specialist",
  socials: {
    linkedin: "...",
    github: "...",
    email: "..."
  },
  // ...
}
```

**`src/data/projects.ts`**
```typescript
export interface Project {
  id: string;
  title: string;
  category: "Automation" | "App Development" | "Business Intelligence";
  description: string;
  metrics: string[]; // e.g. ["24h saved/week"]
  techStack: string[];
  image: string;
  link?: string;
}
```

---

### 5. Image Asset Structure

*   **Location:** `public/images/`
*   **Format:** WebP or optimized JPG/PNG.
*   **Naming Convention:** `project-email-tracker-v1.webp`, `project-fire-safety-app.webp`.
*   **Strategy:** Since we don't have real screenshots yet, we will use abstract placeholders or CSS-generated UI mockups for Phase 1.

---

### 6. SEO Strategy (SPA)

Since this is a client-side app, we need to manually inject meta tags.
*   **Tool:** `react-helmet-async`
*   **Implementation:** A `SEO` component that accepts `title` and `description` props and renders them into the `<head>`.
*   **Critical Tags:**
    *   `title`: Carlos Pérez Cabrera | Operations & Automation
    *   `meta name="description"`
    *   `og:image`: A custom banner for LinkedIn sharing.

---

### 7. Future Expansion

*   **Routing:** Currently a single-page scroll. If you add a blog later, we install `react-router-dom`.
*   **CMS:** The `src/data` folder structure mimics a CMS. Later, this can be replaced by fetching from a headless CMS (like Sanity or Contentful) without rewriting the UI components.

---

### 8. Dark Mode & Accessibility

*   **Dark Mode:** Implemented via Tailwind's `darkMode: 'class'` strategy.
    *   A `useTheme` hook will toggle a class on the `<html>` element.
    *   Colors defined in Tailwind config as CSS variables (e.g., `--bg-primary`) to switch instantly.
*   **Accessibility:**
    *   Semantic HTML (`<section>`, `<article>`, `<nav>`).
    *   `aria-label` on icon-only buttons.
    *   Focus rings customized to match the "Premium" aesthetic (gold or high-contrast white).

---

### 9. Local Setup Instructions

1.  **Install Dependencies:**
    `npm install framer-motion lucide-react clsx tailwind-merge react-helmet-async`
2.  **Configure Tailwind:**
    Update `index.css` with the custom font imports (Inter).
3.  **Create Data Files:**
    Populate `src/data` with the copy generated in Phase 2.
4.  **Build Components:**
    Start with `ui` atoms, then build `sections`.
5.  **Run:**
    `npm run dev`
