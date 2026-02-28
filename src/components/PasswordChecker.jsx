import { useState } from 'react'
import { analysePassword } from '../services/claude'
import styles from './PasswordChecker.module.css'

const SCAN_STEPS = [
  'Initialising entropy analysis...',
  'Checking against known breach patterns...',
  'Running dictionary attack simulation...',
  'Calculating crack time estimate...',
  'Generating security report...',
]

export default function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [scanStep, setScanStep] = useState(0)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  async function handleCheck() {
    if (!password.trim()) return
    setLoading(true)
    setResult(null)
    setError('')
    setScanStep(0)

    // Animate through steps
    SCAN_STEPS.forEach((_, i) => {
      setTimeout(() => setScanStep(i), i * 400)
    })

    try {
      const data = await analysePassword(password)
      setTimeout(() => {
        if (data) setResult(data)
        else setError('Analysis failed. Try again.')
        setLoading(false)
      }, SCAN_STEPS.length * 400)
    } catch {
      setTimeout(() => {
        setError('Could not reach AI service.')
        setLoading(false)
      }, SCAN_STEPS.length * 400)
    }
  }

  const scoreColor = result
    ? result.score >= 80 ? 'var(--green)'
    : result.score >= 60 ? 'var(--yellow)'
    : result.score >= 40 ? 'var(--orange)'
    : 'var(--red)'
    : 'var(--text-dim)'

  return (
    <div className={styles.wrap}>
      <div className={styles.inputRow}>
        <div className={styles.inputWrap}>
          <input
            className={styles.input}
            type={show ? 'text' : 'password'}
            placeholder="Enter a password to analyse..."
            value={password}
            onChange={e => { setPassword(e.target.value); setResult(null) }}
            onKeyDown={e => e.key === 'Enter' && handleCheck()}
            spellCheck={false}
          />
          <button className={styles.showBtn} onClick={() => setShow(s => !s)}>
            {show ? 'HIDE' : 'SHOW'}
          </button>
        </div>
        <button className={styles.analyseBtn} onClick={handleCheck} disabled={loading || !password.trim()}>
          {loading ? 'Scanning...' : 'Analyse →'}
        </button>
      </div>

      {loading && (
        <div className={styles.scanBox}>
          <div className={styles.scanHeader}>
            <span className={styles.scanPulse} />
            Analysing password...
          </div>
          {SCAN_STEPS.map((step, i) => (
            <div
              key={i}
              className={`${styles.scanLine} ${i <= scanStep ? styles.scanLineVisible : ''} ${i === scanStep ? styles.scanLineActive : ''}`}
            >
              <span className={styles.scanPrompt}>{'>'}</span>
              <span>{step}</span>
              {i < scanStep && <span className={styles.scanOk}>✓</span>}
              {i === scanStep && <span className={styles.scanCursor} />}
            </div>
          ))}
          <div className={styles.scanProgress}>
            <div
              className={styles.scanProgressFill}
              style={{ width: `${((scanStep + 1) / SCAN_STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {error && <div className={styles.error}>{error}</div>}

      {result && (
        <div className={styles.result}>
          <div className={styles.scoreRow}>
            <div className={styles.scoreBar}>
              <div className={styles.scoreBarFill} style={{ width: `${result.score}%`, background: scoreColor }} />
            </div>
            <span className={styles.scoreStrength} style={{ color: scoreColor }}>{result.strength}</span>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Crack time</span>
              <span className={styles.statValue} style={{ color: scoreColor }}>{result.crackTime}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Entropy</span>
              <span className={styles.statValue}>{result.entropy} bits</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Commonly pwned</span>
              <span className={styles.statValue} style={{ color: result.pwnedLikely ? 'var(--red)' : 'var(--green)' }}>
                {result.pwnedLikely ? 'YES' : 'No'}
              </span>
            </div>
          </div>

          {result.issues?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Issues found</div>
              {result.issues.map((iss, i) => (
                <div key={i} className={styles.issue}>
                  <span className={styles.issueIcon}>✗</span> {iss}
                </div>
              ))}
            </div>
          )}

          {result.suggestions?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Suggestions</div>
              {result.suggestions.map((s, i) => (
                <div key={i} className={styles.suggestion}>
                  <span className={styles.suggIcon}>→</span> {s}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}