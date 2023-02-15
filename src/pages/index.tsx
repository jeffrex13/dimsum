import Head from 'next/head'
import { Poppins } from '@next/font/google'
import { Element } from 'react-scroll'

import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function index() {
  return (
    <>
      <Head>
        <title>Dimsum Place</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.variable} font-poppins`}>
        <div>
          <Navbar />
          <Home />
          <Element name="about">
            <About />
          </Element>
          <Element name="menu">
            <Menu />
          </Element>
          <Element name="contact">
            <Footer />
          </Element>
        </div>
      </main>
    </>
  )
}
