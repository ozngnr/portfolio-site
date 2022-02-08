import Header from "../header"
import Head from "next/head"
import * as S from "./layout.styled"

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <title>Ozan Guner | Front End Developer</title>
        <meta
          name="description"
          content="Highly passionate and creative Front End Developer, based in London. Specialising in React, Gatsby and Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Container>
        <Header />
        <main>{children}</main>
      </S.Container>
    </>
  )
}
