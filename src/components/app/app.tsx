import Header from '../header'
import Navigation from '../navigation'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.content}>
      <Header />
      <Navigation />
    </div>
  )
}

export default App
