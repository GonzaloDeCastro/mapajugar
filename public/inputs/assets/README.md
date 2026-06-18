# Map SVG for forks

1. Copy `fork.config.example.json` → `fork.config.json` at the repo root.
2. Fill in `country`, `language`, and `jurisdiction` (see example for US English).
3. Place your licensed map SVG here as **`map.svg`** (or the path set in `fork.config.json` → `map.svgInput`).
4. In Cursor, run: **“Bootstrap map fork”** (agents read `.cursor/skills/map-fork-bootstrap/SKILL.md`).

You only need to supply the SVG and `fork.config.json`. Agents handle map paths, content, images, and GitHub Pages deploy.
