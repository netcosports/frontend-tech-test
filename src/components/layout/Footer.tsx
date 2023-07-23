/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import { FooterData } from '$types/FooterData';

interface FooterProps {
  data: FooterData;
}

function Footer({ data }: FooterProps): JSX.Element {
  const { copyright, logo, menuItems, socialItems } = data;

  const regCopyright = copyright.replace(/<p>/g, '').replace(/<\/p>/g, '');

  return (
    <footer className="flex items-center justify-around p-4 text-white bg-emerald-500 lg:px-12">
      <div>
        <img src={logo.url} className="w-20 h-auto lg:w-32 lg:h-auto" alt={logo.name} />
        <small>{regCopyright}</small>
      </div>

      <div className="grid grid-cols-1 w-96 md:grid-cols-6">
        <div className="flex items-center justify-around">
          {menuItems?.map((item: any, index: number) => (
            <Link href={`/${item.redirectionTarget}`} key={index} className="link link-hover">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-around">
          {socialItems?.map((item: any) => (
            <a href={item.linkUr} key={item._kenticoId} className="link link-hover">
              {item.socialName}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
