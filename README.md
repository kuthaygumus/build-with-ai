# Build With AI

A hands-on engineering workshop for building production-grade AI systems. Two parts, four days, zero fluff.

## What You'll Build

### Part 1: Agent Development (2 Days)
Build an autonomous agent that reasons, makes decisions, calls external tools via MCP, and completes multi-step tasks with human-in-the-loop approval.

**Modules:**
1. Why Agents? — From chatbots to autonomous systems
2. MCP — The Model Context Protocol (the USB-C of AI)
3. LangChain — Chains, prompts, memory, structured output
4. LangGraph — Stateful agents with conditional routing
5. Integration — Production patterns, security, cost control

### Part 2: RAG (2 Days)
Build a system that answers questions from your own documents — accurately, with citations, at production quality.

**Modules:**
1. The Knowledge Problem — Why LLMs need external knowledge
2. Embeddings & Vectors — Meaning as geometry
3. The RAG Pipeline — Load, chunk, retrieve, generate
4. Advanced RAG — HyDE, re-ranking, agentic retrieval
5. Production RAG — Evaluation, scaling, monitoring

## Tech Stack

- **Site**: [Astro Starlight](https://starlight.astro.build/) — static documentation framework
- **Exercises**: Google Colab notebooks — zero setup, runs in browser
- **Languages**: English + Turkish (built-in language switcher)

## Getting Started

### Prerequisites
- Node.js 22+
- A Google account (for Colab notebooks)

### Local Development
```bash
git clone https://github.com/kgumus/build-with-ai.git
cd build-with-ai
npm install
npm run dev
```

### Build
```bash
npm run build
npm run preview
```

## Project Structure

```
build-with-ai/
├── src/
│   ├── content/docs/          # English content (MDX)
│   │   ├── agent-development/ # Agent Dev modules 1-5
│   │   ├── rag/               # RAG modules 1-5
│   │   └── tr/                # Turkish translations
│   ├── components/            # Custom Astro components
│   └── styles/                # Premium theme CSS
├── public/notebooks/          # Google Colab exercise notebooks
│   ├── agent-dev/             # 7 notebooks (Basic → Capstone)
│   └── rag/                   # 7 notebooks (Basic → Capstone)
└── training-flow-md/          # Curriculum planning docs
```

## Exercise Notebooks

Each module includes hands-on exercises at three levels:

| Level | Description |
|-------|-------------|
| **Basic** | Guided step-by-step. Everyone completes these. |
| **Challenge** | Less hand-holding. Stretch goal for experienced devs. |
| **Capstone** | Open-ended. Combines everything from the module. |

Notebooks open directly in Google Colab — no local setup required.

## For Presenters

This site includes a hidden **Presenter Mode** with inline teaching notes (what to demo, what to ask, timing hints). Press `Ctrl+Shift+P` on any page to toggle it.

## License

MIT

## Author

**Kuthay Gumus** — Senior Software Engineer

[GitHub](https://github.com/kgumus)
