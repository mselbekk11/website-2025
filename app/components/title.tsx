'use client';

import { usePathname } from 'next/navigation';

export default function Title() {
  const pathname = usePathname();

  const heading =
    pathname === '/'
      ? 'Morgan Selbekk'
      : pathname === '/trizzy'
      ? 'Trizzy'
      : pathname === '/picai'
      ? 'Pic AI'
      : pathname === '/fire-icons'
      ? 'Fire Icons'
      : pathname === '/advanced-ortho-labs'
      ? 'Advanced Ortho Labs'
      : pathname === '/alkimi-labs'
      ? 'Alkimi Labs'
      : pathname === '/jenny-co'
      ? 'Jenny Co'
      : 'Morgan Selbekk';

  const subheading =
    pathname === '/'
      ? 'Full Stack Developer & Designer'
      : pathname === '/trizzy'
      ? 'AI application to virtually try on clothes'
      : pathname === '/picai'
      ? 'AI image generation'
      : pathname === '/fire-icons'
      ? 'SVG icon collection'
      : pathname === '/advanced-ortho-labs'
      ? 'Full Stack custom website for an Orthodontic Lab'
      : pathname === '/alkimi-labs'
      ? 'Token staking application'
      : pathname === '/jenny-co'
      ? 'NFT minting site'
      : 'Full Stack Developer & Designer';

  return (
    <div>
      <h1 className='text-balance text-center leading-[1.4] text-sm'>
        {heading}
        <span className='text-zinc-500 sm:block'>{subheading}</span>
      </h1>
    </div>
  );
}
