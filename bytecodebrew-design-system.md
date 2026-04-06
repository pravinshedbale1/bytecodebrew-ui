# ByteCodeBrew — Design System & AI Generation Guide

> **What is this file?**
> Upload this document to any AI model (Claude, ChatGPT, Gemini, etc.) before asking it to create any visual output — React pages, HTML files, PDFs, presentations, Instagram carousels, dashboards, or any branded content. The AI will use this as the single source of truth for ByteCodeBrew's visual identity, component patterns, and page architecture.

---

## TABLE OF CONTENTS

1. Brand Identity
2. Color System
3. Typography
4. Spacing & Layout
5. Component Library
6. Page Architecture
7. Animation & Motion
8. Visual Atmosphere
9. Content Patterns
10. Platform-Specific Rules (React, HTML, PDF, Instagram)
11. AI Prompt Instructions
12. Anti-Patterns (What to NEVER Do)

---

## 1. BRAND IDENTITY

| Property | Value |
|----------|-------|
| Brand Name | ByteCodeBrew |
| Instagram | @bytecodebreww |
| Website | bytecodebrew.com |
| Tagline | CODE · CONNECT · CREATE |
| Domain | Developer education, tech content, interview prep |
| Tone | Confident, technical, premium, approachable but never casual |
| Audience | Software engineers (2-8 years experience), Indian tech market primary |

### Brand Voice
- Technical but not academic — write like a senior engineer mentoring a mid-level colleague
- Assertive, not aggressive — make strong claims backed by reasoning
- Concise — every word earns its place
- No fluff phrases: avoid "In today's world...", "As we all know...", "Let's dive in..."

---

## 2. COLOR SYSTEM

### Core Palette

```
Background Gradient (always use this, never flat backgrounds):
  Start:    #0A0E1A  (deep navy-black)
  Middle:   #0F1B3D  (dark navy blue)
  End:      #1B0A2E  (deep purple-black)
  CSS:      linear-gradient(180deg, #0A0E1A 0%, #0F1B3D 40%, #1B0A2E 100%)

Primary Accent:
  Orange:        #FF8C00
  Orange Dark:   #FF6B00
  Orange Glow:   rgba(255, 140, 0, 0.15)

Text:
  Primary:       #E8E6E3  (warm off-white, never pure #FFFFFF)
  Secondary:     #B0B3B8  (readable gray for body text, descriptions)
  Dim:           #8B8D93  (metadata, labels, timestamps)

Surface:
  Card BG:       rgba(15, 27, 61, 0.6)  (semi-transparent navy)
  Card Border:   rgba(255, 140, 0, 0.12)  (subtle orange border)
  Card Hover:    rgba(255, 140, 0, 0.08)  (hover state)
```

### Semantic Colors (for categorization, status, data viz)

```
Green:    #22C55E   — success, positive, growth, backend
Blue:     #3B82F6   — info, links, databases, primary actions
Purple:   #A855F7   — events, Kafka, async, premium
Red:      #EF4444   — error, warning, critical, performance
Cyan:     #06B6D4   — search, analytics, data, metrics
Pink:     #EC4899   — notifications, engagement, social
```

### Color Usage Rules

