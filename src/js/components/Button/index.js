import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
  const { label, onClick } = props

  return (
    <button onClick={onClick} className={styles.bottondos}>
      {label}
    </button>
  )
}

export default Button
