import { useTyping } from '../hooks/useTyping'
import styles from './ProfileBox.module.css'

export default function ProfileBox({ profile }) {
  const { displayed } = useTyping(profile, 12, 200)

  return (
    <div className={styles.box}>
      <div className={styles.badge}>AI INFERRED</div>
      <p className={styles.text}>
        {displayed}
        <span className={styles.cursor} />
      </p>
    </div>
  )
}
