import { css } from '@emotion/react'
import NavItem from '@/templates/main/NavItem'

export default function Nav() {
  return (
    <div
      css={css({
        width: '1240px',
        margin: '0 auto',
      })}
    >
      <ul css={css({ display: 'flex', float: 'right', padding: '8px 0', alignItems: 'center' })}>
        <NavItem title="로그인" />
        <NavItem title="이용권" />
        <NavItem title="쿠폰.코인" />
        <NavItem title="쿠폰.웨이브온" />
        <NavItem title="이벤트" isDivider={false} />
      </ul>
    </div>
  )
}
