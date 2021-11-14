import { useState } from "react";
import Typewriter from "typewriter-effect";
import styles from "../styles/Menu.module.css";
import Image from "next/image";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteName } from "../components/menu.context";

function MainMenu() {
  const { routeName, setRouteName } = useRouteName();
  console.log(routeName);
  const [style, setStyle] = useState(1);

  function teste(style2) {
    if (style2 === 1) {
      setStyle(2);
    }
    if (style2 === 2) {
      setStyle(3);
    }
    if (style2 === 3) {
      setStyle(4);
    }
    if (style2 === 4) {
      setStyle(1);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.polaroid}>
          <Image
            src="/profileLight.jfif"
            alt="Picture of the author"
            width={400}
            height={500}
          />
          <span className={styles.caption}>
            Renan Campos -{" "}
            <a
              href="https://www.16personalities.com/br/personalidade-entp"
              target="blank"
            >
              ENTP
            </a>
          </span>
        </div>
      </div>
      <div className={styles.developer}>
        <div className={styles.typeriter}>
          <span>Desenvolvedor&nbsp;</span>
          <div
            className={
              styles.js
            }
          >
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Clojure")
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    teste(1);
                  })
                  .typeString("Flutter")
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    teste(2);
                  })
                  .start();
              }}
            />
          </div>
        </div>
        <div className={styles.contacts}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <a href="https://github.com/renanc4" target="blank">
            Github
          </a>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          <a href="https://www.linkedin.com/in/renancribeiro/" target="blank">
            Linkedin
          </a>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          <a href="https://www.instagram.com/non_recursive/" target="blank">
            Instagram
          </a>
        </div>
        <div className={styles.otherMenu}>
          <span>
            <a href="https://github.com/renanc4" target="blank">
              Projetos
            </a>
          </span>
          <span>
            <a href="https://medium.com/@renanc433" target="blank">
              Artigos
            </a>
          </span>
          <span>
            <a href="mailto:renanc433@gmail.com" target="blank">
              Contato
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
