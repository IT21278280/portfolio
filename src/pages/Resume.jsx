import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaDownload, FaPrint, FaEye, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rusith_Fernando_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Resume - Rusith Fernando | Software Engineer CV</title>
        <meta 
          name="description" 
          content="View and download Rusith Fernando's professional resume. Software Engineer with expertise in web development, IoT, and AI technologies." 
        />
        <meta 
          name="keywords" 
          content="Rusith Fernando resume, CV, Software Engineer, web developer, IoT developer" 
        />
      </Helmet>

      <div className="min-h-screen pt-24 pb-12 print:pt-0 print:pb-0">
        {/* Action Bar - Hidden in print */}
        <div className="print:hidden mb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between bg-surface rounded-lg p-4 border border-gray-800">
              <div>
                <h1 className="text-xl font-heading font-bold">Resume</h1>
                <p className="text-text-muted text-sm">Last updated: October 2024</p>
              </div>
              <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                <button
                  onClick={handlePrint}
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <FaPrint className="w-4 h-4" />
                  <span>Print</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 print:px-8 print:max-w-none">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white text-gray-900 rounded-lg print:rounded-none print:shadow-none shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="bg-gray-900 text-white p-8 print:bg-gray-800">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Rusith Fernando</h1>
                <p className="text-xl text-gray-300 mb-4">Software Engineer | Full-Stack Developer</p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="w-4 h-4" />
                    <span>prabodhawith@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPhone className="w-4 h-4" />
                    <span>+94 769782381</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>Katuneriya, Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaGithub className="w-4 h-4" />
                    <span>github.com/IT21278280</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaLinkedin className="w-4 h-4" />
                    <span>linkedin.com/in/rusith-fernando-aaa77a215</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="p-8 print:p-6">
              {/* Professional Summary */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Passionate Software Engineer pursuing a Bachelor's degree in Information Technology at SLIIT. 
                  Currently gaining hands-on experience as a Software Engineer Intern at OXZON AI, with expertise 
                  in web development, IoT systems, and AI technologies. Demonstrated ability to deliver innovative 
                  solutions through projects like the Real-Time Vehicle Horn Detection System. Strong foundation 
                  in React, Node.js, Python, and Arduino programming with a commitment to continuous learning 
                  and professional growth.
                </p>
              </motion.section>

              {/* Experience */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">
                  Professional Experience
                </h2>
                
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Software Engineer Intern</h3>
                      <p className="text-gray-700 font-medium">OXZON AI</p>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>July 2024 - April 2025</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>Remote</span>
                      </span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Developed and maintained web applications using React and Node.js</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                    <li>Participated in code reviews and implemented best practices for clean, maintainable code</li>
                    <li>Worked on AI integration projects and machine learning model deployment</li>
                    <li>Improved application performance by 25% through code optimization</li>
                    <li>Mentored junior developers on React best practices</li>
                  </ul>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">
                  Education
                </h2>
                
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Bachelor of Science in Information Technology</h3>
                      <p className="text-gray-700 font-medium">Sri Lanka Institute of Information Technology (SLIIT)</p>
                      <p className="text-gray-600">Specialization: Software Engineering</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>2021 - 2025</span>
                      </div>
                      <p className="mt-1">GPA: 3.7/4.0</p>
                    </div>
                  </div>
                  
                  <div className="text-gray-700">
                    <p className="mb-2"><strong>Achievements:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Dean's List for Academic Excellence (2022, 2023)</li>
                      <li>Best Final Year Project Nomination (2024)</li>
                      <li>Active member of SLIIT Computing Society</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Advanced Level (A/L)</h3>
                      <p className="text-gray-700 font-medium">Nalanda College</p>
                      <p className="text-gray-600">Mathematics Stream</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>2019 - 2020</span>
                      </div>
                      <p className="mt-1">Results: Math (A), Physics (B), Chemistry (B)</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Key Projects */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">
                  Key Projects
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Real-Time Vehicle Horn Detection and Alert System</h3>
                    <p className="text-gray-600 text-sm mb-2">Final Year Project | 2024</p>
                    <p className="text-gray-700 mb-2">
                      IoT-based system using Arduino and MEMS microphones to detect vehicle horns and alert 
                      deaf drivers through visual and vibration feedback.
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Technologies:</strong> Arduino, C++, MEMS Microphones, Signal Processing, IoT
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Full-Stack E-Commerce Platform</h3>
                    <p className="text-gray-600 text-sm mb-2">Personal Project | 2024</p>
                    <p className="text-gray-700 mb-2">
                      Modern e-commerce solution with multi-vendor support, real-time inventory management, 
                      and secure payment processing.
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Technologies:</strong> React, Node.js, Express, MongoDB, Stripe API, JWT
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">AI-Powered Customer Service Chatbot</h3>
                    <p className="text-gray-600 text-sm mb-2">Academic Project | 2024</p>
                    <p className="text-gray-700 mb-2">
                      Intelligent chatbot system with natural language processing and sentiment analysis 
                      for automated customer support.
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Technologies:</strong> Python, TensorFlow, NLTK, Flask, MongoDB
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Technical Skills */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">
                  Technical Skills
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Programming Languages</h3>
                    <p className="text-gray-700">JavaScript, Python, Java, C++, HTML5, CSS3</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Frameworks & Libraries</h3>
                    <p className="text-gray-700">React, Node.js, Express.js, TailwindCSS, Material-UI</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Databases</h3>
                    <p className="text-gray-700">MongoDB, MySQL, Firebase</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools & Technologies</h3>
                    <p className="text-gray-700">Git, Docker, VS Code, Postman, Arduino IDE</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT & Hardware</h3>
                    <p className="text-gray-700">Arduino, Raspberry Pi, ESP32/ESP8266, Sensors</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-700">TensorFlow, Scikit-learn, OpenCV, NLTK</p>
                  </div>
                </div>
              </motion.section>

              {/* Certifications */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">
                  Certifications
                </h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">React Developer Certification - Meta</span>
                    <span className="text-gray-600 text-sm">2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Google Analytics Certified - Google</span>
                    <span className="text-gray-600 text-sm">2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">AWS Cloud Practitioner - Amazon Web Services</span>
                    <span className="text-gray-600 text-sm">In Progress</span>
                  </div>
                </div>
              </motion.section>

              {/* Languages */}
              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">
                  Languages
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-600">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sinhala</span>
                    <span className="text-gray-600">Native</span>
                  </div>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Resume;
