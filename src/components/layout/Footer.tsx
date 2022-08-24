import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer({ dataFooter }: any) {
  const { copyright, legalLinks, logo, menuItems, socialItems } = dataFooter;

  console.log(dataFooter);

  return (
    <footer>
      <div className="footer-links-nav">
        <div className="copyright" dangerouslySetInnerHTML={{ __html: copyright }}></div>
        <ul>
          {menuItems.map((e: any) => (
            <li key={e._kenticoId}>
              <Link href={e.redirectionTarget}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="logo-footer">
        <img src={logo.url} width={235} height={100} />
      </div>
    </footer>
  );
}

export default Footer;
