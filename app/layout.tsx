import type React from "react"
import type { Metadata } from "next"
import { Outfit, Syne, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rundevlopers.com'),
  title: "Run Developers | A.K. Nagar - Premium Plots in Seoni, MP | RERA Approved",
  description:
    "Run Developers presents A.K. Nagar - RERA approved residential plots in Seoni, Madhya Pradesh. T&CP approved, Bank loan available. Contact: 9300 160 966",
  keywords: [
    "Run Developers",
    "A.K. Nagar Seoni",
    "RERA approved plots",
    "Residential plots in Seoni",
    "Bithli Seoni plots",
    "MP real estate plots",
    "Plots in Seoni",
    "Colonizers in Seoni",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  applicationName: "Run Developers",
  generator: "Next.js",
  authors: [{ name: "Run Developers" }],
  creator: "Run Developers",
  publisher: "Run Developers",
  robots: {
    index: true,
    follow: true,
  },
}

// SEO Schema: Google ko batane ke liye ki ye Seoni ka local business hai
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Run Developers",
  "image": "https://rundevlopers.com/icon.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Seoni",
    "addressRegion": "MP",
    "addressCountry": "IN"
  },
  "url": "https://rundevlopers.com",
  "telephone": "+919300160966",
  "priceRange": "$$"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema markup inject kar rahe hain */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet" />
        <Navbar/>
        <main>{children}</main>
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}