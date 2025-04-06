import React from 'react';

const NewsletterSection = () => {
    return (
        <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>

            <div className='bg-blue-600 rounded-2xl overflow-hidden'>

                <div className='relative md:px-16 py-16 px-6 md:py-24'>
                    <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>
                </div>
            
            </div>

            <style>
                {
                    `.clip-path-slant {
                        clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)
                    }`
                }
            </style>
        </section>
    )
}

export default NewsletterSection;
