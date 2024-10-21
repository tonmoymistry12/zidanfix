import React from "react";
import Head from "next/head";
import PublicFooter from "../Public-Footer";
import PublicHeader from "../Public-Header";


export default function BaseLayout({ children }) {
  return (
    <>
      <Head>
        <title>Devicesathi - Appliance Repair Services in Kolkata & Howrah</title>
        <meta
          name="description"
          content="Devicesathi offers trusted, affordable appliance repair services in Kolkata and Howrah. We specialize in AC, Refrigerator, Washing Machine, Microwave, Geyser, and other home appliances. Certified technicians ensure quick and reliable repairs at your convenience. Book now!"
        />
        <meta
          name="keywords"
          content="Devicesathi, appliance repair Kolkata, AC repair Kolkata, Refrigerator repair Kolkata, Washing Machine repair Kolkata, Microwave repair Kolkata, Geyser repair Kolkata, Chimney repair Kolkata, Water purifier repair Kolkata, Inverter repair Kolkata, Electrical services Kolkata, AC repair Howrah, AC service near me, appliance repair Howrah, affordable appliance repair, certified technicians, fast appliance repair, appliance repair services Kolkata"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Devicesathi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags for Social Media Preview */}
        <meta property="og:title" content="Devicesathi - Reliable Appliance Repair in Kolkata & Howrah" />
        <meta property="og:description" content="Trusted appliance repair services in Kolkata and Howrah. Get quick, budget-friendly repairs for AC, Refrigerator, Washing Machine, and more. Book now!" />
        <meta property="og:image" content="/images/logo/zidan-logo.svg" /> {/* Add your image URL */}
        <meta property="og:url" content="https://www.devicesathi.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Devicesathi - Fast & Affordable Appliance Repair" />
        <meta name="twitter:description" content="Get professional and certified technicians to repair your AC, Refrigerator, Washing Machine, and more. Serving Kolkata and Howrah. Book now!" />
        <meta name="twitter:image" content="/images/logo/zidan-logo.svg" /> {/* Add your Twitter image URL */}
        <meta name="twitter:site" content="@Devicesathi" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.devicesathi.com" />

        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" />
        
      </Head>

      <PublicHeader />
      {children}
      <PublicFooter />
    </>
  );
}
