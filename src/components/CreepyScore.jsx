import { useState, useEffect } from 'react'
import styles from './CreepyScore.module.css'

export default function CreepyScore({ score, label, color, headline }) {
  const [animScore, setAnimScore] = useState(0)

  const r = 70
  const circ = 2 * Math.PI * r
  const offset = circ - (animScore / 100) * circ

  useEffect(() => {
    let s = 0
    const speed = score > 70 ? 1.5 : 1
    const iv = setInterval(() => {
      s += speed
      if (s >= score) { setAnimScore(score); clearInterval(iv) }
      else setAnimScore(Math.round(s))
    }, 16)
    return () => clearInterval(iv)
  }, [score])

  const colorVar = color.startsWith('var(') ? getComputedStyle(document.documentElement).getPropertyValue(color.slice(4, -1)).trim() : color

  return (
    <div className={styles.wrap}>
      <div className={styles.ring}>
        <svg width="180" height="180" viewBox="0 0 180 180">
          {/* Background track */}
          <circle cx="90" cy="90" r={r} fill="none" stroke="var(--border2)" strokeWidth="10" />
          {/* Score arc */}
          <circle
            cx="90" cy="90" r={r} fill="none"
            stroke={color} strokeWidth="10"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
            style={{ transition: 'stroke-dashoffset 0.06s linear', filter: `drop-shadow(0 0 8px ${color})` }}
          />
          {/* Glow ring for critical */}
          {score >= 85 && (
            <circle cx="90" cy="90" r={r} fill="none" stroke={color} strokeWidth="2"
              strokeDasharray={circ} strokeDashoffset={offset}
              transform="rotate(-90 90 90)"
              opacity="0.3"
              style={{ transition: 'stroke-dashoffset 0.06s linear' }}
            />
          )}
        </svg>

        <div className={styles.center}>
          <span className={styles.number} style={{ color }}>{animScore}</span>
          <span className={styles.slash}>/100</span>
          <span className={styles.label} style={{ color }}>{label}</span>
        </div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.headline} style={{ color }}>{headline}</h2>
        <p className={styles.sub}>
          Your digital footprint is being aggregated, sold, and cross-referenced across data broker networks and dark web marketplaces right now.
        </p>
      </div>
    </div>
  )
}
