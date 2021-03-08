import {useState, useEffect} from 'react'
import styles from '../../styles/Card.module.css'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function Card({imageURL, title, link, width, height}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image 
					src={imageURL} 
					alt={title}
					width={width}
					height={height}
				/>
      </div>
      <div className={styles.buttons}>
        <div className={styles.git}>
          <a href={link} target='blank'>
          <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
            Código
          </a>
        </div>
        <div className={styles.open}>Detalhes</div>
      </div>
    </div>
  )
}

export default Card