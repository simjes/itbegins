import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import React, { ReactNode } from 'react'

// TODO: ikoner på actions
const Footer = () => {
  return (
    <footer className='py-4 text-slate-700 dark:text-slate-200'>
      <div className='h-64 py-12 flex flex-col md:flex-row justify-between max-w-4xl mx-auto'>
        <div>Lodde</div>

        <div className='flex flex-col'>
          <ContactLink
            icon={<MailIcon />}
            text='hei@lodde-consulting.no'
            to='mailto:hei@lodde-consulting.no'
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
