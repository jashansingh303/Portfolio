import {motion as m} from "framer-motion"

function Project(props) {
    return(
    <m.div className='pt-10 pb-12 my-10 text-center bg-slate-100 text-black rounded-lg flex flex-col shadow-lg font-serif lg:min-w-[430px] lg:min-h-[340px]'>
      <h1 className="text-orange-600 font-bold">
          {props.name}
      </h1>
      <p className='pt-5 flex sm:text-sm mx-10'>
          {props.description}
      </p>
      <ul className='flex pt-3 space-x-3 justify-center lg:text-lg text-orange-600 font-bold mx-5 text-sm uppercase'>
        <li>{props.tech1}</li>
        <li>{props.tech2}</li>
        <li>{props.tech3}</li>
        <li>{props.tech4}</li>
      </ul>
      <ul className='pt-5 flex space-x-10 justify-center text-white'>
        <m.li whileTap={{scale:0.9}} whileHover={{scale: 1.2}} className='p-3 bg-orange-600 rounded-lg'><m.a target="_blank" rel="noreferrer" href={props.url}>{props.btn1}</m.a></m.li>
        <m.li whileTap={{scale:0.9}} whileHover={{scale: 1.2}} className='p-3 bg-orange-600 rounded-lg'><a target="_blank" rel="noreferrer" href={props.url2}>Code</a></m.li>
      </ul>
  </m.div>
    )
}

export default Project