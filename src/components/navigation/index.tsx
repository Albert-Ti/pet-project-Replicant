import React from 'react'
import styles from './navigation.module.scss'
import hooks from '../../hooks'
import icon from '../../assets/image'
import ModalSort from '../modal-sort'

const Navigation: React.FC = () => {
  const { values, handleChanges } = hooks.useForm({ search: '' })
  const [modalSort, setModalSort] = React.useState(false)
  const [sort, setSort] = React.useState('По возрастанию')

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className={styles.content}>
      <a href='#' className={styles.citySelect}>
        <img
          className={styles.cityIcon}
          src={icon.city}
          alt='иконка выбора города'
        />
        <span>г. Москва</span>
      </a>

      <form className={styles.form} onSubmit={handleSubmitForm}>
        <input
          onChange={handleChanges}
          value={values.search}
          className={styles.formInput}
          type='text'
          name='search'
        />
        <button className={styles.formSearchButton} type='submit'>
          <img src={icon.search} alt='иконка поиска' />
        </button>
        {values.search && (
          <button className={styles.formCloseButton} type='button'>
            <img src={icon.close} alt='иконка закрытия' />
          </button>
        )}
      </form>

      <button
        onClick={() => setModalSort(!modalSort)}
        className={styles.genderSelect}
      >
        <svg
          className={styles.listIcon}
          aria-hidden='true'
          id='hamburger'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          fill='#fff'
        >
          <path d='M3 6h18v2H3z'></path>
          <path d='M3 11h18v2H3z'></path>
          <path d='M3 16h18v2H3z'></path>
        </svg>
        <span>{sort}</span>
      </button>
      {modalSort && <ModalSort setSort={setSort} />}
    </div>
  )
}

export default Navigation
