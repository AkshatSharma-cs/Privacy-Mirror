import { useState } from 'react'
import { analyseURL } from '../services/claude'
import styles from './PhishingDetector.module.css'

const SEVERITY_COLOR = { low: 'var(--text-dim)', medium: 'var(--yellow)', high: 'var(--red)' }

export default function PhishingDetector() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  async function handleAnalyse() {
    if (!url.trim()) return
    setLoading(true)
    setResult(null)
    setError('')
    try {
      const data = await analyseURL(url.trim())
      if (data) setResult(data)
      else setError('Analysis failed. Try again.')
    } catch {
      setError('Could not reach AI service.')
    }
    setLoading(false)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          type="text"
          placeholder="Paste a suspicious URL to analyse..."
          value={url}
          onChange={e => { setUrl(e.target.value); setResult(null) }}
          onKeyDown={e => e.key === 'Enter' && handleAnalyse()}
          spellCheck={false}
        />
        <button className={styles.btn} onClick={handleAnalyse} disabled={loading || !url.trim()}>
          {loading ? '...' : 'Analyse →'}
        </button>
      </div>

      <div className={styles.examples}>
        Try: <span onClick={() => setUrl('paypa1-secure-login.com/account/verify')}>paypa1-secure-login.com</span>
        <span onClick={() => setUrl('https://google.com')}>google.com</span>
        <span onClick={() => setUrl('http://аmazon.com.login-verify.ru/secure')}>аmazon.com.login-verify.ru</span>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {loading && (
        <div className={styles.loading}>
          <span className={styles.loadingDot} />
          AI scanning URL for phishing indicators...
        </div>
      )}

      {result && (
        <div className={styles.result}>
          <div className={styles.verdict} style={{ borderLeftColor: result.verdictColor }}>
            <div className={styles.verdictScore} style={{ color: result.verdictColor }}>
              {result.riskScore}<span className={styles.verdictSlash}>/100</span>
            </div>
            <div>
              <div className={styles.verdictLabel} style={{ color: result.verdictColor }}>{result.verdict}</div>
              {result.legitimateSite && (
                <div className={styles.impersonating}>
                  Impersonating: <strong>{result.legitimateSite}</strong>
                </div>
              )}
              <div className={styles.recommendation}>{result.recommendation}</div>
            </div>
          </div>

          {result.indicators?.length > 0 && (
            <div className={styles.indicators}>
              <div className={styles.indicatorsLabel}>Indicators detected</div>
              {result.indicators.map((ind, i) => (
                <div key={i} className={styles.indicator}>
                  <span className={styles.indicatorFlag} style={{ color: SEVERITY_COLOR[ind.severity] }}>
                    [{ind.flag}]
                  </span>
                  <span className={styles.indicatorDetail}>{ind.detail}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
