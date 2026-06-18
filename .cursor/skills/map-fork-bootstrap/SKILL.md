---
name: map-fork-bootstrap
description: >-
  Bootstrap a new country map fork from this template. Use when fork.config.json
  exists, when the user adds a map SVG under public/inputs/assets/, or when they
  say bootstrap fork, new country map, or map fork workflow. Orchestrates agents
  to adapt the map, generate localized content, and deploy to GitHub Pages only.
---

# Map fork bootstrap

Turn this repo into an interactive educational map for **any country**. The human only provides:

1. `fork.config.json` (copy from `fork.config.example.json`)
2. Map SVG at `public/inputs/assets/map.svg` (or path in config)

**You** (orchestrator) run the workflow below. Do **not** ask the user to paste a long prompt.

## Read config first

```bash
# If missing, tell user to copy fork.config.example.json → fork.config.json
cat fork.config.json
```

| Field | Agent use |
|-------|-----------|
| `language` / `languageName` | **All** UI copy, metadata, and educational content in this language |
| `country` | Replace Argentina references; spotlight/history context |
| `jurisdiction.*` | Routes (`/states/`, `/provinces/`, etc.), labels, types |
| `map.svgInput` | Source SVG to parse |
| `map.idToSlugFile` | `scripts/map-id-to-slug.json` — build from SVG `id` attributes |
| `content.itemsPerCategory` | Default **3** per flora, fauna, food, tourism, history |
| `deploy.githubPagesOnly` | **Do not** configure or run Hostinger/FTP workflows |
| `donations` | See donations section — **never change PayPal URL in code** |

## Non-negotiable rules

### Language
- Write **every** user-facing string in the language from `fork.config.json` (`language` / `languageName`).
- Examples: `en-US` → US English; `es-AR` → Argentine Spanish; `pt-BR` → Brazilian Portuguese.
- Remove leftover strings from the Argentina template.

### Donations (same across all forks)
- **Keep** `DonationHint`, `getDonationConfig()`, QR at `public/inputs/payments/QR_CODE.png`.
- **Do not** hardcode a PayPal URL in source. Use env `paypal_url` locally and GitHub Secret **`PAYPAL_URL`** in `.github/workflows/github-pages.yml` (same secret name for every fork in this family).
- **Never commit `.env`**. Only `.env.example` with placeholders.
- Translate donation UI strings to the fork language; do not change payment integration.

### Images (all categories — web only)
- **No** local flora/fauna assets (`public/images/plants/`, `public/images/animals/`) for jurisdiction content.
- Use `*-images.ts` URL maps (Wikimedia Commons direct URLs, verified HTTP 200).
- Categories: `plant-images.ts`, `animal-images.ts`, `food-images.ts`, `tourism-images.ts`, `history-images.ts`.
- In `*.defaults.ts`, set `image: ""`; resolve via `content/index.ts` + `mapItems(..., *_IMAGE_URLS)`.
- **Omit any item** without a valid, representative image (no wrong generic photos).
- No invented thumbnail sizes (`/800px-...` unless listed by Commons).

### Deploy
- **GitHub Pages only** via `github-pages.yml`.
- **Ignore** `deploy-main.yml` (Hostinger): leave file if present; do not fix FTP or add secrets.

### Scope
- Replicate existing UX: interactive map, 5 tabs (flora, fauna, food, tourism, history), `TopicImage` loading, spotlight panel.
- No new features (auth, CMS, admin).

---

## Orchestration: parallel agents

Launch these subagents (Task tool or manual phases). Merge when all complete.

### Agent 1 — Map & infrastructure
**Owner:** SVG → slugs → generated paths → types → routes → rebrand UI.

1. Copy `map.svgInput` → `map.svgDest`.
2. List all `<path id="...">` in SVG; create `scripts/map-id-to-slug.json` (human-readable slugs).
3. Generalize `scripts/extract-map-paths.mjs` to read `fork.config.json` + `map-id-to-slug.json` (stop hardcoding Argentina IDs).
4. Update `ProvinceSlug` / `StateSlug` union to match all slugs (+ inset territories if SVG has them).
5. Rename/adapt: map component, `mock-provinces.ts` → jurisdictions list, `province-spotlight.ts`, routing, `sitemap.ts`, metadata — **in fork language**.
6. Wire flora/fauna through `PLANT_IMAGE_URLS` / `ANIMAL_IMAGE_URLS` in `content/index.ts`.
7. Confirm donations unchanged except translated labels.
8. `npm run build` must pass.

### Agent 2 — Flora
- `plants.defaults.ts` + `plant-images.ts` for **every** jurisdiction.
- `itemsPerCategory` species; descriptions in fork language.
- Commons URLs only; skip items without images.

### Agent 3 — Fauna
- `animals.defaults.ts`, `animal-descriptions.ts` (canonical per species name), `animal-images.ts`.
- Same rules as flora.

### Agent 4 — Food
- `foods.defaults.ts` + `food-images.ts`.
- **Plate photos only**; skip dish if no verified image.

### Agent 5 — Tourism
- `tourism.defaults.ts` + `tourism-images.ts`.
- Cards + descriptions; verify URLs (use `scripts/patch-tourism-images.mjs` pattern: API + direct Commons URLs).

### Agent 6 — History
- `curiosities.defaults.ts` + `history-images.ts`.
- Kid-friendly historical facts per jurisdiction.

### Agent 7 — QA & deploy
- Script: validate all `*-images.ts` URLs (extend `scripts/validate-food-images.mjs` → all categories).
- `npm run dev` smoke test; all tabs render.
- Ensure `github-pages.yml` passes `PAYPAL_URL` secret when set.
- Push to `main` only if user asked; otherwise report ready.

**Coordination:** `item.name` in `*.defaults.ts` must **exactly match** keys in `*-images.ts`.

---

## Kickoff command (for the user)

After SVG + `fork.config.json` are in place, user says:

> Bootstrap map fork using fork.config.json

No other prompt required.

---

## Delivery checklist

- [ ] All SVG jurisdictions clickable on map
- [ ] One detail page per jurisdiction, 5 tabs
- [ ] Content language matches `fork.config.json`
- [ ] All content images are external URLs (no `/images/plants|animals/` for jurisdictions)
- [ ] Donations: QR + PayPal button; `PAYPAL_URL` secret documented; `.env` not committed
- [ ] `npm run build` → `out/` OK
- [ ] GitHub Pages workflow ready (Hostinger ignored)
- [ ] README fork section updated with country name

## Reference

See `docs/FORK_WORKFLOW.md` for human steps and `fork.config.example.json` for config fields.
