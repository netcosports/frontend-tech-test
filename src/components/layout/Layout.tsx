import clsx from 'clsx';

import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';
import Carousel from './Carousel';
import Ad from './Ad';

import { useQuery } from 'react-query';

import Cms from '../../services/Cms';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {

  const dataNav = children.props.webConfig;
  const dataPage = children.props.page;

  // Return the data needed for the components
  const getDataComponent = (data, key: string): any => {
    return data.find((dataComponent) => dataComponent._kenticoItemType === key);
  };

  // Set the data for the slider component
  const dataSlider = getDataComponent(dataPage.components, 'section_static_slider');

  // Set the data for the carousel component
  const dataCarousel = getDataComponent(dataPage.components, 'section_static_carousel');

  // Set the data for the ad component
  const dataAd = getDataComponent(dataPage.components, 'section_static_ad');

  return (
    <>
      <div className="flex min-h-screen w-full flex-col overflow-hidden">
        <Header dataHeader={dataNav.header} />

        {/* SLIDER */}
        {dataSlider && <Slider dataSlider={dataSlider} />}
        {/* CAROUSEL */}
        {dataCarousel && <Carousel dataCarousel={dataCarousel} />}
        {/* AD */}
        {dataAd && <Ad dataAd={dataAd} />}

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
