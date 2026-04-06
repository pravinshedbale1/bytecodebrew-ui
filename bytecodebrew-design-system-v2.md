# ByteCodeBrew — Design System & AI Generation Guide v2.0
## Jonas.io-Inspired Rebrand

> **What is this file?**
> Upload this document to any AI model (Claude, ChatGPT, Gemini, etc.) before asking it to create any visual output — React pages, HTML files, PDFs, presentations, Instagram carousels, dashboards, or any branded content. The AI will use this as the single source of truth for ByteCodeBrew's visual identity, component patterns, and page architecture.

> **Design DNA:** This system draws its philosophy from [jonas.io](https://jonas.io) — editorial restraint, geometric precision, structured hierarchy, and a belief that whitespace is a feature, not wasted space. Every design choice serves clarity. Nothing is decorative without being functional.

---

## TABLE OF CONTENTS

1. Brand Identity
2. Design Philosophy & Jonas.io DNA Analysis
3. Color System
4. Typography
5. Spacing & Layout
6. Geometric System (Triangles, Lines, Shapes)
7. Component Library
8. Page Architecture
9. Animation & Motion
10. Visual Atmosphere
11. Content Patterns & Voice
12. Platform-Specific Rules (React, HTML, PDF, Instagram)
13. Instagram Carousel System
14. Instagram Reels System
15. AI Prompt Instructions
16. Anti-Patterns (What to NEVER Do)
17. html2canvas Rendering Rules

---

## 1. BRAND IDENTITY

| Property | Value |
|----------|-------|
| Brand Name | ByteCodeBrew |
| Instagram | @bytecodebreww |
| Website | bytecodebrew.com |
| Tagline | CODE · CONNECT · CREATE |
| Domain | Developer education, tech content, interview prep |
| Tone | Editorial, authoritative, refined — a senior engineer who writes like a journalist |
| Audience | Software engineers (2-8 years experience), Indian tech market primary |

### Brand Voice
- **Editorial, not academic** — write like The Economist covers tech, not like a textbook
- **Assertive with restraint** — strong claims, short sentences, no hedging
- **Structured with rhythm** — every section has a number, every idea has a label
- **Concise** — every word earns its place. No filler. No fluff.
- **Forbidden phrases:** "In today's world...", "As we all know...", "Let's dive in...", "Without further ado..."

### Brand Personality Shift (v1 → v2)
| v1 (Old) | v2 (Jonas-Inspired) |
|-----------|---------------------|
| Neon, glow-heavy, cyberpunk energy | Editorial, geometric, refined restraint |
| Orange-dominant with purple/blue undertones | Green accent on pure dark — surgical precision |
| Packed edge-to-edge, zero whitespace | Generous breathing room, content flows |
| Multiple gradient backgrounds | Flat dark with subtle texture |
| Glow orbs, blur effects, scanlines | Triangles, hairline rules, geometric overlays |
| "Loud and confident" | "Quiet and authoritative" |

---

## 2. DESIGN PHILOSOPHY & JONAS.IO DNA ANALYSIS

### Core Principles (extracted from Jonas.io deep-dive)

**Principle 1: Structured Storytelling**
Jonas.io treats every page as a document with parts. Sections are labeled `[PART 01 / 04]` in monospace, creating a sense of progression and intentional structure. Every scroll is a chapter. Adopt this: every major section in ByteCodeBrew content gets a `XX / XX` counter.

**Principle 2: The Triangle as Brand Geometry**
Jonas uses triangles as his signature geometric element — grey wireframe triangles and green-filled triangles at varying opacities. They appear as decorative accents alongside section content, rotated at different angles, layered behind text. They create visual rhythm without competing with content. ByteCodeBrew adopts triangles as its primary decorative geometry.

**Principle 3: Typography Hierarchy Through Contrast**
Jonas pairs a refined serif display font (for emotional, headline impact) with a clean sans-serif body (for readability) and monospace (for technical precision). This three-tier system creates instant visual hierarchy. The serif adds editorial gravitas that pure sans-serif stacks lack.

**Principle 4: Color Economy**
One accent color does the heavy lifting. Jonas uses green sparingly — on CTAs, triangle fills, active states, labels. Everything else is grayscale on near-black. No rainbow. No gradients on backgrounds. The accent color is valuable because it's rare.

**Principle 5: Whitespace as Content**
Jonas.io has enormous padding between sections (100-140px+). Content blocks breathe. Cards don't touch. Headlines have room above and below. This whitespace signals premium quality — it says "we have room because we're confident in what we're saying."

**Principle 6: Testimonial as Social Architecture**
Jonas layers social proof throughout — not in one section, but woven between content sections. Student quotes appear between philosophy explanations. Company logos marquee at multiple points. Numbers (2M+ students, 4.7 rating) are repeated. ByteCodeBrew should integrate engagement proof similarly.

**Principle 7: Progressive Disclosure**
Steps are numbered (01, 02, 03, 04) and revealed sequentially. FAQs use clean accordions. Course details toggle between "Stats" and "Content" tabs. Information is layered — headline first, detail on demand.

**Principle 8: Hover States are Conversations**
Every interactive element acknowledges the cursor — borders shift, backgrounds warm, cards lift. But subtly. A 0.3s ease transition, not a dramatic transformation. The hover says "I see you" without shouting.

### Jonas.io Interaction Patterns (detailed)

| Pattern | Implementation | ByteCodeBrew Adoption |
|---------|----------------|----------------------|
| Company logo marquee | Infinite horizontal scroll, grayscale logos, no gaps | Use for "Featured at" or partner logos |
| Step counter (01, 02, 03, 04) | Vertical numbered progression, one highlighted at a time | Use for process explanations, tutorials |
| Testimonial carousel | Auto-scrolling horizontal strip, quote cards | Use for user/community testimonials |
| Section numbering | `[PART XX / XX]` monospace label above section title | Use on every major section |
| Tab switching | "Stats" / "Content" toggle on course cards | Use for dual-view components |
| FAQ accordion | Clean `[ + ]` toggle, minimal animation | Use for knowledge base, guides |
| CTA button | Green fill, dark text, pill shape, no border | Primary CTA pattern everywhere |
| Sticky navigation | Compact top bar, blurred background | Use on web pages |
| Avatar cluster | 5 overlapping circular avatars | Use for community representation |
| Green triangle accent | Decorative triangles near content blocks | Signature geometric decoration |

---

## 3. COLOR SYSTEM

### Core Palette

```
Background (textured dark — never flat, never multi-stop gradient):
  Primary:     #0e0e0e  (near-black base canvas)
  Surface:     #111111  (slightly lifted areas — hero, CTA sections)
  Card:        #161616  (one step lighter, card surface level)
  Card Hover:  #1c1c1c  (subtle warmth on interaction)
  Elevated:    #1e1e1e  (modal, dropdown, tooltip backgrounds)
  Code Block:  #0a0a0a  (deeper dark for code contrast)

  NOTE: The base background is NEVER a flat solid color. It always has:
    1. A subtle SVG noise/grain texture overlay (opacity 0.03-0.05)
    2. Section-specific radial gradient ambient glow (green, opacity 0.03-0.06)
    3. The grid overlay on top of everything
  This creates a living, organic dark surface with depth — not a dead flat screen.

Primary Accent:
  Green:           #4ADE80  (the hero color — used sparingly, always intentional)
  Green Dim:       #22633a  (backgrounds, subtle fills)
  Green Surface:   rgba(74, 222, 128, 0.06)  (card tints, icon containers)
  Green Border:    rgba(74, 222, 128, 0.15)  (subtle borders on green-tinted elements)
  Green Glow:      rgba(74, 222, 128, 0.04)  (radial background glow — never CSS blur)

Text:
  Primary:       #f0f0f0  (headlines, primary content — warm off-white)
  Secondary:     #888888  (body text, descriptions — readable gray)
  Muted:         #555555  (metadata, labels, counters, watermarks)
  Disabled:      #333333  (inactive states, placeholder text)

Border:
  Subtle:        #222222  (card borders, dividers — barely visible)
  Medium:        #333333  (active borders, hover states)
  Accent:        rgba(74, 222, 128, 0.15)  (green-tinted borders for emphasis)

Geometric:
  Triangle Stroke:    #4ADE80 at 3-6% opacity  (wireframe triangles)
  Triangle Fill:      #4ADE80 at 10-15% opacity  (solid accent triangles)
  Grid Lines:         rgba(255, 255, 255, 0.015)  (background grid pattern)
  Corner Lines:       #333333  (decorative corner L-shapes)
```

### Semantic Colors (for categorization, data viz)

```
Blue:     #818CF8   — info, links, databases, types (indigo-leaning)
Yellow:   #FBBF24   — warnings, highlights, string values in code
Pink:     #F9A8D4   — notifications, methods in code, engagement
Red:      #EF4444   — error, critical, performance warnings
Cyan:     #06B6D4   — search, analytics, metrics
```

### Color Usage Rules

1. **Green is surgical** — used ONLY for: primary CTA buttons, section labels, active states, code keywords, left-border accents on cards, triangle fills, and pagination active dot. Never for backgrounds larger than a small icon container.
2. **The background is always #0e0e0e with a noise texture overlay** — never a multi-stop gradient (v1 style), never a flat solid. The subtle grain/noise texture at 3-5% opacity gives the dark surface an organic, premium feel. Section-specific radial gradient glows add localized depth.
3. **Semantic colors appear only in code syntax highlighting and data visualization** — never as card backgrounds (unlike v1). Use gray card backgrounds with green left-border accents instead.
4. **Never use pure white (#FFFFFF)** — always #f0f0f0 or softer.
5. **Borders are invisible until they need to speak** — default card borders are #222222 (barely visible). Hover/active states raise to #333333 or green-tinted.
6. **Glow is baked, never filtered** — use `radial-gradient()` for subtle ambient glow. Never `filter: blur()` or `box-shadow` with large spread values.

### CSS Variables Template

```css
:root {
  /* Backgrounds */
  --bg-primary: #0e0e0e;
  --bg-card: #161616;
  --bg-card-hover: #1c1c1c;
  --bg-elevated: #1e1e1e;
  --bg-code: #0a0a0a;

  /* Accent */
  --green: #4ADE80;
  --green-dim: #22633a;
  --green-surface: rgba(74, 222, 128, 0.06);
  --green-border: rgba(74, 222, 128, 0.15);
  --green-glow: rgba(74, 222, 128, 0.04);

  /* Text */
  --text-primary: #f0f0f0;
  --text-secondary: #888888;
  --text-muted: #555555;
  --text-disabled: #333333;

  /* Borders */
  --border-subtle: #222222;
  --border-medium: #333333;
  --border-accent: rgba(74, 222, 128, 0.15);

  /* Semantic (code & data viz only) */
  --blue: #818CF8;
  --yellow: #FBBF24;
  --pink: #F9A8D4;
  --red: #EF4444;
  --cyan: #06B6D4;

  /* Layout */
  --max-width: 1000px;
  --content-padding: 24px;
}
```

---

## 4. TYPOGRAPHY

### Font Stack

| Role | Font | Weight | Character |
|------|------|--------|-----------|
| Display headlines, hero text | **Playfair Display** | 700, 800 | Editorial serif — gravitas, authority, premium |
| Body text, UI text, descriptions | **DM Sans** | 300, 400, 500, 600, 700 | Clean geometric sans — modern, readable, warm |
| Code, labels, counters, metadata | **JetBrains Mono** | 400, 500, 600 | Technical monospace — precision, structure |

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;600&display=swap
```

### Type Scale

```
Hero Title:        Playfair Display 800, 72px, line-height: 1.05
                   (Use on hook slides, page heroes — max 4-6 words per line)

Section Title:     Playfair Display 700, 54px, line-height: 1.1
                   (Used for slide headlines, section openers on web)

Sub-headline:      Playfair Display 700, 44-46px, line-height: 1.12
                   (Used for secondary headlines within sections)

Section Label:     JetBrains Mono 500, 13px, letter-spacing: 3px, uppercase
                   Color: var(--green)
                   (Always appears ABOVE a headline — the "chapter marker")

Slide Counter:     JetBrains Mono 400, 14px, letter-spacing: 2px
                   Color: var(--text-muted)
                   Format: "XX / XX"

Body:              DM Sans 400, 22px, line-height: 1.6, color: var(--text-secondary)
                   Max-width: 800px for readability on web

Small Body:        DM Sans 400, 17-19px, line-height: 1.5, color: var(--text-secondary)
                   (Card descriptions, directive explanations)

Card Title:        DM Sans 700, 22px, color: var(--text-primary)
Card Number:       Playfair Display 800, 42px, color: rgba(74, 222, 128, 0.12)
                   (Large decorative number inside cards — "01", "02")

Code:              JetBrains Mono 400, 19px, line-height: 1.8
                   (Inside code blocks on slides, 12-14px on web)

Code Label:        JetBrains Mono 400, 12px, letter-spacing: 2px, uppercase
                   Color: var(--green)
                   Background: var(--bg-primary)
                   (Floating label above code blocks — e.g., "module-info.java")

Brand Name:        DM Sans 700, 16px, letter-spacing: 1.5px, uppercase
                   "Byte" in var(--text-muted), "Code" in var(--green), "Brew" in var(--text-muted)

Watermark:         JetBrains Mono 400, 12px, letter-spacing: 1.5px
                   Color: var(--text-muted)
                   Always: @bytecodebreww

CTA Button Text:   DM Sans 700, 18px, color: #000000
                   (Inside green pill buttons)

Tagline:           DM Sans 500, 18px, letter-spacing: 3px, uppercase
                   Color: var(--text-muted)
                   "CODE · CONNECT · CREATE"
```

### Typography Rules

1. **Headlines are always Playfair Display 700-800** — the serif creates editorial authority. Never use the sans-serif for headlines.
2. **Body text is always DM Sans** — never use Playfair for paragraphs.
3. **Everything technical, structural, or label-like is JetBrains Mono** — section labels, slide counters, code blocks, watermarks, metadata, badge text, directive keywords.
4. **Section labels** always appear ABOVE section titles in this exact format: JetBrains Mono, 13px, uppercase, letter-spacing: 3px, green color. No horizontal line prefix (v1 used this — v2 drops it for cleaner look).
5. **Never use Inter, Roboto, Arial, Sora, Outfit, Space Grotesk, or system fonts.**
6. **Never use Tailwind CSS** — all styling must use raw CSS (custom properties, inline styles, `<style>` blocks). This ensures pixel-precise control over our design tokens.
6. **Hero titles can use `.accent` span** for one green-highlighted word: `<span class="accent">Modules.</span>`
7. **The green accent word in headlines** should be the "power word" — the concept being taught. Examples: "Java **Modules.**", "Total **control.**", "Build **reliable** apps."
8. **Line breaks in headlines are intentional** — use `<br>` to control where lines break. Headlines should stack 2-4 lines with 4-6 words per line maximum.

---

## 5. SPACING & LAYOUT

### Spacing Scale

```
4px    — tight gaps (between inline elements, badge clusters)
8px    — compact gaps (dot spacing in pagination)
12px   — small gaps (between label and headline)
16px   — standard gap (between directive items, small cards)
20px   — card internal padding (compact)
24px   — standard card padding, section internal gaps
28px   — generous card padding (feature cards)
32px   — between sub-components within a section
40px   — topbar margin-bottom, major element spacing
64px   — slide padding (all sides on 1080×1080 slides)
80px   — section padding on web pages
100px  — hero section top padding on web pages
120px  — between major page sections on web
```

### Layout Rules

1. **Max content width: 1000px** on web — centered with `margin: 0 auto`. Narrower than v1 (was 900px) to match Jonas's airy feel.
2. **Horizontal padding: 64px on slides, 24px on mobile web.**
3. **Grid columns**: 2-column grid for feature cards (`grid-template-columns: 1fr 1fr; gap: 20px`). Single column for directive lists and benefit rows.
4. **Cards have 12-14px border-radius** — consistent, modern, never sharp (0px) or overly round (>20px).
5. **Paragraphs max-width: 800px** — wider than v1 (was 720px) because DM Sans at 22px reads well at this width.
6. **Slide dimensions: 1080×1080px** for carousels, 1080×1920px for Reels.
7. **Content is left-aligned by default** — center alignment only for CTA slides, stat rows, and footer elements.

---

## 6. GEOMETRIC SYSTEM (Triangles, Lines, Shapes)

### The Triangle (Primary Geometric Element)

Triangles are ByteCodeBrew's signature decoration in v2 — inherited directly from Jonas.io's visual identity.

```
Triangle Types:

1. WIREFRAME TRIANGLE (most common)
   - SVG polygon with stroke only, no fill
   - stroke: #4ADE80
   - stroke-width: 1-1.5px
   - opacity: 0.03-0.06 (extremely subtle)
   - Sizes: 160px to 500px
   - Always position: absolute, z-index: 0 (behind content)

2. FILLED TRIANGLE (accent)
   - SVG polygon with fill, no stroke
   - fill: #4ADE80
   - opacity: 0.10-0.15
   - Sizes: 120px to 200px (smaller than wireframe)
   - Used sparingly — max 1 per slide/section

3. LAYERED TRIANGLES (CTA/hero slides)
   - 2-3 wireframe triangles stacked at different rotations
   - Centered behind content
   - Creates a "sacred geometry" feel
   - rotate(0deg), rotate(60deg), rotate(120deg)
```

### Triangle Placement Strategy

```
Slide 1 (Hook):     Large wireframe top-right + small filled mid-right
Slide 2 (Content):  Medium wireframe bottom-left (asymmetric balance)
Slide 3 (Content):  Small filled top-right
Slide 4 (Content):  Medium wireframe bottom-right
Slide 5 (CTA):      2-3 layered wireframes centered + subtle radial glow behind

Web sections:        Alternate left/right, space 800-1200px apart vertically
                     Never more than 1 triangle visible per viewport height
```

### Corner Lines (Secondary Geometric Element)

Small L-shaped line decorations in slide corners for framing.

```
SVG: two perpendicular lines meeting at a corner
Stroke: #333333
Stroke-width: 1px
Size: 40×40px
Placement: top-right corner of content area (most common)
Purpose: frames the content, adds precision feel
```

### Grid Overlay (Background Texture)

A subtle grid pattern that covers the entire background:

```css
.grid-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      90deg, transparent, transparent 53px,
      rgba(255, 255, 255, 0.015) 53px,
      rgba(255, 255, 255, 0.015) 54px
    ),
    repeating-linear-gradient(
      0deg, transparent, transparent 53px,
      rgba(255, 255, 255, 0.015) 53px,
      rgba(255, 255, 255, 0.015) 54px
    );
  pointer-events: none;
  z-index: 0;
}
```

**Grid rules:**
- Grid line color: `rgba(255, 255, 255, 0.015)` — NOT green-tinted (v1 used orange-tinted grid)
- Grid spacing: 53-60px
- Width: 1px per grid line
- Always behind all content (z-index: 0)

---

## 7. COMPONENT LIBRARY

### 7.1 Topbar (Slide Header)

Every slide begins with this bar:

```
Layout: flex, justify-content: space-between, align-items: center
Margin-bottom: 40px

