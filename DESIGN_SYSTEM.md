# PHASE 3 — DESIGN SYSTEM & UI DIRECTION
## Carlos Pérez Cabrera | Visual Identity & UI Specifications

### 1. Visual Direction Summary
**"The Operational Editorial"**
A fusion of **Cupertino Precision** (Apple) and **Toronto Nocturnal** (OVO/Luxury Streetwear).

*   **Core Vibe:** Calculated, expensive, disciplined.
*   **Key Elements:**
    *   **Radical Whitespace:** Content breathes. Margins are intentionally large.
    *   **Monochrome Foundation:** Black, White, and infinite shades of Grey.
    *   **"Raw Material" Textures:** Subtle noise or grain in backgrounds to avoid looking "plastic."
    *   **Typography as Image:** Headlines are treated as graphic elements (tight tracking, massive scale).
    *   **Micro-Interactions:** Things don't just appear; they slide, fade, and scale with physics-based damping.

---

### 2. Color Palette

**Theme: "Platinum & Asphalt"**

**Light Mode (Default - "The Office")**
*   **Background:** `#FAFAFA` (Not pure white, softer)
*   **Surface (Cards):** `#FFFFFF`
*   **Text Primary:** `#050505` (Almost black)
*   **Text Secondary:** `#666666` (Classic Apple grey)
*   **Border/Divider:** `#E5E5E5`
*   **Accent (Action):** `#000000` (Stark, confident)

**Dark Mode (Optional - "The Track / The Lounge")**
*   **Background:** `#0A0A0A` (Deep matte black)
*   **Surface (Cards):** `#141414`
*   **Text Primary:** `#EDEDED`
*   **Text Secondary:** `#888888`
*   **Border/Divider:** `#262626`
*   **Accent (Luxury):** `#D4AF37` (Muted OVO Gold - used *very* sparingly, e.g., for the "10.50s" stat or a single active state)

---

### 3. Typography System

**Font Family:** **Inter** (Google Fonts)
*   *Why:* It’s the standard for modern interface design. It works for both "tech" (Apple) and "brutalist" (Streetwear) depending on weight and tracking.

**Scale & Styles**
*   **Display (Hero):** `text-6xl` to `text-8xl` (Mobile: `4xl`)
    *   Weight: **800 (Extra Bold)** or **300 (Light)** - High contrast.
    *   Tracking: `-0.04em` (Tight, editorial feel).
    *   Line Height: `1.0` (Solid block).
*   **Heading (Section Titles):** `text-3xl`
    *   Weight: **500 (Medium)**.
    *   Tracking: `-0.02em`.
    *   Case: Sentence case or Lowercase (for that modern "cool" vibe).
*   **Body (Readability):** `text-base` (16px) or `text-lg` (18px)
    *   Weight: **400 (Regular)**.
    *   Line Height: `1.6` (Relaxed).
*   **Label / Caption (Tech Specs):** `text-xs` (12px)
    *   Weight: **600 (SemiBold)**.
    *   Case: **UPPERCASE**.
    *   Tracking: `0.05em` (Wide).
    *   Font: **JetBrains Mono** (Optional, for "code/data" elements).

---

### 4. Spacing System
**Base Unit:** 4px (Tailwind standard).

*   **Container Padding:** `px-6` (Mobile), `px-12` (Tablet), `px-24` (Desktop).
*   **Section Gap:** `py-32` (128px) - Massive vertical space to create rhythm.
*   **Component Gap:** `gap-8` (32px).
*   **Internal Card Padding:** `p-8` (32px).

---

### 5. Borders & Effects
*   **Radius:**
    *   `rounded-3xl` (24px) for large containers/cards (Apple style).
    *   `rounded-full` (999px) for buttons and pills.
    *   `rounded-lg` (8px) for internal images/media.
*   **Shadows:**
    *   *Light Mode:* `shadow-xl` but ultra-diffuse: `0 20px 40px -10px rgba(0,0,0,0.05)`.
    *   *Dark Mode:* No shadows. Use borders (`border border-white/10`) to define edges.
*   **Strokes:**
    *   Thin, crisp 1px borders. `#E5E5E5` (Light) or `#262626` (Dark).

---

### 6. Layout Grid
*   **Desktop:** 12 Columns. Max-width `1440px`.
*   **Tablet:** 8 Columns.
*   **Mobile:** 4 Columns.
*   **Bento Grid:** The "Projects" section should use a masonry/bento layout (uneven grid cells) to look curated, not repetitive.

---

### 7. UI Component Style Guide

**Navbar**
*   **Position:** Fixed bottom (floating) or Sticky top (glassmorphism).
*   **Style:** Floating pill shape. Backdrop blur (`backdrop-blur-md`).
*   **Content:** Minimal icons or text links.

**Buttons**
*   **Primary:** Solid Black (Light Mode) / White (Dark Mode). Text is opposite color. Pill shape. Hover: Scale up 1.05x.
*   **Secondary:** Transparent with 1px border.
*   **Text Link:** Underline offset 4px. Hover: Underline thickens.

**Project Cards (The "Jewel Case")**
*   **Background:** Subtle off-white or light grey.
*   **Layout:** Image takes up 60% of the card. Text is minimal at the bottom.
*   **Interaction:** Hover lifts the card (`-translate-y-2`) and scales the image slightly.

**Stat Badges (Athletics)**
*   **Style:** Monospace font.
*   **Look:** Like a digital stopwatch or a receipt.
*   **Border:** Dashed line (referencing "technical/engineering" plans).

**Timeline (Experience)**
*   **Style:** Minimal vertical line.
*   **Nodes:** Hollow circles.
*   **Typography:** Date on left (mono), Role on right (sans).

**Footer**
*   **Style:** Massive typography. "Let's Work."
*   **Layout:** Grid of links.

---

### 8. Motion Guidelines (Framer Motion)
*   **Philosophy:** "Heavy & Smooth."
*   **Transitions:** `ease: [0.22, 1, 0.36, 1]` (Custom cubic bezier).
*   **Scroll Reveal:** Elements fade in and move up (`y: 20` -> `y: 0`) as they enter viewport. Stagger children elements by 0.1s.
*   **Hover:** Instant response, slow decay.

---

### 9. Image Treatment
*   **Screenshots (Apps/Excel):**
    *   Do NOT show raw screenshots.
    *   Wrap them in a "Device Frame" (iPhone mock or abstract window chrome).
    *   Add a subtle drop shadow.
    *   Tilt/Perspective (optional 3D transform) to make them feel like objects.
*   **Aspect Ratios:**
    *   Hero: Full width.
    *   Cards: 4:3 or 1:1 (Instagram style).
*   **Captions:** Tiny, uppercase, monospace, placed outside the image area.

---

### 10. Accessibility
*   **Contrast:** Ensure Black text on Grey background meets WCAG AA (4.5:1).
*   **Focus States:** Visible outline (2px solid Blue or Gold) for keyboard navigation.
*   **Text:** No font size smaller than 12px.
*   **Motion:** Respect `prefers-reduced-motion`.
