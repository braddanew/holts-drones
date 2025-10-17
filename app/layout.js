export const metadata = {
  title: "Holt’s Drones | Precision Aerial Imaging",
  description: "FAA Certified Aerial Services — See Your Property from a Higher Perspective.",
  keywords: [
    "drone photography",
    "Fresno",
    "aerial inspection",
    "real estate drone",
    "FAA certified drone services"
  ],
  openGraph: {
    title: "Holt’s Drones | Precision Aerial Imaging",
    description: "FAA Certified Aerial Services — See Your Property from a Higher Perspective.",
    images: "/og.svg",
    url: "https://holts-drones.com",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

import "./globals.css";
import Chatbot from "../components/Chatbot";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Holt’s Drones",
              url: "https://holts-drones.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fresno",
                addressRegion: "CA",
                addressCountry: "US"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-559-213-3403",
                contactType: "customer service"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}




