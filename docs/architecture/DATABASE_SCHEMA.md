# THA_O11 Database Schema

## Overview
PostgreSQL-based relational database with focus on users, campaigns, analytics, and research data.

---

## Core Tables

### `organizations`
Top-level client/account boundary. RUPSA is the first organization, but the platform must support more clients later.

```sql
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  organization_type VARCHAR(100) NOT NULL,
  country VARCHAR(100) DEFAULT 'Kenya',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### `brand_profiles`
Configurable brand identity and operating rules for each organization.

```sql
CREATE TABLE brand_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID NOT NULL REFERENCES organizations(id),
  profile_slug VARCHAR(120) UNIQUE NOT NULL,
  primary_color VARCHAR(20) NOT NULL,
  secondary_color VARCHAR(20) NOT NULL,
  background_color VARCHAR(20) NOT NULL,
  font_family VARCHAR(255),
  logo_path VARCHAR(512),
  tagline VARCHAR(255),
  contact_details JSONB,
  audiences JSONB,
  channels JSONB,
  tone_of_voice JSONB,
  marketing_rules JSONB,
  approval_workflow JSONB,
  analytics_goals JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### `users`
User account management with roles.

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role ENUM('admin', 'manager', 'analyst', 'user') DEFAULT 'user',
  organization_id UUID REFERENCES organizations(id),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);
```

### `campaigns`
Marketing campaign records.

```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID NOT NULL REFERENCES organizations(id),
  brand_profile_id UUID REFERENCES brand_profiles(id),
  user_id UUID NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  campaign_type ENUM('ad', 'poster', 'video', 'email', 'sms', 'social') NOT NULL,
  target_audience_id UUID,
  status ENUM('draft', 'published', 'archived', 'analyzing') DEFAULT 'draft',
  budget DECIMAL(10, 2),
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  content_generated BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### `audiences`
Segmented audience profiles.

```sql
CREATE TABLE audiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  age_min INT,
  age_max INT,
  occupation VARCHAR(100),
  location VARCHAR(100),
  income_level ENUM('low', 'middle', 'upper') ,
  interests TEXT[],
  language VARCHAR(50) DEFAULT 'en',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### `campaign_assets`
Generated content files (images, videos, etc).

```sql
CREATE TABLE campaign_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  campaign_id UUID NOT NULL REFERENCES campaigns(id),
  asset_type ENUM('image', 'video', 'text', 'audio'),
  file_path VARCHAR(512),
  file_size INT,
  generated_at TIMESTAMP DEFAULT NOW()
);
```

### `analytics_events`
Track user interactions and campaign performance.

```sql
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  campaign_id UUID REFERENCES campaigns(id),
  event_type VARCHAR(50),
  impressions INT DEFAULT 0,
  clicks INT DEFAULT 0,
  conversions INT DEFAULT 0,
  engagement_rate DECIMAL(5, 2),
  roi DECIMAL(10, 2),
  recorded_at TIMESTAMP DEFAULT NOW()
);
```

### `research_surveys`
Survey data for academic research.

```sql
CREATE TABLE research_surveys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  respondent_count INT DEFAULT 0,
  created_by UUID REFERENCES users(id),
  status ENUM('draft', 'active', 'closed', 'analyzing'),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### `research_responses`
Individual survey responses.

```sql
CREATE TABLE research_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  survey_id UUID NOT NULL REFERENCES research_surveys(id),
  respondent_id VARCHAR(100),
  response_data JSONB,
  age_group VARCHAR(20),
  occupation VARCHAR(100),
  location VARCHAR(100),
  income_level VARCHAR(20),
  submitted_at TIMESTAMP DEFAULT NOW()
);
```

### `statistical_models`
Saved ML/statistical models.

```sql
CREATE TABLE statistical_models (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  model_type ENUM('regression', 'classification', 'clustering', 'timeseries'),
  description TEXT,
  model_binary BYTEA,
  accuracy DECIMAL(5, 4),
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### `research_outputs`
Academic reports and publications.

```sql
CREATE TABLE research_outputs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  abstract TEXT,
  methodology TEXT,
  findings TEXT,
  author_id UUID REFERENCES users(id),
  status ENUM('draft', 'submitted', 'published', 'rejected'),
  publication_date TIMESTAMP,
  file_path VARCHAR(512),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Indexes

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_organization_id ON users(organization_id);
CREATE INDEX idx_brand_profiles_organization_id ON brand_profiles(organization_id);
CREATE INDEX idx_campaigns_user_id ON campaigns(user_id);
CREATE INDEX idx_campaigns_organization_id ON campaigns(organization_id);
CREATE INDEX idx_campaigns_status ON campaigns(status);
CREATE INDEX idx_analytics_campaign_id ON analytics_events(campaign_id);
CREATE INDEX idx_research_responses_survey_id ON research_responses(survey_id);
```

---

## Relationships Diagram

```
users (1) ──→ (many) campaigns
users (1) ──→ (many) research_surveys
campaigns (1) ──→ (many) campaign_assets
campaigns (1) ──→ (many) analytics_events
audiences (1) ──→ (many) campaigns
research_surveys (1) ──→ (many) research_responses
statistical_models (many) ──→ (used_by) campaigns
```

---

## Migration Strategy

## Updated Multi-Organization Relationships

```text
organizations (1) -> (many) users
organizations (1) -> (many) brand_profiles
organizations (1) -> (many) campaigns
brand_profiles (1) -> (many) campaigns
users (1) -> (many) campaigns
users (1) -> (many) research_surveys
campaigns (1) -> (many) campaign_assets
campaigns (1) -> (many) analytics_events
audiences (1) -> (many) campaigns
research_surveys (1) -> (many) research_responses
statistical_models (many) -> (used_by) campaigns
```

---

Migrations managed with Alembic:

```bash
# Generate migration
alembic revision --autogenerate -m "Add new table"

# Apply migration
alembic upgrade head

# Rollback
alembic downgrade -1
```
