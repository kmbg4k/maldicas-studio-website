import type { Metadata } from "next"
import { IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400"})

export const metadata: Metadata = {
  title: "Sebastian Orlanda — Brand & Web Designer, Manila",
  description:
    "Brand and web designer based in Manila, Philippines. I help growing businesses build clear visual systems and websites that earn customer trust.",
  openGraph: {
    title: "Sebastian Orlanda — Brand & Web Designer",
    description: "Clear visual systems and websites that earn customer trust.",
    url: "https://maldicas-studio.work",
    siteName: "Sebastian Orlanda",
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