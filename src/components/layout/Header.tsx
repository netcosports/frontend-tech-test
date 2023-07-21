'use client';

import React from 'react';
import { Navbar } from 'flowbite-react';

function Header(): JSX.Element {
  return (
    <Navbar fluid className="h-24 bg-emerald-500">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="HOR_OriginsLogo_WHITE@3x.png"
          className="h-6 mr-3 sm:h-9"
          src="https://assets-eu-01.kc-usercontent.com:443/604c2fe8-9bc6-010e-8c13-73c42e66ce87/2e8ef975-6ffa-45f5-a37d-b5fa705b2e6e/HOR_OriginsLogo_WHITE%403x.png"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Origins Digital
        </span>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
