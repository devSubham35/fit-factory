import React from 'react';
import PaddingWrapper from '../Common/PaddingWrapper.jsx';
import BenefitCard from '../Common/Cards/BenefitCard.jsx';
import { benefitsData } from "../../Data.jsx"

const BenefitsSection = () => {

    const splitTitle = (title) => {
        const [firstWord, ...rest] = title.split(' ');
        return (
            <>
                <span className='text-white'>{firstWord}</span>{' '}
                <br className=' lg:hidden' />
                <span className='text-orange-600'>{rest.join(' ')}</span>
            </>
        );
    };

    return (
        <>
            <div className='text-white bg-[#000] w-full min-h-screen bg-cover bg-center flex flex-col items-center py-10 lg:py-24'>
                <div className='lg:h-[15%] text-[2.2rem] md:text-[4rem] font-[PoppinsBold] mb-8 lg:mb-20'>
                    Why <span className='text-orange-600'> Choose Us</span>
                </div>
                <PaddingWrapper>
                    <div className='h-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-12'>
                        {benefitsData.map((item, index) => (
                            <BenefitCard
                                key={index}
                                icon={item?.icon}
                                title={splitTitle(item?.title)}
                                description={item?.description}
                            />
                        ))}
                    </div>
                </PaddingWrapper>
            </div>
        </>
    );
};

export default BenefitsSection;
