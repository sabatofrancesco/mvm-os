# n8n

Automation layer for the MVM Packaging operating system.

## Intended workflows

1. Product-data synchronization / controlled exports from Notion.
2. Technical-document intake and matching to product references.
3. Prospecting enrichment and CRM workflow support.
4. Website catalogue publishing pipeline.
5. Marketing / LinkedIn content workflow.
6. Operational notifications and data-quality checks.

## Repository policy

Export reusable n8n workflow definitions to this folder after they are tested. Never commit passwords, API keys, OAuth tokens or other secrets. Store credentials only in the appropriate connected service / n8n credential store.

Each workflow should document:
- purpose
- trigger
- inputs
- outputs
- connected systems
- required credentials (names only, never values)
- failure handling
