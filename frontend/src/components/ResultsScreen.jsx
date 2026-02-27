import CreepyScore from './CreepyScore'
import BreachGrid from './BreachGrid'
import Timeline from './Timeline'
import ProfileBox from './ProfileBox'
import ActionPlan from './ActionPlan'
import styles from './ResultsScreen.module.css'

export default function ResultsScreen({ email, data, onReset }) {
  return (
    <div className={styles.wrap}>

      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <span className={styles.topBarLabel}>// Scan results for</span>
          <span className={styles.topBarEmail}>{email}</span>
        </div>
        <button className={styles.resetBtn} onClick={onReset}>← New scan</button>
      </div>

      {/* Creepy Score */}
      <CreepyScore
        score={data.creepyScore}
        label={data.scoreLabel}
        color={data.scoreColor}
        headline={data.headline}
      />

      {/* Breach grid */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>// Data breaches detected</span>
        {data.breaches.length > 0 && (
          <span className={styles.sectionCount}>{data.breaches.length} source{data.breaches.length !== 1 ? 's' : ''}</span>
        )}
      </div>
      <BreachGrid breaches={data.breaches} />

      {/* Timeline */}
      {data.timeline && data.timeline.length > 0 && (
        <>
          <div className={styles.sectionHeader} style={{ marginTop: 24 }}>
            <span className={styles.sectionTitle}>// Breach timeline</span>
            <span className={styles.sectionCount}>your exposure history</span>
          </div>
          <Timeline events={data.timeline} />
        </>
      )}

      <div className={styles.divider} />

      {/* AI Profile */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>// AI-inferred profile</span>
      </div>
      <ProfileBox profile={data.profile} />

      <div className={styles.divider} />

      {/* Remediation */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>// Remediation plan</span>
        <span className={styles.sectionCount}>{data.actions.length} actions</span>
      </div>
      <ActionPlan actions={data.actions} />

      <div className={styles.divider} />

      <div className={styles.footer}>
        <button className={styles.resetBtn2} onClick={onReset}>← Scan another email</button>
        <div className={styles.footerNote}>
          Powered by AMD Instinct MI300X · Privacy Mirror v1.0
        </div>
      </div>

    </div>
  )
}
