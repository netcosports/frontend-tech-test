import { useQuery } from 'react-query';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Cms from 'src/services/Cms';

import Ad from '$components/layout/Ad';
import CarouselList from '$components/layout/Carousel';
import Slider from '$components/layout/Slider';
import { DEFAULT_LANGUAGE, KENTICO_HARDCODED_PAGES } from '$utils/constants';

type IProps = InferGetStaticPropsType<typeof getStaticProps>;

function Home({ page }: IProps): JSX.Element | null {
  // ****************** Slider ****************** //
  function sectionSlider(array: any[]): any {
    const kentico = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_slider',
    );
    return kentico;
  }

  const sliderItemKey = ['sliderItem'];

  const { data: sliderItems } = useQuery(sliderItemKey, () => Cms.getPageContent('home', {}));

  const sliderItem = sliderItems || [];
  const sliderItemArray = sliderItem.components || [];
  const sliderData = sectionSlider(sliderItemArray);

  // console.log('sliderData', sliderData);

  // ****************** Carousel ****************** //
  function sectionCarousel(array: any[]): any {
    const kentico = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_carousel',
    );

    return kentico;
  }

  const carouselItemKey = ['carouselItem'];

  const { data: carouselItems } = useQuery(carouselItemKey, () => Cms.getPageContent('home', {}));

  const carouselItem = carouselItems || [];
  const carouselItemArray = carouselItem.components || [];
  const carouselData = sectionCarousel(carouselItemArray);

  // console.log('carouselItemArr', carouselData);

  // ****************** Ad component ****************** //
  function sectionAd(array: any[]): any {
    const kentico = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_ad',
    );
    return kentico;
  }

  const adItemKey = ['adItem'];

  const { data: adItems } = useQuery(adItemKey, () => Cms.getPageContent('home', {}));

  const adItem = adItems || [];
  const adItemArray = adItem.components || [];
  const adData = sectionAd(adItemArray);
  // console.log("adItems", adData);

  return (
    <>
      <Slider data={sliderData} />
      <CarouselList data={carouselData} />
      <Ad data={adData} />
    </>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const pageLocale = locale ?? DEFAULT_LANGUAGE;

  try {
    const [page, webConfig] = await Promise.allSettled([
      Cms.getPageContent(KENTICO_HARDCODED_PAGES.HOME, {
        params: {
          language: pageLocale,
        },
      }),
      Cms.getConfig(),
    ]);

    return {
      props: {
        page: page.status === 'fulfilled' ? page.value : null,
        webConfig: webConfig.status === 'fulfilled' ? webConfig.value : null,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Home;
