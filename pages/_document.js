import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="../dist/output.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}