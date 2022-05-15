import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { useLoaderData } from '@remix-run/react'
import groq from 'groq'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Employee from '~/features/employee/Employee'
import DecorationLine from '~/features/Layout/DecorationLine'
import Footer from '~/features/Layout/Footer'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import { SectionHeader } from '~/features/Layout/Section'
import conceptPage from '~/images/concept-page.svg'
import finishedPage from '~/images/finished-page.svg'
import { getClient } from '~/lib/sanity/client'
import { imageUrlBuilder } from '~/lib/sanity/image'

export async function loader() {
  const sanityClient = getClient()

  const heroImageRequest = sanityClient.fetch(
    groq`*[_type == "imageAsset" && slug.current == "hero-image"][0]{
      img,
      alt,
      "lqip": img.asset->metadata.lqip
    }`,
  )

  const employeeRequest = sanityClient.fetch(
    groq`*[_type == "author" && slug.current == "simjes"][0]{ name, image, role, tempUrl }`,
  )

  const [employeeResult, heroImageResult] = await Promise.all([
    employeeRequest,
    heroImageRequest,
  ])

  return {
    employee: employeeResult,
    imageAsset: heroImageResult,
  }
}

const getImageUrlForSize = (size: number, image: any) =>
  imageUrlBuilder.image(image).width(size).fit('crop').format('webp').url()

export default function Index() {
  const { employee, imageAsset } = useLoaderData()
  const employeeImage = imageUrlBuilder
    .image(employee.image)
    .size(256, 256)
    .url()

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <Main>
        <div className='hero-container relative flex items-center'>
          <header className='z-10 flex w-full flex-col justify-center rounded-xl p-4 backdrop-blur-xl sm:w-2/3'>
            <h1 className='text-3xl font-bold text-white md:text-4xl'>
              Technology company that puts the user in focus
            </h1>
            <p className='mt-2 text-xl font-bold text-slate-100'>
              Together we create great solutions that make digital everyday life
              easier
            </p>

            <DecorationLine className='w-64' type='purple' />
          </header>

          <div className='full-width absolute h-full object-cover'>
            <BlurredHero
              src={getImageUrlForSize(2160, imageAsset.img)}
              srcSet={`
                ${getImageUrlForSize(320, imageAsset.img)} 320w,
                ${getImageUrlForSize(640, imageAsset.img)} 640w,
                ${getImageUrlForSize(1200, imageAsset.img)} 1200w,
                ${getImageUrlForSize(1800, imageAsset.img)} 1800w,
                ${getImageUrlForSize(2160, imageAsset.img)},
              `}
              sizes={`
                (max-width: 320px) 320px,
                (max-width: 640px) 640px,
                (max-width: 1200px) 1200px,
                (max-width: 1800px) 1800px,
                2160
              `}
              alt={imageAsset.alt}
              lqip={imageAsset.lqip}
            />
          </div>
        </div>

        <section className='mt-20 md:mt-40'>
          <SectionHeader title='Putting Users at the Center' />
          <p className='mt-2 text-xl'>
            When creating digital solutions, the user is the most important
            thing we have, after all, they are the ones we want to help. The
            best solutions come from interdisciplinary collaborations with
            people who work towards the same goal.
          </p>
          <p className='mt-2 text-xl'>
            In an industry that is changing rapidly, it is important to keep up,
            therefore being curious and willing to learn are important
            qualities.
          </p>
        </section>

        <section className='mt-20 flex flex-col items-center justify-around md:mt-40'>
          <div>
            <SectionHeader
              title='From Concept to Product'
              subtitle='We Assist in the Entire Process'
            />
            <p className='mt-2 text-xl'>
              IT Begins has extensive experience, and has worked in lottery,
              insurance, fintech, health, maritime, oil and gas.
            </p>
          </div>

          <div className='mt-8 flex w-full flex-col items-center space-y-12 md:flex-row md:justify-evenly md:space-y-0'>
            <ProcessImage
              src={conceptPage}
              alt='Web page concept'
              width={288}
              height={228}
            />

            <ArrowRightIcon className='hidden h-16 w-16 text-fuchsia-500 md:block' />
            <ArrowDownIcon className='block h-16 w-16 text-fuchsia-500 md:hidden' />

            <ProcessImage
              src={finishedPage}
              alt='Finished web page'
              width={288}
              height={328}
            />
          </div>
        </section>

        <section className='mt-20 md:mt-40'>
          <SectionHeader title='Who is IT Begins' subtitle='CV' />

          <div className='mt-10 flex flex-wrap justify-center gap-6'>
            <Employee
              image={employeeImage}
              name={employee.name}
              role={employee.role}
              cvUrl={employee.tempUrl}
            />
          </div>
        </section>
      </Main>
      <Footer />
    </div>
  )
}

const ProcessImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number
  height: number
}) => {
  return (
    <img
      className='w-72 rounded-xl border-4 border-cyan-500'
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading='lazy'
    />
  )
}

interface BlurredHeroProps {
  src: string
  alt: string
  srcSet: string
  sizes: string
  lqip: string
}

const imageClassName =
  'absolute w-full h-full top-0 bottom-0 right-0 left-0 object-cover object-center'

const BlurredHero = ({ src, srcSet, sizes, alt, lqip }: BlurredHeroProps) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef()
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true)
    }
  }, [])
  return (
    <>
      <img className={cn(imageClassName)} src={lqip} aria-hidden alt={alt} />
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        aria-hidden
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={cn(
          imageClassName,
          'transition-opacity',
          loaded ? 'opacity-1' : 'opacity-0',
        )}
      />
    </>
  )
}
