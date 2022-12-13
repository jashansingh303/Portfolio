import Head from 'next/head'
import Project from './components/projects'
import ContactUs from './components/contact'
import React, {useRef, useEffect, useState } from 'react'
import NavBar from './components/navbar'
import Hero from './components/hero'
import Skills from './components/skills'
import { useInView } from 'react-intersection-observer'
import styles from '/styles/Home.module.css'
import {motion as m} from "framer-motion"
import About from './components/about'

export default function Home() {
  const { ref: myRef, inView: elementVis} = useInView()
  const { ref: rocket, inView: rocketRef} = useInView()

  return ( 
    <div className='bg-gray-800 text-white scroll-smooth' ><div className=""></div>

      <div>
          <NavBar className=""/>
      </div>

      <div className='bg-gray-800 text-white max-w-[80%] mx-auto'>
        <Head >
          <title>Jashandeep Singh</title> 
          <link rel="icon" href="/logo.png"/>
        </Head>

        <m.div id='hero' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.75}} >
          <Hero/>
        </m.div>

        <m.div id='about'>
          <About/>
        </m.div>

        <main className='bg-gray-800 text-white' >

        <m.div className=' min-h-screen' id='portfolio' initial={{ opacity:0 }} whileInView={{ opacity:1}}  transition={{duration:0.75 , ease: "easeIn"}}> 
          <p className='lg:text-8xl md:text-5xl text-3xl uppercase text-center pb-16 text-orange-500 pt-32 lg:pt-52 ' >check out my work</p>  

          <div className='xl:flex gap-10 sm:my-5 lg:pt-4'>
          <Project name="Project 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus fugit ad molestias ut explicabo veritatis deserunt deleniti, velit aliquid at, blanditiis aliquam cupiditate nesciunt. Corporis a cumque laudantium id."
          tech1="HTML" tech2="Tailwind CSS" tech3 = "Javascript" tech4="ReactJS" className="flex-1"/>

          <Project name="Project 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus fugit ad molestias ut explicabo veritatis deserunt deleniti, velit aliquid at, blanditiis aliquam cupiditate nesciunt. Corporis a cumque laudantium id."
          tech1="HTML" tech2="Tailwind CSS" tech3 = "Javascript" tech4="ReactJS" className="flex-1"/>

          <Project name="Project 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus fugit ad molestias ut explicabo veritatis deserunt deleniti, velit aliquid at, blanditiis aliquam cupiditate nesciunt. Corporis a cumque laudantium id."
          tech1="HTML" tech2="Tailwind CSS" tech3 = "Javascript" tech4="ReactJS" className="flex-1"/>
          </div>
        </m.div>
      
        <m.div id="skills"  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.75}}>
          <Skills />
        </m.div>

          
        <m.section id='contact' className='bg-gray-800 min-h-screen lg:pt-40 pt-1 pb-3' initial={{ opacity:0 }} whileInView={{ opacity:1}}  transition={{duration:1 , ease: "easeIn"}}>
          <ContactUs/>
        </m.section>

        </main>
      </div>
    </div>

  )
}
