import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export default function Area({ children }: PropsWithChildren) {
  return (
    <div
      css={css({
        width: '1240px',
        margin: '0 auto',
      })}
    >
      {children}
    </div>
  )
}
