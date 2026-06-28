# Product Roadmap

This roadmap is deliberately practical. The goal is to get a working local product first, then add heavier AI and statistics later. The big platform vision stays useful, but only after the demo and thesis contribution work.

## Phase 1 - Local RUPSA Prototype

Build a website that explains the product and gives a small working campaign brief preview.

Done when:

- The site runs on localhost.
- Home, About, Services, Platform, and Contact pages work.
- The Platform page can update a campaign preview from form inputs.
- The latest campaign brief is saved in browser storage.
- The repo has clear run instructions.

## Phase 2 - Brand Profile Driven Campaigns

Move campaign rules out of page copy and into brand profile data.

Build:

- Brand profile loader.
- RUPSA profile validation.
- Audience list pulled from profile data.
- Channel list pulled from profile data.
- Contact details and brand rules shown in the UI.

Done when:

- A new brand profile can change the campaign options without editing page HTML.

## Phase 3 - Content and Scoring Engine

Add local generation logic before connecting external AI tools.

Build:

- Campaign brief schema.
- Draft headline generator.
- Draft CTA generator.
- Channel-specific copy templates.
- Explainable scoring for clarity, brand fit, audience fit, and test readiness.

Done when:

- A user can create a useful first draft and understand why it received its score.

## Phase 4 - Research and Statistics

Start turning campaign work into analysis material.

Build:

- A/B test planner.
- Survey question templates.
- Campaign result entry form.
- CSV export.
- Research notes export.
- Basic charts.

Done when:

- Campaign assumptions, variants, and results can be exported for analysis.

## Phase 5 - Small Grounding Layer

Add a narrow RAG workflow only for approved RUPSA facts.

Build:

- Document folder for SOPs, loan-product notes, and approved marketing rules.
- Ingestion script.
- Chunking and local embeddings.
- Local Chroma or FAISS store.
- Retrieval function that returns source snippets for campaign claims.

Done when:

- A campaign draft can avoid guessing factual loan or policy details.

## Phase 6 - Backend and Local AI

Only add this after the local workflow is clear.

Build:

- FastAPI backend.
- SQLite storage for the first backend version.
- Saved campaigns.
- Local Ollama adapter if real text generation is needed.
- Proper analytics records.

Done when:

- Campaigns can be saved, reopened, generated, scored, and reported from stored data.

## Phase 7 - Multi-Organization Platform

Turn the RUPSA prototype into a reusable platform.

Build:

- Organization switcher.
- Separate brand profiles.
- Separate campaign libraries.
- Role-based approval steps.
- Client-specific templates.

Done when:

- A second organization can be added without rewriting the core workflow.

## Future Work Only

Keep these out of the first build:

- Multi-agent automation teams.
- Paid SaaS billing.
- Production user management.
- Social media publishing integrations.
- Advanced modelling beyond the collected data.

