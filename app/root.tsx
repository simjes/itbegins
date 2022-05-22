import type { MetaFunction } from '@remix-run/cloudflare'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'
import ogLogo from '~/images/og-logo.jpg'
import styles from './styles/app.css'
import { MetronomeLinks } from '@metronome-sh/react'
import { H1 } from './features/Heading'
import logoInflames from '~/images/logo-inflames.svg'

export const meta: MetaFunction = () => ({
  title: 'IT Begins',
  description:
    'Technology company that puts the user in focus. Together we create great solutions that make digital everyday life easier.',
  'og:type': 'website',
  'og:url': 'https://www.itbegins.no',
  'og:title': 'IT Begins',
  'og:description':
    'Technology company that puts the user in focus. Together we create great solutions that make digital everyday life easier.',
  'og:image': ogLogo,
  'og:image:alt': 'IT Begins logo',

  'twitter:card': 'summary_large_image',
})

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon.png' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
  ]
}

/**
 * Catches HTTP errors
 */
export function CatchBoundary() {
  let caught = useCatch()
  let title = 'Something went wrong'
  let message
  switch (caught.status) {
    case 404:
      title = 'Not Found'
      message = 'This page does not exist'
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <html lang='en' className='dark'>
      <head>
        <title>💔 | IT Begins</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <Meta />
        <Links />
        <MetronomeLinks />
      </head>
      <body className='transition-color h-full min-h-screen overflow-x-hidden bg-slate-100 text-slate-500 antialiased duration-300 ease-in-out dark:bg-slate-900 dark:text-slate-400'>
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <header className='flex flex-col items-center'>
            <H1>
              {caught.status}: {title}
            </H1>
            <p className='text-2xl'>{message}</p>
          </header>
          <img className='mt-4' src={logoInflames} alt='Logo burning' />
        </div>
      </body>
    </html>
  )
}

export default function App() {
  return (
    <html lang='en' className='dark'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <Meta />
        <Links />
        <MetronomeLinks />
      </head>
      <body className='transition-color h-full min-h-screen overflow-x-hidden bg-slate-100 text-slate-500 antialiased duration-300 ease-in-out dark:bg-slate-900 dark:text-slate-400'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
