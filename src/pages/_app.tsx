import type { AppProps } from 'next/app'
import { Inter as FontSans } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import { UserProvider } from '@/core/contexts/user-context'

import { Toaster } from '@/components/ui/toaster'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>
      <UserProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
      </UserProvider>
    </>
  )
}
