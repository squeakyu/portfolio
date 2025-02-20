import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ParticleBackground from "@/components/ParticleBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Richard Lu - Portfolio",
  description: "Full Stack Developer Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  )
}



import './globals.css'