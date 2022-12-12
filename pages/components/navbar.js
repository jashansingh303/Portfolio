import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'
import Image from 'next/image'

function NavBar() {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return(
    <div className='flex justify-between items-center h-24 text-white mx-auto font-serif '>

        <div className='flex justify-between w-full fixed bg-gray-800 h-24 border-b border-b-orange-500 p-4'>
            <h1 className='md:w-full font-bold uppercase text-orange-500 sticky '><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
                <Image src='/logo.png 'alt='' width={100} height={100} className="mt-[-21px] border-b border-b-orange-500"/></Link>
            </h1>
            <ul className=' uppercase space-x-10 hidden md:flex text-3xl'>
                <li className='p-4 hover:scale-125 duration-100 '><Link to="portfolio" spy={true} smooth={true} duration={700}>Portfolio</Link></li>
                <li className='p-4 hover:scale-125 duration-100 '><Link to="skills" spy={true} smooth={true} duration={700}>Skills</Link></li>
                <li className='p-4 hover:scale-125 duration-100 '><Link to="contact" spy={true} smooth={true} duration={700}>Contact</Link></li>
            </ul>
        </div>

       


      <div onClick={handleNav} className="block md:hidden fixed right-3">
        {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/> }
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[85%] border-r h-full border-b ease-in-out duration-500 bg-gray-800' : 'fixed left-[-100%] top-0 w-[60%] border-r h-full border-b font-serif ease-in-out duration-500' }>
        <h1 onClick={!nav} className='w-full text-3xl font-bold text-customGreen pt-[20px] pl-[10px] h-24 text-orange-500'>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
                <Image src='/logo.png 'alt='' width={100} height={100} className="mt-[-21px] "/>
            </Link>
        </h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b hover:text-orange-500 duration-100'><Link to="portfolio" spy={true} smooth={true} duration={500} onClick={handleNav} >Portfolio</Link></li>
          <li className='p-4 border-b hover:text-orange-500 duration-100'><Link to='skills' spy={true} smooth={true} duration={500}  onClick={handleNav}>Skills</Link></li>
          <li className='p-4 border-b hover:text-orange-500 duration-100'><Link to="contact" spy={true} smooth={true} duration={500} onClick={handleNav}>Contact</Link></li>
        </ul>
      </div>

    </div>

  )
}

export default NavBar