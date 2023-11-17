import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name='theme-color' content='#00ba74'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='font-vazir scroll-smooth outline-none' dir='rtl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
