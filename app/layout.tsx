'use client'

import StyledJsxRegistry from '@/app/registry'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@/libs/styles/theme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
