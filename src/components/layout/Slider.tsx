'use client';

import React from 'react';
import { Carousel } from 'flowbite-react';

function Slider(): JSX.Element {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96" style={{ height: 500 }}>
      <Carousel slideInterval={5000}>
        <img
          alt="Biarritz"
          src="https://assets-eu-01.kc-usercontent.com:443/604c2fe8-9bc6-010e-8c13-73c42e66ce87/55595200-82d3-41f1-8a22-4c612bd076e7/03_HAND_16-9_01.png"
        />
        <img
          alt="Bayonne"
          src="https://www.guide-du-paysbasque.com/_bibli/articlesPage/318/images/adobestock-saiko3p-bayonne.jpg?v=ficheArticle&width=490&height=275&pixelRatio=2.6250"
        />
        <img
          alt="Capbreton"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Central_beach_of_Capbreton.jpg/1200px-Central_beach_of_Capbreton.jpg"
        />
        <img
          alt="Dax"
          src="https://www.tourismelandes.com/wp-content/uploads/2019/02/dax-splendid-1.jpg"
        />
        <img
          alt="Biscarosse"
          src="https://www.guide-des-landes.com/_bibli/articlesPage/144/images/adobestock-xavier-biscarrosse.jpg?v=ficheArticle&width=549&height=275&pixelRatio=2.6250"
        />
      </Carousel>
    </div>
  );
}
export default Slider;
