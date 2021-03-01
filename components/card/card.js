import {useState, useEffect} from 'react'
import styles from '../../styles/Card.module.css'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Title</div>
      <div className={styles.buttons}>
        <div className={styles.git}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon}/>   
            Código
        </div>
        <div className={styles.open}>Detalhes</div>
      </div>
    </div>
  )
}

export default Card