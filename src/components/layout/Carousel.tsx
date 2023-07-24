/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import CarouselCard from './CarouselCard';

function CarouselList({ data }): JSX.Element {
  // const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  // console.log(selectedCardIndex);

  // const handleNext = () => {
  //   setSelectedCardIndex((prevIndex) =>
  //     prevIndex === slideItems.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  const components = data || [];
  const slideItems = components?.items || [];
  // console.log(slideItems);

  return (
    <div className="px-4 mt-10 space-y-8 md:px-12">
      <div>
        <div className="grid grid-cols-4 gap-2">
          {slideItems?.map((slide: any, index: number) => (
            <CarouselCard key={slide.itemId} data={slide} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselList;