import Script from "next/script";

const gtmId = "G-JT26W35EPT";

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      ></Script>
      <Script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: okay
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${gtmId}', {
page_path: window.location.pathname,
});
`,
        }}
        id="google-analytics"
      ></Script>
      <Script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: okay
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
`,
        }}
        id="gtm"
      ></Script>
    </>
  );
};
