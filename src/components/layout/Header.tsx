import React from 'react';
import clsx from 'clsx';

function Header({ header }): JSX.Element {
  const menuitems = header.menuItems;
  return (
    <nav className="border-2 border-emerald-500 fixed top-0 left-0 right-0 h-30 flex justify-between items-center bg-transparent ">
      <ul className="flex p-4 justify-around items-center">
        {menuitems.map((item) => (
          <li
            key={item._kenticoId}
            className=" text-[14px]  hover:border-b-2 hover:border-stone-50  p-2 "
          >
            {item.name}
          </li>
        ))}
      </ul>
      <span className="">
        <img src={header.logo.url} className="bg-cover w-24 h-24" alt="Logo header" />
      </span>
    </nav>
  );
}
export default Header;
