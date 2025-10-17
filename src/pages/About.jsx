import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaEye } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Katuneriya, Sri Lanka',
      link: null
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'prabodhawith@gmail.com',
      link: 'mailto:prabodhawith@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 769782381',
      link: 'tel:+94769782381'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'IT21278280',
      link: 'https://github.com/IT21278280'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Rusith Fernando',
      link: 'https://www.linkedin.com/in/rusith-fernando-aaa77a215/'
    }
  ];

  const skills = [
    'React & Next.js',
    'Node.js & Express',
    'Python & TensorFlow',
    'MongoDB & MySQL',
    'Arduino & IoT',
    'Git & GitHub',
    'TailwindCSS',
    'Firebase'
  ];

  return (
    <>
      <Helmet>
        <title>About - Rusith Fernando | Software Engineer</title>
        <meta 
          name="description" 
          content="Learn more about Rusith Fernando, a passionate Software Engineer from Sri Lanka specializing in web development, IoT, and AI technologies." 
        />
        <meta 
          name="keywords" 
          content="About Rusith Fernando, Software Engineer, SLIIT, Sri Lanka, Web Developer, IoT Developer" 
        />
      </Helmet>

      <div className="min-h-screen pt-24 pb-12 bg-background dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Profile Image & Quick Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-2xl blur-lg opacity-30"></div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-500 to-secondary-400 mb-6">
                      <img
                        src="/assets/images/profile-photo.jpg"
                        alt="Rusith Fernando"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="192" height="192" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100%" height="100%" fill="#1e293b"/>
                              <circle cx="96" cy="72" r="30" fill="#00f7a4"/>
                              <rect x="66" y="120" width="60" height="48" rx="6" fill="#00f7a4"/>
                              <text x="96" y="180" text-anchor="middle" fill="#e2e8f0" font-family="Arial" font-size="12">Rusith Fernando</text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-gradient mb-2">
                      Rusith Fernando
                    </h2>
                    <p className="text-text-muted mb-4">
                      Software Engineer & Full-Stack Developer
                    </p>
                    <p className="text-sm text-text-muted">
                      Currently pursuing B.Sc. in Information Technology at SLIIT
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Quick Contact Info */}
              <motion.div
                variants={itemVariants}
                className="bg-surface rounded-2xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-heading font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-500/10 rounded-lg">
                        <info.icon className="w-4 h-4 text-primary-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-text-muted">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-text-primary hover:text-primary-500 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-text-primary">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Skills Snapshot */}
              <motion.div
                variants={itemVariants}
                className="bg-surface rounded-2xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-heading font-semibold mb-4">Skills Snapshot</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm border border-primary-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Biography & CV */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Biography */}
              <div className="bg-surface rounded-2xl p-8 border border-gray-800">
                <h2 className="text-3xl font-heading font-bold mb-6">About Me</h2>
                
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    I'm a passionate Software Engineer currently pursuing my Bachelor's degree 
                    in Information Technology at Sri Lanka Institute of Information Technology (SLIIT). 
                    With a strong foundation in both theoretical knowledge and practical experience, 
                    I specialize in creating innovative solutions through modern web technologies, 
                    IoT systems, and AI applications.
                  </p>
                  
                  <p>
                    Currently working as a Software Engineer Intern at OXZON AI, I've had the 
                    opportunity to contribute to cutting-edge projects while developing my skills 
                    in React, Node.js, and machine learning technologies. My experience spans 
                    from building responsive web applications to developing IoT-based systems 
                    for real-world problem solving.
                  </p>
                  
                  <p>
                    My final year project, "Real-Time Vehicle Horn Detection and Alert System," 
                    showcases my ability to combine hardware and software solutions to address 
                    accessibility challenges. This project demonstrates my passion for using 
                    technology to make a positive impact on people's lives.
                  </p>
                  
                  <p>
                    I'm always eager to learn new technologies, collaborate with talented teams, 
                    and contribute to meaningful projects that push the boundaries of what's 
                    possible with modern software development.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-background rounded-xl border border-gray-800">
                  <h3 className="text-lg font-heading font-semibold mb-3">Career Objective</h3>
                  <p className="text-text-muted">
                    To leverage my technical skills and passion for innovation in a dynamic 
                    software engineering role where I can contribute to impactful projects, 
                    continue learning cutting-edge technologies, and grow as a professional 
                    while making meaningful contributions to the tech industry.
                  </p>
                </div>
              </div>

              {/* CV Download Section */}
              <motion.div
                variants={itemVariants}
                className="bg-surface rounded-2xl p-8 border border-gray-800"
              >
                <h3 className="text-2xl font-heading font-semibold mb-4">Download My CV</h3>
                <p className="text-text-muted mb-6">
                  Get a comprehensive overview of my education, experience, and skills.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center group"
                  >
                    <FaDownload className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Download CV
                  </a>
                  
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center group"
                  >
                    <FaEye className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Preview CV
                  </a>
                </div>
                
                <div className="mt-4 text-sm text-text-muted">
                  <p>PDF • Last updated: October 2024 • 2.1 MB</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
