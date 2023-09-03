'use client'
import { css } from '@emotion/react'
import Nav from '@/templates/main/Nav'
import Divider from '@/components/Divider/Divider'
import { theme } from '@/libs/styles/theme'

export default function Header() {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <Nav />
      <Divider color={theme.palette.semiGray} />
    </div>
  )
}
