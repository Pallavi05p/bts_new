import React from 'react'
import Navbar from "../components/navbar";
import ContactHero from "../components/ContactHero";
import Contactform from "../components/Contactform";
import Footer from "../components/footer";

const Contact=()=>{
    return (
        <div className='bg-black min-h-screen w-full '>
          <ContactHero></ContactHero>
          <Contactform></Contactform>
        </div>
    )
}
export default Contact;