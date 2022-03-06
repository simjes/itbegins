import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import React from 'react'
import { NavLink } from 'remix'
import logoDark from '~/images/logo-dark.webp'
import logoLight from '~/images/logo-light.webp'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'

const Header = () => {
  const { currentTheme, toggleTheme } = useThemeSwitcher()
  const isLightMode = currentTheme === 'light'

  return (
    <header className='py-4'>
      <div className='flex justify-between max-w-4xl mx-auto px-4 xl:px-0'>
        <NavLink to='/' aria-label={`Naviger til Begins IT's hovedside`}>
          <img
            className='h-20'
            src={isLightMode ? logoDark : logoLight}
            alt='Begins IT logo'
          />
        </NavLink>

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
              <SunIcon className='h-5 w-5 text-fuchsia-500' />
            ) : (
              <MoonIcon className='h-5 w-5 text-cyan-500' />
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
