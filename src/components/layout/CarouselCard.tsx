/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';

import { ItemsCarousel } from '$types/ItemsCarousel';

interface CarouselVideosProps {
  data: ItemsCarousel;
}

function CarouselCard({ data }: CarouselVideosProps): JSX.Element {
  const components = data || [];
  const allVideos = components?.Videos || [];

  const { portraitThumbnail, name, description, itemId } = data;

  return (
    <div className="flex flex-col m-auto bg-white rounded card p-auto">
      <div className="flex pb-10 hide-scroll-bar">
        <div className="flex ml-10 flex-nowrap lg:ml-40 md:ml-20">
          <div className="relative inline-block px-3">
            <div className="w-64 max-w-xs overflow-hidden transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-md h-96 hover:scale-125">
              <img
                //  src={portraitThumbnail || poster}
                src={portraitThumbnail}
                alt={name}
                draggable={false}
                className="object-cover w-full h-full transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300">
                <h2 className="mb-2 text-lg font-semibold text-emerald-700">{name}</h2>
                <p className="text-sm text-gray-900">{description}</p>
                <Link href={`/videos/${itemId}/${encodeURIComponent(name)}`}>
                  <button className="z-10 px-6 py-2 mt-4 text-sm font-semibold text-white bg-red-600 rounded-md">
                    play
                  </button>
                </Link>

                {allVideos.length > 0 && (
                  <div className="inline-grid grid-cols-3 gap-4 mt-4">
                    {allVideos?.map((video: any) => (
                      <Link href={`/videos/${itemId}/${encodeURIComponent(name)}`}>
                        <div key={video.itemId} className="z-10">
                          <img src={video.poster} alt={video.name} className="w-20 h-20" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="absolute inset-0 transition-opacity duration-300 bg-white opacity-0 blur-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
