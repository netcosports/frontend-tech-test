import clsx from 'clsx';

import Footer from './Footer';
import Header from './Header';

import { FooterData } from '$types/FooterData';
import { HeaderData } from '$types/HeaderData';

interface LayoutProps {
  children: React.ReactNode;
  webConfig: {
    header: HeaderData;
    footer: FooterData;
  };
}

function Layout({ children, webConfig }: LayoutProps): JSX.Element {
  const headerData = webConfig?.header;
  const footerData = webConfig?.footer;

  return (
    <>
      <div className="flex flex-col w-full min-h-screen overflow-hidden">
        <Header data={headerData} />
        <main
          className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')}
        >
          {children}
        </main>
        <Footer data={footerData} />
      </div>
    </>
  );
}

export default Layout;
