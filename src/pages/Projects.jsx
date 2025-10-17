import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { projectsData, getProjectCategories } from '../data/projectsData';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('');

  const categories = ['All', ...getProjectCategories()];
  
  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projectsData.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['All', ...Array.from(techs).sort()];
  }, []);

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      
      const matchesTech = selectedTech === 'All' || selectedTech === '' || 
                         project.technologies.includes(selectedTech);

      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [searchTerm, selectedCategory, selectedTech]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedTech('');
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'All' || selectedTech !== '';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <>
      <Helmet>
        <title>Projects - Rusith Fernando | Software Engineer Portfolio</title>
        <meta 
          name="description" 
          content="Explore Rusith Fernando's software development projects including web applications, IoT systems, and AI solutions. View source code and live demos." 
        />
        <meta 
          name="keywords" 
          content="Rusith Fernando projects, software development, web applications, IoT projects, AI solutions, React projects, Node.js" 
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
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-text-primary dark:text-slate-200">
                My <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-xl text-text-muted dark:text-slate-400 max-w-3xl mx-auto">
                A collection of projects showcasing my skills in web development, 
                IoT systems, and AI applications. Each project represents a unique 
                challenge and learning experience.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted dark:text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-300"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="relative">
                    <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted dark:text-slate-400 w-4 h-4 z-10" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-900 dark:text-white appearance-none cursor-pointer transition-colors duration-300"
                    >
                      {categories.map(category => (
                        <option key={category} value={category} className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                          {category}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Technology Filter */}
                  <div className="relative">
                    <select
                      value={selectedTech}
                      onChange={(e) => setSelectedTech(e.target.value)}
                      className="w-full px-4 pr-8 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-slate-900 dark:text-white appearance-none cursor-pointer transition-colors duration-300"
                    >
                      <option value="" className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">Filter by Technology</option>
                      {allTechnologies.map(tech => (
                        <option key={tech} value={tech} className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                          {tech}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Active Filters & Clear */}
                {hasActiveFilters && (
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {searchTerm && (
                        <span className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm border border-primary-500/30">
                          Search: "{searchTerm}"
                        </span>
                      )}
                      {selectedCategory !== 'All' && (
                        <span className="px-3 py-1 bg-secondary-400/20 text-secondary-400 rounded-full text-sm border border-secondary-400/30">
                          Category: {selectedCategory}
                        </span>
                      )}
                      {selectedTech && selectedTech !== 'All' && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                          Tech: {selectedTech}
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={clearFilters}
                      className="flex items-center space-x-2 px-3 py-1 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      <FaTimes className="w-3 h-3" />
                      <span className="text-sm">Clear Filters</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-slate-600 dark:text-slate-400">
                Showing {filteredProjects.length} of {projectsData.length} projects
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div variants={itemVariants}>
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
                    <FaSearch className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-slate-900 dark:text-white">No projects found</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn-primary"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </motion.div>

            {/* Featured Projects Section */}
            {selectedCategory === 'All' && !searchTerm && !selectedTech && (
              <motion.div variants={itemVariants} className="mt-16">
                <h2 className="text-3xl font-heading font-bold text-center mb-8">
                  Featured <span className="text-gradient">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsData
                    .filter(project => project.featured)
                    .map((project, index) => (
                      <ProjectCard 
                        key={`featured-${project.id}`} 
                        project={project} 
                        index={index}
                      />
                    ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
