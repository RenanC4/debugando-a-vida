import {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainMenu from '../components/menu'
import About from '../pages/about/aboutMe'
import {useRouteName} from '../components/menu.context'

export default function Home() {
  const { routeName } = useRouteName();

  return (
    <div className={styles.container}>
      <Head>
        <title>Debugando a vida</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
       <MainMenu/>
      </div>
      <div className={styles.content}>
        {routeName === ''&& <About/>}
        {routeName === 'Projects'&& <span>Projetos</span>}
        {routeName === 'Articles'&& <span>Artigos</span>}
        {routeName === 'Uses'&& <span>Uses</span>}
      </div>
    </div>
  )
}
