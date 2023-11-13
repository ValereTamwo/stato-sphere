'use client'
import Image from 'next/image';
import Iia from '@/public/images/biblio/issea-iford-cg.jpg'

import React, { useState } from 'react';
import { Images } from './features';
interface Image {
  id: number;
  src: typeof Iia;  
  alt: string;
}

interface GalleryImageProps {
  images: Image[];
}

const GalleryImage: React.FC<GalleryImageProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openImage = (image: Image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

    return (
    <section className='w-full bg-white max-x-6xl '>
        <div className="w-full ">
        <div className='w-xl align-middle pt-[5%] mx-auto text-center pb-5 md:pb-20' data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <h2 className="h2 mb-4">Ces Manuels sont disponible pour vous aider au mieux</h2>
          <p className="text-xl text-gray-400">Rendez-Vous dans l'un de nos centres pour Obtenir le votre</p>
          </div>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <a href='https://drive.google.com/file/d/1fogrzSTUIT-qQtulViChsYoDPbMhheh5/view?usp=sharing' className='btn text-white bg-red-400'>
               Voir un appercu !
             </a>
            </div>
        </div>
      <div className="grid  items-center bg-white p-[30px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
      
      {images.map((image) => (
        <div
          key={image.id}
          className="cursor-pointer border border-3  h-[400px] w-[300px]"
              // onClick={() => openImage(image)} 
              data-aos="fade-up" 
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          />
        </div>
      ))}

      {/* {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div className="relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-100 h-100 rounded-lg"
            />
            <button 
              className="absolute top-0 right-0 p-2 text-gray-300 hover:text-white focus:outline-none"
              onClick={closeImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )} */}
            </div>
            </section>
            );

};

export default GalleryImage;
