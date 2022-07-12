import React from 'react'
import { NavLink } from '@remix-run/react'

interface Props {
  to: string
  text: string
}

const LoddeNavLink = ({ to, text }: Props) => {
  return (
    <NavLink
      className='underlined p-1 font-semibold 
      text-slate-700 transition duration-300 ease-in-out hover:text-fuchsia-500 dark:text-slate-200 dark:hover:text-fuchsia-500'
      to={to}
      prefetch='intent'
    >
      {text}
    </NavLink>
  )
}

export default LoddeNavLink
