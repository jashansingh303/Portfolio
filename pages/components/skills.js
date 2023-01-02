import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {TbBrandTailwind, TbBrandJavascript} from "react-icons/tb"
import {SiKotlin} from "react-icons/si"
import {FaReact,FaPython} from "react-icons/fa"
import {motion as m} from "framer-motion"

function Skills(){
    return(
        <m.div 
        className="min-h-screen pt-32" >
            <m.h1 initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}} transition={{duration:1.4, ease:"easeInOut"}}
            className="uppercase text-center lg:text-8xl md:text-5xl text-4xl py-[25%] lg:py-[10%] text-orange-500">PROFESSIONAL skills</m.h1>
            <m.div initial={{opacity:0, x:"-100%"}} whileInView={{opacity:1, x:"0"}} transition={{duration:1.2, ease:"easeInOut"}} className="grid grid-cols-2 pt-10 lg:flex ">
                <m.div 
                    className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <AiFillHtml5 className="text-7xl"/>
                    <p className="pl-3">Html5</p>
                </m.div>
                <m.div 
                className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <TbBrandTailwind className="text-7xl ml-2"/>
                    <p className="ml-[-3px] text-sm">Tailwind CSS</p>
                </m.div>
                <m.div 
                className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <TbBrandJavascript className="text-7xl"/>
                    <p className="ml-[-2px]">JavaScript</p>
                </m.div>
                <m.div 
                className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <FaReact className="text-7xl"/>
                    <p className="pl-4">React</p>
                </m.div>
                <m.div 
                className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <FaPython className="text-7xl"/>
                    <p className="pl-3">Python</p>
                </m.div>
                <m.div 
                className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <SiKotlin className="text-7xl ml-3"/>
                    <p className="pl-6 mt-1">Kotlin</p>
                </m.div>
            </m.div>

        </m.div>
    )
}

export default Skills