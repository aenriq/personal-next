import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LinkDisplay from '../components/LinkDisplay'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>aenriq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>I'm{" "}  
          <LinkDisplay url='\'>Antonio</LinkDisplay>
        </div>
        <div className={styles.home_description}>
          I am a third year computer science student at Arizona State University. I enjoy browsing aesthetically designed{" "} 
          <LinkDisplay url='/inspiration'>websites</LinkDisplay>
          {" "}for inspiration, as I am passionate about minimalist web design.
        </div>
      </main>
    </div>  
  )
}
