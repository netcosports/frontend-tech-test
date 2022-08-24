import { AnyMxRecord } from 'dns';
import Image from 'next/image';
import React, { useState } from 'react';

function Slider({ dataSlider }: any): JSX.Element {
  const { displayRatio, items, title } = dataSlider;

  const [currentSlide, setCurrentSlide] = useState(0);

  const dots = (items: any[]) => {
    return new Array(items.length).fill(0);
  };

  const changeSlideRight = () => {
    console.log('RIGHT');

    currentSlide === items.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  };

  const changeSlideLeft = () => {
    console.log('lEFT');
    currentSlide === 0 ? setCurrentSlide(items.length - 1) : setCurrentSlide(currentSlide - 1);
  };

  const changeSlideDot = (index) => {
    setCurrentSlide(index);
  };

  console.log(items);

  return (
    <div className="slider-container">
      <div className="arrow-container">
        <Image
          onClick={() => changeSlideLeft()}
          src="/arrow_slider.png"
          width={100}
          height={100}
          className="arrow left-arrow"
        />
        <Image
          onClick={() => changeSlideRight()}
          src="/arrow_slider.png"
          width={100}
          height={100}
          className="arrow right-arrow"
        />
      </div>
      {items.map(
        (item, index: number) =>
          index === currentSlide && (
            <div className="img-and-dot-container">
              <img key={item.itemId} src={item.poster} alt={item.name} />
              <div className="dots-container">
                {dots(items).map((e, i) => (
                  <div
                    key={item.itemId + i}
                    onClick={() => changeSlideDot(i)}
                    className={'dot ' + (i === index ? 'current-slide' : '')}
                  ></div>
                ))}
              </div>
            </div>
          ),
      )}
    </div>
  );
}

export default Slider;
