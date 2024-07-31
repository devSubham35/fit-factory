import React from 'react'

const BenefitCard = ({icon, title, description}) => {
    return (
        <div>
            <div className='z-0 w-full h-full relative border-[1px] border-[#fff]/[0] border-opacity-0 rounded-xl'>
                <div className='z-50 rounded-none rounded-tl-[40px] rounded-br-[40px] bg-gradient-to-br from-slate-900 via-[#000] to-black
                            p-8 md:py-12 overflow-hidden w-full h-full lg:grid grid-cols-5 gap-4 shadow-2xl'>
                    <div className=' text-[70px] col-span-1 mb-6 lg:mb-0 hidden lg:block'>{icon}</div>
                    <div className='col-span-4'>
                        <div className='flex items-center mb-2 md:mb-4 justify-between'>
                            <h1 className='text-[25px] md:text-[30px] font-[PoppinsSemiBold]'>{title}</h1>
                            <div className=' text-[70px] col-span-1 mb-6 lg:mb-0 lg:hidden'>{icon}</div>
                        </div>
                        <p className='text-[14px] md:text-[16px] font-[PoppinsMedium] text-[#fff]/[0.5]'>{description}</p>
                    </div>
                </div>
                <div className='z-[-1] w-full h-full absolute top-0 left-0 bg-white blur-sm opacity-15 rounded-none rounded-tl-[40px] rounded-br-[40px]'></div>
            </div>
        </div>
    )
}

export default BenefitCard
