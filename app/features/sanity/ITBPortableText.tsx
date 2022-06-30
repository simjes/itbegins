import React from 'react'
import { PortableText } from '@portabletext/react'
import { H1, H2, H3, H4, H5, H6 } from '../Heading'
import { Highlight } from './Highlight'
import Paragraph from './Paragraph'
import Code, { MdCode } from './Code'
import Important from './Important'
import Image from './Image'
import { CodeSandbox } from './CodeSandbox'

const components = {
  types: {
    code: Code,
    codeSandbox: CodeSandbox,
    image: Image,
  },
  block: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    normal: Paragraph,
  },
  marks: {
    highlight: Highlight,
    mdCode: MdCode,
    important: Important,
    link: ({ children, value }: any) => {
      const { href, blank } = value
      return blank ? (
        <a href={href} target='_blank' rel='noreferrer'>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
  },
}

const ITBPortableText = ({ blocks }: any) => {
  return <PortableText value={blocks} components={components} />
}

export default ITBPortableText
