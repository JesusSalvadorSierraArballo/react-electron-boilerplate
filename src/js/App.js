import React from 'react'
import styles from './App.module.css'
import Button from './components/Button'
// import './App.module.css'
const App = () => {
  return (
    <div>
    <h1 className={styles.titulo}>
      This great is my app <span className={styles.tambien}>tambien</span>
    </h1>
    <Button label='Guardar'></Button>
    </div>
  )
}

export default App
