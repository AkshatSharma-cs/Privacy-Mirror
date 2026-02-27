// ── Breach pool ─────────────────────────────────────────────────────────────
export const BREACH_POOL = [
  { name: "LinkedIn",      year: 2021, records: "700m",  types: ["Email", "Name", "Phone", "Job title"],          severity: "high" },
  { name: "Adobe",         year: 2013, records: "153m",  types: ["Email", "Password hash", "Username"],           severity: "medium" },
  { name: "Canva",         year: 2019, records: "137m",  types: ["Email", "Name", "Password hash"],               severity: "medium" },
  { name: "Dropbox",       year: 2012, records: "68m",   types: ["Email", "Password hash"],                       severity: "medium" },
  { name: "Dubsmash",      year: 2018, records: "162m",  types: ["Email", "Username", "Password hash"],           severity: "medium" },
  { name: "MyFitnessPal",  year: 2018, records: "150m",  types: ["Email", "Username", "Password hash"],           severity: "medium" },
  { name: "Twitter",       year: 2022, records: "400m",  types: ["Email", "Phone", "Username"],                   severity: "high" },
  { name: "Ticketmaster",  year: 2024, records: "560m",  types: ["Email", "Name", "Card partial", "Address"],     severity: "critical" },
  { name: "Last.fm",       year: 2012, records: "43m",   types: ["Email", "Password hash", "Username"],           severity: "low" },
  { name: "Kickstarter",   year: 2014, records: "5.6m",  types: ["Email", "Name", "Password hash"],               severity: "low" },
  { name: "Tumblr",        year: 2013, records: "65m",   types: ["Email", "Password hash"],                       severity: "low" },
  { name: "Gravatar",      year: 2020, records: "167m",  types: ["Email", "Username"],                            severity: "low" },
  { name: "Snapchat",      year: 2014, records: "4.6m",  types: ["Username", "Phone partial"],                    severity: "low" },
  { name: "Trello",        year: 2024, records: "15m",   types: ["Email", "Username", "Full name"],               severity: "medium" },
  { name: "Wattpad",       year: 2020, records: "268m",  types: ["Email", "Name", "Password hash", "DOB"],        severity: "high" },
  { name: "Deezer",        year: 2022, records: "229m",  types: ["Email", "Name", "DOB", "Gender"],               severity: "high" },
  { name: "500px",         year: 2018, records: "14.8m", types: ["Email", "Name", "Password hash"],               severity: "low" },
  { name: "Zynga",         year: 2019, records: "173m",  types: ["Email", "Username", "Password hash", "Phone"],  severity: "high" },
  { name: "Dailymotion",   year: 2016, records: "85.2m", types: ["Email", "Password hash"],                       severity: "medium" },
  { name: "Mathway",       year: 2020, records: "25m",   types: ["Email", "Password hash"],                       severity: "low" },
  { name: "Twitch",        year: 2021, records: "2.7m",  types: ["Email", "Username", "Password hash"],           severity: "medium" },
  { name: "Houzz",         year: 2018, records: "48.9m", types: ["Email", "Name", "City", "Password hash"],       severity: "medium" },
  { name: "Zoosk",         year: 2020, records: "30m",   types: ["Email", "Name", "DOB"],                         severity: "high" },
  { name: "Bitly",         year: 2014, records: "9.3m",  types: ["Email", "Username", "Password hash"],           severity: "low" },
];

