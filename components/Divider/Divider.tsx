import { CSSProperties } from '@emotion/serialize'
import { theme } from '@/libs/styles/theme'

interface DividerProps {
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  color?: CSSProperties['color']
}
export default function Divider({ width = '100%', height = '1px', color = theme.palette.semiGray }: DividerProps) {
  return <div css={{ width, height, backgroundColor: color }} />
}
