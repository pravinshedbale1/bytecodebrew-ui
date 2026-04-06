# ByteCodeBrew — Project Context & Memory

> **Purpose**: This file is the single source of truth for any AI model or developer
> continuing work on this project. Read this before making any changes.

---

## 🔑 KEY FACTS

| Property | Value |
|----------|-------|
| **Project Name** | ByteCodeBrew |
| **Type** | No-video EdTech platform for software engineers |
| **Audience** | Working professionals (2-8 yrs) + interview aspirants |
| **Tech Stack** | React 19 (Vite), react-router-dom v7, Custom CSS Modules, No TailwindCSS |
| **Design System** | `bytecodebrew-design-system-v2.md` (root directory) — Jonas.io-inspired editorial |
| **Brand Fonts** | Playfair Display (serif headings), DM Sans (body/UI), JetBrains Mono (code/labels) |
| **Theme** | Textured dark (#0e0e0e + noise grain), Green accent (#4ADE80), Triangle geometry |
| **Tagline** | CODE · CONNECT · CREATE |
| **Instagram** | @bytecodebreww |
| **Website** | bytecodebrew.com |

---

## 📁 PROJECT STRUCTURE

```
bytecodebrew-ui/
├── index.html                    # SEO-optimized HTML with meta tags, OG, fonts
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies
├── bytecodebrew-design-system.md # Brand & design system (MUST read before any UI work)
├── PROJECT_CONTEXT.md            # This file — project memory
├── javatopics.md                 # Java syllabus source document
├── public/
│   ├── logo.png                  # Coffee mug brand logo (header)
│   └── favicon.png               # Coffee mug favicon (browser tab)
└── src/
    ├── main.jsx                  # App entry point
    ├── index.css                 # Global CSS with design tokens, reset, animations
    ├── App.jsx                   # Root with BrowserRouter — routes: / (Landing), /java (Java)
    ├── data/                     # ⚡ ALL app data lives here as JSON (zero hardcoded strings)
    │   ├── brand.json            # Brand name, tagline, logo path, social links, quote, copyright
    │   ├── navigation.json       # Nav links (Topics, About) + CTA button label
    │   ├── hero.json             # Hero status badge, title, subtitle, 3 stat boxes
    │   ├── topics.json           # 7 topic tiles with metadata
    │   ├── landing.json          # Topics section label, title, subtitle
    │   └── java/                 # ☕ Java learning module data
    │       ├── chapters.json     # 6 chapters metadata (id, title, icon, topics[])
    │       ├── chapter1-fundamentals.json     # JVM, Memory, Data Types, Strings, OOP, Control Flow
    │       ├── chapter2-advanced-features.json # Lambdas, Streams, Optional, Sealed, Records, Patterns
    │       ├── chapter3-collections.json       # List, Map, Set, Sequenced, EnumMap, Generics
    │       ├── chapter4-concurrency.json       # Threads, Executors, Synchronizers, CF, Virtual Threads
    │       ├── chapter5-io-reflection.json     # I/O, NIO, Reflection, MethodHandles, HTTP Client
    │       └── chapter6-jvm-performance.json   # GC, JIT, Profiling, Foreign Memory, ClassLoading
    ├── components/
    │   ├── Header/               # Fixed header with scroll blur, mobile menu — uses <Link>
    │   ├── Footer/               # Brand footer with social links, quote
    │   ├── SectionLabel/         # Reusable monospace section label
    │   ├── TopicTile/            # Topic card with semantic colors, navigation
    │   ├── CodeBlock/            # Tokenization-based Java syntax highlighter with copy-to-clipboard
    │   ├── InterviewCard/        # Expandable Q&A accordion with green styling
    │   ├── TrickyPointCard/      # Warning cards for common gotchas with mistake/correct comparison
    │   ├── ChapterSidebar/       # Sticky sidebar with accordion chapters, mobile drawer
    │   └── ContentRenderer/      # Dynamic content renderer (paragraphs, code, tables, diagrams, key points)
    ├── pages/
    │   ├── LandingPage/          # Hero + Stats + Topics grid
    │   └── JavaPage/             # Two-panel layout: ChapterSidebar + ContentRenderer
    └── hooks/
        └── useScrollReveal.js    # IntersectionObserver hook for scroll animations
```

---

## 📋 CURRENT TOPICS

| # | ID | Title | Category | Color | Status |
|---|-----|-------|----------|-------|--------|
| 1 | java | Java | LANGUAGE | #4ADE80 (green) | ✅ Live (38 sub-topics, 6 chapters, deep-dive content) |
| 2 | spring-boot | Spring Boot | FRAMEWORK | #4ADE80 (green) | ✅ Live (page needed) |
| 3 | javascript | JavaScript | LANGUAGE | #4ADE80 (green) | ✅ Live (page needed) |
| 4 | react | React | FRAMEWORK | #4ADE80 (green) | ✅ Live (page needed) |
| 5 | dsa | DSA | CONCEPTS | #4ADE80 (green) | ✅ Live (page needed) |
| 6 | hld | High Level Design | DESIGN | #4ADE80 (green) | 🔜 Coming |
| 7 | lld | Low Level Design | DESIGN | #4ADE80 (green) | 🔜 Coming |

---

## ☕ JAVA MODULE ARCHITECTURE

The Java page is a **two-panel learning layout**:

### Sidebar (Left)
- Sticky, accordion-style navigation
- 6 chapters, 38 sub-topics total
- Chapter expand/collapse with arrow indicators
- Active topic highlighted with green marker
- Mobile: slides in as a drawer
- Shows total topic count at bottom

### Content Pane (Right)
- Breadcrumb navigation (Home / Java / Topic Name)
- Chapter badge with icon
- Dynamically renders content based on selected sub-topic
- Previous/Next topic navigation at bottom

### Content Block Types (rendered by ContentRenderer)
| Type | Description |
|------|-------------|
| `explanation` | Heading + paragraphs |
| `code` | CodeBlock with tokenization-based Java syntax highlighting |
| `table` | Styled data table with headers and rows |
| `diagram` | Visual layer diagram with icons and colored boxes |
| `keyPoints` | Bullet list of key takeaways with green arrows |

### Each Sub-Topic Contains
- `content[]` — array of content blocks (explanation, code, table, diagram, keyPoints)
- `interviewQuestions[]` — expandable Q&A cards (InterviewCard component)
- `trickyPoints[]` — warning cards with mistake/correct comparison (TrickyPointCard)

### Content JSON Schema
```json
{
  "id": "topic-id",
  "title": "Topic Title",
  "content": [
    { "type": "explanation", "heading": "...", "paragraphs": ["..."] },
    { "type": "code", "language": "java", "title": "...", "code": "..." },
    { "type": "table", "title": "...", "headers": [], "rows": [[]] },
    { "type": "diagram", "title": "...", "layers": [{ "icon", "title", "description", "color" }] },
    { "type": "keyPoints", "points": ["..."] }
  ],
  "interviewQuestions": [{ "question": "...", "answer": "..." }],
  "trickyPoints": [{ "title": "...", "mistake": "...", "correct": "...", "codeExample": "..." }]
}
```

### Java Content Depth (Deep-Dive Enhancement)
All 6 chapter JSON files have been expanded from surface-level summaries to **technically rigorous, interview-ready deep dives**. Key additions:

| Chapter | Deep-Dive Additions |
|---------|--------------------|
| Ch1: Fundamentals | SOLID principles (all 5 with code), Design Patterns (Singleton/Builder/Factory/Strategy/Observer), Immutable Class Recipe, Diamond Problem |
| Ch2: Advanced | Lambda internals (invokedynamic), Function Composition, reduce() 3 forms, Collectors.teeing(), Stream.iterate |
| Ch3: Collections | Comparable vs Comparator, LinkedHashMap LRU cache, TreeMap/NavigableMap, compute/merge/computeIfAbsent |
| Ch4: Concurrency | wait/notify Producer-Consumer, ReadWriteLock, StampedLock, ThreadLocal pitfalls, ForkJoinPool work-stealing, 4 rejection policies, BlockingQueue |
| Ch5: I/O | Path/Files NIO.2 API, WatchService, Serialization Alternatives comparison table |
| Ch6: JVM | Heap layout diagram, GC lifecycle (Minor/Major/Full), GC Roots, Escape Analysis (scalar replacement/lock elision), Memory Leak patterns, Production JVM flags checklist, ClassNotFoundException vs NoClassDefFoundError |

> **Content philosophy**: Explain the "why" and "how" (JVM internals, bytecode, memory layout, performance trade-offs), not just definitions. Every section targets interview-level depth.

---

## 🏗️ ARCHITECTURE DECISIONS

1. **CSS Modules everywhere** — every component gets `ComponentName.module.css`. No inline styles.
2. **Data-driven architecture** — ALL text content lives in `src/data/*.json`. Components contain zero hardcoded strings.
3. **JSON data files, not JS** — data is stored as `.json` for clean separation.
4. **React Router v7** — BrowserRouter with routes for `/` (landing) and `/{topicId}` (topic page).
5. **No state management library** — React useState/useReducer is sufficient.
6. **Scroll animations** — handled via `useScrollReveal` custom hook (IntersectionObserver).
7. **Mobile-first responsive** — all components have breakpoints at 768px and 480px.
8. **Accessibility** — ARIA roles, labels, keyboard navigation, skip-to-content link.
9. **SEO** — meta tags, Open Graph, Twitter Card, semantic HTML, proper heading hierarchy.
10. **Uniform card layout** — all topic tiles equal height via CSS Grid + `height: 100%`.
11. **Tokenization-based syntax highlighting** — custom CodeBlock uses character-by-character tokenizer to avoid regex replacement conflicts.
12. **SPA navigation** — Header uses react-router `<Link>`, TopicTile uses `useNavigate()`.
13. **Code-line display: inline** — `.code-line` spans MUST be `display: inline` (not `block`), because lines are joined with `\n` inside `<pre>`. Using `display: block` creates double line breaks.

---

## ⚡ DESIGN SYSTEM RULES v2 (QUICK REFERENCE)

- **Background**: Flat dark `#0e0e0e` with SVG `feTurbulence` noise grain overlay + section-specific radial glows
- **Text colors**: Primary `#f0f0f0`, Secondary `#888888`, Muted `#555555`, Disabled `#333333`
- **Accent**: Green (#4ADE80) is the single hero color — use sparingly for max impact
- **Cards**: `#161616` bg, `#222222` border, 12-14px radius, **3px green left-border accent** on all cards
- **Fonts**: ONLY Playfair Display (serif headlines), DM Sans (body/UI), JetBrains Mono (code/labels)
- **Section labels**: JetBrains Mono 13px uppercase, letter-spacing 3px, green, no prefix line
- **Animations**: 0.6s cubic-bezier(0.16,1,0.3,1) entrance-only, 0.2-0.3s ease for hover
- **Decorations**: SVG wireframe/filled triangles as geometric accents, grid overlay with white lines
- **Max content width**: 1000px centered (`--max-width: 1000px`)
- **Logo**: Coffee mug with binary code (`/public/logo.png`), favicon at `/public/favicon.png`
- **Stats**: 3 stat boxes (Topics, Concepts, Depth) with green accent
- **Spacing**: Generous whitespace — editorial breathing room
- **Header brand**: Tri-color split: Byte (muted) + Code (green) + Brew (muted)
- **html2canvas rules**: Use `radial-gradient` for glows, avoid `filter: blur()` or `box-shadow` for performance
- **Syntax highlighting**: keywords=#4ADE80, strings=#FBBF24, comments=#444, annotations=#818CF8, numbers=#06B6D4, literals=#F9A8D4

---

## 📂 DATA FILE REFERENCE

| File | Used By | Contains |
|------|---------|----------|
| `brand.json` | Header, Footer, LandingPage | name, tagline, logo, socialLinks[], quote, copyrightTemplate |
| `navigation.json` | Header | links[] (label, href, active), cta (label, href) |
| `hero.json` | LandingPage | status (text, active), title, subtitle, stats[] (value, label, color) |
| `topics.json` | LandingPage → TopicTile | Array of topics: id, icon, title, description, category, color, tags[], status |
| `landing.json` | LandingPage | topicsSection (label, title, subtitle) |
| `java/chapters.json` | JavaPage | 6 chapters with metadata and sub-topic IDs |
| `java/chapter1-6.json` | JavaPage → ContentRenderer | Deep content for each sub-topic |

> **Rule**: Adding/changing content = edit JSON only. Adding new components = create new JSON if it has text content.

---

## 🗺️ FUTURE PLANS (Not yet implemented)

- [ ] Content pages for Spring Boot, JavaScript, React, DSA (same pattern as Java)
- [ ] Search functionality across all topics
- [ ] Progress tracking per user
- [ ] Dark/light mode toggle (dark is default)
- [ ] Additional topics as requested by user
- [ ] Dynamic meta tags for individual topic SEO

---

## 🧠 MEMORY POINTS

1. User wants **no video content** — the entire platform is text-based learning
2. User wants **interview preparation** focus for software engineers
3. Every page and component **MUST** be responsive + SEO friendly
4. User will give **incremental commands** — build feature by feature
5. The design system document (`bytecodebrew-design-system-v2.md`) is the **ultimate visual authority**
6. **Custom CSS modules only** — no Tailwind, no inline styles, no UI libraries
7. **Zero hardcoded data in components** — everything pulled from `src/data/*.json`
8. **Component styles co-located** — each component's `.module.css` lives in its folder
9. **Uniform card heights** — all topic tiles in a grid row must be equal height
10. **Generous whitespace** — editorial breathing room, NOT compact spacing
11. The landing page currently has 7 topic tiles — more may be added later
12. User's prior projects include DSA visualizer, JVM visualizer, JPMC interview prep (all under ByteCodeBrew brand)
13. **Java module pattern** — use the same ChapterSidebar + ContentRenderer pattern for other topic pages
14. **CodeBlock tokenizer** — never use regex replacement for syntax highlighting (causes `class` keyword conflicts with HTML attributes)
15. **Java content depth** — all 6 chapters have been expanded to interview-level depth with JVM internals, SOLID, design patterns, concurrency patterns, GC mechanics, escape analysis, memory leak patterns
16. **Code-line spacing** — `.code-line` must be `display: inline` (not `block`) to avoid double line breaks in `<pre>` elements. `line-height: 1.6` for comfortable code reading
17. **v2 Rebrand (2026-04-07)** — Full migration from v1 (orange/cyberpunk/Sora) to v2 (green/editorial/Playfair Display). All CSS modules updated, data colors unified to green, triangle decorations replace glow orbs
18. **All topic colors unified** — Every topic uses #4ADE80 (green) for badges/icons to maintain single-accent-color economy
19. **TrickyPoint cards** — Use yellow (#FBBF24) accent for warning differentiation, NOT red backgrounds
20. **3px green left-border** — Required on ALL card-type components: TopicTile, InterviewCard, TrickyPointCard (yellow), stat boxes, nav buttons

---

*Last updated: 2026-04-07 — v2 Design System Rebrand Complete*
