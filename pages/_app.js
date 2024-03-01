import { GlobalStyles } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
// import '../components/xWidget/xWidget.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