Left:  Brand name — "ByteCodeBrew"
       DM Sans 700, 16px, letter-spacing: 1.5px, uppercase
       "Byte" = var(--text-muted), "Code" = var(--green), "Brew" = var(--text-muted)

Right: Slide counter — "01 / 05"
       JetBrains Mono 400, 14px, letter-spacing: 2px
       Color: var(--text-muted)
```

### 7.2 Section Label

The monospace chapter marker above every headline:

```
Font: JetBrains Mono 500, 13px
Letter-spacing: 3px
Text-transform: uppercase
Color: var(--green)
Margin-bottom: 20px
No prefix line (clean, Jonas-style)

Examples: "JAVA PLATFORM MODULE SYSTEM", "KEY DIRECTIVES", "WHY IT MATTERS"
```

### 7.3 Card (Standard)

```
Background: var(--bg-card) = #161616
Border: 1px solid var(--border-subtle) = #222222
Border-radius: 14px
Padding: 28-32px
Position: relative
Overflow: hidden

Left accent border (required on all cards):
  position: absolute, top: 0, left: 0
  width: 3px, height: 100%
  background: var(--green)
  border-radius: 3px

Hover (web only):
  border-color: var(--border-medium) = #333333
  background: var(--bg-card-hover) = #1c1c1c
  transition: all 0.3s ease
