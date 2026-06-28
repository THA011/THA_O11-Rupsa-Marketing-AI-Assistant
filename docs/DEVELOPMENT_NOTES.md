# Development Notes

These notes are for the next person opening the project, including future me.

## Current State

The working product is a static website in `website/`. It runs locally and does not need paid APIs, a database, accounts, or external services.

The backend, database, AI engine, and statistics folders are planning space for the next build phases. Do not assume they are production-ready yet.

The current project should stay realistic: one working local demo, organized campaign assets, and a statistics/research path. Larger platform ideas belong in future work until the basic workflow is finished.

## Run the Website

From the project root:

```bash
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

`npm run dev` is also fine in shells where PowerShell execution policy does not block `npm.ps1`.

## Quick Checks

Use these before committing:

```bash
npm.cmd run build
node --check website/scripts/site.js
```

Then open these pages:

```text
http://localhost:3000/
http://localhost:3000/about.html
http://localhost:3000/services.html
http://localhost:3000/platform.html
http://localhost:3000/contact.html
```

## Troubleshooting

### `npm.ps1 cannot be loaded`

Cause: PowerShell execution policy is blocking npm's PowerShell wrapper.

Fix:

```bash
npm.cmd run dev
```

### Port `3000` is already in use

Cause: Another local server is already running.

Fix:

```bash
python -m http.server 3001 -d website
```

Then open:

```text
http://localhost:3001
```

### Changes do not show in the browser

Cause: The browser may be showing a cached static file.

Fix:

- Hard refresh the page.
- Check that the server is running from the project root.
- Confirm the file was edited inside `website/`.

## Website Editing Rules

- Keep pages static until the product workflow is clearer.
- Avoid paid services or API keys in the local prototype.
- Use plain copy that a SACCO manager or marketing officer can understand.
- Keep RUPSA-specific data in `brand-profiles/rupsa-sacco.json` where possible.
- Add comments only when they explain a design or behavior decision.

## Branch Workflow

Keep Git simple:

```text
main        always demo-able
dev         integration branch for active work
feature/*   one feature at a time
```

For a solo academic project, avoid release branches and complicated Git flows. Use clear commits such as:

```text
feat: load RUPSA brand profile
fix: preserve campaign draft in local storage
docs: clarify local setup
```

## Local AI Direction

If AI is added without paid APIs, prefer:

- Ollama for a local LLM.
- `sentence-transformers` for embeddings.
- Chroma or FAISS for local retrieval.
- SQLite for early saved campaigns.

Use RAG only where it has a clear job: grounding factual campaign claims in approved RUPSA documents. Do not build a general chatbot until the campaign workflow needs it.

## Next Useful Work

1. Load audience/channel options from `brand-profiles/rupsa-sacco.json`.
2. Add a small campaign output section with headline, CTA, SMS, and WhatsApp copy.
3. Export the local brief to JSON or CSV.
4. Add a simple research notes page.
5. Add a small RAG proof-of-concept for approved RUPSA facts.
6. Add backend storage only after the local workflow is useful.

