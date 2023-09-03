'use client'

import StyledJsxRegistry from '@/app/registry'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <StyledJsxRegistry>
      {children}
      </StyledJsxRegistry>
      </body>
    </html>
  )
}
