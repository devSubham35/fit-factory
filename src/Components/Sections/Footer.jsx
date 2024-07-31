import React from 'react'
import PaddingWrapper from '../Common/PaddingWrapper'

const Footer = () => {
    return (
        <PaddingWrapper>
            <div className="w-full py-10 bg-black text-white">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0 text-[#dedede]">
                        <h3 className='font-[PoppinsBold] text-[20px] md:text-[22px] xl:text-[30px] mb-2 text-white'>Our Gym</h3>
                        <p className='text-[14px] md:text-[16px] font-[PoppinsRegular]'>
                            123 Fitness Street, Workout City, Fitland 45678
                        </p>
                        <p className='text-[14px] md:text-[16px] font-[PoppinsRegular]'>
                            Phone: (123) 456-7890
                        </p>
                        <p className='text-[14px] md:text-[16px] font-[PoppinsRegular]'>
                            Email: info@ourgym.com
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className='font-[PoppinsBold] text-[20px] md:text-[22px] xl:text-[30px] mb-2'>Follow Us</h3>
                        <div className="flex justify-center md:justify-start">
                            <a href="#" className="mr-4 text-white hover:text-orange-600 duration-300">Facebook</a>
                            <a href="#" className="mr-4 text-white hover:text-orange-600 duration-300">Instagram</a>
                            <a href="#" className="text-white hover:text-orange-600 duration-300">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </PaddingWrapper>
  )
}

export default Footer
