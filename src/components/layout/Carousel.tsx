/* eslint-disable react/prop-types */
import React from 'react';

import CarouselCard from '$components/CarouselCard';

function CarouselList({ data }): JSX.Element {
  const components = data || [];
  const slideItems = components?.items || [];
 // console.log(slideItems);

  return (
    <div className="px-4 mt-4 space-y-8 md:px-12">
      <div>
        <div className="grid grid-cols-4 gap-2">
          {slideItems?.map((slide: any) => (
            <CarouselCard key={slide.itemId} data={slide} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselList;
