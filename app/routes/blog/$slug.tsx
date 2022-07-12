import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import groq from 'groq'
import DecorationLine from '~/features/layout/DecorationLine'
import Footer from '~/features/layout/Footer'
import Header from '~/features/layout/Header'
import { H1 } from '~/features/layout/heading/Heading'
import Main from '~/features/layout/Main'
import ITBPortableText from '~/features/sanity/ITBPortableText'
import { getMaxAge } from '~/lib/getMaxAge'
import { getClient } from '~/lib/sanity/client'
import { imageUrlBuilder } from '~/lib/sanity/image'
import styles from '~/styles/prism-laserwave.css'

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    'Cache-Control':
      loaderHeaders.get('Cache-Control') ??
      'max-age=300 s-maxage=1800, stale-while-revalidate=31560000',
  }
}

export const meta: MetaFunction = ({ data }) => {
  if (!data) {
    return {}
  }

  const { post }: { post: Post } = data
  const image = imageUrlBuilder
    .image(post.mainImage)
    .crop('center')
    .width(500)
    .height(500)
    .url()

  const title = `${post.title} | IT Begins`
  const excerpt = post.excerpt
  return {
    title,
    description: excerpt,
    'og:title': title,
    'og:description': excerpt,
    'og:type': 'article',
    'og:author': 'Simon Jespersen',
    'og:image': image,
    'twitter:card': image ? 'summary_large_image' : 'summary',
    'twitter:site': '@itsalwayskos',
    'twitter:creator': '@itsalwayskos',
    'twitter:title': title,
    'twitter:description': excerpt,
    'twitter:image': image,
    'twitter:alt': title,
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const loader: LoaderFunction = async ({ params }) => {
  const client = getClient()

  // Returns published and draft slug, so we destructure
  const [post] = await client.fetch<Post[]>(
    groq`*[_type == "post" && slug.current == $slug]{
      "authorName": author->name,
      "authorImage": author->image,
      mainImage,
      slug,
      title,
      publishedAt,
      excerpt,
      body
    }`,
    { slug: params.slug },
  )

  if (!post) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return json(
    { post },
    {
      headers: {
        'Cache-Control': `max-age=300, s-maxage=${getMaxAge(
          post.publishedAt,
        )}, stale-while-revalidate=31560000`,
      },
    },
  )
}

export default function BlogPost() {
  const { post } = useLoaderData<LoaderData>()
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    dateStyle: 'long',
  })
  const mainImage = imageUrlBuilder.image(post.mainImage).width(900).url()

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <Main>
        <article>
          <div className='mt-16 flex items-center space-x-4'>
            <header>
              <H1>{post.title}</H1>
              <p>{date} — Simon Jespersen</p>
            </header>
          </div>

          <DecorationLine className='mb-6 w-1/2 md:w-1/3' />

          <section className='space-y-6'>
            <div className='aspect-w-16 aspect-h-9'>
              <img
                className='h-full w-full object-cover object-center'
                src={mainImage}
                alt='Blog post decoration'
                aria-hidden
              />
            </div>

            <div>
              <ITBPortableText blocks={post.body} />
            </div>
          </section>
        </article>
      </Main>

      <Footer />
    </div>
  )
}

type Post = {
  authorName: string
  authorImage: any
  mainImage: any
  slug: { current: string }
  title: string
  publishedAt: string
  excerpt: string
  body: any
}

type LoaderData = {
  post: Post
}
