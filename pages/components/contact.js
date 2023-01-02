import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion as m} from "framer-motion"


const ContactUs = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm()
      .then((result) => {
          console.log(result.text);
          console.log("successful")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="mt-[200px] lg:mt-[50px] px-[25px] bg-white text-black rounded-lg flex flex-col mx-auto leading-10 max-w-[1000px] uppercase">
      <h1 className='text-3xl text-center py-10 '>Contact Me</h1>
      <label>Name</label>
      <input type="text" name="user_name" className='text-black justify-center rounded-lg pl-3 bg-gray-300'/>
      <label>Email</label>
      <input type="email" name="user_email" className='text-black rounded-lg pl-3 bg-gray-300' />
      <label>Message</label>
      <textarea name="message" className='text-black rounded-lg pb-10 mb-5 pl-3 bg-gray-300'/>
      <m.input type="submit" value="Send" className='m-10 bg-orange-600 h-14 w-32 mx-auto rounded-lg text-2xl  mb-10 text-white uppercase cursor-pointer' whileTap={{scale:0.9}} whileHover={{scale: 1.2}} />
    </form>
  );
};

export default ContactUs