import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../components/atoms/globalstyle";
import Navigation from "../components/molecyles/navigation";

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
        </Head>
        <body>
          <GlobalStyles />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
