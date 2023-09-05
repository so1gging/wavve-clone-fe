import styled from '@emotion/styled'
import Stop from '@/assets/icons/paging-stop.svg'
interface BulletSliderProps {
  current: number
  length: number
}

export default function BulletSlider({ current, length }: BulletSliderProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stop width={34} height={34} />
      {new Array(length).fill(0).map((_, index) => (
        <Bullet
          key={`bullet-${index}`}
          style={{ backgroundColor: index === current ? '#fff' : 'hsla(0, 0%, 100%, 0.3)' }}
        />
      ))}
      <Bullet />
    </div>
  )
}

const Bullet = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 4px;
  border-radius: 50%;
`
