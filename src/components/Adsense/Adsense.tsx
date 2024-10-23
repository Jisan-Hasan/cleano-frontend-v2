"use client";

import Script from "next/script";

const Adsense = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6101537417677408`}
      crossOrigin="anonymous"
    />
  );
};

export default Adsense;
