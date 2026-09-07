# MVM OS — Architecture

## System of record

MVM uses a hub-and-spoke operating model.

### Notion — operational hub
Owns live products, CRM/prospects, suppliers, marketing calendar, roadmap/tasks and document-status information.

### GitHub — technical/version-control hub
Owns website source code, schemas, documentation, reusable prompts, automation definitions and controlled data snapshots.

### Google Drive — document repository
Intended for binary working assets and product documentation such as PA, SSH, TD, TS, images and presentations.

### n8n — automation layer
Moves validated information between systems and performs scheduled/event-driven processing.

### Vercel — website delivery
Intended build/deployment platform for the public MVM Packaging website.

## Data flow

```text
Manufacturers / public sources / technical files
                  |
                  v
               Notion
        (validated live data)
          /        |        \
         v         v         v
      GitHub      n8n     Google Drive
         \         |         /
          \        v        /
           ---> Website <---
                Vercel
```

## Governance

- One authoritative owner for each data class.
- No secrets in GitHub.
- No invented product specifications.
- Public website data must be a validated subset of the operational catalogue.
- Reference code is the primary product deduplication key.
- Automation failures must not silently overwrite validated data.