// Deterministic shuffle seeded by email hash
export function pickBreaches(email, count) {
  let hash = 0;
  for (let i = 0; i < email.length; i++) hash = (hash * 31 + email.charCodeAt(i)) >>> 0;
  const pool = [...BREACH_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    hash = (hash * 1664525 + 1013904223) >>> 0;
    const j = hash % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// ── Demo profiles ───────────────────────────────────────────────────────────
export const PROFILES = {
  // LOW ──────────────────────────────────────────────────────────────────────
  "safe@protonmail.com": {
    creepyScore: 12,
    scoreLabel: "LOW EXPOSURE",
    scoreColor: "var(--green)",
    headline: "Minimal footprint. Almost invisible.",
    breaches: pickBreaches("safe@protonmail.com", 1),
    profile: "Your digital hygiene is exceptional. You appear to use encrypted services, rotate email aliases, and avoid data-heavy platforms. AI inference is severely limited — there is almost nothing here to profile. That's either very intentional or very impressive.",
    timeline: [
      { year: 2023, event: "Account created", detail: "Email first observed in one minor forum signup.", type: "neutral" },
      { year: 2024, event: "Single minor breach", detail: "Email appeared in a low-severity credential list. No sensitive data exposed.", type: "low" },
    ],
    actions: [
      { title: "Stay vigilant", detail: "Even low-exposure accounts should use a password manager and enable 2FA on all services." },
      { title: "Monitor periodically", detail: "Run a breach check every 6 months — your exposure can grow even without your direct input." },
    ]
  },

  "newuser@outlook.com": {
    creepyScore: 18,
    scoreLabel: "LOW EXPOSURE",
    scoreColor: "var(--green)",
    headline: "Clean slate. Low digital trail.",
    breaches: pickBreaches("newuser@outlook.com", 1),
    profile: "This address has minimal history across tracked platforms. You may be new to the internet, recently changed your primary email, or deliberately compartmentalise your online identity. Very little can be inferred from the available data.",
    timeline: [
      { year: 2022, event: "Email registered", detail: "Microsoft Outlook account created. No third-party signups detected.", type: "neutral" },
      { year: 2023, event: "Low-risk breach", detail: "Email appeared in a scraped dataset. No passwords or sensitive data.", type: "low" },
    ],
    actions: [
      { title: "Keep it clean", detail: "Use a burner alias for newsletters and trials — never register this email on low-trust services." },
      { title: "Enable 2FA", detail: "Even clean accounts are targeted — two-factor authentication is your first line of defence." },
    ]
  },

  "privacy@tutanota.com": {
    creepyScore: 9,
    scoreLabel: "CLEAN",
    scoreColor: "var(--green)",
    headline: "Effectively invisible. Impressive.",
    breaches: [],
    profile: "Zero breach presence. No public data trails. This address has either never been used on third-party platforms, or belongs to someone who takes operational security very seriously. There is nothing here for an adversary — or an AI — to work with.",
    timeline: [
      { year: 2024, event: "No data found", detail: "This email address returned zero results across all monitored breach databases.", type: "clean" },
    ],
    actions: [
      { title: "You're doing great", detail: "Continue using encrypted providers. Avoid linking this address to social media or loyalty programmes." },
    ]
  },

  // HIGH ─────────────────────────────────────────────────────────────────────
  "john.smith@gmail.com": {
    creepyScore: 94,
    scoreLabel: "CRITICAL EXPOSURE",
    scoreColor: "var(--red)",
    headline: "Severely compromised across the web.",
    breaches: pickBreaches("john.smith@gmail.com", 6),
    profile: "Cross-referencing breach history and public data paints a detailed picture: likely a professional in their early-to-mid 30s, based in a major English-speaking city, active on LinkedIn and creative tools like Canva and Adobe. Reused password patterns suggest the same credentials may still be active across multiple live platforms. Partial card details from the Ticketmaster breach are actively circulating on dark web marketplaces.",
    timeline: [
      { year: 2012, event: "Dropbox breach",     detail: "Email and hashed password exposed. 68 million accounts affected.",               type: "medium" },
      { year: 2013, event: "Adobe breach",        detail: "153 million accounts. Password hint and hash leaked.",                          type: "medium" },
      { year: 2019, event: "Canva breach",        detail: "Name, email, and password hash exposed. Design platform compromise.",           type: "medium" },
      { year: 2021, event: "LinkedIn scrape",     detail: "700 million profiles scraped. Job title, location, and phone number exposed.",  type: "high" },
      { year: 2022, event: "Twitter/X breach",    detail: "Phone number and email linkage exposed. Account correlation risk.",             type: "high" },
      { year: 2024, event: "Ticketmaster breach", detail: "560 million records. Partial card data, name, and address exposed.",            type: "critical" },
    ],
    actions: [
      { title: "Change all passwords immediately",  detail: "Credentials appear in 6 breach datasets — any reused password is already in attacker hands." },
      { title: "Enable 2FA on email and banking",   detail: "Your Gmail is a skeleton key at this exposure level — use an authenticator app, not SMS." },
      { title: "Freeze your credit",                detail: "Card data from Ticketmaster is actively traded — contact your bank and initiate a credit freeze." },
      { title: "Opt out of data brokers",           detail: "Use DeleteMe or Incogni to remove your profile from Spokeo, WhitePages, and 200+ aggregators." },
      { title: "Audit active sessions",             detail: "Check Google, LinkedIn, and Dropbox for unrecognised logins right now." },
    ]
  },

  "sarah.jones@hotmail.com": {
    creepyScore: 91,
    scoreLabel: "CRITICAL EXPOSURE",
    scoreColor: "var(--red)",
    headline: "Data sold hundreds of times this year.",
    breaches: pickBreaches("sarah.jones@hotmail.com", 5),
    profile: "Your profile is among the most complete seen in this scan session. Date of birth, home city, fitness habits, music taste, and employment history are all inferrable from the aggregate of your breaches. The Wattpad and Deezer leaks reveal demographic and lifestyle data that advertisers — and criminals — pay premium rates for. Personalised phishing campaigns targeting this profile are highly likely.",
    timeline: [
      { year: 2013, event: "Tumblr breach",       detail: "65 million email addresses and password hashes leaked.",                          type: "medium" },
      { year: 2018, event: "MyFitnessPal breach",  detail: "150 million accounts. Fitness habits, username, and password hash exposed.",      type: "high" },
      { year: 2020, event: "Wattpad breach",       detail: "268 million records including name, DOB, and password hash.",                     type: "high" },
      { year: 2022, event: "Deezer breach",        detail: "229 million records. DOB, gender, and music preferences exposed.",                type: "high" },
      { year: 2024, event: "Trello breach",        detail: "15 million users' public profiles scraped and correlated with email addresses.",   type: "medium" },
    ],
    actions: [
      { title: "Assume your password is public",      detail: "Multiple breach password hashes have been cracked — treat all reused passwords as compromised." },
      { title: "Migrate away from Hotmail",           detail: "Legacy Microsoft accounts are prime targets — move to a modern encrypted provider like ProtonMail." },
      { title: "Submit data broker removal requests", detail: "Your DOB and name from Deezer is enough to build a synthetic identity — opt out immediately." },
      { title: "Review all linked accounts",          detail: "Check for unexpected purchases, logins, or profile changes across all your platforms." },
      { title: "Set up breach monitoring",            detail: "Sign up for HaveIBeenPwned alerts — be notified the moment your email appears in a new breach." },
    ]
  },

  "mike.wilson@yahoo.com": {
    creepyScore: 97,
    scoreLabel: "CRITICAL EXPOSURE",
    scoreColor: "var(--red)",
    headline: "Maximum exposure. Immediate action required.",
    breaches: pickBreaches("mike.wilson@yahoo.com", 7),
    profile: "This is as exposed as a digital identity can be. Seven separate breach sources have contributed email, name, phone, partial card data, password hashes, date of birth, employer, and location data. Correlating these datasets produces a profile accurate enough to pass identity verification on most financial platforms. This data has been available on dark web marketplaces for years — the question is not whether it has been accessed, but how many times and by whom.",
    timeline: [
      { year: 2012, event: "Last.fm breach",      detail: "43 million email addresses and MD5 password hashes leaked.",                         type: "low" },
      { year: 2014, event: "Snapchat breach",      detail: "4.6 million usernames and partial phone numbers exposed via API exploit.",           type: "low" },
      { year: 2018, event: "Zynga breach",         detail: "173 million records including phone numbers and hashed passwords.",                   type: "high" },
      { year: 2019, event: "500px breach",         detail: "14.8 million photographer profiles. Name, email, and password hash exposed.",         type: "medium" },
      { year: 2020, event: "Zoosk breach",         detail: "30 million dating platform accounts. Name, DOB, and email cross-correlated.",         type: "high" },
      { year: 2022, event: "Deezer breach",        detail: "229 million records. Lifestyle data including music preferences and DOB exposed.",    type: "high" },
      { year: 2024, event: "Ticketmaster breach",  detail: "560 million records. Partial card data and address confirmed in dark web listings.",  type: "critical" },
    ],
    actions: [
      { title: "Contact your bank today",          detail: "With 7 breach sources and card data exposed, initiate fraud monitoring and consider new card numbers." },
      { title: "Replace your Yahoo account",       detail: "Yahoo's 3-billion-account breach makes this address permanently compromised — migrate immediately." },
      { title: "Place a credit freeze",            detail: "Contact Experian, Equifax, and TransUnion — a credit freeze is free and blocks new account fraud." },
      { title: "Change every password",            detail: "Use Bitwarden or 1Password to generate and store unique passwords for each account." },
      { title: "Switch to app-based 2FA",          detail: "Your phone number is exposed — SIM swapping risk is real. Use an authenticator app instead of SMS." },
      { title: "Automate data broker removal",     detail: "Services like Incogni submit opt-out requests to 180+ brokers on your behalf. Start today." },
    ]
  },
};

// Fallback for unknown emails
export function generateFallback(email) {
  let hash = 0;
  for (let i = 0; i < email.length; i++) hash = (hash * 31 + email.charCodeAt(i)) >>> 0;
  const score = 35 + (hash % 44);
  const count = 2 + (hash % 3);
  let scoreLabel, scoreColor;
  if (score < 50)      { scoreLabel = "LOW EXPOSURE";   scoreColor = "var(--green)"; }
  else if (score < 70) { scoreLabel = "MODERATE RISK";  scoreColor = "var(--yellow)"; }
  else                 { scoreLabel = "HIGH RISK";       scoreColor = "var(--orange)"; }

  const breaches = pickBreaches(email, count);
  const years = breaches.map(b => b.year).sort();

  const timeline = breaches.map(b => ({
    year: b.year,
    event: `${b.name} breach`,
    detail: `${b.records} records exposed including ${b.types.slice(0,2).join(" and ")}.`,
    type: b.severity,
  })).sort((a, b) => a.year - b.year);

  return {
    creepyScore: score, scoreLabel, scoreColor,
    headline: score < 50 ? "Limited exposure detected." : score < 70 ? "Moderate footprint across platforms." : "Significant exposure. Action recommended.",
    breaches,
    profile: `Based on your email domain and cross-referenced breach metadata, your profile suggests a regular internet user with moderate platform engagement. Your data has appeared in ${count} known breach${count > 1 ? 'es' : ''} dating back to ${years[0]} — while not critical, these records are actively traded and correlatable with other public datasets. Without additional hardening, your exposure will grow over time.`,
    timeline,
    actions: [
      { title: "Rotate breached passwords",       detail: "Any password from a breached account should be considered public knowledge — change it now." },
      { title: "Enable 2FA on primary accounts",  detail: "Start with email, banking, and social media — the highest-value targets for credential stuffing." },
      { title: "Check data broker presence",      detail: "Search your name on Spokeo and WhitePages. If listed, submit opt-out requests immediately." },
      { title: "Use unique email aliases",        detail: "Services like SimpleLogin create per-platform aliases, stopping breach correlation in its tracks." },
    ]
  };
}
