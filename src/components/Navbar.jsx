import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or default to true (dark mode)
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document and save to localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const isActivePath = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-b border-slate-800/60`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Premium Portfolio Logo - Text Only */}
          <Link
            to="/"
            className="group relative"
            onClick={closeMenu}
          >
            {/* Portfolio Text Logo */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02, x: 2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="px-4 py-2 bg-gradient-to-br from-primary-400/90 to-primary-500/90 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-primary-300/30"
              >
                <span className="text-white font-black text-lg tracking-wide drop-shadow-sm">
                  PORTFOLIO
                </span>
              </motion.div>

              {/* Animated Accent Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full shadow-sm"
              />
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-full shadow-sm"
              />
            </div>

            {/* Elegant Underline Animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-500 origin-left"
            />
          </Link>

          {/* Premium Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.8, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-5 py-3 rounded-2xl font-medium transition-all duration-300 group overflow-hidden ${
                    isActivePath(item.path)
                      ? 'text-white shadow-lg'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={closeMenu}
                >
                  <span className="relative z-10 transition-all duration-300">
                    {item.name}
                  </span>

                  {/* Active Background */}
                  {isActivePath(item.path) && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-900/30 rounded-2xl border border-primary-700"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.7 }}
                    />
                  )}

                  {/* Hover Background */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-gradient-to-r from-primary-800/20 to-secondary-800/20'
                      : 'opacity-0 group-hover:opacity-100 bg-slate-800/70'
                  }`} />
                </Link>
              </motion.div>
            ))}

            {/* Premium Dark Mode Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="relative p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all duration-500 shadow-lg hover:shadow-xl group mx-2"
              aria-label="Toggle dark mode"
            >
              <motion.div
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                {isDarkMode ? (
                  <FaSun className="w-5 h-5 text-secondary-500 group-hover:text-secondary-400 transition-colors duration-300" />
                ) : (
                  <FaMoon className="w-5 h-5 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                )}
              </motion.div>

              {/* Toggle Shine Effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent dark:from-white/5 dark:to-transparent rounded-2xl pointer-events-none"
              />
            </motion.button>

            {/* Premium Resume Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 hover:from-primary-500 hover:via-secondary-400 hover:to-primary-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Resume</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>

              {/* Premium Button Effects */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />

              {/* Button Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-sm -z-10"
              />
            </motion.a>
          </div>

          {/* Premium Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-300 shadow-md"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="w-5 h-5 text-secondary-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-primary-600" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className={`p-3 rounded-xl shadow-md transition-all duration-300 ${
                isOpen
                  ? 'bg-red-900/40 text-red-400 shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 text-lg text-slate-400 hover:text-white transition-colors duration-300 ${
                    isActivePath(item.path) ? 'text-white' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-800">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center block"
                  onClick={closeMenu}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
