/* eslint-disable react/prop-types */
'use client';

import React from 'react';
import { Carousel } from 'flowbite-react';

import { Items } from '$types/Items';

interface SliderProps {
  data: Items[];
}

function Slider({ data }: SliderProps): JSX.Element {
  const components = data || [];
  const slideItems = components?.items || [];
  // console.log(slideItems);

  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96" style={{ height: 500 }}>
      <Carousel slideInterval={5000}>
        {slideItems?.map((slide: any) => (
          <div key={slide.itemId} style={{ position: 'relative' }}>
            <img
              alt={slide.title}
              src={
                slide.poster ||
                slide.heroImageDesktop ||
                slide.portraitThumbnail ||
                slide.image.image.url
              }
            />

            <h1
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontWeight: 'bold',
                fontSize: 'xx-large',
                color: 'rgb(16 185 129)',
              }}
            >
              {slide?.name}
            </h1>
            <p
              style={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: 'large',
                color: 'yellow',
              }}
            >
              {slide?.description}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
