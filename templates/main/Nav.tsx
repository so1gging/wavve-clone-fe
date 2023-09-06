import { css } from '@emotion/react'
import NavItem from '@/templates/main/NavItem'
import Area from '@/components/layout/Area'

export default function Nav() {
  return (
    <Area>
      <ul css={css({ display: 'flex', float: 'right', height: '34px', alignItems: 'center' })}>
        <NavItem title="로그인" />
        <NavItem title="이용권" />
        <NavItem title="쿠폰.코인" />
        <NavItem title="쿠폰.웨이브온" />
        <NavItem title="이벤트" isDivider={false} />
      </ul>
    </Area>
  )
}
