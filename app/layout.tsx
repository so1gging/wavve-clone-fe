'use client'

import StyledJsxRegistry from '@/app/registry'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@/libs/styles/theme'
import { Noto_Sans_KR } from 'next/font/google'

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
    <html lang="en">
      <body className={notoSansKr.className}>
        <StyledJsxRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
