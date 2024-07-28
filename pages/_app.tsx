import 'nextra-theme-docs/style.css';

// pages/_app.js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* General meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lordsforsak3n" />
        <meta name="twitter:title" content="Lords Forsaken Wiki" />
        <meta name="twitter:description" content="Explore the comprehensive wiki for the game Lords Forsaken." />
        <meta name="twitter:image" content="https://dvaiulh40vjp3.cloudfront.net/logos-icons/main.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
