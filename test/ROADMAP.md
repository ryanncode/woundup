## AI Developer Handover: "Wound Up Here" Platform Architecture

This document serves as the foundational architecture and context guide for the next AI assisting with the "Wound Up Here" platform. The project is an indie-developed, highly curated DJ mix rotation and streaming service built to solve the "Discovery Gap." It actively rejects mainstream collaborative filtering in favor of a Content-Based Trajectory Engine that honors the sonic journey of underground electronic music.

The current skeleton consists of a Next.js frontend utilizing Vidstack for media playback, a Python (FastAPI) ingestion engine, and a Supabase (PostgreSQL + pgvector) database infrastructure.

Here are the core features and logical frameworks to be implemented next.

### 1. The Ingestion Engine (Metadata & Embeddings)

We are bypassing the exorbitant compute costs of processing raw audio files. The platform streams existing YouTube and Mixcloud URLs while acting as a highly intelligent curation layer.

**The Tech Stack:** Gemini API (Gemini 3 Flash-Lite) utilizing "Grounding with Google Search".

* **Permanent Tag Generation:** We use Gemini's search grounding to deeply research a provided Mixcloud/YouTube URL. The API must scrape tracklists from niche forums (e.g., 1001Tracklists, Discogs) and synthesize them into permanent, highly structured JSON tags (BPM, Energy Level, Mood, Sub-genre, and Venue context) (Google Cloud 2026).
* **Vector Embeddings:** During ingestion, the AI generates a vector embedding representing the total semantic profile of the mix's metadata, storing it directly into Supabase via `pgvector`.
* **Hybrid Intake Pipeline:**

* *Automated:* A Supabase `pg_cron` Edge Function polls RSS feeds of curated YouTube/Mixcloud channels, pushing new URLs to an `ingestion_queue` table.
* *Manual:* A gated HTML form allows manual seeding of tracks. Both methods route through a single Processing Worker that handles the Gemini API call to ensure uniform tag and embedding generation.

### 2. The Content-Based Trajectory Engine (Auto-Play Logic)

Mainstream auto-play algorithms fail because they rely on what other users clicked. This platform calculates the next track mathematically based on sonic continuity and the user's initial vibe.

**The Session State Logic:**
When a user begins listening, the backend initializes a Session State containing an **Anchor Intent** (the original search context), the **Current Asset** (the active mix's metadata), and an **Energy Delta**.

**The Queue Calculation (Supabase Hybrid Query):**
During the final 15 minutes of the current mix, the backend executes a transition query using the exit parameters (Exit BPM, Exit Energy, Dominant Sub-genre) of the playing track.

1. **SQL Hard Filters:** Traditional database logic immediately excludes the currently playing creator (to prevent looping), any mix played for this user in the last 48 hours, and any track outside a strict BPM variance.
2. **pgvector Vibe Matching:** The remaining candidates are scored by calculating their geometric proximity to both the current mix's exit trajectory and the original Anchor Intent to prevent genre drift.

### 3. Vector Space Dominance Mitigation

To prevent prolific creators with hundreds of uploads from dominating the vector space and suffocating niche DJs, the scoring algorithm must include strict density penalties.

When implementing the database logic, apply these three guardrails:

* **Inverse Frequency Multiplier:** Apply a mathematical handicap to the vector similarity score based on the creator's total footprint in the database.
* **Top-K Randomizer:** Instead of pulling the absolute closest vector match, pull the top 50 matches and apply a weighted lottery to give low-density creators equal footing.
* **Forced Discovery Slot:** Track the user's recent history. If the last three mixes belong to high-volume creators, temporarily exclude all high-volume artists from the next SQL filter to guarantee exposure for a rare entry.

### 4. The "Co-DJ" Intent Parser & Monetization

The UI will feature an interactive prompt box allowing the user to steer the rotation dynamically. This feature is heavily gated to prevent uncapped LLM costs.

* **Free Tier (Zero-Cost Logic):** Free users interact with hardcoded buttons (e.g., "Raise Energy," "Go Darker"). These buttons execute mathematical shifts on the target variables (e.g., Target BPM + 3) and run standard Supabase queries without triggering any external LLM APIs.
* **Premium Tier (LLM Integration):** Paid subscribers gain access to the open text prompt. A lightweight LLM (Gemini Flash-Lite or GPT-5.4 Nano) acts as an intent parser. It ingests the current mix metadata alongside the user's text to output a JSON state mutation (e.g., `{"bpm_shift": "+5", "vibe_modifier": "industrial"}`).
* **Security:** This tiering is enforced via Stripe webhooks updating a `plan_tier` column in Supabase. Row Level Security (RLS) and Edge Function bouncers will block any unauthorized API requests from the free tier. Safeguards must also be coded to catch extreme BPM jumps and insert a "bridge" track to maintain continuity.

### 5. MVP Scope and Marketing Strategy

The minimum viable product must avoid the trap of being too broad and too thin.

* **The Vibe Pod Architecture:** The MVP will launch with only 5 to 8 specific sub-genres (Vibe Pods). Each pod requires a minimum of 50 highly tagged mixes. This creates roughly 300 to 400 total mixes for launch, guaranteeing high-density clusters capable of producing over 2,400 seamless transition pathways to prevent algorithmic fatigue.
* **Grassroots Acquisition:** Marketing relies heavily on the physical distribution of high-quality (die-cut, UV-resistant, polymeric vinyl) stickers featuring QR codes that serve as physical hyperlinks. These will be distributed via street teams at record stores and electronic music events to capture high-intent users organically.