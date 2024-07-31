import React, { useState, useEffect } from 'react';
import img_01 from '../../assets/gallery/img_01.webp';
import img_02 from '../../assets/gallery/img_02.webp';
import img_03 from '../../assets/gallery/img_03.webp';
import grid_img_01 from "../../assets/Gallery_grid/Grid_img_01.webp"
import grid_img_02 from "../../assets/Gallery_grid/Grid_img_02.webp"
import grid_img_03 from "../../assets/Gallery_grid/Grid_img_03.webp"
import { IoMdClose } from "react-icons/io";


const images_01 = [img_01, img_02, img_03];



const AboutUsSection = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);


  return (
    <>
        <div className="z-0 relative w-full py-[50px] xl:py-[100px] px-[1.5rem] md:px-[3.5rem] xl:px-[10rem] bg-black text-white grid grid-cols-1 xl:grid-cols-2 gap-14
        bg-gradient-to-br from-slate-900 via-[#000] to-black">
          
          <div className="grid grid-rows-2 xl:grid-rows-3 grid-cols-2 gap-8 h-[30vh] lg:h-[60vh] xl:h-[70vh] mask-gradient-top mask-gradient-bottom mask-gradient-right mask-gradient-left">
            <div className="rounded-2xl row-span-2 xl:row-span-3 overflow-hidden">
              <img
                src={grid_img_01}
                alt={`grid_img_01`}
                className="z-10 w-full h-full object-cover cursor-pointer transform transition duration-500 hover:scale-110"
              />
            </div>

            <div className="rounded-2xl row-span-1.5 xl:row-span-2 overflow-hidden">
              <img
                src={grid_img_02}
                alt={`grid_img_02`}
                className="z-10 w-full h-full object-cover cursor-pointer transform transition duration-500 hover:scale-110"
              />
            </div>


            <div className="rounded-2xl row-span-1.5 xl:row-span-1 overflow-hidden">
              <img
                src={grid_img_03}
                alt={`grid_img_03`}
                className="z-10 w-full h-full object-cover cursor-pointer transform transition duration-500 hover:scale-110"
              />
            </div>
          </div>



          <div className="flex flex-col items-center relative">

            <div className="w-full mb-2 lg:mb-8">
              <h2 className="font-bold text-[1.5rem] xl:text-[3rem] mb-4 text-orange-500">About Us</h2>
              <p className="text-[13px] md:text-[18px] font-[PoppinsRegular] mb-2">
                Our gym is dedicated to providing the best fitness experience for our members. With state-of-the-art equipment,
                experienced trainers, and a variety of classes, we cater to all fitness levels and goals. Join us and become part
                of our fitness community!
              </p>
            </div>
            <div className="w-full mb-8">
              <h3 className="font-[PoppinsBold] text-[1rem] xl:text-[2rem] mb-4 text-orange-400">Our Story</h3>
              <p className="text-[13px] md:text-[15px] font-[PoppinsRegular] mb-4">
                Founded in 2010, our gym has grown from a small local fitness center to a renowned fitness hub in the community.
                We started with a simple mission: to help people achieve their fitness goals in a supportive and friendly environment.
                Over the years, we've expanded our facilities, introduced innovative fitness programs, and built a team of passionate
                fitness professionals dedicated to our members' success. Our journey is one of growth, community, and relentless pursuit
                of excellence.
              </p>
              <p className="text-[13px] md:text-[18px] font-[PoppinsRegular]">
                We believe in the power of fitness to transform lives. Our members are at the heart of everything we do, and we are
                committed to providing an exceptional experience that inspires and motivates. Join us and be a part of our story!
              </p>
            </div>
            <div className="z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images_01.map((img, index) => (
                <div onClick={() => openModal(img)} key={index} className="relative overflow-hidden cursor-pointer">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="z-10 w-full h-48 object-cover cursor-pointer transform transition duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition duration-500 hover:opacity-50 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedImage && (
          <div className="h-screen w-full inset-0 fixed top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="w-full h-full relative flex justify-center items-center">
              <button
                className="w-12 h-12 rounded-xl absolute top-8 right-8 text-white text-2xl 
                focus:outline-none bg-[#fff]/[0.2] flex justify-center items-center"
                onClick={closeModal}
              >
                <IoMdClose className='text-[22px]' />
              </button>
              <img src={selectedImage} alt="Selected" className="md:w-[70%] h-full object-contain md:object-none" />
            </div>
          </div>
        )}
    </>
  );
}

export default AboutUsSection;
