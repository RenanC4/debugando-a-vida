import {useState, useEffect} from 'react'
import styles from '../../styles/Card.module.css'

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Title</div>
      <div className={styles.buttons}>
        <div className={styles.git}>github</div>
        <div className={styles.open}>ver</div>
      </div>
    </div>
  )
}

export default Card