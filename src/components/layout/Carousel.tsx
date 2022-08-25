import Link from 'next/link';
import { useState } from 'react';

export default function Carousel({ dataCarousel }): JSX.Element {
  console.log(dataCarousel);
  const { items, itemsDisplayType, showMoreButtonRedirection, title } = dataCarousel;

  const [indexSlide, setIndexSlide] = useState(0);

  const computeLength = (items) => Math.ceil(items.length / 3);

  const makeItemsContainers = (items) => new Array(computeLength(items)).fill(0);

  const separateItems = (items) => {
    let start = 0;
    let end = 3;
    let arr = [];
    for (let i = 0; i < computeLength(items); i++) {
      arr.push(items.slice(start, end));
      start += 3;
      end += 3;
    }
    return arr;
  };

  //   const enableButton = () => items.length > 3;

  const changeSlideLeft = () => {
    if (indexSlide > 0) setIndexSlide(indexSlide - 1);
  };

  const changeSlideRight = (items) => {
    if (indexSlide < computeLength(items) - 1) setIndexSlide(indexSlide + 1);
  };

  console.log(separateItems(items));

  return (
    <div className="carousel-container">
      <img
        onClick={() => changeSlideLeft()}
        src="/arrow_slider.png"
        //   width={100}
        //   height={100}
        className="carousel-arrow"
        id="carousel-left-arrow"
      />
      <img
        onClick={() => changeSlideRight(items)}
        src="/arrow_slider.png"
        //   width={100}
        //   height={100}
        className="carousel-arrow"
        id="carousel-right-arrow"
      />

      <div className="carousel-items-container">
        {makeItemsContainers(items).map((e, i) => (
          <div
            className={
              'carousel-item ' +
              (i < indexSlide ? 'left ' : '') +
              (i === indexSlide + 1 ? 'right ' : '') +
              (i >= indexSlide + 2 ? 'far' : '')
            }
          >
            {separateItems(items)[i].map((item) => (
              <>
                <div className={'img-and-infos-container'}>
                  <p className="name-img-carousel">{item.name}</p>
                  <img data-hover="for-hover-effect" src={item.poster ? item.poster : item.posterPortrait} alt={item.name} />
                  <Link href="/">
                    <p className="link-img-carousel">Voir la vidéo</p>
                  </Link>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
