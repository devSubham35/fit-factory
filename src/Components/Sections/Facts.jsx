import React, { useState } from 'react';
import img_06 from '../../assets/gallery/img_06.webp';
import img_07 from '../../assets/gallery/img_07.webp';
import img_08 from '../../assets/gallery/img_08.webp';
import PaddingWrapper from '../Common/PaddingWrapper';

const facts = [
    { id: 1, keyword: "Fact 1", img: img_06, content: "Regular exercise at the gym improves cardiovascular health, strengthens muscles, and enhances overall fitness." },
    { id: 2, keyword: "Fact 2", img: img_07, content: "Consistent gym workouts can help with weight management, reducing the risk of obesity-related diseases." },
    { id: 3, keyword: "Fact 3", img: img_08, content: "Gym activities boost mental health by reducing stress, anxiety, and depression while increasing endorphin levels." },
];

const Facts = () => {
    const [expandedId, setExpandedId] = useState(1);

    return (
        <PaddingWrapper>
            <div className="w-full h-[32vh] sm:h-[50vh] md:h-[80vh] md:py-10 xl:py-20 flex items-center justify-center">
                <div className="w-full h-full flex gap-4 mask-gradient-top mask-gradient-bottom">
                    {facts.map((fact) => (
                        <div
                            key={fact.id}
                            className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer rounded-xl md:rounded-[50px]
                                ${expandedId === fact.id ? 'flex-grow' : 'flex-shrink'}`}
                            onMouseEnter={() => setExpandedId(fact.id)}
                            style={{
                                flexBasis: expandedId === fact.id ? '70%' : '15%'
                            }}
                        >
                            <img
                                src={fact.img}
                                alt={fact.keyword}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-1000
                                    ${expandedId === fact.id ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h3 className="text-white text-[12px] md:text-xl font-[PoppinsMedium] mb-1 md:mb-2">#random facts</h3>
                                <p className={`z-50 duration-700 text-white mb-4 md:mb-6 text-[12px] sm:text-[17px] md:text-[30px] xl:text-[35px] 2xl:text-[40px] 2xl:leading-[70px] font-semibold
                                ${expandedId === fact?.id? "translate-y-0 opacity-100" : "translate-y-0 opacity-0" }`}>
                                    {fact.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PaddingWrapper>
    );
};

export default Facts;