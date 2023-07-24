import React from 'react';

import { Items } from '$types/Items';
interface CarouselCardProps {
  data: Items;
}

function CarouselCard({ data }: CarouselCardProps): JSX.Element {
  const { portraitThumbnail, thumbnail, poster, name, description } = data;

  return (
    <div className="flex flex-col m-auto bg-white rounded parent p-auto">
      <div className="flex pb-10 hide-scroll-bar">
        <div className="flex ml-10 flex-nowrap lg:ml-40 md:ml-20">
          <div className="relative inline-block px-3">
            <div className="w-64 max-w-xs overflow-hidden transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-md h-96 hover:scale-125">
              <img
                src={portraitThumbnail || poster}
                alt={name}
                draggable={false}
                className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-50 theIMG"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 opacity-0 DESC group-hover:opacity-100">
                <h2 className="mb-2 text-lg font-semibold text-emerald-700">{name}</h2>
                <p className="text-sm text-gray-900">{description}</p>
                <button className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-red-600 rounded-md">
                  play
                </button>
              </div>
              <div className="absolute inset-0 transition-opacity duration-300 bg-white opacity-0 blur-bg group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
