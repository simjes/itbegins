import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import React, { ReactNode } from 'react'
import logoDark from '~/images/logo-dark.webp'
import logoLight from '~/images/logo-light.webp'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'

const Footer = () => {
  const { currentTheme } = useThemeSwitcher()
  const isLightMode = currentTheme === 'light'

  return (
    <footer className='py-4 text-slate-200 bg-slate-900 dark:bg-black mt-64'>
      <div className='h-full md:h-64 py-12 flex flex-col sm:flex-row justify-between max-w-4xl mx-auto px-4 xl:px-0 space-y-10 sm:space-y-0'>
        <div>
          <img
            className='h-20'
            src={isLightMode ? logoDark : logoLight}
            alt='Begins IT logo'
          />
        </div>

        <div className='flex flex-col space-y-2'>
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
            text='Du finner meg i Stavanger'
            to='https://www.google.com/maps/place/Stavanger/@58.9486344,5.6102981,12z/data=!3m1!4b1!4m5!3m4!1s0x463a3549dd29f795:0xad7aeb21b80a9259!8m2!3d58.9699756!4d5.7331074'
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
    target='_blank'
    rel='noreferrer'
  >
    <div className='h-6 w-6'>{icon}</div>
    <span>{text}</span>
  </a>
)
