import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainMenu from '../components/menu'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debugando a vida</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <MainMenu/>
    </div>
  )
}
