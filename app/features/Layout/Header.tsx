import React from 'react'
import { NavLink } from 'remix'
import LoddeNavLink from '../LoddeNavLink'

const Header = () => {
  return (
    <header className='py-4'>
      <div className='flex justify-between max-w-4xl mx-auto'>
        <NavLink to='/'>Lodde Consulting</NavLink>

        {/* TODO: fix small sreens */}
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <LoddeNavLink to='projects' text='Prosjekter' />
            </li>
            <li>
              <LoddeNavLink to='us' text='Folkene' />
            </li>
            <li>
              <LoddeNavLink to='about' text='Om oss' />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
