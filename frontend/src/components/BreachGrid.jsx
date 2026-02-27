import styles from './BreachGrid.module.css'

const SEVERITY_COLOR = {
  low:      'var(--text-dim)',
  medium:   'var(--yellow)',
  high:     'var(--orange)',
  critical: 'var(--red)',
}

export default function BreachGrid({ breaches }) {
  if (!breaches || breaches.length === 0) {
    return (
      <div className={styles.clean}>
        <span className={styles.cleanIcon}>✓</span>
        No breach records found for this address.
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {breaches.map((b, i) => (
        <div
          key={i}
          className={styles.card}
          style={{
            borderLeftColor: SEVERITY_COLOR[b.severity] || 'var(--red)',
            animationDelay: `${i * 0.07}s`,
          }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.name}>{b.name}</span>
            <span className={styles.severity} style={{ color: SEVERITY_COLOR[b.severity] }}>
              {b.severity}
            </span>
          </div>
          <div className={styles.meta}>{b.year} &middot; {b.records} records</div>
          <div className={styles.tags}>
            {b.types.map((t, j) => (
              <span key={j} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
