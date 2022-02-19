import React from 'react'
import { NavLink } from 'remix'

interface Props {
  to: string
  text: string
}

const LoddeNavLink = ({ to, text }: Props) => {
  return (
    <NavLink
      className='font-bold hover:text-pink-500 transition ease-in-out duration-300 p-2'
      to={to}
    >
      {text}
    </NavLink>
  )
}

export default LoddeNavLink
