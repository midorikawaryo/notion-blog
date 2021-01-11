import Document, { Html, Head, Main, NextScript } from 'next/document'
import { existsGaId } from '../lib/gtag'

const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {existsGaId ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
