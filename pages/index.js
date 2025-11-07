import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Certifications from '../components/Certifications/Certifications'
import Contact from '../components/Contact/Contact'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mansoor-Ul-Hassan - Portfolio</title>
        <meta name="description" content="Mansoor-Ul-Hassan's Personal Portfolio Website" />
        <meta name="author" content="Mansoor-Ul-Hassan" />      
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <AnimatePresence>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </AnimatePresence>
    </>
  ) 
}
