import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface SsrStyledDocumentProps {
  styleTags: any;
}

export default class SsrStyledDocument extends Document<
  SsrStyledDocumentProps
> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          <title>Alice.dk</title>
          {this.props.styleTags}
          <meta name="description">Alice Sjurkalina</meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
