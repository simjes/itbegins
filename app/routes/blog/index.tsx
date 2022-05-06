import type { MetaFunction } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import React from 'react'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import { getClient } from '~/lib/sanity/client'
import { imageUrlBuilder } from '~/lib/sanity/image'

export const meta: MetaFunction = () => ({
  title: 'Blog | IT Begins',
  description: 'Blogging about learning stuff while i #LearnInPublic',
  'og:title': 'Blog | IT Begins',
  'og:description': 'Blogging about learning stuff while i #LearnInPublic',
})

export async function loader() {
  const client = getClient()
  const authorFetch = client.fetch(
    '*[_type == "author" && slug.current == "simjes"][0]{ name, bio[0], image }',
  )
  const postsFetch = await client.fetch(
    `*[_type == "post" && publishedAt <= $now] | order(publishedAt desc) { _id, title, slug, publishedAt }`,
    { now: new Date().toISOString() },
  )

  // Do both fetches in one groq?
  const [author, posts] = await Promise.all([authorFetch, postsFetch])

  return { author, posts }
}

// TODO: meta i header i slugs
export default function Blog() {
  const { author, posts } = useLoaderData()
  const { text: bio } = author.bio.children[0]
  const authorImage = imageUrlBuilder.image(author.image).size(208, 208).url()

  return (
    <div className='flex h-full flex-col'>
      <Header />

      <Main>
        <section className='mt-16 flex items-center space-x-4'>
          <header>
            <h1 className='text-3xl font-bold text-slate-900 dark:text-slate-200 md:text-4xl'>
              {author.name}
            </h1>
            {/* TODO: customize sanity to highlight #LearnInPublic */}
            <p className='mt-2 text-xl'>{bio}</p>
            <div className='mt-2'>
              <a
                className='p-1 font-bold underline decoration-cyan-500 decoration-2 transition duration-300 ease-in-out hover:text-fuchsia-500 dark:text-white dark:hover:text-fuchsia-500'
                href='https://twitter.com/itsalwayskos'
                target='_blank'
                aria-label={`Go to my twitter`}
                rel='noreferrer'
              >
                @itsalwayskos
              </a>
            </div>
          </header>

          <img
            src={authorImage}
            className='h-52 w-52 rounded-full'
            alt={`Author ${author.name}`}
          />
        </section>

        <section className='mt-6'>
          <h2 className='text-xl font-bold text-slate-900 dark:text-slate-200 md:text-2xl'>
            Posts
          </h2>
          <ol className='mt-2 space-y-2'>
            {posts.map((post) => {
              const date = new Date(post.publishedAt).toLocaleDateString()
              return (
                <li className='space-x-1' key={post._id}>
                  <Link
                    className='underline decoration-cyan-500 decoration-2 transition duration-300 ease-in-out hover:text-fuchsia-500 dark:text-white dark:hover:text-fuchsia-500'
                    to={post.slug.current}
                  >
                    {post.title}
                  </Link>{' '}
                  <span className='text-sm'>{date}</span>
                </li>
              )
            })}
          </ol>
        </section>
      </Main>
    </div>
  )
}
