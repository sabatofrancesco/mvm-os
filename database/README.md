# Product Database

This folder contains version-controlled schemas, exports and utilities related to the MVM Packaging product catalogue.

## Source of truth

The live product database is maintained in **Notion**. GitHub should contain reproducible exports, schemas, validation rules and automation code — not an independent manually maintained catalogue.

## Core product fields

- Product
- Category
- Source Manufacturer
- Reference
- Capacity
- Material
- MOQ
- Lead Time
- Samples
- Decoration
- PA
- SSH
- TD
- TS
- Product URL
- Notes

## Standard defaults

- MOQ: `5000`
- Lead Time: `3 months`
- Samples: `To verify`
- PA / SSH / TD / TS: `false` until the relevant document is available

## Quality rules

1. Deduplicate by `Reference` before importing.
2. Use the primary product category; do not duplicate products merely because they also carry Sustainable or Innovation tags.
3. Do not invent missing technical data.
4. Record the direct official product URL when verified; otherwise use the official category/archive URL.
5. Preserve the actual source manufacturer.
6. Audit duplicate references and incomplete records before publishing data to the website.

Technical documents expected for later enrichment:
- PA — Print / Decoration Area
- SSH — Sales Sheet
- TD — Technical Drawing / Assembly
- TS — Technical Specification
