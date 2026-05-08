# Figma Storybook Autosync Enterprise

Enterprise-ready starter for syncing Figma file pages and nodes into Storybook.

## Features

- Page-wise Figma node discovery
- Auto-generated Storybook sections
- Design-token extraction: colors, typography, spacing
- Secure `.env` configuration
- Webhook endpoint for sync trigger
- Audit log for every sync
- Tailwind + React + Vite + Storybook
- Business-review friendly Storybook navigation

## Setup

```bash
npm install
cp .env.example .env
npm run enterprise:sync
npm run storybook
```

Open:

```bash
http://localhost:6006
```

## Environment

```env
FIGMA_TOKEN=your_figma_personal_access_token
FIGMA_FILE_ID=your_figma_file_id
FIGMA_ALLOWED_PAGE_REGEX=.*
FIGMA_WEBHOOK_SECRET=change-this-secret
PORT=5050
```

## Commands

```bash
npm run sync:figma
npm run generate:stories
npm run enterprise:sync
npm run storybook
npm run webhook
```

## Recommended Enterprise Flow

```text
Figma Designer Updates File
        ↓
Webhook / Manual Sync
        ↓
Fetch Figma File JSON
        ↓
Extract Pages + Nodes + Tokens
        ↓
Generate Storybook Stories
        ↓
Business Review in Storybook
```

## Notes

This does not magically convert every Figma design into perfect production code. It creates a reliable review layer and a scalable foundation for mapping Figma nodes to real enterprise React components.
