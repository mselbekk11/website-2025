import Link from 'next/link';
import ExperimentCard from '@/app/components/experiment-card';
import Logo from '@/app/components/logo';
// import PatternBackground from '@/app/components/pattern-background';
import LogoOne from './components/logo-one';

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0D0D0D] text-white relative'>
      {/* Background noise effect */}
      <div
        className='fixed inset-0 z-10 pointer-events-none opacity-5'
        aria-hidden='true'
      >
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat"></div>
      </div>

      {/* Light effect */}
      <div
        className='absolute inset-0 z-0 overflow-hidden pointer-events-none'
        aria-hidden='true'
      >
        <div className='md:max-w-[1104px] md:mx-auto'>
          <div className='translate-y-[-90px]'>
            <div
              style={{
                width: '840px',
                height: '580px',
                background: 'white',
                borderRadius: '50%',
                transform: 'rotate(45deg) translate(-300px, -300px)',
                transformOrigin: 'left 20%',
                filter: 'blur(150px)',
                opacity: 0.045,
              }}
              className='sm:[transform:rotate(45deg)_translate(-200px,-300px)] md:[transform:rotate(45deg)_translate(-150px,-200px)]'
            ></div>
            {/* Additional light element for more effect */}
            {/* <div className='w-[600px] h-[180px] bg-blue-200/20 rounded-full rotate-[30deg] -translate-x-[250px] -translate-y-[350px] origin-left-center blur-[140px] opacity-40'></div> */}
          </div>
        </div>
      </div>

      <main
        id='top'
        className='relative z-20 grid grid-cols-[24px_1fr_24px] sm:grid-cols-[1fr_33.75rem_1fr] md:grid-cols-[1fr_228px_600px_228px_1fr] md:gap-x-6 grid-rows-[24px_auto_1fr] min-h-screen'
      >
        {/* Pattern backgrounds for outer columns */}
        {/* <div className='hidden md:block col-start-1 row-span-full relative'>
          <PatternBackground />
        </div> */}
        {/* <div className='hidden md:block col-start-5 row-span-full relative'>
          <PatternBackground />
        </div> */}

        {/* Desktop logo */}
        <div className='hidden md:flex col-start-2 row-span-full pt-[52px] justify-center items-start relative z-20'>
          <Link href='#top' className='focus:ring sticky top-[34px] mb-10'>
            {/* <Logo /> */}
            <LogoOne />
          </Link>
        </div>

        {/* Mobile header */}
        <header className='col-span-full grid grid-cols-subgrid border-y border-dashed border-gray-500/20 row-start-2 md:h-[100px]'>
          <div className='col-start-2 md:col-start-3 flex flex-col md:justify-center items-center gap-4 p-6'>
            <Link
              href='#top'
              className='focus:ring md:hidden sticky top-[33px]'
            >
              <Logo />
            </Link>

            <h1 className='text-balance text-center leading-[1.4] text-sm'>
              Morgan Selbekk
              <span className='text-zinc-500 sm:block'>
                Full Stack Developer & Designer
              </span>
            </h1>
          </div>
        </header>

        {/* Desktop CTA */}
        <div className='hidden md:flex col-start-4 row-span-full pt-[52px] justify-center items-start z-20'>
          <Link
            href='#hire-me'
            className='btn px-4 py-2 border border-gray-500/20 rounded-full focus:ring sticky top-[34px] mb-10 z-[3] bg-gray-500/20 text-sm'
          >
            Hire Me.
          </Link>
        </div>

        {/* Experiments */}
        <ul className='col-span-full grid grid-cols-subgrid row-start-3'>
          {experiments.map((experiment, index) => (
            <ExperimentCard
              key={index}
              id={`ui-experiment-${index + 1}`}
              title={experiment.title}
              image={experiment.image}
              description={experiment.description}
              boom={experiment.boom}
            />
          ))}
        </ul>

        {/* Background grid */}
        <div
          className='col-span-full row-span-full grid grid-cols-subgrid pointer-events-none relative z-10'
          aria-hidden='true'
        >
          <div className='col-start-2 row-span-full border-x border-gray-500/20'></div>
          <div className='hidden md:block col-start-3 row-span-full border-x border-gray-500/20'></div>
          <div className='hidden md:block col-start-4 row-span-full border-x border-gray-500/20'></div>
        </div>
      </main>

      <footer
        id='hire-me'
        className='bg-[#fafafa] text-[#0A0A0A] relative z-20 grid grid-cols-[24px_1fr_24px] sm:grid-cols-[1fr_33.75rem_1fr] md:grid-cols-[1fr_258px_540px_258px_1fr] md:gap-x-6 min-h-screen'
      >
        <div className='col-span-full row-span-full grid grid-cols-subgrid'>
          {/* Pattern backgrounds for outer columns */}
          <div className='hidden md:block col-start-1 row-span-full relative'>
            <div
              className="absolute inset-0 w-full h-full bg-[url('/bg-stripes.png')] bg-repeat opacity-20 pointer-events-none"
              aria-hidden='true'
            ></div>
          </div>
          <div className='hidden md:block col-start-5 row-span-full relative'>
            <div
              className="absolute inset-0 w-full h-full bg-[url('/bg-stripes.png')] bg-repeat opacity-20 pointer-events-none"
              aria-hidden='true'
            ></div>
          </div>

          {/* Content */}
          <div className='col-span-full grid grid-cols-subgrid my-auto border-y border-dashed border-gray-500/20'>
            <aside
              className='hidden md:block md:col-start-2'
              aria-hidden='true'
            ></aside>

            <div className='col-start-2 md:col-start-3 flex flex-col gap-4 p-6'>
              <h2 className='text-3xl font-bold leading-tight'>
                Lets work together
              </h2>
              <p className='opacity-50 font-normal'>
                Want your web app to be more than just good? I can help turn it
                into a delightful experience for your users.
              </p>

              <h3 className='text-xl font-semibold mt-4 leading-tight'>
                Pricing
              </h3>
              <ul className='text-[#0A0A0A]/50 font-normal flex flex-col gap-1.5 list-inside'>
                <li>$150/h (or full project quote)</li>
                <li>2h/day (Mon-Fri GMT+1)</li>
                <li>
                  Web app design (
                  <Link
                    className='text-[#0A0A0A] font-medium underline underline-offset-4'
                    href='https://www.figma.com'
                    target='_blank'
                  >
                    Examples
                  </Link>
                  )
                </li>
                <li>Design implementation support*</li>
              </ul>

              <p className='opacity-50 font-normal'>
                *Rather than just delivering a Figma file, I can join your
                developer in coding the UI.
              </p>

              <div className='show-if-not-available hidden'>
                <h3 className='text-xl font-semibold mt-4 leading-tight'>
                  Future collaborations
                </h3>
                <p>
                  <span className='opacity-50 font-normal'>Email me at</span>{' '}
                  <Link
                    href="mailto:se.guerriero@gmail.com?subject=Notify%20me%20when%20you're%20booking%20new%20projects"
                    className='underline underline-offset-4'
                  >
                    se.guerriero@gmail.com
                  </Link>{' '}
                  <span className='opacity-50 font-normal'>
                    and Ill notify you when Im booking new projects.
                  </span>
                </p>
              </div>

              <div className='show-if-available'>
                <h3 className='text-xl font-semibold mt-4 leading-tight'>
                  Start here:
                </h3>
                <p>
                  <span className='opacity-50 font-normal'>Email me at</span>{' '}
                  <Link
                    href="mailto:se.guerriero@gmail.com?subject=Let's%20work%20together"
                    className='underline underline-offset-4'
                  >
                    se.guerriero@gmail.com
                  </Link>
                </p>
                <p>
                  <span className='opacity-50 font-normal'>Or</span>{' '}
                  <Link
                    href='https://cal.com'
                    className='underline underline-offset-4'
                  >
                    book a 15m intro call
                  </Link>
                  .
                </p>
              </div>
            </div>

            <aside
              className='hidden md:block md:col-start-4'
              aria-hidden='true'
            ></aside>
          </div>
        </div>

        {/* Background grid */}
        <div
          className='col-span-full row-span-full grid grid-cols-subgrid pointer-events-none relative z-10'
          aria-hidden='true'
        >
          <div className='col-start-2 row-span-full border-x border-gray-500/20'></div>
          <div className='hidden md:block col-start-3 row-span-full border-x border-gray-500/20'></div>
          <div className='hidden md:block col-start-4 row-span-full border-x border-gray-500/20'></div>
        </div>
      </footer>
    </div>
  );
}

