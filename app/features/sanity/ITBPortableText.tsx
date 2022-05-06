import React from 'react'
import { PortableText } from '@portabletext/react'
import { H1, H2, H3, H4, H5, H6 } from '../Heading'
import { Highlight } from './Highlight'

const components = {
  block: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
  },
  marks: {
    highlight: Highlight,
  },
}

const ITBPortableText = ({ blocks }: any) => {
  return <PortableText value={blocks} components={components} />
}

export default ITBPortableText
