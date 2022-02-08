import { GlobalStyles } from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
