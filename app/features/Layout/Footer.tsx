import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import React, { ReactNode } from 'react'
import logoLight from '~/images/logo-light.webp'

const Footer = () => {
  return (
    <footer className='mt-40 bg-slate-900 py-4 text-slate-200 dark:bg-black'>
      <div className='mx-auto flex h-full max-w-4xl flex-col justify-between space-y-10 py-12 px-4 sm:flex-row sm:space-y-0 md:h-64 xl:px-0'>
        <div>
          <img className='h-20' src={logoLight} alt='Begins IT logo' />
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
    className='flex items-center space-x-2 p-1 font-bold underline decoration-cyan-500 decoration-2 transition duration-300 ease-in-out hover:text-fuchsia-500'
    href={to}
    target='_blank'
    rel='noreferrer'
  >
    <div className='h-6 w-6'>{icon}</div>
    <span>{text}</span>
  </a>
)
