import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {useScrollPosition} from "$utils/useScrollPosition"

function Header({ dataHeader }: any): JSX.Element {
  // PROPS
  const { favicon, fixed, liveEvents, logo, menuItems } = dataHeader;

  // STATE
  const [toggleNav, setToggleNav] = useState(true);
  const [showOnScroll, setShowOnScroll] = useState(true)

  // METHODS
  const handleClick = () => {
    setToggleNav(!toggleNav);
  };

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== showOnScroll) setShowOnScroll(isShow)
  }, [showOnScroll], false, false, 200)

  return (
    <header className={showOnScroll ? "hidden-nav-bar" : ""}>
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

      <div className="toggle-phone-nav" onClick={() => handleClick()}>
        <Image src="/brg_menu.png" alt="burger menu" height={40} width={40} />
      </div>

      <nav className={'phone-nav ' + (toggleNav ? 'hidden-phone-nav' : '')}>
        <ul>
          {menuItems.map((e) => (
            <li key={e._kenticoId}>
              <Link href={e.redirectionTarget}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
