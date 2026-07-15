# wounduphere

Wounduphere is a full-stack application featuring a Next.js frontend and a FastAPI discovery engine powered by Google GenAI embeddings. It utilizes Typesense for vector search and a PostgreSQL database.

## Project Structure

- `web/`: Next.js web application.
- `discovery-engine/`: FastAPI backend providing embedding generation via Gemini models.
- `docker-compose.yml`: Services for Typesense (Vector-enabled version) and PostgreSQL.

## Prerequisites

- [Node.js](https://nodejs.org/) & npm
- [Python 3.x](https://www.python.org/)
- [Docker](https://www.docker.com/) & Docker Compose

## Getting Started

### 1. Environment Setup

Copy the example environment file and fill in your secure keys:

```bash
cp .env.example .env
```

Ensure you have your `POSTGRES_PASSWORD` and `TYPESENSE_API_KEY` set. 
You will also need a `GEMINI_API_KEY` (or `GOOGLE_API_KEY`) for the GenAI embeddings in the discovery engine.

### 2. Infrastructure

Start the background services (PostgreSQL and Typesense) using Docker Compose:

```bash
docker-compose up -d
```

### 3. Discovery Engine (Backend)

The backend provides endpoints to generate embeddings and interface with the search infrastructure.

```bash
cd discovery-engine
python -m venv venv
source venv/bin/activate
pip install fastapi "uvicorn[standard]" python-dotenv google-genai
fastapi dev main.py
```

### 4. Web Application (Frontend)

The frontend is a Next.js application.

```bash
cd web
npm install
npm run dev
```

The web application will be available at [http://localhost:3000](http://localhost:3000).

## License

This project is licensed under the terms found in the `LICENSE` file.
