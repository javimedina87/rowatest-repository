import Index from '../components/Layout/index';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Index>
      <Component {...pageProps} />
    </Index>
  )
}

export default MyApp;