```

### 7.4 Card with Number

Used for benefit/feature grids:

```
Structure:
  ├── Card Number:  Playfair Display 800, 42px, color: rgba(74, 222, 128, 0.12)
  ├── Card Title:   DM Sans 700, 22px, color: var(--text-primary)
  └── Card Desc:    DM Sans 400, 17px, line-height: 1.5, color: var(--text-secondary)

Gap between elements: 12px
The card number is decorative — large, extremely faint green
```

### 7.5 Directive Item (Horizontal)

For keyword-definition pairs (like JPMS directives):

```
Layout: flex, align-items: flex-start, gap: 20px
Background: var(--bg-card)
Border: 1px solid var(--border-subtle)
Border-radius: 12px
Padding: 24px 28px

Keyword (left):
  JetBrains Mono 600, 18px
  Color: var(--green)
  white-space: nowrap
  min-width: 140px

Description (right):
  DM Sans 400, 19px
  Color: var(--text-secondary)
  line-height: 1.5
```

### 7.6 Benefit Item (with Icon Container)

For benefit/advantage lists:

```
Layout: flex, align-items: center, gap: 24px
Background: var(--bg-card)
Border: 1px solid var(--border-subtle)
Border-radius: 14px
Padding: 28px 32px

Icon container (left):
  width: 56px, height: 56px
  border-radius: 12px
  background: var(--green-surface)
  border: 1px solid var(--green-border)
  display: flex, center
  Contains: SVG icon (26×26px, stroke: var(--green))

