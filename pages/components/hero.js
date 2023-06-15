import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { Link } from 'react-scroll'
import {motion as m} from "framer-motion"

function Hero(){
    return(
    <m.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1.5, ease:"easeIn"}} className='hero min-h-screen uppercase font-mono ease-in duration-200 mt-[-40px] bg-gray-800' id="hero" > 
        <div className=''>
            <div className='max-w-[1000px] w-full h-screen mx-auto text-center flex flex-col justify-center uppercase'>
                <p className='text-orange-500 font-bold lg:text-[102px] md:text-6xl sm:text-5xl text-4xl py-6 hover:animate-pulse cursor-pointer '>Jashandeep Singh</p>
                <div className="flex flex-col mx-auto max-w-[80%] lg:max-w-full ">
                    <p className='lg:text-5xl lg:pr-7 md:text-4xl md:pr-6 sm:text-3xl text-2xlsm:pr-5 font-bold py-6 pr-4 cursor-default'>Software Developer/Computer Science Graduate </p>
                    <m.button whileTap={{scale:0.9}} className="lg:text-lg md:text-md sm:text-sm text-xs sm:p-3 bg-orange-500 rounded-xl my-auto p-2 font-bold hover:scale-125 duration-100 
                    font-serif uppercase max-w-[50%] mx-auto mt-5 lg:mt-8"><Link to="portfolio" spy={true} smooth={true} duration={700}>see My Work</Link></m.button>
                </div>
                <div className='flex justify-center space-x-5 text-5xl pt-10'>
                <a href='https://github.com/jashansingh303' target="_blank" rel="noreferrer"><AiFillGithub className="hover:scale-150 hover:bg-orange-500 rounded-full duration-150"/></a> 
                <img className="hover:scale-150 hover:bg-orange-500 rounded-sm duration-150 h-12 w-10" src="icons8-resume-80.png"/>
                <a href='https://www.linkedin.com/in/jashandeep-singh-/' target="_blank" rel="noreferrer"><AiFillLinkedin className="hover:scale-150 hover:bg-orange-500 rounded-sm duration-150"/></a>
                
            </div>
            </div>

        </div>
    </m.div>
    )
}

export default Hero