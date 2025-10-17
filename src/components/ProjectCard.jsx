import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="card group cursor-pointer"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-lg mb-4">
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={project.images?.[0] || '/assets/projects/placeholder.jpg'}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="400" height="225" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1e293b"/>
                    <rect x="50" y="50" width="300" height="125" rx="8" fill="#00f7a4" opacity="0.1"/>
                    <text x="200" y="120" text-anchor="middle" fill="#00f7a4" font-family="Arial" font-size="16">${project.title}</text>
                  </svg>
                `)}`;
              }}
            />
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : project.status === 'In Development'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-500 border border-primary-500/30">
                Featured
              </span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Info */}
        <div className="space-y-3">
          {/* Category */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-primary-500 font-medium">
              {project.category}
            </span>
            <div className="flex items-center space-x-2 text-xs text-text-muted dark:text-slate-400">
              <FaCalendarAlt className="w-3 h-3" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-semibold text-text-primary dark:text-slate-200 group-hover:text-primary-500 transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Role */}
          <div className="flex items-center space-x-2 text-xs text-text-muted dark:text-slate-400">
            <FaUser className="w-3 h-3" />
            <span>{project.role}</span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-slate-400 text-xs rounded border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-slate-400 text-xs rounded border border-gray-200 dark:border-gray-700">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center px-3 py-2 bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-400 hover:bg-primary-500/20 dark:hover:bg-primary-500/30 hover:text-primary-600 dark:hover:text-primary-300 text-sm font-medium rounded-lg border border-primary-500/30 dark:border-primary-500/40 transition-all duration-300"
        >
          View Details →
        </Link>
        
        <div className="flex items-center space-x-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all duration-300 group border border-slate-300 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-500 text-slate-700 dark:text-slate-300"
              onClick={(e) => e.stopPropagation()}
              aria-label="View GitHub Repository"
            >
              <FaGithub className="w-4 h-4 group-hover:text-primary-500 transition-colors duration-300" />
            </a>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all duration-300 group border border-slate-300 dark:border-slate-600 hover:border-secondary-400 dark:hover:border-secondary-400 text-slate-700 dark:text-slate-300"
              onClick={(e) => e.stopPropagation()}
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt className="w-4 h-4 group-hover:text-secondary-400 transition-colors duration-300" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
