import React from 'react'
import AboutHero from "../components/AboutHero";
import Vision from "../components/Vision";
import Works from "../components/Works";
import Aboutcards from '../components/Aboutcards';
// import Testimonial from "../components/Testimonial";

const About=()=>{
    return (
        <div className="bg-black min-h-screen w-full  ">
         <AboutHero></AboutHero>
         <Vision></Vision>
         <Works></Works>
         <Aboutcards></Aboutcards>
         {/* <Testimonial></Testimonial> */}
        </div>
    )
}
export default About;