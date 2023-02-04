import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: [initialProps.styles, sheet.getStyleElement()],
//       };
//     } finally {
//       sheet.seal();
//     }
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <meta
//             name="description"
//             content="Highly passionate and creative Front End Developer, based in London. Specialising in React, Gatsby and Next.js"
//           />
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link
//             rel="preconnect"
//             href="https://fonts.gstatic.com"
//             crossOrigin="true"
//           />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
//             rel="stylesheet"
//           ></link>
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
