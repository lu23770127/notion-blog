import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <script
              async
              src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5606112886967612'
              crossOrigin='anonymous'
            ></script>

            <link rel='shortcut icon' href='/favicon.png' />

            <link
              rel='icon'
              type='image/png'
              sizes='192x192'
              href='/icon-192x192.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='256x256'
              href='/icon-256x256.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='384x384'
              href='/icon-384x384.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='512x512'
              href='/icon-512x512.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
