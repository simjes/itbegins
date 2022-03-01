import { ArrowDownIcon } from '@heroicons/react/solid'
import { Client } from '@notionhq/client'
import cn from 'classnames'
import { MetaFunction, useLoaderData } from 'remix'
import Employee from '~/features/employee/Employee'
import {
  EmployeeOverview,
  mapToEmployeeOverview,
} from '~/features/employee/model'
import DecorationLine from '~/features/Layout/DecorationLine'
import Footer from '~/features/Layout/Footer'
import Header from '~/features/Layout/Header'
import Main from '~/features/Layout/Main'
import { SectionHeader } from '~/features/Layout/Section'
import conceptPage from '~/images/concept-page.svg'
import finishedPage from '~/images/finished-page.svg'
import heroImage from '~/images/hero.webp'

export const meta: MetaFunction = () => ({
  description:
    'Teknologiselskap som setter brukeren i fokus. Sammen skaper vi gode løsninger som gjør den digitale hverdagen enklere.',
})

export async function loader() {
  const notion = new Client({ auth: process.env.NOTION_API_SECRET })
  const response = await notion.databases.query({
    database_id: process.env.NOTION_EMPLOYEE_DB!,
    sorts: [
      {
        property: 'Date Created',
        direction: 'ascending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'Active',
          },
        },
      ],
    },
  })
  return response.results.map(mapToEmployeeOverview)
}

export default function Index() {
  const employees: EmployeeOverview[] = useLoaderData()

  return (
    <div className='h-full flex flex-col'>
      <Header />

      <Main>
        <div className='flex items-center relative hero-container'>
          <header className='w-full sm:w-2/3 flex flex-col justify-center z-10 backdrop-blur-xl p-4 rounded-xl'>
            <h1 className='text-3xl md:text-5xl font-bold text-white'>
              Teknologiselskap som setter brukeren i fokus
            </h1>
            <p className='text-xl md:text-2xl font-bold mt-2 text-slate-100'>
              Sammen skaper vi gode løsninger som gjør den digitale hverdagen
              enklere
            </p>

            <DecorationLine className='w-64' type='blue' />
          </header>
          <img
            className='absolute h-full full-width object-cover'
            src={heroImage}
            aria-hidden
            alt='background image'
          />
        </div>

        <section className='mt-64'>
          <SectionHeader title='Jeg bryr meg' />
          <p className='text-xl mt-2'>
            Når man skal skape digitale løsninger er brukeren det viktigste vi
            har, det er jo tross alt de som skal bruke produktet. Jeg mener at
            de beste løsningene kommer fra tverrfaglige samarbeid med mennesker
            som jobber mot samme mål.
          </p>
          <p className='text-xl mt-2'>
            I en bransje som endrer seg raskt er det viktig å følge med, derfor
            mener jeg at det å være nysgjerrig og lærevillig er viktige
            egenskaper. Engasjement, samarbeid og deling av kompetanse setter
            jeg høgt.
          </p>
        </section>

        <section className='flex items-center justify-around mt-64'>
          <SectionHeader
            title='Fra konsept til produkt'
            subtitle='Jeg bistår i hele prosessen'
          />

          <div className='flex flex-col items-center mt-8 space-y-12'>
            <ProcessImage src={conceptPage} alt='Konsept av en webside' />

            <ArrowDownIcon className='h-16 w-16 text-pink-500' />

            <ProcessImage
              src={finishedPage}
              alt='Ferdig produkt av en webside'
            />
          </div>
        </section>

        <section className='mt-64'>
          <SectionHeader title='Bli kjent med meg' />

          <div className='flex justify-center flex-wrap mt-10 gap-6'>
            {employees.map((employee) => (
              <Employee
                key={employee.cvUrl}
                image={employee.image}
                name={employee.name}
                role={employee.role}
                cvUrl={employee.cvUrl}
              />
            ))}
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
  className,
}: {
  src: string
  alt: string
  className?: string
}) => {
  return (
    <img
      className={cn('w-72 shadow-lg rounded-xl', className)}
      src={src}
      alt={alt}
    />
  )
}
