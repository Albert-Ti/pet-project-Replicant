import React from 'react'
import styles from './header.module.css'
import hooks from '../../hooks'
import avatar from '../../assets/image/brendan.jpg'
import logoIcon from '../../assets/image/logo-sneakers.svg'

const Header: React.FC = () => {
  const { values, handleChanges } = hooks.useForm({ search: '' })

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.content}>
      <div className={styles.logo}>
        <img src={logoIcon} alt='логотип' />
        <h1>Replicant</h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmitForm}>
        <input
          onChange={handleChanges}
          value={values.search}
          className={styles.formInput}
          type='text'
          name='search'
        />
        <button className={styles.formSearchButton} type='submit'></button>
        {values.search && (
          <button className={styles.formCloseButton} type='button'>
            X
          </button>
        )}
      </form>

      <div className={styles.user}>
        <img src={avatar} alt='аватар' />
        <p>prokaznik-js@mail.com</p>
      </div>
    </div>
  )
}

export default Header
