import Logo from '@/assets/icons/logo.svg'
import GnbItem from '@/templates/main/GnbItem'
import Search from '@/templates/main/Search'
export default function Gnb() {
  return (
    <div
      css={{ height: '74px', display: 'flex', alignItems: 'center', width: '1240px', margin: '0 auto', gap: '74px' }}
    >
      <Logo />
      <ul css={{ display: 'flex', gap: '20px' }}>
        {['홈', '카테고리', 'LIVE', 'MY'].map((title) => (
          <GnbItem key={`gnb-menu-${title}`} title={title} />
        ))}
      </ul>
      <div css={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
        <Search />
      </div>
    </div>
  )
}
