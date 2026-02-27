import { useState } from 'react'
import styles from './LandingScreen.module.css'

const LOW_EMAILS  = ['safe@protonmail.com', 'newuser@outlook.com', 'privacy@tutanota.com']
const HIGH_EMAILS = ['john.smith@gmail.com', 'sarah.jones@hotmail.com', 'mike.wilson@yahoo.com']

export default function LandingScreen({ onScan }) {
  const [email, setEmail] = useState('')

  function handleScan() {
    if (email.trim()) onScan(email.trim().toLowerCase())
  }

  function fillEmail(e) {
    setEmail(e)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.grid} />

      <header className={styles.header}>
        <div className={styles.eyebrow}>// AMD Slingshot · AI + Cybersecurity</div>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>PRIVACY</span>
          <span className={styles.titleAccent}>MIRROR</span>
        </h1>
        <p className={styles.sub}>
          Enter an email address. Watch AI reconstruct your digital identity in real time.
        </p>
      </header>

      <div className={styles.inputBlock}>
        <label className={styles.label}>// Target email address</label>
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleScan()}
            autoFocus
            spellCheck={false}
          />
          <button className={styles.btn} onClick={handleScan} disabled={!email.trim()}>
            <span>SCAN</span>
            <span className={styles.btnArrow}>→</span>
          </button>
        </div>
      </div>

      <div className={styles.demoPanel}>
        <div className={styles.demoPanelHeader}>// Demo profiles</div>
        <div className={styles.demoGroup}>
          <div className={styles.demoGroupLabel} data-risk="low">LOW RISK</div>
          <div className={styles.demoEmails}>
            {LOW_EMAILS.map(e => (
              <button key={e} className={styles.demoEmail} data-risk="low" onClick={() => fillEmail(e)}>{e}</button>
            ))}
          </div>
        </div>
        <div className={styles.demoGroup}>
          <div className={styles.demoGroupLabel} data-risk="high">CRITICAL</div>
          <div className={styles.demoEmails}>
            {HIGH_EMAILS.map(e => (
              <button key={e} className={styles.demoEmail} data-risk="high" onClick={() => fillEmail(e)}>{e}</button>
            ))}
          </div>
        </div>
        <div className={styles.demoNote}>Any other email generates a unique randomised result.</div>
      </div>
    </div>
  )
}
