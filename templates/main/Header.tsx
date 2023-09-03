'use client'
import { css } from '@emotion/react'
import Nav from '@/templates/main/Nav'

export default function Header() {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <Nav />
    </div>
  )
}
