import { useState, useEffect } from 'react'
import styles from './ScanScreen.module.css'

const STEPS = [
  { text: 'Initialising scan engine...',           ms: 0    },
  { text: 'Querying HaveIBeenPwned database...',   ms: 550  },
  { text: 'Cross-referencing 200+ data brokers...', ms: 1150 },
  { text: 'Scanning dark web marketplaces...',      ms: 1800 },
  { text: 'Running AI profile inference...',        ms: 2500 },
  { text: 'Calculating Creepy Score...',            ms: 3150 },
  { text: 'Building remediation plan...',           ms: 3700 },
  { text: 'Scan complete.',                         ms: 4200 },
]

export default function ScanScreen({ email }) {
  const [active, setActive] = useState(0)
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    const timers = STEPS.map((step, i) =>
      setTimeout(() => {
        setActive(i)
        setBarWidth(Math.round(((i + 1) / STEPS.length) * 100))
      }, step.ms)
    )
    return () => timers.forEach(clearTimeout)
  }, [email])

  return (
    <div className={styles.wrap}>
      <div className={styles.sweepLine} />

      <div className={styles.header}>
        <div className={styles.label}>// Scanning</div>
        <div className={styles.target}>{email}</div>
      </div>

      <div className={styles.terminal}>
        {STEPS.map((step, i) => (
          <div
            key={i}
            className={`${styles.line} ${i <= active ? styles.lineVisible : ''} ${i === active ? styles.lineActive : ''}`}
            style={{ transitionDelay: `${i * 0.04}s` }}
          >
            <span className={styles.prompt}>{'>'}</span>
            <span className={styles.lineText}>{step.text}</span>
            {i === active && i < STEPS.length - 1 && <span className={styles.cursor} />}
            {i < active && <span className={styles.ok}>✓</span>}
            {i === STEPS.length - 1 && i === active && <span className={styles.done}>✓</span>}
          </div>
        ))}
      </div>

      <div className={styles.progressWrap}>
        <div className={styles.progressBar} style={{ width: `${barWidth}%` }} />
      </div>
      <div className={styles.progressLabel}>{barWidth}%</div>
    </div>
  )
}
