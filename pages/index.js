import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import SideNavigation from '@/components/SideNavigation'


export default function Home() {
  return (
    <>
      <Head>
        <title>Assessment 1</title>
        <meta name="description" content="This is for assessment 1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Miffy.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.sidenav}>
          <SideNavigation/>
        </div>
        <div className={styles.headercard}>
          <Header/>
          <div className={styles.cardcontainer}>
            <div className={styles.cardleft}>
              <Card title="Experiences" description="Teaching at BCIT" borderColor="2px solid red"/>
              <Card title="Projects" description="Website created with HTML and CSS" borderColor="2px solid yellow"/>
              <Card title="Skills" description="Nextjs, HTML, CSS, JavaScript, Playwright, JEST" borderColor="2px solid blue"/>
            </div>
            <div className={styles.cardright}>
              <Card title="Education" description="Digital Design and Development Diploma" borderColor="2px solid orange"/>
              <Card title="Volunteering" description="Wildlife Rescue Association by feeding animals and cleaning pens" borderColor="2px solid green"/>
              <Card title="Interests" description="I like biking" borderColor="2px solid violet"/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
