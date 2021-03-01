import React from 'react'
import moment from 'moment'
import styles from '../../styles/About.module.css'


function About () {
  return (
    <div className={styles.aboutMe}>
      <p className={styles.name}>
        Olá, eu sou o Renan. 
      </p> 
      <p>Sou um Engenheiro de Software de Campinas, São Paulo 🇧🇷. 
      Tenho {moment().diff('1996-07-18', 'years',false)} anos e
      trabalho com desenvolvimento Web e Mobile. Tenho um perfil T-shaped,
      trabalho com serviços Cloud e sou certificado AWS Cloud Practitioner.
      </p>
      <p>
      Eu uso  <span>Javascript</span> para fazer tudo.<br/>
      </p>
      <p>Comecei a me interessar por tecnologia ainda quando criança, <ligth style={{
        textDecoration:"line-through",
        textDecorationColor: "#000"
        }}>quando crakeava jogos de computador
        e hackeava contas do Orkut por diversão</ligth>,
        quando ganhei um computador da minha mãe quando fiz 10 anos.
        Passava tardes jogando, desenhando no paint e fazendo animações em Flash.
      </p>
      <p>Decidi estudar mais sobre computação quando terminei o ensino medio em 2013. Estudei TI na Escola Tecnica de São Paulo e Análise e desenvolvimento de Sistemas no Instituto Federal de educação ciencia de São Paulo (IF pros mais chegados).
        Durante o primeiro semestre da faculdade comecei a fazer alguns projetos para amigos e familiares, foram meus primeiros freelas,
        pequenos sistemas e sites que me ajudavam a comprar o lanche na hora do intervalo.
      </p>
      <p>Logo no segundo semestre da faculdade consegui um estágio na IBM, na área de infraestrutura
        cuidava de algumas contas canadenses que rodavam em Linux e Unix, RedHat e AIX. Foi onde eu melhorei meu ingles e aprendi a importancia do networking.
        Fiquei um bom tempo lá, participei de Hackatons
        e eventos de desenvolvimento, sempre gostei do ambiente criativo e o poder de criar soluções utilizando apenas um editor de texto
        e meu cérebro, solucionar problemas do meu dia a dia fez um interesse se transformar numa paixão, da qual decidi seguir carreira.
      </p>
      <p>Se quiser saber mais sobre minha carreira, veja meu perfil no <a href="https://www.linkedin.com/in/renancribeiro/" target="blank">LinkedIN</a></p>
      <p>Eu moro na única metropole brasileira que não é uma capital. Campinas é a cidade que escolhi pra viver,
        tem vida noturna, a lagoa do taquaral, o acelerador de particulas, a Unicamp, o observatório, tem até lugar pra fazer trilha e respirar ar puro. 
        Da minha janela vejo o colégio Culto a ciencia, notorio por ter tido um aluno ilustre, Alberto Santos Dumont, ele mesmo,
        o pai da aviação.
      </p>
      <p>
        Gosto de jogar video game.
      </p>
      <p>Também sou <light style={{
        textDecoration:"line-through",
        textDecorationColor: "#000"
        }}>crossfiteiro</light> crossfiter, ja participei de um campeonato inclusive.
        </p>
        <p>Me interesso por arte e filosofia, tento seguir uma linha minimalista nesse mundo consumista
          e gosto bastante de estoicismo, ainda me impressiono como essa filosofia milenar é tão atual.
        </p>
        <p>
          Além disso, gosto de fazer piadas ruins e ja fui padeiro.
        </p>
    </div>
  )
}

export default About