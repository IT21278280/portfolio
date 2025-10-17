import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaUser, 
  FaTag,
  FaDownload,
  FaEye,
  FaImages,
  FaFilePdf
} from 'react-icons/fa';
import { getProjectBySlug } from '../data/projectsData';
import ImageGallery from '../components/ImageGallery';
import PDFViewer from '../components/PDFViewer';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  useEffect(() => {
    const projectData = getProjectBySlug(slug);
    if (projectData) {
      setProject(projectData);
    } else {
      // Project not found, redirect to projects page
      navigate('/projects');
    }
  }, [slug, navigate]);

  const handleImageClick = (index) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const handlePDFView = (attachment) => {
    setSelectedPDF(attachment);
    setIsPDFViewerOpen(true);
  };

  const handleDownload = (attachment) => {
    const link = document.createElement('a');
    link.href = attachment.url;
    link.download = attachment.filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="inline-block w-12 h-12 border-4 border-gray-600 border-t-primary-500 rounded-full mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-text-muted">Loading project...</p>
        </div>
      </div>
    );
  }

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

  return (
    <>
      <Helmet>
        <title>{project.title} - Rusith Fernando | Project Details</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={`${project.title}, ${project.technologies.join(', ')}, Rusith Fernando`} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb & Back Button */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center space-x-2 text-text-muted hover:text-primary-500 transition-colors duration-300"
                >
                  <FaArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                
                <nav className="flex items-center space-x-2 text-sm text-text-muted">
                  <Link to="/" className="hover:text-primary-500 transition-colors duration-300">
                    Home
                  </Link>
                  <span>/</span>
                  <Link to="/projects" className="hover:text-primary-500 transition-colors duration-300">
                    Projects
                  </Link>
                  <span>/</span>
                  <span className="text-text-primary">{project.title}</span>
                </nav>
              </div>
            </motion.div>

            {/* Project Header */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium border border-primary-500/30">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : project.status === 'In Development'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-secondary-400/20 text-secondary-400 rounded-full text-sm font-medium border border-secondary-400/30">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-text-muted mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-text-muted">
                      <FaCalendarAlt className="w-4 h-4 text-primary-500" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-text-muted">
                      <FaUser className="w-4 h-4 text-primary-500" />
                      <span className="text-sm">{project.role}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-text-muted">
                      <FaTag className="w-4 h-4 text-primary-500" />
                      <span className="text-sm">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center"
                    >
                      <FaGithub className="mr-2 w-4 h-4" />
                      View Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center"
                    >
                      <FaExternalLinkAlt className="mr-2 w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            {project.images && project.images.length > 0 && (
              <motion.div variants={itemVariants} className="mb-12">
                <div 
                  className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => handleImageClick(0)}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#1e293b"/>
                          <rect x="100" y="100" width="1000" height="475" rx="12" fill="#00f7a4" opacity="0.1"/>
                          <text x="600" y="350" text-anchor="middle" fill="#00f7a4" font-family="Arial" font-size="32">${project.title}</text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                        <FaImages className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-heading font-bold mb-6">Project Overview</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.section>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <motion.section variants={itemVariants}>
                    <h2 className="text-2xl font-heading font-bold mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 p-4 bg-surface rounded-lg border border-gray-800"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-text-muted">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Gallery */}
                {project.images && project.images.length > 1 && (
                  <motion.section variants={itemVariants}>
                    <h2 className="text-2xl font-heading font-bold mb-6">Project Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.images.slice(1).map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                          onClick={() => handleImageClick(index + 1)}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 2}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = `data:image/svg+xml;base64,${btoa(`
                                <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="100%" height="100%" fill="#1e293b"/>
                                  <rect x="50" y="50" width="200" height="200" rx="8" fill="#00f7a4" opacity="0.1"/>
                                  <text x="150" y="160" text-anchor="middle" fill="#00f7a4" font-family="Arial" font-size="16">Image ${index + 2}</text>
                                </svg>
                              `)}`;
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Technologies */}
                <motion.div variants={itemVariants} className="bg-surface rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-heading font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Attachments */}
                {project.attachments && project.attachments.length > 0 && (
                  <motion.div variants={itemVariants} className="bg-surface rounded-2xl p-6 border border-gray-800">
                    <h3 className="text-xl font-heading font-semibold mb-4">Project Documents</h3>
                    <div className="space-y-3">
                      {project.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-gray-800">
                          <div className="flex items-center space-x-3">
                            <FaFilePdf className="w-5 h-5 text-red-500" />
                            <div>
                              <p className="font-medium text-text-primary">{attachment.name}</p>
                              <p className="text-sm text-text-muted">{attachment.size}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handlePDFView(attachment)}
                              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                              title="Preview PDF"
                            >
                              <FaEye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDownload(attachment)}
                              className="p-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors duration-300"
                              title="Download PDF"
                            >
                              <FaDownload className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Project Info */}
                <motion.div variants={itemVariants} className="bg-surface rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-xl font-heading font-semibold mb-4">Project Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-text-muted">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Role</p>
                      <p className="font-medium">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Status</p>
                      <p className="font-medium">{project.status}</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Category</p>
                      <p className="font-medium">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={project.images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={galleryIndex}
      />

      {/* PDF Viewer Modal */}
      <PDFViewer
        attachment={selectedPDF}
        isOpen={isPDFViewerOpen}
        onClose={() => setIsPDFViewerOpen(false)}
      />
    </>
  );
};

export default ProjectDetail;
