import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Madelyn Vagle</title>
        <meta name="description" content="Madelyn Vagle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
            <Nav />
            <h1 className={styles.title}>
                About
            </h1>
        </main>
    </div>
  )
}