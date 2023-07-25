/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';

import { HeaderData } from '$types/HeaderData';

interface HeaderProps {
  data: HeaderData;
}

function Header({ data }: HeaderProps): JSX.Element {
  const { logo, menuItems } = data || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-emerald-500">
      <nav className="flex items-center justify-between p-4 lg:px-12">
        <Link href="/" className="flex items-center justify-center name-link">
          <div className="flex items-center">
            <img src={logo?.url} className="w-20 h-auto lg:w-32 lg:h-auto" alt={logo?.name} />
          </div>
        </Link>

        <div className={`space-x-6 text-white ${isMenuOpen ? 'lg:hidden' : 'lg:flex'}`}>
          {menuItems?.map((item: any) => (
            <Link
              prefetch={false}
              passHref
              href={`${item?.redirectionTarget ? `/${item?.redirectionTarget}` : ''}`}
              // href={item.name === 'Federations' ? '/federations' : `/${item?.redirectionTarget}`}
              key={item?._kenticoId}
            >
              <a>{item?.name}</a>
            </Link>
          ))}
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Responsive menu */}
      <div className={`block lg:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <div className="flex flex-col p-4 space-y-4">
          {menuItems?.map((item: any) => (
            <Link
              prefetch={false}
              passHref
              href={`${item?.redirectionTarget ? `/${item?.redirectionTarget}` : ''}`}
              key={item?._kenticoId}
            >
              <a>{item?.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
