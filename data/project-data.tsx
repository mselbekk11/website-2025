import VideoFour from '../app/components/videos/video-trizzy';

export const projectData = [
  {
    id: 'trizzy',
    image: '/T-11.png',
    title: 'Trizzy',
    boom: '/T-BG.svg',
    description: 'AI application to virtually try on clothes',
    first:
      'Trizzy.ai is a full stack AI application where you can train models on your own images using Flux AI and then try on outfits by uploading images of clothing.',
    second:
      'This project uses the Astria API which uses Flux AI to train the models and items of clothing. This app allows users to try on outfits before buying. Some of the benefits of using Trizzy are things like; style experimentation, reduced returns, time saving and cuts down on waste.',
    stack: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React' },
      { name: 'Typescript' },
      { name: 'Next.js' },
      { name: 'Convex' },
      { name: 'Tailwind' },
      { name: 'Astria AI' },
      { name: 'Flux AI' },
      { name: 'Stripe' },
      { name: 'Uploadthing' },
    ],
    website: 'https://trizzy.ai',
    PageLink: '/trizzy',
    video: <VideoFour />,
  },
  {
    id: 'picai',
    image: '/pa-2.png',
    title: 'PicAI',
    boom: '/pa.svg',
    description: 'AI image generation',
    PageLink: '/picai',
    video: <VideoFour />,
  },
  {
    id: 'fire-icons',
    image: '/fi-2.png',
    title: 'Fire Icons',
    boom: '/fi.svg',
    description: 'SVG icon collection',
    PageLink: '/fire-icons',
    video: <VideoFour />,
  },
  {
    id: 'advanced-ortho-labs',
    image: '/ao-2.png',
    title: 'Advanced Ortho Labs',
    boom: '/T-BG.svg',
    description: 'Full Stack custom website for an Orthodontic Lab',
    PageLink: '/advanced-ortho-labs',
    video: <VideoFour />,
  },
  {
    id: 'alkimi-labs',
    image: '/al-2.png',
    title: 'Alkimi Labs',
    boom: '/al.svg',
    description: 'Token staking application',
    PageLink: '/alkimi-labs',
    video: <VideoFour />,
  },
  {
    id: 'jennyco',
    image: '/jc-2.png',
    title: 'JennyCo',
    boom: '/jc.svg',
    description: 'NFT minting site',
    PageLink: '/jennyco',
    video: <VideoFour />,
  },
];

// Utility function to get project data by ID
export function getProjectById(id: string) {
  return projectData.find((project) => project.id === id);
}

// Alternative: get project by title
export function getProjectByTitle(title: string) {
  return projectData.find(
    (project) => project.title.toLowerCase() === title.toLowerCase()
  );
}
