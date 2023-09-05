import { motion } from 'framer-motion'

interface PosterProps {
  src: string
  alt: string
}
export default function Poster({ src, alt }: PosterProps) {
  return (
    <div style={{ overflow: 'hidden', width: 240, height: 360, borderRadius: 12 }}>
      <motion.img
        width={240}
        height={360}
        whileHover={{ scale: 1.1 }}
        src={`https://image.tmdb.org/t/p/original/${src}`}
        alt={alt}
      />
    </div>
  )
}
