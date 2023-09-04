import Typography from '@/components/Typography/Typography'

interface GnbMenuProps {
  title: string
}
export default function GnbItem({ title }: GnbMenuProps) {
  return (
    <Typography variants="subTitle" as="li" padding="0px 10px">
      {title}
    </Typography>
  )
}
