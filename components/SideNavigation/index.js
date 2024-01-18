import styles from './SideNavigation.module.css'
import MenuItem from '@/components/MenuItem'
import Image from 'next/image'

export default function SideNavigation() {
  return(
    <div className={styles.menu}>
      <Image src={'/images/Miffy PFP.jpeg'} alt="miffy picture" width={50} height={70} className={styles.miffy}/>
      <h3 className={styles.name}>Kelly Huang</h3>
      <h4 className={styles.role}>Developer</h4>
      <div className={styles.line}></div>
       <div className={styles.menuitems}>
          <MenuItem title="Experiences" bgColor="var(--blue)" textColor="var(--white)" tabLeft="10px"/>
          <MenuItem title="Education"/>
          <MenuItem title="Projects"/>
          <MenuItem title="Volunteering"/>
          <MenuItem title="Skills"/>
          <MenuItem title="Interests"/>
       </div>
    </div>
  )
}