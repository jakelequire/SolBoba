import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '../components/navbar.jsx'

export default function Contact() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Sol Boba | Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <main className={styles.main}>
              <div className="menu-homepager">
                  <NavBar> </NavBar>

              </div>
          </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}