import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaCode, FaRobot, FaMicrochip, FaDatabase, FaCloud, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'IoT Enthusiast',
    'AI Explorer'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Animated Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-primary-500/20"
        >
          <FaCode className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0, 3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-20 text-secondary-400/20"
        >
          <FaRobot className="w-10 h-10" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-20 text-blue-400/20"
        >
          <FaMicrochip className="w-6 h-6" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 right-10 text-green-400/20"
        >
          <FaDatabase className="w-7 h-7" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-7/12 text-purple-400/20"
        >
          <FaCloud className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0, -15, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute top-1/3 right-1/3 text-orange-400/20"
        >
          <FaRocket className="w-9 h-9" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-6">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-text-primary dark:text-slate-200"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">Rusith Fernando</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-400 mb-8 min-h-[2rem] flex items-center justify-center lg:justify-start"
            >
              <span className="text-primary-500">{displayText}</span>
              <span className="animate-pulse ml-1">|</span>

              {/* Role-specific animated icons */}
              {displayText.includes('Software Engineer') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="ml-3"
                >
                  <FaCode className="w-6 h-6 text-primary-500 animate-bounce" />
                </motion.div>
              )}
              {displayText.includes('Full-Stack Developer') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="ml-3"
                >
                  <FaDatabase className="w-6 h-6 text-secondary-400 animate-pulse" />
                </motion.div>
              )}
              {displayText.includes('IoT Enthusiast') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="ml-3"
                >
                  <FaMicrochip className="w-6 h-6 text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
                </motion.div>
              )}
              {displayText.includes('AI Explorer') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="ml-3"
                >
                  <FaRobot className="w-6 h-6 text-green-400 animate-bounce" />
                </motion.div>
              )}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 mb-8 max-w-2xl"
            >
              Passionate about creating innovative solutions through web development, 
              IoT, and AI technologies. Currently pursuing my degree in Information 
              Technology while gaining hands-on experience as a Software Engineer Intern.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="group relative bg-gradient-to-r from-primary-500 to-secondary-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 inline-flex items-center justify-center overflow-hidden border-2"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center">
                    View My Projects
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </span>

                  {/* Button shine effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative border-white to-secondary-400 text-primary-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white hover:border-primary-600 inline-flex items-center justify-center overflow-hidden border-2"
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FaDownload className="mr-2 w-5 h-5" />
                  </motion.div>
                  <span className="relative z-10">Download CV</span>

                  {/* Hover background animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute inset-0 bg-primary-500 rounded-xl"
                  />
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-4"
            >
              <motion.a
                href="https://github.com/IT21278280"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-primary-500 transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 overflow-hidden"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaGithub className="w-6 h-6 group-hover:text-primary-500 transition-colors duration-300" />
                </motion.div>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-primary-500/20 rounded-xl"
                />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rusith-fernando-aaa77a215/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 overflow-hidden"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaLinkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.div>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-blue-500/20 rounded-xl"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end relative"
          >
            {/* Decorative floating elements around profile */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-8 -left-8 text-primary-500/30"
            >
              <FaCode className="w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 text-secondary-400/30"
            >
              <FaRobot className="w-5 h-5" />
            </motion.div>

            <motion.div
              animate={{
                x: [0, 8, 0, -8, 0],
                y: [0, -5, 0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 text-blue-400/30"
            >
              <FaMicrochip className="w-4 h-4" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -right-4 text-green-400/30"
            >
              <FaDatabase className="w-5 h-5" />
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-500 to-secondary-400 shadow-2xl"
              >
                <img
                  src="/assets/images/profile-photo.jpg"
                  alt="Rusith Fernando"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#1e293b"/>
                        <circle cx="160" cy="120" r="50" fill="#00f7a4"/>
                        <rect x="110" y="200" width="100" height="80" rx="10" fill="#00f7a4"/>
                        <text x="160" y="280" text-anchor="middle" fill="#e2e8f0" font-family="Arial" font-size="16">Rusith Fernando</text>
                      </svg>
                    `)}`;
                  }}
                />

                {/* Image overlay animations */}
                <motion.div
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-8 h-12 border-2 border-primary-500 rounded-full flex justify-center items-start pt-2 hover:border-secondary-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-4 bg-gradient-to-b from-primary-500 to-secondary-400 rounded-full"
            />

            {/* Pulsing rings */}
            <motion.div
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 border border-primary-500/30 rounded-full"
            />
          </motion.div>

          {/* Scroll hint text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="text-center text-sm text-slate-400 mt-2"
          >
          
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
