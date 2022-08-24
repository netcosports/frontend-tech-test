import clsx from 'clsx';

import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';

import { useQuery } from 'react-query';

import Cms from '../../services/Cms';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  const dataNav = children.props.webConfig;
  const dataPage = children.props.page;

  // Return the data needed for the components
  const getDataComponent = (data, key: string): any => {
    return data.find((dataComponent) => dataComponent._kenticoItemType === key);
  };

  // Set The Data for the slider component
  const dataSlider = getDataComponent(dataPage.components, 'section_static_slider');

  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden">
        <Header dataHeader={dataNav.header} />
        {/* SLIDER */}
        {dataSlider && <Slider dataSlider={dataSlider} />}

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
