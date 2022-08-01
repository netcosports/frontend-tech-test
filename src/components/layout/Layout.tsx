import clsx from 'clsx';

import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden">
        <Header />
        <main
          className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
