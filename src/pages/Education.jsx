import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaTrophy, FaBook } from 'react-icons/fa';
import { educationData, certificationsData } from '../data/experienceData';

const Education = () => {
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
        <title>Education - Rusith Fernando | Academic Journey</title>
        <meta 
          name="description" 
          content="Explore Rusith Fernando's educational background including his IT degree at SLIIT, coursework, projects, and academic achievements." 
        />
        <meta 
          name="keywords" 
          content="Rusith Fernando education, SLIIT, Information Technology, academic achievements, coursework" 
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
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-text-primary dark:text-white">
                Educational <span className="text-gradient">Journey</span>
              </h1>
              <p className="text-xl text-text-muted dark:text-slate-300 max-w-3xl mx-auto">
                My academic path in Information Technology, showcasing the knowledge, 
                skills, and experiences gained through formal education and continuous learning.
              </p>
            </motion.div>

            {/* Education Cards */}
            <div className="space-y-8">
              {educationData.map((education, index) => (
                <motion.div
                  key={education.id}
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
                          <FaGraduationCap className="w-6 h-6 text-primary-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-text-primary dark:text-white">{education.degree}</h3>
                          {education.specialization && (
                            <p className="text-lg text-primary-500 font-medium">{education.specialization}</p>
                          )}
                          <p className="text-text-muted dark:text-slate-300">{education.institution}</p>
                        </div>
                      </div>
                      {education.current && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-text-muted dark:text-slate-300">
                        <FaCalendarAlt className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">{education.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-text-muted dark:text-slate-300">
                        <FaMapMarkerAlt className="w-4 h-4 text-primary-500" />
                        <span className="text-sm">{education.location}</span>
                      </div>
                      {education.gpa && (
                        <div className="flex items-center space-x-2 text-text-muted dark:text-slate-300">
                          <FaAward className="w-4 h-4 text-primary-500" />
                          <span className="text-sm">GPA: {education.gpa}</span>
                        </div>
                      )}
                      {education.results && (
                        <div className="flex items-center space-x-2 text-text-muted dark:text-slate-300">
                          <FaAward className="w-4 h-4 text-primary-500" />
                          <span className="text-sm">{education.results}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-text-muted dark:text-slate-300 mb-6 leading-relaxed">
                      {education.description}
                    </p>

                    {/* Content Grid - Coursework, Subjects, Projects & Achievements */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Coursework */}
                      {education.coursework && (
                        <div className="space-y-3">
                          <h4 className="text-base font-heading font-semibold flex items-center space-x-2 text-text-primary dark:text-white">
                            <div className="w-4 h-4 bg-primary-500/10 rounded-full flex items-center justify-center">
                              <FaBook className="w-2.5 h-2.5 text-primary-500" />
                            </div>
                            <span className="text-sm">Key Coursework</span>
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {education.coursework.map((course, courseIndex) => (
                              <motion.div
                                key={courseIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: courseIndex * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600"
                              >
                                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                                <span className="text-slate-700 dark:text-white text-sm font-medium">{course}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Subjects (for A/L) */}
                      {education.subjects && (
                        <div className="space-y-3">
                          <h4 className="text-base font-heading font-semibold flex items-center space-x-2 text-text-primary dark:text-white">
                            <div className="w-4 h-4 bg-secondary-400/10 rounded-full flex items-center justify-center">
                              <FaBook className="w-2.5 h-2.5 text-secondary-400" />
                            </div>
                            <span className="text-sm">Subjects</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {education.subjects.map((subject, subjectIndex) => (
                              <span
                                key={subjectIndex}
                                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-300 rounded-full text-sm border border-blue-200 dark:border-slate-600 font-medium"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Projects */}
                      {education.projects && (
                        <div className="space-y-3">
                          <h4 className="text-base font-heading font-semibold flex items-center space-x-2 text-text-primary dark:text-white">
                            <div className="w-4 h-4 bg-secondary-400/10 rounded-full flex items-center justify-center">
                              <FaBook className="w-2.5 h-2.5 text-secondary-400" />
                            </div>
                            <span className="text-sm">Notable Projects</span>
                          </h4>
                          <div className="space-y-2">
                            {education.projects.map((project, projectIndex) => (
                              <motion.div
                                key={projectIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-600"
                              >
                                <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-700 dark:text-white text-sm font-medium">{project}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      {education.achievements && education.achievements.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-base font-heading font-semibold flex items-center space-x-2 text-text-primary dark:text-white">
                            <div className="w-4 h-4 bg-yellow-500/10 rounded-full flex items-center justify-center">
                              <FaTrophy className="w-2.5 h-2.5 text-yellow-500" />
                            </div>
                            <span className="text-sm">Achievements</span>
                          </h4>
                          <div className="space-y-2">
                            {education.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-600"
                              >
                                <FaTrophy className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-700 dark:text-white text-sm font-medium">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="mt-16 mb-16">
              <h2 className="text-3xl font-heading font-bold text-center mb-12 text-text-primary dark:text-white">
                Certifications & <span className="text-gradient">Training</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="card"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-primary-500/10 rounded-lg">
                        <FaAward className="w-5 h-5 text-primary-500" />
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        cert.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-heading font-semibold mb-2 text-text-primary dark:text-white">{cert.name}</h3>
                    <p className="text-primary-500 text-sm font-medium mb-2">{cert.issuer}</p>
                    <p className="text-text-muted dark:text-slate-300 text-sm mb-4">{cert.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-text-muted dark:text-slate-300">
                      <span>{cert.date}</span>
                      {cert.credentialId && (
                        <span className="font-mono">{cert.credentialId}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic Focus */}
            <motion.div
              variants={itemVariants}
              className="card"
            >
              <h2 className="text-2xl font-heading font-bold mb-8 text-center text-text-primary dark:text-white">
                Academic <span className="text-gradient">Focus</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <FaGraduationCap className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-text-primary dark:text-white">Software Engineering</h3>
                  <p className="text-text-muted dark:text-slate-300 leading-relaxed">
                    Comprehensive study of software development methodologies,
                    design patterns, and engineering principles.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-secondary-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-400/20 transition-colors duration-300">
                    <FaBook className="w-8 h-8 text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-text-primary dark:text-white">Research & Innovation</h3>
                  <p className="text-text-muted dark:text-slate-300 leading-relaxed">
                    Focus on emerging technologies, IoT systems, and AI applications
                    through research projects and practical implementations.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                    <FaTrophy className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-text-primary dark:text-white">Academic Excellence</h3>
                  <p className="text-text-muted dark:text-slate-300 leading-relaxed">
                    Consistent performance in coursework with recognition through
                    Dean's List achievements and project nominations.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