1. **Orange is the hero** — used for primary CTAs, active states, labels, section markers, progress indicators. Never use orange for backgrounds larger than small badges.
2. **Semantic colors at low opacity for backgrounds** — when using green/blue/purple/etc as card backgrounds, always use 8-15% opacity: `${color}12` or `${color}15`. Never use semantic colors at full saturation as backgrounds.
3. **Borders use the same semantic color at 20-35% opacity** — `${color}25` or `${color}30`.
4. **Never use pure white (#FFFFFF)** — always #E8E6E3 or softer.
5. **Never use pure black (#000000) for text** — the background is already dark.
6. **Glow effects** use the relevant color at 40-60% opacity with CSS blur.

### CSS Variables Template

```css
:root {
  --bg-start: #0A0E1A;
  --bg-mid: #0F1B3D;
  --bg-end: #1B0A2E;
  --orange: #FF8C00;
  --orange-dark: #FF6B00;
  --orange-glow: rgba(255, 140, 0, 0.15);
  --text-primary: #E8E6E3;
  --text-secondary: #B0B3B8;
  --text-dim: #8B8D93;
  --card-bg: rgba(15, 27, 61, 0.6);
  --card-border: rgba(255, 140, 0, 0.12);
  --green: #22C55E;
  --blue: #3B82F6;
  --purple: #A855F7;
  --red: #EF4444;
  --cyan: #06B6D4;
  --pink: #EC4899;
  --max-width: 1200px;
  --content-padding: 24px;
}
```

---

## 3. TYPOGRAPHY

### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| Headings, titles, brand | **Sora** | 700, 800 | sans-serif |
| Body text, descriptions | **Outfit** | 300, 400, 500, 600 | sans-serif |
| Code, labels, metadata, data | **JetBrains Mono** | 400, 500, 700 | monospace |

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap
```

### Type Scale

```
Hero Title:        Sora 800, clamp(36px, 6vw, 64px), line-height: 1.1
Section Title:     Sora 800, clamp(28px, 4vw, 42px), line-height: 1.2
Card Title:        Sora 700, 15-18px
Section Label:     JetBrains Mono 400, 11px, letter-spacing: 3px, uppercase, color: orange
Body:              Outfit 400, 16px, line-height: 1.75, color: text-secondary
Small Body:        Outfit 400, 14px, line-height: 1.65, color: text-dim
Code/Label:        JetBrains Mono 400, 11-13px
Stat Number:       Sora 800, clamp(28px, 4vw, 40px)
Metadata:          JetBrains Mono 400, 10-11px, letter-spacing: 2px, uppercase, color: text-dim
```

### Typography Rules

1. **Headings are always Sora weight 700-800** — never regular weight headings.
2. **Body text is always Outfit** — never use Sora for paragraphs.
3. **Anything technical, data-related, or label-like is JetBrains Mono** — tag badges, stat labels, section markers, code snippets, timestamps, metadata.
4. **Section labels** (small text above section titles) are always: JetBrains Mono, 11px, uppercase, letter-spacing: 3px, orange color, with a small horizontal line before them.
5. **Never use Inter, Roboto, Arial, or system fonts.**
6. **Hero titles can use gradient text**: `background: linear-gradient(135deg, #E8E6E3 0%, #FF8C00 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`

---

## 4. SPACING & LAYOUT

### Spacing Scale

```
4px   — tight gaps (between inline badges)
8px   — compact gaps (between small elements)
12px  — standard gap (between cards, badges)
16px  — paragraph margin-bottom
20px  — card padding (compact cards)
24px  — standard card padding
28px  — generous card padding
32px  — section element margin-top
40px  — between major section elements
60px  — between content and footer
80px  — section padding (top and bottom)
100px — hero section padding-top
```

### Layout Rules

1. **Max content width: 900px** — centered with `margin: 0 auto`.
2. **Horizontal padding: 24px** — for mobile-safe margins.
3. **Grid columns**: Use `repeat(auto-fit, minmax(Xpx, 1fr))` for responsive grids. Common breakpoints:
   - 2 columns: minmax(340px, 1fr)
   - 3 columns: minmax(250px, 1fr)
   - 4 columns: minmax(200px, 1fr)
   - 5 columns: minmax(150px, 1fr)
4. **Cards have 12-14px border-radius** — never sharp corners, never overly round (>20px).
5. **Paragraphs max-width: 720px** — for readability.

---

## 5. COMPONENT LIBRARY

### 5.1 Section Label

The small monospace marker above every section title.

```
Structure: [horizontal line (24px)] + [UPPERCASE TEXT]
Font: JetBrains Mono, 11px, letter-spacing: 3px, uppercase
Color: orange (#FF8C00)
Line: 24px wide, 1px tall, orange, inline before text
Margin-bottom: 12px below label
```

### 5.2 Section Title

```
Font: Sora, weight 800, clamp(28px, 4vw, 42px)
Color: #E8E6E3
Line-height: 1.2
Margin: 0 0 20px
```

### 5.3 Card (Standard)

```
Background: rgba(15, 27, 61, 0.6)
Border: 1px solid rgba(255, 140, 0, 0.12)
Border-radius: 12-16px
Padding: 20-28px
Hover: border transitions to rgba(255, 140, 0, 0.35)
Transition: all 0.3s ease
```

### 5.4 Card (Semantic/Colored)

Used when a card represents a specific category (module, status, alert).

```
Background: ${semanticColor} at 8-12% opacity  (e.g., #22C55E12)
Border: 1px solid ${semanticColor} at 20-30% opacity  (e.g., #22C55E30)
Border-radius: 12px
Padding: 24px 28px
Title header: JetBrains Mono, 11px, uppercase, letter-spacing: 2px, semantic color
```

### 5.5 Stat Box

```
Container: standard card styling
Value: Sora 800, clamp(28px, 4vw, 40px), semantic color
Label: JetBrains Mono, 11px, uppercase, letter-spacing: 2px, text-dim
Text-align: center
Padding: 20px 24px
```

### 5.6 Badge/Tag

```
Font: JetBrains Mono, 11px
Color: #E8E6E3 (or semantic color for colored badges)
Background: ${color} at 15% opacity
Border: 1px solid ${color} at 25% opacity
Border-radius: 6px
Padding: 5px 10px
Display: inline-block
```

### 5.7 Code Block

```
Font: JetBrains Mono, 12px, line-height: 1.7
Color: text-secondary (#8B8D93)
Background: rgba(0, 0, 0, 0.3)
Border: 1px solid card-border
Border-radius: 12px
Padding: 24px
Overflow-x: auto
```

### 5.8 Icon Container

```
Width: 48px, Height: 48px
Border-radius: 12px
Background: ${color} at 18% opacity
Display: flex, align-items: center, justify-content: center
Font-size: 24px (for emoji icons)
```

### 5.9 Progress Bar

```
Track: rgba(255, 255, 255, 0.05), height: 3-4px, border-radius: 2px
Fill: linear-gradient(90deg, ${startColor}, ${endColor}), border-radius: 2px
Transition: width 1s ease
```

### 5.10 Timeline

```
Vertical line: 2px wide, gradient from orange to purple
Position: absolute, left-aligned
Node: 14px circle, bg matches page bg, 2px border in orange
Node glow: box-shadow: 0 0 12px rgba(255, 140, 0, 0.4)
Content: padding-left: 32px from the line
Step label: JetBrains Mono, 11px, orange, uppercase, letter-spacing: 2px
Step title: Sora 700, 18px, text-primary
Step detail: Outfit 400, 14px, text-secondary
```

### 5.11 Expandable/Accordion Card

```
Default state: standard card, cursor: pointer
Open state: semantic colored background, expanded border color
Toggle icon: "+" that rotates 45° to "×" on open
Animation: content slides in with fadeSlideIn (opacity 0→1, translateY 12px→0)
Inner content: separated by 1px border-top in semantic color at 20% opacity
Transition: all 0.35s ease
```

### 5.12 Navigation Dots (Side Nav)

```
Position: fixed, right: 20px, top: 50%, transform: translateY(-50%)
Each dot: 8px circle
Active: orange fill, box-shadow glow, label visible
Inactive: rgba(255,255,255,0.15) fill, label hidden
Label: JetBrains Mono, 10px, appears on active with slide-in transition
```

### 5.13 Diagram Layer Block

Used for architecture layer diagrams.

```
Background: linear-gradient(135deg, ${color}15, ${color}08)
Border: 1px solid ${color}30
Border-radius: 12px
Padding: 20px 28px
Layout: flex, align-items: center, gap: 16px
Icon: 28px emoji
Title: Sora 700, 15px, text-primary
Subtitle: JetBrains Mono, 11px, semantic color
Stack vertically with 2px gap between layers
```

### 5.14 Flow Connector (between diagram layers)

```
Text: ▼ characters repeated, separated by spaces
Font: JetBrains Mono, 18px
Color: text-dim
Letter-spacing: 4px
Text-align: center
Margin: 8px 0 16px
```

---

## 6. PAGE ARCHITECTURE

### Standard Page Structure

Every ByteCodeBrew page follows this scroll-based architecture:

```
1. HERO SECTION
   ├── Status indicator (pulsing orange dot + monospace label)
   ├── Hero title (gradient text, Sora 800, largest size)
   ├── Subtitle paragraph (Outfit, text-secondary, max 600px)
   ├── Stat boxes row (4 key metrics in grid)
   └── Brand footer (ByteCodeBrew + tagline)

2. PROBLEM / CONTEXT SECTION
   ├── Section label (monospace + line)
   ├── Section title
   ├── 1-2 explanation paragraphs
   ├── Alert card (red-tinted for problem)
   └── Solution card (green-tinted for fix)

3. SOLUTION / APPROACH SECTION
   ├── Section label + title
   ├── Explanation paragraph
   └── Feature cards grid (4 cards, icon + title + description)

4. ARCHITECTURE / DIAGRAM SECTION
   ├── Section label + title
   ├── Explanation paragraph
   ├── Layer diagram (stacked blocks with connectors)
   ├── Data store grid (5 stores in responsive grid)
   └── Explainer card (why this architecture)

5. TECHNOLOGY / TOOLS SECTION
   ├── Section label + title
   ├── Explanation paragraph
   └── Tech cards grid (each with name, icon, WHY, OVER ALTERNATIVES)

6. DETAILED BREAKDOWN SECTION(S)
   ├── Section label + title
   ├── Explanation paragraph
   └── Expandable accordion cards (click to reveal details)

7. SUPPORTING SECTIONS (as needed)
   ├── Data schemas
   ├── Event flows
   ├── Cross-cutting concerns
   ├── Concept trackers
   ├── Timelines
   └── Project structures

8. FOOTER
   ├── Brand name (Sora 800, 20px)
   ├── Tagline (JetBrains Mono, 11px, letter-spacing: 3px)
   ├── Social handles
   └── Closing quote or principle
```

### Section Entrance Animation

Every section animates into view on scroll:

```
Initial state: opacity: 0, transform: translateY(40px)
Visible state: opacity: 1, transform: translateY(0)
Transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1)
Trigger: IntersectionObserver with threshold 0.08-0.15
One-time: once visible, stays visible (don't re-hide on scroll up)
```

---

## 7. ANIMATION & MOTION

### Timing

```
Fast:     0.2s ease       — hover states, color changes
Standard: 0.3s ease       — card transitions, accordion toggles
Smooth:   0.35s ease      — border/shadow transitions
Entrance: 0.7s cubic-bezier(0.16, 1, 0.3, 1)  — scroll reveal
Slow:     1s ease         — progress bar fills
```

### Keyframes

```css
@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
```

### Motion Rules

1. **Scroll-triggered entrance** on every major section (use IntersectionObserver).
2. **Hover transitions** on all interactive cards (border color change, subtle background shift).
3. **Accordion content** uses fadeSlideIn animation (0.3s).
4. **Status indicators** use pulse animation (2s loop).
5. **No motion for the sake of motion** — every animation must serve clarity or delight.
6. **Active nav dots** get a glow box-shadow transition.

---

## 8. VISUAL ATMOSPHERE

### Background

Always use the three-stop gradient background. Never use flat solid colors.

```css
background: linear-gradient(180deg, #0A0E1A 0%, #0F1B3D 40%, #1B0A2E 100%);
```

### Grid Overlay

A subtle grid pattern fixed over the entire page:

```css
.grid-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(255, 140, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 140, 0, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### Glow Orbs

Large, blurred, colored circles positioned throughout the page to create depth:

```
Properties:
  - position: absolute
  - border-radius: 50%
  - filter: blur(size/2)
  - opacity: 0.04-0.06
  - pointer-events: none
  - size: 300-500px

Placement strategy:
  - Orange orb near top-left (hero area)
  - Purple orb mid-right
  - Blue orb lower-left
  - Orange orb again near bottom-right
  - Cyan orb if page is very long
  - Space them ~1500-2000px apart vertically
  - Alternate left/right positioning
```

### Scrollbar

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255, 140, 0, 0.4); border-radius: 3px; }
```

---

## 9. CONTENT PATTERNS

### How to Write Section Labels
- Always uppercase
- Always JetBrains Mono
- Always preceded by a small horizontal line
- Examples: "THE PROBLEM", "SYSTEM ARCHITECTURE", "TECHNOLOGY CHOICES", "MODULE BREAKDOWN"

### How to Write Section Titles
- Short, punchy, conversational
- Often a statement or question
- Examples: "Why does this project exist?", "Every tool earns its place", "8 modules, each with a mission", "The invisible architecture"

### How to Write Body Paragraphs
- Max 3-4 sentences per paragraph
- First sentence is the key claim
- Following sentences provide evidence or context
- Never start with "In order to..." or "It is important to note that..."

### How to Structure Alert/Callout Cards
- Use red-tinted card for problems/warnings
- Use green-tinted card for solutions/positives
- Use orange-tinted card for important notes
- Each has: monospace uppercase header label + body text
- Header label uses semantic color, body uses text-secondary

### How to Structure Tech Choice Cards
- Icon (emoji) + Name (Sora 700)
- "WHY" section: 2-3 sentences on why this tech
- "OVER ALTERNATIVES" section: what was considered and rejected, in italic

### How to Structure Stat Boxes
- Big number in semantic color (Sora 800)
- Short label below (JetBrains Mono, uppercase, dim)
- Arrange 3-4 in a responsive grid row
- Use for key metrics that should pop immediately

---

## 10. PLATFORM-SPECIFIC RULES

### React (.jsx) Pages

```
- Import Google Fonts via <style> tag with @import
- Use inline styles (style={{}}) for all styling — no external CSS files
- Use useState for interactive elements (accordions, tabs)
- Use IntersectionObserver (via useRef + useEffect) for scroll animations
- Single-file component — everything in one .jsx file
- Use Tailwind core utilities sparingly, prefer inline styles for brand precision
- Available libraries: recharts, lucide-react, d3, three.js, lodash
- Never use localStorage/sessionStorage in artifacts
```

### HTML Pages

```
- Self-contained single file with <style> in <head>
- Use CSS custom properties for all brand values
- Vanilla JS for interactions (accordion, scroll animation)
- Include Google Fonts via <link> tag
- Use CSS-only animations wherever possible
```

### PDFs (ReportLab / Python)

```
- Background: use dark navy (#0A0E1A to #0F1B3D gradient)
- Cannot use Google Fonts directly — use Helvetica as fallback, or embed font files
- Orange (#FF8C00) for headings and accent elements
- White (#E8E6E3) for body text on dark backgrounds
- Code blocks: darker background (#050810) with monospace font
- Page size: A4 or US Letter depending on audience
- Branded header: "ByteCodeBrew" + tagline on every page
- Page numbers in JetBrains Mono style (bottom center)
- Section headers: large, bold, with orange underline or left border
```

### Instagram Carousels (1080×1080px)

```
Slide structure:
  1. Cover slide: ghost-text number (large, dim), topic title, swipe CTA arrow
  2. Content slides: numbered label, stat boxes, code decoration (bottom-right)
  3. CTA slide: follow prompt, brand handle, tagline

Background: always the dark gradient
Text: Sora for headings, Outfit for body, JetBrains Mono for code
Brand watermark: bottom-left on every slide
Page dot navigation: bottom-center
Swipe indicator: "SWIPE →" on cover slide
```

### Presentations / Slides

```
- Dark background (the gradient)
- One key idea per slide
- Large Sora headings
- Minimal body text (Outfit)
- Use stat boxes for data points
- Orange accent for key highlights
- Code snippets in dark code block styling
```

---

## 11. AI PROMPT INSTRUCTIONS

When you upload this document to an AI model, pair it with a prompt like this:

### Template Prompt

```
I've uploaded my ByteCodeBrew Design System document. Please follow it as the
single source of truth for all visual styling, typography, colors, component
patterns, and page architecture.

Create a [React page / HTML page / PDF / presentation / Instagram carousel]
for: [describe what you want]

Requirements:
- Follow the ByteCodeBrew brand identity exactly (colors, fonts, spacing)
- Use the page architecture structure from the design system
- Include scroll animations for React/HTML pages
- Use the component patterns defined (section labels, cards, stat boxes, etc.)
- Dark theme with gradient background, orange accents
- Fonts: Sora (headings), Outfit (body), JetBrains Mono (code/labels)
```

### Key Instructions for AI Models

1. **ALWAYS use the three-stop gradient background** — never white, never flat dark.
2. **ALWAYS import and use the three brand fonts** — Sora, Outfit, JetBrains Mono.
3. **ALWAYS use section labels** (small monospace + line) above section titles.
4. **ALWAYS use orange (#FF8C00) as the primary accent** — not blue, not purple.
5. **ALWAYS include glow orbs and grid overlay** for atmosphere.
6. **ALWAYS use scroll-triggered entrance animations** on React/HTML pages.
7. **ALWAYS structure pages with the Hero → Problem → Solution → Detail → Footer flow.**
8. **NEVER use white backgrounds, light themes, or pastel colors.**
9. **NEVER use Inter, Roboto, Arial, or generic sans-serif fonts.**
10. **NEVER create flat, unadorned layouts** — every page needs visual atmosphere.

---

## 12. ANTI-PATTERNS (What to NEVER Do)

| NEVER Do This | DO This Instead |
|---|---|
| White or light background | Dark gradient background (#0A0E1A → #0F1B3D → #1B0A2E) |
| Pure white (#FFFFFF) text | Warm off-white (#E8E6E3) |
| Inter, Roboto, Arial fonts | Sora, Outfit, JetBrains Mono |
| Purple gradient on white (AI slop) | Dark navy-to-purple gradient with orange accents |
| Flat solid color backgrounds | Gradient + grid overlay + glow orbs |
| Evenly distributed pastel colors | Dominant dark with sharp orange accents |
| Sharp cornered cards (0px radius) | 12-16px border-radius |
| Heavy borders (2px+ solid) | 1px solid at low opacity |
| No animations | Scroll-triggered entrance + hover transitions |
| Wall of text with no structure | Section label → Title → Short paragraphs → Visual components |
| Generic bullet point lists | Styled cards, badge grids, timeline components |
| Plain code blocks | Styled dark code blocks with monospace font and subtle border |
| Center-aligned body text | Left-aligned body, center only for stats and footers |
| Decorative gradients on text (rainbow) | Subtle white-to-orange gradient on hero titles only |
| Multiple competing accent colors | Orange primary, semantic colors at low opacity for categorization only |

---

## QUICK REFERENCE CARD

```
BACKGROUND:     linear-gradient(180deg, #0A0E1A, #0F1B3D, #1B0A2E)
ACCENT:         #FF8C00 (orange)
TEXT:            #E8E6E3 / #8B8D93 / #555860
CARD:           rgba(15,27,61,0.6) border rgba(255,140,0,0.12)
HEADING FONT:   Sora 700-800
BODY FONT:      Outfit 400
CODE FONT:      JetBrains Mono 400
BORDER RADIUS:  12-16px
MAX WIDTH:      900px
SECTION LABEL:  JetBrains Mono 11px uppercase ls:3px orange
ANIMATION:      0.7s cubic-bezier(0.16,1,0.3,1) on scroll
TAGLINE:        CODE · CONNECT · CREATE
```

---

*ByteCodeBrew Design System v1.0 — Upload this file before any creation request.*
