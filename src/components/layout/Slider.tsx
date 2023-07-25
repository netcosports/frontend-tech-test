/* eslint-disable react/prop-types */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'flowbite-react';
import Link from 'next/link';

import { ItemsSlider } from '$types/ItemsSlider';

interface SliderProps {
  data: ItemsSlider[];
}

function Slider({ data }: SliderProps): JSX.Element {
  const components = data || [];
  const slideItems = components?.items || [];
  // console.log('SLIDER Component', slideItems);

  const carouselRef = useRef<any>(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      if (autoplayEnabled) {
        carouselRef.current.autoplay.start(); // Démarrer l'autoplay si autoplayEnabled est vrai
      } else {
        carouselRef.current.autoplay.stop(); // Arrêter l'autoplay si autoplayEnabled est faux
      }
    }
  }, [autoplayEnabled]);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slider-container">
      <Carousel slideInterval={5000} ref={carouselRef}>
        {slideItems?.map((slide: any) => (
          <div key={slide.itemId} className="carousel-item">
            {/* {windowWidth <= 768 ? (
              <img
                alt={slide.title}
                src={slide.poster || slide.portraitThumbnail || slide.image?.image.url}
                className="object-cover w-full h-full"
              />
            ) : (
              <img
                alt={slide.title}
                src={
                  slide.poster || slide.heroImageDesktop || slide.thumbnail || slide.image?.image.url}
                className="object-cover w-full h-full"
              />
            )} */}
            <img
              alt={slide.title}
              src={
                slide.poster || slide.heroImageDesktop || slide.thumbnail || slide.image?.image.url
              }
              className="object-cover w-full h-full"
            />
            {slide?.name && (
              <div className="blur-container">
                <h1 className="title">{slide?.name}</h1>
                <p className="description">{slide?.description}</p>
                <Link href={`/videos/${slide.itemId}/${encodeURIComponent(slide.name)}`}>
                  <button className="z-10 px-6 py-2 mt-4 text-sm font-semibold text-white bg-red-600 rounded-md">
                    play
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