Content (right):
  Title: DM Sans 700, 22px, var(--text-primary)
  Desc:  DM Sans 400, 17px, var(--text-secondary), line-height: 1.4
  Gap: 4px between title and desc
```

### 7.7 Code Block

```
Background: var(--bg-code) = #0a0a0a
Border: 1px solid var(--border-subtle)
Border-radius: 12px
Padding: 32px
Font: JetBrains Mono 400, 19px (slides) / 13px (web)
Line-height: 1.8
Color: var(--text-secondary) (default text)
Position: relative

Floating label (optional):
  position: absolute, top: -12px, left: 24px
  background: var(--bg-primary)
  padding: 2px 14px
  font: JetBrains Mono 400, 12px
  letter-spacing: 2px, uppercase
  color: var(--green)
  border: 1px solid var(--border-subtle)
  border-radius: 6px

Syntax highlighting colors:
  .keyword   { color: var(--green); }       // module, requires, exports, public
  .string    { color: #FBBF24; }            // "string values"
  .comment   { color: #444; font-style: italic; }
  .type      { color: #818CF8; }            // class names, type names
  .method    { color: #F9A8D4; }            // method names
  .number    { color: #06B6D4; }            // numeric literals
```

### 7.8 CTA Button

```
Display: inline-flex, align-items: center, gap: 10px
Background: var(--green) = #4ADE80
Color: #000000
Font: DM Sans 700, 18px
Padding: 18px 40px
Border-radius: 60px (pill shape)
Border: none
Letter-spacing: 0.5px
Cursor: pointer

Hover (web only):
  transform: translateY(-1px)
  box-shadow: 0 4px 20px rgba(74, 222, 128, 0.25)
  transition: all 0.2s ease

Icon: SVG arrow (20×20px, stroke: currentColor, stroke-width: 2.5)
```

### 7.9 Page Dots (Carousel Pagination)

```
Position: absolute, bottom: 36px, left: 50%, transform: translateX(-50%)
Display: flex, gap: 8px
z-index: 5

Inactive dot:
  width: 8px, height: 8px
  border-radius: 50%
  background: var(--text-muted)

Active dot:
  width: 24px, height: 8px
  border-radius: 4px
  background: var(--green)
```

### 7.10 Stat Box

```
Container: var(--bg-card) with var(--border-subtle) border
Border-radius: 14px
Padding: 24px 28px
Text-align: center

Value: Playfair Display 800, 36-42px, color: var(--green)
Label: JetBrains Mono 400, 11px, uppercase, letter-spacing: 2px, color: var(--text-muted)
Gap: 8px between value and label
```

### 7.11 Badge/Tag

```
Font: JetBrains Mono 500, 12px
Color: var(--green)
Background: var(--green-surface)
Border: 1px solid var(--green-border)
Border-radius: 6px
Padding: 5px 12px
Display: inline-block
```

### 7.12 Accordion/FAQ

```
Container: var(--bg-card) with var(--border-subtle) border
Border-radius: 12px
Cursor: pointer

Header:
  Display: flex, justify-content: space-between, align-items: center
  Padding: 20px 24px
  Font: DM Sans 600, 18px, var(--text-primary)

Toggle icon:
  "+" that rotates 45° to "×" on open
  JetBrains Mono 500, 20px, var(--text-muted)
  transition: transform 0.3s ease

Expanded content:
  Padding: 0 24px 20px
  Border-top: 1px solid var(--border-subtle)
  Font: DM Sans 400, 16px, var(--text-secondary)
  Animation: fadeSlideIn 0.3s ease
```

### 7.13 Testimonial Card

```
Background: var(--bg-card)
Border: 1px solid var(--border-subtle)
Border-radius: 14px
Padding: 28px

Quote text:
  DM Sans 400 italic, 17px, var(--text-secondary), line-height: 1.6

Attribution:
  Display: flex, align-items: center, gap: 12px, margin-top: 16px
  Avatar: 40px circle, border: 1px solid var(--border-subtle)
  Name: DM Sans 600, 14px, var(--text-primary)
  Role: DM Sans 400, 13px, var(--text-muted)
```

### 7.14 Timeline

```
Vertical line: 1px wide, var(--border-subtle)
Position: absolute, left-aligned

Node:
  12px circle
  background: var(--bg-primary)
  border: 2px solid var(--green)
  No glow (unlike v1)

Content: padding-left: 32px from the line
Step label: JetBrains Mono 500, 12px, var(--green), uppercase, letter-spacing: 2px
Step title: Playfair Display 700, 20px, var(--text-primary)
Step detail: DM Sans 400, 15px, var(--text-secondary)
```

---

## 8. PAGE ARCHITECTURE

### Standard Web Page Structure

```
1. HERO SECTION
   ├── Section label (green monospace)
   ├── Hero title (Playfair Display 800, largest size, with .accent word)
   ├── Subtitle paragraph (DM Sans, var(--text-secondary), max 700px)
   ├── CTA button (green pill)
   ├── Stat row (3-4 stat boxes in grid)
   └── Triangle decoration (large wireframe, positioned behind)

2. STRUCTURED SECTIONS [PART XX / XX]
   ├── Part label: "[PART 01 / 04]" in JetBrains Mono, var(--text-muted)
   ├── Section title (Playfair Display 700)
   ├── Content paragraph (DM Sans, short)
   └── Visual component (cards, code blocks, diagrams, etc.)

3. SOCIAL PROOF (woven between sections)
   ├── Testimonial carousel (auto-scrolling)
   ├── Company logo marquee (if applicable)
   └── Stat callouts ("2,000+ developers trained")

4. DETAIL SECTIONS
   ├── Feature card grids (2-column)
   ├── Code block examples
   ├── Directive/keyword lists
   └── Architecture diagrams

5. FAQ SECTION
   ├── Section title
   └── Accordion items

6. CTA SECTION
   ├── Tagline (CODE · CONNECT · CREATE)
   ├── CTA headline (Playfair Display, with .accent)
   ├── CTA button
   └── Handle/URL

7. FOOTER
   ├── Brand name (DM Sans 700, small)
   ├── Social links
   └── Legal text (JetBrains Mono, tiny, var(--text-muted))
```

### Section Entrance Animation

```
Initial state:  opacity: 0, transform: translateY(30px)
Visible state:  opacity: 1, transform: translateY(0)
Transition:     all 0.6s cubic-bezier(0.16, 1, 0.3, 1)
Trigger:        IntersectionObserver, threshold: 0.1
One-time:       once visible, stays visible
Stagger:        child elements stagger by 0.08s delay each
```

---

## 9. ANIMATION & MOTION

### Timing Curves

```
Instant:     0.15s ease      — color changes, opacity flips
Fast:        0.2s ease       — hover states, button press
Standard:    0.3s ease       — card transitions, accordion toggle, border changes
Entrance:    0.6s cubic-bezier(0.16, 1, 0.3, 1)  — scroll reveal (slightly faster than v1)
Stagger:     +0.08s delay per child element in a group
Slow:        1s ease         — progress bar fills, counter animations
```

### Keyframes

```css
@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Logo marquee (if used on web) */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### Motion Rules

1. **Scroll-triggered entrance** on every major section (IntersectionObserver).
2. **Hover transitions** on all interactive cards — border color shift, subtle background warm.
3. **Accordion content** uses fadeSlideIn (0.3s).
4. **No glow pulse animations** — v2 does not pulse. Everything is steady-state.
5. **No floating animations** — v2 does not float elements. Static confidence.
6. **Stagger child reveals** — when a section enters view, its children (cards, items) stagger in with 0.08s delay between each.
7. **Button hover** — subtle translateY(-1px) with green shadow.
8. **Pagination dot transitions** — active dot width animates from 8px to 24px.

---

## 10. VISUAL ATMOSPHERE

### Background

The background is NOT flat — it has three layers that create an organic, premium dark surface:

**Layer 1: Base Color**
```css
body {
  background-color: #0e0e0e;
}
```

**Layer 2: Noise/Grain Texture Overlay (critical — this is what makes it feel alive)**

A subtle SVG noise texture covers the entire page. This is what separates a premium dark UI from a dead flat screen. Use an inline SVG `feTurbulence` filter as a CSS background:

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
```

**Noise rules:**
- Opacity: 0.03-0.05 (barely perceptible — if you can obviously see the grain, it's too strong)
- `baseFrequency`: 0.75-0.9 (fine grain, not chunky)
- Always `position: fixed` so it doesn't scroll with content
- Always `pointer-events: none`
- z-index: 0 (behind content, above base color)

**For html2canvas exports (carousels/reels):** SVG feTurbulence filters may not render in html2canvas. For static slide exports, simulate the grain with a subtle CSS approach instead:
```css
.slide::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: repeating-conic-gradient(
    rgba(255,255,255,0.02) 0% 25%,
    transparent 0% 50%
  );
  background-size: 3px 3px;
  pointer-events: none;
  z-index: 0;
}
```

**Layer 3: Section-Specific Radial Glow (localized depth)**

```css
.ambient-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 45%,
    rgba(74, 222, 128, 0.04) 0%,
    transparent 60%
  );
  z-index: 0;
  pointer-events: none;
}
```

**Ambient glow rules:**
- Max 1 per page section or 1 per slide
- Only behind CTA slides and hero sections
- Always `radial-gradient`, never `filter: blur()` or `box-shadow`
- Center point can shift (50% 45%, 30% 60%) for asymmetry
- Opacity range: 0.03-0.05 (barely perceptible)

### Scrollbar (web only)

```css
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(74, 222, 128, 0.3);
  border-radius: 2px;
}
```

### Selection Highlight

```css
::selection {
  background: rgba(74, 222, 128, 0.2);
  color: var(--text-primary);
}
```

---

## 11. CONTENT PATTERNS & VOICE

### Section Labels
- Always uppercase, always JetBrains Mono, always green
- No prefix line (v2 dropped horizontal line prefix from v1)
- Examples: "JAVA PLATFORM MODULE SYSTEM", "KEY DIRECTIVES", "WHY IT MATTERS", "THE ARCHITECTURE"

### Headline Writing
- Short, punchy, 2-4 lines with intentional line breaks
- One word in green `.accent` — the "power word"
- Often a statement, sometimes a provocative claim
- Examples:
  - `Java Modules. The Feature You're Ignoring.`
  - `Five keywords. Total control.`
  - `Build reliable, lean applications.`
  - `Found this useful?`

### Body Text
- Max 2-3 sentences per paragraph
- First sentence = the claim. Second = evidence or nuance.
- Never start with "In order to..." or "It is important to..."
- Use em-dashes for asides — they add rhythm.

### Card Titles
- Short noun phrases or action statements
- Examples: "Strong Encapsulation", "Smaller Runtimes", "Better Architecture"
- Never write card titles as full sentences

### Part Labels (Jonas Pattern)
- Format: `[PART XX / XX]` followed by a descriptive sentence
- JetBrains Mono, var(--text-muted)
- Used on web pages above major sections
- Example: `[PART 02 / 04] Why modules matter (and why they're unlike any other Java feature).`

### CTA Copy
- Direct, benefit-focused
- Examples: "Follow @bytecodebreww", "Save this post.", "Drop 'JPMS' in comments"

---

## 12. PLATFORM-SPECIFIC RULES

### React (.jsx) Pages

```
- Import Google Fonts via <style> tag with @import
- Use inline styles (style={{}}) — no external CSS files
- Use useState for accordions, tabs, toggles
- Use IntersectionObserver for scroll-triggered entrance animations
- Single-file component — everything in one .jsx file
- NEVER use Tailwind CSS — use inline styles (style={{}}) or CSS custom properties only
- Available libraries: recharts, lucide-react, d3, three.js, lodash
- Never use localStorage/sessionStorage in artifacts
- Icons: lucide-react preferred (clean, thin stroke style)
```

### HTML Pages

```
- Self-contained single file with <style> in <head>
- Use CSS custom properties (the full variables template above) — NEVER Tailwind
- Vanilla JS for interactions (accordion, scroll animation)
- Google Fonts via <link> tag
- CSS-only animations wherever possible
- html2canvas-safe: no filter:blur, no emoji, no mask-composite
```

### PDFs (ReportLab / Python)

```
- Background: dark (#0e0e0e) — PDF cannot render noise texture, so use flat dark as fallback
- Cannot use Google Fonts directly — embed TTF files or use Helvetica fallback
- Green (#4ADE80) for headings and accent elements
- Text (#f0f0f0) for body on dark backgrounds
- Code blocks: darker background (#0a0a0a) with monospace font
- Page size: A4 (primary for Indian audience)
- Branded header: "ByteCodeBrew" with green "Code" on every page
- Page numbers: JetBrains Mono style (bottom center)
- Section headers: Serif font (or bold fallback) with green left border
```

### Presentations / Slides

```
- Textured dark background (#0e0e0e + noise grain overlay)
- One key idea per slide
- Large Playfair Display headlines with .accent word
- Minimal body text (DM Sans)
- Triangle decoration on 30% of slides
- Green accent for key highlights
- Code snippets in styled dark code block
- "XX / XX" counter on every slide
```

---

## 13. INSTAGRAM CAROUSEL SYSTEM (1080×1080px)

### Slide Structure (5-8 slides, one idea per slide)

```
SLIDE 1 — HOOK
├── Topbar (brand left, counter right)
├── Section label (green monospace)
├── Headline (Playfair 800, 72px, 3-4 lines, one .accent word)
├── Body text (DM Sans 22px, 1-2 sentences)
├── Triangle deco (large wireframe top-right)
├── Corner lines (top-right)
├── Page dots (bottom center)
└── Watermark (bottom right)

SLIDES 2-4 — CONTENT
├── Topbar
├── Section label (topic of this slide)
├── Sub-headline (Playfair 700, 46-54px)
├── Content component (code block, directive list, card grid, or benefit list)
├── Triangle deco (alternating positions)
├── Page dots
└── Watermark

SLIDE 5 — CTA
├── Topbar
├── Ambient glow (radial green behind center)
├── Layered triangles (2-3 wireframes, centered, rotated)
├── Tagline: "CODE · CONNECT · CREATE"
├── CTA headline (Playfair 800, 60px, "Found this useful?")
├── Body (1 sentence, centered)
├── CTA button (green pill with arrow + "@bytecodebreww")
├── URL: "bytecodebrew.com"
├── Page dots
└── Watermark
```

### Carousel Content Rules

1. **Max 8 slides** — respect attention spans
2. **One idea per slide** — never cram
3. **Hook slide = big claim + authority** — the headline sells the swipe
4. **Code blocks max 12 lines** on a single slide
5. **Cards: max 4-5 per slide** (2-column grid or vertical stack)
6. **Directive lists: max 5 items per slide**
7. **Always maintain 64px padding on all sides** — content never touches edges
8. **The green accent word should match the topic keyword** for Instagram SEO

### Export System

```
Tool: html2canvas (CDN: cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js)
Scale: 1 (1080px native)
Background: #0e0e0e
Output: PNG per slide
Naming: {topic}_jonas_{slidenum}.png
```

### Instagram Caption Pattern

```
Line 1: Hook question or bold statement (matches slide 1 headline)
Line 2-3: 2-3 sentences expanding the value proposition
Line 4: Blank line
Line 5: "Save this. Share it with a dev who needs it."
Line 6: Blank line
Line 7: ManyChat CTA: "Drop '[KEYWORD]' in the comments and I'll DM you [free resource]"
Line 8: Blank line
Line 9: Follow CTA: "Follow @bytecodebreww for more deep dives."

First comment: hashtag block (25-30 tags)
```

---

## 14. INSTAGRAM REELS SYSTEM (1080×1920px)

### Canvas-Rendered Reels

```
Rendering: HTML Canvas with requestAnimationFrame
Audio: Web Audio API (lo-fi trap beat, 95bpm)
Auto-advancing scenes with timing per scene
Export: MediaRecorder + captureStream at 8Mbps → .webm → ffmpeg → MP4

Structure:
  Scene 1 — Hook (3-4 seconds)
  Scenes 2-4 — Content (code cards, comparison cards, 3-5s each)
  Scene 5 — CTA (3-4 seconds)

Visual effects (canvas-rendered, not CSS):
  - Grid overlay (drawn on canvas)
  - Triangle decorations (canvas path drawings)
  - Fade-in / scale-in transitions between scenes
  - Text glow via multiple canvas text renders at low alpha
  - No scanlines (v2 dropped scanline effect from v1)

Watermark: @bytecodebreww on every frame (bottom area)
```

---

## 15. AI PROMPT INSTRUCTIONS

### Template Prompt

```
I've uploaded my ByteCodeBrew Design System v2 (Jonas-inspired). Please follow
it as the single source of truth for all visual styling, typography, colors,
component patterns, and page architecture.

Create a [React page / HTML page / PDF / carousel / presentation]
for: [describe what you want]

Requirements:
- Follow the Jonas-inspired ByteCodeBrew brand identity exactly
- Textured dark background (#0e0e0e + noise grain overlay + radial glows), green accent (#4ADE80)
- Fonts: Playfair Display (headlines), DM Sans (body), JetBrains Mono (code/labels)
- Triangle geometric decorations (SVG, low opacity, positioned behind content)
- Structured section numbering ("XX / XX" counters)
- Generous whitespace, editorial layout
- Cards with 3px green left-border accent
- For carousels: include html2canvas export, page dots, @bytecodebreww watermark
- NEVER use Tailwind CSS — always raw CSS with custom properties and inline styles
```

### Key Instructions for AI Models

1. **ALWAYS use textured dark background** — base color #0e0e0e with a subtle SVG noise/grain texture overlay (opacity 0.03-0.05) and section-specific radial gradient glows. Never flat solid. Never multi-stop gradients. Never white.
2. **ALWAYS use the three brand fonts** — Playfair Display (headlines), DM Sans (body), JetBrains Mono (code/labels).
3. **ALWAYS use green (#4ADE80) as the single accent color** — not orange (v1), not blue, not purple.
4. **ALWAYS include triangle decorations** — SVG wireframe/filled triangles at low opacity.
5. **ALWAYS include section labels** (JetBrains Mono, green, uppercase) above headlines.
6. **ALWAYS add "XX / XX" slide/section counters.**
7. **ALWAYS structure headlines** with Playfair Display and one `.accent` green word.
8. **ALWAYS use 3px green left-border on cards.**
9. **ALWAYS include scroll-triggered entrance animations** on React/HTML web pages.
10. **NEVER use glow orbs, filter:blur, scanlines, or neon effects** — those belong to v1.
11. **NEVER use Sora, Outfit, Inter, Roboto, or Arial.**
12. **NEVER use orange as accent color** — that was v1.
13. **NEVER create packed/dense layouts** — whitespace is a feature.
14. **NEVER use emoji** in carousels or visual outputs (renders as black circles in html2canvas).
15. **NEVER use multi-stop gradient backgrounds on slides** — use #0e0e0e base + noise texture + optional single radial glow.
16. **NEVER use Tailwind CSS** — always use raw CSS (custom properties, inline styles, or `<style>` blocks). Tailwind utility classes produce inconsistent results across AI models, are harder to debug, and conflict with our precise spacing/color system. Every value must trace back to our CSS variables.

---

## 16. ANTI-PATTERNS (What to NEVER Do)

| NEVER Do This | DO This Instead |
|---|---|
| Gradient background (#0A0E1A → #0F1B3D → #1B0A2E) | Textured dark background (#0e0e0e + noise grain overlay + radial glows) |
| Flat solid color background with no texture | Noise/grain texture overlay (SVG feTurbulence, opacity 0.03-0.05) |
| Orange accent (#FF8C00) | Green accent (#4ADE80) |
| Sora / Outfit font stack | Playfair Display / DM Sans font stack |
| Glow orbs (blurred circles) | Triangle geometric decorations (SVG) |
| Neon glow borders on cards | 1px solid #222 border + 3px green left accent |
| Packed edge-to-edge layouts | Generous whitespace (64px slide padding) |
| filter: blur() for any glow effect | radial-gradient() baked into backgrounds |
| Emoji characters in slides | SVG icons or CSS-drawn shapes |
| Multiple competing accent colors | Single green accent, everything else grayscale |
| Pure white (#FFFFFF) text | Off-white (#f0f0f0) |
| Scanline overlay effects | Clean grid overlay (rgba white, 0.015 opacity) |
| Floating animations | Static, steady-state positioning |
| Pulse animations on elements | No pulse — confidence is still |
| Rainbow gradient text on heroes | Single `.accent` word in green, rest in off-white |
| Horizontal line before section labels | Clean section label, no prefix decoration |
| Sans-serif headlines | Serif headlines (Playfair Display) |
| box-shadow glow on cards | No box-shadow (v2 is shadow-free except CTA button hover) |
| mask-composite gradient borders | Simple 1px solid borders |
| Large inset box-shadows | No inset shadows anywhere |
| Tailwind CSS utility classes | Raw CSS with custom properties (--green, --bg-card, etc.) |

---

## 17. HTML2CANVAS RENDERING RULES (CRITICAL)

These rules prevent visual breakage when exporting slides as PNG via html2canvas.

### NEVER use (will render incorrectly):
```
- CSS filter: blur() on div elements    → Renders as ugly solid circles
- mask-composite gradient borders        → Renders as black rectangles
- Large box-shadow with blur > 20px      → Inconsistent rendering
- Inset box-shadow on cards              → May not render at all
- Emoji characters (🔥📦⚡)              → Render as solid black circles
- backdrop-filter: blur()                → May not render at all
- mix-blend-mode on overlapping elements → Inconsistent
- CSS clip-path on complex shapes        → May break
- transform: perspective() on cards      → Inconsistent 3D rendering
```

### ALWAYS use instead:
```
- radial-gradient() layers for glow effects (baked into background)
- 1px solid borders (simple, reliable)
- SVG elements for all geometric decorations (triangles, icons, lines)
- Text spans with styling for emphasis (never emoji)
- background-blend-mode: screen for glow blending
- Simple opacity for transparency effects
- Standard CSS properties for all visual styling
```

### Export Configuration:

```javascript
html2canvas(slide, {
  scale: 1,
  useCORS: true,
  backgroundColor: '#0e0e0e',
  width: 1080,
  height: 1080,   // or 1920 for Reels
  logging: false
});
```

---

## QUICK REFERENCE CARD

```
BACKGROUND:     #0e0e0e + SVG noise grain (opacity 0.035) + section radial glows
ACCENT:         #4ADE80 (green — surgical, single-color economy)
TEXT:            #f0f0f0 / #888888 / #555555
CARD:           #161616, border #222222, 3px green left accent
HEADING FONT:   Playfair Display 700-800 (serif, editorial)
BODY FONT:      DM Sans 400-600 (geometric sans)
CODE FONT:      JetBrains Mono 400-600
BORDER RADIUS:  12-14px
MAX WIDTH:      1000px (web), 1080×1080 (carousel), 1080×1920 (reel)
SECTION LABEL:  JetBrains Mono 13px uppercase ls:3px green
SLIDE COUNTER:  JetBrains Mono 14px "XX / XX" muted
ANIMATION:      0.6s cubic-bezier(0.16,1,0.3,1) on scroll
GEOMETRY:       SVG triangles (wireframe 3-6% opacity, filled 10-15%)
CTA:            Green pill button, #000 text, 60px border-radius
TAGLINE:        CODE · CONNECT · CREATE
STYLING:        Raw CSS only (custom properties + inline styles). NEVER Tailwind.
HANDLE:         @bytecodebreww
```

---

## DESIGN SYSTEM CHANGELOG

| Version | Date | Changes |
|---------|------|---------|
| v1.0 | 2025 | Original: Navy gradient bg, orange accent, Sora/Outfit fonts, glow orbs, neon aesthetic |
| v2.0 | 2026 | Jonas.io-inspired: Flat dark bg, green accent, Playfair/DM Sans fonts, triangle geometry, editorial restraint |

### Migration Summary (v1 → v2)
- Background: 3-stop gradient → textured dark (#0e0e0e + noise grain + radial glows)
- Accent: orange #FF8C00 → green #4ADE80
- Headlines: Sora (sans) → Playfair Display (serif)
- Body: Outfit → DM Sans
- Decoration: Glow orbs → Triangle geometry
- Atmosphere: Neon/cyberpunk → Editorial/geometric
- Density: Packed edge-to-edge → Generous whitespace
- Borders: Orange-tinted glow → Clean gray + green left-accent
- Grid overlay: Orange-tinted → Neutral white at 0.015 opacity
- Section labels: Orange + line prefix → Green, no prefix

---

*ByteCodeBrew Design System v2.0 — Jonas.io-Inspired Edition — Upload this file before any creation request.*
