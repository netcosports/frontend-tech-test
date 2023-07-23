import React from 'react';

import { Items } from '$types/Items';

interface CarouselCardProps {
  data: Items;
}

function CarouselCard({ data }: CarouselCardProps): JSX.Element {
  const { thumbnail, poster, name, description } = data;

  return (
    <div className="relative overflow-hidden group w-full h-[12vw] rounded-md shadow-xl">
      <img
        src={thumbnail || poster}
        alt={name}
        draggable={false}
        className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h2 className="mb-2 text-lg font-semibold text-emerald-700">{name}</h2>
        <p className="text-sm text-gray-900">{description}</p>
        <button className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-red-600 rounded-md">
          play
        </button>
      </div>
    </div>
  );
}

export default CarouselCard;
