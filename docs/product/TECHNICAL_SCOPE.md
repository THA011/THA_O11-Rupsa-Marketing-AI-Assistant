# Technical Scope

This file keeps the build grounded. It separates what is useful now from what can wait.

## Build Now

- Static local website.
- RUPSA brand profile.
- Campaign brief preview.
- Browser-only draft saving.
- Existing poster deck and video as campaign assets.
- Simple scoring for campaign clarity, brand fit, and audience match.
- Research/statistics notes that can support the capstone.

## Build Next

- Load audience and channel options from `brand-profiles/rupsa-sacco.json`.
- Generate structured local outputs: headline, CTA, SMS, WhatsApp copy, and email draft.
- Export campaign briefs to JSON or CSV.
- Add a research notes page.

## Build Later

- FastAPI backend.
- SQLite saved campaigns.
- Small RAG workflow over approved RUPSA documents.
- Local Ollama adapter for text generation.
- Chroma or FAISS vector store.
- `sentence-transformers` embeddings.

## Avoid for the First Demo

- Multi-agent automation teams.
- Paid API dependencies.
- Production SaaS billing.
- Complex branch/release workflows.
- PostgreSQL before there are real multi-user needs.
- Advanced modelling that is not supported by collected data.

## RAG Boundary

Use retrieval only for facts that should not be guessed:

- Loan terms.
- Repayment periods.
- Fees.
- Eligibility rules.
- SOP wording.
- Approved compliance language.

Do not build a general chatbot unless the campaign workflow proves it is needed.

## Suggested Local Stack

```text
Frontend: current static HTML/CSS/JS
Backend: FastAPI when needed
Database: SQLite first
LLM: Ollama local model when needed
Embeddings: sentence-transformers
Vector store: Chroma or FAISS
Stats: pandas, scipy, statsmodels, scikit-learn
```

