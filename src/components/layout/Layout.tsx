import clsx from 'clsx';

import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen gap-10 overflow-hidden">
        <Header />
        <Slider />
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
