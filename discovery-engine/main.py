from google import genai
import os
from dotenv import load_dotenv

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

client = genai.Client()

@app.post("/embed-set")
def generate_vibe_embedding(description: str):
    # Gemini 2.0 Embedding model
    result = client.models.embed_content(
        model="gemini-embedding-2",
        contents=description
    )
    
    return {"embedding": result.embeddings[0].values}

# Allow the frontend to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def check_health():
    return {"status": "Discovery Engine Active", "version": "2026.1"}
