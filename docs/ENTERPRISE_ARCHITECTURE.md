# Enterprise Architecture

## Modules

1. Figma Sync Layer
   - Reads full file from Figma API
   - Filters pages by regex
   - Flattens reviewable nodes
   - Extracts basic design tokens

2. Story Generator
   - Creates page-wise Storybook routes
   - Adds metadata for node type, size, and Figma link
   - Keeps business review simple

3. Component Registry
   - Maps Figma node names to real React components
   - Supports gradual migration from preview to production components

4. Webhook Server
   - Accepts secure webhook trigger
   - Runs sync pipeline
   - Writes audit logs

## Enterprise Controls

- Environment-based secret handling
- Webhook signature validation
- Audit files under `/audit`
- Page allowlist via `FIGMA_ALLOWED_PAGE_REGEX`
- No token committed to git

## Suggested CI/CD

```yaml
on:
  workflow_dispatch:
  repository_dispatch:

jobs:
  sync-storybook:
    steps:
      - checkout
      - npm ci
      - npm run enterprise:sync
      - npm run build-storybook
```
