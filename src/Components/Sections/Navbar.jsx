import React, { useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Subscription', href: '#subscribe' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="z-10 sticky top-[34px] left-0 w-full text-white py-4 px-4 md:px-8 bg-black">
        <div className='flex justify-between items-center'>
          <div className="text-orange-600 font-[PoppinsBold] text-[22px] md:text-[32px]">Fit Factory</div>
          <ul className="space-x-8 font-[PoppinsMedium] hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-orange-600">{item.name}</a>
              </li>
            ))}
          </ul>
          {isMenuOpen ? (
            <AiOutlineClose 
              className='text-[28px] text-white md:hidden cursor-pointer' 
              onClick={toggleMenu} 
            />
          ) : (
            <BiMenuAltRight 
              className='text-[28px] text-white md:hidden cursor-pointer' 
              onClick={toggleMenu} 
            />
          )}
        </div>

        {isMenuOpen && (
          <div className='absolute top-[100%] left-0 backdrop-blur-xl w-full rounded-b-xl p-4 pl-6 md:hidden z-10 py-8'>
            <div className="space-y-4 font-[PoppinsMedium] flex flex-col">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a onClick={toggleMenu} href={item.href} className="hover:text-white text-[14px]">{item.name}</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
