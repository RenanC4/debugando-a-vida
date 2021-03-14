import Card from "../../components/card/card";
import styles from "../../styles/Projects.module.css";
import React, { memo } from "react";
function Projects() {
  return (
    <div className={styles.container}>
      <span className={styles.title}> Meus projetos </span>
      <div className={styles.content}>
        <Card
          imageURL="/splash_icon.png"
          width={250}
          height={250}
          title="IFit logo"
          link="https://github.com/RenanC4/Ifit"
        />
        <Card
          imageURL="/busca_time_logo.png"
          width={250}
          height={150}
          title="Busca Time logo"
          link="https://gitlab.com/RenanC4/busca-time-front"
        />
        {/*<Card imageURL="/fleury_logo.png" width={200} height={200} title="Fleury logo" link="https://github.com/RenanC4/DesafioFleuryFront"/>*/}
      </div>
    </div>
  );
}

export default memo(Projects);
