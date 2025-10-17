export const skillsData = [
  {
    category: 'Frontend Development',
    icon: 'code',
    skills: [
      { name: 'React', level: 'Advanced', icon: 'react' },
      { name: 'JavaScript', level: 'Advanced', icon: 'js' },
      { name: 'TypeScript', level: 'Intermediate', icon: 'typescript' },
      { name: 'HTML5', level: 'Advanced', icon: 'html5' },
      { name: 'CSS3', level: 'Advanced', icon: 'css3' },
      { name: 'TailwindCSS', level: 'Advanced', icon: 'tailwind' },
      { name: 'Material-UI', level: 'Intermediate', icon: 'material-ui' },
      { name: 'Framer Motion', level: 'Intermediate', icon: 'framer' }
    ]
  },
  {
    category: 'Backend Development',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 'Advanced', icon: 'nodejs' },
      { name: 'Express.js', level: 'Advanced', icon: 'express' },
      { name: 'Python', level: 'Intermediate', icon: 'python' },
      { name: 'Java', level: 'Intermediate', icon: 'java' },
      { name: 'C++', level: 'Intermediate', icon: 'cpp' },
      { name: 'REST APIs', level: 'Advanced', icon: 'api' },
      { name: 'GraphQL', level: 'Beginner', icon: 'graphql' }
    ]
  },
  {
    category: 'Database & Cloud',
    icon: 'database',
    skills: [
      { name: 'MongoDB', level: 'Advanced', icon: 'mongodb' },
      { name: 'MySQL', level: 'Intermediate', icon: 'mysql' },
      { name: 'Firebase', level: 'Advanced', icon: 'firebase' },
      { name: 'AWS', level: 'Beginner', icon: 'aws' },
      { name: 'Google Cloud', level: 'Beginner', icon: 'gcp' },
      { name: 'Redis', level: 'Beginner', icon: 'redis' }
    ]
  },
  {
    category: 'Mobile Development',
    icon: 'mobile',
    skills: [
      { name: 'React Native', level: 'Intermediate', icon: 'react-native' },
      { name: 'Flutter', level: 'Beginner', icon: 'flutter' },
      { name: 'Android Studio', level: 'Intermediate', icon: 'android' },
      { name: 'iOS Development', level: 'Beginner', icon: 'ios' }
    ]
  },
  {
    category: 'IoT & Hardware',
    icon: 'microchip',
    skills: [
      { name: 'Arduino', level: 'Advanced', icon: 'arduino' },
      { name: 'Raspberry Pi', level: 'Intermediate', icon: 'raspberry-pi' },
      { name: 'ESP32/ESP8266', level: 'Intermediate', icon: 'esp32' },
      { name: 'Sensors & Actuators', level: 'Advanced', icon: 'sensors' },
      { name: 'Circuit Design', level: 'Intermediate', icon: 'circuit' },
      { name: 'PCB Design', level: 'Beginner', icon: 'pcb' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: 'brain',
    skills: [
      { name: 'TensorFlow', level: 'Intermediate', icon: 'tensorflow' },
      { name: 'PyTorch', level: 'Beginner', icon: 'pytorch' },
      { name: 'Scikit-learn', level: 'Intermediate', icon: 'sklearn' },
      { name: 'OpenCV', level: 'Intermediate', icon: 'opencv' },
      { name: 'Natural Language Processing', level: 'Beginner', icon: 'nlp' },
      { name: 'Computer Vision', level: 'Beginner', icon: 'cv' }
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: 'tools',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', icon: 'git' },
      { name: 'Docker', level: 'Beginner', icon: 'docker' },
      { name: 'VS Code', level: 'Advanced', icon: 'vscode' },
      { name: 'Postman', level: 'Advanced', icon: 'postman' },
      { name: 'Figma', level: 'Intermediate', icon: 'figma' },
      { name: 'Jira', level: 'Intermediate', icon: 'jira' },
      { name: 'Slack', level: 'Advanced', icon: 'slack' }
    ]
  }
];

export const getSkillsByCategory = (category) => {
  return skillsData.find(skillGroup => skillGroup.category === category)?.skills || [];
};

export const getAllSkills = () => {
  return skillsData.flatMap(category => category.skills);
};

export const getSkillCategories = () => {
  return skillsData.map(category => category.category);
};
