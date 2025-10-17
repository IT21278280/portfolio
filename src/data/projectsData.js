export const projectsData = [
  {
    id: 'horn-detection',
    slug: 'horn-detection',
    title: 'Real-Time Vehicle Horn Detection and Alert System',
    shortDescription: 'IoT-based system using Arduino and MEMS microphones to detect vehicle horns and alert deaf drivers through visual and vibration feedback.',
    description: `A comprehensive IoT solution designed to enhance road safety for deaf and hard-of-hearing drivers. The system uses advanced audio processing techniques with MEMS microphones and Arduino to detect vehicle horn sounds in real-time and provide immediate alerts through multiple sensory channels.`,
    features: [
      'Real-time audio processing and horn detection',
      'Multi-sensor MEMS microphone array',
      'Visual LED alert system',
      'Vibration feedback mechanism',
      'Low-power Arduino-based design',
      'Noise filtering and false positive reduction',
      'Adjustable sensitivity settings',
      'Compact dashboard-mountable design'
    ],
    technologies: ['Arduino', 'C++', 'MEMS Microphones', 'Signal Processing', 'IoT', 'Electronics Design'],
    role: 'Lead Developer & Researcher',
    duration: '8 months (Final Year Project)',
    status: 'Completed',
    category: 'IoT & Hardware',
    images: [
      '/assets/projects/horn-detection/hero.jpg',
      '/assets/projects/horn-detection/circuit.jpg',
      '/assets/projects/horn-detection/prototype.jpg',
      '/assets/projects/horn-detection/testing.jpg'
    ],
    attachments: [
      {
        name: 'Final Report',
        filename: 'horn-detection-final-report.pdf',
        url: '/assets/projects/horn-detection/final-report.pdf',
        type: 'pdf',
        size: '2.5 MB'
      },
      {
        name: 'Research Poster',
        filename: 'research-poster.pdf',
        url: '/assets/projects/horn-detection/poster.pdf',
        type: 'pdf',
        size: '1.2 MB'
      }
    ],
    github: 'https://github.com/IT21278280/horn-detection-system',
    demo: null,
    featured: true
  },
  {
    id: 'ecommerce-platform',
    slug: 'ecommerce-platform',
    title: 'Full-Stack E-Commerce Platform',
    shortDescription: 'Modern e-commerce solution built with React, Node.js, and MongoDB featuring advanced product management and secure payment processing.',
    description: `A comprehensive e-commerce platform designed for modern online retail. Built with a microservices architecture, the platform supports multiple vendors, advanced inventory management, and seamless payment processing. Features include real-time inventory updates, order tracking, and an intuitive admin dashboard.`,
    features: [
      'Multi-vendor marketplace support',
      'Real-time inventory management',
      'Secure payment gateway integration',
      'Advanced search and filtering',
      'Order tracking and notifications',
      'Responsive admin dashboard',
      'User authentication and authorization',
      'Shopping cart and wishlist functionality'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT', 'Redux', 'Material-UI'],
    role: 'Full-Stack Developer',
    duration: '4 months',
    status: 'In Development',
    category: 'Web Development',
    images: [
      '/assets/projects/ecommerce/hero.jpg',
      '/assets/projects/ecommerce/dashboard.jpg',
      '/assets/projects/ecommerce/products.jpg',
      '/assets/projects/ecommerce/checkout.jpg'
    ],
    attachments: [],
    github: 'https://github.com/IT21278280/ecommerce-platform',
    demo: 'https://ecommerce-demo.rusithfernando.dev',
    featured: true
  },
  {
    id: 'task-management',
    slug: 'task-management',
    title: 'Collaborative Task Management App',
    shortDescription: 'Team collaboration tool with real-time updates, project tracking, and advanced analytics built with React and Firebase.',
    description: `A modern task management application designed for team collaboration. Features real-time synchronization, project analytics, and intuitive drag-and-drop interfaces. Built with performance and user experience in mind.`,
    features: [
      'Real-time collaboration',
      'Drag-and-drop task management',
      'Project analytics and reporting',
      'Team member management',
      'File attachments and comments',
      'Deadline tracking and notifications',
      'Custom project templates',
      'Mobile-responsive design'
    ],
    technologies: ['React', 'Firebase', 'Material-UI', 'Chart.js', 'React DnD'],
    role: 'Frontend Developer',
    duration: '3 months',
    status: 'Completed',
    category: 'Web Development',
    images: [
      '/assets/projects/task-management/hero.jpg',
      '/assets/projects/task-management/board.jpg',
      '/assets/projects/task-management/analytics.jpg'
    ],
    attachments: [],
    github: 'https://github.com/IT21278280/task-management',
    demo: 'https://tasks.rusithfernando.dev',
    featured: false
  },
  {
    id: 'weather-app',
    slug: 'weather-app',
    title: 'Weather Forecast Application',
    shortDescription: 'Beautiful weather app with location-based forecasts, interactive maps, and severe weather alerts.',
    description: `A comprehensive weather application providing accurate forecasts, interactive weather maps, and severe weather notifications. Features a clean, intuitive interface with detailed weather metrics and historical data.`,
    features: [
      'Location-based weather forecasts',
      'Interactive weather maps',
      'Severe weather alerts',
      'Historical weather data',
      'Multiple location tracking',
      'Weather widgets and charts',
      'Offline data caching',
      'Dark/light theme support'
    ],
    technologies: ['React Native', 'OpenWeather API', 'Maps SDK', 'AsyncStorage'],
    role: 'Mobile Developer',
    duration: '2 months',
    status: 'Completed',
    category: 'Mobile Development',
    images: [
      '/assets/projects/weather/hero.jpg',
      '/assets/projects/weather/forecast.jpg',
      '/assets/projects/weather/maps.jpg'
    ],
    attachments: [],
    github: 'https://github.com/IT21278280/weather-app',
    demo: null,
    featured: false
  },
  {
    id: 'portfolio-website',
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    shortDescription: 'Modern, responsive portfolio website built with React and TailwindCSS featuring dark mode and smooth animations.',
    description: `A professional portfolio website showcasing projects, skills, and experience. Built with modern web technologies and optimized for performance and accessibility. Features include dark mode, smooth animations, and a content management system.`,
    features: [
      'Responsive design',
      'Dark/light mode toggle',
      'Smooth animations',
      'Project showcase',
      'Contact form integration',
      'SEO optimization',
      'Performance optimized',
      'Accessibility compliant'
    ],
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Vite', 'EmailJS'],
    role: 'Frontend Developer',
    duration: '1 month',
    status: 'Completed',
    category: 'Web Development',
    images: [
      '/assets/projects/portfolio/hero.jpg',
      '/assets/projects/portfolio/projects.jpg',
      '/assets/projects/portfolio/contact.jpg'
    ],
    attachments: [],
    github: 'https://github.com/IT21278280/portfolio',
    demo: 'https://rusithfernando.dev',
    featured: false
  },
  {
    id: 'ai-chatbot',
    slug: 'ai-chatbot',
    title: 'AI-Powered Customer Service Chatbot',
    shortDescription: 'Intelligent chatbot using natural language processing for automated customer support with sentiment analysis.',
    description: `An advanced AI chatbot system designed for customer service automation. Utilizes natural language processing and machine learning to provide intelligent responses, sentiment analysis, and seamless handoff to human agents when needed.`,
    features: [
      'Natural language understanding',
      'Sentiment analysis',
      'Multi-language support',
      'Human agent handoff',
      'Conversation analytics',
      'Custom knowledge base',
      'Integration APIs',
      'Real-time learning'
    ],
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'MongoDB', 'WebSocket'],
    role: 'AI Developer',
    duration: '5 months',
    status: 'In Development',
    category: 'AI & Machine Learning',
    images: [
      '/assets/projects/chatbot/hero.jpg',
      '/assets/projects/chatbot/interface.jpg',
      '/assets/projects/chatbot/analytics.jpg'
    ],
    attachments: [],
    github: 'https://github.com/IT21278280/ai-chatbot',
    demo: null,
    featured: true
  }
];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category);
};

export const getProjectCategories = () => {
  return [...new Set(projectsData.map(project => project.category))];
};
