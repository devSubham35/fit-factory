import React from 'react';
import Hero_img from "../../assets/Hero_image.webp";
import PaddingWrapper from '../Common/PaddingWrapper';


const HeroSection = () => {
    return (
        <div
            className="relative w-full xl:h-screen bg-cover bg-no-repeat md:bg-cover md:bg-center text-white flex justify-center items-center"
            style={{ backgroundImage: `url(${Hero_img})` }}
        >
            <PaddingWrapper>
                <div className='w-full py-10 xl:py-0'>
                    <h1 className='font-[PoppinsBold] text-[1.4rem] md:text-[4.5rem] xl::text-[5.5rem] mb-1.5 md:mb-4'>Unleash <br  className='hidden sm:block lg:hidden'/> your <br />Inner Athlete</h1>
                    <h1 className='font-[PoppinsMedium] text-[9px] md:text-[1rem] xl:text-[1.5rem] mb-1.5 md:mb-4 text-orange-600'>Transform | Energize | Achieve</h1>
                    <p className='w-[60%] md:w-1/2 text-[8px] md:text-[16px] xl:text-[18px] font-[PoppinsRegular] mb-4 md:mb-10'>
                    Get ready to sweat and achieve your fitness goals with our high-energy classes! Suitable for all fitness levels, our fun and motivating environment will help you reach your peak performance.
                    </p>
                    <div className='w-fit px-6 py-2 md:px-12 md:py-3 text-[10px] md:text-[16px] rounded-lg bg-orange-600 text-white font-[PoppinsSemiBold] active:scale-[0.9] duration-700 cursor-pointer'>
                        Join Now
                    </div>
                </div>
            </PaddingWrapper>
        </div>

    );
};

export default HeroSection;
