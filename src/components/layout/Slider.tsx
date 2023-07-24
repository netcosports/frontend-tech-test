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
  console.log('SLIDER Component', slideItems);

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
    <div className="sm:h-64 xl:h-80 2xl:h-96" style={{ height: 500 }}>
      <Carousel slideInterval={5000} ref={carouselRef} autoplay={false}>
        {slideItems?.map((slide: any) => (
          <div key={slide.itemId} style={{ position: 'relative' }}>
            <img
              alt={slide.title}
              src={
                slide.poster || slide.heroImageDesktop || slide.thumbnail || slide.image?.image.url
              }
              className="object-cover w-full h-full"
            />
            {slide?.name && (
              <div
                className="blur-container"
                style={{
                  position: 'absolute',
                  top: '65%',
                  left: '20%',
                  transform: 'translate(-50%, -50%)',
                  backdropFilter: 'blur(3px)',
                  padding: 20,
                  borderRadius: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  textShadow: '2px 2px 4px rgba(0,0,0,.45)',
                  textAlign: 'center',
                }}
              >
                <h1
                  style={{
                    fontWeight: 'bold',
                    fontSize: 'xx-large',
                    color: 'rgb(16 185 129)',
                  }}
                >
                  {slide?.name}
                </h1>
                <p
                  style={{
                    fontSize: 'large',
                    color: 'yellow',
                  }}
                >
                  {slide?.description}
                </p>
                <button className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-black rounded-md">
                  play
                </button>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
