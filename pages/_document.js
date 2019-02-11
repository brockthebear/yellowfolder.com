import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // load styles before initial render so that page does not initially render without any styling.
  // in other words, this prevents a flicker of the screen after render.
  // unique to Next.js (https://github.com/zeit/next.js/#custom-document)
  static getInitialProps() {
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleElement();
    return { styleTags };
  }

  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
