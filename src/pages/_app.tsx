import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';

import { ViewportProvider } from '@onrewind/ui';

import '../styles/carousel.css';
import '../styles/slider.css';
import '../styles.css';

import Layout from '$components/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const webConfig = pageProps.webConfig;

  // console.log('webConfig', webConfig);

  return (
    <>
      <DefaultSeo title="Origins Digital technical test" description="" />
      <QueryClientProvider client={queryClient}>
        <ViewportProvider>
          <NextNProgress color="var(--secondary)" />
          <Layout webConfig={webConfig}>
            <Component {...pageProps} />
          </Layout>
        </ViewportProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
