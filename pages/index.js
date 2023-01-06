import Head from 'next/head'
import Project from './components/projects'
import Project2 from './components/kotlinProjects'
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
        <Head>
          <title>Jashandeep Singh</title> 
          <link rel="icon" href="/logo.png"/>
        </Head>

        <div>
          <Hero/>
        </div>


        <div className='h-4'></div>

        <m.div id='about'>
          <About/>
        </m.div>

        <div className='h-4'></div>

        <main className='bg-gray-800 text-white' >

        <m.div className=' min-h-screen' id='portfolio' > 

          <m.p initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}}  transition={{duration:1.4, ease:'easeInOut'}} className='lg:text-8xl md:text-5xl text-3xl uppercase text-center pb-16 text-orange-500 pt-32 lg:pt-52 ' >check out my work</m.p>  
          <m.h1 initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}}  transition={{duration:1.4, ease:'easeInOut'}} className='w-full text-center lg:text-3xl uppercase'>Web Projects</m.h1>
          <div className='xl:flex gap-10 sm:my-5 lg:pt-4'>
            <m.div initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}}  transition={{duration:1.4, ease:'easeInOut'}}>
              <Project name="Search.GG" description="Search.GG is a website which allows users to search their League of Legends names and see in depth data about their profiles such as level, ranks, and game data of their previous 5 games from data obtained from the Riot Games API."
              tech1="HTML" tech2="Tailwind CSS" tech3 = "ReactJS" tech4="Express" btn1="Video" url="https://www.youtube.com/watch?v=R1U1SgYHz94" url2="https://github.com/jashansingh303/LeagueOfLegendsWebsite" className="flex-1"/>
            </m.div>
          
          <m.div initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}}  transition={{duration:1.2, ease:'easeInOut'}}>
            <Project name="Christain Paz Portfolio" description="Portfolio Website created for a Client to display their Illustrations and Animations. Which allows viewers to see their skills and what motivates them to become more skilled in their craft and crate quality content. "
            tech1="HTML" tech2="Tailwind CSS" tech3 = "Javascript" tech4="ReactJS" className="flex-1" btn1="Website" url="https://christainpaz.netlify.app/" url2="https://github.com/jashansingh303/ChristainPazPortfolioWebsite"/>
          </m.div>

    
          <m.div initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}}  transition={{duration:1, ease:'easeInOut'}}>
            <Project name="Portfolio" description="My portfolio website which you are currently on which displays my development skills and gives information about myself and who I am. Additionally, it allows users to contact me through the use of EmailJS" 
            tech1="HTML" tech2="Tailwind CSS" tech3 = "Javascript" tech4="ReactJS" className="flex-1" btn1="Website" url="https://jashandeep.netlify.app/" url2="https://github.com/jashansingh303/Portfolio"/>
          </m.div>
          </div>

        <m.h1 initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}}  transition={{duration:1.4, ease:'easeInOut'}} className='w-full text-center lg:text-3xl uppercase'>Android Projects</m.h1>
        <div className='lg:flex gap-10 justify-center'>
        <m.div className='' initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}}  transition={{duration:1, ease:'easeInOut'}}>
            <Project2 name="Parstagram" description="Parstagram is a photo sharing app similar to Instagram using Parse as its backend." tech1="Kotlin" tech2="Android Studio" url2="https://github.com/jashansingh303/Parstagram" className="flex-1"/>
        </m.div>
        <m.div initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}}  transition={{duration:1.2, ease:'easeInOut'}}>
            <Project2 name="Simple Twitter" description="SimpleTwitter is an android app that allows a user to view his Twitter timeline. The app utilizes Twitter REST API." tech1="Kotlin" tech2="Android Studio" url2="https://github.com/jashansingh303/SimpleTwitter" className="flex-1"/>
            </m.div>
        </div>
        </m.div>



        <div className='h-4'></div>
      
        <div id="skills">
          <Skills />
        </div>

        <div className='h-4'></div>  

        <m.section id='contact' className='bg-gray-800 min-h-screen lg:pt-40 pt-1 pb-3' initial={{ opacity:0, x:"-100%"}} whileInView={{ opacity:1, x:"0"}}  transition={{duration:1.5 , ease: "easeIn"}}>
          <ContactUs/>
        </m.section>

        </main>
      </div>
    </div>

  )
}
