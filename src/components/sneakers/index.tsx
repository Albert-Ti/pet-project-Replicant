import {sneakers} from '../../mockData'
import styles from './sneakers.module.scss'

const Sneakers = () => {
  return (
    <ul className={styles.list}>
      {sneakers.map((el, i) => (
        <li className={styles.item} key={i}>
          <figure>
            <img className={styles.image} src={el.image} alt={el.title} />
            <figcaption className={styles.info}>
              <span className={styles.name}>{el.title}</span>
              <span className={styles.price}>{el.price}</span>
            </figcaption>
          </figure>
          <button className={styles.button}>Купить</button>
        </li>
      ))}
    </ul>
  )
}

export default Sneakers
