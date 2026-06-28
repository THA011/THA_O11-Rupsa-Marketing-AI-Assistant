# THA_O11 System Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│                       (Web Browser)                             │
│  Next.js Frontend (React) - http://localhost:3000              │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ↓ (HTTPS/REST)
┌─────────────────────────────────────────────────────────────────┐
│                       API GATEWAY                               │
│              (FastAPI + Load Balancer)                         │
│              http://localhost:8000                             │
└──────────────────────────┬──────────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ↓                 ↓                 ↓
    ┌──────────┐   ┌──────────────┐   ┌──────────────┐
    │ Business │   │ AI/ML        │   │ Statistics  │
    │ Logic    │   │ Engine       │   │ Module      │
    ├──────────┤   ├──────────────┤   ├──────────────┤
    │ Campaign │   │ Claude API   │   │ NumPy       │
    │ Manager  │   │ GPT-4        │   │ Pandas      │
    │ Analytics│   │ Templates    │   │ Scikit-learn│
    │ User Mgmt│   │ Generators   │   │ Statsmodels│
    └──────────┘   └──────────────┘   └──────────────┘
         ↓                 ↓                 ↓
         └─────────────────┼─────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ↓                 ↓                 ↓
    ┌──────────┐   ┌──────────────┐   ┌──────────────┐
    │PostgreSQL│   │ Redis Cache  │   │ File Storage│
    │Database  │   │ (Sessions)   │   │ (S3/Supabase│
    │          │   │              │   │              │
    └──────────┘   └──────────────┘   └──────────────┘
```

---

## Component Architecture

### Frontend (Next.js)
- **Pages:** Marketing, Analytics, Research, Account
- **Components:** Campaign Builder, Analytics Dashboard, Survey Tool
- **State Management:** Zustand
- **Styling:** Tailwind CSS
- **Charts:** Recharts, Plotly

### Backend (FastAPI)
- **Endpoints:** REST API organized by domain
  - `/api/campaigns/*` — Campaign management
  - `/api/users/*` — User accounts
  - `/api/analytics/*` — Analytics queries
  - `/api/ai/*` — AI content generation
  - `/api/research/*` — Research tools

### AI Engine
- **Prompt Management:** System prompts for each campaign type
- **Template System:** Campaign templates (ad, poster, video, etc.)
- **Generators:** Content generation logic for each format
- **LLM Integration:** Claude 3 Opus + GPT-4

### Statistics Module
- **Data Preprocessing:** Cleaning, normalization
- **Exploratory Analysis:** Describe, correlate
- **Modeling:** Regression, classification, clustering
- **Forecasting:** Time series models
- **Visualization:** Dashboards, reports

### Database
- **PostgreSQL:** Relational data store
- **Redis:** Session cache, task queue
- **Alembic:** Schema migrations

---

## Data Flow

### Campaign Generation Flow
```
User Input
    ↓
Campaign Type Selection
    ↓
Audience Specification
    ↓
AI Engine Prompting (Claude/GPT)
    ↓
Content Generation
    ↓
Image/Video Processing
    ↓
Database Storage
    ↓
Preview & Approval
    ↓
Publication
```

### Analytics Flow
```
Campaign Published
    ↓
Track Events (Impressions, Clicks, Conversions)
    ↓
Analytics Service Aggregates
    ↓
Statistical Models Process
    ↓
Dashboards Update
    ↓
Reports Generated
```

### Research Flow
```
Survey Design
    ↓
Survey Distribution
    ↓
Response Collection
    ↓
Data Validation
    ↓
Statistical Analysis
    ↓
Academic Report Generation
    ↓
Export (APA, Excel, SPSS)
```

---

## Technology Stack Details

### Frontend Stack
```
Next.js 14 (React 18)
├── Pages (app router)
├── Components (modular)
├── Hooks (custom state logic)
├── Utils (helpers)
└── Styles (Tailwind + CSS Modules)
```

### Backend Stack
```
FastAPI
├── Routes (API endpoints)
├── Models (Pydantic validators)
├── Services (business logic)
├── Middleware (auth, logging)
├── Database (SQLAlchemy ORM)
└── Utils (helpers)
```

### AI/ML Stack
```
LLM APIs
├── Claude 3 (Anthropic)
├── GPT-4 (OpenAI)
└── Prompt templates

ML Libraries
├── Scikit-learn (modeling)
├── NumPy/Pandas (data)
├── SciPy (statistics)
└── Statsmodels (time series)
```

---

## Deployment Architecture

### Development
```
Local Machine
├── Frontend (npm run dev) :3000
├── Backend (uvicorn) :8000
├── PostgreSQL (Docker) :5432
└── Redis (Docker) :6379
```

### Production (AWS/GCP)
```
Cloud Provider
├── Frontend (Vercel / CloudFlare)
├── Backend (ECS / Cloud Run)
├── Database (RDS PostgreSQL)
├── Cache (ElastiCache Redis)
└── Storage (S3 / Cloud Storage)
```

### Docker Compose
```yaml
services:
  frontend:
    build: ./frontend
    ports: [3000:3000]
  backend:
    build: ./backend
    ports: [8000:8000]
  postgres:
    image: postgres:15
    ports: [5432:5432]
  redis:
    image: redis:7
    ports: [6379:6379]
```

---

## Security Architecture

1. **Authentication:** JWT tokens + refresh tokens
2. **Authorization:** Role-based access control (RBAC)
3. **Encryption:** TLS for transport, AES-256 for sensitive data
4. **API Security:** Rate limiting, CORS, input validation
5. **Database:** Row-level security (RLS)
6. **Secrets Management:** Environment variables, vault

---

## Scalability Considerations

- **Horizontal Scaling:** Load balancer → multiple backend instances
- **Caching:** Redis for frequently accessed data
- **Task Queue:** Celery for async AI generation
- **Database Optimization:** Indexing, partitioning
- **CDN:** CloudFlare for static assets
- **Auto-scaling:** Based on CPU/memory metrics

---

## Integration Points

```
External Services:
├── LLM APIs (Claude, GPT-4)
├── Email Service (SMTP/SendGrid)
├── Cloud Storage (S3)
├── Analytics (Sentry, Mixpanel)
└── Payment (Stripe - future)
```
