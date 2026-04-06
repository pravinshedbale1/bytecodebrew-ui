# ByteCodeBrew UX/UI Specification

This document outlines the UX/UI themes, colors, and branding specifications for ByteCodeBrew, derived directly from the application's source code.

## 1. Branding

*   **Brand Name:** ByteCodeBrew
*   **Tagline:** Code · Connect · Create
*   **Mission/Quote:** "The best engineers don't just memorize — they understand the why behind every abstraction."
*   **Logo:** Located at `/logo.png` (Alt text: "ByteCodeBrew")
*   **Social Presence:**
    *   Instagram: `@bytecodebreww` (https://instagram.com/bytecodebreww)
    *   Website: `bytecodebrew.com` (https://bytecodebrew.com)
*   **Copyright:** `© {year} ByteCodeBrew. All rights reserved.`

## 2. Typography

ByteCodeBrew uses Google Fonts to establish its typographic hierarchy.

*   **Headings (h1 - h6):** `Sora`, sans-serif
    *   Weights available: 400, 600, 700, 800
    *   Default heading weight: 700
    *   Line-height: 1.2
    *   Color: Primary Text
*   **Body Text:** `Outfit`, sans-serif
    *   Weights available: 300, 400, 500, 600
    *   Default body weight: 400
    *   Base font size: 16px
    *   Line-height: 1.75
    *   Color: Secondary Text
*   **Monospace/Code & Accents:** `JetBrains Mono`, monospace
    *   Weights available: 400, 500, 700
    *   Used for skip-links (size: 12px) and likely code snippets. Coding ligatures are explicitly disabled for standard code rendering.

## 3. Color Palette

The design utilizes a dark theme with vibrant, glowing accents.

### Background Colors
*   **Background Start:** `#0A0E1A`
*   **Background Mid:** `#0F1B3D`
*   **Background End:** `#1B0A2E`
*   *Note: The body background features a fixed linear gradient transitioning from Start to Mid to Start along the Y-axis.*

### Primary Accents
*   **Orange (Brand Primary):** `#FF8C00`
*   **Orange Dark (Hover States):** `#FF6B00`
*   **Orange Glow:** `rgba(255, 140, 0, 0.15)`

### Text Colors
*   **Text Primary:** `#E8E6E3`
*   **Text Secondary:** `#B0B3B8` (Default body text color)
*   **Text Dim:** `#8B8D93`

### Surfaces (Cards & Containers)
*   **Card Background:** `rgba(15, 27, 61, 0.6)`
*   **Card Border:** `rgba(255, 140, 0, 0.12)`
*   **Card Hover:** `rgba(255, 140, 0, 0.08)`

### Semantic Colors
*   **Green:** `#22C55E`
*   **Blue:** `#3B82F6`
*   **Purple:** `#A855F7`
*   **Red:** `#EF4444`
*   **Cyan:** `#06B6D4`
*   **Pink:** `#EC4899`

## 4. Layout & Spacing

*   **Max Width:** `1200px` (Limits maximum content width for readability on large screens)
*   **Content Padding:** `24px`

## 5. UI Elements & Styling

*   **Links (`<a>`):** Base color is the primary Orange (`#FF8C00`). On hover, it transitions to Orange Dark (`#FF6B00`).
*   **Buttons:** Inherit font-family (`Outfit`), feature no border/background by default, and inherit text color.
*   **Scrollbars:** Custom styling featuring a transparent track and an orange-tinted thumb (`rgba(255, 140, 0, 0.25)`) that becomes more opaque on hover. Code block scrollbars are slightly darker.

## 6. Atmospherics, Effects & Animations

ByteCodeBrew heavily uses atmospheric effects to enhance the dark mode aesthetic.

*   **Grid Overlay:** A fixed background pattern creating a subtle technical grid using linear gradients with an orange tint (`rgba(255, 140, 0, 0.02)`) spaced every 60px.
*   **Glow Orbs:** Decorative radial gradients creating a soft glowing effect in various colors (Orange, Purple, Blue, Cyan) fading from a tinted center to transparent.
*   **Animations:**
    *   `fadeSlideIn`: Elements fade in and slide up (12px).
    *   `sectionReveal`: Sections fade in and translate upwards (40px) with a smooth cubic-bezier transition.
    *   `pulse`: Subtle opacity fluctuation between 0.6 and 1.0.
    *   `float`: Continuous vertical translation (up 8px and down).

## 7. Accessibility Considerations

*   **Skip-to-Content Link:** Present for keyboard navigation, allowing users to bypass the header and navigate directly to `#main-content`.
*   **Smooth Scrolling:** Enabled globally (`scroll-behavior: smooth`).
*   **Body Scroll Locking:** Document body scroll is disabled when the mobile navigation menu is open.
