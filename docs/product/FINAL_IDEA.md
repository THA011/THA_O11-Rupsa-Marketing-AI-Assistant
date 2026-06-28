# THA_O11 - RUPSA AI Intelligence Platform

## Working Decision

This project is no longer just a marketing poster tool. The working direction is **THA_O11 - RUPSA AI Intelligence Platform**, shortened to **RAIP**.

RUPSA SACCO is the first organization we are building around. The important design choice is that RUPSA should be a profile inside the platform, not a hard-coded limit. Later, the same system should be able to support another SACCO, school, NGO, church, hospital, or small business by changing the brand profile and campaign rules.

The project should stay thesis-sized for now. The bigger platform vision is useful, but it belongs in future work until the local demo, campaign workflow, and statistics contribution are solid.

## Plain-English Product Idea

The platform should help answer questions like:

- What campaign should we run?
- Who exactly is it for?
- What message is likely to be trusted?
- Which channel should we use first?
- How do we know whether it worked?

So the system is not only a content generator. It is meant to be a small decision-support workspace for campaign planning, brand control, statistics, and research.

The build should avoid the trap of becoming "many AI agents and no working demo." One useful tool that runs locally is better than a large folder tree full of unfinished modules.

## Product Name

**Platform name:** THA_O11 - RUPSA AI Intelligence Platform  
**Short name:** RAIP  
**First profile:** RUPSA SACCO  
**Category:** Local-first SACCO marketing, analytics, and research platform

## What Makes It Different

The statistics side is the strongest part of the idea. Plenty of tools can make a poster or caption. RAIP should go one step further and help score, compare, test, and explain campaigns.

The first version can use simple explainable scoring. Later versions can add proper campaign data, A/B testing, regression, segmentation, and forecasting.

A small RAG layer is also useful, but only for a narrow job: grounding marketing copy in real RUPSA documents. For example, loan terms, repayment periods, fees, or SOP language should come from approved documents instead of being guessed. That is worth building later. A general-purpose chatbot is not needed for the first demo.

## Core Parts

### Marketing Workspace

Creates campaign briefs, headlines, SMS copy, WhatsApp copy, email drafts, social captions, poster direction, and radio/video script ideas.

### Brand Profile

Stores the organization identity: colors, logo paths, tone, target audiences, approval steps, contact details, and rules that every campaign should respect.

### Statistics Layer

Starts with practical scoring and later grows into A/B testing, regression, correlation, clustering, forecasting, ROI analysis, and confidence intervals.

### Research Layer

Supports survey planning, methodology notes, data cleaning plans, report structure, and academic write-ups for a statistics project.

### Grounding Layer

Later, this can retrieve facts from RUPSA documents before campaign copy is generated. Keep it small: ingest, chunk, embed, store, retrieve, cite. Its job is to reduce wrong claims, not to become a separate chatbot product.

### Dashboard

Shows the campaign brief, draft output, score summary, next test recommendation, and eventually real performance data.

## First Build Scope

The first usable build should stay small:

1. Load the RUPSA brand profile.
2. Let the user create a campaign brief.
3. Produce local draft copy and a preview.
4. Save the latest brief in the browser.
5. Show simple scoring and a next-step recommendation.
6. Keep the website running on localhost without paid services.
7. Use the existing poster deck and campaign video as real example assets.

## Not in Scope Yet

These should wait until the local prototype feels solid:

- Paid AI provider integration.
- User accounts.
- Payment or subscription features.
- Live publishing to social media.
- Production database.
- Full statistical modelling.
- Large multi-agent automation.
- East Africa expansion or SaaS billing.

These can be described in the thesis as future work, but they should not block the local demo.

## Free Local Stack Direction

If the project later needs real AI without paid APIs, prefer local tools:

- **LLM:** Ollama with a small local model such as `llama3.1:8b` or `phi3`.
- **Embeddings:** `sentence-transformers`, for example `all-MiniLM-L6-v2`.
- **Vector store:** Chroma or FAISS.
- **Backend:** FastAPI.
- **Database:** SQLite until real multi-user storage is needed.
- **Frontend:** The current static site first; upgrade only when the workflow demands it.

Paid APIs can still be added later, but they should be optional adapters, not a requirement for the bachelor-project demo.

## Rule for Future Copies

When making a copy for another organization, start by creating a new brand profile. Do not duplicate the whole platform unless the new client truly needs a different workflow.

## Final Build Priority

The strongest final draft is:

1. A working website and campaign brief preview.
2. Existing poster/video assets organized as campaign media.
3. Brand profiles so RUPSA is configurable.
4. A small statistics/research path for the capstone.
5. Optional local RAG for factual grounding.

Everything else should be treated as future work.

