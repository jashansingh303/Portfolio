import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {TbBrandTailwind, TbBrandJavascript} from "react-icons/tb"
import {FaReact,FaPython} from "react-icons/fa"
import {motion as m} from "framer-motion"

function Skills(){
    return(
        <m.div className="min-h-screen pt-32" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 2}}>
            <h1 className="uppercase text-center lg:text-8xl md:text-5xl text-4xl py-[25%] lg:py-[10%] text-orange-500">PROFESSIONAL skills</h1>
            <div className="grid grid-cols-2 pt-10 lg:flex ">
                <div className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <AiFillHtml5 className="text-7xl"/>
                    <p className="pl-3">Html5</p>
                </div>
                <div className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <TbBrandTailwind className="text-7xl ml-2"/>
                    <p className="ml-[-3px] text-sm">Tailwind CSS</p>
                </div>
                <div className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <TbBrandJavascript className="text-7xl"/>
                    <p className="ml-[-2px]">JavaScript</p>
                </div>
                <div className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <FaReact className="text-7xl"/>
                    <p className="pl-4">React</p>
                </div>
                <div className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <FaPython className="text-7xl"/>
                    <p className="pl-3">Python</p>
                </div>
                <div className="mx-auto bg-white lg:p-10 p-6 mb-3 text-orange-500 rounded-lg lg:hover:scale-150 duration-150">
                    <AiFillGithub className="text-7xl"/>
                    <p className="pl-6">Git</p>
                </div>
            </div>

        </m.div>
    )
}

export default Skills