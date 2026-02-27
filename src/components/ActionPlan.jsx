import styles from './ActionPlan.module.css'

export default function ActionPlan({ actions }) {
  return (
    <div className={styles.list}>
      {actions.map((a, i) => (
        <div
          key={i}
          className={styles.item}
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <div className={styles.num}>{String(i + 1).padStart(2, '0')}</div>
          <div className={styles.body}>
            <strong className={styles.title}>{a.title}</strong>
            <span className={styles.detail}>{a.detail}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
