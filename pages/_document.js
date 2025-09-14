import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTZWCW3" height="0" width="0" style="display:none;visibility:hidden"/>`,
            }}
          />
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
          <script async defer src="http://localhost:3000/embed/toasthub.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  function initToastHub() {
                    if (typeof window !== 'undefined' && window.ToastHub) {
                      try {
                        new window.ToastHub("cmfjl5pa000037o9no252hg4t", {
                          apiUrl: "http://localhost:3000",
                          enableRealtime: true,
                          pusherKey: "cddab0774abf396e25a1",
                          pusherCluster: "eu",
                          pollInterval: 5000
                        });
                      } catch (error) {
                        console.warn('ToastHub initialization failed:', error);
                      }
                    } else {
                      // Retry initialization after a short delay
                      setTimeout(initToastHub, 100);
                    }
                  }
                  
                  // Initialize when DOM is ready
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', initToastHub);
                  } else {
                    initToastHub();
                  }
                })();
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}
