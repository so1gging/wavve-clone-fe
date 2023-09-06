import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export default function Area({ children }: PropsWithChildren) {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      {children}
    </div>
  )
}
