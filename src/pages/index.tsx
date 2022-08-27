import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Cms from 'src/services/Cms';

import FullPageLoader from '$components/FullPageLoader';
import Slider from '$components/layout/Slider';
import Carousel from '$components/layout/Carousel';
import Ad from '$components/layout/Ad';

import { DEFAULT_LANGUAGE, KENTICO_HARDCODED_PAGES } from '$utils/constants';
import { useQuery } from 'react-query';

type IProps = InferGetStaticPropsType<typeof getStaticProps>;

function Home({ page }: IProps): JSX.Element | null {

  const { data: dataPage, status: statusPage } = useQuery(['dataPage'], () =>
  Cms.getPageContent('home', {}),
);

  // Return the data needed for the components  
  const getDataComponent = (data, key: string): any => {
    return data.find((dataComponent) => dataComponent._kenticoItemType === key);
  };

  if (statusPage === 'loading') return <FullPageLoader />;

  // Set the data for the slider component
  const dataSlider = getDataComponent(dataPage.components, 'section_static_slider');

  // Set the data for the carousel component
  const dataCarousel = getDataComponent(dataPage.components, 'section_static_carousel');

  // Set the data for the ad component
  const dataAd = getDataComponent(dataPage.components, 'section_static_ad');

  return (
    <>
      {/* SLIDER */}
      {dataSlider && <Slider dataSlider={dataSlider} />}
      {/* CAROUSEL */}
      {dataCarousel && <Carousel dataCarousel={dataCarousel} />}
      {/* AD */}
      {dataAd && <Ad dataAd={dataAd} />}
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
