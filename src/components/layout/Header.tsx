import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

function Header({ headerData }: any): JSX.Element {
  const [toggleNav, setToggleNav] = useState(true);

  const handleClick = () => {
    setToggleNav(!toggleNav);
  };

  const { favicon, fixed, liveEvents, logo, menuItems } = headerData;
  console.log(headerData);
  return (
    <div className="header">
      <div className="logo">
        <img src={logo.url} width={235} height={100} />
      </div>
      <nav className="desktop-nav">
        <ul>
          {menuItems.map((e: any) => (
            <li key={e._kenticoId}>
              <Link href={e.redirectionTarget}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={'toggle-phone-nav'}
        onClick={() => handleClick()}
      >
        <Image src="/brg_menu.png" alt="burger menu" height={40} width={40} />
      </div>

      <nav className={"phone-nav " + (toggleNav ? 'hidden-phone-nav' : '')}>
      <ul>
          {menuItems.map((e) => (
            <li key={e._kenticoId}>
              <Link href={e.redirectionTarget}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
