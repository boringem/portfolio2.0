import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Madelyn Vagle</title>
        <meta name="description" content="Madelyn Vagle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className={styles.main}>
          <div>
            <Image 
              src="/portfolio/illustration-home.png"
              alt="homepage illustration"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.grid}>
            <Link href="/projects">
              <a className={styles.card}>Projects</a>
            </Link>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline hover:text-project2"
        >
          Powered by Vercel
        </a>
        <a href="https://www.github.com/boringem" className="hover:text-project2 hover:underline" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/madelyn-vagle-842b76123/" className="hover:text-project2 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  )
}
