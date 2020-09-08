import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>aenriq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>I'm{" "}  
          <a href="localhost:3000">
            Antonio
          </a>
        </div>
        <div className={styles.home_description}>
          Computer science student in junior year at Arizona State University. I am a mechanical keyboard enthusiast.
        </div>
      </main>
    </div>  
  )
}
