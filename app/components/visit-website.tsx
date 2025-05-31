'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function VisitWebsite({
  scrollToHireMe,
}: {
  scrollToHireMe: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const pathname = usePathname();

  const website =
    pathname === '/'
      ? '#hire-me'
      : pathname === '/trizzy'
      ? 'https://trizzy.ai'
      : pathname === '/picai'
      ? 'https://picai.so'
      : pathname === '/fire-icons'
      ? 'https://fireicons.io'
      : pathname === '/advanced-ortho-labs'
      ? 'https://www.advancedortholabsf.com/'
      : pathname === '/alkimi-labs'
      ? 'https://labs.alkimi.org/'
      : pathname === '/jenny-co'
      ? 'https://www.jennyco.io/'
      : '#hire-me';

  const buttonText = pathname === '/' ? 'Hire Me' : 'Visit Site';

  const isRootPath = pathname === '/';

  return (
    <div>
      <Link
        href={website}
        {...(!isRootPath && { target: '_blank' })}
        onClick={isRootPath ? scrollToHireMe : undefined}
        className='btn px-4 py-2 border border-gray-500/20 rounded-full sticky top-[34px] mb-10 z-[3] bg-gray-500/20 text-xs'
      >
        {buttonText}
      </Link>
    </div>
  );
}
