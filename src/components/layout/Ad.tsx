/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Ad({ data }): JSX.Element {
  const components = data || [];
  const adItems = components?.image || [];
  // console.log('adItems', adItems);

  return (
    <div className="px-4 mt-4 space-y-8 md:px-12">
      <div>
        <div className="">
          {adItems?.map((img: any, index: number) => (
            <div key={index}>
              {/* <a href={img.buttonRedirectionTargetType} target="_blank" rel="noopener noreferrer">
                <img src={img.image.url} alt={img.image.name} />
              </a> */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={img.image.url} alt={img.image.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ad;
