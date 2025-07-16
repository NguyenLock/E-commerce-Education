import type { Product, User, Review } from '../types/index';

const mockReviews: Review[] = [
  {
    id: 'r1',
    userId: 'u1',
    userName: 'Minh Anh',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    comment: 'Khóa học rất hay và chi tiết. Giảng viên nhiệt tình và dễ hiểu.',
    date: '2024-03-15',
    helpful: 12
  },
  {
    id: 'r2',
    userId: 'u2',
    userName: 'Hoàng Nam',
    userAvatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4,
    comment: 'Nội dung phong phú, tuy nhiên cần thêm bài tập thực hành.',
    date: '2024-03-10',
    helpful: 8
  },
  {
    id: 'r3',
    userId: 'u3',
    userName: 'Thu Hà',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    comment: 'Tuyệt vời! Đã học được nhiều kiến thức mới.',
    date: '2024-03-05',
    helpful: 15
  }
];

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
    instructor: {
      name: 'Sarah Johnson',
      title: 'TESOL Certified English Instructor',
      avatar: 'https://i.pravatar.cc/150?img=4',
      bio: '10+ years experience teaching English to international students'
    },
    duration: '12 weeks',
    level: 'Intermediate',
    tags: ['English', 'Speaking', 'Conversation', 'Native Speaker'],
    features: [
      'Live 1-on-1 sessions with native speakers',
      'Personalized learning path',
      'Real-time pronunciation feedback',
      'Conversation practice groups',
      'Certificate of completion'
    ],
    reviewList: mockReviews
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
    instructor: {
      name: 'Michael Chen',
      title: 'Senior Frontend Developer',
      avatar: 'https://i.pravatar.cc/150?img=5',
      bio: 'Frontend architect with expertise in React and TypeScript'
    },
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
    ],
    reviewList: mockReviews
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
    instructor: {
      name: 'Emma Rodriguez',
      title: 'Digital Marketing Strategist',
      avatar: 'https://i.pravatar.cc/150?img=6',
      bio: 'Former Google Ads specialist with proven track record in digital marketing'
    },
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
    ],
    reviewList: mockReviews
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
    instructor: {
      name: 'Dr. James Wilson',
      title: 'Data Science Lead',
      avatar: 'https://i.pravatar.cc/150?img=7',
      bio: 'PhD in Machine Learning with extensive industry experience'
    },
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
    ],
    reviewList: mockReviews
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
    instructor: {
      name: 'Lisa Park',
      title: 'Senior UX Designer',
      avatar: 'https://i.pravatar.cc/150?img=8',
      bio: 'Award-winning designer with experience at top tech companies'
    },
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
    ],
    reviewList: mockReviews
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
    instructor: {
      name: 'Tanaka Hiroshi',
      title: 'Japanese Language Specialist',
      avatar: 'https://i.pravatar.cc/150?img=9',
      bio: 'Native Japanese speaker with 12+ years of teaching experience'
    },
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
    ],
    reviewList: mockReviews
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
    instructor: {
      name: 'Alex Thompson',
      title: 'Blockchain Developer',
      avatar: 'https://i.pravatar.cc/150?img=10',
      bio: 'Blockchain expert with multiple successful DApp projects'
    },
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
    ],
    reviewList: mockReviews
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
    instructor: {
      name: 'David Martinez',
      title: 'Professional Photographer',
      avatar: 'https://i.pravatar.cc/150?img=18',
      bio: 'Award-winning photographer with 15+ years of experience'
    },
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
    ],
    reviewList: mockReviews
  },
  {
    id: '9',
    name: 'Full Stack Web Development Bootcamp',
    price: 2100000,
    originalPrice: 2800000,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Comprehensive bootcamp covering frontend, backend, and DevOps.',
    fullDescription: 'Become a full-stack developer in this intensive bootcamp. Learn modern frontend frameworks, backend development, database management, and DevOps practices. Build real-world projects and deploy them to production.',
    category: 'Programming',
    rating: 4.9,
    reviews: 567,
    instructor: {
      name: 'David Kim',
      title: 'Senior Full Stack Developer',
      avatar: 'https://i.pravatar.cc/150?img=11',
      bio: 'Tech lead at a major tech company with 8+ years of teaching experience'
    },
    duration: '24 weeks',
    level: 'Advanced',
    tags: ['Web Development', 'Full Stack', 'JavaScript', 'Node.js', 'React'],
    features: [
      'Frontend development with React',
      'Backend development with Node.js',
      'Database design and management',
      'DevOps and deployment',
      'Real-world project portfolio',
      'Job interview preparation'
    ],
    reviewList: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Đức Anh',
        userAvatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        comment: 'Khóa học rất thực tế, giúp tôi tìm được việc làm ngay sau khi hoàn thành.',
        date: '2024-03-01',
        helpful: 20
      },
      {
        id: 'r5',
        userId: 'u5',
        userName: 'Thanh Thảo',
        userAvatar: 'https://i.pravatar.cc/150?img=13',
        rating: 5,
        comment: 'Giảng viên nhiệt tình, kiến thức cập nhật với xu hướng hiện tại.',
        date: '2024-02-28',
        helpful: 15
      }
    ]
  },
  {
    id: '10',
    name: 'Financial Trading and Investment Strategies',
    price: 1500000,
    originalPrice: 1900000,
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Learn professional trading strategies and investment analysis.',
    fullDescription: 'Master the art of financial trading and investment with this comprehensive course. Learn technical analysis, fundamental analysis, risk management, and portfolio optimization. Get hands-on experience with real market data and trading simulations.',
    category: 'Finance',
    rating: 4.7,
    reviews: 423,
    instructor: {
      name: 'Robert Chen',
      title: 'Certified Financial Analyst',
      avatar: 'https://i.pravatar.cc/150?img=14',
      bio: '15+ years of experience in financial markets and investment banking'
    },
    duration: '16 weeks',
    level: 'Intermediate',
    tags: ['Trading', 'Investment', 'Finance', 'Stock Market'],
    features: [
      'Technical analysis techniques',
      'Fundamental analysis',
      'Risk management strategies',
      'Portfolio optimization',
      'Trading psychology',
      'Live market analysis sessions'
    ],
    reviewList: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Minh Tuấn',
        userAvatar: 'https://i.pravatar.cc/150?img=15',
        rating: 4,
        comment: 'Kiến thức chuyên sâu và thực tế, rất hữu ích cho người mới bắt đầu.',
        date: '2024-03-12',
        helpful: 18
      }
    ]
  },
  {
    id: '11',
    name: 'Digital Art and Illustration Masterclass',
    price: 780000,
    originalPrice: 990000,
    image: 'https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Create stunning digital artwork using professional tools and techniques.',
    fullDescription: 'Transform your artistic vision into stunning digital creations. Learn professional techniques for digital painting, character design, and concept art using industry-standard tools like Photoshop and Procreate.',
    category: 'Design',
    rating: 4.8,
    reviews: 689,
    instructor: {
      name: 'Maria Garcia',
      title: 'Professional Digital Artist',
      avatar: 'https://i.pravatar.cc/150?img=16',
      bio: 'Award-winning digital artist with work featured in major publications'
    },
    duration: '14 weeks',
    level: 'Beginner',
    tags: ['Digital Art', 'Illustration', 'Character Design', 'Concept Art'],
    features: [
      'Digital painting techniques',
      'Character design fundamentals',
      'Color theory and composition',
      'Workflow optimization',
      'Industry insights',
      'Portfolio development'
    ],
    reviewList: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Hồng Nhung',
        userAvatar: 'https://i.pravatar.cc/150?img=17',
        rating: 5,
        comment: 'Khóa học giúp tôi phát triển phong cách vẽ riêng của mình.',
        date: '2024-03-08',
        helpful: 22
      }
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