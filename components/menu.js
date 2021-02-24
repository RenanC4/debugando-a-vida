import Link from 'next/link'
import Typewriter from 'typewriter-effect';

import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useRouteName} from '../components/menu.context'

function MainMenu() {
  const { routeName, setRouteName } = useRouteName();
  console.log(routeName)

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
        <div className={styles.typeriter}>
        <span>Desenvolvedor&nbsp;</span>
        <strong>
        <Typewriter
          options={{
            strings: ['Javascript', 'Node', 'React', 'React Native'],
            autoStart: true,
            loop: true,
          }}
        />
        </strong>
        </div>
        <div className={styles.contacts}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>         
              <a href="https://github.com/renanc4" target="blank">Github</a>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>         
              <a href="https://www.linkedin.com/in/renancribeiro/" target="blank">Linkedin</a>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>         
              <a href="https://www.instagram.com/camp.renan/" target="blank">Instagram</a>
        </div>
        <div className={styles.otherMenu}>
          <span className={routeName === 'Projects' ? styles.selected : styles.notSelected}
                onClick={() => {setRouteName('Projects')}}>Projetos</span>
          <span className={routeName === 'Articles' ? styles.selected : styles.notSelected}
                onClick={() => {setRouteName('Articles')}}>Artigos</span>
          <span className={routeName === 'Uses' ? styles.selected : styles.notSelected}
                onClick={() => {setRouteName('Uses')}}>/uses</span>
        </div>
      </div>
    </div>
  )
}

export default MainMenu