import React from "react";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <title>Prince Juguilon | Software Engineer</title>

        <Head>
          <meta
            name="description"
            content="A Software Engineer based in the Philippines, React enthusiast, fond of creating interactive and responsive layouts for web and mobile applications."
          />
          <meta name="twitter:site" content="https://princecaarlo.tech/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@princecaarlo" />

          <meta
            property="og:title"
            content="Prince Juguilon | Software Engineer"
          />
          <meta
            property="og:description"
            content="A Software Engineer based in the Philippines, React enthusiast, fond of creating interactive and responsive layouts for web and mobile applications."
          />
          <meta property="og:url" content="https://princecaarlo.tech/" />
          <meta property="og:image" content="/images/profile.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Prince Juguilon" />
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
