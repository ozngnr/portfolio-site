import { GlobalStyles } from "../styles/global"
import { ContextProvider } from "../context/context"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ozan Guner | Front End Developer</title>
      </Head>

      <ThemeProvider theme={theme.default}>
        <ContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
