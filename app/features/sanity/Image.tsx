import React from 'react'
import { imageUrlBuilder } from '~/lib/sanity/image'

const Image: React.FC = (props: any) => {
  if (!props.value.asset) {
    return null
  }

  const getImageUrlForSize = (width: number, image: any) =>
    imageUrlBuilder.image(image).width(width).format('webp').url()

  return (
    <figure className='mb-8 flex flex-col items-center space-y-1 last:mb-2'>
      <img
        src={getImageUrlForSize(600, props.value.asset)}
        srcSet={`
            ${getImageUrlForSize(360, props.value.asset)} 390w,
            ${getImageUrlForSize(600, props.value.asset)}
        `}
        sizes={`
            (max-width: 390px) 390px,
            600px
        `}
        alt={props.value.alt}
        width='600'
      />
      {props.value.caption && (
        <figcaption className='text-center italic'>
          {props.value.caption}
        </figcaption>
      )}
    </figure>
  )
}

export default Image
