import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

/* Head, nav and footer on all pages */
function MyApp({ Component, pageProps }) {
  return(
      <div className={styles.container}>
        <Head>
          <title>My portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;600&display=swap" rel="stylesheet"></link>
        </Head>

        <main className={styles.main}>
        
          <Header/>
          <Component {...pageProps} />
        </main>

        <Footer/>
      </div>
  )

}

export default MyApp

