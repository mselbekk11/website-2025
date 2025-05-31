import VideoTrizzy from '../app/components/videos/video-trizzy';
import VideoPicAI from '../app/components/videos/video-picai';
import VideoFireIcons from '../app/components/videos/video-fireicons';
import VideoAOL from '../app/components/videos/video-aol';
import VideoAlkimi from '../app/components/videos/video-alkimi';
import VideoJennyCo from '../app/components/videos/video-jco';

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
    video: <VideoTrizzy />,
  },
  {
    id: 'picai',
    image: '/pa-2.png',
    title: 'PicAI',
    boom: '/pa.svg',
    description: 'AI image generation',
    first:
      'Pic AI is a full stack AI image generator. Train models on your own images using Flux AI and generate realistic images by writing descriptive prompts.',
    second:
      'This project uses the Astria API which uses Flux AI to train the models. Depending on the amount of images you upload, models can take up to 45 minutes to train, however once trained, images can be generated in around 30-60 seconds.',
    stack: [
      { name: 'React' },
      { name: 'Typescript' },
      { name: 'Next.js' },
      { name: 'Supabase' },
      { name: 'Tailwind' },
      { name: 'Astria AI' },
      { name: 'Flux AI' },
      { name: 'Stripe' },
    ],
    website: 'https://www.picai.so/',
    PageLink: '/picai',
    video: <VideoPicAI />,
  },
  {
    id: 'fire-icons',
    image: '/fi-2.png',
    title: 'Fire Icons',
    boom: '/fi.svg',
    description: 'SVG icon collection',
    first:
      'Fire Icons is a collection of my favourite SVG icons which you can customise the size, stroke width and colour and then copy the SVG code.',
    second:
      'I always used SVG icons in my projects, but I found it a bit annoying to have to go to various different websites to find the icon, copy the SVG code and then paste it into my project. So I created this website to make it easier.',
    stack: [
      { name: 'React' },
      { name: 'Typescript' },
      { name: 'Next.js' },
      { name: 'Tailwind' },
      { name: 'lucide icons' },
    ],
    website: 'https://www.fireicons.io/',
    PageLink: '/fire-icons',
    video: <VideoFireIcons />,
  },
  {
    id: 'advanced-ortho-labs',
    image: '/ao-2.png',
    title: 'Advanced Ortho Labs',
    boom: '/T-BG.svg',
    description: 'Full Stack custom website for an Orthodontic Lab',
    first:
      'Advanced Ortho Lab is an orthodontic laboratory based in San Francisco. It has been in the family for 3 generations and they wanted a new brand identity and website, which I designed and built',
    second:
      'For any of their clients to order dental appliances, they had to download a PDF, fill it out, scan back to their computer, and then email advanced. I streamilined this process, designing and building a form so that their clients can make a request directly from the website.',
    stack: [
      { name: 'React' },
      { name: 'Typescript' },
      { name: 'Next.js' },
      { name: 'Tailwind' },
      { name: 'Shadcn/ui' },
      { name: 'Cloudinary' },
      { name: 'Node.js' },
      { name: 'SupaBase' },
      { name: 'Mailgun' },
    ],
    website: 'https://www.advancedortholabsf.com/',
    PageLink: '/advanced-ortho-labs',
    video: <VideoAOL />,
  },
  {
    id: 'alkimi-labs',
    image: '/al-2.png',
    title: 'Alkimi Labs',
    boom: '/al.svg',
    description: 'Token staking application',
    first:
      'Alkimi Labs is a token staking platform & node management system. Alkimi is a decentralized advertising exchange that floats on its own crypto currency - The $ADS token. The Alkimi community are incentivized to stake their $ADS tokens in exchange for token rewards. In 2023 Alkimi Labs hosted 6 staking pools, each one holding ~$10,000,000 worth of Alkimi Tokens. This allowed Alkimi to lock up tokens, decrease supply on the market and push up the price of the $ADS token.',
    second:
      'I lead a team of 5 as a Project Manager, consisting of 1 front-end developer, 1 full-stack developer, 1 blockchain developer and 1 UI/UX designer. I designed the first iteration, which was then improved over the last year.',
    stack: [
      { name: 'React' },
      { name: 'Typescript' },
      { name: 'Next.js' },
      { name: 'Tailwind' },
      { name: 'Redux & Redux Toolkit' },
      { name: 'Node.js' },
      { name: 'AWS' },
      { name: 'Etherium Blockchain' },
      { name: 'ERC-1155 Smart Contract' },
    ],
    website: 'https://labs.alkimi.org/',
    PageLink: '/alkimi-labs',
    video: <VideoAlkimi />,
  },
  {
    id: 'jennyco',
    image: '/jc-2.png',
    title: 'JennyCo',
    boom: '/jc.svg',
    description: 'NFT minting site',
    first:
      'JennyCo is the worlds first cryptographically secured AI-driven healthcare data marketplace. JennyCo wanted to create an NFT series to help raise capital and also generate user health data for their app. When someone minted an NFT they would receive both a DNA test kit as well as $JCO tokens. Once the DNA test was submitted by the user, JennyCo would upload this data to their app. Everytime the users data was used, they would be compensated with $JCO tokens.',
    second:
      'I was both the Project Manager and Front-end developer for this project, working alongside 1 Full-stack developer, 1 Blockchain developer and 1 UI/UX designer. JennyCo sold 919 NFTs making $180,000',
    stack: [
      { name: 'React' },
      { name: 'Typescript' },
      { name: 'Next.js' },
      { name: 'Tailwind' },
      { name: 'Redux & Redux Toolkit' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Mongoose' },
      { name: 'MongoDB' },
      { name: 'Etherium Blockchain' },
      { name: 'ERC-721 Smart Contract' },
    ],
    website: 'https://www.jennyco.io/',
    PageLink: '/jennyco',
    video: <VideoJennyCo />,
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
