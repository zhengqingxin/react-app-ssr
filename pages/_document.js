import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styles}
          <link href="http://lib.baomitu.com/antd/3.2.1/antd.min.css" rel="stylesheet" />
          <link href="http://lib.baomitu.com/nprogress/0.2.0/nprogress.min.css" rel="stylesheet" />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
