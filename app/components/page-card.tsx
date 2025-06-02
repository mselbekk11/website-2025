// import Image from 'next/image';
// import Image from 'next/image';
// import ColorButton from './color-button';

import Link from 'next/link';

// import { TextScramble } from '@/components/motion-primitives/text-scramble';

interface PageCardProps {
  id: string;
  title: string;
  description: string;
  website: string;
  image: string;
  first: string;
  second: string;
  stack: { name: string }[];
  boom: string;
  video: React.ReactNode;
}

export default function PageCard({
  id,
  title,
  description,
  website,
  // image,
  // boom,
  first,
  second,
  stack,
  video,
}: PageCardProps) {
  return (
    <div
      id={id}
      className='col-span-full grid grid-cols-subgrid border-b border-dashed border-gray-500/20'
    >
      <div className='col-span-full grid grid-cols-subgrid'>
        <aside
          className='hidden md:block md:col-start-2 relative'
          aria-hidden='true'
        >
          <div
            className="absolute inset-0 w-full h-full bg-[url('/bg-stripes.svg')] bg-repeat opacity-100 pointer-events-none"
            aria-hidden='true'
          ></div>
        </aside>

        {/* Experiment */}
        <figure className='col-start-2 md:col-start-3 relative'>
          {/* <div
            className='absolute inset-0 z-0'
            style={{
              backgroundImage: `url(${boom})`,
              backgroundRepeat: 'repeat',
              opacity: 1,
            }}
            aria-hidden='true'
          ></div> */}
          {/* Image positioned above the stripes with z-index */}
          {/* <Image
            src={image}
            alt={title}
            width={540}
            height={540}
            className='w-full h-full object-cover relative z-10'
            loading='lazy'
          /> */}
          <div className='flex justify-center items-center h-full relative z-10'>
            {video}
          </div>
        </figure>

        <aside
          className='hidden md:block md:col-start-4 relative'
          aria-hidden='true'
        >
          <div
            className="absolute inset-0 w-full h-full bg-[url('/bg-stripes.svg')] bg-repeat opacity-100 pointer-events-none"
            aria-hidden='true'
          ></div>
        </aside>
      </div>

      {/* Project Description */}
      <div className='col-span-full grid grid-cols-subgrid border-t border-dashed border-gray-500/20'>
        <div className='relative col-start-2 md:col-start-3 p-4 flex flex-col gap-4'>
          {/* <h2 className='text-sm font-semibold'>{title}</h2> */}
          {/* <p className='text-sm font-semibold text-zinc-500'>{description}</p> */}
          <div className='flex flex-col gap-2 md:hidden'>
            <Link href={website} target='_blank'>
              <h2 className='text-sm font-semibold underline'>{title}</h2>
            </Link>
            <p className='text-sm font-semibold text-zinc-500'>{description}</p>
          </div>
          <div className='text-sm text-zinc-300 font-normal'>{first}</div>
          <div className='text-sm text-zinc-300 font-normal'>{second}</div>
        </div>
      </div>

      {/* Project Stack */}
      <div className='col-span-full grid grid-cols-subgrid border-t border-dashed border-gray-500/20 relative'>
        <div className='relative col-start-2 md:col-start-3 p-4 flex flex-col gap-2'>
          <div
            className="absolute inset-0 w-full h-full bg-[url('/bg-stripes.svg')] bg-repeat opacity-100 pointer-events-none"
            aria-hidden='true'
          ></div>
          <div className='flex flex-wrap gap-3 w-full text-xs text-zinc-300 relative z-10'>
            {stack.map((item, index) => (
              <div
                key={index}
                className='border py-2 px-4 border-gray-500/20 bg-[#0D0D0D]'
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
