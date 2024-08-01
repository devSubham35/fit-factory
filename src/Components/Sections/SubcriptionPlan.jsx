import React from 'react';
import { FaCheck } from 'react-icons/fa';
import PaddingWrapper from '../Common/PaddingWrapper';

const PlanCard = ({ title, price, features }) => (
  <div className="w-full py-7 xl:py-10 flex flex-col items-center justify-between border p-6 rounded-xl shadow-xl
   bg-white hover:shadow-2xl transform transition-transform duration-300 md:hover:scale-105">
    <div className='flex flex-col justify-center items-center'>
        <h3 className='font-[PoppinsBold] text-[22px] xl:text-[32px] mb-2 text-gray-900'>{title}</h3>
        <p className='text-[18px] font-[PoppinsRegular] mb-4 text-gray-700'>₹{price}/month</p>
        <ul className='text-[14px] md:text-[14px] xl:text-[18px] font-[PoppinsRegular] mb-8 text-gray-600'>
        {features.map((feature, index) => (
            <li key={index} className='flex items-center mb-2'>
            <FaCheck className='text-orange-600 mr-2' /> {feature}
            </li>
        ))}
        </ul>
    </div>
    <button className='w-full md:w-fit px-12 py-3 rounded-lg bg-orange-600 text-white font-[PoppinsSemiBold] active:scale-[0.9] duration-500 cursor-pointer hover:bg-orange-500'>
      Choose Plan
    </button>
  </div>
);

const SubscriptionPlan = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: 1000,
      features: ['Access to gym', '1 Personal Training Session', 'Free Wi-Fi'],
    },
    {
      title: 'Standard Plan',
      price: 2000,
      features: [
        'Access to gym',
        '5 Personal Training Sessions',
        'Access to group classes',
        'Free Wi-Fi',
      ],
    },
    {
      title: 'Premium Plan',
      price: 3000,
      features: [
        'Access to gym',
        'Unlimited Personal Training Sessions',
        'Access to group classes',
        'Personalized Nutrition Plan',
        'Free Wi-Fi',
      ],
    },
  ];

  return (
    <div id="subcriptionplan" className='w-full bg-[#F9FAFB]'>
      <PaddingWrapper>
        <div className="w-full py-4 pb-8 xl:py-20 text-black flex flex-col items-center relative">
        <h2 className="font-[PoppinsBold] text-center md:text-start text-[30px] md:text-[3rem] mb-3 md:mb-8">Our <span className='text-orange-600'>Subcription </span> Plan</h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
          <div className="absolute inset-0 bg-[url('/path/to/your/background-image.svg')] opacity-10 pointer-events-none"></div>
        </div>
      </PaddingWrapper>
    </div>
  );
};

export default SubscriptionPlan;
