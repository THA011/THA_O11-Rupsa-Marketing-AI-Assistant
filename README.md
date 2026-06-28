# THA_O11 - RUPSA AI Intelligence Platform

## SACCO Marketing, Statistics, Research, and Business Intelligence

**Status:** Product direction finalized; scaffold in development  
**Version:** 0.1.0  
**Short name:** RAIP  
**First client/profile:** RUPSA Regulated NWDT Sacco Ltd  
**Target audience:** Kenyans aged 30-90 years  
**Primary use:** Marketing automation + statistical decision support + research reporting

---

## Project Overview

THA_O11 - RUPSA AI Intelligence Platform (RAIP) is an enterprise-grade AI platform that starts with RUPSA SACCO but is designed to become a configurable multi-organization system.

The original "RUPSA Marketing AI Assistant" is now treated as the first module and first client profile, not the full limit of the product. The bigger goal is an AI operating platform for SACCO marketing, research, statistics, brand management, content production, and business intelligence.

RAIP combines:

- **Marketing Automation** - Generate ads, posters, flyers, scripts, email, SMS, and social content.
- **AI Intelligence** - Audience segmentation, smart messaging, prompt engineering, and brand-aware recommendations.
- **Statistical Analytics** - Predictive models, campaign ROI, customer insights, A/B testing, and confidence intervals.
- **Research Framework** - Bachelor's statistics capstone project foundation with survey and reporting support.
- **Multi-Organization Profiles** - RUPSA is the first profile; later clients can reuse the same system through brand profiles.

Product decision docs:

- [Final Idea](docs/product/FINAL_IDEA.md)
- [Roadmap](docs/product/ROADMAP.md)
- [Modules](docs/product/MODULES.md)
- [Copy Strategy](docs/product/COPY_STRATEGY.md)
- [RUPSA Brand Profile](brand-profiles/rupsa-sacco.json)

---

## Brand

**THA_O11** means **Thriving.Horned.Artistry**.

Brand focus:

- Artistic marketing with statistical rigor.
- Practical tools for SACCO growth.
- Evidence-based campaign decisions.
- Kenyan market context.

Primary colors:

- Lime Green: `#00FF00`
- Black: `#000000`
- White: `#FFFFFF`

---

## Core Modules

### Marketing AI

Campaign planning, posters, social posts, WhatsApp graphics, SMS, email, video scripts, slogans, CTAs, and radio scripts.

### Brand AI

Brand profile loading, colors, logo paths, tone of voice, design rules, contact details, and approval requirements.

### Statistics AI

A/B testing, campaign scoring, regression, logistic regression, ANOVA, correlation, clustering, PCA, forecasting, ROI analysis, and confidence intervals.

### Research AI

Survey design, data cleaning, literature review support, methodology drafting, APA-style reporting, and export-ready research outputs.

### Prompt Engineering AI

Optimized prompts for ChatGPT, Claude, Gemini, Midjourney, Runway, Veo, Sora, Leonardo, Canva AI, and related tools.

### Executive Dashboard

Campaign performance, customer intelligence, predicted engagement, conversion probability, ROI, and research summaries.

---

## Project Structure

```text
THA_O11-Rupsa-Marketing-AI-Assistant/
  ai-engine/              Prompt templates and generators
  assets/                 Brand assets, icons, images, and templates
  backend/                FastAPI backend scaffold
  brand-profiles/         Multi-organization brand configuration
  database/               Migrations and schemas
  deployment/             Docker/cloud deployment files
  docs/
    architecture/         System and database architecture
    product/              Final idea, roadmap, modules, copy strategy
    research/             Research methodology notes
  frontend/               Next.js frontend scaffold
  research/               Survey data, datasets, and reports
  statistics/             Analysis and statistical models
  tests/                  Frontend, backend, and AI tests
```

---

## Multi-Organization Strategy

RUPSA is the first client profile. Future organizations should be added through `brand-profiles/` instead of hard-coding new behavior.

Each profile can define:

- Organization name and type.
- Logo, colors, typography, and tagline.
- Contact details.
- Target audiences.
- Supported channels.
- Tone of voice.
- Marketing rules.
- Approval workflow.
- Analytics goals.

Use [brand-profiles/template.json](brand-profiles/template.json) when making a later copy for another organization.

---

## Tech Stack

Frontend:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zustand
- Recharts or Plotly

Backend:

- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- Redis
- Celery

AI and analytics:

- OpenAI / Anthropic / other LLM APIs
- Pandas
- NumPy
- SciPy
- Scikit-learn
- Statsmodels
- Matplotlib / Plotly / Seaborn

---

## Development Setup

For the current local website prototype:

```bash
npm run dev
```

On this Windows PowerShell setup, use this if `npm.ps1` is blocked:

```bash
npm.cmd run dev
```

Expected local service:

- Website: `http://localhost:3000`

Future backend setup will use:

```bash
pip install -r requirements.txt
cp .env.example .env
python -m uvicorn backend.main:app --reload
```

## Local Website Prototype

The current working website is in [website](website/). It is a static local prototype with pages for Home, About, Services, Platform Preview, and Contact.

Run it from the project root:

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

This prototype does not require paid APIs, API keys, databases, external AI services, or subscriptions.

---

## Build Order

1. Load and validate the RUPSA brand profile.
2. Build campaign brief creation.
3. Generate branded copy for WhatsApp, SMS, Facebook, Instagram, email, and posters.
4. Add simple explainable campaign scoring.
5. Add analytics tracking and A/B test planning.
6. Add research/report export.
7. Add multi-organization profile switching.

---

## Current Decision

The finalized direction is:

> Build RAIP as a reusable AI intelligence platform, with RUPSA SACCO as the first configured client and marketing AI as the first module.
