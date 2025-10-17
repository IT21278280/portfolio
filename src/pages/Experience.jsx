import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaTrophy, FaCode } from 'react-icons/fa';
import { experienceData } from '../data/experienceData';

const Experience = () => {
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

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Experience - Rusith Fernando | Professional Journey</title>
        <meta 
          name="description" 
          content="Explore Rusith Fernando's professional experience including his role as Software Engineer Intern at OXZON AI and key achievements." 
        />
        <meta 
          name="keywords" 
          content="Rusith Fernando experience, OXZON AI, Software Engineer Intern, professional journey, career" 
        />
      </Helmet>

      <div className="min-h-screen pt-24 pb-12 bg-background dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-text-primary dark:text-white">
                Professional <span className="text-gradient">Experience</span>
              </h1>
              <p className="text-xl text-text-muted dark:text-slate-300 max-w-3xl mx-auto">
                My journey in software engineering, showcasing the roles, responsibilities, 
                and achievements that have shaped my professional development.
              </p>
            </motion.div>

            {/* Experience Cards */}
            <div className="space-y-8 mb-16">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="w-full max-w-none"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="card"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary-500/10 rounded-lg">
                          <FaBriefcase className="w-6 h-6 text-primary-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-text-primary dark:text-white">{experience.title}</h3>
                          <p className="text-lg text-primary-500 font-medium">{experience.company}</p>
                          <p className="text-text-muted dark:text-slate-300">{experience.location}</p>
                        </div>
                      </div>
                      {experience.current && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-text-muted dark:text-slate-300">
                        <FaCalendarAlt className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-text-muted dark:text-slate-300">
                        <FaMapMarkerAlt className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-muted dark:text-slate-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Dynamic Alternating Layout */}
                    <div className="space-y-6">
                      {/* Responsibilities - Left Aligned */}
                      {experience.responsibilities && (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center">
                              <FaCheckCircle className="w-5 h-5 text-primary-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xl font-heading font-bold mb-3 text-text-primary dark:text-white">
                                Key Responsibilities
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {experience.responsibilities.map((responsibility, respIndex) => (
                                  <motion.div
                                    key={respIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: respIndex * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group flex items-start space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-slate-600 transition-all duration-300"
                                  >
                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-primary-600 transition-colors duration-300"></div>
                                    <span className="text-slate-700 dark:text-slate-200 text-sm font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">{responsibility}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Technologies - Right Aligned */}
                      {experience.technologies && (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="relative flex items-start space-x-4"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap gap-2 justify-end">
                              {experience.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                  viewport={{ once: true }}
                                  className="px-4 py-2 bg-gradient-to-r from-secondary-400/10 to-primary-500/10 hover:from-secondary-400/20 hover:to-primary-500/20 text-secondary-700 dark:text-secondary-300 rounded-lg text-sm font-semibold border border-secondary-300 dark:border-secondary-600 hover:border-secondary-400 dark:hover:border-secondary-500 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                            <h4 className="text-xl font-heading font-bold mt-3 text-right text-text-primary dark:text-white">
                              Technologies Used
                            </h4>
                          </div>
                          <div className="flex-shrink-0 w-10 h-10 bg-secondary-400/10 rounded-xl flex items-center justify-center">
                            <FaCode className="w-5 h-5 text-secondary-400" />
                          </div>
                        </motion.div>
                      )}

                      {/* Achievements - Center Aligned (Full Width) */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <div className="text-center mb-4">
                            <div className="inline-flex items-center space-x-3">
                              <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                                <FaTrophy className="w-5 h-5 text-yellow-500" />
                              </div>
                              <h4 className="text-xl font-heading font-bold text-text-primary dark:text-white">
                                Key Achievements
                              </h4>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                            {experience.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200 dark:border-yellow-700/50 hover:border-yellow-300 dark:hover:border-yellow-600/70 transition-all duration-300 shadow-sm hover:shadow-lg"
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <FaTrophy className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
                                  </div>
                                  <span className="text-slate-800 dark:text-slate-100 text-sm font-medium leading-relaxed text-left group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">{achievement}</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Career Objective */}
            <motion.div
              variants={itemVariants}
              className="card"
            >
              <h2 className="text-xl font-heading font-bold mb-4 text-center text-text-primary dark:text-white">
                Career <span className="text-gradient">Objective</span>
              </h2>
              <p className="text-base text-text-muted dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
                To leverage my technical skills and passion for innovation in a dynamic 
                software engineering role where I can contribute to impactful projects, 
                continue learning cutting-edge technologies, and grow as a professional 
                while making meaningful contributions to the tech industry. I am particularly 
                interested in roles that combine web development, IoT systems, and AI 
                applications to solve real-world problems.
              </p>
            </motion.div>

            {/* Skills Gained */}
            <motion.div
              variants={itemVariants}
              className="mt-16"
            >
              <h2 className="text-2xl font-heading font-bold mb-8 text-center text-text-primary dark:text-white">
                Skills <span className="text-gradient">Developed</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBriefcase className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-text-primary dark:text-white">Technical Expertise</h3>
                  <p className="text-text-muted dark:text-slate-300">
                    Advanced proficiency in React, Node.js, Python, and modern development 
                    frameworks through hands-on project work.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="w-8 h-8 text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-text-primary dark:text-white">Project Management</h3>
                  <p className="text-text-muted dark:text-slate-300">
                    Experience in agile development processes, sprint planning, and 
                    collaborative team environments.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaTrophy className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-text-primary dark:text-white">Problem Solving</h3>
                  <p className="text-text-muted dark:text-slate-300">
                    Strong analytical and debugging skills developed through real-world 
                    software development challenges.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Experience;
