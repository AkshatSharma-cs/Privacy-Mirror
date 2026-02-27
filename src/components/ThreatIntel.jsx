import { useState, useEffect } from 'react'
import { generateThreatIntel } from '../services/claude'
import styles from './ThreatIntel.module.css'

const LIKELIHOOD_COLOR = {
  Low: 'var(--text-dim)',
  Medium: 'var(--yellow)',
  High: 'var(--orange)',
  Critical: 'var(--red)',
}

export default function ThreatIntel({ email, breaches }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const result = await generateThreatIntel(email, breaches)
        if (result) setData(result)
        else setError('Threat intelligence unavailable.')
      } catch {
        setError('Could not load threat intelligence.')
      }
      setLoading(false)
    }
    load()
  }, [email])

  if (loading) return (
    <div className={styles.loading}>
      <span className={styles.loadingDot} />
      Querying dark web intelligence feeds...
    </div>
  )

  if (error) return <div className={styles.error}>{error}</div>
  if (!data) return null

  return (
    <div className={styles.wrap}>
      {/* Header stats */}
      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statNum} style={{ color: data.darkWebMentions > 10 ? 'var(--red)' : 'var(--orange)' }}>
            {data.darkWebMentions}
          </span>
          <span className={styles.statLabel}>Dark web mentions</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum} style={{ color: data.dataForSale ? 'var(--red)' : 'var(--green)' }}>
            {data.dataForSale ? 'YES' : 'NO'}
          </span>
          <span className={styles.statLabel}>Data for sale</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum} style={{ color: 'var(--orange)' }}>{data.estimatedDataPrice}</span>
          <span className={styles.statLabel}>Estimated value</span>
        </div>
      </div>

      {/* Active threats */}
      {data.activeThreats?.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionLabel}>// Active threat vectors</div>
          {data.activeThreats.map((t, i) => (
            <div key={i} className={styles.threat}>
              <div className={styles.threatHeader}>
                <span className={styles.threatType}>{t.type}</span>
                <span className={styles.threatLikelihood} style={{ color: LIKELIHOOD_COLOR[t.likelihood] }}>
                  {t.likelihood}
                </span>
              </div>
              <div className={styles.threatDetail}>{t.detail}</div>
            </div>
          ))}
        </div>
      )}

      {/* Compromised services */}
      {data.compromisedServices?.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionLabel}>// Services at risk from credential reuse</div>
          <div className={styles.serviceList}>
            {data.compromisedServices.map((s, i) => (
              <span key={i} className={styles.serviceTag}>{s}</span>
            ))}
          </div>
        </div>
      )}

      {/* Urgent action */}
      <div className={styles.urgent}>
        <span className={styles.urgentIcon}>⚠</span>
        <span>{data.recommendation}</span>
      </div>
    </div>
  )
}
