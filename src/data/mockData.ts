import  type { Product, User } from '../types/index';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Complete English Speaking Course with Native Teachers',
    price: 890000,
    originalPrice: 1290000,
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Master English conversation with certified native speakers from the US and UK.',
    fullDescription: 'This comprehensive English speaking course is designed to help you achieve fluency in conversational English. Led by certified native speakers from the United States and United Kingdom, this course covers everything from basic pronunciation to advanced conversation techniques. You\'ll participate in live sessions, receive personalized feedback, and practice with real-world scenarios.',
    category: 'Language Learning',
    rating: 4.8,
    reviews: 1234,
    instructor: 'Sarah Johnson',
    duration: '12 weeks',
    level: 'Intermediate',
    tags: ['English', 'Speaking', 'Conversation', 'Native Speaker'],
    features: [
      'Live 1-on-1 sessions with native speakers',
      'Personalized learning path',
      'Real-time pronunciation feedback',
      'Conversation practice groups',
      'Certificate of completion'
    ]
  },
  {
    id: '2',
    name: 'Advanced React & TypeScript Development',
    price: 1250000,
    originalPrice: 1890000,
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Build modern web applications with React, TypeScript, and industry best practices.',
    fullDescription: 'Take your React skills to the next level with this comprehensive TypeScript development course. Learn to build scalable, maintainable applications using modern React patterns, TypeScript for type safety, and industry-standard tools. This course covers advanced concepts like state management, testing, performance optimization, and deployment strategies.',
    category: 'Programming',
    rating: 4.9,
    reviews: 892,
    instructor: 'Michael Chen',
    duration: '16 weeks',
    level: 'Advanced',
    tags: ['React', 'TypeScript', 'Frontend', 'JavaScript'],
    features: [
      'Advanced React patterns and hooks',
      'TypeScript for type safety',
      'State management with Redux Toolkit',
      'Testing with Jest and React Testing Library',
      'Performance optimization techniques',
      'Deployment and CI/CD setup'
    ]
  },
  {
    id: '3',
    name: 'Digital Marketing Masterclass 2025',
    price: 750000,
    originalPrice: 1100000,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Complete digital marketing course covering SEO, social media, and paid advertising.',
    fullDescription: 'Master the art of digital marketing with this comprehensive course that covers all aspects of online marketing. From search engine optimization to social media marketing and paid advertising campaigns, you\'ll learn practical strategies that drive real results. The course includes hands-on projects, real case studies, and access to premium marketing tools.',
    category: 'Marketing',
    rating: 4.7,
    reviews: 2156,
    instructor: 'Emma Rodriguez',
    duration: '10 weeks',
    level: 'Beginner',
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Advertising'],
    features: [
      'SEO optimization strategies',
      'Social media marketing tactics',
      'Google Ads and Facebook Ads',
      'Content marketing and copywriting',
      'Analytics and performance tracking',
      'Marketing automation tools'
    ]
  },
  {
    id: '4',
    name: 'Data Science with Python & Machine Learning',
    price: 1450000,
    originalPrice: 2100000,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Learn data science fundamentals and build ML models with Python and popular libraries.',
    fullDescription: 'Dive into the world of data science and machine learning with this comprehensive Python course. You\'ll learn to analyze data, create visualizations, and build predictive models using popular libraries like pandas, numpy, scikit-learn, and tensorflow. The course includes real-world projects and datasets to give you hands-on experience.',
    category: 'Data Science',
    rating: 4.8,
    reviews: 743,
    instructor: 'Dr. James Wilson',
    duration: '20 weeks',
    level: 'Intermediate',
    tags: ['Python', 'Data Science', 'Machine Learning', 'Statistics'],
    features: [
      'Python programming fundamentals',
      'Data manipulation with pandas',
      'Data visualization with matplotlib/seaborn',
      'Machine learning with scikit-learn',
      'Deep learning with TensorFlow',
      'Real-world project portfolio'
    ]
  },
  {
    id: '5',
    name: 'UI/UX Design Fundamentals',
    price: 650000,
    originalPrice: 950000,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Master user interface and user experience design with hands-on projects.',
    fullDescription: 'Learn the fundamentals of UI/UX design and create stunning, user-friendly interfaces. This course covers design principles, user research, prototyping, and modern design tools. You\'ll work on real projects and build a professional portfolio that showcases your design skills.',
    category: 'Design',
    rating: 4.6,
    reviews: 1567,
    instructor: 'Lisa Park',
    duration: '8 weeks',
    level: 'Beginner',
    tags: ['UI Design', 'UX Design', 'Figma', 'Prototyping'],
    features: [
      'Design principles and color theory',
      'User research and personas',
      'Wireframing and prototyping',
      'Figma and Adobe XD mastery',
      'Responsive design techniques',
      'Portfolio development'
    ]
  },
  {
    id: '6',
    name: 'Japanese Language Course - From Zero to Conversational',
    price: 420000,
    originalPrice: 680000,
    image: 'https://images.pexels.com/photos/207665/pexels-photo-207665.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Learn Japanese from scratch with interactive lessons and cultural insights.',
    fullDescription: 'Start your Japanese learning journey with this comprehensive course designed for complete beginners. Learn hiragana, katakana, basic kanji, and conversational Japanese through interactive lessons, cultural insights, and practical exercises. The course includes audio materials recorded by native speakers.',
    category: 'Language Learning',
    rating: 4.5,
    reviews: 891,
    instructor: 'Tanaka Hiroshi',
    duration: '14 weeks',
    level: 'Beginner',
    tags: ['Japanese', 'Hiragana', 'Katakana', 'Conversation'],
    features: [
      'Hiragana and Katakana mastery',
      'Basic kanji characters',
      'Conversation practice sessions',
      'Cultural insights and context',
      'Audio materials by native speakers',
      'Interactive exercises and games'
    ]
  },
  {
    id: '7',
    name: 'Blockchain & Cryptocurrency Development',
    price: 1890000,
    originalPrice: 2650000,
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Build decentralized applications and smart contracts on Ethereum blockchain.',
    fullDescription: 'Master blockchain technology and cryptocurrency development with this advanced course. Learn to build decentralized applications (DApps), write smart contracts in Solidity, and understand the fundamentals of blockchain architecture. The course covers both technical implementation and practical applications.',
    category: 'Blockchain',
    rating: 4.7,
    reviews: 456,
    instructor: 'Alex Thompson',
    duration: '18 weeks',
    level: 'Advanced',
    tags: ['Blockchain', 'Ethereum', 'Smart Contracts', 'DApps'],
    features: [
      'Blockchain fundamentals',
      'Smart contract development in Solidity',
      'DApp development with Web3.js',
      'Ethereum network and gas optimization',
      'Security best practices',
      'Real-world project deployment'
    ]
  },
  {
    id: '8',
    name: 'Photography Masterclass - Portrait & Landscape',
    price: 580000,
    originalPrice: 820000,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Master photography techniques for stunning portraits and breathtaking landscapes.',
    fullDescription: 'Elevate your photography skills with this comprehensive masterclass covering both portrait and landscape photography. Learn professional techniques, lighting setups, composition rules, and post-processing workflows. The course includes hands-on assignments and personalized feedback from professional photographers.',
    category: 'Photography',
    rating: 4.8,
    reviews: 1098,
    instructor: 'David Martinez',
    duration: '12 weeks',
    level: 'Intermediate',
    tags: ['Photography', 'Portrait', 'Landscape', 'Lighting'],
    features: [
      'Camera settings and manual mode',
      'Portrait lighting techniques',
      'Landscape composition rules',
      'Post-processing with Lightroom',
      'Professional equipment recommendations',
      'Portfolio development and critique'
    ]
  }
];

