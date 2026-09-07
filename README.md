# MVM OS

Digital operating system for **MVM Packaging** — *Primary Packaging for Beauty Brands*.

This repository contains the technical and operational assets used to build and run the MVM Packaging project. Notion remains the operational source of truth for live commercial data; GitHub is the version-controlled home for website code, documentation, automation definitions, content assets and structured exports.

## Project structure

- `brand/` — brand rules, identity assets and approved positioning
- `content/` — website and LinkedIn content source files
- `database/` — structured product-data exports, schemas and data-processing notes
- `docs/` — project decisions, architecture and roadmap
- `n8n/` — automation documentation and workflow exports
- `notion/` — Notion workspace structure and synchronization rules
- `prompts/` — reusable AI prompts and operating instructions
- `website/` — MVM Packaging website (Next.js)

## Core commercial rules

- Brand: MVM Packaging
- Domain: `mvmpackaging.com`
- Payoff: **Primary Packaging for Beauty Brands**
- Target: premium beauty and skincare brands, with an initial focus on companies up to €25M turnover
- Reference MOQ: **5,000 pcs**
- Reference lead time: **3 months**
- Samples: **to be verified case by case**

## Systems

- **Notion** — products, CRM, suppliers, marketing, roadmap and document index
- **GitHub** — source code, documentation, automation definitions and version control
- **Google Drive** — technical/product documents when connected
- **n8n** — workflow automation layer
- **Vercel** — intended website deployment platform

## Website development

```powershell
cd website
npm install
npm run dev
```

See `docs/ARCHITECTURE.md` and `docs/ROADMAP.md` for the current operating model and next steps.
