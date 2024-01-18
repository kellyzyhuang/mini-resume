import styles from './MenuItem.module.css'

export default function MenuItem({
  title="",
  bgColor,
  textColor, 
  tabLeft

}) {

  return(
    <div className={styles.menuItemContainer}>
      <p className={styles.menuItem} style={{backgroundColor: bgColor, color: textColor, paddingLeft: tabLeft}}>{title}</p>
    </div>
  )
}