export const mockUser: User = {
  id: 'user123',
  name: 'John Doe',
  preferences: ['Programming', 'Language Learning', 'Design'],
  viewHistory: ['1', '2', '3'],
  favorites: ['1', '4']
};

export const mockSuggestions = [
  {
    id: '9',
    name: 'Advanced JavaScript ES6+ Features',
    price: 890000,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Master modern JavaScript with ES6+ features and best practices.',
    fullDescription: 'Deep dive into modern JavaScript features including async/await, generators, decorators, and more.',
    category: 'Programming',
    rating: 4.7,
    reviews: 654,
    instructor: 'Robert Kim',
    duration: '8 weeks',
    level: 'Advanced' as const,
    tags: ['JavaScript', 'ES6+', 'Web Development'],
    features: ['Modern JS features', 'Best practices', 'Real-world examples']
  },
  {
    id: '10',
    name: 'Business English for Professionals',
    price: 720000,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Professional English communication for business environments.',
    fullDescription: 'Learn professional business English communication skills for meetings, presentations, and negotiations.',
    category: 'Language Learning',
    rating: 4.6,
    reviews: 432,
    instructor: 'Jennifer White',
    duration: '10 weeks',
    level: 'Intermediate' as const,
    tags: ['Business English', 'Professional Communication', 'ESL'],
    features: ['Business vocabulary', 'Email writing', 'Presentation skills']
  }
];