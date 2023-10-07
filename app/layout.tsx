import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { RainbowKitWalletProvider } from '@/providers/rainbowkit-provider'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar';
const exo2 = Exo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_PROJECT_NAME || "NFT Minting Application",
  description: `Official ${process.env.NEXT_PUBLIC_PROJECT_NAME} minting application`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={exo2.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RainbowKitWalletProvider>
            <Sidebar />
            <Header />
            {children}
          </RainbowKitWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
