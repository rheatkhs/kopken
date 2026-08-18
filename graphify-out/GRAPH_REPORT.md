# Graph Report - .  (2026-08-18)

## Corpus Check
- 65 files · ~332,897 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 123 nodes · 129 edges · 11 communities (7 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `include` - 7 edges
3. `scripts` - 5 edges
4. `lib` - 4 edges
5. `ignoreScripts` - 3 edges
6. `trustedDependencies` - 3 edges
7. `Footer()` - 3 edges
8. `Header()` - 3 edges
9. `framer-motion` - 2 edges
10. `lenis` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (5): BrandStory(), Footer(), Header(), Installations(), Vouchers()

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.16
Nodes (13): ignoreScripts, name, packageManager, private, scripts, build, dev, lint (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (13): framer-motion, lenis, lucide-react, next, dependencies, framer-motion, lenis, lucide-react (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.19
Nodes (8): metadata, Chatbot(), FormattedMessage(), formatTime(), INITIAL_SUGGESTIONS, Message, parseBold(), SmoothScroll()

### Community 6 - "Community 6"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

## Knowledge Gaps
- **53 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+48 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 2` to `Community 3`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 4` to `Community 3`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 1` to `Community 6`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._