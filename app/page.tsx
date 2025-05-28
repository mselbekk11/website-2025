'use client';

import Link from 'next/link';
import ExperimentCard from '@/app/components/experiment-card';
import Logo from '@/app/components/logo';
// import PatternBackground from '@/app/components/pattern-background';
import LogoOne from './components/logo-one';

export default function Home() {
  const scrollToHireMe = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hireMeSection = document.getElementById('hire-me');
    if (hireMeSection) {
      hireMeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

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
            onClick={scrollToHireMe}
            className='btn px-4 py-2 border border-gray-500/20 rounded-full sticky top-[34px] mb-10 z-[3] bg-gray-500/20 text-xs'
          >
            Hire Me
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
        className='bg-[#fafafa] text-[#0A0A0A] relative z-20 grid grid-cols-[24px_1fr_24px] sm:grid-cols-[1fr_33.75rem_1fr] md:grid-cols-[1fr_228px_600px_228px_1fr] md:gap-x-6 min-h-screen'
      >
        <div className='col-span-full row-span-full grid grid-cols-subgrid'>
          {/* Pattern backgrounds for outer columns */}
          {/* <div className='hidden md:block col-start-1 row-span-full relative'>
            <div
              className="absolute inset-0 w-full h-full bg-[url('/bg-stripes.png')] bg-repeat opacity-20 pointer-events-none"
              aria-hidden='true'
            ></div>
          </div> */}
          {/* <div className='hidden md:block col-start-5 row-span-full relative'>
            <div
              className="absolute inset-0 w-full h-full bg-[url('/bg-stripes.png')] bg-repeat opacity-20 pointer-events-none"
              aria-hidden='true'
            ></div>
          </div> */}

          {/* Content */}
          <div className='col-span-full grid grid-cols-subgrid my-auto border-y border-dashed border-gray-400/20'>
            <aside
              className='hidden md:block md:col-start-2 relative'
              aria-hidden='true'
            >
              <div
                className="absolute inset-0 w-full h-full bg-[url('/bg-stripes-dark.svg')] bg-repeat opacity-100 pointer-events-none"
                aria-hidden='true'
              ></div>
            </aside>

            <div className='col-start-2 md:col-start-3 flex flex-col gap-4 p-6'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-sm font-semibold leading-tight'>About</h2>
                <p className='opacity-50 text-sm'>
                  Hello, Im Morgan Selbekk, a full stack developer and designer
                  based in San Francisco with over eight years of hands-on
                  experience in E-commerce and Blockchain. I am passionate about
                  crafting web products that are not only visually compelling
                  but also highly functional and user-centric.
                </p>
              </div>

              <div className='flex flex-col gap-2'>
                <h2 className='text-sm font-semibold mt-4 leading-tight'>
                  Connect
                </h2>
                <div>
                  {' '}
                  <p>
                    <span className='opacity-50 text-sm'>Email:</span>{' '}
                    <Link
                      href='mailto:mselbekk11@gmail.com'
                      className='underline underline-offset-4 text-sm'
                    >
                      mselbekk11@gmail.com
                    </Link>
                  </p>
                  <p>
                    <span className='opacity-50 text-sm'>X:</span>{' '}
                    <Link
                      href='https://x.com/mselbekk1'
                      target='_blank'
                      className='underline underline-offset-4 text-sm'
                    >
                      @mselbekk1
                    </Link>
                  </p>
                  <p>
                    <span className='opacity-50 text-sm'>Github:</span>{' '}
                    <Link
                      href='https://github.com/mselbekk11'
                      target='_blank'
                      className='underline underline-offset-4 text-sm'
                    >
                      mselbekk11
                    </Link>
                  </p>
                  <p>
                    <span className='opacity-50 text-sm'>LinkedIn:</span>{' '}
                    <Link
                      href='https://www.linkedin.com/in/morgan-selbekk/'
                      target='_blank'
                      className='underline underline-offset-4 text-sm'
                    >
                      in/morgan-selbekk
                    </Link>
                  </p>
                  <p>
                    <span className='opacity-50 text-sm'>Resume:</span>{' '}
                    <Link
                      href='/Morgan-Selbekk-Resume.pdf'
                      download='Morgan-Selbekk-Resume.pdf'
                      className='underline underline-offset-4 text-sm'
                    >
                      Download
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <aside
              className='hidden md:block md:col-start-4 relative'
              aria-hidden='true'
            >
              <div
                className="absolute inset-0 w-full h-full bg-[url('/bg-stripes-dark.svg')] bg-repeat opacity-100 pointer-events-none"
                aria-hidden='true'
              ></div>
            </aside>
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
