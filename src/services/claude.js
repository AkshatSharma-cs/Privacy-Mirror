const MODEL = 'claude-sonnet-4-6'

async function claudeCall(prompt, maxTokens = 600) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      messages: [{ role: 'user', content: prompt }]
    })
  })
  const json = await res.json()
  const text = json.content?.[0]?.text || ''
  return text.replace(/```json|```/g, '').trim()
}

// ── AI Profile Generator ─────────────────────────────────────────────────────
export async function generateAIProfile(email, breaches, creepyScore) {
  const breachSummary = breaches.length === 0
    ? 'No breaches found.'
    : breaches.map(b => `${b.name} (${b.year}): ${b.types.join(', ')}`).join('\n')

  const prompt = `You are the AI inference engine of "Privacy Mirror", a cybersecurity awareness tool.

Email scanned: ${email}
Creepy Score: ${creepyScore}/100
Breach history:
${breachSummary}

Write a 3-sentence AI personality/demographic inference paragraph. Rules:
- Write as if you genuinely analysed their digital footprint from the breach data
- Reference specific platforms from the breaches (e.g. "your LinkedIn data suggests...")
- Infer plausible age range, profession, interests, lifestyle from the platform types
- Make it feel unsettlingly accurate — this is the "wow" moment for a hackathon demo
- Do NOT mention being an AI or that this is simulated
- Plain text only, no formatting, no quotes around the paragraph`

  return claudeCall(prompt, 300)
}

// ── Password Strength Analyser ───────────────────────────────────────────────
export async function analysePassword(password) {
  const prompt = `You are a cybersecurity expert analysing a password for a privacy tool demo.

Password to analyse: "${password}"

Return ONLY a JSON object, no markdown:
{
  "score": <0-100>,
  "strength": <"Very Weak" | "Weak" | "Fair" | "Strong" | "Very Strong">,
  "crackTime": <realistic time to crack, e.g. "3 minutes", "2 centuries">,
  "issues": [<up to 4 specific issues found, e.g. "Contains dictionary word", "Too short">],
  "suggestions": [<up to 3 specific improvements>],
  "entropy": <approximate entropy in bits as a number>,
  "pwnedLikely": <true if this looks like a commonly used password pattern>
}`

  const raw = await claudeCall(prompt, 400)
  try { return JSON.parse(raw) } catch { return null }
}

// ── Phishing URL Detector ────────────────────────────────────────────────────
export async function analyseURL(url) {
  const prompt = `You are a cybersecurity expert analysing a URL for phishing indicators for a demo tool.

URL to analyse: "${url}"

Return ONLY a JSON object, no markdown:
{
  "riskScore": <0-100>,
  "verdict": <"Safe" | "Suspicious" | "Likely Phishing" | "Phishing">,
  "verdictColor": <"#00e676" | "#ffc847" | "#ff6b35" | "#ff2d55">,
  "indicators": [
    { "flag": <short indicator name>, "detail": <one sentence explanation>, "severity": <"low"|"medium"|"high"> }
  ],
  "legitimateSite": <null or the real domain this is impersonating>,
  "recommendation": <one sentence action to take>
}

Analyse for: typosquatting, homograph attacks, suspicious subdomains, URL shorteners, 
mismatched TLDs, excessive hyphens, IP addresses instead of domains, deceptive paths, 
punycode, and other common phishing techniques.`

  const raw = await claudeCall(prompt, 500)
  try { return JSON.parse(raw) } catch { return null }
}

// ── Dark Web Threat Intelligence ─────────────────────────────────────────────
export async function generateThreatIntel(email, breaches) {
  const breachNames = breaches.map(b => b.name).join(', ') || 'none'
  const prompt = `You are a dark web threat intelligence analyst for a cybersecurity demo tool.

Email: ${email}
Known breaches: ${breachNames}

Return ONLY a JSON object, no markdown:
{
  "darkWebMentions": <plausible number 0-50 based on breach severity>,
  "dataForSale": <true/false based on breach types>,
  "estimatedDataPrice": <e.g. "$12.50" — what this data bundle sells for on dark web markets>,
  "activeThreats": [
    { "type": <threat type e.g. "Credential Stuffing">, "likelihood": <"Low"|"Medium"|"High"|"Critical">, "detail": <one sentence> }
  ],
  "compromisedServices": [<list of specific service types likely still using leaked credentials>],
  "recommendation": <urgent one-sentence action>
}`

  const raw = await claudeCall(prompt, 500)
  try { return JSON.parse(raw) } catch { return null }
}
