import React, { useState } from 'react';

import CarouselCard from './CarouselCard';

function CarouselList({ data }: any): JSX.Element {
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
      <div className="flex carousel-container">
        {slideItems?.map((slide: any) => (
          <CarouselCard key={slide.itemId} data={slide} />
        ))}
      </div>
    </div>
  );
}

export default CarouselList;
