import React from 'react';
import { FaDumbbell, FaUsers, FaAppleAlt } from 'react-icons/fa';

const services = [
    {
        icon: <FaDumbbell className="mb-4 text-orange-600" />,
        title: "Personal Training",
        description: "Get one-on-one training with our experienced trainers who will tailor a fitness plan specifically for you."
    },
    {
        icon: <FaUsers className="mb-4 text-orange-600" />,
        title: "Group Classes",
        description: "Join our high-energy group classes that are designed to motivate and challenge you, regardless of your fitness level."
    },
    {
        icon: <FaAppleAlt className="mb-4 text-orange-600" />,
        title: "Nutrition Plans",
        description: "Achieve your fitness goals faster with personalized nutrition plans designed by our expert nutritionists."
    }
];

const ServiceSection = () => {
    return (
        <div id="services" className="w-full py-8 lg:py-20 bg-black text-white flex flex-col items-center">
            <h2 className='font-[PoppinsBold] text-[35px] md:text-[3rem] mb-7 md:mb-14'>Our <span className='text-orange-600'>Services</span></h2>
            <div className="w-[80%] flex flex-col md:flex-row justify-between">
                {services.map((service, index) => (
                    <div key={index} className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-4 flex flex-col items-center last:mr-0">
                        <div className='text-[60px] xl:text-[100px]'>
                            {service.icon}
                        </div>
                        <h3 className='font-[PoppinsSemiBold] text-[1.4rem] xl:text-[1.8rem] mb-2 whitespace-nowrap'>{service.title}</h3>
                        <p className='w-full lg:w-[80%] text-[14px] xl:text-[18px] font-[PoppinsRegular] text-center text-[#fff]/[0.6]'>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
