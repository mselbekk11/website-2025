import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';
import ColorButton from './color-button';

interface ExperimentCardProps {
  id: string;
  title: string;
  image: string;
  icons: string;
  fonts: string;
  colors: string[];
}

export default function ExperimentCard({
  id,
  title,
  // image,
  icons,
  fonts,
  colors,
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
        <figure className='col-start-2 md:col-start-3 aspect-square'>
          <Image
            // src={image || '/bg.svg'}
            src={'/bg.svg'}
            alt={title}
            width={540}
            height={540}
            className='w-full h-full object-cover'
            loading='lazy'
          />
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
          <h2 className='mb-4 text-xl font-semibold'>{title}</h2>

          <ul className='space-y-3'>
            <li>
              <dl className='flex gap-2'>
                <dt className='text-white/50'>Icons</dt>
                <dd>
                  <Link
                    href='https://nucleoapp.com/'
                    className='underline underline-offset-4 focus:ring'
                  >
                    {icons}
                  </Link>
                </dd>
              </dl>
            </li>

            <li>
              <dl className='flex gap-2'>
                <dt className='text-white/50'>Fonts</dt>
                <dd>{fonts}</dd>
              </dl>
            </li>

            {/* Colors */}
            <li>
              <dl>
                <dt className='text-white/50 mb-1'>Colors</dt>
                <dd className='flex gap-2'>
                  {colors.map((color, index) => (
                    <ColorButton key={index} color={color} />
                  ))}
                </dd>
              </dl>
            </li>
          </ul>

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
