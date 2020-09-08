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
          I am a third year computer science student at Arizona State University. I enjoy{" "} <a href="">
            reading
          </a>
           about computers and software.
        </div>
      </main>
    </div>  
  )
}
