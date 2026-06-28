# Website Notes

This folder contains the working local website for THA_O11 RAIP.

It is static on purpose. The goal is to shape the campaign workflow first, then connect backend storage and real AI tools later.

## Run Locally

From the project root:

```bash
npm run dev
```

On this Windows PowerShell setup, use this if `npm.ps1` is blocked:

```bash
npm.cmd run dev
```

Then open:

```text
http://localhost:3000
```

No paid services, API keys, databases, or subscriptions are required.

## Pages

- `index.html` - Home page
- `about.html` - About RAIP
- `services.html` - Services overview
- `platform.html` - Local campaign brief preview
- `contact.html` - Local contact and intake note

## Local Storage

The website stores two browser-only drafts:

- `raipCampaignBrief` from the Platform page.
- `raipContactDraft` from the Contact page.

This is temporary prototype behavior, not permanent data storage.
