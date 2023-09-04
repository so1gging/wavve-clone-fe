import { useState } from 'react'

export type SliderItemType = {
  prev: any | undefined
  current: any | undefined
  next: any | undefined
}

const getShowSlider = (data: any[], index: number): SliderItemType => {
  const length = data.length
  const isFirst = index === 0
  const isLast = length === index + 1

  return {
    prev: isFirst ? undefined : data[index - 1],
    current: data[index],
    next: isLast ? undefined : data[index + 1],
  }
}

const useSliderItem = (items: any[]) => {
  const [index, setIndex] = useState(0)

  const ITEM_LENGTH = items.length
  const isLast = ITEM_LENGTH - 1 === index
  const isFirst = 0 === index

  const setPrev = () => setIndex((prev) => (isFirst ? prev : prev - 1))
  const setNext = () => setIndex((prev) => (isLast ? prev : prev + 1))

  return { sliderItem: getShowSlider(items, index), setPrev, setNext, index, isLast, isFirst }
}
export default useSliderItem
