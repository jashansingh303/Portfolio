import {motion as m} from "framer-motion"

function About() {
    return(
        <m.div initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}} transition={{duration: 1, ease:"easeInOut"}} className="uppercase min-h-screen text-center bg-gray-800">
            <div className="">
                <h1 className="lg:text-8xl md:text-7xl text-[37px] text-orange-500 pt-32 ">A bit about me</h1>
                <p className="lg:text-5xl md:text-2xl text-lg pt-4 lg:pt-32">I am a software developer based in New York City. I graduated with a bachelors in computer Science from Queens College. I am an avid gamer who likes to 
                    spend his time creating websites and playing competitive games such as Overwatch and League Of Legends
                </p>
            </div>
        </m.div>
    )
}

export default About