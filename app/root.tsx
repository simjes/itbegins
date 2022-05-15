import type { MetaFunction } from '@remix-run/cloudflare'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import ogLogo from '~/images/og-logo.jpg'
import styles from './styles/app.css'
import { MetronomeLinks } from '@metronome-sh/react'

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
