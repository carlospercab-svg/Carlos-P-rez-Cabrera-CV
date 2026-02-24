# Carlos Pérez Cabrera | Personal Website

A premium, minimal personal website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start development server:**
    ```bash
    npm run dev
    ```

## 🛠️ Content Editing Guide

All content is centralized in the `src/data` folder. You can update text without touching the code.

*   **Profile & Bio:** `src/data/profile.ts`
*   **Projects:** `src/data/projects.ts`
*   **Experience:** `src/data/experience.ts`
*   **Skills:** `src/data/skills.ts`

### Adding Images
1.  Place your images in `public/images/`.
2.  Update the paths in `src/data/projects.ts` (e.g., `/images/projects/my-new-project.jpg`).

## 🚢 Deployment (Vercel)

This project is optimized for Vercel deployment.

1.  Push this repository to GitHub.
2.  Log in to [Vercel](https://vercel.com).
3.  Click "Add New..." -> "Project".
4.  Import your GitHub repository.
5.  Framework Preset: **Vite**.
6.  Click **Deploy**.

## ✅ QA Checklist

*   [ ] **Links:** Click all social links and email buttons to ensure they work.
*   [ ] **Mobile:** Open on your phone to check alignment and padding.
*   [ ] **Dark Mode:** Toggle the theme and ensure all text is legible.
*   [ ] **SEO:** Check the browser tab title and description.
*   [ ] **Images:** Ensure project images (if added) load correctly.

## 🎨 Design System

*   **Font:** Inter (Sans) & JetBrains Mono (Mono).
*   **Colors:**
    *   Platinum (`#FAFAFA` / `#0A0A0A`)
    *   Asphalt (`#050505` / `#EDEDED`)
    *   Grey Apple (`#666666` / `#A1A1AA`)
