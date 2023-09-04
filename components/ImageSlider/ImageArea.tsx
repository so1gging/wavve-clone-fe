import Image from 'next/image'
import { SliderItemType } from '@/components/ImageSlider/useSliderItem'

interface ImageAreaProps {
  sliderItem: SliderItemType
  width?: number
  height?: number
}

export default function ImageArea({ sliderItem, width = 1240, height = 508 }: ImageAreaProps) {
  return (
    <div css={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <div css={{ position: 'relative', width: 20, height, flex: 1 }}>
        {sliderItem.prev && (
          <Image
            src={`https://image.tmdb.org/t/p/original/${sliderItem.prev.urlPath}`}
            style={{ objectFit: 'cover', objectPosition: 'Top', borderRadius: '12px' }}
            fill
            alt={sliderItem.prev.title}
          />
        )}
      </div>
      <div css={{ position: 'relative', width, height }}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${sliderItem.current.urlPath}`}
          style={{ objectFit: 'cover', objectPosition: 'Top', borderRadius: '12px' }}
          fill
          alt={sliderItem.current.title}
        />
      </div>
      <div css={{ position: 'relative', width: 20, height, flex: 1 }}>
        {sliderItem.next && (
          <Image
            src={`https://image.tmdb.org/t/p/original/${sliderItem.next.urlPath}`}
            style={{ objectFit: 'cover', objectPosition: 'Top', borderRadius: '12px' }}
            fill
            alt={sliderItem.next.title}
          />
        )}
      </div>
    </div>
  )
}
