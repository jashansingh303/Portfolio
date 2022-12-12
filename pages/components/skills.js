import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {TbBrandTailwind, TbBrandJavascript} from "react-icons/tb"
import {FaReact,FaPython} from "react-icons/fa"

function Skills(){
    return(
        <div className="min-h-screen ">
            <h1 className="uppercase text-center lg:text-7xl md:text-5xl text-[23px] py-[25%] lg:py-[10%] text-orange-500">PROFESSIONAL skills</h1>
            <div className="grid grid-cols-2 pt-10 lg:flex ">
                <div className="mx-auto bg-white p-4 text-orange-500 rounded-lg hover:scale-150 duration-150">
                    <AiFillHtml5 className="text-7xl"/>
                    <p className="pl-3">Html5</p>
                </div>
                <div className="mx-auto bg-white p-4 text-orange-500 rounded-lg hover:scale-150 duration-150">
                    <TbBrandTailwind className="text-7xl ml-2"/>
                    <p className="ml-[-3px] text-sm">Tailwind CSS</p>
                </div>
                <div className="mx-auto bg-white p-4 text-orange-500 rounded-lg hover:scale-150 duration-150">
                    <TbBrandJavascript className="text-7xl"/>
                    <p className="ml-[-2px]">JavaScript</p>
                </div>
                <div className="mx-auto bg-white p-4 text-orange-500 rounded-lg hover:scale-150 duration-150">
                    <FaReact className="text-7xl"/>
                    <p className="pl-4">React</p>
                </div>
                <div className="mx-auto bg-white p-4 text-orange-500 rounded-lg hover:scale-150 duration-150">
                    <FaPython className="text-7xl"/>
                    <p className="pl-3">Python</p>
                </div>
                <div className="mx-auto bg-white p-4 text-orange-500 rounded-lg hover:scale-150 duration-150">
                    <AiFillGithub className="text-7xl"/>
                    <p className="pl-6">Git</p>
                </div>
            </div>

        </div>
    )
}

export default Skills