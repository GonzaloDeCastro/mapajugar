# Fork workflow — nuevo mapa por país

Plantilla reutilizable para crear forks (EE.UU., México, Brasil, etc.) **sin repetir un prompt largo**. Los agentes leen la skill del repo y un archivo de configuración mínimo.

## Qué hace el humano (2 pasos)

### 1. Configuración

```bash
cp fork.config.example.json fork.config.json
```

Editá `fork.config.json`:

| Campo | Ejemplo EE.UU. | Ejemplo Argentina (referencia) |
|-------|----------------|------------------------------|
| `country` | `United States` | `Argentina` |
| `language` | `en-US` | `es-AR` |
| `languageName` | `US English` | `Spanish (Argentina)` |
| `jurisdiction.singular` | `state` | `province` |
| `jurisdiction.plural` | `states` | `provinces` |
| `jurisdiction.routeSegment` | `states` | `provincias` |

`fork.config.json` **no se commitea** (está en `.gitignore`). Cada fork tiene el suyo.

### 2. Mapa SVG

Colocá el SVG con licencia en:

`public/inputs/assets/map.svg`

(o la ruta que indiques en `map.svgInput`).

## Qué hace Cursor (un solo mensaje)

En el chat del fork:

```
Bootstrap map fork using fork.config.json
```

Los agentes cargan automáticamente:

- `.cursor/skills/map-fork-bootstrap/SKILL.md` — orquestación completa
- `.cursor/rules/map-fork-bootstrap.mdc` — reglas cuando existe config o SVG

No hace falta pegar el prompt largo de flora/fauna/deploy.

## Agentes en paralelo

| Agente | Responsabilidad |
|--------|-----------------|
| Mapa e infra | SVG → slugs, paths, tipos, rutas, textos UI en idioma del país |
| Flora | `plants.defaults.ts` + `plant-images.ts` (URLs web) |
| Fauna | `animals.defaults.ts` + `animal-images.ts` + descripciones |
| Comidas | `foods.defaults.ts` + `food-images.ts` |
| Turismo | `tourism.defaults.ts` + `tourism-images.ts` |
| Historia | `curiosities.defaults.ts` + `history-images.ts` |
| QA y deploy | Validar URLs, build, GitHub Pages |

## Reglas fijas en todos los forks

### Idioma
Todo el contenido y la UI en el idioma de `fork.config.json` (`language` / `languageName`).

### Donaciones (igual en todos los forks)
- Mismo botón flotante, QR (`public/inputs/payments/QR_CODE.png`) y PayPal.
- **No** hardcodear URL de PayPal en el código.
- Local: `paypal_url` en `.env` (no commitear).
- Producción: secreto **`PAYPAL_URL`** en GitHub Actions (mismo nombre y misma URL de PayPal en todos los forks de la familia).
- Solo traducir los textos del panel de donación al idioma del país.

### Imágenes
- Flora, fauna, comidas, turismo e historia: **solo URLs web** (Wikimedia Commons verificadas).
- Sin `public/images/plants/` ni `public/images/animals/` para contenido de jurisdicciones.
- Sin ítem sin imagen válida.

### Deploy
- Solo **GitHub Pages** (`.github/workflows/github-pages.yml`).
- Ignorar **Hostinger** (`deploy-main.yml`).

## Archivos clave del workflow

```
fork.config.example.json     # Plantilla commiteada
fork.config.json             # Tu país (gitignored)
fork.config.schema.json      # Validación
public/inputs/assets/map.svg # Tu mapa
scripts/map-id-to-slug.json  # Generado: id SVG → slug
.cursor/skills/map-fork-bootstrap/SKILL.md
.cursor/rules/map-fork-bootstrap.mdc
```

## Checklist antes de pushear

- [ ] `npm run build` OK
- [ ] Idioma correcto en toda la UI
- [ ] Donaciones funcionan con `PAYPAL_URL` en GitHub Secrets
- [ ] `.env` no está en el commit
- [ ] GitHub Pages → Source → GitHub Actions
