import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/IT21278280',
      icon: FaGithub,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rusith-fernando-aaa77a215/',
      icon: FaLinkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:prabodhawith@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-primary-500'
    }
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: 'Katuneriya, Sri Lanka'
    },
    {
      icon: FaPhone,
      text: '+94 769782381',
      link: 'tel:+94769782381'
    },
    {
      icon: FaEnvelope,
      text: 'prabodhawith@gmail.com',
      link: 'mailto:prabodhawith@gmail.com'
    }
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-slate-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Rusith Fernando
              </h3>
              <p className="text-slate-400 mb-6 max-w-md">
                Software Engineer passionate about creating innovative solutions 
                through web development, IoT, and AI technologies. Always eager 
                to learn and contribute to meaningful projects.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-200 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-300 ${social.color} hover:scale-110 hover:border-primary-500 text-gray-700 dark:text-gray-300`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-slate-400 hover:text-primary-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Info</h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <info.icon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-400 hover:text-primary-500 transition-colors duration-300 text-sm"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-slate-400 text-sm">{info.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm mb-4 sm:mb-0">
            © {currentYear} Rusith Fernando. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-slate-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>using React & TailwindCSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
