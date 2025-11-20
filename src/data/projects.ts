export interface Project {
  id: number;
  slug: string;
  title: string;
  categories: string[];
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[];
  year?: string;
  client?: string;
  scope?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'the-global-citizen-education-group',
    title: 'The Global Citizen Education Group',
    categories: ['Visual Identity'],
    description: 'Brand refresh & collateral for an education social enterprise in Singapore.',
    fullDescription: 'The Global Citizen Education Group (TGCEG) is an education social enterprise that was founded in 2015 to bridge the gap in skills development and global citizenship education. With the goal of developing global citizens who will make positive contributions to the community around them and the world that they live in, TGCEG believes in using education as a platform for impact.',
    year: '2024',
    client: 'The Global Citizen Education Group',
    scope: ['Visual Identity'],
    image: 'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
    images: [
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif'
    ]
  },
  {
    id: 2,
    slug: 'asean-students-forum-2024',
    title: 'ASEAN Student\'s Forum 2024',
    categories: ['Visual Identity', 'Event Design', 'Publications'],
    description: 'Comprehensive design system for international student forum event.',
    fullDescription: 'A comprehensive visual identity and event design system for the ASEAN Student\'s Forum 2024, bringing together students from across Southeast Asia.',
    year: '2024',
    client: 'ASEAN Student\'s Forum',
    scope: ['Visual Identity', 'Event Design', 'Publications'],
    image: 'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
    images: [
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif'
    ]
  },
  {
    id: 3,
    slug: 'hugem-innovation-challenge-sea-iv',
    title: 'HUGEM Innovation Challenge SEA IV',
    categories: ['Visual Identity', 'Event Design'],
    description: 'Visual identity and event design for innovation challenge competition.',
    fullDescription: 'HUGEM Innovation Challenge SEA IV brought together innovators and entrepreneurs from across Southeast Asia for a dynamic competition.',
    year: '2024',
    client: 'HUGEM',
    scope: ['Visual Identity', 'Event Design'],
    image: 'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
    images: [
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif'
    ]
  },
  {
    id: 4,
    slug: 'nubudget',
    title: 'Nubudget',
    categories: ['Product Design'],
    description: 'A modern budgeting application with intuitive user experience.',
    fullDescription: 'Nubudget is a comprehensive budgeting application designed to help users manage their finances effectively with an intuitive and beautiful interface.',
    year: '2024',
    client: 'Nubudget',
    scope: ['Product Design'],
    image: 'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
    images: [
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif'
    ]
  },
  {
    id: 5,
    slug: 'the-crafty-cub',
    title: 'The Crafty Cub',
    categories: ['Visual Identity', 'Web Design'],
    description: 'Brand identity and website design for creative craft marketplace.',
    fullDescription: 'The Crafty Cub is a creative marketplace connecting artisans with customers who appreciate handmade, unique crafts and artistic creations.',
    year: '2024',
    client: 'The Crafty Cub',
    scope: ['Visual Identity', 'Web Design'],
    image: 'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
    images: [
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif'
    ]
  },
  {
    id: 6,
    slug: 'anemoia',
    title: 'Anemoia',
    categories: ['Visual Identity'],
    description: 'Elegant visual identity for nostalgic brand experience.',
    fullDescription: 'Anemoia represents a feeling of nostalgia for a time you\'ve never known - a brand that captures the essence of longing and memory.',
    year: '2023',
    client: 'Anemoia',
    scope: ['Visual Identity'],
    image: 'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
    images: [
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif'
    ]
  },
  {
    id: 7,
    slug: 'synthetic-visions',
    title: 'Synthetic Visions',
    categories: ['Visual Identity', 'Event Design'],
    description: 'Futuristic design system for tech-forward event series.',
    fullDescription: 'Synthetic Visions explores the intersection of technology and creativity through a series of immersive events and experiences.',
    year: '2023',
    client: 'Synthetic Visions',
    scope: ['Visual Identity', 'Event Design'],
    image: 'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
    images: [
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif'
    ]
  },
  {
    id: 8,
    slug: 'vancouver-humane-society',
    title: 'Vancouver Humane Society',
    categories: ['Publications'],
    description: 'Design for animal welfare organization publications and materials.',
    fullDescription: 'Creating impactful publications and materials for Vancouver Humane Society to raise awareness and support for animal welfare.',
    year: '2023',
    client: 'Vancouver Humane Society',
    scope: ['Publications'],
    image: 'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
    images: [
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif'
    ]
  },
  {
    id: 9,
    slug: 'the-wild-bloom',
    title: 'The Wild Bloom',
    categories: ['Packaging Design'],
    description: 'Sustainable packaging design for organic skincare brand.',
    fullDescription: 'The Wild Bloom specializes in organic, sustainable skincare products with packaging that reflects the natural beauty of their ingredients.',
    year: '2023',
    client: 'The Wild Bloom',
    scope: ['Packaging Design'],
    image: 'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
    images: [
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif',
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif'
    ]
  },
  {
    id: 10,
    slug: 'mya',
    title: 'Mya',
    categories: ['Visual Identity'],
    description: 'Minimalist brand identity for modern lifestyle brand.',
    fullDescription: 'Mya is a contemporary lifestyle brand focused on simplicity, quality, and mindful living. The visual identity reflects these core values.',
    year: '2023',
    client: 'Mya',
    scope: ['Visual Identity'],
    image: 'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
    images: [
      'https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif',
      'https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
