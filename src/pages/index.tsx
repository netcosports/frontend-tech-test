import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Cms from 'src/services/Cms';

import { DEFAULT_LANGUAGE, KENTICO_HARDCODED_PAGES } from '$utils/constants';

type IProps = InferGetStaticPropsType<typeof getStaticProps>;

function Home({ page }: IProps): JSX.Element | null {
  return (
    <>
      <pre>{JSON.stringify(page, null, 2)}</pre>
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
