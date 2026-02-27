import { useState, useEffect } from 'react'
import { generateAIProfile } from '../services/claude'
import { useTyping } from '../hooks/useTyping'
import styles from './ProfileBox.module.css'

export default function ProfileBox({ email, breaches, creepyScore, fallbackProfile }) {
  const [profileText, setProfileText] = useState('')
  const [loading, setLoading] = useState(true)
  const { displayed } = useTyping(profileText, 10, 100)

  useEffect(() => {
    async function load() {
      try {
        const text = await generateAIProfile(email, breaches, creepyScore)
        setProfileText(text || fallbackProfile)
      } catch {
        setProfileText(fallbackProfile)
      }
      setLoading(false)
    }
    load()
  }, [email])

  return (
    <div className={styles.box}>
      <div className={styles.badge}>AI INFERRED · CLAUDE SONNET</div>
      {loading ? (
        <div className={styles.loading}>
          <span className={styles.loadingDot} />
          Claude is inferring your profile from breach metadata...
        </div>
      ) : (
        <p className={styles.text}>
          {displayed}
          {displayed.length < profileText.length && <span className={styles.cursor} />}
        </p>
      )}
    </div>
  )
}
