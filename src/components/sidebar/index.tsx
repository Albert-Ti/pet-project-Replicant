import styles from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        <li className={styles.item}>Мужчинам</li>
        <li className={styles.item}>Женщинам</li>
        <li className={styles.item}>Контакты</li>
        <li className={styles.item}>О Нас</li>
      </ul>
    </div>
  )
}

export default Sidebar
