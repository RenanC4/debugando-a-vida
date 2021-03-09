import React from "react";
import moment from "moment";
import styles from "../../styles/About.module.css";

function About() {
  return (
    <div className={styles.aboutMe}>
      <p className={styles.name}>Olá, eu sou o Renan.</p>
      <p>
        Sou um Desenvolvedor de Campinas/SP 🇧🇷. <br />
        Tenho {moment().diff("1996-07-18", "years", false)} anos e pago meus
        boletos solucionando problemas a{" "}
        {moment().diff("2016-02-01", "years", false)}. Tenho um perfil T-shaped
        e sou certificado AWS Cloud Practitioner.
      </p>
      <p>
        Atualmente trabalho com{" "}
        <a href="https://nextjs.org/" target="blank">
          NextJS
        </a>{" "}
        e NodeJS com typescript em uma arquitetura de microsserviços utilizando
        TDD para o desenvolvimento.
      </p>
      <p>
        Eu uso <span>Javascript</span> para fazer tudo!
      </p>
    </div>
  );
}

export default About;
