import React from "react";
import moment from "moment";
import styles from "../../styles/About.module.css";

function About() {
  return (
    <div className={styles.aboutMe}>
      <p className={styles.name}>Olá, eu sou o Renan.</p>
      <p>
        Sou um Programador de Campinas/SP 🇧🇷 <br />
        Tenho {moment().diff("1996-07-18", "years", false)} anos e vivo <s>criando</s> {" "}
         solucionando problemas a{" "}
        {moment().diff("2016-02-01", "years", false)}. Tenho um perfil T-shaped
        e sou certificado AWS Cloud Practitioner.{" "}
      </p>
      <p>
        Atualmente trabalho com{" "}
        <a href="https://clojure.org/" target="blank">
          Clojure
        </a>,{" "}
        <a href="https://flutter.dev/" target="blank">
          Flutter
        </a>{" "}
        e {" "}
        <a href="https://www.datomic.com/" target="blank">
         Datomic
        </a>{" "}

        lá no     <a href="https://github.com/nubank" target="blank">
         <span>Nubank</span>
        </a>.{" "}
        
      </p>
      <p>
        Eu uso <span>Programação</span> para resolver tudo!
      </p>
    </div>
  );
}

export default About;
