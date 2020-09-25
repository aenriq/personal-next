import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>aenriq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.home_description}>
          Hi I'm Antonio, a third year computer science student at Arizona State University. I enjoy browsing aesthetically designed{" "} 
          <a href='/inspiration'>websites</a>
          {" "}for inspiration, as I am passionate about minimalist web design.
        </div>
      </main>
    </div>  
  )
}
