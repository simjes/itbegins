import type { MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import groq from 'groq'
import { H1 } from '~/features/Heading'
import DecorationLine from '~/features/Layout/DecorationLine'
import Footer from '~/features/Layout/Footer'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import ITBPortableText from '~/features/sanity/ITBPortableText'
import { getClient } from '~/lib/sanity/client'
import { imageUrlBuilder } from '~/lib/sanity/image'

export const meta: MetaFunction = ({ data }) => {
  if (!data) {
    return {}
  }
  const { post } = data
  const title = `${post.title} | IT Begins`
  const excerpt = post.excerpt
  return {
    title,
    description: excerpt,
    'og:title': title,
    'og:description': excerpt,
    'og:type': 'article',
    'og:author': 'Simon Jespersen',
  }
}

export async function loader({ params }) {
  const client = getClient()

  // Returns published and draft slug, so we destructure
  const [post] = await client.fetch(
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

  return { post }
}

export default function BlogPost() {
  const { post } = useLoaderData()
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
