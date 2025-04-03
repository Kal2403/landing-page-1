import React, { useState } from 'react';

const PricingSection = () => {
    
    const [ productCount, setProductCount ] = useState(0);

  return (
    <section className='py-20 px-4'>

        <div className='max-w-6xl mx-auto'>

            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Pricing</h2>

        </div>

    </section>
  );
};

export default PricingSection;
