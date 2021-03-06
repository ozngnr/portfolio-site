import { Html, Head, Main, NextScript } from "next/document"

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Highly passionate and creative Front End Developer, based in London. Specialising in React, Gatsby and Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
