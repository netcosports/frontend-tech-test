/* eslint-disable react/prop-types */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'flowbite-react';

import { Items } from '$types/Items';

interface SliderProps {
  data: Items[];
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

  return (
    <div className="carousel-container">
      <Carousel slideInterval={5000} ref={carouselRef} autoplay={false}>
        {slideItems?.map((slide: any) => (
          <div key={slide.itemId} className="carousel-item">
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
                <button className="play-button">play</button>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
