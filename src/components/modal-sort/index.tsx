import React from 'react'
import styles from './modal-sort.module.scss'

type ModalSort = {
  setSort: (s: string) => void
}

const ModalSort: React.FC<ModalSort> = ({ setSort }) => {
  return (
    <ul className={styles.list}>
      <li onClick={() => setSort('По убыванию')} className={styles.link}>
        <a href='#'>По убыванию</a>
      </li>
      <li onClick={() => setSort('По возрастанию')} className={styles.link}>
        <a href='#'>По возрастанию</a>
      </li>
      <li onClick={() => setSort('По популярности')} className={styles.link}>
        <a href='#'>По популярности</a>
      </li>
      <li onClick={() => setSort('По рейтингу')} className={styles.link}>
        <a href='#'>По рейтингу</a>
      </li>
    </ul>
  )
}

export default ModalSort
