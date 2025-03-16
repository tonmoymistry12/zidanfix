import React from "react";
import Head from "next/head";
import PublicFooter from "../Public-Footer";
import PublicHeader from "../Public-Header";
import Script from 'next/script';

export default function BaseLayout({ children }) {
  return (
    <>
      <Head>
        <title>Best AC Repair Service in Kolkata & Howrah | DeviceSathi</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        <meta
          name="description"
          content="Leading AC repair service in Kolkata & Howrah. Expert AC maintenance, refrigerator repair, and appliance services. 24/7 emergency repairs, experienced technicians, doorstep service. Best AC service near you with 90-day warranty. Call now!"
        />
        <meta
          name="keywords"
          content="AC repair Kolkata, AC service Kolkata, AC maintenance Kolkata, split AC repair, window AC repair, refrigerator repair Kolkata, fridge service Kolkata, AC repair near me, AC service center Kolkata, best AC repair Kolkata, AC repair Howrah, AC mechanic near me, AC gas refilling Kolkata, AC installation Kolkata, emergency AC repair, commercial AC service, residential AC repair, AC AMC services, AC repair cost Kolkata, AC service charges"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DeviceSathi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Location Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "DeviceSathi AC Repair Services",
              "image": "/images/logo/zidan-logo.svg",
              "description": "Professional AC repair and maintenance services in Kolkata and Howrah",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Esplanade, Dharmatala",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "postalCode": "700087",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.5626,
                "longitude": 88.3630
              },
              "url": "https://www.devicesathi.com",
              "telephone": "+919233141733",
              "priceRange": "₹₹",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "22:00"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61569940096992",
                "https://twitter.com/devicesathi",
                "https://instagram.com/devicesathi"
              ]
            }
          `}
        </script>

        {/* Service Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AC Repair and Maintenance",
              "provider": {
                "@type": "LocalBusiness",
                "name": "DeviceSathi"
              },
              "areaServed": {
                "@type": "City",
                "name": ["Kolkata", "Howrah"]
              },
              "description": "Professional AC repair, maintenance, and installation services with 90-day warranty",
              "offers": {
                "@type": "Offer",
                "price": "499",
                "priceCurrency": "INR",
                "description": "AC service starting from ₹499"
              }
            }
          `}
        </script>
       
        {/* Open Graph Tags */}
        <meta property="og:title" content="Best AC Repair & Maintenance Services in Kolkata | DeviceSathi" />
        <meta property="og:description" content="Expert AC repair services in Kolkata & Howrah. 24/7 emergency service, experienced technicians, doorstep repairs. Best rates guaranteed. Call now for instant AC service!" />
        <meta property="og:image" content="/images/logo/zidan-logo.svg" />
        <meta property="og:url" content="https://www.devicesathi.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DeviceSathi" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional AC Repair Services Kolkata | 24/7 AC Service" />
        <meta name="twitter:description" content="Trusted AC repair & maintenance in Kolkata. Expert technicians, same-day service, all AC brands. Best AC service near you. Contact now!" />
        <meta name="twitter:image" content="/images/logo/zidan-logo.svg" />
        <meta name="twitter:site" content="@DeviceSathi" />

        {/* Additional Meta Tags */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Kolkata, Howrah" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.devicesathi.com" />
      </Head>

      {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LXQ21RW7KQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LXQ21RW7KQ');
        `}
      </Script>

      <PublicHeader />
      {children}
      <PublicFooter />
    </>
  );
}
