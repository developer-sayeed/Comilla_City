// components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, image, url }) => {
  const defaultTitle = "Welcome To Comilla city Digital Apps";
  const defaultDescription =
    "Explore Comilla effortlessly with the ultimate city guide app for attractions, services, and updates.";
  const defaultKeywords = "React, SEO, React Helmet, Web Development";
  const defaultImage = "https://example.com/default-image.jpg";
  const defaultURL = "http://localhost:5173/";

  return (
    <Helmet>
      {/* Title */}
      <title>{title ? `${title} | My Website` : defaultTitle}</title>

      {/* Meta Tags */}
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph Meta Tags (For Social Sharing) */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultURL} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={url || defaultURL} />
    </Helmet>
  );
};

export default SEO;
