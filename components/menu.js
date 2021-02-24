import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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
        <span>Desenvolvedor <strong>Javascript</strong></span>
        <div className={styles.github}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>         
              <a href="https://github.com/renanc4" target="blank">Github</a>
        </div>
        <div className={styles.otherMenu}>
          <span className={routeName === 'Contact' ? styles.selected : styles.notSelected}
                onClick={() => {setRouteName('Contact')}}>Contato</span>
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