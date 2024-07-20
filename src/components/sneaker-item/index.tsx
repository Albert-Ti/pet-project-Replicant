import React from 'react'
import styles from './sneaker-item.module.scss'
import {sneakersData} from '../../mockData'
import {Sneaker} from '../../types'
import {classes} from '../../utils'

export type SneakerItemProps = {
  sneaker: Sneaker
  imageIndex: number
  index: number
  handlePrevImage: (i: number) => void
  handleNextImage: (i: number) => void
}

export const SneakerItem: React.FC<SneakerItemProps> = React.memo(
  ({sneaker, imageIndex, handlePrevImage, handleNextImage, index}) => {
    console.log(`Rendering SneakerItem ${sneaker.id}`) // Добавлено для отладки

    return (
      <li className={styles.item} key={sneaker.id}>
        <figure>
          <img className={styles.image} src={sneaker.images[imageIndex]} alt={sneaker.title} />
          <div className={styles.buttons}>
            <button className={styles.arrow} disabled={imageIndex === 0} onClick={() => handlePrevImage(index)}>
              {'<'}
            </button>
            <button
              className={styles.arrow}
              disabled={sneakersData[index].images.length === 1 || imageIndex === sneakersData[index].images.length - 1}
              onClick={() => handleNextImage(index)}
            >
              {'>'}
            </button>
          </div>
          <figcaption className={styles.info}>
            <h4 className={styles.name}>{sneaker.title}</h4>
            <p>
              <span className={classes(styles.price, sneaker.discount ? styles.price_discount : '')}>
                {sneaker.price}
                {sneaker.discount ? '' : 'р'}
              </span>{' '}
              {sneaker.discount ? (
                <span style={{color: 'red'}}>{Math.round(sneaker.price * ((100 - sneaker.discount) * 0.01))}p</span>
              ) : (
                ''
              )}
            </p>
          </figcaption>
        </figure>
        <button className={styles.button}>Купить</button>
      </li>
    )
  }
)
