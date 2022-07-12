import type { HeadersFunction, MetaFunction } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import groq from 'groq'
import Footer from '~/features/layout/Footer'
import Header from '~/features/layout/Header'
import { H1, H2 } from '~/features/layout/heading/Heading'
import Main from '~/features/layout/Main'
import ITBPortableText from '~/features/sanity/ITBPortableText'
import { getClient } from '~/lib/sanity/client'
import { imageUrlBuilder } from '~/lib/sanity/image'

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control':
      'max-age=600 s-maxage=86400, stale-while-revalidate=31560000',
  }
}

export const meta: MetaFunction = () => {
  const title = 'Blog | IT Begins'
  const description = 'Blogging about learning stuff while i #LearnInPublic'

  return {
    title,
    description,
    'og:title': title,
    'og:description': description,

    'twitter:title': title,
    'twitter:description': description,
  }
}

export async function loader() {
  const client = getClient()
  const authorFetch = client.fetch<Author>(
    groq`*[_type == "author" && slug.current == "simjes"][0]{ name, bio[0], image }`,
  )
  const postsFetch = await client.fetch<Post[]>(
    groq`*[_type == "post" && publishedAt <= $now] | order(publishedAt desc) { _id, title, slug, publishedAt }`,
    { now: new Date().toISOString() },
  )

  // Do both fetches in one groq?
  const [author, posts] = await Promise.all([authorFetch, postsFetch])

  return json({ author, posts })
}

export default function Blog() {
  const { author, posts } = useLoaderData<LoaderData>()
  const authorImage = imageUrlBuilder.image(author.image).size(416, 416).url()

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <Main>
        <section className='mt-16 mb-6 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
          <header>
            <H1>{author.name}</H1>
            <div className='text-xl'>
              <ITBPortableText blocks={author.bio} />
            </div>
            <div>
              <a
                className='p-1 font-bold underline decoration-cyan-500 decoration-2 transition duration-300 ease-in-out hover:text-fuchsia-500 dark:text-white dark:hover:text-fuchsia-500'
                href='https://twitter.com/itsalwayskos'
                target='_blank'
                aria-label='Go to my twitter'
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
            height={208}
            width={208}
          />
        </section>

        <section>
          <H2>Posts</H2>
          <ol className='mt-2 space-y-2'>
            {posts.map((post) => {
              const date = new Date(post.publishedAt).toLocaleDateString(
                'en-US',
                {
                  dateStyle: 'long',
                },
              )
              return (
                <li className='space-x-1' key={post._id}>
                  <Link
                    className='underline decoration-cyan-500 decoration-2 transition duration-300 ease-in-out hover:text-fuchsia-500 dark:text-white dark:hover:text-fuchsia-500'
                    to={post.slug.current}
                    prefetch='intent'
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

      <Footer />
    </div>
  )
}

type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
}

type Author = {
  name: string
  bio: any
  image: any
}

type LoaderData = {
  posts: Post[]
  author: Author
}
