import React from 'react'

const Paragraph: React.FC = ({ children }) => {
  return <p className='mb-8 text-xl last-of-type:mb-2'>{children}</p>
}

export default Paragraph
