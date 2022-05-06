import type { MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import groq from 'groq'
import { H1 } from '~/features/Heading'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import ITBPortableText from '~/features/sanity/ITBPortableText'
import { getClient } from '~/lib/sanity/client'

// TODO: meta
// export const meta: MetaFunction = ({data}) => ({
//   title: 'Blog | IT Begins',
//   description: 'Blogging about learning stuff while i #LearnInPublic',
//   'og:title': 'Blog | IT Begins',
//   'og:description': 'Blogging about learning stuff while i #LearnInPublic',
// })

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
      body
    }`,
    { slug: params.slug },
  )

  return { post }
}

export default function BlogPost() {
  const { post } = useLoaderData()

  return (
    <div className='flex h-full flex-col'>
      <Header />

      <Main>
        <section className='mt-16 flex items-center space-x-4'>
          <header>
            <H1>{post.title}</H1>
          </header>
        </section>

        <section className='mt-6'>
          <ITBPortableText blocks={post.body} />
        </section>
      </Main>
    </div>
  )
}
