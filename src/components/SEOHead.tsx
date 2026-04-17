import { Helmet } from "react-helmet-async";
import { seoData } from "../data/seo";

export default function SEOHead() {
  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="author" content={seoData.author} />
      <meta name="keywords" content={seoData.keywords} />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Prahaladh Chandrahasan — Founding Engineer at Circle"
      />
      <meta
        property="og:description"
        content="Founding Engineer at Circle. CMU Privacy Engineering graduate. ML researcher at CMU LTI."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:image" content={seoData.image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={seoData.twitterHandle} />
      <meta name="twitter:creator" content={seoData.twitterHandle} />

      <link rel="canonical" href={seoData.url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(seoData.structuredData)}
      </script>
    </Helmet>
  );
}
