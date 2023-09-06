'use client'
import Nav from '@/templates/main/Nav'
import Divider from '@/components/Divider/Divider'
import Gnb from '@/templates/main/Gnb'
import Area from '@/components/layout/Area'

export default function Header() {
  return (
    <Area>
      <Nav />
      <Divider />
      <Gnb />
    </Area>
  )
}
