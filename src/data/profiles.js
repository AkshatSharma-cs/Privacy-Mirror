// ── Breach pool ─────────────────────────────────────────────────────────────
export const BREACH_POOL = [
  { name: "Facebook",          year: 2021, records: "533m",   types: ["Email", "Phone", "Name", "Location", "DOB"],      severity: "critical" },
  { name: "Instagram",         year: 2020, records: "235m",   types: ["Email", "Phone", "Username", "Bio"],              severity: "high" },
  { name: "LinkedIn",          year: 2021, records: "700m",   types: ["Email", "Name", "Phone", "Job title"],            severity: "high" },
  { name: "Twitter",           year: 2022, records: "400m",   types: ["Email", "Phone", "Username"],                     severity: "high" },
  { name: "Snapchat",          year: 2014, records: "4.6m",   types: ["Username", "Phone partial"],                      severity: "low" },
  { name: "Tumblr",            year: 2013, records: "65m",    types: ["Email", "Password hash"],                         severity: "low" },
  { name: "MySpace",           year: 2008, records: "360m",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "Badoo",             year: 2013, records: "112m",   types: ["Email", "Name", "DOB", "Country"],                severity: "high" },
  { name: "WhatsApp",          year: 2022, records: "487m",   types: ["Phone", "Country"],                               severity: "high" },
  { name: "Telegram",          year: 2020, records: "42m",    types: ["Phone", "Username", "Name"],                      severity: "medium" },
  { name: "Discord",           year: 2023, records: "760k",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "TikTok",            year: 2022, records: "1b",     types: ["Email", "Phone", "DOB", "Username"],              severity: "critical" },
  { name: "Plenty of Fish",    year: 2016, records: "98m",    types: ["Email", "Username", "DOB", "Location"],           severity: "high" },
  { name: "MeetMe",            year: 2018, records: "2.4m",   types: ["Email", "Password hash"],                         severity: "low" },
  // Piracy / Warez
  { name: "The Pirate Bay",    year: 2021, records: "1.3m",   types: ["Email", "Username", "IP address"],                severity: "medium" },
  { name: "RARBG",             year: 2022, records: "850k",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "1337x",             year: 2020, records: "600k",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "YTS",               year: 2019, records: "2.5m",   types: ["Email", "Username", "Password hash", "IP address"], severity: "medium" },
  { name: "Pastebin (scrape)", year: 2022, records: "4.7m",   types: ["Email", "Password plaintext"],                    severity: "critical" },
  { name: "Nulled.to",         year: 2016, records: "1m",     types: ["Email", "Username", "Password hash", "IP address"], severity: "high" },
  { name: "RaidForums",        year: 2022, records: "478k",   types: ["Email", "Username", "Password hash", "IP address"], severity: "high" },
  { name: "BreachForums",      year: 2023, records: "212k",   types: ["Email", "Username", "Password hash"],             severity: "high" },
  { name: "Cracking.org",      year: 2020, records: "321k",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "Torrentz2",         year: 2021, records: "430k",   types: ["Email", "Username", "IP address"],                severity: "low" },
  { name: "FitGirl Repacks",   year: 2022, records: "180k",   types: ["Email", "Username"],                              severity: "low" },
  { name: "Streaming-Freak",   year: 2020, records: "890k",   types: ["Email", "Password hash", "IP address"],           severity: "medium" },
  // Email providers
  { name: "Yahoo",             year: 2016, records: "3b",     types: ["Email", "Password hash", "DOB", "Phone"],         severity: "critical" },
  { name: "Hotmail",           year: 2016, records: "272m",   types: ["Email", "Password hash"],                         severity: "high" },
  { name: "AOL",               year: 2014, records: "2.4m",   types: ["Email", "Password hash", "Name"],                 severity: "medium" },
  { name: "Gmail (Google+)",   year: 2018, records: "52.5m",  types: ["Email", "Name", "Occupation", "Age"],             severity: "high" },

  // Design / Productivity
  { name: "Adobe",             year: 2013, records: "153m",   types: ["Email", "Password hash", "Username"],             severity: "medium" },
  { name: "Canva",             year: 2019, records: "137m",   types: ["Email", "Name", "Password hash"],                 severity: "medium" },
  { name: "Dropbox",           year: 2012, records: "68m",    types: ["Email", "Password hash"],                         severity: "medium" },
  { name: "Trello",            year: 2024, records: "15m",    types: ["Email", "Username", "Full name"],                 severity: "medium" },
  { name: "Slack",             year: 2015, records: "500k",   types: ["Email", "Password hash", "Username"],             severity: "low" },
  { name: "Zoom",              year: 2020, records: "500k",   types: ["Email", "Password hash"],                         severity: "low" },
  { name: "GitHub",            year: 2020, records: "2m",     types: ["Email", "Username", "Password hash"],             severity: "low" },
  { name: "Bitly",             year: 2014, records: "9.3m",   types: ["Email", "Username", "Password hash"],             severity: "low" },
  { name: "Gravatar",          year: 2020, records: "167m",   types: ["Email", "Username"],                              severity: "low" },
  { name: "Trello",            year: 2024, records: "15m",    types: ["Email", "Username", "Full name"],                 severity: "medium" },
  { name: "Mailchimp",         year: 2023, records: "133k",   types: ["Email", "Name"],                                  severity: "low" },
  { name: "Lastpass",          year: 2022, records: "25m",    types: ["Email", "Password vault", "MFA seeds"],           severity: "critical" },
  { name: "Okta",              year: 2023, records: "134k",   types: ["Email", "Name", "Username"],                      severity: "high" },
  { name: "Microsoft",         year: 2022, records: "65k",    types: ["Email", "Name", "Company data"],                  severity: "medium" },

  // Entertainment / Music / Video
  { name: "Netflix",           year: 2023, records: "1.1m",   types: ["Email", "Password hash"],                         severity: "medium" },
  { name: "Spotify",           year: 2020, records: "380m",   types: ["Email", "Username", "Country"],                   severity: "medium" },
  { name: "Last.fm",           year: 2012, records: "43m",    types: ["Email", "Password hash", "Username"],             severity: "low" },
  { name: "Deezer",            year: 2022, records: "229m",   types: ["Email", "Name", "DOB", "Gender"],                 severity: "high" },
  { name: "Dailymotion",       year: 2016, records: "85.2m",  types: ["Email", "Password hash"],                         severity: "medium" },
  { name: "Dubsmash",          year: 2018, records: "162m",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "SoundCloud",        year: 2019, records: "175m",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "500px",             year: 2018, records: "14.8m",  types: ["Email", "Name", "Password hash"],                 severity: "low" },
  { name: "Wattpad",           year: 2020, records: "268m",   types: ["Email", "Name", "Password hash", "DOB"],          severity: "high" },
  { name: "Dailyhunt",         year: 2021, records: "13m",    types: ["Email", "Phone", "Name"],                         severity: "medium" },

  // Gaming
  { name: "PlayStation",       year: 2011, records: "77m",    types: ["Email", "Name", "DOB", "Address", "Card"],        severity: "critical" },
  { name: "Steam",             year: 2011, records: "35m",    types: ["Email", "Password hash", "Username"],             severity: "medium" },
  { name: "Xbox",              year: 2021, records: "10m",    types: ["Email", "Username", "Gamertag"],                  severity: "medium" },
  { name: "EA Games",          year: 2021, records: "50m",    types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "Ubisoft",           year: 2020, records: "3.5m",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "Zynga",             year: 2019, records: "173m",   types: ["Email", "Username", "Password hash", "Phone"],    severity: "high" },
  { name: "Minecraft",         year: 2020, records: "7m",     types: ["Email", "Username", "Password hash"],             severity: "low" },
  { name: "Roblox",            year: 2020, records: "100m",   types: ["Email", "Username", "DOB"],                       severity: "medium" },
  { name: "Evony",             year: 2016, records: "29m",    types: ["Email", "Username", "IP address"],                severity: "low" },
  { name: "Nexon",             year: 2016, records: "13m",    types: ["Email", "Username", "DOB", "Password hash"],      severity: "medium" },
  { name: "RockYou",           year: 2009, records: "32m",    types: ["Email", "Password plaintext"],                    severity: "critical" },

  // Shopping / Retail
  { name: "eBay",              year: 2014, records: "145m",   types: ["Email", "Name", "DOB", "Address"],                severity: "high" },
  { name: "Amazon",            year: 2020, records: "228m",   types: ["Email", "Name", "Phone", "Address"],              severity: "high" },
  { name: "Target",            year: 2013, records: "110m",   types: ["Email", "Name", "Card", "Address"],               severity: "critical" },
  { name: "Home Depot",        year: 2014, records: "56m",    types: ["Email", "Card partial"],                          severity: "critical" },
  { name: "Walmart",           year: 2021, records: "1.3m",   types: ["Email", "Name", "Address", "Phone"],              severity: "high" },
  { name: "Shein",             year: 2018, records: "6.42m",  types: ["Email", "Password hash"],                         severity: "medium" },
  { name: "Wish",              year: 2020, records: "2.28m",  types: ["Email", "Name", "Phone", "Address"],              severity: "high" },
  { name: "Etsy",              year: 2022, records: "89m",    types: ["Email", "Name", "Address"],                       severity: "medium" },
  { name: "Shopify",           year: 2020, records: "200",    types: ["Email", "Name", "Address", "Order history"],      severity: "medium" },
  { name: "GameStop",          year: 2021, records: "14m",    types: ["Email", "Name", "Phone", "Card partial"],         severity: "high" },
  { name: "Kickstarter",       year: 2014, records: "5.6m",   types: ["Email", "Name", "Password hash"],                 severity: "low" },

  // Food Delivery
  { name: "DoorDash",          year: 2019, records: "4.9m",   types: ["Email", "Name", "Phone", "Address"],              severity: "high" },
  { name: "Uber Eats",         year: 2022, records: "2.7m",   types: ["Email", "Name", "Phone", "Address"],              severity: "high" },
  { name: "Deliveroo",         year: 2021, records: "3.7m",   types: ["Email", "Name", "Phone", "Address"],              severity: "high" },
  { name: "Just Eat",          year: 2020, records: "2.5m",   types: ["Email", "Name", "Phone", "Address"],              severity: "high" },
  { name: "Zomato",            year: 2017, records: "17m",    types: ["Email", "Name", "Password hash"],                 severity: "medium" },
  { name: "Swiggy",            year: 2020, records: "3.5m",   types: ["Email", "Phone", "Name", "Address"],              severity: "high" },

  // Travel
  { name: "Marriott",          year: 2018, records: "500m",   types: ["Email", "Name", "DOB", "Passport", "Address"],    severity: "critical" },
  { name: "British Airways",   year: 2018, records: "500k",   types: ["Email", "Name", "Card", "Address"],               severity: "critical" },
  { name: "EasyJet",           year: 2020, records: "9m",     types: ["Email", "Travel data", "Card partial"],           severity: "high" },
  { name: "Ticketmaster",      year: 2024, records: "560m",   types: ["Email", "Name", "Card partial", "Address"],       severity: "critical" },
  { name: "MakeMyTrip",        year: 2021, records: "6.8m",   types: ["Email", "Name", "Phone", "Passport"],             severity: "high" },
  { name: "Cleartrip",         year: 2022, records: "7m",     types: ["Email", "Name", "Phone", "Travel history"],       severity: "high" },
  { name: "OYO",               year: 2020, records: "1.5m",   types: ["Email", "Phone", "Name", "Location"],             severity: "high" },

  // Finance / Banking / Crypto
  { name: "Experian",          year: 2020, records: "24m",    types: ["Email", "Name", "Address", "SSN partial"],        severity: "critical" },
  { name: "PayPal",            year: 2022, records: "35k",    types: ["Email", "Name", "DOB", "Address", "SSN"],         severity: "critical" },
  { name: "Cash App",          year: 2022, records: "8.2m",   types: ["Name", "Stock activity", "Account number"],       severity: "high" },
  { name: "Robinhood",         year: 2021, records: "7m",     types: ["Email", "Name", "Phone"],                         severity: "high" },
  { name: "Coinbase",          year: 2021, records: "6k",     types: ["Email", "Name", "DOB", "Address"],                severity: "critical" },
  { name: "Binance",           year: 2022, records: "1m",     types: ["Email", "Phone", "2FA codes"],                    severity: "critical" },
  { name: "Revolut",           year: 2022, records: "50k",    types: ["Email", "Name", "Phone", "Card partial"],         severity: "critical" },
  { name: "Wise",              year: 2022, records: "300k",   types: ["Email", "Name", "Address", "DOB"],                severity: "high" },
  { name: "Klarna",            year: 2021, records: "90k",    types: ["Email", "Name", "Purchase history"],              severity: "high" },
  { name: "JusPay",            year: 2020, records: "35m",    types: ["Email", "Card partial", "Name"],                  severity: "critical" },
  { name: "MobiKwik",          year: 2021, records: "3.5m",   types: ["Email", "Phone", "Address", "Card partial"],      severity: "critical" },
  { name: "Paytm",             year: 2020, records: "3.4m",   types: ["Email", "Phone", "Name"],                         severity: "high" },

  // Health / Fitness
  { name: "MyFitnessPal",      year: 2018, records: "150m",   types: ["Email", "Username", "Password hash"],             severity: "medium" },
  { name: "Fitbit",            year: 2021, records: "61m",    types: ["Email", "Name", "DOB", "Health data"],            severity: "high" },
  { name: "Garmin",            year: 2020, records: "1m",     types: ["Email", "Name", "Fitness data"],                  severity: "medium" },
  { name: "Medibank",          year: 2022, records: "9.7m",   types: ["Email", "Name", "DOB", "Health records"],         severity: "critical" },
  { name: "23andMe",           year: 2023, records: "6.9m",   types: ["Email", "Name", "DNA ancestry", "Location"],      severity: "critical" },
  { name: "Practo",            year: 2020, records: "6.8m",   types: ["Email", "Phone", "Medical history"],              severity: "critical" },

  // Education
  { name: "Chegg",             year: 2018, records: "40m",    types: ["Email", "Name", "Password hash", "DOB"],          severity: "medium" },
  { name: "Mathway",           year: 2020, records: "25m",    types: ["Email", "Password hash"],                         severity: "low" },
  { name: "Quora",             year: 2018, records: "100m",   types: ["Email", "Name", "Password hash"],                 severity: "medium" },
  { name: "Duolingo",          year: 2023, records: "2.6m",   types: ["Email", "Name", "Username", "Language"],          severity: "low" },
  { name: "Coursera",          year: 2020, records: "10m",    types: ["Email", "Name", "Country"],                       severity: "low" },
  { name: "Udemy",             year: 2021, records: "22m",    types: ["Email", "Name", "Phone"],                         severity: "medium" },
  { name: "Unacademy",         year: 2020, records: "11m",    types: ["Email", "Name", "Phone", "DOB"],                  severity: "high" },
  { name: "Byju's",            year: 2021, records: "1.5m",   types: ["Email", "Phone", "Name", "Address"],              severity: "high" },
  { name: "Vedantu",           year: 2021, records: "687k",   types: ["Email", "Phone", "Name"],                         severity: "medium" },
  { name: "Stack Overflow",    year: 2019, records: "1m",     types: ["Email", "Username", "Password hash"],             severity: "low" },

  // Dating
  { name: "Ashley Madison",    year: 2015, records: "30m",    types: ["Email", "Name", "Address", "Sexual preference"],  severity: "critical" },
  { name: "Zoosk",             year: 2020, records: "30m",    types: ["Email", "Name", "DOB"],                           severity: "high" },
  { name: "Plenty of Fish",    year: 2016, records: "98m",    types: ["Email", "Username", "DOB", "Location"],           severity: "high" },
  { name: "Fling",             year: 2011, records: "40m",    types: ["Email", "Username", "DOB", "Sexual preference"],  severity: "critical" },
  { name: "BeNaughty",         year: 2013, records: "1.8m",   types: ["Email", "Username", "DOB"],                       severity: "high" },
  { name: "MeetMe",            year: 2018, records: "2.4m",   types: ["Email", "Password hash"],                         severity: "low" },
  { name: "Mate1",             year: 2016, records: "27.3m",  types: ["Email", "Password hash", "DOB", "Gender"],        severity: "high" },
  { name: "Shaadi.com",        year: 2020, records: "2.8m",   types: ["Email", "Name", "Phone", "DOB", "Religion"],      severity: "critical" },

  // India-specific
  { name: "BigBasket",         year: 2020, records: "20m",    types: ["Email", "Phone", "Name", "Address"],              severity: "high" },
  { name: "Flipkart",          year: 2021, records: "1.5m",   types: ["Email", "Name", "Phone", "Address"],              severity: "high" },
  { name: "Dunzo",             year: 2022, records: "3.5m",   types: ["Email", "Phone", "Name"],                         severity: "high" },
  { name: "Domino's India",    year: 2021, records: "180m",   types: ["Email", "Phone", "Address", "Order history"],     severity: "critical" },
  { name: "Air India",         year: 2021, records: "4.5m",   types: ["Email", "Name", "Passport", "Card partial"],      severity: "critical" },
  { name: "HDFC Bank",         year: 2021, records: "6m",     types: ["Email", "Phone", "Account partial"],              severity: "critical" },
  { name: "Juspay",            year: 2020, records: "35m",    types: ["Email", "Card partial", "Name"],                  severity: "critical" },
  { name: "upGrad",            year: 2022, records: "1.7m",   types: ["Email", "Phone", "Name"],                         severity: "medium" },
  { name: "Naukri.com",        year: 2021, records: "17m",    types: ["Email", "Name", "Phone", "Resume data"],          severity: "high" },
  { name: "PolicyBazaar",      year: 2022, records: "100m",   types: ["Email", "Phone", "Name", "Policy data"],          severity: "critical" },
  { name: "SpiceJet",          year: 2020, records: "1.2m",   types: ["Email", "Name", "Phone", "Booking data"],         severity: "high" },
  { name: "BookMyShow",        year: 2019, records: "700k",   types: ["Email", "Name", "Phone"],                         severity: "medium" },
  { name: "Ola",               year: 2021, records: "7m",     types: ["Email", "Phone", "Name", "Location history"],     severity: "high" },
  { name: "Rapido",            year: 2020, records: "1.8m",   types: ["Email", "Phone", "Name"],                         severity: "medium" },

  // Telecoms
  { name: "T-Mobile",          year: 2023, records: "37m",    types: ["Email", "Name", "Phone", "Account PIN"],          severity: "critical" },
  { name: "AT&T",              year: 2024, records: "73m",    types: ["Email", "SSN", "DOB", "Account passcode"],        severity: "critical" },
  { name: "Twilio",            year: 2022, records: "1.9k",   types: ["Email", "Phone", "Name"],                         severity: "medium" },
  { name: "Samsung",           year: 2022, records: "190m",   types: ["Email", "Name", "DOB", "Address"],                severity: "high" },
  { name: "Nvidia",            year: 2022, records: "71k",    types: ["Email", "Password hash", "Username"],             severity: "low" },

  // Miscellaneous
  { name: "Houzz",             year: 2018, records: "48.9m",  types: ["Email", "Name", "City", "Password hash"],         severity: "medium" },
  { name: "Gravatar",          year: 2020, records: "167m",   types: ["Email", "Username"],                              severity: "low" },
  { name: "Verifications.io",  year: 2019, records: "763m",   types: ["Email", "Name", "Phone", "Address"],              severity: "critical" },
  { name: "Data&Leads Inc",    year: 2017, records: "44m",    types: ["Email", "Name", "Phone", "Address"],              severity: "high" },
  { name: "Collection #1",     year: 2019, records: "773m",   types: ["Email", "Password hash"],                         severity: "critical" },
  { name: "AntiPublic",        year: 2016, records: "458m",   types: ["Email", "Password hash"],                         severity: "critical" },
  { name: "Exploit.in",        year: 2016, records: "593m",   types: ["Email", "Password hash"],                         severity: "critical" },
  { name: "Pemiblanc",         year: 2018, records: "111m",   types: ["Email", "Password hash"],                         severity: "high" },
]

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