const experiments = [
  {
    image: '/T-11.png',
    title: 'Trizzy',
    boom: '/T-BG.svg',
    description: 'AI application to virtually try on clothes',
  },
  {
    image: '/pa-2.png',
    title: 'PicAI',
    boom: '/pa.svg',
    description: 'AI image generation',
  },
  {
    image: '/fi-2.png',
    title: 'Fire Icons',
    boom: '/fi.svg',
    description: 'SVG icon collection',
  },
  {
    image: '/ao-2.png',
    title: 'Advanced Ortho Labs',
    boom: '/T-BG.svg',
    description: 'Full Stack custom website for an Orthodontic Lab',
  },
  {
    image: '/al-2.png',
    title: 'Alkimi Labs',
    boom: '/al.svg',
    description: 'Token staking application',
  },
  {
    image: '/jc-2.png',
    title: 'JennyCo',
    boom: '/jc.svg',
    description: 'NFT minting site',
  },
  // {
  //   image: '/placeholder.svg?height=540&width=540',
  //   icons: 'Nucleo',
  //   fonts: 'Geist',
  //   colors: ['#F9F5FF', '#19181B', '#EE4169'],
  //   title: 'Trizzy',
  // },
  // {
  //   image: '/placeholder.svg?height=540&width=540',
  //   icons: 'Nucleo',
  //   fonts: 'Geist',
  //   colors: ['#FFFFFF', '#8A8A8F', '#070708', '#B2E071'],
  //   title: 'Trizzy',
  // },
  // {
  //   image: '/placeholder.svg?height=540&width=540',
  //   icons: 'Nucleo',
  //   fonts: 'SF Pro',
  //   colors: ['#FFFFFF', '#99A1A8', '#090909'],
  //   title: 'Trizzy',
  // },
  // {
  //   image: '/placeholder.svg?height=540&width=540',
  //   icons: 'Nucleo',
  //   fonts: 'Geist',
  //   colors: ['#191919', '#636363', '#D6D6D6', '#DA4167'],
  //   title: 'Trizzy',
  // },
  // {
  //   image: '/placeholder.svg?height=540&width=540',
  //   icons: 'Nucleo',
  //   fonts: 'Open Runde',
  //   colors: ['#2684FC', '#DCE2EF', '#1F1F1F'],
  //   title: 'Trizzy',
  // },
  // {
  //   image: '/placeholder.svg?height=540&width=540',
  //   icons: 'Nucleo',
  //   fonts: 'Geist Mono',
  //   colors: ['#09BC8A', '#F4F7F5', '#919793', '#0A0B0C'],
  //   title: 'Trizzy',
  // },
  // {
  //   image: '/placeholder.svg?height=540&width=540',
  //   icons: 'Nucleo',
  //   fonts: 'Inter',
  //   colors: ['#F67E7D', '#CDD0D5', '#958CAF', '#0B032D'],
  //   title: 'Trizzy',
  // },
];
