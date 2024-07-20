import React from 'react'
import {sneakersData} from '../../mockData'
import styles from './sneakers.module.scss'
import {SneakerItem} from '../sneaker-item'

const Sneakers = () => {
  const [imageIndexes, setImageIndexes] = React.useState<{[key: string]: number}>(
    sneakersData.reduce((acc, _, i) => ({...acc, [i]: 0}), {})
  )

  const handlePrevImage = (i: number) => {
    setImageIndexes(prevIndexes => ({
      ...prevIndexes,
      [i]: prevIndexes[i] === 0 ? sneakersData[i].images.length - 1 : prevIndexes[i] - 1,
    }))
  }

  const handleNextImage = (i: number) => {
    setImageIndexes(prevIndexes => ({
      ...prevIndexes,
      [i]: prevIndexes[i] === sneakersData[i].images.length - 1 ? 0 : prevIndexes[i] + 1,
    }))
  }

  return (
    <ul className={styles.list}>
      {sneakersData.map((el, i) => (
        <SneakerItem
          key={el.id}
          index={i}
          sneaker={el}
          imageIndex={imageIndexes[i]}
          handleNextImage={handleNextImage}
          handlePrevImage={handlePrevImage}
        />
      ))}
    </ul>
  )
}

export default Sneakers
