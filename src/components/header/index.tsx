import React from 'react'
import avatar from '../../assets/image/brendan.jpg'
import icon from '../../assets/image'
import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.logo}>
        <img className={styles.logoIcon} src={icon.logo} alt='логотип' />
        <h1 className={styles.logoTitle}>Replicant</h1>
      </div>

      <div className={styles.profile}>
        <a href='#'>
          <img
            className={styles.favoriteIcon}
            src={icon.favorite}
            alt='иконка избранное'
          />
        </a>
        <a href='#'>
          <img
            className={styles.cartIcon}
            // eslint-disable-next-line no-constant-condition
            src={true ? icon.cart : icon.cartNull}
            alt='иконка корзины'
          />
        </a>
        <a href='#'>
          <img className={styles.avatarIcon} src={avatar} alt='аватар' />
        </a>
      </div>
    </div>
  )
}

export default Header
