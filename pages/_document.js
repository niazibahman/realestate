import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='font-vazir scroll-smooth outline-none' dir='rtl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
