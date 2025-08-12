import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, PT_Sans } from "next/font/google"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-libre-baskerville",
})

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-pt-sans",
})

export const metadata: Metadata = {
  title: "Hidabo - Suplementos Minerales para Bovinos",
  description:
    "Empresa líder en suplementos minerales para bovinos, asesoramiento técnico en nutrición bovina y transporte de ganado.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${libreBaskerville.variable} ${ptSans.variable} antialiased`}>
      <body className="font-sans bg-neutral-light text-foreground">{children}</body>
    </html>
  )
}
