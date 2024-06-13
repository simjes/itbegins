import { cn } from '@/lib/utils';

export const Header = ({ currentPathname }: { currentPathname: string }) => (
  <header className='py-4'>
    <div className='mx-auto flex max-w-4xl flex-col justify-between space-y-2 px-4 sm:flex-row sm:space-y-0 xl:px-0'>
      <a
        href='/'
        aria-label={`Naviger til Begins IT's hovedside`}
        style={{ width: '256px' }}
      >
        <div className='aspect-w-3 aspect-h-1'>
          <img
            className='h-full w-full'
            src={'/logo-dark.webp'}
            alt='IT Begins logo'
            width={342}
            height={114}
          />
        </div>
      </a>

      <div className='flex items-center space-x-4 self-end sm:self-auto'>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <LoddeNavLink
                to='/'
                text='Blog'
                active={currentPathname === '/'}
              />
            </li>
            <li>
              <LoddeNavLink
                to='/cv'
                text='CV'
                active={currentPathname === '/cv'}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

const LoddeNavLink = ({
  to,
  text,
  active,
}: {
  to: string;
  text: string;
  active: boolean;
}) => (
  <a
    className={cn(
      'underlined p-1 font-semibold text-slate-700 transition duration-300 ease-in-out hover:text-fuchsia-500 dark:text-slate-200 dark:hover:text-fuchsia-500',
      active && 'active',
    )}
    href={to}
    aria-current={active ? 'page' : undefined}
  >
    {text}
  </a>
);
