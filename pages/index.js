import Head from 'next/head'
import Project from './components/projects'
import ContactUs from './components/contact'
import React from 'react'
import NavBar from './components/navbar'
import Hero from './components/hero'
import Skills from './components/skills'

export default function Home() {
  return ( 
    <div className='bg-gray-800 text-white scroll-smooth  '>
      <NavBar/>
      <div className='bg-gray-800 text-white max-w-[80%] mx-auto'>

        <Head >
          <title>Jashandeep Singh</title> 
          <link rel="icon" href="/logo.png"/>
        </Head>

        <div id='hero' className=''>
          <Hero/>
        </div>


        <main className='bg-gray-800 text-white'>

        <div className='min-h-screen' id='portfolio' > 
          <p className='lg:text-7xl md:text-5xl text-3xl uppercase text-center pb-16 text-orange-500 pt-32 lg:pt-52 ' >check out my work</p>  

          <div className='xl:flex gap-10 sm:my-5 lg:pt-4'>
          <Project name="Project 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus fugit ad molestias ut explicabo veritatis deserunt deleniti, velit aliquid at, blanditiis aliquam cupiditate nesciunt. Corporis a cumque laudantium id."
          tech1="HTML" tech2="Tailwind CSS" tech3 = "Javascript" tech4="ReactJS" className="flex-1"/>

          <Project name="Project 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus fugit ad molestias ut explicabo veritatis deserunt deleniti, velit aliquid at, blanditiis aliquam cupiditate nesciunt. Corporis a cumque laudantium id."
          tech1="HTML" tech2="Tailwind CSS" tech3 = "Javascript" tech4="ReactJS" className="flex-1"/>

          <Project name="Project 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus fugit ad molestias ut explicabo veritatis deserunt deleniti, velit aliquid at, blanditiis aliquam cupiditate nesciunt. Corporis a cumque laudantium id."
          tech1="HTML" tech2="Tailwind CSS" tech3 = "Javascript" tech4="ReactJS" className="flex-1"/>
          </div>
        </div>

        <div id="skills" className='pt-36'>
          <Skills/>
        </div>

          
        <section id='contact' className='bg-gray-800 min-h-screen lg:pt-40 pt-1 pb-3 '>
          <ContactUs/>
        </section>

        </main>
      </div>
    </div>

  )
}
