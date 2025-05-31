'use client';

import Link from 'next/link';
import LogoOne from './logo-one';
import Title from './title';
import VisitWebsite from './visit-website';
import { TextScramble } from '@/components/motion-primitives/text-scramble';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
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
          </div>
        </div>
      </div>

      <main
        id='top'
        className='relative z-20 grid grid-cols-[24px_1fr_24px] sm:grid-cols-[1fr_33.75rem_1fr] md:grid-cols-[1fr_178px_700px_178px_1fr] md:gap-x-6 grid-rows-[24px_auto_1fr] min-h-screen'
      >
        {/* Desktop logo */}
        <div className='hidden md:flex col-start-2 row-span-full pt-[52px] justify-center items-start relative z-20'>
          <Link href='/' className='sticky top-[34px] mb-10'>
            <LogoOne />
          </Link>
        </div>

        {/* Mobile header */}
        <header className='col-span-full grid grid-cols-subgrid border-y border-dashed border-gray-500/20 row-start-2 md:h-[100px]'>
          <div className='col-start-2 md:col-start-3 flex flex-col md:justify-center items-center gap-4 p-6'>
            <Link href='/' className='md:hidden'>
              <LogoOne />
            </Link>

            {/* <h1 className='text-balance text-center leading-[1.4] text-sm'>
              Morgan Selbekk
              <span className='text-zinc-500 sm:block'>
                Full Stack Developer & Designer
              </span>
            </h1> */}
            <Title />
          </div>
        </header>

        {/* Desktop CTA */}
        <div className='hidden md:flex col-start-4 row-span-full pt-[52px] justify-center items-start z-20'>
          {/* <Link
            href='#hire-me'
            onClick={scrollToHireMe}
            className='btn px-4 py-2 border border-gray-500/20 rounded-full sticky top-[34px] mb-10 z-[3] bg-gray-500/20 text-xs'
          >
            Hire Me
          </Link> */}
          <div className='sticky top-[34px] z-[3]'>
            <VisitWebsite scrollToHireMe={scrollToHireMe} />
          </div>
        </div>

        {/* Main content area */}
        <div className='col-span-full grid grid-cols-subgrid row-start-3 self-start'>
          {children}
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
      </main>

      <footer
        id='hire-me'
        className='bg-[#fafafa] text-[#0A0A0A] relative z-20 grid grid-cols-[24px_1fr_24px] sm:grid-cols-[1fr_33.75rem_1fr] md:grid-cols-[1fr_178px_700px_178px_1fr] md:gap-x-6 min-h-screen'
      >
        <div className='col-span-full row-span-full grid grid-cols-subgrid'>
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
                <TextScramble className='text-sm font-semibold leading-tight'>
                  About
                </TextScramble>
                <TextScramble className='opacity-50 text-sm'>
                  Hello, Im Morgan Selbekk, a full stack developer and designer
                  based in San Francisco with over eight years of hands-on
                  experience in E-commerce and Blockchain. I am passionate about
                  crafting web products that are not only visually compelling
                  but also highly functional and user-centric.
                </TextScramble>
              </div>

              <div className='flex flex-col gap-2'>
                <TextScramble className='text-sm font-semibold mt-4 leading-tight'>
                  Connect
                </TextScramble>
                <div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex text-sm'>
                      <TextScramble className='opacity-50 text-sm'>
                        Email:
                      </TextScramble>
                      <Link
                        href='mailto:mselbekk11@gmail.com'
                        className='underline underline-offset-4 text-sm'
                        target='_blank'
                      >
                        <TextScramble>mselbekk11@gmail.com</TextScramble>
                      </Link>
                    </div>

                    <div className='flex text-sm'>
                      <TextScramble className='opacity-50 text-sm'>
                        X:
                      </TextScramble>
                      <Link
                        href='https://x.com/mselbekk1'
                        className='underline underline-offset-4 text-sm'
                        target='_blank'
                      >
                        <TextScramble>@mselbekk1</TextScramble>
                      </Link>
                    </div>

                    <div className='flex text-sm'>
                      <TextScramble className='opacity-50 text-sm'>
                        Github:
                      </TextScramble>
                      <Link
                        href='https://github.com/mselbekk11'
                        className='underline underline-offset-4 text-sm'
                        target='_blank'
                      >
                        <TextScramble>mselbekk11</TextScramble>
                      </Link>
                    </div>

                    <div className='flex text-sm'>
                      <TextScramble className='opacity-50 text-sm'>
                        LinkedIn:
                      </TextScramble>
                      <Link
                        href='https://www.linkedin.com/in/morgan-selbekk/'
                        className='underline underline-offset-4 text-sm'
                        target='_blank'
                      >
                        <TextScramble>in/morgan-selbekk</TextScramble>
                      </Link>
                    </div>

                    <div className='flex text-sm'>
                      <TextScramble className='opacity-50 text-sm'>
                        Resume:
                      </TextScramble>
                      <Link
                        href='/Morgan-Selbekk-Resume.pdf'
                        download='Morgan-Selbekk-Resume.pdf'
                        className='underline underline-offset-4 text-sm'
                      >
                        <TextScramble>Download</TextScramble>
                      </Link>
                    </div>
                  </div>

                  {/* <p>
                    <span className='opacity-50 text-sm'>Email:</span>{' '}
                    <Link
                      href='mailto:mselbekk11@gmail.com'
                      className='underline underline-offset-4 text-sm'
                    >
                      mselbekk11@gmail.com
                    </Link>
                  </p> */}
                  {/* <p>
                    <span className='opacity-50 text-sm'>X:</span>{' '}
                    <Link
                      href='https://x.com/mselbekk1'
                      target='_blank'
                      className='underline underline-offset-4 text-sm'
                    >
                      @mselbekk1
                    </Link>
                  </p> */}
                  {/* <p>
                    <span className='opacity-50 text-sm'>Github:</span>{' '}
                    <Link
                      href='https://github.com/mselbekk11'
                      target='_blank'
                      className='underline underline-offset-4 text-sm'
                    >
                      mselbekk11
                    </Link>
                  </p> */}
                  {/* <p>
                    <span className='opacity-50 text-sm'>LinkedIn:</span>{' '}
                    <Link
                      href='https://www.linkedin.com/in/morgan-selbekk/'
                      target='_blank'
                      className='underline underline-offset-4 text-sm'
                    >
                      in/morgan-selbekk
                    </Link>
                  </p> */}
                  {/* <p>
                    <span className='opacity-50 text-sm'>Resume:</span>{' '}
                    <Link
                      href='/Morgan-Selbekk-Resume.pdf'
                      download='Morgan-Selbekk-Resume.pdf'
                      className='underline underline-offset-4 text-sm'
                    >
                      Download
                    </Link>
                  </p> */}
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
