import Head from 'next/head'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Projects from '../components/projects'
import About from '../components/about'
import Skills from '../components/skills'
import Contact from '../components/contact'

export default function Home() {
  return <>
    <Head>
      <title>Jashandeep Singh — Full Stack Developer</title>
      <meta name="description" content="Jashandeep Singh is a full stack developer based in New York City. Explore Vortex, his League of Legends desktop companion, web applications, and Android projects." />
      <meta name="theme-color" content="#1c1e1f" />
      <link rel="icon" href="/logo.png" />
    </Head>
    <a className="skip-link" href="#main">Skip to content</a>
    <NavBar />
    <main id="main" className="site-container"><Hero /><Projects /><About /><Skills /><Contact /></main>
    <footer className="site-container footer">
      <a href="#hero" className="footer-name">Jashandeep Singh<span aria-hidden="true">.</span></a>
      <p>Built with care in New York City.</p>
      <a className="text-link" href="#hero">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  </>
}
