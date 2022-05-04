import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/aboutus'
import Masthead from '../components/masthead'
import Skills from '../components/skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WS</title>
        <meta name="description" content="Warner Systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutUs />
      <Skills />
    </div>
  )
}

export default Home
