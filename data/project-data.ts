export const projectData = [
  {
    id: 'trizzy',
    image: '/T-11.png',
    title: 'Trizzy',
    boom: '/T-BG.svg',
    description: 'AI application to virtually try on clothes',
  },
  {
    id: 'picai',
    image: '/pa-2.png',
    title: 'PicAI',
    boom: '/pa.svg',
    description: 'AI image generation',
  },
  {
    id: 'fire-icons',
    image: '/fi-2.png',
    title: 'Fire Icons',
    boom: '/fi.svg',
    description: 'SVG icon collection',
  },
  {
    id: 'advanced-ortho-labs',
    image: '/ao-2.png',
    title: 'Advanced Ortho Labs',
    boom: '/T-BG.svg',
    description: 'Full Stack custom website for an Orthodontic Lab',
  },
  {
    id: 'alkimi-labs',
    image: '/al-2.png',
    title: 'Alkimi Labs',
    boom: '/al.svg',
    description: 'Token staking application',
  },
  {
    id: 'jennyco',
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

// Utility function to get project data by ID
export function getProjectById(id: string) {
  return projectData.find(project => project.id === id);
}

// Alternative: get project by title
export function getProjectByTitle(title: string) {
  return projectData.find(project => project.title.toLowerCase() === title.toLowerCase());
}