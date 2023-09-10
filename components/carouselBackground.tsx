import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hero from './hero';
import backgroundImage1 from '@/public/images/amour.jpg';
import backgroundImage2 from '@/public/images/femme.jpg';

const CarouselBackground: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Carousel
        showThumbs={false}
        showStatus={false}   
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Temps d'affichage de chaque image en millisecondes
        stopOnHover={false}
      >
        <div className="h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage1})` }}
          />
        </div>
        <div className="h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage2})` }}
          />
        </div>
      </Carousel>
      {/* Votre contenu à afficher par-dessus le carousel */}
      <Hero />
    </div>
  );
};

export default CarouselBackground;
