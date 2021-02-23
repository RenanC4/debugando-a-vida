import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MainMenu() {
  return (
    <div className={styles.container}>

    <div className={styles.item}>
        <div className={styles.polaroid}>
          <Image 
            src="/profileLight.jpg" 
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <span className={styles.caption}>Renan Campos</span>
        </div>
      </div>
      <div className={styles.developer}>
        <span>Desenvolvedor <strong>Javascript</strong></span>
        <div className={styles.github}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>         
              <a href="https://github.com/renanc4" target="blank">Github</a>
            
        </div>
      </div>
    </div>
  )
}

export default MainMenu