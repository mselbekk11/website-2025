// import Image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { TextScramble } from '@/components/motion-primitives/text-scramble';
// import ColorButton from './color-button';

interface ExperimentCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  boom: string;
  PageLink: string;
}

export default function ExperimentCard({
  id,
  title,
  description,
  image,
  boom,
  PageLink,
}: ExperimentCardProps) {
  return (
    <li
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
        <Link
          href={PageLink}
          className='col-start-2 col-end-3 md:col-start-3 md:col-end-4'
        >
          <figure className='md:h-[400px] relative'>
            <div
              className='absolute inset-0 z-0'
              style={{
                backgroundImage: `url(${boom})`,
                backgroundRepeat: 'repeat',
                opacity: 1,
              }}
              aria-hidden='true'
            ></div>
            {/* Image positioned above the stripes with z-index */}
            <Image
              src={image}
              alt={title}
              width={540}
              height={540}
              className='w-full h-full object-cover relative z-10'
              loading='lazy'
            />
          </figure>
        </Link>
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

      {/* Experiment meta */}
      <div className='col-span-full grid grid-cols-subgrid border-t border-dashed border-gray-500/20'>
        <div className='relative col-start-2 col-end-3 md:col-start-3 md:col-end-4 p-6 flex flex-col gap-2'>
          <TextScramble className='text-sm font-semibold'>{title}</TextScramble>
          <TextScramble className='text-sm font-semibold text-zinc-500'>
            {description}
          </TextScramble>

          {/* Link */}
          {/* <Link
            href={`#${id}`}
            className='experiment-link absolute top-6 right-6 focus:ring'
          >
            <LinkIcon size={18} />
            <span className='sr-only'>link</span>
          </Link> */}
        </div>
      </div>

      <div
        className='col-span-full h-6 border-t border-dashed border-gray-500/20'
        aria-hidden='true'
      ></div>
    </li>
  );
}
