import type { MetaFunction } from 'remix'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import styles from './styles/app.css'

export const meta: MetaFunction = () => ({ title: 'IT Begins Jespersen' })

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
    <html lang='nb'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <Meta />
        <Links />
      </head>
      <body className='h-full min-h-screen antialiased bg-white dark:bg-slate-900 dark:text-slate-400 text-slate-500 transition-color ease-in-out duration-300 overflow-x-hidden'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
