import React from 'react'
import { NavLink } from 'remix'

interface Props {
  to: string
  text: string
}

const LoddeNavLink = ({ to, text }: Props) => {
  return (
    <NavLink
      className='underlined font-semibold text-slate-700 dark:text-slate-200 hover:text-pink-500 dark:hover:text-pink-500 transition ease-in-out duration-300 p-1'
      to={to}
    >
      {text}
    </NavLink>
  )
}

export default LoddeNavLink
