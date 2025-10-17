export const experienceData = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'OXZON AI',
    location: 'Remote',
    duration: 'July 2024 - April 2025',
    type: 'Internship',
    description: 'Working as a Software Engineer Intern at OXZON AI, contributing to cutting-edge AI solutions and software development projects.',
    responsibilities: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Participated in code reviews and implemented best practices for clean, maintainable code',
      'Worked on AI integration projects and machine learning model deployment',
      'Contributed to the development of user-friendly interfaces and improved user experience',
      'Assisted in testing and debugging applications to ensure optimal performance',
      'Participated in agile development processes and sprint planning sessions'
    ],
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'Git', 'Docker'],
    achievements: [
      'Successfully delivered 3 major feature implementations ahead of schedule',
      'Improved application performance by 25% through code optimization',
      'Mentored 2 junior developers on React best practices'
    ],
    current: true
  }
];

export const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Technology',
    specialization: 'Software Engineering',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Malabe, Sri Lanka',
    duration: '2021 - 2025',
    gpa: '3.7/4.0',
    status: 'Final Year',
    description: 'Pursuing a comprehensive degree in Information Technology with a specialization in Software Engineering, focusing on modern software development practices, AI, and IoT technologies.',
    coursework: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Software Engineering Principles',
      'Web Technologies',
      'Mobile Application Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Networks',
      'Cybersecurity Fundamentals',
      'IoT and Embedded Systems',
      'Project Management'
    ],
    projects: [
      'Real-Time Vehicle Horn Detection and Alert System (Final Year Project)',
      'E-Commerce Platform Development',
      'AI-Powered Chatbot System',
      'Mobile Task Management Application'
    ],
    achievements: [
      'Dean\'s List for Academic Excellence (2022, 2023)',
      'Best Final Year Project Nomination (2024)',
      'Active member of SLIIT Computing Society',
      'Participated in multiple hackathons and coding competitions'
    ],
    current: true
  },
  {
    id: 2,
    degree: 'Advanced Level (A/L)',
    specialization: 'Mathematics Stream',
    institution: 'Nalanda College',
    location: 'Colombo, Sri Lanka',
    duration: '2019 - 2020',
    results: 'Mathematics (A), Physics (B), Chemistry (B)',
    status: 'Completed',
    description: 'Completed Advanced Level education in Mathematics stream with strong performance in core science subjects.',
    subjects: [
      'Combined Mathematics',
      'Physics',
      'Chemistry',
      'General English',
      'General Information Technology'
    ],
    achievements: [
      'School Mathematics Olympiad - 2nd Place',
      'Science Fair - Best Innovation Award',
      'Prefect - Head of IT Society'
    ],
    current: false
  }
];

export const certificationsData = [
  {
    id: 1,
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    status: 'In Progress',
    credentialId: null,
    description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.'
  },
  {
    id: 2,
    name: 'Google Analytics Certified',
    issuer: 'Google',
    date: '2023',
    status: 'Completed',
    credentialId: 'GA-2023-RF-001',
    description: 'Proficiency in Google Analytics for web analytics and data interpretation.'
  },
  {
    id: 3,
    name: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    status: 'Completed',
    credentialId: 'META-REACT-2023-789',
    description: 'Advanced React development skills including hooks, context, and performance optimization.'
  }
];

export const getCurrentExperience = () => {
  return experienceData.filter(exp => exp.current);
};

export const getCurrentEducation = () => {
  return educationData.filter(edu => edu.current);
};

export const getCompletedCertifications = () => {
  return certificationsData.filter(cert => cert.status === 'Completed');
};
