import clsx from 'clsx';

import FullPageLoader from '../FullPageLoader';
import Footer from './Footer';
import Header from './Header';

import { useQuery } from 'react-query';

import Cms from '../../services/Cms';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  const { data: dataNav, status: statusNav } = useQuery(['dataNav'], () => Cms.getConfig());

  if (statusNav === 'loading') return <FullPageLoader />;

  return (
    <>
      <div className="flex min-h-screen w-full flex-col overflow-hidden">
        <Header dataHeader={dataNav.header} />
        <main
          className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')}
        >
          {children}
        </main>
        <Footer dataFooter={dataNav.footer} />
      </div>
    </>
  );
}

export default Layout;
