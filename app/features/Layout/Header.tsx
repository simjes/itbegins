import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import React from 'react'
import { NavLink } from 'remix'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'

const Header = () => {
  const { currentTheme, toggleTheme } = useThemeSwitcher()
  const isLightMode = currentTheme === 'light'

  return (
    <header className='py-4'>
      <div className='flex justify-between max-w-4xl mx-auto'>
        <NavLink to='/'>Lodde Consulting</NavLink>

        <div className='flex items-center space-x-4'>
          {/* <nav>
            <ul className='flex space-x-4'>
              <li>
                <LoddeNavLink to='/people' text='Folkene' />
              </li>
            </ul>
          </nav> */}

          <button className='p-2' onClick={toggleTheme}>
            {isLightMode ? (
              <SunIcon className='h-5 w-5 text-pink-500' />
            ) : (
              <MoonIcon className='h-5 w-5 text-sky-500' />
            )}
            <span className='sr-only'>
              Bytt til {isLightMode ? 'mørkt' : 'lyst'} tema
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
