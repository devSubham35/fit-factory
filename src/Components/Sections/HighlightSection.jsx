import React from 'react';
import PaddingWrapper from '../Common/PaddingWrapper';
import { RiChatSmile3Fill } from 'react-icons/ri';
import { FaMoon, FaFire } from 'react-icons/fa';

const highlights = [
  {
    icon: <RiChatSmile3Fill />,
    title: 'Positive Vibes',
    description: 'Embrace a healthier lifestyle with our diverse fitness options.',
  },
  {
    icon: <FaMoon/>,
    title: 'Restfull Nights',
    description: 'Experience deep, restorative sleep for enhanced recovery.',
  },
  {
    icon: <FaFire />,
    title: 'Stress Relief',
    description: 'Find inner peace and reduce stress with our fitness programs.',
  },
];

const HighlightSection = () => {
  return (
    <div className="bg-black">
      <div className="bg-orange-600 text-white py-5 md:py-10">
        <PaddingWrapper>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map(({ icon, title, description }, index) => (
              <div key={index} className="w-full flex-col justify-center items-center gap-6">

                <div className='w-full h-fit flex justify-center items-center'>
                    <div className='w-16 h-16 lg:w-28 lg:h-28 text-[30px] lg:text-[45px] text-black
                    flex justify-center items-center rounded-full bg-[#fff]/[0.2]'>{icon}</div>
                </div>


                <div className="mt-4 flex flex-col justify-center items-center">
                  <h1 className="text-[20px] lg:text-[30px] font-[PoppinsMedium] mb-2 text-center">{title}</h1>
                  <p className="w-3/4 lg:w-[80%] text-[14px] lg:text-[16px] text-center font-[PoppinsRegular] text-[#fff]/[0.5]">
                    {description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </PaddingWrapper>
      </div>
    </div>
  );
};

export default HighlightSection;
