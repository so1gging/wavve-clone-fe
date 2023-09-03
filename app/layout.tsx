'use client'

import StyledJsxRegistry from '@/app/registry'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@/libs/styles/theme'
import { Noto_Sans_KR } from 'next/font/google'
import GlobalStyle from '@/libs/styles/GlobalStyle'
import Header from '@/templates/main/Header'

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className={notoSansKr.className}>
          <StyledJsxRegistry>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Header />
              {children}
            </ThemeProvider>
          </StyledJsxRegistry>
        </body>
      </html>
    </>
  )
}
