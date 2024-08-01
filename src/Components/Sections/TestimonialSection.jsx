import React from 'react';
import PaddingWrapper from '../Common/PaddingWrapper';

const TestimonialSection = () => {
    const testimonials = [
        {
            text: "The best gym I've ever been to! The trainers are amazing and the classes are so much fun. Highly recommend!",
            author: "- John Doe",
        },
        {
            text: "I love the variety of classes and the community atmosphere. I've made great progress since joining.",
            author: "- Jane Smith",
        },
        {
            text: "The nutrition plans have helped me reach my fitness goals faster. The trainers are very supportive.",
            author: "- Mark Johnson",
        },
    ];

    return (
        <div id="testimonials" className="w-full py-8 xl:py-20 bg-gray-100 text-black flex flex-col items-center">
            <PaddingWrapper>
                <h2 className="font-[PoppinsBold] text-center md:text-start text-[28px] md:text-[3rem] mb-3 md:mb-8">What Our <span className='text-orange-600'>Members </span> Say</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 2xl:gap-10">
                    {testimonials.map(({ text, author }, index) => (
                            <div key={index} className="h-full p-6 xl:p-10 border-[2px] rounded-lg flex flex-col justify-between">
                                <p className="text-[15px] md:text-[16px] xl:text-[18px] font-[PoppinsRegular] mb-4">{text}</p>
                                <p className="font-[PoppinsSemiBold] text-[14px] md:text-[16px]">{author}</p>
                            </div>
                    ))}
                </div>
            </PaddingWrapper>
        </div>
    );
};

export default TestimonialSection;
