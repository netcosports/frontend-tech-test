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
    currentSlide === items.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  };

  const changeSlideLeft = () => {
    currentSlide === 0 ? setCurrentSlide(items.length - 1) : setCurrentSlide(currentSlide - 1);
  };

  const changeSlideDot = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="arrow-container">
        <img
          onClick={() => changeSlideLeft()}
          src="/arrow_slider.png"
          //   width={100}
          //   height={100}
          className="arrow"
          id="left-arrow"
        />
        <img
          onClick={() => changeSlideRight()}
          src="/arrow_slider.png"
          //   width={100}
          //   height={100}
          className="arrow"
          id="right-arrow"
        />
      </div>
      {items.map(
        (item, index: number) =>
          index === currentSlide && (
            <div className="img-and-dot-container">
              <p className="title-video">{item.name}</p>
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
