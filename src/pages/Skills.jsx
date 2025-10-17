import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaMobile, FaMicrochip, FaBrain, FaTools } from 'react-icons/fa';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const iconMap = {
    'code': FaCode,
    'server': FaServer,
    'database': FaDatabase,
    'mobile': FaMobile,
    'microchip': FaMicrochip,
    'brain': FaBrain,
    'tools': FaTools
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Intermediate':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Beginner':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Advanced':
        return 'w-5/6';
      case 'Intermediate':
        return 'w-3/5';
      case 'Beginner':
        return 'w-2/5';
      default:
        return 'w-1/5';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Skills - Rusith Fernando | Technical Expertise</title>
        <meta 
          name="description" 
          content="Explore Rusith Fernando's technical skills including frontend development, backend technologies, databases, mobile development, IoT, and AI/ML expertise." 
        />
        <meta 
          name="keywords" 
          content="Rusith Fernando skills, React, Node.js, Python, Arduino, IoT, AI, Machine Learning, Web Development" 
        />
      </Helmet>

      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                My <span className="text-gradient">Skills</span>
              </h1>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                A comprehensive overview of my technical expertise across various 
                domains including web development, IoT systems, and emerging technologies.
              </p>
            </motion.div>

            {/* Skills Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillsData.map((category, categoryIndex) => {
                const IconComponent = iconMap[category.icon] || FaCode;
                
                return (
                  <motion.div
                    key={category.category}
                    variants={categoryVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="bg-surface rounded-2xl p-8 border border-gray-800 hover:border-primary-500/50 transition-all duration-300"
                  >
                    {/* Category Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-heading font-bold">{category.category}</h2>
                        <p className="text-text-muted text-sm">
                          {category.skills.length} skills
                        </p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-text-primary group-hover:text-primary-500 transition-colors duration-300">
                              {skill.name}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                              className={`h-full bg-gradient-to-r from-primary-500 to-secondary-400 rounded-full ${getLevelWidth(skill.level)}`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Skills Summary */}
            <motion.div
              variants={itemVariants}
              className="mt-16 bg-surface rounded-2xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-heading font-bold mb-6 text-center">
                Skills <span className="text-gradient">Overview</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCode className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Frontend Development</h3>
                  <p className="text-text-muted">
                    Proficient in modern frontend technologies including React, JavaScript, 
                    and responsive design principles.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaServer className="w-8 h-8 text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Backend & APIs</h3>
                  <p className="text-text-muted">
                    Experienced in building scalable backend systems with Node.js, 
                    Python, and database management.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMicrochip className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">IoT & Hardware</h3>
                  <p className="text-text-muted">
                    Specialized in IoT development with Arduino, sensors, and 
                    embedded systems programming.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Learning Journey */}
            <motion.div
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl font-heading font-bold mb-6">
                Continuous <span className="text-gradient">Learning</span>
              </h2>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-8">
                I believe in continuous learning and staying updated with the latest 
                technologies. Currently exploring advanced AI/ML concepts, cloud 
                computing, and modern DevOps practices.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['Docker', 'Kubernetes', 'AWS', 'TensorFlow', 'GraphQL', 'TypeScript'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gray-800 text-text-muted rounded-full border border-gray-700 hover:border-primary-500/50 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
