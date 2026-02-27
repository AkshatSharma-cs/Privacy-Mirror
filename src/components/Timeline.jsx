import { useState } from 'react'
import styles from './Timeline.module.css'

const TYPE_COLOR = {
  clean:    'var(--green)',
  low:      'var(--text-dim)',
  neutral:  'var(--cyan)',
  medium:   'var(--yellow)',
  high:     'var(--orange)',
  critical: 'var(--red)',
}

const TYPE_LABEL = {
  clean:    'CLEAN',
  low:      'LOW',
  neutral:  'INFO',
  medium:   'MEDIUM',
  high:     'HIGH',
  critical: 'CRITICAL',
}

export default function Timeline({ events }) {
  const [expanded, setExpanded] = useState(null)

  if (!events || events.length === 0) return null

  // Sort chronologically
  const sorted = [...events].sort((a, b) => a.year - b.year)
  const years = [...new Set(sorted.map(e => e.year))].sort()
  const minYear = years[0]
  const maxYear = new Date().getFullYear()

  return (
    <div className={styles.wrap}>
      <div className={styles.yearRange}>
        <span>{minYear}</span>
        <div className={styles.yearLine} />
        <span>{maxYear}</span>
      </div>

      <div className={styles.track}>
        {/* Year markers */}
        {years.map(year => {
          const pct = ((year - minYear) / Math.max(maxYear - minYear, 1)) * 100
          return (
            <div key={year} className={styles.yearMark} style={{ left: `${pct}%` }}>
              <div className={styles.yearTick} />
              <span className={styles.yearLabel}>{year}</span>
            </div>
          )
        })}

        {/* Event dots */}
        {sorted.map((evt, i) => {
          const pct = ((evt.year - minYear) / Math.max(maxYear - minYear, 1)) * 100
          const color = TYPE_COLOR[evt.type] || 'var(--text-dim)'
          const isOpen = expanded === i

          return (
            <div
              key={i}
              className={`${styles.event} ${isOpen ? styles.eventOpen : ''}`}
              style={{ left: `${pct}%`, animationDelay: `${i * 0.1}s` }}
            >
              <button
                className={styles.dot}
                style={{ borderColor: color, boxShadow: isOpen ? `0 0 12px ${color}` : 'none' }}
                onClick={() => setExpanded(isOpen ? null : i)}
                title={evt.event}
              >
                <span className={styles.dotInner} style={{ background: color }} />
              </button>

              {isOpen && (
                <div className={styles.popup} style={{ borderColor: color }}>
                  <div className={styles.popupYear}>{evt.year}</div>
                  <div className={styles.popupEvent} style={{ color }}>{evt.event}</div>
                  <div className={styles.popupDetail}>{evt.detail}</div>
                  <div className={styles.popupBadge} style={{ color, borderColor: color }}>
                    {TYPE_LABEL[evt.type] || evt.type}
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* "Now" marker */}
        <div className={styles.nowMark} style={{ left: '100%' }}>
          <div className={styles.nowDot} />
          <span className={styles.nowLabel}>NOW</span>
        </div>
      </div>

      <div className={styles.legend}>
        {Object.entries(TYPE_COLOR).filter(([k]) => k !== 'neutral').map(([type, color]) => (
          <div key={type} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: color }} />
            <span className={styles.legendLabel}>{TYPE_LABEL[type]}</span>
          </div>
        ))}
      </div>

      <div className={styles.hint}>Click any event to expand</div>
    </div>
  )
}
