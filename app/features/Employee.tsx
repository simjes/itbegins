import React from 'react'
import { Link } from 'remix'

type SoMeType = 'twitter' | 'linkedin' | 'github'

interface EmployeeLink {
  url: string
  type: SoMeType
}

interface Props {
  image: string
  name: string
  role: string
  links?: EmployeeLink[]
}

const getIcon = (type: SoMeType) => {
  switch (type) {
    case 'github':
      return (
        <svg width='24' height='24' fill='currentColor'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z'
          ></path>
        </svg>
      )
    case 'linkedin':
      return ''
    case 'twitter':
      return ''
    default:
      throw new Error(`Unsupported SoMe link [${type}]`)
  }
}

const Employee = ({ image, name, role, links = [] }: Props) => {
  return (
    <article className='bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl p-1 hover:scale-105 hover:shadow-lg transform ease-in-out duration-300'>
      <Link
        to={`/people/${name}`}
        className='flex flex-col bg-white dark:bg-slate-900 p-6 rounded-lg'
        aria-label={`Les mer om ${name}`}
      >
        <img
          src={image}
          className='w-64 h-64 rounded-full'
          alt={`Bilde av ansatt ${name}`}
        />
        <div className='mt-4 text-2xl text-sky-500'>{name}</div>
        <div className='text-pink-500'>{role}</div>
        <div className='flex space-x-2 mt-2'>
          {links.map((link) => (
            <a
              className='p-1'
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => e.stopPropagation()}
              aria-label={`Åpne ${name} sin ${link.type} i ny fane`}
            >
              {getIcon(link.type)}
            </a>
          ))}
        </div>
      </Link>
    </article>
  )
}

export default Employee
