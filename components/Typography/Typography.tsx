import { typography } from '@/emotion'
import styled from '@emotion/styled'
import { ElementType, PropsWithChildren } from 'react'

interface TypographyProps extends PropsWithChildren {
  variants: typography
  as?: ElementType
}

export default function Typography({ variants, as, children }: TypographyProps) {
  return (
    <Styled variants={variants} as={as}>
      {children}
    </Styled>
  )
}

const Styled = styled.p<TypographyProps>(({ theme, variants }) => ({
  ...theme.typography[variants],
}))
