import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import Button from './components/Button'
// import './App.module.css'
// import sendAsync from '../../db/renderer'

const App = () => {
  const [usuarios, setUsuarios] = useState([])

  const actualiza = () => {
    // const lstUsuarios = await
    api.databaseApi.selectData().then((data) => {
      setUsuarios(data)
    })
  }
  return (
    <div>
      <h1 className={styles.titulo}>
        This great is my app <span className={styles.tambien}>tambien</span>
      </h1>
      <Button label='Guardar' onClick={(e) => {
        api.notificationApi.sendNotification('JSSA')
      }}></Button>
      <Button label='Mostrar' onClick={(e) => {
        actualiza()
      }}></Button>
      <label>{
        usuarios.map((u) => (
          <div key={u.userID}>{u.UserName}</div>
        ))
        }</label>
    </div>
  )
}

export default App
