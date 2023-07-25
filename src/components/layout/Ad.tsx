/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

function Ad({ data }: any): JSX.Element {
  const components = data || [];
  const adItems = components?.image || [];
  return (
    <div className="px-4 mt-4 space-y-8 md:px-12">
      <div>
        <div className="">
          {adItems?.map((img: any, index: number) => (
            <div key={index}>
              <Link href="/federations">
                <img src={img.image.url} alt={img.image.name} />
              </Link>
              {/* <a href={img.buttonRedirectionUrl} target="_blank" rel="noopener noreferrer">
                <img src={img.image.url} alt={img.image.name} />
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ad;
