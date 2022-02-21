import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import React, { ReactNode } from 'react'
import logoBlack from '~/images/logo-black.svg'
import logoWhite from '~/images/logo-white.svg'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'

const Footer = () => {
  const { currentTheme } = useThemeSwitcher()
  const isLightMode = currentTheme === 'light'

  return (
    <footer className='py-4 text-slate-200 bg-slate-900 dark:bg-black mt-64'>
      <div className='h-64 py-12 flex flex-col md:flex-row justify-between max-w-4xl mx-auto px-4 xl:px-0 space-y-4 md:space-y-0'>
        <div>
          <img
            className='h-16'
            src={isLightMode ? logoBlack : logoWhite}
            alt='Begins IT logo'
          />
        </div>

        <div className='flex flex-col'>
          <ContactLink
            icon={<MailIcon />}
            text='hei@itbegins.no'
            to='mailto:hei@itbegins.no'
          />

          <ContactLink
            icon={<PhoneIcon />}
            text='986 20 963'
            to='tel:98620963'
          />

          <ContactLink
            icon={<LocationMarkerIcon />}
            text='Her finner du oss'
            to='' // TODO
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer

const ContactLink = ({
  to,
  icon,
  text,
}: {
  to: string
  icon: ReactNode
  text: string
}) => (
  <a
    className='flex items-center space-x-2 font-bold underline decoration-2 decoration-sky-500 hover:text-pink-500 transition ease-in-out duration-300 p-1'
    href={to}
  >
    <div className='h-6 w-6'>{icon}</div>
    <span>{text}</span>
  </a>
)
