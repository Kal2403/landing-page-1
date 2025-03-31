import React from 'react';
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const CompanyLogo = () => {

    const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className='w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start'>
    </div>
  )
}

export default CompanyLogo;
