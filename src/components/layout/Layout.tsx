import { useQuery } from 'react-query';
import clsx from 'clsx';
import Cms from 'src/services/Cms';

import Ad from './Ad';
import CarouselList from './Carousel';
import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';

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
  function sectionSlider(array: any[]): any {
    const kentico = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_slider',
    );
    return kentico;
  }

  const sliderItemKey = ['sliderItem'];

  const { data: sliderItems } = useQuery(sliderItemKey, () => Cms.getPageContent('home'));

  const sliderItem = sliderItems || [];
  const sliderItemArray = sliderItem.components || [];
  const sliderData = sectionSlider(sliderItemArray);

  // console.log('sliderData', sliderData);

  function sectionCarousel(array: any[]): any {
    const kentico = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_carousel',
    );
    return kentico;
  }

  const carouselItemKey = ['carouselItem'];

  const { data: carouselItems } = useQuery(carouselItemKey, () => Cms.getPageContent('home'));

  const carouselItem = carouselItems || [];
  const carouselItemArray = carouselItem.components || [];
  const carouselData = sectionCarousel(carouselItemArray);

  // console.log('carouselData', carouselData);

  function sectionAd(array: any[]): any {
    const kentico = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_ad',
    );
    return kentico;
  }

  const adItemKey = ['adItem'];

  const { data: adItems } = useQuery(adItemKey, () => Cms.getPageContent('home'));

  const adItem = adItems || [];
  const adItemArray = adItem.components || [];
  const adData = sectionAd(adItemArray);
  // console.log("adItems", adData);

  const headerData = webConfig.header;
  const footerData = webConfig.footer;

  return (
    <>
      {/* gap-10 */}
      <div className="flex flex-col w-full min-h-screen overflow-hidden">
        <Header data={headerData} />
        <Slider data={sliderData} />
        <CarouselList data={carouselData} />
        <Ad data={adData} />
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
