import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  return(
    <header className={styles.header}>
      <h1 className={styles.dash}>Dashboard</h1>
      <div className={styles.notif}><Image src={'/images/bell-icon.png'} alt="bell icon" width={30} height={30} className={styles.bell}/><p>Friday</p></div>
    </header>
  )
}