import clsx from 'clsx';

import Footer from './Footer';
import Header from './Header';

import { useQuery } from 'react-query';

import Cms from '../../services/Cms';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  
  const data = children.props.webConfig 

  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden">
        <Header headerData={data.header} />
        <main
          className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')}
        >
          {children}
        </main>
        <Footer footerData={data.footer} />
      </div>
    </>
  );
}

export default Layout;
