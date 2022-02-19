import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header' 
import Footer from '../components/footer/Footer'

const Home: NextPage = () => {
  return (
    <div className = "w-full h-full">
      <Head>
        <title>Hemank Patwal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Header/>
          <Footer/>
    </div>
  )
}

export default Home
