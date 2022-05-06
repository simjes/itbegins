import type { MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import { getClient } from '~/lib/sanity/client'

// TODO: meta
// export const meta: MetaFunction = () => ({
//   title: 'Blog | IT Begins',
//   description: 'Blogging about learning stuff while i #LearnInPublic',
//   'og:title': 'Blog | IT Begins',
//   'og:description': 'Blogging about learning stuff while i #LearnInPublic',
// })

export async function loader({ params }) {
  const client = getClient()

  // Returns published and draft slug, so we destructure
  const [post] = await client.fetch(
    `*[_type == "post" && slug.current == $slug]`,
    { slug: params.slug },
  )

  return { post }
}

export default function BlogPost() {
  const { post } = useLoaderData()
  debugger
  return (
    <div className='flex h-full flex-col'>
      <Header />

      <Main>
        <section className='mt-16 flex items-center space-x-4'>
          <header>
            <h1 className='text-3xl font-bold text-slate-900 dark:text-slate-200 md:text-4xl'>
              {post.title}
            </h1>
          </header>
        </section>

        <section className='mt-6'>temp</section>
      </Main>
    </div>
  )
}
