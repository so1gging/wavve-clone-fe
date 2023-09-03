import { typography } from '@/emotion'
import styled from '@emotion/styled'
import { ElementType, PropsWithChildren } from 'react'
import { CSSProperties } from '@emotion/serialize'

interface TypographyProps extends PropsWithChildren, CSSProperties {
  variants: typography
  as?: ElementType
}

export default function Typography({ variants, as, children, ...styleProps }: TypographyProps) {
  return (
    <Styled variants={variants} as={as} css={{ ...styleProps }}>
      {children}
    </Styled>
  )
}

const Styled = styled.p<TypographyProps>(({ theme, variants }) => ({
  ...theme.typography[variants],
}))
