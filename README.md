# UnlockOps

AI-powered content generation website. Free NVIDIA NIM inference in the cloud — no GPU server to manage.

## How It Works

1. Visitor lands on a generator page (e.g. "Generate my LinkedIn bio")
2. Fills in a simple form — job title, skills, tone
3. Astro calls NVIDIA NIM API server-side via `/api/generate`
4. A teaser result appears — first two sentences
5. CPA Grip locker appears over the full result
6. Visitor completes an offer → locker unlocks → full result revealed

## Stack

| Layer | Tool | Cost |
|---|---|---|
| Frontend | Astro + Tailwind CSS v4 + Alpine.js | Free |
| Hosting | Netlify | Free |
| AI backend | NVIDIA NIM (hosted) | Free tier |
| Content locking | CPA Grip | Free |
| Domain | Namecheap | ~$10/yr |

NVIDIA NIM gives you hosted Llama 3.1, Mistral, Gemma, Phi-3, Deepseek, Qwen and more via an OpenAI-compatible API. Free tier handles ~40 req/min — enough to validate before scaling.

## Pages

- Landing (`/`)
- FAQ (`/faq`)
- Sign up (`/signup`)
- Log in (`/login`)
- Privacy policy (`/privacy`)
- Terms (`/terms`)

## API

`POST /api/generate` — proxies to NVIDIA NIM chat completions.

```json
{
  "messages": [{ "role": "user", "content": "..." }],
  "model": "qwen/qwen3-coder-480b-a35b-instruct",
  "temperature": 0.7,
  "max_tokens": 4096
}
```

Requires `NVIDIA_API_KEY` in `.env`.

## Commands

| Command | Action |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start dev server at `localhost:4321` |
| `pnpm run build` | Build to `./dist/` |
| `pnpm run preview` | Preview production build |

## CPA Grip Scripts

- `cpa-grip-content-locker` — content locker snippet
- `cpa-grip-offer-wall` — offer wall snippet
- `cpa-grip-video-locker` — video locker snippet
- `nvidia-llm.txt` — reference Python script for NVIDIA NIM

## License

GPL-3.0
