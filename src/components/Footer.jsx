import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-50'>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>

                    <div className='lg:col-span-4 '>
                        <div className='flex gap-1 items-center mb-6'>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                                <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div>
                            </div>
                            <span className='text-xl font-medium ml-1'>The Next Design</span>
                        </div>
                        <p className='text-gray-600 mb-6 md:w-3/4'>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;
