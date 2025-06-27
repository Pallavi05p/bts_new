import React from 'react';
import Navbar from "../components/navbar";
import ServicesHero from "../components/ServicesHero";
import Card from "../components/Servicecards";
import Footer from "../components/footer";

const Services=()=>{
    return(
        <div className="bg-black min-h-screen md:w-full w-[99vw] ">
         <ServicesHero></ServicesHero>
         <Card></Card>
        </div>
    )
}
export default Services;