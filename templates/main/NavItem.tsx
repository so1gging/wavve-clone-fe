import Typography from '@/components/Typography/Typography'
import Divider from '@/components/Divider/Divider'

interface NavItemProps {
  title: string
  isDivider?: boolean
}

export default function NavItem({ title, isDivider = true }: NavItemProps) {
  return (
    <>
      <Typography variants="caption2" as="li" margin="0 11px">
        {title}
      </Typography>
      {isDivider && <Divider height="10px" width="1px" />}
    </>
  )
}
