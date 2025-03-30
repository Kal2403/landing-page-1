import React from 'react';
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'>


        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
            <div className='relative'>
                <img src={heroImage} alt="hero image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
            </div>
        </div>

    </section>
  )
}

export default Hero;
