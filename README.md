# THA_O11 - RUPSA AI Intelligence Platform

RAIP is a local-first campaign workspace for RUPSA SACCO. The first version is a static website that explains the product idea and gives a working campaign brief preview. It does not need paid APIs, accounts, databases, or subscriptions.

The longer-term direction is a reusable platform for SACCO marketing, campaign scoring, research notes, and business intelligence. RUPSA is the first profile, not the only possible client.

## What Works Now

- Local website running on `http://localhost:3000`.
- Home, About, Services, Platform, and Contact pages.
- Campaign preview form on the Platform page.
- Simple deterministic campaign scoring.
- Local browser storage for the latest campaign brief.
- Local browser storage for Contact page notes.
- RUPSA brand profile JSON.
- Product notes, roadmap, module notes, and copy strategy.

## Run Locally

From the project root:

```bash
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

`npm run dev` also works in shells where PowerShell does not block `npm.ps1`.

## Quick Checks

```bash
npm.cmd run build
node --check website/scripts/site.js
```

Then check these pages in the browser:

```text
http://localhost:3000/
http://localhost:3000/about.html
http://localhost:3000/services.html
http://localhost:3000/platform.html
http://localhost:3000/contact.html
```

## Folder Map

```text
website/                 Working static website
brand-profiles/          RUPSA profile and reusable profile schema
docs/product/            Product direction, roadmap, modules, copy strategy
docs/architecture/       Database and architecture notes
docs/DEVELOPMENT_NOTES.md Practical build notes for the next developer
assets/brand/            Brand guidelines
assets/images/           Poster deck and exported campaign video
backend/                 Future backend area
database/                Future database area
statistics/              Future statistics area
research/                Future research area
```

## Product Direction

The platform should help a user move from a rough marketing request to a clear campaign decision:

1. Define the campaign goal.
2. Choose the audience and channel.
3. Draft the message.
4. Check brand fit and clarity.
5. Decide what to test next.
6. Save evidence for reporting and research.

The important rule is simple: keep reusable workflow in the platform and keep client-specific details in brand profiles.

## Key Docs

- [Final idea](docs/product/FINAL_IDEA.md)
- [Roadmap](docs/product/ROADMAP.md)
- [Modules](docs/product/MODULES.md)
- [Copy strategy](docs/product/COPY_STRATEGY.md)
- [Development notes](docs/DEVELOPMENT_NOTES.md)
- [RUPSA brand profile](brand-profiles/rupsa-sacco.json)

## Current Limits

This is not yet a production web app. The current build is intentionally local and static while the workflow is being refined.

Not connected yet:

- Real AI providers.
- User accounts.
- Backend storage.
- PostgreSQL.
- Live social publishing.
- Payment or subscription features.

## Next Good Build

Load `brand-profiles/rupsa-sacco.json` into the Platform page so the audience and channel options come from profile data instead of being written directly in HTML.

