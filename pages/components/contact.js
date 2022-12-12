import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sohnb1g', 'template_02kdq6h', form.current, 'ETh4mRn5hhRetAbvz')
      .then((result) => {
          console.log(result.text);
          console.log("successful")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mt-[200px] lg:mt-[50px] px-[25px] bg-white text-black rounded-lg flex flex-col mx-auto leading-10 max-w-[1000px] uppercase">
      <h1 className='text-3xl text-center py-10 '>Contact Me</h1>
      <label>Name</label>
      <input type="text" name="user_name" className='text-black justify-center rounded-lg pl-3 bg-gray-300'/>
      <label>Email</label>
      <input type="email" name="user_email" className='text-black rounded-lg pl-3 bg-gray-300' />
      <label>Message</label>
      <textarea name="message" className='text-black rounded-lg pb-10 mb-5 pl-3 bg-gray-300'/>
      <input type="submit" value="Send" className='m-10 bg-orange-600 w-20 mx-auto rounded-lg text-lg h-10 mb-10 text-white uppercase'/>
    </form>
  );
};

export default ContactUs