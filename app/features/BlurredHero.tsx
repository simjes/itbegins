import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'

interface Props {
  src: string
  alt: string
  srcSet: string
  sizes: string
  lqip: string
}

const imageClassName =
  'absolute w-full h-full top-0 bottom-0 right-0 left-0 object-cover object-center'

const BlurredHero = ({ src, srcSet, sizes, alt, lqip }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true)
    }
  }, [])
  return (
    <>
      <img className={cn(imageClassName)} src={lqip} aria-hidden alt={alt} />
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        aria-hidden
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={cn(
          imageClassName,
          'transition-opacity',
          loaded ? 'opacity-1' : 'opacity-0',
        )}
      />
    </>
  )
}

export default BlurredHero
