import Layout from '../component/layout/layout'
import '../styles/style.css'

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
