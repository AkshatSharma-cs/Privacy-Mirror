# Privacy Mirror

**AMD Slingshot Hackathon — AI + Cybersecurity Track**

Privacy Mirror is an AI-powered digital footprint reconstruction tool. Enter an email address and watch AI rebuild your digital identity in real time — exposing breach history, dark web presence, threat vectors, and a personality profile inferred from your leaked data.

---

## What It Does

Most people have no idea how much of their personal data is publicly available, actively traded, and cross-referenced across hundreds of databases. Privacy Mirror makes that invisible threat visible — and actionable.

### Features

- **Creepy Score** — A 0–100 exposure rating calculated from breach count, data types leaked, and severity
- **Breach Detection** — Identifies exposure across 160+ real services including LinkedIn, Facebook, Zomato, Domino's India, JusPay, AT&T, 23andMe, and more
- **Breach Timeline** — Interactive visual history of when your data was exposed over the years
- **AI Personality Profiler** — AI infers your age range, profession, interests, and lifestyle from your breach metadata. The "wow" moment.
- **Dark Web Threat Intelligence** — AI estimates dark web mention count, whether your data is actively for sale, its market price, and active threat vectors targeting your profile
- **AI Password Analyser** — Real-time AI analysis of password strength, entropy, crack time, and specific improvement suggestions
- **AI Phishing URL Detector** — Paste any suspicious link and AI checks for typosquatting, homograph attacks, deceptive subdomains, and social engineering techniques
- **Remediation Plan** — Personalised action steps tailored to the specific breaches found

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | CSS Modules |
| Backend Proxy | Node.js + Express |
| AI Model | Llama 3.3 70B via Groq API (see note below) |
| Breach Data | Curated dataset of 160+ real-world breaches |

### A Note on the AI Model

This project was built for the AMD Slingshot Hackathon where compute resources are limited during development. We are using **Llama 3.3 70B via Groq** as it offers a free tier suitable for hackathon prototyping.

**In production, this would run on `claude-sonnet-4-6` (Anthropic).** Claude Sonnet produces significantly more nuanced personality profiles, more accurate threat intelligence, and better-calibrated password analysis. The architecture is designed for a one-line swap — just change the API endpoint and model name in `src/services/claude.js`. The AMD Instinct MI300X would handle self-hosted LLaMA inference at scale, delivering the sub-2 second response times the product requires.

---

## Project Structure

```
privacy-mirror/
├── server.js                  # Express proxy server for AI API calls
├── .env                       # API keys (not committed)
├── src/
│   ├── App.jsx                # Main app — phase orchestration
│   ├── index.css              # Global styles, CSS variables, animations
│   ├── data/
│   │   └── profiles.js        # 160+ breach pool + hardcoded demo profiles
│   ├── services/
│   │   └── claude.js          # All AI API calls (profile, threats, password, phishing)
│   ├── hooks/
│   │   └── useTyping.js       # Reusable typewriter animation hook
│   └── components/
│       ├── LandingScreen      # Email input and landing page
│       ├── ScanScreen         # Animated terminal scan sequence
│       ├── ResultsScreen      # Tabbed results layout
│       ├── CreepyScore        # Animated SVG ring gauge
│       ├── BreachGrid         # Breach cards with severity colours
│       ├── Timeline           # Interactive breach history timeline
│       ├── ProfileBox         # AI-generated personality profile
│       ├── ThreatIntel        # Dark web intelligence panel
│       ├── PasswordChecker    # AI password strength analyser
│       ├── PhishingDetector   # AI phishing URL detector
│       └── ActionPlan         # Remediation steps
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- A Groq API key (free at [console.groq.com](https://console.groq.com))

### Installation

```bash
# Clone the repo
git clone https://github.com/AkshatSharma-cs/Privacy-Mirror.git
cd Privacy-Mirror/privacy-mirror

# Install dependencies
npm install

# Create environment file
echo "GROQ_API_KEY=your-key-here" > .env
```

### Running the App

You need two terminals running simultaneously:

**Terminal 1 — Backend proxy:**
```bash
node server.js
# Output: Proxy running on http://localhost:3001
```

**Terminal 2 — Frontend:**
```bash
npm run dev
# Output: Local: http://localhost:5173
```

Open `http://localhost:5173` in your browser.

---

## Demo Profiles

These emails are hardcoded with dramatic results for live demos:

| Email | Score | Category |
|---|---|---|
| `safe@protonmail.com` | 12 | Low Exposure |
| `newuser@outlook.com` | 18 | Low Exposure |
| `privacy@tutanota.com` | 9 | Clean |
| `john.smith@gmail.com` | 94 | Critical |
| `sarah.jones@hotmail.com` | 91 | Critical |
| `mike.wilson@yahoo.com` | 97 | Critical |

Any other email generates a randomised result drawn from the 160+ breach pool.

---

## How the AI Works

Four separate AI calls power the product:

1. **Profile Generation** — Breach metadata is fed into the LLM which infers demographic and behavioural patterns
2. **Threat Intelligence** — LLM estimates dark web exposure, market value of the data bundle, and active threat vectors
3. **Password Analysis** — LLM calculates entropy, crack time, and specific weaknesses for any password
4. **Phishing Detection** — LLM analyses URL structure for typosquatting, homograph attacks, suspicious subdomains, and social engineering patterns

All AI calls are proxied through a local Express server to keep API keys off the client.

---

## What We Tried

### HaveIBeenPwned API Integration
We attempted to integrate the [HaveIBeenPwned](https://haveibeenpwned.com/API/v3) API for real-time breach lookups. The backend proxy route was built and tested successfully:
```javascript
GET /api/breach/:email
→ https://haveibeenpwned.com/api/v3/breachedaccount/{email}
```

However we ran into two blockers for the hackathon:

1. **Paid API key required** — HaveIBeenPwned charges $3.50/month with no free tier
2. **Rate limiting** — The API enforces a 1 request per 1500ms limit which would cause failures during a live demo with multiple emails

We made the decision to use a curated hardcoded breach dataset of 160+ real services instead, which guarantees reliable and dramatic results on stage. In production, the HIBP integration is ready to enable with just an API key.

## Roadmap

- [ ] Swap Groq/Llama for Claude Sonnet on AMD MI300X infrastructure
- [ ] Enable HaveIBeenPwned API with paid key for live breach lookups
- [ ] Add data broker opt-out automation
- [ ] Email monitoring with breach alerts
- [ ] Browser extension for real-time phishing detection

---

## Built With

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Express](https://expressjs.com)
- [Groq](https://groq.com) — Fast LLM inference (hackathon)
- [Anthropic Claude](https://anthropic.com) — Production AI target

---

*Built for AMD Slingshot Hackathon · AI + Cybersecurity Track*
