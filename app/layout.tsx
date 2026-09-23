import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const mono = Space_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brett Maldicas — Brand & Web Designer, Manila",
  description:
    "Brand and web designer based in Manila, Philippines. I help growing businesses build clear visual systems and websites that earn customer trust.",
  openGraph: {
    title: "Brett Maldicas — Brand & Web Designer",
    description: "Clear visual systems and websites that earn customer trust.",
    url: "https://maldicas-studio.work",
    siteName: "Brett Maldicas",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}