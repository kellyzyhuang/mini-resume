import styles from './Card.module.css'

export default function Card({
  title="title",
  description="description", 
  bgColor, 
  borderColor

}) {

  return (
    <div className={styles.card} style={{backgroundColor: bgColor, border: borderColor}}>
      <h2 className={styles.title}>{title}</h2> 
      <p className={styles.description}>{description}</p>
      </div>
  )
}