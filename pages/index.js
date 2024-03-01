import About from '../components/about'
import ContactMe from '../components/contactMe'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Projects from '../components/projects'
import { getProjectsData } from '../lib/projects'
import XWidget from 'x-widget-react'
import Head from 'next/head'
import Script from 'next/script'

export default function Home({ allProjectsData }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ECQVZ0CX9Z"
      ></Script>
      <Head>
        <title>Ozan Guner | Software Developer</title>
        <meta
          name="description"
          content="Highly passionate and creative Front End Developer, based in London. Specialising in React js"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google tag (gtag.js) --> */}
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-ECQVZ0CX9Z');`}
        </script>
        {/* <!-- Google Tag Manager --> */}
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KTZWCW3');`}</script>
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <Layout>
        <Intro />
        <About />
        <Projects data={allProjectsData} />
        <ContactMe />
        {/* XWidget */}
        <XWidget workspaceId={'ed2fcf6c-cd31-42e1-98ec-181c7af61278'} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allProjectsData = getProjectsData()

  return {
    props: {
      allProjectsData,
    },
  }
}
