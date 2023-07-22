import { useQuery } from 'react-query';
import clsx from 'clsx';
import Cms from 'src/services/Cms';

import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  function sectionSlider(array: any[]): any {
    const kentico = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_slider',
    );
    return kentico;
  }

  const sliderItemKey = ['sliderItem'];

  const { data: sliderItems } = useQuery(sliderItemKey, () => Cms.getPageContent('Home'));

  const sliderItem = sliderItems || [];
  const sliderItemArray = sliderItem.components || [];
  const sliderData = sectionSlider(sliderItemArray);

  console.log('sliderData', sliderData);

  return (
    <>
      <div className="flex flex-col w-full min-h-screen gap-10 overflow-hidden">
        <Header />
        <Slider data={sliderData} />
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
