import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="zh">
        <Head>
          <meta
            name="google-site-verification"
            content="LECU9nMvm1EqFHPX4mOusC27DRtGritLiVE7SYn-V10"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta
            name="viewport"
            content="width=device-width"
            viewport-fit="cover"
          />
          <link
            rel="apple-touch-icon"
            href="https://static.haohaozhu.cn/assets/common/images/favicon.ico"
          />

          <link
            rel="apple-touch-icon-precomposed.png"
            href="https://static.haohaozhu.cn/assets/common/images/favicon.ico"
          />

          <link
            rel="shortcut icon"
            href="https://static.haohaozhu.cn/assets/common/images/favicon.ico"
            type="image/x-icon"
          />

          <link rel="dns-prefetch" href="//img.haohaozhu.cn" />
          <link rel="dns-prefetch" href="//static.haohaozhu.cn" />
          <link rel="dns-prefetch" href="//g.alicdn.com" />
          <meta name="referrer" content="always" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
