// import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';
// import ColorButton from './color-button';

interface ExperimentCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
}

export default function ExperimentCard({
  id,
  title,
  description,
}: // image,
ExperimentCardProps) {
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
        <figure className='col-start-2 md:col-start-3 aspect-square relative'>
          <div
            className="absolute inset-0 w-full h-full bg-[url('/bg-stripes.svg')] bg-repeat opacity-100"
            aria-hidden='true'
          ></div>
          {/* Optional: Keep the image but make it an overlay on the pattern */}
          {/* <Image
            src={'/bg-stripes.svg'}
            alt={title}
            width={540}
            height={540}
            className='w-full h-full object-cover'
            loading='lazy'
          /> */}
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

      {/* Experiment meta */}
      <div className='col-span-full grid grid-cols-subgrid border-t border-dashed border-gray-500/20'>
        <div className='relative col-start-2 md:col-start-3 p-6'>
          <h2 className='mb-4 text-sm font-semibold'>{title}</h2>
          <p className='mb-4 text-sm font-semibold'>{description}</p>
          <ul className='space-y-3'></ul>

          {/* Link */}
          <Link
            href={`#${id}`}
            className='experiment-link absolute top-6 right-6 focus:ring'
          >
            <LinkIcon size={18} />
            <span className='sr-only'>link</span>
          </Link>
        </div>
      </div>

      <div
        className='col-span-full h-6 border-t border-dashed border-gray-500/20'
        aria-hidden='true'
      ></div>
    </li>
  );
}
