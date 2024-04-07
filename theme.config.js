export default {
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">Lords Forsaken Wiki</span>
        </>
    ),
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content="Lords Forsaken Wiki" />
            <meta name="og:description" content="Lords Forsaken Wiki" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site:domain" content="wiki.lordsforsaken.com" />
            <meta name="twitter:url" content="https://wiki.lordsforsaken.com" />
            <meta name="og:title" content="Lords Forsaken Wiki" />
            <meta name="apple-mobile-web-app-title" content="Lords Forsaken Wiki" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        </>
    ),

    // search: true,
    footer: {
        // footerEditOnGitHubLink: true,
        text: <>© Lords Forsaken 2024{new Date().getFullYear() === 2021 ? '' : ` - ${new Date().getFullYear()}`}</>
    },
};
