import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyAmpPage from '../components/header'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debugando a vida</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyAmpPage />
      <main className={styles.main}>
        aaaa
      </main>
    </div>
  )
}
