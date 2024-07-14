import Header from '../header'
import Navigation from '../navigation'
import Promo from '../promo'
import Sidebar from '../sidebar'
import Sneakers from '../sneakers'
import styles from './app.module.scss'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main className={styles.main}>
        <Sidebar />
        <Sneakers />
        <Promo />
      </main>
    </>
  )
}

export default App
