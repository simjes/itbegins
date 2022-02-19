import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import concept from '~/images/concept.png'
import arrow from '~/images/arrow.svg'
import cn from 'classnames'

import { Section, SectionHeader } from '~/features/Layout/Section'
import Footer from '~/features/Layout/Footer'
import DecorationLine from '~/features/Layout/DecorationLine'

export default function Index() {
  return (
    <div className='h-full flex flex-col px-4 xl:px-0'>
      <Header />

      <Main>
        <div className='h-96 flex items-center'>
          <header className='w-2/3 flex flex-col justify-center'>
            <h1 className='text-3xl md:text-5xl font-bold'>
              Teknologiselskap som setter brukeren i fokus
            </h1>
            <p className='text-xl md:text-2xl font-bold text-slate-500 mt-2'>
              Sammen skaper vi gode løsninger som gjør den digitale hverdagen
              enklere
            </p>

            <DecorationLine className='w-64' />
          </header>
        </div>

        <Section>
          <SectionHeader title='Vi bryr oss' />
          {/* TODO: gradient line sky-500 til pink-500 */}
          <p className='text-slate-500 text-xl mt-2'>
            Når man skal skape digitale løsninger er brukeren det viktigste vi
            har, det er jo tross alt de som skal bruke produktet. I Lodde mener
            vi at de beste løsningene kommer fra tverrfaglige samarbeid som
            jobber mot samme mål.
          </p>
          <p className='text-slate-500 text-xl mt-2'>
            I en bransje som endrer seg raskt er det viktig å følge med, derfor
            mener vi at det å være nyskjerrig og lærevillig er viktige
            egenskaper for konsulenter. Engasjement, samarbeid og deling av
            kompetanse setter vi høgt.
          </p>
        </Section>

        <Section>
          <SectionHeader
            title='Fra konsept til produkt'
            subtitle='Vi bistår i hele prosessen'
          />

          {/* TODO: skikkelige bilder - med srcset */}
          <div className='flex flex-col items-center lg:flex-row lg:justify-between mt-8 space-y-24 lg:space-y-0'>
            <ProcessImage src={concept} alt='Konsept av en webside' />

            {/* TODO: rotate */}
            <ProcessImage
              src={arrow}
              alt='Pil fra konsept til ferdig produkt'
            />
            {/* TODO: nytt bilde på ferdig konsept */}
            <ProcessImage src={concept} alt='Ferdig produkt av en webside' />
          </div>
        </Section>
      </Main>

      <Footer />
    </div>
  )
}

// TODO: second image initial blur -> timeout -> remove blur
const ProcessImage = ({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) => {
  return <img className={cn('w-72', className)} src={src} alt={alt} />
}
