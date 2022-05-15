import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import React from 'react'
import { NavLink } from '@remix-run/react'
import logoDark from '~/images/logo-dark.webp'
import logoLight from '~/images/logo-light.webp'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'
import LoddeNavLink from '../LoddeNavLink'

const Header = () => {
  const { currentTheme, toggleTheme } = useThemeSwitcher()
  const isLightMode = currentTheme === 'light'

  return (
    <header className='py-4'>
      <div className='mx-auto flex max-w-4xl justify-between px-4 xl:px-0'>
        <NavLink
          to='/'
          aria-label={`Naviger til Begins IT's hovedside`}
          style={{ width: '256px' }}
        >
          <div className='aspect-w-3 aspect-h-1'>
            <img
              className='h-full w-full'
              src={isLightMode ? logoDark : logoLight}
              alt='IT Begins logo'
              width={342}
              height={114}
            />
          </div>
        </NavLink>

        <div className='flex items-center space-x-4'>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <LoddeNavLink to='/blog' text='Blog' />
              </li>
            </ul>
          </nav>

          <button className='p-2' onClick={toggleTheme}>
            {isLightMode ? (
              <MoonIcon className='h-5 w-5 text-cyan-500' />
            ) : (
              <SunIcon className='h-5 w-5 text-fuchsia-500' />
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
