import React from 'react'

const Important: React.FC = ({ children }) => {
  return (
    <span className='mx-4 block rounded-lg p-2 outline outline-4 outline-offset-2 outline-fuchsia-500 md:mx-20'>
      {children}
    </span>
  )
}

export default Important
