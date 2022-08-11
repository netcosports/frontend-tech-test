/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import clsx from 'clsx';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import { DEFAULT_LANGUAGE, DEFAULT_LOCALE } from '$utils/constants';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang={DEFAULT_LANGUAGE} dir="ltr">
        <Head>
          <meta name="robots" content="noindex, nofollow" />

          {/* meta tags */}
          <meta property="og:locale" content={DEFAULT_LOCALE} />

          {/* twitter tags */}
          {/* <meta name="twitter:site" content={TWITTER_SITE} /> */}
          <meta name="twitter:card" content="summary" />

          {/* facebook tags */}
          {/* <meta property="fb:app_id" content={FACEBOOK_APP_ID} /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Spectral:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
