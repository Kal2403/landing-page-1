import React from 'react';
import scheduleImage from "../assets/stats.webp";
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>

        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>

            <div className='md:w-1/2 w-full'>
                <img src={scheduleImage} alt="schedule image" className='w-full h-auto' />
            </div>

        </div>
        
    </section>
  )
}

export default ScheduleSection;
