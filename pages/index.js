import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div>
      <Head>
        <title>aenriq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.home_description}>
          Hi I'm Antonio, a third year computer science student at Arizona State University. I enjoy browsing aesthetically designed{" "} 
          <Link href='/inspiration'><a className={"linkDisplay"}>websites</a></Link>
          {" "}for inspiration as I am passionate about minimalist web design.
          
        </div>


      </main>
    </div>  
  )
}
